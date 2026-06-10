// ======================
// QUIZ RENDER FUNCTIONS (Replaces Classes)
// ======================

/**
 * Renders radio button quiz (single choice)
 */
async function renderRadioQuiz(containerId, choices, onSelect) {
    const container = $(`#${containerId}`);
    if (!container) return;
    
    const mixedAnswers = shuffle([...choices]);
    
    // Process math in choices
    const choicesWithMath = await Promise.all(
        mixedAnswers.map(async (choice) => {
            const tempDiv = document.createElement('div');
            await setMathInnerHTML(tempDiv, choice);
            return { original: choice, html: tempDiv.innerHTML };
        })
    );
    
    // Generate markup
    const markup = choicesWithMath.map((item, index) => `
        <div class="form-check">
            <input class="form-check-input quiz-radio" type="radio" name="quizRadio" id="radio_${index}" data-value="${item.original}">
            <label class="form-check-label" for="radio_${index}">${item.html}</label>
        </div>
    `).join('');
    
    container.innerHTML = markup;
    
    // Attach event listeners
    const radioButtons = container.querySelectorAll('.quiz-radio');
    radioButtons.forEach(radio => {
        radio.addEventListener('click', (e) => {
            onSelect(e.target.getAttribute('data-value'));
        });
    });
}

/**
 * Renders checkbox quiz (multiple choice)
 */
async function renderCheckboxQuiz(containerId, choices, onToggle) {
    const container = $(`#${containerId}`);
    if (!container) return;
    
    const mixedAnswers = shuffle([...choices]);
    
    // Process math in choices
    const choicesWithMath = await Promise.all(
        mixedAnswers.map(async (choice) => {
            const tempDiv = document.createElement('div');
            await setMathInnerHTML(tempDiv, choice);
            return { original: choice, html: tempDiv.innerHTML };
        })
    );
    
    // Generate markup
    const markup = choicesWithMath.map((item, index) => `
        <div class="form-check">
            <input class="form-check-input quiz-checkbox" type="checkbox" id="checkbox_${index}" data-value="${item.original}">
            <label class="form-check-label" for="checkbox_${index}">${item.html}</label>
        </div>
    `).join('');
    
    container.innerHTML = markup;
    
    // Attach event listeners
    const checkboxes = container.querySelectorAll('.quiz-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', (e) => {
            onToggle(e.target.getAttribute('data-value'));
        });
    });
}

/**
 * Clears quiz container
 */
function clearQuizContainer(containerId) {
    const container = $(`#${containerId}`);
    if (container) container.innerHTML = '';
}

// ======================
// UPDATED updateQuiz FUNCTION
// ======================

