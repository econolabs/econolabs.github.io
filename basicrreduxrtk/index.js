let { useEffect, useState, useRef, useReducer } = React;
let { createRoot } = ReactDOM;
const { Provider, useSelector, useDispatch } = ReactRedux;
let { Button, Container, ButtonGroup, Form } = ReactBootstrap;
let { configureStore, createSlice } = window.RTK;

let { FormWithRef} = ReactEconolabsLib;

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

function isObject(value) {
  // Check if it's not null, and typeof returns 'object'
  return value !== null && typeof value === 'object';
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



function ShowQuizResults() {
  return null
}

function QuizCardWithStorage(props) {
  let app = useSelector(selectApplication)
  console.log(app);
  console.log(props);


  function setInputResult(res) {
    console.log(res)
  }

  return <div key={props.id}>
   
    {props.id}

      <FormWithRef setInputResult={setInputResult}/>
    </div>
}


function MathQuiz() {
  return null
}

function QuizSet({
  setTitle = "Тесты",
  quizesIds = [],
  isExam = false
}) {
  const [state, localDispatch] = useReducer(caseReducer, {
    selectedQuiz: 0,
    loading: false,
    currentPage: 0,
    itemsPerPage: 7,
    showQuizResults: false
  })


  if (state.showQuizResults) {
    return <ShowQuizResults quizesIds={quizesIds} />
  }

  const pagesCount = Math.ceil(window.quizesSets.length / state.itemsPerPage);
  const isCurrentPageFirst = state.currentPage === 0;
  const isCurrentPageLast = state.currentPage === pagesCount - 1;

  const onPreviousPageClick = () => {
    if (state.currentPage < 1) {
      localDispatch({
        type: "SEED_STATE",
        payload: {
          objects: {
            currentPage: 0,
          }
        }
      })
    } else {
      localDispatch({
        type: "SEED_STATE",
        payload: {
          objects: {
            currentPage: state.currentPage - 1
          }
        }
      })
    }
  };

  const onNextPageClick = () => {
    if ((state.currentPage + 2) > pagesCount) return;
    localDispatch({
      type: "SEED_STATE",
      payload: {
        objects: {
          currentPage: state.currentPage + 1
        }
      }
    })
  };


  function doSelectQuiz(index) {
   
    localDispatch({
      type: "SEED_STATE",
      payload: {
        objects: {
          loading: true,
          selectedQuiz: index
        }
      }
    });
    setTimeout(()=>{
       localDispatch({
      type: "SEED_STATE",
      payload: {
        objects: {
          loading: false,
         // selectedQuiz: index
        }
      }
    })
    }, 475)
    // setLoading(true);
    // setSelectedQuiz(index);
    // setLoading(false);
  }

  let quizId = quizesIds[state.selectedQuiz]
  let quizprops = window.quizesSets.find(quiz => quiz.id === quizId);


  if (quizesIds.length > 10) {

    let items = [];
    for (let index = state.currentPage * state.itemsPerPage; index < state.currentPage * state.itemsPerPage + state.itemsPerPage; index++) {
      items.push(
        <li className={index === state.selectedQuiz ? "page-item active" : "page-item"}
          onClick={() => doSelectQuiz(index)}
        ><a className="page-link" href="#">
            {index + 1}
          </a></li>
      );
    }


    return <div className="m-1">
      <nav aria-label="Page navigation example">

        <a className="navbar-brand" href="#">{setTitle}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>



        <ul className="pagination pagination-sm justify-content-end">
          <li className={isCurrentPageFirst ? "page-item disabled" : "page-item"}
            onClick={onPreviousPageClick}
          >
            <a className="page-link" href="#" tabindex="-1">{"<<"}</a>
          </li>
          {items}
          <li className={isCurrentPageLast ? "page-item disabled" : "page-item"}
            onClick={onNextPageClick}
          >
            <a className="page-link" href="#">{">>"}</a>
          </li>
        </ul>
      </nav>
      <hr />

      {state.loading || !isObject(quizprops) ? <div>...</div> : <QuizCardWithStorage key={quizId} setId={state.selectedQuiz + 1} {...quizprops} isExam={isExam} />}

      {isExam ? <button className="btn btn-sm btn-outline-secondary m-5" onClick={() =>
        localDispatch({
          type: "SEED_STATE",
          payload: {
            objects: {
              showQuizResults: true
            }
          }
        })
      }>Завершить тест и записать результат</button> : null}

    </div>
  }

  return <div className="m-1">
    <Navbar bg="light">
      <Navbar.Brand >{setTitle}</Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <ButtonGroup size={quizesIds < 5 ? "lg" : "sm"}>
          {window.quizesSets.map((quiz, index) => (
            <Button
              variant={state.selectedQuiz === index ? "secondary" : "outline-secondary"}
              onClick={() => doSelectQuiz(index)}
              key={index}
            >
              {quizesIds < 10 ? <span className="m-2" >{index + 1}</span> : <small>{index + 1}</small>}
            </Button>
          ))}
        </ButtonGroup>
      </Navbar.Collapse>

    </Navbar>
    <hr />
    {state.loading || !isObject(quizprops) ? <div>...</div> : <QuizCardWithStorage key={quizId} setId={state.selectedQuiz + 1} {...quizprops} isExam={isExam} />}
    {isExam ? <button className="btn btn-sm btn-outline-secondary m-5" onClick={() => localDispatch({
      type: "SEED_STATE",
      payload: {
        objects: {
          showQuizResults: true
        }
      }
    })}>Завершить тест и записать результат</button> : null}
  </div>
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


function caseReducer(state = {}, action) {
  // console.log(action);
  switch (action.type) {
    case "SEED_STATE": {
      return basicfirebasecrudservices.produce(state, (draft) => {
        Object.keys(action.payload.objects).map((key) => {
          draft[key] = action.payload.objects[key];
        });
      });
    }
    default:
      return state;
  }
}


function App() {
  const [state, localDispatch] = useReducer(caseReducer, {
    email: null,
    user: null,
    userEmail: null,
    isLoading: null,
    isExam: null
  })

  useEffect(() => {
    const serializedState = localStorage.getItem('econolabs');
    if (serializedState === null) {
      localDispatch({
        type: "SEED_STATE",
        payload: {
          objects: {
            isLoading: false,
          }
        }
      })
    } else {
      let application = JSON.parse(serializedState)?.application;
      console.log(application);
      localDispatch({
        type: "SEED_STATE",
        payload: {
          objects: {
            user: application?.user ? application.user : null,
            email: application?.email ? application.email : null,
            isLoading: false,
            isExam: !!document.body.dataset?.exam ? true : false
          }
        }
      })
    }
  }, [])

  console.log(state);

  if (state?.isLoading) { return <div>...</div> }

  if (!state?.email || state?.email.length < 5 || state?.user.length < 5) {
    return <SimpleUserForm />
  }


  // if (isExam && !doContinue && posts.length > 0) {       
  //     return <StartOrContinueExam setDoContinue={()=>setDoContinue()}/>
  // }

  if (state.isExam) {
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
