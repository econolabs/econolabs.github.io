let { useEffect, useState, useRef, useReducer } = React;
let { createRoot } = ReactDOM;
const { Provider, useSelector, useDispatch } = ReactRedux;
let { Button, Container, ButtonGroup, Form } = ReactBootstrap;
let { configureStore, createSlice } = window.RTK;

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('econolabs');
    if (serializedState === null) {
      return undefined;
    }
    //  console.log(JSON.parse(serializedState))
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined
  }
};

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

const applicationSlice = createSlice({
  name: 'application',
  initialState: {
    email: '',
    user: '',
    avatarUrl: '',
    userEmail: ''
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

const { setUserProfile, set_user_profile, set_currentProject } = applicationSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

const selectApplication = state => state.application;




const store = configureStore({
  reducer: {
    // counter: counterReducer,
    application: applicationSlice.applicationReducer,
    posts: postsSlice.postsReducer,
  },
})

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
  const oneHourInMillis = 2 * 60 * 60 * 1000; // 7,200,000 milliseconds
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


    setTimeout(function () { window.location.reload() }, 3000);

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

function reducer(state, action) {
  if (action.type === 'SEED_DATA') {
    let data = {}
    Object.keys(action.payload).forEach(objKey => {
      data[objKey] = data.payload[objKey]
    })
    console.log(data);
    return { ...data };
  }
  throw Error('Unknown action.');
}



function App() {
  const [state, dispatch] = useReducer(reducer, {
    email: null,
    user: null,
    userEmail: null,
    isLoading: null,
    isExam: null
  })

  useEffect(() => {
    const serializedState = localStorage.getItem('econolabs');
    if (serializedState === null) {
      dispatch({
        type: 'SEED_DATA',
        payload: {
          isLoading: false,
        }
      })
    } else {
      let application = JSON.parse(serializedState)?.application;
      dispatch({
        type: 'SEED_DATA',
        payload: {
          user: application?.user ? application.user : null,
          email: application?.email ? application.email : null,
          isLoading: false,
          isExam: !!document.body.dataset?.exam ? true : false
        }
      })
    }
     }, [])

  if (state?.isLoading) { return <div>...</div> }
  //   const [doContinue, setDoContinue] = useState(false);
  //  let { email = null, user = null } = useSelector(selectApplication);
  //  let { posts } = useSelector(selectPosts)


  if (!state?.email || state?.email.length < 5 || state?.user.length < 5) {
    return <SimpleUserForm />
  }


  // if (isExam && !doContinue && posts.length > 0) {       
  //     return <StartOrContinueExam setDoContinue={()=>setDoContinue()}/>
  // }

  // if (isExam) {
  //   let quizesIds = [...window.quizesSets].map(quiz => quiz.id);
  //   quizesIds = basicfirebasecrudservices.shuffle([...quizesIds])
  //   return <QuizSet quizesIds={quizesIds} isExam={true} />
  // }



  // if (Array.isArray(window.quizesSets) && window.quizesSets.length > 1) {
  //   let quizesIds = [...window.quizesSets].map(quiz => quiz.id);
  //   return <Container>
  //     <QuizSet quizesIds={quizesIds} isExam={false} />
  //   </Container>
  // }

  // return <Container>
  //   <MathQuiz />
  // </Container>

  return <div>Ready</div>

}

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
  <Provider store={store}><App /></Provider>
);





// store.subscribe(throttle(() => {
//   saveState({
//     posts: store.getState().posts,
//     application: store.getState().application
//   });
// }, 10000
// ))
