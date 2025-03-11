import { getApps, deleteApp, initializeApp } from 'https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js';
import { getDatabase, get, ref, update, push, child } from 'https://www.gstatic.com/firebasejs/11.3.0/firebase-database.js';
import { produce } from "https://unpkg.com/immer@10.1.1/dist/immer.production.mjs"

console.log("cdnbasicfirebasecrudservices");


//Firebase

let app;
if (getApps().length > 1) {
    deleteApp(getApps()[1])
        .then(function () {
            console.log("App deleted successfully");
        })
        .catch(function (error) {
            console.log("Error deleting app:", error);
        });
}
if (getApps().length < 1) {
    let fireconf = {};
    try {
        fireconf = document.body.dataset;
    } catch (err) {
        throw new Error('Unable to get params' + err)
    }
    const firebaseConfig = {
        apiKey: fireconf.api,
        databaseURL: "https://" + fireconf.base + ".firebaseio.com",
        appId: fireconf.app
    };
    app = initializeApp(firebaseConfig);
}
const db = getDatabase();

async function getFirebaseNode({
    url = "crafts/temp_gmail_com/posts/-Ml6DEjYhdnjuW6HiHB7",
    type = "array"
}) {
    try {
        let snapshot = await get(ref(db, url));
        if (snapshot.exists()) {
            let res = snapshot.val();
            if (type === "array") { return Object.keys(res).map(objKey => res[objKey]) }
            return res
        } else {
            if (type === "array") { return [] } else { return null }
        }
    }
    catch (err) {
        console.log(err);
        if (type === "array") { return [] } else { return {} }
    }
}

async function updateFirebaseNode(updates = { temp: "temp" }) {
    try {
        //let res = await timeout(3000); console.log(updates);
        await update(ref(db), updates);
        return true
    }
    catch (error) {
        console.error(error)
        return error
    }
}

function getFirebaseNodeKey(url) {
    return push(child(ref(db), url + "/")).key;
}

function commonReducer(state = {}, action) {
    switch (action.type) {
        case "SET_STORE_OBJECT":
            return {
                ...state,
                [action.payload.key]: action.payload.value
            }

        case "SEED_ARRAY":
            return {
                ...state,
                [action.payload.arrayName]: action.payload.arrayItems
            }

        case "PUSH_SOME_ITEMS_TO_ARRAY":
            return {
                ...state,
                [action.payload.arrayName]: [
                    ...state[action.payload.arrayName],
                    ...action.payload.newArrayItems
                ]
            }


        case "PUSH_ITEM_TO_ARRAY":
            let pushnewarray = [...state[action.payload.arrayName]].push(action.payload.item);
            return {
                ...state,
                [action.payload.arrayName]: pushnewarray
            }

        case "DELETE_ITEM_FROM_ARRAY":
            let deletenewarray = [...state[action.payload.arrayName]].filter(item => item.id !== action.payload.item.id);
            return {
                ...state,
                [action.payload.arrayName]: deletenewarray
            }


        case "UPDATE_ITEM_IN_ARRAY":
            const index = state[action.payload.arrayName].findIndex(item => item.id === action.payload.id)
            if (index !== -1) {
                let updatenewarray = [...state[action.payload.arrayName]]
                updatenewarray[index] = action.payload.item
                return {
                    ...state,
                    [action.payload.arrayName]: updatenewarray
                }

            } else {
                return { ...state }
            }

        default:
            return { ...state }
    }
};

const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
];



function createProtoArray(protoDataObject = {}, maxRow = 12, maxColumn = 2) {
    Object.keys(protoDataObject).map((objKey) => {
        const [col, ...row] = objKey;
        let currentColIndex = alphabet.findIndex(item => item === col);
        if (currentColIndex > maxColumn) { maxColumn = currentColIndex };
        if (parseInt(row) > maxRow) { maxRow = parseInt(row) }
    });
    //  console.log(maxColumn, maxRow);

    var array = new Array(maxRow);
    for (var i = 0; i < array.length; i++) {
        array[i] = Array(maxColumn + 1).fill('');
    }

    Object.keys(protoDataObject).map((objKey) => {
        const [col, ...row] = objKey;
        let colArrayIndex = alphabet.findIndex((item) => item === col);
        let rowArrayIndex = parseInt(row) - 1;
        array[rowArrayIndex][colArrayIndex] = protoDataObject[objKey];
    });
    return array;
}


function createProtoObject(protoArray) {
    let protoObject = {};
    for (var i = 0; i < protoArray.length; i++) {
        var row = protoArray[i];
        for (var j = 0; j < row.length; j++) {
            if (protoArray[i][j] !== "") {
                protoObject[alphabet[j] + (i + 1)] = protoArray[i][j];
            }
        }
    }
    return protoObject;
}

