let { createSlice, configureStore } = RTK;

let initialState = {
    isLoading: true,
    answer: null,
    randomNumber: null,
    answers: [],
    pageIndex: 0
}

const applicationSlice = createSlice({
    name: 'application',
    initialState,
    reducers: {
        seedState: (state, action) => {
            //   console.log(action);
            Object.keys(action.payload.object).map((key) => {
                state[key] = action.payload.object[key];
            });
        },
        addItemToArray: (state, action) => {
            //   console.log(action.payload)
            state[action.payload.arrayName].push(action.payload.item);
        },
        // Delete item from array by index
        deleteItemFromArrayByIndex: (state, action) => {
            const { arrayName, index } = action.payload;
            state[arrayName].splice(index, 1);
        },
        
        // Delete item from array by ID (or unique property)
        deleteItemFromArrayById: (state, action) => {
            const { arrayName, id, idField = 'id' } = action.payload;
            state[arrayName] = state[arrayName].filter(item => item[idField] !== id);
        },
        
        // Update item in array by index
        updateItemInArrayByIndex: (state, action) => {
            const { arrayName, index, updatedItem } = action.payload;
            if (state[arrayName][index]) {
                state[arrayName][index] = { ...state[arrayName][index], ...updatedItem };
            }
        },
        
        // Update item in array by ID
        updateItemInArrayById: (state, action) => {
            const { arrayName, id, updatedItem, idField = 'id' } = action.payload;
            const index = state[arrayName].findIndex(item => item[idField] === id);
            if (index !== -1) {
                state[arrayName][index] = { ...state[arrayName][index], ...updatedItem };
            }
        },
        
        // Replace entire item in array by ID
        replaceItemInArrayById: (state, action) => {
            const { arrayName, id, newItem, idField = 'id' } = action.payload;
            const index = state[arrayName].findIndex(item => item[idField] === id);
            if (index !== -1) {
                state[arrayName][index] = newItem;
            }
        },
        
        // Clear entire array
        clearArray: (state, action) => {
            const { arrayName } = action.payload;
            state[arrayName] = [];
        },
        
        // Remove multiple items by IDs
        deleteMultipleItemsFromArray: (state, action) => {
            const { arrayName, ids, idField = 'id' } = action.payload;
            state[arrayName] = state[arrayName].filter(item => !ids.includes(item[idField]));
        },
        
        // Add item at specific position
        addItemToArrayAtIndex: (state, action) => {
            const { arrayName, index, item } = action.payload;
            state[arrayName].splice(index, 0, item);
        },
        
        // Move item within array
        moveItemInArray: (state, action) => {
            const { arrayName, fromIndex, toIndex } = action.payload;
            const [movedItem] = state[arrayName].splice(fromIndex, 1);
            state[arrayName].splice(toIndex, 0, movedItem);
        },
        
        // Update multiple items by condition
        updateItemsInArray: (state, action) => {
            const { arrayName, predicate, updates } = action.payload;
            state[arrayName] = state[arrayName].map(item => 
                predicate(item) ? { ...item, ...updates } : item
            );
        },
    }
})

let { seedState, addItemToArray, updateItemInArrayByIndex,
    updateItemInArrayById, deleteItemFromArrayById,
     deleteItemFromArrayByIndex } = applicationSlice.actions;

function createApplicationStore() {
    return configureStore({
        reducer: {
            application: applicationSlice.reducer,
        }
    })
}
/**
  * Functions
*/

