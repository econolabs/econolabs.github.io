

// import { getApps, deleteApp, initializeApp } from 'firebase/app';
// import { getDatabase, get, ref, update, push, child } from 'firebase/database';
//import { createSlice, configureStore } from '@reduxjs/toolkit';
//import { createApi, setupListeners, fakeBaseQuery } from '@reduxjs/toolkit/query';

//import { debounce } from 'lodash-es';

let { createSlice, configureStore } = RTK;
let { createApi, setupListeners, fakeBaseQuery } = RTKQ;

let { alphabet, loadState, shuffle, getFirebaseNode, updateFirebaseNode, getFirebaseNodeKey } = basicfirebasecrudauthservices;


/**
  * Const and Selectors
*/

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const parser = new formulaParser.Parser();

//const store = createRtkFirebaseStore();


//let resOpenQuizes;
//let resUserAvatar;
let resUserPosts;
let resQuizesArray;
//let resOpenQuizesCasesIds;
let resOpenQuizCaseById;

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

function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
}

// Example usage
const processChange = debounce(() => console.log('Saved!'));
processChange();

function foundQuiz(text, quizes) {
    //   console.log(text);
    //   console.log(quizes);
    let res = false;
    quizes.forEach(item => {
        if (typeof (item) === 'string' && item.includes(text)) { res = true }
    })
    return res
}

function markupForDataArray(data) {
    let markup =
        `<div class='row g-2'>
       <div class="col-1">
           <input type="text" class="form-control form-control-sm m-1" placeholder="" aria-label="letter" disabled>
       </div>   
    ` +
        data[0].map((_, index) => {
            return `
           <div class="col">
               <input type="text" class="form-control form-control-sm m-1" placeholder="${alphabet[index]}" aria-label="letter" disabled>
           </div>        
     `
        }).join("")
        + "</div>";
    markup += data.map((row, index) => {
        return `
       <div class="row g-2">
           <div class="col-1">
               <input type="text" class="form-control form-control-sm m-1" placeholder="${0 + index + 1}" aria-label="number" disabled>
           </div>
           <div class="col">
               <input type="text" class="form-control form-control-sm m-1" placeholder="${row[0]}" aria-label="month">
           </div>
           <div class="col">
               <input type="text" class="form-control form-control-sm m-1" placeholder="${row[1]}" aria-label="X1">            
           </div>
           <div class="col">
               <input type="text" class="form-control form-control-sm m-1" placeholder="${row[2]}" aria-label="X2">            
           </div>
            <div class="col">
               <input type="text" class="form-control form-control-sm m-1" placeholder="${row[3]}" aria-label="Y">            
           </div>
       </div>`
    }).join("");


    markup += `<div class="row g-3 align-items-center">
   <div class="col-auto">
     <label for="formulacell" class="col-form-label">A${data.length + 1}</label>
   </div>
   <div class="col-auto">
     <input name="formulacell" type="text id="formulacell" class="form-control" aria-describedby="formulacell">
   </div>
    <div class="col-auto">
       <span class="form-text" id="formularesult">...</span>
     </div>
   </div>`

    return markup
}