function caseReducer(state = {}, action) {
    // console.log(action);
    switch (action.type) {

        // case "ADD_BOOK":
        // return produce(state, (draft) => {
        //   draft.books.list.push({ ...payload });
        // });


        case "SEED_ARRAY":
            return produce(state, (draft) => {
                draft[action.payload.arrayName] = action.payload.arrayItems;

            })

        case 'LOAD_DATA':
            return produce(state, (draft) => {
                draft.data = action.payload.data;
                draft.protoData = action.payload.protoData;
                draft.expandView = true;
            });


        case 'NEW_EMPTY_SPREADSHEET': {
            return produce(state, (draft) => {
                draft.data = action.payload.data;
                draft.protoData = action.payload.protoData;;
                draft.formulaValue = action.payload.protoData[0][0];
                draft.expandView = true;
            })
        }

        case 'UPDATE_FORMULA':
            return produce(state, (draft) => {
                draft.formulaValue = action.payload.formulaValue;
                draft.formulaRowIndex = action.payload.formulaRowIndex;
                draft.formulaColumnIndex = action.payload.formulaColumnIndex;
                draft.formulaIsInFocus = false;
            });

        case 'SAVE_CELL_AND_SET_NEXT_CELL_ACTIVE':
            return produce(state, (draft) => {
                draft.data = action.payload.data;
                draft.protoData = action.payload.protoData;
                // action.payload.value
                draft.formulaValue = action.payload.formulaValue;
                draft.formulaRowIndex = action.payload.formulaRowIndex;
                draft.formulaColumnIndex = action.payload.formulaColumnIndex;
            });

        case "SET_STORE_OBJECT":
            return produce(state, (draft) => {
                draft[action.payload.key] = action.payload.value;
            });

        case "PUSH_ITEM_TO_ARRAY":
            return produce(state, (draft) => {
                draft[action.payload.arrayName].push(action.payload.item)
            });



        default:
            return state;
    }
    ;

    //   case 'UPDATE_DATA': {
    //     return produce(state, (draft) => {
    //       let newProtoData = draft.protoData;
    //       newProtoData[action.payload.rowIndex][action.payload.columnIndex] = action.payload.value;
    //       draft.data = createNewDraft(newProtoData);
    //       draft.protoData = newProtoData;  
    //     })
    //   }

    //   case 'NEW_EMPTY_SPREADSHEET': {
    //     let protoArray = createProtoArray({}, 12, 2);
    //     return produce(state, (draft) => {
    //       draft.protoData = protoArray;
    //       draft.data = createNewDraft(protoArray);
    //       draft.formulaValue = protoArray[0][0];
    //       draft.expandView = true;
    //     })
    //   }

    /*  switch (action.type) {
   
           case "PUSH_SOME_ITEMS_TO_ARRAY":
             return {
               ...state,
               [action.payload.arrayName]: [
                 ...state[action.payload.arrayName],
                 ...action.payload.newArrayItems
               ]
             }
       
       
           case "PUSH_ITEM_TO_ARRAY":
             let pushnewarray = [...state[action.payload.arrayName]].push(action.payload.item);
             return {
               ...state,
               [action.payload.arrayName]: pushnewarray
             }
       
           case "DELETE_ITEM_FROM_ARRAY":
             let deletenewarray = [...state[action.payload.arrayName]].filter(item => item.id !== action.payload.item.id);
             return {
               ...state,
               [action.payload.arrayName]: deletenewarray
             }
       
       
           case "UPDATE_ITEM_IN_ARRAY":
             const index = state[action.payload.arrayName].findIndex(item => item.id === action.payload.id)
             if (index !== -1) {
               let updatenewarray = [...state[action.payload.arrayName]]
               updatenewarray[index] = action.payload.item
               return {
                 ...state,
                 [action.payload.arrayName]: updatenewarray
               }
       
             } else {
               return { ...state }
             }
       
           default:
             return { ...state }
         } */
};


window.getFirebaseNode = getFirebaseNode;
window.getFirebaseNodeKey = getFirebaseNodeKey;
window.updateFirebaseNode = updateFirebaseNode;
window.caseReducer = caseReducer;
window.createProtoArray = createProtoArray;
window.createProtoObject = createProtoObject;
window.produce = produce;
window.alphabet = alphabet;


export {
    getFirebaseNode,
    updateFirebaseNode,
    getFirebaseNodeKey,
    commonReducer,

    createProtoArray,
    createProtoObject
}


// export const fincalculationsApi = createApi({
//     reducerPath: 'api',
//     tagTypes: ["OpenQuiz", "Quiz", "Answer", "Avatar", "Post"],
//     baseQuery: fakeBaseQuery(),
//     endpoints: (builder) => ({

//         fetchOpenQuizesCasesIds: builder.query({
//             async queryFn() {
//                 try {
//                     let list = await getFirebaseNode({ url: "quizescases/quizesCasesIds", type: "array" });
//                     return { data: list };
//                 } catch (err) {
//                     console.log(err);
//                     return { error: err };
//                 }
//             },
//             providesTags: (result = [], error2, arg) => [
//                 "QuizCase",
//                 ...result.map(({ id }) => ({ type: "QuizCase", id }))
//             ]
//         }),

//         fetchOpenQuizCaseById: builder.query({
//             async queryFn(id) {
//                 try {
//                     let list = await getFirebaseNode({ url: "quizescases/quizesCasesIds/" + id, type: "object" });
//                     return { data: list };
//                 } catch (err) {
//                     console.log(err);
//                     return { error: err };
//                 }
//             },
//             providesTags: (result, error, id) => [{ type: "QuizCase", id }]
//         }),