// KaTeX processing function for vanilla JS (based on React component logic)
function processTextWithFormulasVanilla(inputText, containerElement = null) {
    if (!inputText) return '';

    // Create a temporary container for processing
    const tempContainer = containerElement || document.createElement('div');

    if (!containerElement) {
        tempContainer.innerHTML = inputText;
    } else {
        tempContainer.innerHTML = inputText;
    }

    // Recursive function to process nodes
    const processNode = async (node) => {
        // Text node
        if (node.nodeType === Node.TEXT_NODE) {
            const text = node.textContent;
            if (!text.trim()) return null;

            // Split text by math delimiters
            const parts = text.split(/(\$\$[^$]+\$\$|\$[^$]+\$)/g);

            if (parts.length === 1) {
                return document.createTextNode(text);
            }

            // Create a fragment to hold processed content
            const fragment = document.createDocumentFragment();

            for (let part of parts) {
                if (!part.trim()) continue;

                // Block formula $$...$$
                if (part.startsWith('$$') && part.endsWith('$$') && part.length > 4) {
                    const formula = part.slice(2, -2);
                    const mathSpan = createMathElement(formula, true);
                    fragment.appendChild(mathSpan);
                }
                // Inline formula $...$
                else if (part.startsWith('$') && part.endsWith('$') && part.length > 2 && !part.startsWith('$$')) {
                    const formula = part.slice(1, -1);
                    const mathSpan = createMathElement(formula, false);
                    fragment.appendChild(mathSpan);
                }
                // Regular text
                else {
                    fragment.appendChild(document.createTextNode(part));
                }
            }

            return fragment;
        }

        // Element node
        if (node.nodeType === Node.ELEMENT_NODE) {
            const tagName = node.tagName.toLowerCase();

            // Skip script, style, svg
            if (tagName === 'script' || tagName === 'style' || tagName === 'svg') {
                return null;
            }

            // Process children
            const children = [];
            const childNodes = Array.from(node.childNodes);

            for (let child of childNodes) {
                const processedChild = await processNode(child);
                if (processedChild) {
                    children.push(processedChild);
                }
            }

            // Create new element with same tag
            const newElement = document.createElement(tagName);

            // Copy attributes
            Array.from(node.attributes).forEach(attr => {
                if (attr.name !== 'style') {
                    newElement.setAttribute(attr.name, attr.value);
                }
            });

            // Copy styles
            if (node.style.cssText) {
                newElement.style.cssText = node.style.cssText;
            }

            // Append processed children
            children.forEach(child => {
                if (child instanceof DocumentFragment) {
                    newElement.appendChild(child);
                } else {
                    newElement.appendChild(child);
                }
            });

            // Special handling for void elements
            if (['br', 'hr', 'img'].includes(tagName)) {
                if (tagName === 'img' && node.src) {
                    newElement.src = node.src;
                    newElement.alt = node.alt || '';
                }
            }

            return newElement;
        }

        return null;
    };

    // Process all child nodes
    const processAllNodes = async () => {
        const fragment = document.createDocumentFragment();
        const childNodes = Array.from(tempContainer.childNodes);

        for (let child of childNodes) {
            const processed = await processNode(child);
            if (processed) {
                fragment.appendChild(processed);
            }
        }

        return fragment;
    };

    // Return a promise that resolves with the processed content
    return processAllNodes();
}

// Helper function to create KaTeX elements
function createMathElement(formula, displayMode = false) {
    const container = document.createElement(displayMode ? 'div' : 'span');
    container.className = displayMode ? 'katex-block-wrapper' : 'katex-inline-wrapper';

    try {
        const html = katex.renderToString(formula, {
            displayMode: displayMode,
            throwOnError: false,
            output: 'html',
            strict: false
        });
        container.innerHTML = html;

        if (displayMode) {
            container.style.overflow = 'visible';
            container.style.minHeight = '50px';
        }
    } catch (error) {
        console.error('KaTeX rendering error:', error);
        container.innerHTML = `<span class="text-danger">${formula}</span>`;
        container.style.color = '#cc0000';
    }

    return container;
}

// Main function to set innerHTML with KaTeX processing
async function setMathInnerHTML(element, htmlContent) {
    if (!element) return;

    // Clear the element
    element.innerHTML = '';

    // Create a temporary div to parse HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;

    // Process the content
    const processElement = async (el) => {
        const children = Array.from(el.childNodes);
        const fragment = document.createDocumentFragment();

        for (let child of children) {
            if (child.nodeType === Node.TEXT_NODE) {
                const processed = await processTextNode(child);
                if (processed) fragment.appendChild(processed);
            } else if (child.nodeType === Node.ELEMENT_NODE) {
                const processed = await processElementNode(child);
                if (processed) fragment.appendChild(processed);
            }
        }

        return fragment;
    };

    const processTextNode = async (node) => {
        const text = node.textContent;
        if (!text.trim()) return null;

        // Split by math delimiters
        const parts = text.split(/(\$\$[^$]+\$\$|\$[^$]+\$)/g);

        if (parts.length === 1) {
            return document.createTextNode(text);
        }

        const fragment = document.createDocumentFragment();

        for (let part of parts) {
            if (!part) continue;

            // Block formula
            if (part.startsWith('$$') && part.endsWith('$$') && part.length > 4) {
                const formula = part.slice(2, -2);
                const mathElement = createMathElement(formula, true);
                fragment.appendChild(mathElement);
            }
            // Inline formula
            else if (part.startsWith('$') && part.endsWith('$') && part.length > 2) {
                const formula = part.slice(1, -1);
                const mathElement = createMathElement(formula, false);
                fragment.appendChild(mathElement);
            }
            // Regular text
            else {
                fragment.appendChild(document.createTextNode(part));
            }
        }

        return fragment;
    };

    const processElementNode = async (node) => {
        const tagName = node.tagName.toLowerCase();

        // Skip script/style tags
        if (['script', 'style', 'svg'].includes(tagName)) {
            return null;
        }

        // Create new element
        const newElement = document.createElement(tagName);

        // Copy attributes
        Array.from(node.attributes).forEach(attr => {
            if (attr.name !== 'style') {
                newElement.setAttribute(attr.name, attr.value);
            }
        });

        if (node.style.cssText) {
            newElement.style.cssText = node.style.cssText;
        }

        // Process children
        const children = Array.from(node.childNodes);
        for (let child of children) {
            if (child.nodeType === Node.TEXT_NODE) {
                const processed = await processTextNode(child);
                if (processed) newElement.appendChild(processed);
            } else if (child.nodeType === Node.ELEMENT_NODE) {
                const processed = await processElementNode(child);
                if (processed) newElement.appendChild(processed);
            }
        }

        return newElement;
    };
    //console.log(processedContent);
    // Process and append
    const processedContent = await processElement(tempDiv);
    element.appendChild(processedContent);
}

