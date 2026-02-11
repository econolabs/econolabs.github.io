     let { createRoot } = ReactDOM;
    let { useReducer, useState, createContext, useContext } = React;
    let { Form, Row, Col, Container, Button, Modal } = ReactBootstrap;
    let { getFirebaseNode } = basicfirebasecrudservices;

     function SelectDate({ setDate }) {
      async function handleChange(e) {
        let { name, value } = e.target;

        console.log(name, value);
        let d = new Date(e.target.value);

        let currentDay = new Intl.DateTimeFormat("en", {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
        })
          .format(new Date(d.getFullYear(), d.getMonth(), d.getDate()))
          .replace(/[^a-zA-Z0-9]/g, "_");
        setDate(currentDay);
      }

      return (
        <Container>
          <Form>
            <Row>
              <Col>
                <Form.Group controlId="formStatePeriod">
                  <Form.Label>Период</Form.Label>
                  <Form.Control
                    type="date"
                    name="selecteddate"
                    required
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Container>
      );
    }

    function App() {

        function setDate(date) {
            console.log('Set Date: ' + date)
        }
        return <div>
            <SelectDate setDate={setDate}/>
        </div>
    }
 
    
    createRoot(root).render(<App />);


//     function caseReducer(state = {}, action) {
//     // console.log(action);
//     //https://immerjs.github.io/immer/update-patterns
//     switch (action.type) {

//         case "SET_STORE_OBJECT":
//             return basicfirebasecrudauthservices.produce(state, (draft) => {
//                 console.log(action.payload);
//                 draft[action.payload.key] = action.payload.value;
//             });

//         case "SEED_STATE": {
//             return basicfirebasecrudauthservices.produce(state, (draft) => {
//                 Object.keys(action.payload.objects).map((key) => {
//                     draft[key] = action.payload.objects[key];
//                 });
//             });
//         }

//         case "DELETE_FROM_ARRAY_BY_INDEX": {
//             return basicfirebasecrudauthservices.produce(state, (draft) => {
//                 draft[action.payload.arrayName].splice(action.payload.itemIndex, 1);
//                 draft.triggerRerender = action.payload.itemIndex;
//             });
//         }

//         case "DELETE_FROM_ARRAY_BY_ID": {
//             return basicfirebasecrudauthservices.produce(state, (draft) => {

//                 const index = draft[action.payload.arrayName].findIndex(item => item.id === action.payload.id);

//                 if (index !== -1) {
//                     draft[action.payload.arrayName].splice(index, 1);
//                  //   draft.triggerRerender = action.payload.id;
//                 }



//             });
//         }

//         case "UPDATE_ITEM_IN_ARRAY":
//             return basicfirebasecrudauthservices.produce(state, (draft) => {
//                 console.log(action.payload);
//                 const index = draft[action.payload.arrayName].findIndex(item => item.id === action.payload.item.id);
//                 if (index !== -1) draft[action.payload.arrayName][index] = action.payload.item
//             });



//         case "UPDATE_ITEM_PROPERTY_IN_ARRAY":
//             return basicfirebasecrudauthservices.produce(state, (draft) => {
//                 console.log(action.payload);
//                 const index = draft[action.payload.arrayName].findIndex(item => item.id === action.payload.id);
//                 if (index !== -1) {
//                     draft.triggerRerender = action.payload.id;
//                     draft
//                     [action.payload.arrayName]
//                     [index]
//                     [action.payload.objKey] = action.payload.objValue
//                 }
//             });

//         default:
//             return state;
//     }
// }