//         fetchUserPosts: builder.query({
//             async queryFn(userEmail) {
//                 //    console.log(userEmail)
//                 try {
//                     let userPosts = await getFirebaseNode({ url: "usersCraft/" + userEmail + "/posts", type: "array" });
//                     //   console.log(userPosts);
//                     return { data: Array.isArray(userPosts) ? userPosts : [] }
//                 }
//                 catch (err) { console.log(err); return { error: err } }
//             },
//             providesTags: (result, error, id) => [{ type: "Post", id }]
//         }),



//         fetchQuizesArray: builder.query({
//             async queryFn() {
//                 let d = new Date();
//                 let currentDay = new Intl.DateTimeFormat("en", {
//                     weekday: "short",
//                     year: "numeric",
//                     month: "short",
//                     day: "numeric",
//                 })
//                     .format(new Date(d.getFullYear(), d.getMonth(), d.getDate()))
//                     .replace(/[^a-zA-Z0-9]/g, "_");
//                 //       console.log(currentDay);
//                 try {
//                     let currentQuizArray = await getFirebaseNode({
//                         url: "/currentquiz/" + currentDay + "/",
//                         type: "array"
//                     });

//                     console.log(currentQuizArray);

//                     let newCurrentQuizAddedIndexes = [];
//                     let resArray = !!window?.quizesSets ?
//                         window.quizesSets.map(item => {
//                             let index = currentQuizArray.findIndex(currentquiz => item.id === currentquiz.id);
//                             if (index > -1) {
//                                 currentQuizArray[index];
//                                 newCurrentQuizAddedIndexes.push(index);
//                                 return currentQuizArray[index]
//                             } else { return item }
//                         })
//                         : [];
//                     console.log(newCurrentQuizAddedIndexes);
//                     currentQuizArray = currentQuizArray.filter((_, index) => !newCurrentQuizAddedIndexes.includes(index));
//                     resArray = [...resArray, ...currentQuizArray];
//                     console.log(resArray);
//                     let quizeswithtype = resArray.map(quiz => {
//                         let updatedquiz = { ...quiz };
//                         if (Array.isArray(quiz?.quizes)) {
//                             updatedquiz = { ...quiz, type: "onerandommanyanswers" }
//                         }
//                         if (Array.isArray(quiz?.choices) && Array.isArray(quiz?.answers) && quiz?.type !== "accounting") {
//                             updatedquiz = { ...quiz, type: "multiplechoices" }
//                         }

//                         if (!!quiz?.answer && quiz.answer.includes("{var1-10}")) {
//                             console.log("Quiz With Random Number");
//                             updatedquiz = { ...quiz, type: "quizwithrandomnumber" }
//                         }
//                         return updatedquiz
//                     })
//                     return { data: quizeswithtype }
//                 }
//                 catch (err) { console.log(err); return { error: err } }
//             },
//             providesTags: (result, error, id) => [{ type: "Quiz", id }]
//         }),

//         // fetchUserAvatar: builder.query({
//         //     async queryFn(userEmail) {
//         //         try {
//         //             let openAvatarsResponse = await getFirebaseNode({
//         //                 url: "/openavatars/" + userEmail,
//         //                 type: "object"
//         //             });

//         //             return { data: openAvatarsResponse }
//         //         }
//         //         catch (err) { console.log(err); return { data: null, error: err } }
//         //     },
//         //     providesTags: (result, error, id) => [{ type: "Avatar", id }]
//         // }),
//         updatesForOpenQuizes: builder.mutation({
//             async queryFn({ base = "", updates = { temp: "temp" }
//             }) {
//                 let fireUpdates = {};
//                 Object.keys(updates).forEach(objKey => {
//                     fireUpdates[base + "/" + objKey] = updates[objKey]
//                 });
//                 //     console.log(fireUpdates);
//                 try { await updateFirebaseNode(fireUpdates) }
//                 catch (err) { console.log(err); return { error: err } }
//                 return { data: fireUpdates }
//             },
//             invalidatesTags: ["Answer"]
//         }),

//         // fetchOpenQuizes: builder.query({
//         //     async queryFn() {
//         //         try {
//         //             let openQuizes = await getFirebaseNode({ url: "openquizes/", type: "array" });
//         //             //    console.log(openQuizes);
//         //             return { data: openQuizes }
//         //         }
//         //         catch (err) { console.log(err); return { error: err } }
//         //     },
//         //     providesTags: (result, error, id) => [{ type: "OpenQuiz", id }]
//         // }),

//         // fetchOpenQuiz: builder.query({
//         //     async queryFn(id) {
//         //         try {
//         //             let quiz = await getFirebaseNode({ url: "openquizes/" + id, type: "object" });
//         //             console.log(quiz);
//         //             return { data: quiz }
//         //         }
//         //         catch (err) { console.log(err); return { error: err } }
//         //     },
//         //     providesTags: (result, error, id) => [{ type: "OpenQuiz", id }]
//         // }),
//     }),
// })
