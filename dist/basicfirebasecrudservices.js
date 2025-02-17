import { getApps, deleteApp, initializeApp } from 'https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js';
import { getDatabase, get, ref, update, push, child } from 'https://www.gstatic.com/firebasejs/11.3.0/firebase-database.js';

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




console.log("basicfirebasecrudservices");


export {
    getFirebaseNode,
    updateFirebaseNode,
    getFirebaseNodeKey,
    commonReducer
}