function processquizwithrandomnumber({
    quizString = "this {={var1-10}+1} some {=2+{var1-10}} that can be {=3+{var1-10}} with a {=4+{var1-10}} function",
    answer,
    randomNumber
}) {

    if (quizString.includes("{var1-10}")) {
        function extract([beg, end]) {
            const matcher = new RegExp(`${beg}(.*?)${end}`, "gm");
            const normalise = (str) => str.slice(beg.length, end.length * -1);
            return function (str) {
                return str.match(matcher).map(normalise);
            };
        }
        let parser = new formulaParser.Parser(); // It returns `Object {error: null, result: 14}`
        const searchRegExp = /{var1-10}/g;
        const replaceWith = randomNumber.toString();
        quizString = quizString.replace(searchRegExp, replaceWith);
        answer = answer.replace(searchRegExp, replaceWith);
        answer = Math.round(parser.parse(answer).result * 10000) / 10000;
        let stringExtractor = extract(["{=", "}"]);
        let stuffIneed = stringExtractor(quizString);
        for (let i = 0; i < stuffIneed.length; i++) {
            let feedback = Math.round(parser.parse(stuffIneed[i]).result * 10000) / 10000;
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

function doLogin(e) {
    e.preventDefault();
    let application = {
        email: document.getElementById("emailInput")?.value,
        user: document.getElementById("userInput")?.value,
    }
    saveState({ application })
    window.location.reload();
}


function identifyQuiz(title, text) {
    if (typeof (text) === 'string' && text.includes('<br>')) {
        //       console.log(item.quizString.split('<br>')[0])
        return title + " " + text.split('<br>')[0]
    } else {
        return title + " " + !!text ? text : ""
    }
}






class EconolabsCheckQuiz {
    constructor(selector, callBack) {
        this.ul = $(`#${selector}`);
        this.selector = selector;
        this.callBack = callBack
    }

    addEvents(choices) {

        let mixedAnswers = shuffle([...choices]);

        let markup = mixedAnswers.map((item, index) => {
            return `
        <div class="form-check">
          <input class="form-check-input ${this.selector}" type="checkbox" value="" id="${index}">
          <label class="form-check-label" for='${index}'>
          ${item}
          </label>
        </div>`
        }).join("");

        this.ul.innerHTML = markup;

        let quizoptions = document.getElementsByClassName(this.selector);
        for (var i = 0; i < quizoptions.length; i++) {
            quizoptions[i].addEventListener('click',
                (e) => { this.callBack(mixedAnswers[e.target.id]) })
        }
    }

}

class EconolabsChoiceQuiz {
    constructor(selector, callBack) {
        this.ul = $(`#${selector}`);
        this.selector = selector;
        this.callBack = callBack
    }

    addEvents(choices) {

        let mixedAnswers = shuffle([...choices]);

        let markup = mixedAnswers.map((item, index) => {
            return `<div class="form-check">
        <input class="form-check-input ${this.selector}" type="radio" name="quizRadio" id="${index}">
        <label class="form-check-label" for='${index}'>${item}</label>
    </div>`
        }).join("");

        this.ul.innerHTML = markup;

        let quizoptions = document.getElementsByClassName(this.selector);
        for (var i = 0; i < quizoptions.length; i++) {
            quizoptions[i].addEventListener('click',
                (e) => { this.callBack(mixedAnswers[e.target.id]) })
        }
    }

}



//Firebase
// let app;

// if (getApps().length > 1) {
//     deleteApp(getApps()[1])
//         .then(function () {
//             console.log("App deleted successfully");
//         })
//         .catch(function (error) {
//             console.log("Error deleting app:", error);
//         });
// }
// if (getApps().length < 1) {
//     let fireconf = {};
//     try {
//         fireconf = document.body.dataset;
//     } catch (err) {
//         throw new Error('Unable to get params' + err)
//     }
//     const firebaseConfig = {
//         apiKey: fireconf.api,
//         databaseURL: "https://" + fireconf.base + ".firebaseio.com",
//         appId: fireconf.app
//     };
//     app = initializeApp(firebaseConfig);
// }
// const db = getDatabase();





/**
* Store
*/






const api = createApi({
    reducerPath: 'api',
    tagTypes: ["OpenQuiz", "Quiz", "Answer", "Avatar", "Post", "QuizCase", "OpenQuizCase", "OpenAvatar",],
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({

        fetchOpenAvatar: builder.query({
            async queryFn(url = "johndoe_gmail_com") {
                try {
                    let list = await getFirebaseNode({ url: "openavatars/" + url, type: "object" });
                    //     console.log(list)
                    return { data: list }
                }
                catch (err) { console.log(err); return { error: err } }
            },
            providesTags: (result, error, id) => [{ type: "OpenAvatar", id }]
        }),


        fetchQuizesCasesByDate: builder.query({
            async queryFn(url = "/currentDay/Wed__Feb_14__2024/") {
                try {
                    let quizes = await getFirebaseNode({ url: url + "posts", type: "array" });
                    let cases = await getFirebaseNode({ url: url + "cases", type: "array" });
                    // console.log([
                    //     ...quizes.map(item => { return { ...item, source: "posts" } }),
                    //     ...cases.map(item => { return { ...item, source: "cases" } })
                    // ]);
                    return {
                        data: [
                            ...quizes.map(item => { return { ...item, source: "posts" } }),
                            ...cases.map(item => { return { ...item, source: "cases" } })
                        ]
                    }
                }
                catch (err) { console.log(err); return { error: err } }
            },
            providesTags: (result, error, arg) =>
                result
                    ? [...result.map(({ id }) => ({ type: "QuizCase", id })), "QuizCase"]
                    : ["QuizCase"],
        }),

        fetchOpenQuizCaseById: builder.query({
            async queryFn(id) {
                try {
                    let quiz = await getFirebaseNode({ url: "quizescases/quizesCasesIds/" + id, type: "object" });
                    return { data: !!quiz ? quiz : {} };
                } catch (err) {
                    console.log(err);
                    return { error: err };
                }
            },
            providesTags: (result, error, id) => [{ type: "OpenQuizCase", id }]
        }),

        fetchOpenQuizesCasesIds: builder.query({
            async queryFn() {
                try {
                    let list = await getFirebaseNode({ url: "quizescases/quizesCasesIds", type: "array" });
                    return { data: list };
                } catch (err) {
                    console.log(err);
                    return { error: err };
                }
            },
            providesTags: (result = [], error2, arg) => [
                "QuizCase",
                ...result.map(({ id }) => ({ type: "QuizCase", id }))
            ]
        }),


        fetchUserPosts: builder.query({
            async queryFn(userEmail) {
                //    console.log(userEmail)
                try {
                    let userPosts = await getFirebaseNode({ url: "usersCraft/" + userEmail + "/posts", type: "array" });
                    //   console.log(userPosts);
                    return { data: Array.isArray(userPosts) ? userPosts : [] }
                }
                catch (err) { console.log(err); return { error: err } }
            },
            providesTags: (result, error, id) => [{ type: "Post", id }]
        }),



        fetchQuizesArray: builder.query({
            async queryFn() {
                let d = new Date();
                let currentDay = new Intl.DateTimeFormat("en", {
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                })
                    .format(new Date(d.getFullYear(), d.getMonth(), d.getDate()))
                    .replace(/[^a-zA-Z0-9]/g, "_");
                //       console.log(currentDay);
                try {
                    let currentQuizArray = await getFirebaseNode({
                        url: "/currentquiz/" + currentDay + "/",
                        type: "array"
                    });

                    //    console.log(currentQuizArray);

                    let newCurrentQuizAddedIndexes = [];
                    let resArray = !!window?.quizesSets ?
                        window.quizesSets.map(item => {
                            let index = currentQuizArray.findIndex(currentquiz => item.id === currentquiz.id);
                            if (index > -1) {
                                currentQuizArray[index];
                                newCurrentQuizAddedIndexes.push(index);
                                return currentQuizArray[index]
                            } else { return item }
                        })
                        : [];
                    //    console.log(newCurrentQuizAddedIndexes);
                    currentQuizArray = currentQuizArray.filter((item, index) => !newCurrentQuizAddedIndexes.includes(index) && !!item.id);
                    resArray = [...resArray, ...currentQuizArray];
                    //    console.log(resArray);
                    let quizeswithtype = resArray.map(quiz => {
                        let updatedquiz = { ...quiz };
                        if (Array.isArray(quiz?.quizes)) {
                            updatedquiz = { ...quiz, type: "onerandommanyanswers" }
                        }
                        if (Array.isArray(quiz?.choices) && Array.isArray(quiz?.answers) && quiz?.type !== "accounting") {
                            updatedquiz = { ...quiz, type: "multiplechoices" }
                        }

                        if (!!quiz?.answer && quiz.answer.includes("{var1-10}")) {
                            //       console.log("Quiz With Random Number");
                            updatedquiz = { ...quiz, type: "quizwithrandomnumber" }
                        }
                        return updatedquiz
                    })
                    return { data: quizeswithtype }
                }
                catch (err) { console.log(err); return { error: err } }
            },
            providesTags: (result, error, id) => [{ type: "Quiz", id }]
        }),
        // fetchUserAvatar: builder.query({
        //     async queryFn(userEmail) {
        //         try {
        //             let openAvatarsResponse = await getFirebaseNode({
        //                 url: "/openavatars/" + userEmail,
        //                 type: "object"
        //             });

        //             return { data: openAvatarsResponse }
        //         }
        //         catch (err) { console.log(err); return { data: null, error: err } }
        //     },
        //     providesTags: (result, error, id) => [{ type: "Avatar", id }]
        // }),
        updatesForOpenQuizes: builder.mutation({
            async queryFn({ base = "", updates = { temp: "temp" }
            }) {
                let fireUpdates = {};
                Object.keys(updates).forEach(objKey => {
                    fireUpdates[base + "/" + objKey] = updates[objKey]
                });
                //     console.log(fireUpdates);
                try { await updateFirebaseNode(fireUpdates) }
                catch (err) { console.log(err); return { error: err } }
                return { data: fireUpdates }
            },
            invalidatesTags: ["Answer"]
        }),

        // fetchOpenQuizes: builder.query({
        //     async queryFn() {
        //         try {
        //             let openQuizes = await getFirebaseNode({ url: "openquizes/", type: "array" });
        //             //    console.log(openQuizes);
        //             return { data: openQuizes }
        //         }
        //         catch (err) { console.log(err); return { error: err } }
        //     },
        //     providesTags: (result, error, id) => [{ type: "OpenQuiz", id }]
        // }),

        // fetchOpenQuiz: builder.query({
        //     async queryFn(id) {
        //         try {
        //             let quiz = await getFirebaseNode({ url: "openquizes/" + id, type: "object" });
        //             console.log(quiz);
        //             return { data: quiz }
        //         }
        //         catch (err) { console.log(err); return { error: err } }
        //     },
        //     providesTags: (result, error, id) => [{ type: "OpenQuiz", id }]
        // }),
    }),
})



const initialState = {
    email: '',
    userEmail: "",
    user: '',
    avatarUrl: '',
    isLoading: true,
    selectedoption: null,
    selectedoptions: [],
    activePage: null,
    correctquizes: [],
    currentDay: null,
    openavatars: {}
}



const applicationSlice = createSlice({
    name: 'application',
    initialState,
    reducers: {
        seedState: (state, action) => {
          Object.keys(action.payload.object).map((key) => {
          state[key] = action.payload.object[key];
          });
        },
        setOpenAvatars: (state, action) => {
            state.openavatars = action.payload
        },
        setCurrentDate: (state, action) => {
            state.currentDay = action.payload
        },
        loadCorrectquizes: (state, action) => { state.correctquizes = action.payload },
        addCorrectQuiz: (state, action) => { state.correctquizes.push(action.payload) },

        setInitialQuizOptions: (state) => {
            state.selectedoptions = [];
            state.selectedoption = Math.random() * 9 + 1
        },
        setSelectedOptions: (state, action) => { state.selectedoptions = action.payload },
        setSelectedOption: (state, action) => { state.selectedoption = action.payload },


        setUser: (state, action) => {
            state.email = action.payload.email,
                state.userEmail = action.payload.userEmail,
                state.user = action.payload.user,
                state.avatarUrl = action.payload?.avatarUrl ? action.payload?.avatarUrl : 'https://images.unsplash.com/photo-1536300099515-6c61b290b654?q=80&w=200&auto=format&fit=crop',
                state.isLoading = false
        },
        setAvatar: (state, action) => {
            state.avatarUrl = action.payload
        },
        setActivePage: (state, action) => {
            state.activePage = action.payload;
        }
    }
})

const store = configureStore({
    reducer: {
        application: applicationSlice.reducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})

setupListeners(store.dispatch);









function doSaveQuiz(answer, type, content, quizString) {
    let { userEmail, user, avatarUrl, email, activePage } = store.getState().application;
    let { title, theme, text, hint = "", dataArray = [] } = resQuizesArray.data[activePage];
    let idPost = getFirebaseNodeKey("usersCraft/" + userEmail + "/posts")
    let currentDay = new Intl.DateTimeFormat("en", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
    })
        .format(new Date())
        .replace(/[^a-zA-Z0-9]/g, "_");

    let postObject = {
        id: idPost,
        title: title,
        theme: theme,
        comment: title + " (" + theme + ")",
        type, answer, content, quizString,
        deleted: false,
        email: email,
        user: user,
        avatarUrl: avatarUrl,
        date: new Intl.DateTimeFormat("ru", {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
        }).format(new Date()), //Date().toJSON()
    };

    let currentDayObject = {
        id: idPost,
        title: title,
        theme: theme,
        email: email,
        user: user,
        avatarUrl: avatarUrl,
        timestamp: +Date.now(),
    };
    let updates = {};

    updates["usersCraft/" + userEmail + "/posts/" + idPost] = postObject;
    updates[
        "currentDay/" + currentDay + "/posts/" + idPost
    ] = currentDayObject;
    //     console.log(updates);

    store.dispatch(api.endpoints.updatesForOpenQuizes.initiate({
        base: "",
        updates: updates
    }))
        .then(() => {
            //       console.log(identifyQuiz(title, text));
            store.dispatch(applicationSlice.actions.addCorrectQuiz(identifyQuiz(title, text)));
            $("#answerButton").classList.toggle("btn-outline-primary");
            $("#answerButton").classList.toggle("btn-success");
            if ((typeof hint === 'string') && hint.length > 0) {
                setMathInnerHTML($("#quizHint"), hint).catch(console.error)
            }
            //  $("#quizHint").innerHTML = hint;
            $("#answerButton").disabled = true;
        });
}


function handleCheckQuiz(e) {
    e.preventDefault();
    //   console.log("Do Calculate");
    let { selectedoption, selectedoptions, activePage } = store.getState().application;
    let { text, answer, hint = "",
        dataArray = [], type, answers = []
    } = resQuizesArray.data[activePage];
    let checkquiz = false, comment = "", reqanswer, quizString, posttype;
    $("#userComment").style.display = "none";

    try {
        let feedback = $("#userComment").value;
        //     console.log(feedback);
        comment = feedback !== "Мой комментарий" ? feedback : ""
    } catch {
        comment = ""
    }
    //    let idsToDelete = null;


    const formData = new FormData($("#quizform"));
    let formulares = {};
    for (const [key, value] of formData) { formulares[key] = value }
    //   console.log(formulares);

    if (type === "accounting" && ($("#debet").value + $("#credit").value === answers[0])) {
        //   console.log($("#debet").value + $("#credit").value);
        //   console.log(answers[0]);
        checkquiz = true;
        reqanswer = "Дт " + $("#debet").value + " Кт " + $("#credit").value;
        quizString = text + "<br>" + hint + "<br>" + comment;
        posttype = "multiplechoices"
    }

    if (type === "multiplechoices" && answers.length === 1 && selectedoption === answers[0]) {
        checkquiz = true;
        reqanswer = selectedoption;
        quizString = text + "<br>" + hint + "<br>" + comment;;
        posttype = "multiplechoices";
        // idsToDelete = resUserPosts.data
        //     .filter(item => item.content === text)
        //     .map(item => item.id);
    }

    if (type === "multiplechoices" && answers.length > 1) {
        if (selectedoptions.length === answers.length) {
            checkquiz = true
            selectedoptions.map(item => {
                if (!answers.includes(item)) { checkquiz = false }
            })
        }
        reqanswer = selectedoptions.map(item => item).join("   ");
        quizString = text + "<br>" + hint + "<br>" + comment;;
        posttype = "multiplechoices";
        // idsToDelete = checkquiz ? resUserPosts.data
        //     .filter(item => item.content === text)
        //     .map(item => item.id) : null;
    }

    if (type === "quizwithrandomnumber") {
        let res = processquizwithrandomnumber({ quizString: text, answer: answer, randomNumber: store.getState().application.selectedoption });
        reqanswer = res.answer;
        quizString = res.quizString + "<br>" + hint + "<br>" + comment;;
        posttype = "multiplechoices"
        //   console.log(reqanswer);
        let value = $("#feedback").value;
        //    console.log(value);
        //    console.log(reqanswer);
        if (
            parseFloat(value) / parseFloat(reqanswer) < 1.02 &&
            parseFloat(value) / parseFloat(reqanswer) > 0.98
        ) {
            checkquiz = true;
            if ($("#inputFormula").value.length > 2) {
                hint = hint + "<br>" + $("#inputFormula").value
            }
        }
    }

    if (type === "casewithrandomnumber") {
        parser.on('callRangeValue', function (startCellCoord, endCellCoord, done) {
            var fragment = [];
            for (var row = startCellCoord.row.index; row <= endCellCoord.row.index; row++) {
                var rowData = dataArray[row];
                var colFragment = [];
                for (var col = startCellCoord.column.index; col <= endCellCoord.column.index; col++) {
                    colFragment.push(rowData[col]);
                }
                fragment.push(colFragment);
            }
            if (fragment) { done(fragment); }
        });
        //  let res = parser.parse('INTERCEPT(D2:D12, B2:B12)');
        let res = parser.parse(formulares[Object.keys(formulares)[0]].slice(1));
        //      console.log(res);
        let quizres = parser.parse(answer);
        //      console.log(quizres.result)
        if (!res?.error && !quizres?.error) {
            if (
                parseFloat(quizres.result) / parseFloat(res.result) < 1.02 &&
                parseFloat(quizres.result) / parseFloat(res.result) > 0.98
            ) {
                checkquiz = true;
                $("#formularesult").innerHTML = res.result;
                reqanswer = "=" + answer;
                quizString = text + "<br>" + markupForDataArray(dataArray) +
                    "<br>" + hint + "<br>" + comment;;
                posttype = "multiplechoices"
            }
        }
    }

    if (checkquiz) {
        doSaveQuiz(reqanswer, posttype, quizString, quizString)

    } else {
        $("#answerButton").classList.toggle("btn-danger");
        $("#answerButton").classList.toggle("btn-outline-primary");
        setMathInnerHTML($("#quizHint"), hint).catch(console.error);
        // $("#quizHint").innerHTML = hint;
        $("#answerButton").disabled = true;
    }
}

function doCheck(value) { store.dispatch(applicationSlice.actions.setSelectedOption(value)) }

function doToggleCheck(value) {
    let selectedoptions = store.getState().application.selectedoptions.map(item => item);
    const index = selectedoptions.indexOf(value);
    if (index > -1) {
        selectedoptions.splice(index, 1);
        store.dispatch(applicationSlice.actions.setSelectedOptions(selectedoptions))
    }
    else {
        store.dispatch(applicationSlice.actions.setSelectedOptions([...selectedoptions, value]))
    }
}


async function fetchQuizHint(activePage) {
    let quiz = resQuizesArray.data[activePage];
    //  console.log("fetchQuizHint(activePage)")
    resOpenQuizCaseById = await store.dispatch(api.endpoints.fetchOpenQuizCaseById.initiate(quiz.quizesCasesId));
    //    console.log(resOpenQuizCaseById.data);
    let hint = quiz?.hint ? quiz.hint : "";
    if (!!resOpenQuizCaseById.data?.hint) {
        hint = resOpenQuizCaseById.data.hint + "<br>" + hint
    }
    if (!!resOpenQuizCaseById.data?.exampleSpreadsheet) {
        hint = resOpenQuizCaseById.data.exampleSpreadsheet + "<br>" + hint
    }
    setMathInnerHTML($("#quizHint"), hint).catch(console.error);
    // $("#quizHint").innerHTML = hint;
    updateQuiz(activePage)
}

function updateQuiz(activePage) {
    let quiz = resQuizesArray.data[activePage];
    //    console.log(quiz);
    $("#quizformdataarray").style.display = "none";

    $("#usercalculations").style.display = "none";
    $("#inputFormula").value = "";
    $("#resformula").innerHTML = "<small class='text-muted'>Песочница, попробуйте =2+2 или =AVERAGE(B2:B13)</small>";
    $("#answerButton").disabled = false;
    $("#quizTitle").innerHTML = quiz.title;
    $("#quizHeader").innerText = quiz.header + " " + (activePage + 1);

    $("#userComment").style.display = "block";
    $("#answerButton").className = "btn btn-outline-primary m-3";
    $("#answerButton").style.display = "block";



    if (quiz?.type === "casewithrandomnumber" && Array.isArray(quiz?.dataArray)) {
        $("#usercalculations").style.display = "block";
        //     let res = processquizwithrandomnumber({ quizString: quiz.text, answer: quiz.answer, randomNumber: store.getState().application.selectedoption });
        //     console.log(res.answer)
        $("#quizformdataarray").innerHTML = markupForDataArray(quiz?.dataArray) + "<br>" + quiz?.text + "<hr>";
        $("#quizformdataarray").style.display = "block";
        if (!!quiz?.hint) {
            setMathInnerHTML($("#quizHint"), hint).catch(console.error);
        }

        //  $("#quizHint").innerHTML = quiz?.hint;
    }

    if (quiz.type === "multiplechoices") {


        setMathInnerHTML($("#quizString"), quiz?.text)
            .then(() => {
                // $("#quizString").innerHTML = quiz.text;
                if (quiz.answers.length > 1) {
                    chectQuiz.addEvents(quiz.choices)
                } else { choiceQuiz.addEvents(quiz.choices) }
                //    $("#quizcontainer").style.display = "block";
            })
            .catch(console.error)


    }

    if (quiz.type === "accounting") {
        $("#quizString").innerHTML = quiz.text;


        let markup = `
           <div class="row m-1 g-1">
                <div class="col-12 col-md-6">
                    <select class="form-select form-select-sm" aria-label="debet" id="debet" name="debet"">
                    ${'<option value="...">Дебет</option>' +
            quiz.choices
                .map(item => {
                    return `<option value="${item}">${item}</option>`
                })
                .join("")
            }                       
                    </select>
                </div>
                <div class="col-12 col-md-6">
                    <select class="form-select form-select-sm" aria-label="credit" id="credit" name="credit">
                       ${'<option value="...">Кредит</option>' +
            quiz.choices
                .map(item => {
                    return `<option value="${item}">${item}</option>`
                })
                .join("")
            }
                    </select>
                </div>
           </div>
           `;

        $("#accountingblock").innerHTML = markup;
        $("#accountingblock").style.display = "block";
    }

    if (quiz.type === "quizwithrandomnumber") {
        $("#usercalculations").style.display = "block";

        let randomNumber = store.getState().application.selectedoption;        
        if (Array.isArray(quiz?.randomfrom)) {
             randomNumber = quiz.randomfrom[Math.floor(Math.random() * quiz.randomfrom.length)]
              store.dispatch(applicationSlice.actions.seedState(        
            {object: { selectedoption: randomNumber }}
            ));
        }
        let res = processquizwithrandomnumber({ quizString: quiz.text, answer: quiz.answer, randomNumber: randomNumber });
        //     console.log(res.answer)
        $("#quizString").innerHTML = res.quizString;
        $("#quizChecks").innerHTML = `
            <div class="input-group input-group-sm mb-3">
                <span class="input-group-text" id="inputGroup-sizing-sm">Число</span>
                <input type="text" class="form-control" aria-label="quizinput" aria-describedby="quiz-input-sm" id="feedback">
            </div>`;
    }

    renderPagination()
}

// function foundQuiz(text) {
//     let correctquizes = store.getState().application.correctquizes;
//     let res = false;
//     correctquizes.forEach(item => {
//         if (typeof (item) === 'string' && item.includes(text)) { res = true }
//     })
//     return res
// }


function renderPagination() {
    let correctquizes = store.getState().application.correctquizes;
    $("#quizbuttonslist").innerHTML = resQuizesArray.data.map((item, index) => {
        return `<button
        class='${foundQuiz(
            identifyQuiz(item.title, item.text),
            correctquizes
        )
                ? "btn btn-sm btn-success page m-1" : "btn btn-sm btn-outline-secondary page m-1"}'
        page=${index}
       >
        ${index + 1}
        </button>`
    }).join("") +
        `<a href="/myworkbook" title="Рабочая тетрадь" class="btn btn-sm btn btn-outline-primary m-1" target="_blank">РТ</a>`
        ;

    let pagesLi = [...$$(".page")];
    pagesLi.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            const pageNumber = parseInt(event.target.getAttribute("page"));
            store.dispatch(applicationSlice.actions.setInitialQuizOptions());
            store.dispatch(applicationSlice.actions.seedState(
         //setActivePage(pageNumber)
            {object: {
                activePage: pageNumber,
                selectedoptions: [],
                selectedoption: Math.random() * 9 + 1
            }}
            ));
            $("#userComment").value = "Мой комментарий";
            $("#quizChecks").innerHTML = "";
            $("#accountingblock").style.display = "none";
            $("#quizHint").innerHTML = "";
            $("#quizTitle").innerHTML = "";
            $("#quizString").innerHTML = "";
            if (!!resQuizesArray.data[pageNumber]?.quizesCasesId) {
                fetchQuizHint(pageNumber)
            } else { updateQuiz(pageNumber) }
        }, false);
    })
}

