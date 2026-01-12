let { useEffect, useState, useRef } = React;
let { createRoot } = ReactDOM;
let { Provider, useDispatch, useSelector } = 'ReactRedux';
let { Button, Container,  ButtonGroup, Form } = 'ReactBootstrap';
let { configureStore, createSlice } = "RTK"

// import throttle from '../utilities/throttle';
// import saveState from '../utilities/saveState';


function MathQuiz() {
    return null
}

function QuizSet() {
    return null
}


function isDifferenceLessThanTwoHours(timestamp1, timestamp2) {
  const differenceInMillis = Math.abs(timestamp2 - timestamp1);
  const oneHourInMillis = 2* 60 * 60 * 1000; // 7,200,000 milliseconds
  return differenceInMillis < oneHourInMillis;
}

function loadPostsFromLocalStorage() {
  
  if (!document.body.dataset?.exam) { return [] }

  let currentTimeStamp = new Date();
  let myPosts = [];
  try {
    let savedPosts = loadState()?.posts?.posts;
    Array.isArray(savedPosts) && savedPosts.map(post => {
      if (isDifferenceLessThanTwoHours(currentTimeStamp, post?.timestamp)) {
        myPosts.push(post)
      }
    })

  } catch (error) { console.log(error) }

  return myPosts
}


const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: loadPostsFromLocalStorage(),
    loading: false,
    hasErrors: false,
  },
  reducers: {

    seedPostsState: (state, action) => {
      Object.keys(action.payload).map(objKey => {
        state[objKey] = action.payload[objKey]
      })
    },

    createPost: (state, action) => {
      //  console.log(action)
      state.posts.push(action.payload);
    },

    updatePost: (state, action) => {
      const itemToUpdate = state.posts.find((item) => item.id === action.payload.id);
      if (itemToUpdate) {
        itemToUpdate = action.payload
      }
    },

    // Action to update or create an item
    upsertPost: (state, action) => {
   //   console.log(action.payload)
      const existingItemIndex = state.posts.findIndex(item => item.quizId === action.payload.quizId);
      if (existingItemIndex !== -1) {
        state.posts[existingItemIndex] = action.payload;
        console.log(existingItemIndex)
      } else {
        state.posts.push(action.payload);
      }
    },

  },
});

const { seedPostsState, createPost, updatePost, upsertPost } = postsSlice.actions;

const selectPosts = state => state.posts;

const SimpleUserForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();


        try {
            const serializedState = JSON.stringify({
                application: {
                    email: email,
                    user: name,
                    userEmail: email.replace(/[^a-zA-Z0-9]/g, "_")
                }
            });
            localStorage.setItem('econolabs', serializedState);
        } catch (err) {
            console.log(err)
        }


        // dispatch(set_user_profile(
        //     {
        //         email: email,
        //         user: name,
        //         userEmail: email.replace(/[^a-zA-Z0-9]/g, "_")
        //     }));
        setTimeout(function () { window.location.reload() }, 3000);

        // Сохранение в localStorage
        // localStorage.setItem('userName', name);
        // localStorage.setItem('userEmail', email);

        // Перезагрузка страницы
        // window.location.reload();
    };

    return (
        <Container className="mt-5" style={{ maxWidth: '400px' }}>
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Введите email"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Имя Группа</Form.Label>
                    <Form.Control
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Введите имя"
                        required
                    />
                </Form.Group>



                <Button variant="primary" type="submit" className="w-100">
                    Сохранить
                </Button>
            </Form>
        </Container>
    );
};

//console.log(window.quizesSets);


function App() {
    let isExam = !!document.body.dataset?.exam ? true : false;
  //   const [doContinue, setDoContinue] = useState(false);
    let { email, user } = useSelector(selectApplication);
  //  let { posts } = useSelector(selectPosts)


    if (!email || email.length < 5 || user.length < 5) {
        return <SimpleUserForm />
    }


    // if (isExam && !doContinue && posts.length > 0) {       
    //     return <StartOrContinueExam setDoContinue={()=>setDoContinue()}/>
    // }

     if (isExam) {
        let quizesIds = [...window.quizesSets].map(quiz => quiz.id);
        quizesIds = basicfirebasecrudservices.shuffle([...quizesIds])
        return <QuizSet quizesIds={quizesIds} isExam={true} />
    }



    if (Array.isArray(window.quizesSets) && window.quizesSets.length > 1) {
        let quizesIds = [...window.quizesSets].map(quiz => quiz.id);
        return <Container>
            <QuizSet quizesIds={quizesIds} isExam={false} />
        </Container>
    }

    return <Container>
        <MathQuiz />
    </Container>

}

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
    <Provider store={store}><App /></Provider>
);


const loadState = () => {
  try {
    const serializedState = localStorage.getItem('econolabs');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined
  }
};

 const applicationSlice = createSlice({
  name: 'application',
  initialState: !!loadState() && !!loadState()?.application ? {
     ...loadState().application, userEmail: loadState().application?.email.replace(/[^a-zA-Z0-9]/g, "_") } 
    : {
    email: '',
    user: '',
    avatarUrl: '',
    currentProjectTitle: '',
    currentProjectComment: '',
    currentProjectMediaAndDataAndTemplatesURL: '',
    currentProjectSourseDataURL: '',
    currentProjectMoneyScale: '',
    currentProjectReportIndicatorsDictionary: ''
  },
  reducers: {
    setUserProfile: (state, action) => {
      state.email = action.payload.email;
      state.user = action.payload.user;
      state.avatarUrl = action.payload.avatarUrl;
      state.userEmail = action.payload.email.replace(/[^a-zA-Z0-9]/g, "_")
    },
    set_user_profile: (state, action) => {
      state.email = action.payload.email;
      state.user = action.payload.user;
      state.avatarUrl = action.payload.avatarUrl;
      state.userEmail = action.payload.email.replace(/[^a-zA-Z0-9]/g, "_")
    },
    set_currentProject: (state, action) => {
      state.currentProjectTitle = action.payload.currentProjectTitle;
      state.currentProjectComment = action.payload.currentProjectComment;
      state.currentProjectMediaAndDataAndTemplatesURL = action.payload.currentProjectMediaAndDataAndTemplatesURL;
      state.currentProjectSourseDataURL = action.payload.currentProjectSourseDataURL;
      state.currentProjectMoneyScale = action.payload.currentProjectMoneyScale;
      state.currentProjectReportIndicatorsDictionary = action.payload.currentProjectReportIndicatorsDictionary
    }
  },
});

 const { setUserProfile,  set_user_profile, set_currentProject } = applicationSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

const selectApplication = state => state.application;



const store = configureStore({
  reducer: {
   // counter: counterReducer,
    application: applicationReducer,
    posts: postsReducer,
  },
})

// store.subscribe(throttle(() => {
//   saveState({
//     posts: store.getState().posts,
//     application: store.getState().application
//   });
// }, 10000
// ))