// let initialState = {
//     loading: true,
//     email: null,
//     user: null,
//     avatarUrl: "",
//     userEmail: "",
//     posts: [],
//     showModal: false,
//     modal: {}
// }

    // const [state, applicationDispatch] = useReducer(
    //     caseReducer,
    //     initialState
    // );

    // const [projectState, projectDispatch] = useReducer(
    //     caseReducer,
    //     projectInitialState
    // );

    // const [spreadsheetState, spreadsheetDispatch] = useReducer(
    //     caseReducer,
    //     spreadsheetInitialState
    // );


    // useEffect(() => {
    //     async function getUser() {
    //         let localStorageData = basicfirebasecrudauthservices.loadState('econolabs');

    //         const paramsString = window.location.search;
    //         const searchParams = new URLSearchParams(paramsString);
    //         console.log(searchParams.get("openquizid"));

    //         let openquizid;

    //         if (!!searchParams.get("openquizid")) {
    //             openquizid = searchParams.get("openquizid")
    //         } else {
    //             openquizid = document.getElementById("simpleaccounting").dataset.openquizid
    //         }

    //         console.log(openquizid);

    //         let onlineopenquiz = await basicfirebasecrudauthservices.getFirebaseNode({
    //             url: "openquiz/" + openquizid,
    //             type: "object",
    //         });


            // let updates = {};
            // updates["/openquiz/propertyplantandequipment03"] = {
            //     id: "propertyplantandequipment03",
            //     title: "Учет основных средств 3",
            //     theme: "БФУ",
            //     answer: "Операции и отчетность",
            //     comment: "Операции и отчетность",
            //     type: "accountingwithprofitscash",
            //     tasks: [{
            //         id: 0,
            //         text: `В соответствии с решением руководства организации объект ОС первоначальной стоимостью 100 000 руб., подлежит ликвидации в связи сморальным износом.<br>
            //         Срок полезного использования данного объекта ОС –5 лет. Объект находился в эксплуатации в течение 3-х лет, сумма начис-ленной амортизации за это время составляет 60 000 руб.<br>
            //         После разборки ОС на склад были оприходованы материалы стоимостью 20 000 руб.<br>
            //         Заработная плата рабочих, занятых в ликвидации ОС составляет10 000 руб., отчисления по социальному страхованию и обеспечению со-ставили 2 600 руб.<br>
            //         Указать бухгалтерские записи.`
            //     }],

            // };
            // let res = basicfirebasecrudauthservices.updateFirebaseNode(updates);
            // console.log(res);

    //         let openquiz = !!onlineopenquiz && Object.keys(onlineopenquiz).length > 0 ?
    //             onlineopenquiz : { ...defaultProjectData };


    //         if (!!localStorageData?.application?.email) {
    //             let userEmail = localStorageData?.application?.email.replace(
    //                 /[^a-zA-Z0-9]/g,
    //                 "_"
    //             );

    //             let openavatar = await basicfirebasecrudauthservices.getFirebaseNode({
    //                 url: "openavatars/" + userEmail,
    //                 type: "object",
    //             });

    //             let userprojectpostcontent = await basicfirebasecrudauthservices.getFirebaseNode({
    //                 url: "/usersCraft/" + userEmail + "/posts/" + openquizid + "/content",
    //                 type: "array",
    //             });

    //             userprojectpostcontent = userprojectpostcontent.map(item => {
    //                 if (!item?.id) {
    //                     return {
    //                         ...item,
    //                         id: basicfirebasecrudauthservices.getFirebaseNodeKey("/usersCraft/" + userEmail + "/posts/" + openquizid + "/content")
    //                     }
    //                 }
    //                 return item
    //             })

    //             let userprojectspreadsheet = await basicfirebasecrudauthservices.getFirebaseNode({
    //                 url: "/usersCraft/" + userEmail + "/posts/" + openquizid + "/mediaItems/1/content",
    //                 type: "object",
    //             });

    //             userprojectspreadsheet = !!userprojectspreadsheet ? userprojectspreadsheet : {}


    //             let posts = await basicfirebasecrudauthservices.getFirebaseNode({
    //                 url: "/usersCraft/" + userEmail + "/posts/",
    //                 type: "array",
    //             });
    //             console.log(posts.filter(item => item.type === "accountingwithprofitscash"))


    //             return {
    //                 email: localStorageData?.application?.email,
    //                 user: localStorageData?.application?.user,
    //                 avatarUrl: !!openavatar?.avatarUrl
    //                     ? openavatar.avatarUrl
    //                     : !!localStorageData?.application?.avatarUrl
    //                         ? localStorageData.application.avatarUrl
    //                         : "../freelancer.jpg",
    //                 userEmail: userEmail,
    //                 openquiz: openquiz,
    //                 userprojectpostcontent: userprojectpostcontent,
    //                 userprojectspreadsheet: userprojectspreadsheet
    //             }
    //         } else {
    //             let identity = basicfirebasecrudauthservices.generateUser();
    //             basicfirebasecrudauthservices.saveState({
    //                 application: {
    //                     email: identity.email,
    //                     user: identity.user,
    //                     avatarUrl: "../freelancer.jpg",
    //                     userEmail: identity.userEmail
    //                 }
    //             });
    //             return {
    //                 email: identity.email,
    //                 user: identity.user,
    //                 avatarUrl: "../freelancer.jpg",
    //                 userEmail: identity.userEmail,
    //                 openquiz: openquiz,
    //                 userprojectpostcontent: [],
    //                 userprojectspreadsheet: userprojectspreadsheet
    //             }
    //         }
    //     }

    //     getUser().then((res) => {
    //         let {
    //             userEmail,
    //             email,
    //             user,
    //             avatarUrl,
    //         } = res;

    //         applicationDispatch({
    //             type: "SEED_STATE",
    //             payload: {
    //                 objects: {
    //                     loading: false,
    //                     email: email,
    //                     user: user,
    //                     avatarUrl: avatarUrl,
    //                     userEmail: userEmail
    //                 },
    //             },
    //         });


    //         projectDispatch({
    //             type: "SEED_STATE",
    //             payload: {
    //                 objects: {
    //                     ...projectInitialState,
    //                     ...res.openquiz,
    //                     content: res.userprojectpostcontent,
    //                     quizString: res.userprojectspreadsheet
    //                     //   triggerRerender: "loaded"
    //                 },
    //             },
    //         });

    //         let userprojectspreadsheetArray = basicfirebasecrudauthservices.createProtoArray(res.userprojectspreadsheet, 6, 6);

    //         spreadsheetDispatch({
    //             type: "SEED_STATE",
    //             payload: {
    //                 objects: {
    //                     spreadsheetContent: res.userprojectspreadsheet,
    //                     protoData: userprojectspreadsheetArray,
    //                     data: basicfirebasecrudauthservices.createNewDraft(userprojectspreadsheetArray),
    //                     triggerRerender: "loaded"
    //                 },
    //             },
    //         });



    //     })
    // }, []);


    // if (state.loading) { return null }

    
    //         fetchUserName: builder.query({
    //             async queryFn(userEmail) {
    //                 try {
    //                     let list = await getFirebaseNode({ url: "usersCraft/" + userEmail + "/posts", type: "array" });
    //                     return { data: list.map(item => item.user)[0] }
    //                 }
    //                 catch (err) { console.log(err); return { error: err } }
    //             },
    //             providesTags: (result, error, id) => [{ type: "Name", id }]
    //         }),


    //         fetchUserAvatar: builder.query({
    //             async queryFn(userEmail) {
    //                 try {
    //                     let openAvatarsResponse = await getFirebaseNode({
    //                         url: "/openavatars/" + userEmail,
    //                         type: "object"
    //                     });

    //                     return { data: openAvatarsResponse }
    //                 }
    //                 catch (err) { console.log(err); return { data: [], error: err } }
    //             },
    //             providesTags: (result, error, id) => [{ type: "Avatar", id }]
    //         }),


    //         fetchUsersByDate: builder.query({
    //             async queryFn(currentDay) {
    //                 try {
    //                     let postsResponse = await getFirebaseNode({
    //                         url: "/currentDay/" + currentDay + "/posts",
    //                         type: "array"
    //                     });
    //                     const casesResponse = await getFirebaseNode({
    //                         url: "/currentDay/" + currentDay + "/cases",
    //                         type: "array"
    //                     });
    //                     return { data: [...postsResponse, ...casesResponse] }
    //                 }
    //                 catch (err) { console.log(err); return { data: [], error: err } }
    //             },
    //             providesTags: (result, error, id) => [{ type: "QuizesCases", id }]
    //         }),


    //         addOpenAvatar: builder.mutation({
    //             async queryFn(post) {
    //                 try { await updateFirebaseNode({ updates: { ["openavatars/" + post.id]: post } }); }
    //                 catch (err) {
    //                     console.log(err);
    //                     return { error: err }
    //                 }
    //                 return { data: post }
    //             },
    //             invalidatesTags: ["OpenAvatar"]
    //         }),

    //         fetchUnsplashImagesFromCollection: builder.query({
    //             async queryFn({ collectionId = "aH98dheb50M", perPage = 30 }) {
    //                 try {
    //                     const imagesResp = await getPicturesFromCollection({ collectionId, perPage });
    //                     let images = imagesResp
    //                         .map(item => { return { ...item, orientation: "landscape" } });

    //                     return {
    //                         data: images
    //                     }
    //                 }
    //                 catch (err) {
    //                     console.log(err);
    //                     return { error: err }
    //                 }
    //             },
    //             providesTags: ["UnsplashImageFromCollection"]
    //         }),

    //         fetchUsersByDate: builder.query({
    //             async queryFn(currentDay) {
    //                 try {
    //                     let postsResponse = await getFirebaseNode({
    //                         url: "/currentDay/" + currentDay + "/posts",
    //                         type: "array"
    //                     });
    //                     const casesResponse = await getFirebaseNode({
    //                         url: "/currentDay/" + currentDay + "/cases",
    //                         type: "array"
    //                     });
    //                     return { data: [...postsResponse, ...casesResponse] }
    //                 }
    //                 catch (err) { console.log(err); return { data: [], error: err } }
    //             },
    //             providesTags: (result, error, id) => [{ type: "QuizesCases", id }]
    //         }),



    //         updateUserAvatarGroup: builder.mutation({
    //             async queryFn({ base = "openavatars", updates = {
    //                 temp_google_com: {
    //                     id: "temp_google_com",
    //                     avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxODU2NzR8MHwxfGNvbGxlY3Rpb258MjB8YUg5OGRoZWI1ME18fHx8fDJ8fDE3MDAxMzYxMjN8&ixlib=rb-4.0.3&q=80&w=200",
    //                     user: "Ha Ha"
    //                 }
    //             }
    //             }) {
    //                 let fireUpdates = {};
    //                 Object.keys(updates).forEach(objKey => {
    //                     fireUpdates[base + "/" + objKey] = updates[objKey];
    //                 });
    //                 //    console.log(fireUpdates);
    //                 try { await updateFirebaseNode(fireUpdates); }
    //                 catch (err) { console.log(err); return { error: err } }
    //                 return { data: fireUpdates }
    //             },
    //             invalidatesTags: ["UserAvatarsAndGroup"]
    //         }),


    //     }),
    // });

//     async function doSaveAvatar(e) {

//     let userEmail = document.getElementById("selectStudent").value;
//     let avatarUrl = e.target.id;
//     let group = document.getElementById("opengroup").value;
//     let user = document.getElementById("name").value;


//     let updates = {
//         ["openavatars/" + userEmail]: {
//             user,
//             id: userEmail,
//             group,
//             avatarUrl
//         },
//         ["opengroups/" + group]:
//         {
//             id: userEmail,
//             email: userEmail,
//             user,
//             avatarUrl
//         }
//     }

//     console.log(updates);

//     store.dispatch(api.endpoints.updateUserAvatarGroup.initiate({
//         base: "/",
//         updates: updates
//     }))
//         .then(() => console.log("Saved"));

//     console.log(document.getElementById("selectStudent").value);
//     console.log(document.getElementById("name").value);
//     console.log(document.getElementById("opengroup").value);
//     console.log(e.target.id);
//     let res = await timeout(2000);
//     console.log("Avatar Saved " + res)
// }