let debounce_callRangeValueСalculation = debounce(function (dataArray, answer) {
    parser.on('callRangeValue', function (startCellCoord, endCellCoord, done) {
        var fragment = [];
        for (var row = startCellCoord.row.index; row <= endCellCoord.row.index; row++) {
            var rowData = dataArray[row];
            var colFragment = [];
            for (var col = startCellCoord.column.index; col <= endCellCoord.column.index; col++) {
                colFragment.push(rowData[col]);
            }
            fragment.push(colFragment);
        }
        if (fragment) { done(fragment); }
    });
    let res = parser.parse(answer.slice(1));
    //   console.log(res);
    if (!res.error) {
        $("#resformula").innerText = res.result;
        "<small class='text-muted'>Песочница, попробуйте =2+2 или =AVERAGE(B2:B13)</small>"
    }

}, 275);

let debounce_callCellValueСalculation = debounce(function (answer) {
    parser.on('callCellValue', function (cellCoord, done) {
        // using label
        // if (cellCoord.label === 'B$6') {
        //   done('hello');
        // }
        // or using indexes
        // if (cellCoord.row.index === 5 && cellCoord.row.isAbsolute && cellCoord.column.index === 1 && !cellCoord.column.isAbsolute) {
        //   done('hello');
        // }

        // if (cellCoord.label === 'C6') {
        //   done(0.75);
        // }
        if (!!cellCoord) {
            done();
        }
    });

    //   parser.parse('B$6'); // returns `"hello"`
    //   parser.parse('B$6&" world"'); // returns `"hello world"`
    //   parser.parse('FISHER(C6)');
    let res = parser.parse(answer.slice(1));
    //  console.log(res);
    if (!res.error) {
        $("#resformula").innerText = res.result;
        "<small class='text-muted'>Песочница, попробуйте =2+2 или =AVERAGE(B2:B13)</small>"
    }

}, 275);