async function updateQuiz(activePage) {
    const quiz = resQuizesArray.data[activePage];
    if (!quiz) return;
    
    // Reset UI elements
    $("#quizformdataarray").style.display = "none";
    $("#usercalculations").style.display = "none";
    $("#inputFormula").value = "";
    $("#resformula").innerHTML = "<small class='text-muted'>Песочница, попробуйте =2+2 или =AVERAGE(B2:B13)</small>";
    $("#answerButton").disabled = false;
    
    // Set headers and UI visibility
    $("#quizTitle").innerHTML = quiz.title;
    $("#quizHeader").innerText = `${quiz.header} ${activePage + 1}`;
    $("#userComment").style.display = "block";
    $("#answerButton").className = "btn btn-outline-primary m-3";
    $("#answerButton").style.display = "block";
    
    await setMathInnerHTML($("#quizString"), quiz.text);
    
    // Clear previous quiz options
    clearQuizContainer("quizChecks");
    
    // Handle case with random number
    if (quiz?.type === "casewithrandomnumber" && Array.isArray(quiz?.dataArray)) {
        $("#usercalculations").style.display = "block";
        $("#quizformdataarray").innerHTML = markupForDataArray(quiz.dataArray) + "<br>" + quiz.text + "<hr>";
        $("#quizformdataarray").style.display = "block";
        if (quiz?.hint) {
            await setMathInnerHTML($("#quizHint"), quiz.hint);
        }
    }
    
    // Handle multiple choices
    if (quiz.type === "multiplechoices") {
        if (quiz.answers.length > 1) {
            // Multiple correct answers (checkboxes)
            await renderCheckboxQuiz("quizChecks", quiz.choices, doToggleCheck);
        } else {
            // Single correct answer (radio buttons)
            await renderRadioQuiz("quizChecks", quiz.choices, doCheck);
        }
    }
    
    // Handle accounting
    if (quiz.type === "accounting") {
        const markup = `
            <div class="row m-1 g-1">
                <div class="col-12 col-md-6">
                    <select class="form-select form-select-sm" aria-label="debet" id="debet" name="debet">
                        <option value="...">Дебет</option>
                        ${quiz.choices.map(item => `<option value="${item}">${item}</option>`).join("")}
                    </select>
                </div>
                <div class="col-12 col-md-6">
                    <select class="form-select form-select-sm" aria-label="credit" id="credit" name="credit">
                        <option value="...">Кредит</option>
                        ${quiz.choices.map(item => `<option value="${item}">${item}</option>`).join("")}
                    </select>
                </div>
            </div>
        `;
        $("#accountingblock").innerHTML = markup;
        $("#accountingblock").style.display = "block";
    }
    
    // Handle quiz with random number
    if (quiz.type === "quizwithrandomnumber") {
        const randomNumber = store.getState().application.selectedoption || Math.random() * 9 + 1;
        const processed = processQuizWithRandomNumber({
            quizString: quiz.text,
            answer: quiz.answer,
            randomNumber
        });
        await setMathInnerHTML($("#quizString"), processed.quizString);
    }
}

// ======================
// SIMPLIFIED EVENT HANDLERS
// ======================

// No need to recreate choiceQuiz and chectQuiz - they're gone!
// The event handlers remain the same
function doCheck(value) {
    store.dispatch(applicationSlice.actions.setSelectedOption(value));
}

function doToggleCheck(value) {
    const { selectedoptions } = store.getState().application;
    const index = selectedoptions.indexOf(value);
    
    if (index > -1) {
        store.dispatch(applicationSlice.actions.setSelectedOptions(
            selectedoptions.filter((_, i) => i !== index)
        ));
    } else {
        store.dispatch(applicationSlice.actions.setSelectedOptions([...selectedoptions, value]));
    }
}

// ======================
// ALTERNATIVE: REACTIVE APPROACH WITH EVENT DELEGATION
// ======================

/**
 * If you prefer a single event listener pattern (more efficient for dynamic content)
 */
function setupQuizEventDelegation() {
    const quizContainer = $("#quizChecks");
    if (!quizContainer) return;
    
    // Handle radio button clicks
    quizContainer.addEventListener('click', (e) => {
        const radio = e.target.closest('.quiz-radio');
        if (radio) {
            const value = radio.getAttribute('data-value');
            if (value) doCheck(value);
        }
        
        // Handle checkbox clicks
        const checkbox = e.target.closest('.quiz-checkbox');
        if (checkbox) {
            const value = checkbox.getAttribute('data-value');
            if (value) doToggleCheck(value);
        }
    });
}

// Initialize event delegation once (call this during app initialization)
setupQuizEventDelegation();

// ======================
// BONUS: QUIZ FACTORY FUNCTION (Alternative Pattern)
// ======================

/**
 * More flexible factory pattern if you need multiple quiz instances
 */
function createQuizRenderer(containerId) {
    return {
        async renderRadio(choices, onSelect) {
            await renderRadioQuiz(containerId, choices, onSelect);
        },
        
        async renderCheckbox(choices, onToggle) {
            await renderCheckboxQuiz(containerId, choices, onToggle);
        },
        
        clear() {
            clearQuizContainer(containerId);
        }
    };
}

// Usage example (if you still want instances but without classes):
// const quizRenderer = createQuizRenderer("quizChecks");
// await quizRenderer.renderRadio(quiz.choices, doCheck);
// await quizRenderer.renderCheckbox(quiz.choices, doToggleCheck);