// Simplified version for immediate use
function renderMathInHTML(htmlString) {
    return new Promise(async (resolve) => {
        const tempDiv = document.createElement('div');
        await setMathInnerHTML(tempDiv, htmlString);
        resolve(tempDiv.innerHTML);
    });
}

function processquizwithrandomnumber({
    quizString = "this {={var1-10}+1} some {=2+{var1-10}} that can be {=3+{var1-10}} with a {=4+{var1-10}} function",
    answer,
    randomNumber
}) {

    if (quizString.includes("{var1-10}")) {
        // function extract([beg, end]) {
        //     const matcher = new RegExp(`${beg}(.*?)${end}`, "gm");
        //     const normalise = (str) => str.slice(beg.length, end.length * -1);
        //     return function (str) {
        //         return str.match(matcher).map(normalise);
        //     };
        // }
        //    let parser = new formulaParser.Parser(); // It returns `Object {error: null, result: 14}`
        const searchRegExp = /{var1-10}/g;
        const replaceWith = randomNumber.toString();
        quizString = quizString.replace(searchRegExp, replaceWith);
        answer = answer.replace(searchRegExp, replaceWith);
        //  answer = Math.round(parser.parse(answer).result * 10000) / 10000;
        let stringExtractor = basicfirebasecrudauthservices.extract(["{=", "}"]);
        let stuffIneed = stringExtractor(quizString);
        for (let i = 0; i < stuffIneed.length; i++) {


            let feedback = basicfirebasecrudauthservices.createNewDraft([["=" + stuffIneed[i]]])[0][0];
            feedback = Math.round(feedback * 10000) / 10000;
            quizString = quizString.replace("{=" + stuffIneed[i] + "}", feedback);
        }
        return {
            quizString: quizString,
            answer: answer
        }
    } else {
        return {
            quizString: quizString,
            answer: answer
        }
    }
}

async function getUser() {
    let localstrg = loadState();
    let application = !!localstrg && !!localstrg?.application && (/(.+)@(.+){2,}\.(.+){2,}/.test(localstrg.application?.email)) ? {
        ...localstrg.application,
        userEmail: !!localstrg?.application ? localstrg.application?.email.replace(/[^a-zA-Z0-9]/g, "_") : null
    } : null
    return application
}

async function sha1(message) {
    // Convert string to an array of bytes
    const msgUint8 = new TextEncoder().encode(message);
    // Hash the message using the Web Crypto API
    const hashBuffer = await crypto.subtle.digest('SHA-1', msgUint8);
    // Convert ArrayBuffer to Array of bytes
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    // Convert bytes to hex string
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

async function getHashesArray(array) {
    try {
        const hashes = await Promise.all(array.map(item => sha1(item)));
        return hashes;
    } catch (error) {
        return [];
    }
}

const areArraysEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false; // Quick length check

    const sorted1 = arr1.toSorted();
    const sorted2 = arr2.toSorted();

    return sorted1.every((value, index) => value === sorted2[index]);
};

let vanillajscrudutilities = Object.assign({},
    {
        setMathInnerHTML: setMathInnerHTML,
        processquizwithrandomnumber: processquizwithrandomnumber,
        getUser: getUser,
        sha1: sha1,
        createApplicationStore: createApplicationStore,
        seedState: seedState,
        addItemToArray: addItemToArray,
        getHashesArray: getHashesArray,
        areArraysEqual: areArraysEqual,
        updateItemInArrayByIndex,
    updateItemInArrayById, deleteItemFromArrayById,
     deleteItemFromArrayByIndex
    })

window.vanillajscrudutilities = vanillajscrudutilities