let debounce_OneCellValculation = debounce(function (answer) {
    $("#resformula").innerText = processquizwithrandomnumber({
        quizString: "this {={var1-10}+1} some {=2+{var1-10}} that can be {=3+{var1-10}} with a {=4+{var1-10}} function",
        answer: answer.substring(1),
        randomNumber: 0.5
    }).answer
}, 275);


function doCalcRes(e) {
    e.preventDefault();

    let answer = $("#inputFormula").value;
    let activePage = store.getState().application.activePage;
    let { dataArray = [], type } = resQuizesArray.data[activePage];

    if (type.includes("case")) {
        if (answer.includes(":")) {
            debounce_callRangeValueСalculation(dataArray, answer)
        } else { debounce_callCellValueСalculation(answer) }
    } else {
        debounce_OneCellValculation(answer)
    }
}


/**
  * HTML event listeners
*/

$("#loginbutton").addEventListener("click", (e) => doLogin(e), false);
$("#quizform").addEventListener(`submit`, handleCheckQuiz);
const choiceQuiz = new EconolabsChoiceQuiz("quizChecks", doCheck);
const chectQuiz = new EconolabsCheckQuiz("quizChecks", doToggleCheck);
$("#inputFormula").addEventListener("input", (e) => doCalcRes(e), false);




/**
  * Initial load
*/

async function initialLoad() {
    let res = await getUser();
    //  console.log(res.email);       
    if (!res) {
        $("#formcontainer").style.display = "block";
    } else {
        resUserPosts = await store.dispatch(api.endpoints.fetchUserPosts.initiate(res.userEmail));
        resQuizesArray = await store.dispatch(api.endpoints.fetchQuizesArray.initiate());
        store.dispatch(
            applicationSlice.actions.
                loadCorrectquizes([...new Set(
                    resUserPosts.data
                        .map(item => {
                            return identifyQuiz(item.title, item?.quizString)
                        }))]))
        store.dispatch(applicationSlice.actions.setUser(res));

        //  resOpenQuizesCasesIds = await store.dispatch(api.endpoints.fetchOpenQuizesCasesIds.initiate());
        //  console.log(resOpenQuizesCasesIds.data.filter(item => item.theme === 'Основные корпоративные налоги'))

    }
}


initialLoad().then(() => {
    //    console.log("Done");
    $("#quizcontainer").style.display = "block";
    renderPagination()
});

// function loadState() {
//     try {
//       const serializedState = localStorage.getItem('econolabs');
//       if (serializedState === null) {
//         return undefined;
//       }
//       return JSON.parse(serializedState);
//     } catch (err) {
//       return undefined
//     }
//   };

// function shuffle(array) {
//   return array.sort(() => Math.random() - 0.5);
// }

// async function getFirebaseNode({
//     url = "crafts/temp_gmail_com/posts/-Ml6DEjYhdnjuW6HiHB7",
//     type = "array"
// }) {
//     try {
//         let snapshot = await get(ref(db, url));
//         if (snapshot.exists()) {
//             let res = snapshot.val();
//             if (type === "array") { return Object.keys(res).map(objKey => res[objKey]) }
//             return res
//         } else {
//             if (type === "array") { return [] } else { return null }
//         }
//     }
//     catch (err) {
//         console.log(err);
//         if (type === "array") { return [] } else { return {} }
//     }
// }

// async function updateFirebaseNode(updates = { temp: "temp" }) {
//     try {
//         //let res = await timeout(3000); console.log(updates);
//         await update(ref(db), updates);
//         return true
//     }
//     catch (error) {
//         console.error(error)
//         return error
//     }
// }

// function getFirebaseNodeKey(url) {
//     return push(child(ref(db), url + "/")).key;
// }

