(function (React$1, client, toolkit) {
	'use strict';

	function _interopNamespaceDefault(e) {
		var n = Object.create(null);
		if (e) {
			Object.keys(e).forEach(function (k) {
				if (k !== 'default') {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function () { return e[k]; }
					});
				}
			});
		}
		n.default = e;
		return Object.freeze(n);
	}

	var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React$1);

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function getAugmentedNamespace(n) {
	  if (Object.prototype.hasOwnProperty.call(n, '__esModule')) return n;
	  var f = n.default;
		if (typeof f == "function") {
			var a = function a () {
				var isInstance = false;
	      try {
	        isInstance = this instanceof a;
	      } catch {}
				if (isInstance) {
	        return Reflect.construct(f, arguments, this.constructor);
				}
				return f.apply(this, arguments);
			};
			a.prototype = f.prototype;
	  } else a = {};
	  Object.defineProperty(a, '__esModule', {value: true});
		Object.keys(n).forEach(function (k) {
			var d = Object.getOwnPropertyDescriptor(n, k);
			Object.defineProperty(a, k, d.get ? d : {
				enumerable: true,
				get: function () {
					return n[k];
				}
			});
		});
		return a;
	}

	var withSelector = {exports: {}};

	var useSyncExternalStoreWithSelector_production = {};

	/**
	 * @license React
	 * use-sync-external-store-with-selector.production.js
	 *
	 * Copyright (c) Meta Platforms, Inc. and affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredUseSyncExternalStoreWithSelector_production;

	function requireUseSyncExternalStoreWithSelector_production () {
		if (hasRequiredUseSyncExternalStoreWithSelector_production) return useSyncExternalStoreWithSelector_production;
		hasRequiredUseSyncExternalStoreWithSelector_production = 1;
		var React = React$1;
		function is(x, y) {
		  return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
		}
		var objectIs = "function" === typeof Object.is ? Object.is : is,
		  useSyncExternalStore = React.useSyncExternalStore,
		  useRef = React.useRef,
		  useEffect = React.useEffect,
		  useMemo = React.useMemo,
		  useDebugValue = React.useDebugValue;
		useSyncExternalStoreWithSelector_production.useSyncExternalStoreWithSelector = function (
		  subscribe,
		  getSnapshot,
		  getServerSnapshot,
		  selector,
		  isEqual
		) {
		  var instRef = useRef(null);
		  if (null === instRef.current) {
		    var inst = { hasValue: false, value: null };
		    instRef.current = inst;
		  } else inst = instRef.current;
		  instRef = useMemo(
		    function () {
		      function memoizedSelector(nextSnapshot) {
		        if (!hasMemo) {
		          hasMemo = true;
		          memoizedSnapshot = nextSnapshot;
		          nextSnapshot = selector(nextSnapshot);
		          if (void 0 !== isEqual && inst.hasValue) {
		            var currentSelection = inst.value;
		            if (isEqual(currentSelection, nextSnapshot))
		              return (memoizedSelection = currentSelection);
		          }
		          return (memoizedSelection = nextSnapshot);
		        }
		        currentSelection = memoizedSelection;
		        if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
		        var nextSelection = selector(nextSnapshot);
		        if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
		          return (memoizedSnapshot = nextSnapshot), currentSelection;
		        memoizedSnapshot = nextSnapshot;
		        return (memoizedSelection = nextSelection);
		      }
		      var hasMemo = false,
		        memoizedSnapshot,
		        memoizedSelection,
		        maybeGetServerSnapshot =
		          void 0 === getServerSnapshot ? null : getServerSnapshot;
		      return [
		        function () {
		          return memoizedSelector(getSnapshot());
		        },
		        null === maybeGetServerSnapshot
		          ? void 0
		          : function () {
		              return memoizedSelector(maybeGetServerSnapshot());
		            }
		      ];
		    },
		    [getSnapshot, getServerSnapshot, selector, isEqual]
		  );
		  var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
		  useEffect(
		    function () {
		      inst.hasValue = true;
		      inst.value = value;
		    },
		    [value]
		  );
		  useDebugValue(value);
		  return value;
		};
		return useSyncExternalStoreWithSelector_production;
	}

	var hasRequiredWithSelector;

	function requireWithSelector () {
		if (hasRequiredWithSelector) return withSelector.exports;
		hasRequiredWithSelector = 1;

		{
		  withSelector.exports = requireUseSyncExternalStoreWithSelector_production();
		}
		return withSelector.exports;
	}

	var withSelectorExports = requireWithSelector();

	// src/utils/react.ts

	// src/utils/batch.ts
	function defaultNoopBatch(callback) {
	  callback();
	}

	// src/utils/Subscription.ts
	function createListenerCollection() {
	  let first = null;
	  let last = null;
	  return {
	    clear() {
	      first = null;
	      last = null;
	    },
	    notify() {
	      defaultNoopBatch(() => {
	        let listener = first;
	        while (listener) {
	          listener.callback();
	          listener = listener.next;
	        }
	      });
	    },
	    get() {
	      const listeners = [];
	      let listener = first;
	      while (listener) {
	        listeners.push(listener);
	        listener = listener.next;
	      }
	      return listeners;
	    },
	    subscribe(callback) {
	      let isSubscribed = true;
	      const listener = last = {
	        callback,
	        next: null,
	        prev: last
	      };
	      if (listener.prev) {
	        listener.prev.next = listener;
	      } else {
	        first = listener;
	      }
	      return function unsubscribe() {
	        if (!isSubscribed || first === null) return;
	        isSubscribed = false;
	        if (listener.next) {
	          listener.next.prev = listener.prev;
	        } else {
	          last = listener.prev;
	        }
	        if (listener.prev) {
	          listener.prev.next = listener.next;
	        } else {
	          first = listener.next;
	        }
	      };
	    }
	  };
	}
	var nullListeners = {
	  notify() {
	  },
	  get: () => []
	};
	function createSubscription(store, parentSub) {
	  let unsubscribe;
	  let listeners = nullListeners;
	  let subscriptionsAmount = 0;
	  let selfSubscribed = false;
	  function addNestedSub(listener) {
	    trySubscribe();
	    const cleanupListener = listeners.subscribe(listener);
	    let removed = false;
	    return () => {
	      if (!removed) {
	        removed = true;
	        cleanupListener();
	        tryUnsubscribe();
	      }
	    };
	  }
	  function notifyNestedSubs() {
	    listeners.notify();
	  }
	  function handleChangeWrapper() {
	    if (subscription.onStateChange) {
	      subscription.onStateChange();
	    }
	  }
	  function isSubscribed() {
	    return selfSubscribed;
	  }
	  function trySubscribe() {
	    subscriptionsAmount++;
	    if (!unsubscribe) {
	      unsubscribe = store.subscribe(handleChangeWrapper);
	      listeners = createListenerCollection();
	    }
	  }
	  function tryUnsubscribe() {
	    subscriptionsAmount--;
	    if (unsubscribe && subscriptionsAmount === 0) {
	      unsubscribe();
	      unsubscribe = void 0;
	      listeners.clear();
	      listeners = nullListeners;
	    }
	  }
	  function trySubscribeSelf() {
	    if (!selfSubscribed) {
	      selfSubscribed = true;
	      trySubscribe();
	    }
	  }
	  function tryUnsubscribeSelf() {
	    if (selfSubscribed) {
	      selfSubscribed = false;
	      tryUnsubscribe();
	    }
	  }
	  const subscription = {
	    addNestedSub,
	    notifyNestedSubs,
	    handleChangeWrapper,
	    isSubscribed,
	    trySubscribe: trySubscribeSelf,
	    tryUnsubscribe: tryUnsubscribeSelf,
	    getListeners: () => listeners
	  };
	  return subscription;
	}

	// src/utils/useIsomorphicLayoutEffect.ts
	var canUseDOM = () => !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
	var isDOM = /* @__PURE__ */ canUseDOM();
	var isRunningInReactNative = () => typeof navigator !== "undefined" && navigator.product === "ReactNative";
	var isReactNative = /* @__PURE__ */ isRunningInReactNative();
	var getUseIsomorphicLayoutEffect = () => isDOM || isReactNative ? React__namespace.useLayoutEffect : React__namespace.useEffect;
	var useIsomorphicLayoutEffect = /* @__PURE__ */ getUseIsomorphicLayoutEffect();

	// src/components/Context.ts
	var ContextKey = /* @__PURE__ */ Symbol.for(`react-redux-context`);
	var gT = typeof globalThis !== "undefined" ? globalThis : (
	  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
	  {}
	);
	function getContext() {
	  if (!React__namespace.createContext) return {};
	  const contextMap = gT[ContextKey] ??= /* @__PURE__ */ new Map();
	  let realContext = contextMap.get(React__namespace.createContext);
	  if (!realContext) {
	    realContext = React__namespace.createContext(
	      null
	    );
	    contextMap.set(React__namespace.createContext, realContext);
	  }
	  return realContext;
	}
	var ReactReduxContext = /* @__PURE__ */ getContext();

	// src/components/Provider.tsx
	function Provider(providerProps) {
	  const { children, context, serverState, store } = providerProps;
	  const contextValue = React__namespace.useMemo(() => {
	    const subscription = createSubscription(store);
	    const baseContextValue = {
	      store,
	      subscription,
	      getServerState: serverState ? () => serverState : void 0
	    };
	    {
	      return baseContextValue;
	    }
	  }, [store, serverState]);
	  const previousState = React__namespace.useMemo(() => store.getState(), [store]);
	  useIsomorphicLayoutEffect(() => {
	    const { subscription } = contextValue;
	    subscription.onStateChange = subscription.notifyNestedSubs;
	    subscription.trySubscribe();
	    if (previousState !== store.getState()) {
	      subscription.notifyNestedSubs();
	    }
	    return () => {
	      subscription.tryUnsubscribe();
	      subscription.onStateChange = void 0;
	    };
	  }, [contextValue, previousState]);
	  const Context = context || ReactReduxContext;
	  return /* @__PURE__ */ React__namespace.createElement(Context.Provider, { value: contextValue }, children);
	}
	var Provider_default = Provider;

	// src/hooks/useReduxContext.ts
	function createReduxContextHook(context = ReactReduxContext) {
	  return function useReduxContext2() {
	    const contextValue = React__namespace.useContext(context);
	    return contextValue;
	  };
	}
	var useReduxContext = /* @__PURE__ */ createReduxContextHook();

	// src/hooks/useStore.ts
	function createStoreHook(context = ReactReduxContext) {
	  const useReduxContext2 = context === ReactReduxContext ? useReduxContext : (
	    // @ts-ignore
	    createReduxContextHook(context)
	  );
	  const useStore2 = () => {
	    const { store } = useReduxContext2();
	    return store;
	  };
	  Object.assign(useStore2, {
	    withTypes: () => useStore2
	  });
	  return useStore2;
	}
	var useStore = /* @__PURE__ */ createStoreHook();

	// src/hooks/useDispatch.ts
	function createDispatchHook(context = ReactReduxContext) {
	  const useStore2 = context === ReactReduxContext ? useStore : createStoreHook(context);
	  const useDispatch2 = () => {
	    const store = useStore2();
	    return store.dispatch;
	  };
	  Object.assign(useDispatch2, {
	    withTypes: () => useDispatch2
	  });
	  return useDispatch2;
	}
	var useDispatch = /* @__PURE__ */ createDispatchHook();
	var refEquality = (a, b) => a === b;
	function createSelectorHook(context = ReactReduxContext) {
	  const useReduxContext2 = context === ReactReduxContext ? useReduxContext : createReduxContextHook(context);
	  const useSelector2 = (selector, equalityFnOrOptions = {}) => {
	    const { equalityFn = refEquality } = typeof equalityFnOrOptions === "function" ? { equalityFn: equalityFnOrOptions } : equalityFnOrOptions;
	    const reduxContext = useReduxContext2();
	    const { store, subscription, getServerState } = reduxContext;
	    React__namespace.useRef(true);
	    const wrappedSelector = React__namespace.useCallback(
	      {
	        [selector.name](state) {
	          const selected = selector(state);
	          return selected;
	        }
	      }[selector.name],
	      [selector]
	    );
	    const selectedState = withSelectorExports.useSyncExternalStoreWithSelector(
	      subscription.addNestedSub,
	      store.getState,
	      getServerState || store.getState,
	      wrappedSelector,
	      equalityFn
	    );
	    React__namespace.useDebugValue(selectedState);
	    return selectedState;
	  };
	  Object.assign(useSelector2, {
	    withTypes: () => useSelector2
	  });
	  return useSelector2;
	}
	var useSelector = /* @__PURE__ */ createSelectorHook();

	//import { Parser as FormulaParser } from "hot-formula-parser";
	//import produce from "immer";

	//let { createNewDraft } = window.basicfirebasecrudauthservices

	function createNewDraft$1(data) {
	  console.log(data);

	  //   return calcDataWithImmer(data)
	}

	const alphabet$2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	function createProtoArray$1(protoDataObject = {}, maxRow = 15, maxColumn = 6) {
	  Object.keys(protoDataObject).map(objKey => {
	    const [col, ...row] = objKey;
	    let currentColIndex = alphabet$2.findIndex(item => item === col);
	    if (currentColIndex > maxColumn) {
	      maxColumn = currentColIndex;
	    }
	    if (parseInt(row) > maxRow) {
	      maxRow = parseInt(row);
	    }
	  });
	  //  console.log(maxColumn, maxRow);

	  var array = new Array(maxRow);
	  for (var i = 0; i < array.length; i++) {
	    array[i] = Array(maxColumn + 1).fill('');
	  }
	  Object.keys(protoDataObject).map(objKey => {
	    const [col, ...row] = objKey;
	    let colArrayIndex = alphabet$2.findIndex(item => item === col);
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
	        protoObject[alphabet$2[j] + (i + 1)] = protoArray[i][j];
	      }
	    }
	  }
	  return protoObject;
	}
	function insert(arr, index, newItem) {
	  return [
	  // part of the array before the specified index
	  ...arr.slice(0, index),
	  // inserted item
	  newItem,
	  // part of the array after the specified index
	  ...arr.slice(index)];
	}
	const spreadsheetSlice = toolkit.createSlice({
	  name: "spreadsheet",
	  initialState: {
	    //    value: 0,
	    protoData: createProtoArray$1({}, 6, 6),
	    data: createNewDraft$1(createProtoArray$1({}, 6, 6)),
	    formulaValue: "",
	    //createProtoArray(emptyProtoDataObject)[0][0],
	    formulaRowIndex: 0,
	    formulaColumnIndex: 0,
	    spreadsheetTitle: ''
	    // expandView: false
	  },
	  reducers: {
	    // increment: (state) => {
	    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
	    //   // doesn't actually mutate the state because it uses the Immer library,
	    //   // which detects changes to a "draft state" and produces a brand new
	    //   // immutable state based off those changes
	    //   state.value += 1;
	    // },
	    // decrement: (state) => {
	    //   state.value -= 1;
	    // },
	    // incrementByAmount: (state, action) => {
	    //   state.value += action.payload;
	    // },
	    // toggle_expand_view: (state) => {
	    //   state.expandView = !state.expandView
	    // },
	    add_row_under: state => {
	      let add_row_under_newProtoData = JSON.parse(JSON.stringify(state.protoData));
	      let newRow = new Array(add_row_under_newProtoData[0].length).fill("");
	      add_row_under_newProtoData = insert(add_row_under_newProtoData, state.formulaRowIndex + 1, newRow);
	      state.data = createNewDraft$1(add_row_under_newProtoData);
	      state.protoData = add_row_under_newProtoData;
	    },
	    add_row_before: state => {
	      let add_row_before_newProtoData = JSON.parse(JSON.stringify(state.protoData));
	      let newProtoBeforeRow = new Array(add_row_before_newProtoData[0].length).fill("");
	      add_row_before_newProtoData = insert(add_row_before_newProtoData, state.formulaRowIndex, newProtoBeforeRow);
	      state.data = createNewDraft$1(add_row_before_newProtoData);
	      state.protoData = add_row_before_newProtoData;
	    },
	    delete_row: state => {
	      let delete_row__newProtoData = JSON.parse(JSON.stringify(state.protoData));
	      delete_row__newProtoData = delete_row__newProtoData.filter((row, index) => index !== state.formulaRowIndex);
	      state.data = createNewDraft$1(delete_row__newProtoData);
	      state.protoData = delete_row__newProtoData;
	    },
	    add_column_after: state => {
	      let add_column_after__newProtoData = JSON.parse(JSON.stringify(state.protoData));
	      add_column_after__newProtoData = state.protoData.map(row => {
	        return insert(row, state.formulaColumnIndex + 1, "");
	      });
	      state.data = createNewDraft$1(add_column_after__newProtoData);
	      state.protoData = add_column_after__newProtoData;
	    },
	    add_column_before: state => {
	      let add_column_before__newProtoData = JSON.parse(JSON.stringify(state.protoData));
	      add_column_before__newProtoData = state.protoData.map(row => {
	        return insert(row, state.formulaColumnIndex, "");
	      });
	      state.data = createNewDraft$1(add_column_before__newProtoData);
	      state.protoData = add_column_before__newProtoData;
	    },
	    delete_column: state => {
	      let delete_column__newProtoData = JSON.parse(JSON.stringify(state.protoData));
	      delete_column__newProtoData = state.protoData.map(row => {
	        return row.filter((element, index) => index !== state.formulaColumnIndex);
	      });
	      state.data = createNewDraft$1(delete_column__newProtoData);
	      state.protoData = delete_column__newProtoData;
	    },
	    update_formula: (state, action) => {
	      state.formulaValue = action.payload.value;
	      state.formulaRowIndex = action.payload.rowIndex;
	      state.formulaColumnIndex = action.payload.columnIndex;
	    },
	    update_data: (state, action) => {
	      let newProtoData = JSON.parse(JSON.stringify(state.protoData));
	      newProtoData[action.payload.rowIndex][action.payload.columnIndex] = action.payload.value;
	      state.data = createNewDraft$1(newProtoData);
	      state.protoData = newProtoData;
	    },
	    load_data: (state, action) => {
	      state.data = createNewDraft$1(action.payload.protoData);
	      state.protoData = action.payload.protoData;
	      state.expandView = true;
	    },
	    new_empty_spreadsheet: state => {
	      let protoArray = createProtoArray$1({}, 6, 6);
	      state.protoData = protoArray;
	      state.data = createNewDraft$1(protoArray);
	      state.formulaValue = protoArray[0][0];
	      state.expandView = true;
	    },
	    set_spreadsheetTitle: (state, action) => {
	      state.spreadsheetTitle = action.payload.spreadsheetTitle;
	    }
	  }
	});
	const {
	  // increment,
	  // decrement,
	  // incrementByAmount,
	  add_row_under,
	  add_row_before,
	  delete_row,
	  add_column_after,
	  add_column_before,
	  delete_column,
	  update_formula,
	  update_data,
	  load_data,
	  new_empty_spreadsheet,
	  set_spreadsheetTitle

	  // toggle_expand_view
	} = spreadsheetSlice.actions;

	// The function below is called a thunk and allows us to perform async logic. It
	// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
	// will call the thunk with the `dispatch` function as the first argument. Async
	// code can then be executed and other actions can be dispatched
	// export const incrementAsync = (amount) => (dispatch) => {
	//   setTimeout(() => {
	//     dispatch(incrementByAmount(amount));
	//   }, 1000);
	// };

	// The function below is called a selector and allows us to select a value from
	// the state. Selectors can also be defined inline where they're used instead of
	// in the slice file. For example: `useSelector((state) => state.counter.value)`
	//export const selectSpreadsheetValue = (state) => state.spreadsheet.value;

	const selectSpreadsheetProtoData = state => state.spreadsheet.protoData;
	const selectSpreadsheetData = state => state.spreadsheet.data;
	const selectSpreadsheetFormulaValue = state => state.spreadsheet.formulaValue;
	const selectSpreadsheetFormulaRowIndex = state => state.spreadsheet.formulaRowIndex;
	const selectSpreadsheetFormulaColumnIndex = state => state.spreadsheet.formulaColumnIndex;
	const selectSpreadsheetTitle = state => state.spreadsheet.spreadsheetTitle;

	// export const selectSpreadsheetExpand = (state) =>
	// state.spreadsheet.expandView;

	var spreadsheetReducer = spreadsheetSlice.reducer;

	//import localForage from 'localforage';

	// export let posts = localForage.createInstance({
	//     name: "posts"
	// });

	const loadState$1 = () => {
	  try {
	    const serializedState = localStorage.getItem('econolabs');
	    if (serializedState === null) {
	      return undefined;
	    }
	    return JSON.parse(serializedState);
	  } catch (err) {
	    return undefined;
	  }
	};
	const postsSlice = toolkit.createSlice({
	  name: 'posts',
	  initialState: {
	    posts: !!loadState$1() && !!loadState$1()?.posts?.posts ? loadState$1().posts.posts : [],
	    loading: false,
	    hasErrors: false
	  },
	  reducers: {
	    createPost: (state, action) => {
	      state.posts.push(action.payload);
	      //       let newPosts = [...state.posts, action.payload ];
	      //       savePostsInBrowser(state.posts);
	    },
	    setPostsArrayItems: (state, action) => {
	      state.posts = action.payload;
	    },
	    change_post_content: (state, action) => {
	      let arrayId = state.posts.findIndex(item => item.id === action.payload.id);
	      state.posts[arrayId].content = action.payload.content;
	    },
	    mark_del_post: (state, action) => {
	      let arrayId = state.posts.findIndex(item => item.id === action.payload.id);
	      state.posts[arrayId].deleted = !state.posts[arrayId].deleted;
	    },
	    getPosts: state => {
	      state.loading = true;
	    },
	    getPostsSuccess: (state, {
	      payload
	    }) => {
	      state.posts = payload;
	      state.loading = false;
	      state.hasErrors = false;
	    },
	    savePostsSuccess: (state, {
	      payload
	    }) => {
	      //    state.posts = payload
	      state.loading = false;
	      state.hasErrors = false;
	    },
	    getPostsFailure: state => {
	      state.loading = false;
	      state.hasErrors = true;
	    }
	  }
	});
	const {
	  createPost,
	  change_post_content,
	  mark_del_post,
	  getPosts,
	  getPostsSuccess,
	  getPostsFailure,
	  savePostsSuccess,
	  setPostsArrayItems
	} = postsSlice.actions;

	// The function below is called a thunk and allows us to perform async logic. It
	// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
	// will call the thunk with the `dispatch` function as the first argument. Async
	// code can then be executed and other actions can be dispatched
	// export const incrementAsync = amount => dispatch => {
	//     setTimeout(() => {
	//       dispatch(incrementByAmount(amount));
	//     }, 1000);
	//   };

	// export function showPostsInBrowser() {
	//     return async dispatch => {
	//         dispatch(getPosts())
	//         try {
	//             const data = await posts.getItem('postsArray');

	//             // const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
	//             // const data = await response.json()

	//             console.log(data);
	//             dispatch(getPostsSuccess(!!data ? data : []))
	//         } catch (error) {
	//             dispatch(getPostsFailure())
	//         }
	//     }
	// }  

	// export function savePostsInBrowser(posts) {
	//     return async dispatch => {
	//    //     dispatch(getPosts())
	//         try {
	//             const data = await posts.setItem('postsArray', posts);
	//             // const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
	//             // const data = await response.json()
	//             console.log(data);
	//             dispatch(savePostsSuccess())
	//         } catch (error) {
	//             dispatch(getPostsFailure())
	//         }
	//     }
	// } 

	var postsReducer = postsSlice.reducer;

	const tempSlice = toolkit.createSlice({
	  name: 'temp',
	  initialState: {
	    dataObject: {},
	    dataArray: [],
	    dataString: "",
	    firenode: null,
	    type: null,
	    ckeditor_node_id: null,
	    ckeditor_node_content: null
	  },
	  reducers: {
	    setTempDataObject: (state, action) => {
	      state.dataObject = action.payload?.dataObject;
	      state.firenode = action.payload?.firenode;
	      state.type = action.payload?.type;
	    },
	    setTempDataArrayItems: (state, action) => {
	      state.dataArray = action.payload;
	    },
	    pushTempDataArrayItem: (state, action) => {
	      state.dataArray.push(action.payload);
	    },
	    addArrayItemsToTempDataArray: (state, action) => {
	      let newDataArray = [...state.dataArray, ...action.payload];
	      state.dataArray = newDataArray;
	    },
	    setTempFireNode: (state, action) => {
	      state.firenode = action.payload;
	    },
	    setTempType: (state, action) => {
	      state.type = action.payload;
	    },
	    emptyTempData: state => {
	      state.dataObject = {};
	      state.dataArray = [];
	      state.firenode = null;
	      state.type = null;
	      state.dataString = "";
	    },
	    setTempDataString: (state, action) => {
	      state.dataString = action.payload;
	    },
	    emptyCKEditorData: (state, action) => {
	      state.ckeditor_node_id = null;
	      state.ckeditor_node_content = null;
	    },
	    setCKEditorContent: (state, action) => {
	      state.ckeditor_node_content = action.payload;
	    },
	    setCKEditorNodeId: (state, action) => {
	      state.ckeditor_node_id = action.payload;
	    }
	  }
	});
	const {
	  setTempDataObject,
	  pushTempDataArrayItem,
	  addArrayItemsToTempDataArray,
	  setTempDataArrayItems,
	  setTempFireNode,
	  setTempType,
	  emptyTempData,
	  setTempDataString,
	  emptyCKEditorData: emptyCKEditorData$1,
	  setCKEditorContent: setCKEditorContent$1,
	  setCKEditorNodeId: setCKEditorNodeId$1
	} = tempSlice.actions;

	// The function below is called a thunk and allows us to perform async logic. It
	// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
	// will call the thunk with the `dispatch` function as the first argument. Async
	// code can then be executed and other actions can be dispatched
	// export const incrementAsync = amount => dispatch => {
	//     setTimeout(() => {
	//       dispatch(incrementByAmount(amount));
	//     }, 1000);
	//   };

	var tempReducer = tempSlice.reducer;

	const loadState = () => {
	  try {
	    const serializedState = localStorage.getItem('econolabs');
	    if (serializedState === null) {
	      return undefined;
	    }
	    return JSON.parse(serializedState);
	  } catch (err) {
	    return undefined;
	  }
	};
	const applicationSlice = toolkit.createSlice({
	  name: 'application',
	  initialState: !!loadState() && !!loadState()?.application ? {
	    ...loadState().application
	  } : {
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
	    set_user_profile: (state, action) => {
	      state.email = action.payload.email;
	      state.user = action.payload.user;
	      state.avatarUrl = action.payload.avatarUrl;
	    },
	    set_currentProject: (state, action) => {
	      state.currentProjectTitle = action.payload.currentProjectTitle;
	      state.currentProjectComment = action.payload.currentProjectComment;
	      state.currentProjectMediaAndDataAndTemplatesURL = action.payload.currentProjectMediaAndDataAndTemplatesURL;
	      state.currentProjectSourseDataURL = action.payload.currentProjectSourseDataURL;
	      state.currentProjectMoneyScale = action.payload.currentProjectMoneyScale;
	      state.currentProjectReportIndicatorsDictionary = action.payload.currentProjectReportIndicatorsDictionary;
	    }
	  }
	});
	const {
	  set_user_profile,
	  set_currentProject
	} = applicationSlice.actions;

	// The function below is called a selector and allows us to select a value from
	// the state. Selectors can also be defined inline where they're used instead of
	// in the slice file. For example: `useSelector((state) => state.counter.value)`

	const selectApplication = state => state.application;
	var applicationReducer = applicationSlice.reducer;

	const ckeditorSlice = toolkit.createSlice({
	  name: 'ckeditor',
	  initialState: {
	    ckeditor_node_id: null,
	    ckeditor_node_content: null
	  },
	  reducers: {
	    emptyCKEditorData: (state, action) => {
	      state.ckeditor_node_id = null;
	      state.ckeditor_node_content = null;
	    },
	    setCKEditorContent: (state, action) => {
	      state.ckeditor_node_content = action.payload;
	    },
	    setCKEditorNodeId: (state, action) => {
	      state.ckeditor_node_id = action.payload;
	    }
	  }
	});
	const {
	  emptyCKEditorData,
	  setCKEditorContent,
	  setCKEditorNodeId
	} = ckeditorSlice.actions;

	// The function below is called a thunk and allows us to perform async logic. It
	// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
	// will call the thunk with the `dispatch` function as the first argument. Async
	// code can then be executed and other actions can be dispatched
	// export const incrementAsync = amount => dispatch => {
	//     setTimeout(() => {
	//       dispatch(incrementByAmount(amount));
	//     }, 1000);
	//   };

	ckeditorSlice.reducer;

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */

	var isObject_1;
	var hasRequiredIsObject;

	function requireIsObject () {
		if (hasRequiredIsObject) return isObject_1;
		hasRequiredIsObject = 1;
		function isObject(value) {
		  var type = typeof value;
		  return value != null && (type == 'object' || type == 'function');
		}

		isObject_1 = isObject;
		return isObject_1;
	}

	/** Detect free variable `global` from Node.js. */

	var _freeGlobal;
	var hasRequired_freeGlobal;

	function require_freeGlobal () {
		if (hasRequired_freeGlobal) return _freeGlobal;
		hasRequired_freeGlobal = 1;
		var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

		_freeGlobal = freeGlobal;
		return _freeGlobal;
	}

	var _root;
	var hasRequired_root;

	function require_root () {
		if (hasRequired_root) return _root;
		hasRequired_root = 1;
		var freeGlobal = require_freeGlobal();

		/** Detect free variable `self`. */
		var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

		/** Used as a reference to the global object. */
		var root = freeGlobal || freeSelf || Function('return this')();

		_root = root;
		return _root;
	}

	var now_1;
	var hasRequiredNow;

	function requireNow () {
		if (hasRequiredNow) return now_1;
		hasRequiredNow = 1;
		var root = require_root();

		/**
		 * Gets the timestamp of the number of milliseconds that have elapsed since
		 * the Unix epoch (1 January 1970 00:00:00 UTC).
		 *
		 * @static
		 * @memberOf _
		 * @since 2.4.0
		 * @category Date
		 * @returns {number} Returns the timestamp.
		 * @example
		 *
		 * _.defer(function(stamp) {
		 *   console.log(_.now() - stamp);
		 * }, _.now());
		 * // => Logs the number of milliseconds it took for the deferred invocation.
		 */
		var now = function() {
		  return root.Date.now();
		};

		now_1 = now;
		return now_1;
	}

	/** Used to match a single whitespace character. */

	var _trimmedEndIndex;
	var hasRequired_trimmedEndIndex;

	function require_trimmedEndIndex () {
		if (hasRequired_trimmedEndIndex) return _trimmedEndIndex;
		hasRequired_trimmedEndIndex = 1;
		var reWhitespace = /\s/;

		/**
		 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
		 * character of `string`.
		 *
		 * @private
		 * @param {string} string The string to inspect.
		 * @returns {number} Returns the index of the last non-whitespace character.
		 */
		function trimmedEndIndex(string) {
		  var index = string.length;

		  while (index-- && reWhitespace.test(string.charAt(index))) {}
		  return index;
		}

		_trimmedEndIndex = trimmedEndIndex;
		return _trimmedEndIndex;
	}

	var _baseTrim;
	var hasRequired_baseTrim;

	function require_baseTrim () {
		if (hasRequired_baseTrim) return _baseTrim;
		hasRequired_baseTrim = 1;
		var trimmedEndIndex = require_trimmedEndIndex();

		/** Used to match leading whitespace. */
		var reTrimStart = /^\s+/;

		/**
		 * The base implementation of `_.trim`.
		 *
		 * @private
		 * @param {string} string The string to trim.
		 * @returns {string} Returns the trimmed string.
		 */
		function baseTrim(string) {
		  return string
		    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
		    : string;
		}

		_baseTrim = baseTrim;
		return _baseTrim;
	}

	var _Symbol;
	var hasRequired_Symbol;

	function require_Symbol () {
		if (hasRequired_Symbol) return _Symbol;
		hasRequired_Symbol = 1;
		var root = require_root();

		/** Built-in value references. */
		var Symbol = root.Symbol;

		_Symbol = Symbol;
		return _Symbol;
	}

	var _getRawTag;
	var hasRequired_getRawTag;

	function require_getRawTag () {
		if (hasRequired_getRawTag) return _getRawTag;
		hasRequired_getRawTag = 1;
		var Symbol = require_Symbol();

		/** Used for built-in method references. */
		var objectProto = Object.prototype;

		/** Used to check objects for own properties. */
		var hasOwnProperty = objectProto.hasOwnProperty;

		/**
		 * Used to resolve the
		 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
		 * of values.
		 */
		var nativeObjectToString = objectProto.toString;

		/** Built-in value references. */
		var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

		/**
		 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
		 *
		 * @private
		 * @param {*} value The value to query.
		 * @returns {string} Returns the raw `toStringTag`.
		 */
		function getRawTag(value) {
		  var isOwn = hasOwnProperty.call(value, symToStringTag),
		      tag = value[symToStringTag];

		  try {
		    value[symToStringTag] = undefined;
		    var unmasked = true;
		  } catch (e) {}

		  var result = nativeObjectToString.call(value);
		  if (unmasked) {
		    if (isOwn) {
		      value[symToStringTag] = tag;
		    } else {
		      delete value[symToStringTag];
		    }
		  }
		  return result;
		}

		_getRawTag = getRawTag;
		return _getRawTag;
	}

	/** Used for built-in method references. */

	var _objectToString;
	var hasRequired_objectToString;

	function require_objectToString () {
		if (hasRequired_objectToString) return _objectToString;
		hasRequired_objectToString = 1;
		var objectProto = Object.prototype;

		/**
		 * Used to resolve the
		 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
		 * of values.
		 */
		var nativeObjectToString = objectProto.toString;

		/**
		 * Converts `value` to a string using `Object.prototype.toString`.
		 *
		 * @private
		 * @param {*} value The value to convert.
		 * @returns {string} Returns the converted string.
		 */
		function objectToString(value) {
		  return nativeObjectToString.call(value);
		}

		_objectToString = objectToString;
		return _objectToString;
	}

	var _baseGetTag;
	var hasRequired_baseGetTag;

	function require_baseGetTag () {
		if (hasRequired_baseGetTag) return _baseGetTag;
		hasRequired_baseGetTag = 1;
		var Symbol = require_Symbol(),
		    getRawTag = require_getRawTag(),
		    objectToString = require_objectToString();

		/** `Object#toString` result references. */
		var nullTag = '[object Null]',
		    undefinedTag = '[object Undefined]';

		/** Built-in value references. */
		var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

		/**
		 * The base implementation of `getTag` without fallbacks for buggy environments.
		 *
		 * @private
		 * @param {*} value The value to query.
		 * @returns {string} Returns the `toStringTag`.
		 */
		function baseGetTag(value) {
		  if (value == null) {
		    return value === undefined ? undefinedTag : nullTag;
		  }
		  return (symToStringTag && symToStringTag in Object(value))
		    ? getRawTag(value)
		    : objectToString(value);
		}

		_baseGetTag = baseGetTag;
		return _baseGetTag;
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */

	var isObjectLike_1;
	var hasRequiredIsObjectLike;

	function requireIsObjectLike () {
		if (hasRequiredIsObjectLike) return isObjectLike_1;
		hasRequiredIsObjectLike = 1;
		function isObjectLike(value) {
		  return value != null && typeof value == 'object';
		}

		isObjectLike_1 = isObjectLike;
		return isObjectLike_1;
	}

	var isSymbol_1;
	var hasRequiredIsSymbol;

	function requireIsSymbol () {
		if (hasRequiredIsSymbol) return isSymbol_1;
		hasRequiredIsSymbol = 1;
		var baseGetTag = require_baseGetTag(),
		    isObjectLike = requireIsObjectLike();

		/** `Object#toString` result references. */
		var symbolTag = '[object Symbol]';

		/**
		 * Checks if `value` is classified as a `Symbol` primitive or object.
		 *
		 * @static
		 * @memberOf _
		 * @since 4.0.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
		 * @example
		 *
		 * _.isSymbol(Symbol.iterator);
		 * // => true
		 *
		 * _.isSymbol('abc');
		 * // => false
		 */
		function isSymbol(value) {
		  return typeof value == 'symbol' ||
		    (isObjectLike(value) && baseGetTag(value) == symbolTag);
		}

		isSymbol_1 = isSymbol;
		return isSymbol_1;
	}

	var toNumber_1;
	var hasRequiredToNumber;

	function requireToNumber () {
		if (hasRequiredToNumber) return toNumber_1;
		hasRequiredToNumber = 1;
		var baseTrim = require_baseTrim(),
		    isObject = requireIsObject(),
		    isSymbol = requireIsSymbol();

		/** Used as references for various `Number` constants. */
		var NAN = 0 / 0;

		/** Used to detect bad signed hexadecimal string values. */
		var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

		/** Used to detect binary string values. */
		var reIsBinary = /^0b[01]+$/i;

		/** Used to detect octal string values. */
		var reIsOctal = /^0o[0-7]+$/i;

		/** Built-in method references without a dependency on `root`. */
		var freeParseInt = parseInt;

		/**
		 * Converts `value` to a number.
		 *
		 * @static
		 * @memberOf _
		 * @since 4.0.0
		 * @category Lang
		 * @param {*} value The value to process.
		 * @returns {number} Returns the number.
		 * @example
		 *
		 * _.toNumber(3.2);
		 * // => 3.2
		 *
		 * _.toNumber(Number.MIN_VALUE);
		 * // => 5e-324
		 *
		 * _.toNumber(Infinity);
		 * // => Infinity
		 *
		 * _.toNumber('3.2');
		 * // => 3.2
		 */
		function toNumber(value) {
		  if (typeof value == 'number') {
		    return value;
		  }
		  if (isSymbol(value)) {
		    return NAN;
		  }
		  if (isObject(value)) {
		    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
		    value = isObject(other) ? (other + '') : other;
		  }
		  if (typeof value != 'string') {
		    return value === 0 ? value : +value;
		  }
		  value = baseTrim(value);
		  var isBinary = reIsBinary.test(value);
		  return (isBinary || reIsOctal.test(value))
		    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
		    : (reIsBadHex.test(value) ? NAN : +value);
		}

		toNumber_1 = toNumber;
		return toNumber_1;
	}

	var debounce_1;
	var hasRequiredDebounce;

	function requireDebounce () {
		if (hasRequiredDebounce) return debounce_1;
		hasRequiredDebounce = 1;
		var isObject = requireIsObject(),
		    now = requireNow(),
		    toNumber = requireToNumber();

		/** Error message constants. */
		var FUNC_ERROR_TEXT = 'Expected a function';

		/* Built-in method references for those with the same name as other `lodash` methods. */
		var nativeMax = Math.max,
		    nativeMin = Math.min;

		/**
		 * Creates a debounced function that delays invoking `func` until after `wait`
		 * milliseconds have elapsed since the last time the debounced function was
		 * invoked. The debounced function comes with a `cancel` method to cancel
		 * delayed `func` invocations and a `flush` method to immediately invoke them.
		 * Provide `options` to indicate whether `func` should be invoked on the
		 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
		 * with the last arguments provided to the debounced function. Subsequent
		 * calls to the debounced function return the result of the last `func`
		 * invocation.
		 *
		 * **Note:** If `leading` and `trailing` options are `true`, `func` is
		 * invoked on the trailing edge of the timeout only if the debounced function
		 * is invoked more than once during the `wait` timeout.
		 *
		 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
		 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
		 *
		 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
		 * for details over the differences between `_.debounce` and `_.throttle`.
		 *
		 * @static
		 * @memberOf _
		 * @since 0.1.0
		 * @category Function
		 * @param {Function} func The function to debounce.
		 * @param {number} [wait=0] The number of milliseconds to delay.
		 * @param {Object} [options={}] The options object.
		 * @param {boolean} [options.leading=false]
		 *  Specify invoking on the leading edge of the timeout.
		 * @param {number} [options.maxWait]
		 *  The maximum time `func` is allowed to be delayed before it's invoked.
		 * @param {boolean} [options.trailing=true]
		 *  Specify invoking on the trailing edge of the timeout.
		 * @returns {Function} Returns the new debounced function.
		 * @example
		 *
		 * // Avoid costly calculations while the window size is in flux.
		 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
		 *
		 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
		 * jQuery(element).on('click', _.debounce(sendMail, 300, {
		 *   'leading': true,
		 *   'trailing': false
		 * }));
		 *
		 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
		 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
		 * var source = new EventSource('/stream');
		 * jQuery(source).on('message', debounced);
		 *
		 * // Cancel the trailing debounced invocation.
		 * jQuery(window).on('popstate', debounced.cancel);
		 */
		function debounce(func, wait, options) {
		  var lastArgs,
		      lastThis,
		      maxWait,
		      result,
		      timerId,
		      lastCallTime,
		      lastInvokeTime = 0,
		      leading = false,
		      maxing = false,
		      trailing = true;

		  if (typeof func != 'function') {
		    throw new TypeError(FUNC_ERROR_TEXT);
		  }
		  wait = toNumber(wait) || 0;
		  if (isObject(options)) {
		    leading = !!options.leading;
		    maxing = 'maxWait' in options;
		    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
		    trailing = 'trailing' in options ? !!options.trailing : trailing;
		  }

		  function invokeFunc(time) {
		    var args = lastArgs,
		        thisArg = lastThis;

		    lastArgs = lastThis = undefined;
		    lastInvokeTime = time;
		    result = func.apply(thisArg, args);
		    return result;
		  }

		  function leadingEdge(time) {
		    // Reset any `maxWait` timer.
		    lastInvokeTime = time;
		    // Start the timer for the trailing edge.
		    timerId = setTimeout(timerExpired, wait);
		    // Invoke the leading edge.
		    return leading ? invokeFunc(time) : result;
		  }

		  function remainingWait(time) {
		    var timeSinceLastCall = time - lastCallTime,
		        timeSinceLastInvoke = time - lastInvokeTime,
		        timeWaiting = wait - timeSinceLastCall;

		    return maxing
		      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
		      : timeWaiting;
		  }

		  function shouldInvoke(time) {
		    var timeSinceLastCall = time - lastCallTime,
		        timeSinceLastInvoke = time - lastInvokeTime;

		    // Either this is the first call, activity has stopped and we're at the
		    // trailing edge, the system time has gone backwards and we're treating
		    // it as the trailing edge, or we've hit the `maxWait` limit.
		    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
		      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
		  }

		  function timerExpired() {
		    var time = now();
		    if (shouldInvoke(time)) {
		      return trailingEdge(time);
		    }
		    // Restart the timer.
		    timerId = setTimeout(timerExpired, remainingWait(time));
		  }

		  function trailingEdge(time) {
		    timerId = undefined;

		    // Only invoke if we have `lastArgs` which means `func` has been
		    // debounced at least once.
		    if (trailing && lastArgs) {
		      return invokeFunc(time);
		    }
		    lastArgs = lastThis = undefined;
		    return result;
		  }

		  function cancel() {
		    if (timerId !== undefined) {
		      clearTimeout(timerId);
		    }
		    lastInvokeTime = 0;
		    lastArgs = lastCallTime = lastThis = timerId = undefined;
		  }

		  function flush() {
		    return timerId === undefined ? result : trailingEdge(now());
		  }

		  function debounced() {
		    var time = now(),
		        isInvoking = shouldInvoke(time);

		    lastArgs = arguments;
		    lastThis = this;
		    lastCallTime = time;

		    if (isInvoking) {
		      if (timerId === undefined) {
		        return leadingEdge(lastCallTime);
		      }
		      if (maxing) {
		        // Handle invocations in a tight loop.
		        clearTimeout(timerId);
		        timerId = setTimeout(timerExpired, wait);
		        return invokeFunc(lastCallTime);
		      }
		    }
		    if (timerId === undefined) {
		      timerId = setTimeout(timerExpired, wait);
		    }
		    return result;
		  }
		  debounced.cancel = cancel;
		  debounced.flush = flush;
		  return debounced;
		}

		debounce_1 = debounce;
		return debounce_1;
	}

	var throttle_1;
	var hasRequiredThrottle;

	function requireThrottle () {
		if (hasRequiredThrottle) return throttle_1;
		hasRequiredThrottle = 1;
		var debounce = requireDebounce(),
		    isObject = requireIsObject();

		/** Error message constants. */
		var FUNC_ERROR_TEXT = 'Expected a function';

		/**
		 * Creates a throttled function that only invokes `func` at most once per
		 * every `wait` milliseconds. The throttled function comes with a `cancel`
		 * method to cancel delayed `func` invocations and a `flush` method to
		 * immediately invoke them. Provide `options` to indicate whether `func`
		 * should be invoked on the leading and/or trailing edge of the `wait`
		 * timeout. The `func` is invoked with the last arguments provided to the
		 * throttled function. Subsequent calls to the throttled function return the
		 * result of the last `func` invocation.
		 *
		 * **Note:** If `leading` and `trailing` options are `true`, `func` is
		 * invoked on the trailing edge of the timeout only if the throttled function
		 * is invoked more than once during the `wait` timeout.
		 *
		 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
		 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
		 *
		 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
		 * for details over the differences between `_.throttle` and `_.debounce`.
		 *
		 * @static
		 * @memberOf _
		 * @since 0.1.0
		 * @category Function
		 * @param {Function} func The function to throttle.
		 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
		 * @param {Object} [options={}] The options object.
		 * @param {boolean} [options.leading=true]
		 *  Specify invoking on the leading edge of the timeout.
		 * @param {boolean} [options.trailing=true]
		 *  Specify invoking on the trailing edge of the timeout.
		 * @returns {Function} Returns the new throttled function.
		 * @example
		 *
		 * // Avoid excessively updating the position while scrolling.
		 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
		 *
		 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
		 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
		 * jQuery(element).on('click', throttled);
		 *
		 * // Cancel the trailing throttled invocation.
		 * jQuery(window).on('popstate', throttled.cancel);
		 */
		function throttle(func, wait, options) {
		  var leading = true,
		      trailing = true;

		  if (typeof func != 'function') {
		    throw new TypeError(FUNC_ERROR_TEXT);
		  }
		  if (isObject(options)) {
		    leading = 'leading' in options ? !!options.leading : leading;
		    trailing = 'trailing' in options ? !!options.trailing : trailing;
		  }
		  return debounce(func, wait, {
		    'leading': leading,
		    'maxWait': wait,
		    'trailing': trailing
		  });
		}

		throttle_1 = throttle;
		return throttle_1;
	}

	var throttleExports = requireThrottle();
	var throttle = /*@__PURE__*/getDefaultExportFromCjs(throttleExports);

	let store = toolkit.configureStore({
	  reducer: {
	    spreadsheet: spreadsheetReducer,
	    posts: postsReducer,
	    //   data: dataReducer,
	    temp: tempReducer,
	    application: applicationReducer
	    //  ckeditor: ckeditorReducer,
	    //  [userDataApi.reducerPath]: userDataApi.reducer
	  },
	  //middleware: (getDefaultMiddleware) =>
	  //  getDefaultMiddleware().concat(userDataApi.middleware),
	  devTools: true
	});
	store.subscribe(throttle(() => {
	  saveState({
	    //    posts: [],
	    //    data: store.getState().data,
	    application: store.getState().application
	  });
	}, 10000));
	const saveState = state => {
	  try {
	    const serializedState = JSON.stringify(state);
	    localStorage.setItem('econolabs', serializedState);
	  } catch (err) {
	    console.log(err);
	  }
	};

	function _extends() {
	  return _extends = Object.assign ? Object.assign.bind() : function (n) {
	    for (var e = 1; e < arguments.length; e++) {
	      var t = arguments[e];
	      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
	    }
	    return n;
	  }, _extends.apply(null, arguments);
	}

	//import { produce } from "immer";
	function caseReducer(state = {}, action) {
	  // console.log(action);
	  switch (action.type) {
	    case "TOGGLE_PROPERTY":
	      return toolkit.createNextState(state, draft => {
	        draft[action.payload.property] = !state[property];
	      });
	    case "SET_STORE_OBJECT":
	      return toolkit.createNextState(state, draft => {
	        console.log(action.payload);
	        draft[action.payload.key] = action.payload.value;
	      });
	    case "SEED_STATE":
	      {
	        return toolkit.createNextState(state, draft => {
	          Object.keys(action.payload.objects).map(key => {
	            draft[key] = action.payload.objects[key];
	          });
	        });
	      }

	    // case "ADD_BOOK":
	    // return produce(state, (draft) => {
	    //   draft.books.list.push({ ...payload });
	    // });

	    case "SEED_ARRAY":
	      return toolkit.createNextState(state, draft => {
	        draft[action.payload.arrayName] = action.payload.arrayItems;
	      });
	    case "LOAD_DATA":
	      return toolkit.createNextState(state, draft => {
	        draft.data = action.payload.data;
	        draft.protoData = action.payload.protoData;
	        draft.expandView = true;
	      });
	    case "NEW_EMPTY_SPREADSHEET":
	      {
	        return toolkit.createNextState(state, draft => {
	          draft.data = action.payload.data;
	          draft.protoData = action.payload.protoData;
	          draft.formulaValue = action.payload.protoData[0][0];
	          draft.expandView = true;
	        });
	      }
	    case "UPDATE_FORMULA":
	      return toolkit.createNextState(state, draft => {
	        draft.formulaValue = action.payload.formulaValue;
	        draft.formulaRowIndex = action.payload.formulaRowIndex;
	        draft.formulaColumnIndex = action.payload.formulaColumnIndex;
	        draft.formulaIsInFocus = false;
	      });
	    case "SAVE_CELL_AND_SET_NEXT_CELL_ACTIVE":
	      return toolkit.createNextState(state, draft => {
	        draft.data = action.payload.data;
	        draft.protoData = action.payload.protoData;
	        // action.payload.value
	        draft.formulaValue = action.payload.formulaValue;
	        draft.formulaRowIndex = action.payload.formulaRowIndex;
	        draft.formulaColumnIndex = action.payload.formulaColumnIndex;
	      });
	    case "PUSH_ITEM_TO_ARRAY":
	      return toolkit.createNextState(state, draft => {
	        draft[action.payload.arrayName].push(action.payload.item);
	      });
	    case "DELETE_ITEM_FROM_ARRAY":
	      return toolkit.createNextState(state, draft => {
	        console.log(action.payload);
	        const index = draft[action.payload.arrayName].findIndex(item => item.id === action.payload.id);
	        if (index !== -1) draft[action.payload.arrayName].splice(index, 1);
	      });
	    case "UPDATE_ITEM_IN_ARRAY":
	      return toolkit.createNextState(state, draft => {
	        console.log(action.payload);
	        const index = draft[action.payload.arrayName].findIndex(item => item.id === action.payload.item.id);
	        if (index !== -1) draft[action.payload.arrayName][index] = action.payload.item;
	      });
	    case "DELETE_FROM_ARRAY_BY_INDEX":
	      {
	        return toolkit.createNextState(state, draft => {
	          draft[action.payload.arrayName].splice(action.payload.itemIndex, 1);
	          draft.triggerRerender = action.payload.itemIndex;
	        });
	      }
	    default:
	      return state;
	  }
	}

	function ScatterChartAbstractBetaCases() {
	  return /*#__PURE__*/React.createElement("div", null, "ScatterChartAbstractBetaCases");
	}

	var lib$2 = {};

	var lib$1 = {};

	var hasRequiredLib$2;

	function requireLib$2 () {
		if (hasRequiredLib$2) return lib$1;
		hasRequiredLib$2 = 1;

		Object.defineProperty(lib$1, '__esModule', { value: true });

		/** Types of elements found in htmlparser2's DOM */
		var ElementType;
		(function (ElementType) {
		    /** Type for the root element of a document */
		    ElementType["Root"] = "root";
		    /** Type for Text */
		    ElementType["Text"] = "text";
		    /** Type for <? ... ?> */
		    ElementType["Directive"] = "directive";
		    /** Type for <!-- ... --> */
		    ElementType["Comment"] = "comment";
		    /** Type for <script> tags */
		    ElementType["Script"] = "script";
		    /** Type for <style> tags */
		    ElementType["Style"] = "style";
		    /** Type for Any tag */
		    ElementType["Tag"] = "tag";
		    /** Type for <![CDATA[ ... ]]> */
		    ElementType["CDATA"] = "cdata";
		    /** Type for <!doctype ...> */
		    ElementType["Doctype"] = "doctype";
		})(ElementType || (ElementType = {}));
		/**
		 * Tests whether an element is a tag or not.
		 * @param element Element to test
		 * @param element.type Node type discriminator to check.
		 */
		function isTag$1(element) {
		    return (element.type === ElementType.Tag ||
		        element.type === ElementType.Script ||
		        element.type === ElementType.Style);
		}
		// Exports for backwards compatibility
		/** Type for the root element of a document */
		// eslint-disable-next-line prefer-destructuring
		ElementType.Root;
		/** Type for Text */
		// eslint-disable-next-line prefer-destructuring
		ElementType.Text;
		/** Type for <? ... ?> */
		// eslint-disable-next-line prefer-destructuring
		ElementType.Directive;
		/** Type for <!-- ... --> */
		// eslint-disable-next-line prefer-destructuring
		ElementType.Comment;
		/** Type for <script> tags */
		// eslint-disable-next-line prefer-destructuring
		ElementType.Script;
		/** Type for <style> tags */
		// eslint-disable-next-line prefer-destructuring
		ElementType.Style;
		/** Type for Any tag */
		// eslint-disable-next-line prefer-destructuring
		ElementType.Tag;
		/** Type for <![CDATA[ ... ]]> */
		// eslint-disable-next-line prefer-destructuring
		ElementType.CDATA;
		/** Type for <!doctype ...> */
		// eslint-disable-next-line prefer-destructuring
		ElementType.Doctype;

		/**
		 * This object will be used as the prototype for Nodes when creating a
		 * DOM-Level-1-compliant structure.
		 */
		class Node {
		    /** Parent of the node */
		    parent = null;
		    /** Previous sibling */
		    prev = null;
		    /** Next sibling */
		    next = null;
		    /** The start index of the node. Requires `withStartIndices` on the handler to be `true. */
		    startIndex = null;
		    /** The end index of the node. Requires `withEndIndices` on the handler to be `true. */
		    endIndex = null;
		    // Read-write aliases for properties
		    /**
		     * Same as {@link parent}.
		     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
		     */
		    get parentNode() {
		        return this.parent;
		    }
		    set parentNode(parent) {
		        this.parent = parent;
		    }
		    /**
		     * Same as {@link prev}.
		     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
		     */
		    get previousSibling() {
		        return this.prev;
		    }
		    set previousSibling(previous) {
		        this.prev = previous;
		    }
		    /**
		     * Same as {@link next}.
		     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
		     */
		    get nextSibling() {
		        return this.next;
		    }
		    set nextSibling(next) {
		        this.next = next;
		    }
		    /**
		     * Clone this node, and optionally its children.
		     * @param recursive Clone child nodes as well.
		     * @returns A clone of the node.
		     */
		    cloneNode(recursive = false) {
		        return cloneNode(this, recursive);
		    }
		}
		/**
		 * A node that contains some data.
		 */
		class DataNode extends Node {
		    data;
		    /**
		     * @param data The content of the data node
		     */
		    constructor(data) {
		        super();
		        this.data = data;
		    }
		    /**
		     * Same as {@link data}.
		     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
		     */
		    get nodeValue() {
		        return this.data;
		    }
		    set nodeValue(data) {
		        this.data = data;
		    }
		}
		/**
		 * Text within the document.
		 */
		class Text extends DataNode {
		    type = ElementType.Text;
		    get nodeType() {
		        return 3;
		    }
		}
		/**
		 * Comments within the document.
		 */
		class Comment extends DataNode {
		    type = ElementType.Comment;
		    get nodeType() {
		        return 8;
		    }
		}
		/**
		 * Processing instructions, including doc types.
		 */
		class ProcessingInstruction extends DataNode {
		    type = ElementType.Directive;
		    name;
		    constructor(name, data) {
		        super(data);
		        this.name = name;
		    }
		    get nodeType() {
		        return 1;
		    }
		    /** If this is a doctype, the document type name (parse5 only). */
		    "x-name";
		    /** If this is a doctype, the document type public identifier (parse5 only). */
		    "x-publicId";
		    /** If this is a doctype, the document type system identifier (parse5 only). */
		    "x-systemId";
		}
		/**
		 * A node that can have children.
		 */
		class NodeWithChildren extends Node {
		    children;
		    /**
		     * @param children Children of the node. Only certain node types can have children.
		     */
		    constructor(children) {
		        super();
		        this.children = children;
		    }
		    // Aliases
		    /** First child of the node. */
		    get firstChild() {
		        return this.children[0] ?? null;
		    }
		    /** Last child of the node. */
		    get lastChild() {
		        return this.children.length > 0
		            ? this.children[this.children.length - 1]
		            : null;
		    }
		    /**
		     * Same as {@link children}.
		     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
		     */
		    get childNodes() {
		        return this.children;
		    }
		    set childNodes(children) {
		        this.children = children;
		    }
		}
		/**
		 * CDATA nodes.
		 */
		class CDATA extends NodeWithChildren {
		    type = ElementType.CDATA;
		    get nodeType() {
		        return 4;
		    }
		}
		/**
		 * The root node of the document.
		 */
		class Document extends NodeWithChildren {
		    type = ElementType.Root;
		    get nodeType() {
		        return 9;
		    }
		}
		/**
		 * An element within the DOM.
		 */
		class Element extends NodeWithChildren {
		    name;
		    attribs;
		    type;
		    /**
		     * @param name Name of the tag, eg. `div`, `span`.
		     * @param attribs Object mapping attribute names to attribute values.
		     * @param children Children of the node.
		     * @param type Node type used for the new node instance.
		     */
		    constructor(name, attribs, children = [], type = name === "script"
		        ? ElementType.Script
		        : name === "style"
		            ? ElementType.Style
		            : ElementType.Tag) {
		        super(children);
		        this.name = name;
		        this.attribs = attribs;
		        this.type = type;
		    }
		    get nodeType() {
		        return 1;
		    }
		    // DOM Level 1 aliases
		    /**
		     * Same as {@link name}.
		     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
		     */
		    get tagName() {
		        return this.name;
		    }
		    set tagName(name) {
		        this.name = name;
		    }
		    get attributes() {
		        return Object.keys(this.attribs).map((name) => ({
		            name,
		            value: this.attribs[name],
		            namespace: this["x-attribsNamespace"]?.[name],
		            prefix: this["x-attribsPrefix"]?.[name],
		        }));
		    }
		    /** Element namespace (parse5 only). */
		    namespace;
		    /** Element attribute namespaces (parse5 only). */
		    "x-attribsNamespace";
		    /** Element attribute namespace-related prefixes (parse5 only). */
		    "x-attribsPrefix";
		}
		/**
		 * Checks if `node` is an element node.
		 * @param node Node to check.
		 * @returns `true` if the node is an element node.
		 */
		function isTag(node) {
		    return isTag$1(node);
		}
		/**
		 * Checks if `node` is a CDATA node.
		 * @param node Node to check.
		 * @returns `true` if the node is a CDATA node.
		 */
		function isCDATA(node) {
		    return node.type === ElementType.CDATA;
		}
		/**
		 * Checks if `node` is a text node.
		 * @param node Node to check.
		 * @returns `true` if the node is a text node.
		 */
		function isText(node) {
		    return node.type === ElementType.Text;
		}
		/**
		 * Checks if `node` is a comment node.
		 * @param node Node to check.
		 * @returns `true` if the node is a comment node.
		 */
		function isComment(node) {
		    return node.type === ElementType.Comment;
		}
		/**
		 * Checks if `node` is a directive node.
		 * @param node Node to check.
		 * @returns `true` if the node is a directive node.
		 */
		function isDirective(node) {
		    return node.type === ElementType.Directive;
		}
		/**
		 * Checks if `node` is a document node.
		 * @param node Node to check.
		 * @returns `true` if the node is a document node.
		 */
		function isDocument(node) {
		    return node.type === ElementType.Root;
		}
		/**
		 * Clone a node, and optionally its children.
		 * @param node Node to clone.
		 * @param recursive Clone child nodes as well.
		 * @returns A clone of the node.
		 */
		function cloneNode(node, recursive = false) {
		    let result;
		    if (isText(node)) {
		        result = new Text(node.data);
		    }
		    else if (isComment(node)) {
		        result = new Comment(node.data);
		    }
		    else if (isTag(node)) {
		        const children = recursive ? cloneChildren(node.children) : [];
		        const clone = new Element(node.name, { ...node.attribs }, children);
		        for (const child of children) {
		            child.parent = clone;
		        }
		        if (node.namespace != null) {
		            clone.namespace = node.namespace;
		        }
		        if (node["x-attribsNamespace"]) {
		            clone["x-attribsNamespace"] = { ...node["x-attribsNamespace"] };
		        }
		        if (node["x-attribsPrefix"]) {
		            clone["x-attribsPrefix"] = { ...node["x-attribsPrefix"] };
		        }
		        result = clone;
		    }
		    else if (isCDATA(node)) {
		        const children = recursive ? cloneChildren(node.children) : [];
		        const clone = new CDATA(children);
		        for (const child of children) {
		            child.parent = clone;
		        }
		        result = clone;
		    }
		    else if (isDocument(node)) {
		        const children = recursive ? cloneChildren(node.children) : [];
		        const clone = new Document(children);
		        for (const child of children) {
		            child.parent = clone;
		        }
		        if (node["x-mode"]) {
		            clone["x-mode"] = node["x-mode"];
		        }
		        result = clone;
		    }
		    else if (isDirective(node)) {
		        const instruction = new ProcessingInstruction(node.name, node.data);
		        if (node["x-name"] != null) {
		            instruction["x-name"] = node["x-name"];
		            instruction["x-publicId"] = node["x-publicId"];
		            instruction["x-systemId"] = node["x-systemId"];
		        }
		        result = instruction;
		    }
		    else {
		        throw new Error(`Not implemented yet: ${node.type}`);
		    }
		    result.startIndex = node.startIndex;
		    result.endIndex = node.endIndex;
		    if (node.sourceCodeLocation != null) {
		        result.sourceCodeLocation = node.sourceCodeLocation;
		    }
		    return result;
		}
		/**
		 * Clone a list of child nodes.
		 * @param childs The child nodes to clone.
		 * @returns A list of cloned child nodes.
		 */
		function cloneChildren(childs) {
		    const children = childs.map((child) => cloneNode(child, true));
		    for (let index = 1; index < children.length; index++) {
		        children[index].prev = children[index - 1];
		        children[index - 1].next = children[index];
		    }
		    return children;
		}

		// Default options
		const defaultOptions = {
		    withStartIndices: false,
		    withEndIndices: false,
		    xmlMode: false,
		};
		/**
		 * Event-based handler that builds a DOM tree from parser callbacks.
		 */
		class DomHandler {
		    /** The elements of the DOM */
		    dom = [];
		    /** The root element for the DOM */
		    root = new Document(this.dom);
		    /** Called once parsing has completed. */
		    callback;
		    /** Settings for the handler. */
		    options;
		    /** Callback whenever a tag is closed. */
		    elementCB;
		    /** Indicated whether parsing has been completed. */
		    done = false;
		    /** Stack of open tags. */
		    tagStack = [this.root];
		    /** A data node that is still being written to. */
		    lastNode = null;
		    /** Reference to the parser instance. Used for location information. */
		    parser = null;
		    /**
		     * @param callback Called once parsing has completed.
		     * @param options Settings for the handler.
		     * @param elementCB Callback whenever a tag is closed.
		     */
		    constructor(callback, options, elementCB) {
		        // Make it possible to skip arguments, for backwards-compatibility
		        if (typeof options === "function") {
		            elementCB = options;
		            options = defaultOptions;
		        }
		        if (typeof callback === "object") {
		            options = callback;
		            callback = undefined;
		        }
		        this.callback = callback ?? null;
		        this.options = options ?? defaultOptions;
		        this.elementCB = elementCB ?? null;
		    }
		    onparserinit(parser) {
		        this.parser = parser;
		    }
		    // Resets the handler back to starting state
		    onreset() {
		        this.dom = [];
		        this.root = new Document(this.dom);
		        this.done = false;
		        this.tagStack = [this.root];
		        this.lastNode = null;
		        this.parser = null;
		    }
		    // Signals the handler that parsing is done
		    onend() {
		        if (this.done)
		            return;
		        this.done = true;
		        this.parser = null;
		        this.handleCallback(null);
		    }
		    onerror(error) {
		        this.handleCallback(error);
		    }
		    onclosetag() {
		        this.lastNode = null;
		        const element = this.tagStack.pop();
		        if (this.options.withEndIndices && this.parser) {
		            element.endIndex = this.parser.endIndex;
		        }
		        if (this.elementCB)
		            this.elementCB(element);
		    }
		    onopentag(name, attribs) {
		        const type = this.options.xmlMode ? ElementType.Tag : undefined;
		        const element = new Element(name, attribs, undefined, type);
		        this.addNode(element);
		        this.tagStack.push(element);
		    }
		    ontext(data) {
		        const { lastNode } = this;
		        if (lastNode && lastNode.type === ElementType.Text) {
		            lastNode.data += data;
		            if (this.options.withEndIndices && this.parser) {
		                lastNode.endIndex = this.parser.endIndex;
		            }
		        }
		        else {
		            const node = new Text(data);
		            this.addNode(node);
		            this.lastNode = node;
		        }
		    }
		    oncomment(data) {
		        if (this.lastNode && this.lastNode.type === ElementType.Comment) {
		            this.lastNode.data += data;
		            return;
		        }
		        const node = new Comment(data);
		        this.addNode(node);
		        this.lastNode = node;
		    }
		    oncommentend() {
		        this.lastNode = null;
		    }
		    oncdatastart() {
		        const text = new Text("");
		        const node = new CDATA([text]);
		        this.addNode(node);
		        text.parent = node;
		        this.lastNode = text;
		    }
		    oncdataend() {
		        this.lastNode = null;
		    }
		    onprocessinginstruction(name, data) {
		        const node = new ProcessingInstruction(name, data);
		        this.addNode(node);
		    }
		    handleCallback(error) {
		        if (typeof this.callback === "function") {
		            this.callback(error, this.dom);
		        }
		        else if (error) {
		            throw error;
		        }
		    }
		    addNode(node) {
		        const parent = this.tagStack[this.tagStack.length - 1];
		        const previousSibling = parent.children[parent.children.length - 1];
		        if (this.options.withStartIndices && this.parser) {
		            node.startIndex = this.parser.startIndex;
		        }
		        if (this.options.withEndIndices && this.parser) {
		            node.endIndex = this.parser.endIndex;
		        }
		        parent.children.push(node);
		        if (previousSibling) {
		            node.prev = previousSibling;
		            previousSibling.next = node;
		        }
		        node.parent = parent;
		        this.lastNode = null;
		    }
		}

		// Adapted from https://github.com/mathiasbynens/he/blob/36afe179392226cf1b6ccdb16ebbb7a5a844d93a/src/he.js#L106-L134
		const decodeMap = new Map([
		    [0, 65_533],
		    // C1 Unicode control character reference replacements
		    [128, 8364],
		    [130, 8218],
		    [131, 402],
		    [132, 8222],
		    [133, 8230],
		    [134, 8224],
		    [135, 8225],
		    [136, 710],
		    [137, 8240],
		    [138, 352],
		    [139, 8249],
		    [140, 338],
		    [142, 381],
		    [145, 8216],
		    [146, 8217],
		    [147, 8220],
		    [148, 8221],
		    [149, 8226],
		    [150, 8211],
		    [151, 8212],
		    [152, 732],
		    [153, 8482],
		    [154, 353],
		    [155, 8250],
		    [156, 339],
		    [158, 382],
		    [159, 376],
		]);
		/**
		 * Replace the given code point with a replacement character if it is a
		 * surrogate or is outside the valid range. Otherwise return the code
		 * point unchanged.
		 * @param codePoint Unicode code point to convert.
		 */
		function replaceCodePoint(codePoint) {
		    if ((codePoint >= 0xd8_00 && codePoint <= 0xdf_ff) ||
		        codePoint > 0x10_ff_ff) {
		        return 0xff_fd;
		    }
		    return decodeMap.get(codePoint) ?? codePoint;
		}

		/**
		 * Shared base64 decode helper for generated decode data.
		 * Assumes global atob is available.
		 * @param input Input string to encode or decode.
		 */
		function decodeBase64(input) {
		    const binary = atob(input);
		    const evenLength = binary.length & -2; // Round down to even length
		    const out = new Uint16Array(evenLength / 2);
		    for (let index = 0, outIndex = 0; index < evenLength; index += 2) {
		        const lo = binary.charCodeAt(index);
		        const hi = binary.charCodeAt(index + 1);
		        out[outIndex++] = lo | (hi << 8);
		    }
		    return out;
		}

		// Generated using scripts/write-decode-map.ts
		/** Packed HTML decode trie data. */
		const htmlDecodeTree = /* #__PURE__ */ decodeBase64("QR08ALkAAgH6AYsDNQR2BO0EPgXZBQEGLAbdBxMISQrvCmQLfQurDKQNLw4fD4YPpA+6D/IPAAAAAAAAAAAAAAAAKhBMEY8TmxUWF2EYLBkxGuAa3RsJHDscWR8YIC8jSCSIJcMl6ie3Ku8rEC0CLjoupS7kLgAIRU1hYmNmZ2xtbm9wcnN0dVQAWgBeAGUAaQBzAHcAfgCBAIQAhwCSAJoAoACsALMAbABpAGcAO4DGAMZAUAA7gCYAJkBjAHUAdABlADuAwQDBQHIiZXZlAAJhAAFpeW0AcgByAGMAO4DCAMJAEGRyAADgNdgE3XIAYQB2AGUAO4DAAMBA8CFoYZFj4SFjcgBhZAAAoFMqAAFncIsAjgBvAG4ABGFmAADgNdg43fAlbHlGdW5jdGlvbgCgYSBpAG4AZwA7gMUAxUAAAWNzpACoAHIAAOA12Jzc6SFnbgCgVCJpAGwAZABlADuAwwDDQG0AbAA7gMQAxEAABGFjZWZvcnN1xQDYANoA7QDxAPYA+QD8AAABY3LJAM8AayNzbGFzaAAAoBYidgHTANUAAKDnKmUAZAAAoAYjeQARZIABY3J0AOAA5QDrAGEidXNlAACgNSLuI291bGxpcwCgLCFhAJJjcgAA4DXYBd1wAGYAAOA12Dnd5SF2ZdhiYwDyAOoAbSJwZXEAAKBOIgAHSE9hY2RlZmhpbG9yc3UXARoBHwE6AVIBVQFiAWQBZgGCAakB6QHtAfIBYwB5ACdkUABZADuAqQCpQIABY3B5ACUBKAE1AfUhdGUGYWmg0iJ0KGFsRGlmZmVyZW50aWFsRAAAoEUhbCJleXMAAKAtIQACYWVpb0EBRAFKAU0B8iFvbgxhZABpAGwAO4DHAMdAcgBjAAhhbiJpbnQAAKAwIm8AdAAKYQABZG5ZAV0BaSJsbGEAuGB0I2VyRG90ALdg8gA5AWkAp2NyImNsZQAAAkRNUFRwAXQBeQF9AW8AdAAAoJkiaSJudXMAAKCWIuwhdXMAoJUiaSJtZXMAAKCXIm8AAAFjc4cBlAFrKndpc2VDb250b3VySW50ZWdyYWwAAKAyImUjQ3VybHkAAAFEUZwBpAFvJXVibGVRdW90ZQAAoB0gdSJvdGUAAKAZIAACbG5wdbABtgHNAdgBbwBuAGWgNyIAoHQqgAFnaXQAvAHBAcUB8iJ1ZW50AKBhIm4AdAAAoC8i7yV1ckludGVncmFsAKAuIgABZnLRAdMBAKACIe8iZHVjdACgECJuLnRlckNsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbAAAoDMi7yFzcwCgLypjAHIAAOA12J7ccABDoNMiYQBwAACgTSKABURKU1phY2VmaW9zAAsCEgIVAhgCGwIsAjQCOQI9AnMCfwNvoEUh9CJyYWhkAKARKWMAeQACZGMAeQAFZGMAeQAPZIABZ3JzACECJQIoAuchZXIAoCEgcgAAoKEhaAB2AACg5CoAAWF5MAIzAvIhb24OYRRkbAB0oAciYQCUY3IAAOA12AfdAAFhZkECawIAAWNtRQJnAvIjaXRpY2FsAAJBREdUUAJUAl8CYwJjInV0ZQC0YG8AdAFZAloC2WJiJGxlQWN1dGUA3WJyImF2ZQBgYGkibGRlANxi7yFuZACgxCJmJWVyZW50aWFsRAAAoEYhcAR9AgAAAAAAAIECjgIAABoDZgAA4DXYO91EoagAhQKJAm8AdAAAoNwgcSJ1YWwAAKBQIuIhbGUAA0NETFJVVpkCqAK1Au8C/wIRA28AbgB0AG8AdQByAEkAbgB0AGUAZwByAGEA7ADEAW8AdAKvAgAAAACwAqhgbiNBcnJvdwAAoNMhAAFlb7kC0AJmAHQAgAFBUlQAwQLGAs0CciJyb3cAAKDQIekkZ2h0QXJyb3cAoNQhZQDlACsCbgBnAAABTFLWAugC5SFmdAABQVLcAuECciJyb3cAAKD4J+kkZ2h0QXJyb3cAoPon6SRnaHRBcnJvdwCg+SdpImdodAAAAUFU9gL7AnIicm93AACg0iFlAGUAAKCoInAAQQIGAwAAAAALA3Iicm93AACg0SFvJHduQXJyb3cAAKDVIWUlcnRpY2FsQmFyAACgJSJuAAADQUJMUlRhJAM2AzoDWgNxA3oDciJyb3cAAKGTIUJVLAMwA2EAcgAAoBMpcCNBcnJvdwAAoPUhciJldmUAEWPlIWZ00gJDAwAASwMAAFIDaSVnaHRWZWN0b3IAAKBQKWUkZVZlY3RvcgAAoF4p5SJjdG9yQqC9IWEAcgAAoFYpaSJnaHQA1AFiAwAAaQNlJGVWZWN0b3IAAKBfKeUiY3RvckKgwSFhAHIAAKBXKWUAZQBBoKQiciJyb3cAAKCnIXIAcgBvAPcAtAIAAWN0gwOHA3IA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YwAAoN8i4SFycnCgtiEAoD0pgKIqImJjZG9zACsVMBU6FT4VQRVyImNhcAAAoEgqAAFhdTQVNxVwAACgRipwAACgSipvAHQAAKCNInIAAKBFKgDgKiIA/gACYWxydksVURVuFXMVcgByAG2gtyEAoDwpeQCAAWV2dwBYFWUVaRVxAHACXxUAAAAAYxVyAGUA4wAXFXUA4wAZFWUAZQAAoM4iZSJkZ2UAAKDPImUAbgA7gKQApEBlI2Fycm93AAABbHJ7FX8V5SFmdACgtiFpImdodAAAoLchZQDkAG0VAAFjaYsVkRVvAG4AaQBuAPQAkwFuAHQAAKAxImwiY3R5AACgLSOACUFIYWJjZGVmaGlqbG9yc3R1d3oAuBW7Fb8V1RXgFegV+RUKFhUWHxZUFlcWZRbFFtsW7xb7FgUXChdyAPIAtAJhAHIAAKBlKQACZ2xyc8YVyhXOFdAV5yFlcgCgICDlIXRoAKA4IfIA9QxoAHagECAAoKMiawHZFd4VYSJyb3cAAKAPKWEA4wBfAgABYXnkFecV8iFvbg9hNGQAoUYhYW/tFfQVAAFnciEC8RVyAACgyiF0InNlcQAAoHcqgAFnbG0A/xUCFgUWO4CwALBAdABhALRjcCJ0eXYAAKCxKQABaXIOFhIW8yFodACgfykA4DXYId1hAHIAAAFschsWHRYAoMMhAKDCIYACYWVnc3YAKBauAjYWOhY+Fm0AAKHEIm9zLhY0Fm4AZABzoMQi9SFpdACgZiZhIm1tYQDdY2kAbgAAoPIiAKH3AGlvQxZRFmQAZQAAgfcAO29KFksW90BuI3RpbWVzAACgxyJuAPgAUBZjAHkAUmRjAG8CXhYAAAAAYhZyAG4AAKAeI28AcAAAoA0jgAJscHR1dwBuFnEWdRaSFp4W7CFhciRgZgAA4DXYVd0AotkCZW1wc30WhBaJFo0WcQBkoFAibwB0AACgUSJpIm51cwAAoDgi7CF1cwCgFCLxInVhcmUAoKEiYgBsAGUAYgBhAHIAdwBlAGQAZwDlANcAbgCAAWFkaAClFqoWtBZyAHIAbwD3APUMbwB3AG4AYQByAHIAbwB3APMA8xVhI3Jwb29uAAABbHK8FsAWZQBmAPQAHBZpAGcAaAD0AB4WYgHJFs8WawBhAHIAbwD3AJILbwLUFgAAAADYFnIAbgAAoB8jbwBwAACgDCOAAWNvdADhFukW7BYAAXJ55RboFgDgNdi53FVkbAAAoPYp8iFvaxFhAAFkcvMW9xZvAHQAAKDxImkA5qC/JVsSAAFhaP8WAhdyAPIANQNhAPIA1wvhIm5nbGUAoKYpAAFjaQ4XEBd5AF9k5yJyYXJyAKD/JwAJRGFjZGVmZ2xtbm9wcXJzdHV4MRc4F0YXWxcyBF4XaRd5F40XrBe0F78X2RcVGCEYLRg1GEAYAAFEbzUXgRZvAPQA+BUAAWNzPBdCF3UAdABlADuA6QDpQPQhZXIAoG4qAAJhaW95TRdQF1YXWhfyIW9uG2FyAGOgViI7gOoA6kDsIW9uAKBVIk1kbwB0ABdhAAFEcmIXZhdvAHQAAKBSIgDgNdgi3XKhmipuF3QXYQB2AGUAO4DoAOhAZKCWKm8AdAAAoJgqgKGZKmlscwCAF4UXhxfuInRlcnMAoOcjAKATIWSglSpvAHQAAKCXKoABYXBzAJMXlheiF2MAcgATYXQAeQBzogUinxcAAAAAoRdlAHQAAKAFInAAMaADIDMBqRerFwCgBCAAoAUgAAFnc7AXsRdLYXAAAKACIAABZ3C4F7sXbwBuABlhZgAA4DXYVt2AAWFscwDFF8sXzxdyAHOg1SJsAACg4yl1AHMAAKBxKmkAAKG1A2x21RfYF28AbgC1Y/VjAAJjc3V24BfoF/0XEBgAAWlv5BdWF3IAYwAAoFYiaQLuFwAAAADwF+0ADQThIW50AAFnbPUX+Rd0AHIAAKCWKuUhc3MAoJUqgAFhZWkAAxgGGAoYbABzAD1gcwB0AACgXyJ2AESgYSJEAACgeCrwImFyc2wAoOUpAAFEYRkYHRhvAHQAAKBTInIAcgAAoHEpgAFjZGkAJxgqGO0XcgAAoC8hbwD0AIwCAAFhaDEYMhi3YzuA8ADwQAABbXI5GD0YbAA7gOsA60BvAACgrCCAAWNpcABGGEgYSxhsACFgcwD0ACwEAAFlb08YVxhjAHQAYQB0AGkAbwDuABoEbgBlAG4AdABpAGEAbADlADME4Ql1GAAAgRgAAIMYiBgAAAAAoRilGAAAqhgAALsYvhjRGAAA1xgnGWwAbABpAG4AZwBkAG8AdABzAGUA8QBlF3kARGRtImFsZQAAoEAmgAFpbHIAjRiRGJ0Y7CFpZwCgA/tpApcYAAAAAJoYZwAAoAD7aQBnAACgBPsA4DXYI93sIWlnAKAB++whaWcA4GYAagCAAWFsdACvGLIYthh0AACgbSZpAGcAAKAC+24AcwAAoLElbwBmAJJh8AHCGAAAxhhmAADgNdhX3QABYWvJGMwYbADsAGsEdqDUIgCg2SphI3J0aW50AACgDSoAAWFv2hgiGQABY3PeGB8ZsQPnGP0YBRkSGRUZAAAdGbID7xjyGPQY9xj5GAAA+xg7gL0AvUAAoFMhO4C8ALxAAKBVIQCgWSEAoFshswEBGQAAAxkAoFQhAKBWIbQCCxkOGQAAAAAQGTuAvgC+QACgVyEAoFwhNQAAoFghtgEZGQAAGxkAoFohAKBdITgAAKBeIWwAAKBEIHcAbgAAoCIjYwByAADgNdi73IAIRWFiY2RlZmdpamxub3JzdHYARhlKGVoZXhlmGWkZkhmWGZkZnRmgGa0ZxhnLGc8Z4BkjGmygZyIAoIwqgAFjbXAAUBlTGVgZ9SF0ZfVhbQBhAOSgswM6FgCghipyImV2ZQAfYQABaXliGWUZcgBjAB1hM2RvAHQAIWGAoWUibHFzAMYEcBl6GfGhZSLOBAAAdhlsAGEAbgD0AN8EgKF+KmNkbACBGYQZjBljAACgqSpvAHQAb6CAKmyggioAoIQqZeDbIgD+cwAAoJQqcgAA4DXYJN3noGsirATtIWVsAKA3IWMAeQBTZIChdyJFYWoApxmpGasZAKCSKgCgpSoAoKQqAAJFYWVztBm2Gb0ZwhkAoGkicABwoIoq8iFveACgiipxoIgq8aCIKrUZaQBtAACg5yJwAGYAAOA12FjdYQB2AOUAYwIAAWNp0xnWGXIAAKAKIW0AAKFzImVs3BneGQCgjioAoJAqAIM+ADtjZGxxco0E6xn0GfgZ/BkBGgABY2nvGfEZAKCnKnIAAKB6Km8AdAAAoNci0CFhcgCglSl1ImVzdAAAoHwqgAJhZGVscwAKGvQZFhrVBCAa8AEPGgAAFBpwAHIAbwD4AFkZcgAAoHgpcQAAAWxxxAQbGmwAZQBzAPMASRlpAO0A5AQAAWVuJxouGnIjdG5lcXEAAOBpIgD+xQAsGgAFQWFiY2Vma29zeUAaQxpmGmoabRqDGocalhrCGtMacgDyAMwCAAJpbG1yShpOGlAaVBpyAHMA8ABxD2YAvWBpAGwA9AASBQABZHJYGlsaYwB5AEpkAKGUIWN3YBpkGmkAcgAAoEgpAKCtIWEAcgAAoA8h6SFyYyVhgAFhbHIAcxp7Gn8a8iF0c3WgZSZpAHQAAKBlJuwhaXAAoCYg4yFvbgCguSJyAADgNdgl3XMAAAFld4wakRphInJvdwAAoCUpYSJyb3cAAKAmKYACYW1vcHIAnxqjGqcauhq+GnIAcgAAoP8h9CFodACgOyJrAAABbHKsGrMaZSRmdGFycm93AACgqSHpJGdodGFycm93AKCqIWYAAOA12Fnd4iFhcgCgFSCAAWNsdADIGswa0BpyAADgNdi93GEAcwDoAGka8iFvaydhAAFicNca2xr1IWxsAKBDIOghZW4AoBAg4Qr2GgAA/RoAAAgbExsaGwAAIRs7GwAAAAA+G2IbmRuVG6sbAACyG80b0htjAHUAdABlADuA7QDtQAChYyBpeQEbBhtyAGMAO4DuAO5AOGQAAWN4CxsNG3kANWRjAGwAO4ChAKFAAAFmcssCFhsA4DXYJt1yAGEAdgBlADuA7ADsQIChSCFpbm8AJxsyGzYbAAFpbisbLxtuAHQAAKAMKnQAAKAtIuYhaW4AoNwpdABhAACgKSHsIWlnM2GAAWFvcABDG1sbXhuAAWNndABJG0sbWRtyACthgAFlbHAAcQVRG1UbaQBuAOUAyAVhAHIA9AByBWgAMWFmAACgtyJlAGQAtWEAoggiY2ZvdGkbbRt1G3kb4SFyZQCgBSFpAG4AdKAeImkAZQAAoN0pZABvAPQAWxsAoisiY2VscIEbhRuPG5QbYQBsAACguiIAAWdyiRuNG2UAcgDzACMQ4wCCG2EicmhrAACgFyryIW9kAKA8KgACY2dwdJ8boRukG6gbeQBRZG8AbgAvYWYAAOA12FrdYQC5Y3UAZQBzAHQAO4C/AL9AAAFjabUbuRtyAADgNdi+3G4AAKIIIkVkc3bCG8QbyBvQAwCg+SJvAHQAAKD1Inag9CIAoPMiaaBiIOwhZGUpYesB1hsAANkbYwB5AFZkbAA7gO8A70AAA2NmbW9zdeYb7hvyG/Ub+hsFHAABaXnqG+0bcgBjADVhOWRyAADgNdgn3eEhdGg3YnAAZgAA4DXYW93jAf8bAAADHHIAAOA12L/c8iFjeVhk6yFjeVRkAARhY2ZnaGpvcxUcGhwiHCYcKhwtHDAcNRzwIXBhdqC6A/BjAAFleR4cIRzkIWls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ZmdobG1vcHJzdHV3CiwNLBEsHSwnLDEsQCxLLFIsYix6LIQsjyzLLOgs7Sz/LAotcgDyAAkDYQByAACgYykAAWNyFSwbLHUAdABlADuA+gD6QPIACQ1yAOMBIywAACUseQBeZHYAZQBtYQABaXkrLDAscgBjADuA+wD7QENkgAFhYmgANyw6LD0scgDyANEO7CFhY3FhYQDyAOAOAAFpckQsSCzzIWh0AKB+KQDgNdgy3XIAYQB2AGUAO4D5APlAYQFWLF8scgAAAWxyWixcLACgvyEAoL4hbABrAACggCUAAWN0Zix2LG8CbCwAAAAAcyxyAG4AZaAcI3IAAKAcI28AcAAAoA8jcgBpAACg+CUAAWFsfiyBLGMAcgBrYTuAqACoQAABZ3CILIssbwBuAHNhZgAA4DXYZt0AA2FkaGxzdZksniynLLgsuyzFLHIAcgBvAPcACQ1vAHcAbgBhAHIAcgBvAPcA2A5hI3Jwb29uAAABbHKvLLMsZQBmAPQAWyxpAGcAaAD0AF0sdQDzAKYOaQAAocUDaGzBLMIs0mNvAG4AxWPwI2Fycm93cwCgyCGAAWNpdADRLOEs5CxvAtcsAAAAAN4scgBuAGWgHSNyAACgHSNvAHAAAKAOI24AZwBvYXIAaQAAoPklYwByAADgNdjK3IABZGlyAPMs9yz6LG8AdAAAoPAi7CFkZWlhaQBmoLUlAKC0JQABYW0DLQYtcgDyAMosbAA7gPwA/EDhIm5nbGUAoKcpgAdBQkRhY2RlZmxub3Byc3oAJy0qLTAtNC2bLZ0toS2/LcMtxy3TLdgt3C3gLfwtcgDyABADYQByAHag6CoAoOkqYQBzAOgA/gIAAW5yOC08LechcnQAoJwpgANla25wcnN0AJkpSC1NLVQtXi1iLYItYQBwAHAA4QAaHG8AdABoAGkAbgDnAKEXgAFoaXIAoSmzJFotbwBwAPQAdCVooJUh7wD4JgABaXVmLWotZwBtAOEAuygAAWJwbi14LXMjZXRuZXEAceCKIgD+AODLKgD+cyNldG5lcQBx4IsiAP4A4MwqAP4AAWhyhi2KLWUAdADhABIraSNhbmdsZQAAAWxyki2WLeUhZnQAoLIiaSJnaHQAAKCzInkAMmThIXNoAKCiIoABZWxyAKcttC24LWKiKCKuLQAAAACyLWEAcgAAoLsicQAAoFoi7CFpcACg7iIAAWJ0vC1eD2EA8gBfD3IAAOA12DPddAByAOkAlS1zAHUAAAFicM0t0C0A4IIi0iAA4IMi0iBwAGYAAOA12GfdcgBvAPAAWQt0AHIA6QCaLQABY3XkLegtcgAA4DXYy9wAAWJw7C30LW4AAAFFZXUt8S0A4IoiAP5uAAABRWV/LfktAOCLIgD+6SJnemFnAKCaKYADY2Vmb3BycwANLhAuJS4pLiMuLi40LukhcmN1YQABZGkULiEuAAFiZxguHC5hAHIAAKBfKmUAcaAnIgCgWSLlIXJwAKAYIXIAAOA12DTdcABmAADgNdho3WWgQCJhAHQA6ABqD2MAcgAA4DXYzNzjCuQRUC4AAFQuAABYLmIuAAAAAGMubS5wLnQuAAAAAIguki4AAJouJxIqEnQAcgDpAB0ScgAA4DXYNd0AAUFhWy5eLnIA8gDnAnIA8gCTB75jAAFBYWYuaS5yAPIA4AJyAPIAjAdhAPAAeh5pAHMAAKD7IoABZHB0APgReS6DLgABZmx9LoAuAOA12GnddQDzAP8RaQBtAOUABBIAAUFhiy6OLnIA8gDuAnIA8gCaBwABY3GVLgoScgAA4DXYzdwAAXB0nS6hLmwAdQDzACUScgDpACASAARhY2VmaW9zdbEuvC7ELsguzC7PLtQu2S5jAAABdXm2LrsudABlADuA/QD9QE9kAAFpecAuwy5yAGMAd2FLZG4AO4ClAKVAcgAA4DXYNt1jAHkAV2RwAGYAAOA12GrdYwByAADgNdjO3AABY23dLt8ueQBOZGwAO4D/AP9AAAVhY2RlZmhpb3N38y73Lv8uAi8MLxAvEy8YLx0vIi9jInV0ZQB6YQABYXn7Lv4u8iFvbn5hN2RvAHQAfGEAAWV0Bi8KL3QAcgDmAB8QYQC2Y3IAAOA12DfdYwB5ADZk5yJyYXJyAKDdIXAAZgAA4DXYa91jAHIAAOA12M/cAAFqbiYvKC8AoA0gagAAoAwg");

		// Generated using scripts/write-decode-map.ts
		/** Packed XML decode trie data. */
		const xmlDecodeTree = /* #__PURE__ */ decodeBase64("AAJhZ2xxBwARABMAFQBtAg0AAAAAAA8AcAAmYG8AcwAnYHQAPmB0ADxg9SFvdCJg");

		/**
		 * Bit flags & masks for the binary trie encoding used for entity decoding.
		 *
		 * Bit layout (16 bits total):
		 * 15..14 VALUE_LENGTH   (+1 encoding; 0 => no value)
		 * 13     FLAG13.        If valueLength>0: semicolon required flag (implicit ';').
		 *                       If valueLength==0: compact run flag.
		 * 12..7  BRANCH_LENGTH  Branch length (0 => single branch in 6..0 if jumpOffset==char) OR run length (when compact run)
		 * 6..0   JUMP_TABLE     Jump offset (jump table) OR single-branch char code OR first run char
		 */
		var BinTrieFlags;
		(function (BinTrieFlags) {
		    BinTrieFlags[BinTrieFlags["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
		    BinTrieFlags[BinTrieFlags["FLAG13"] = 8192] = "FLAG13";
		    BinTrieFlags[BinTrieFlags["BRANCH_LENGTH"] = 8064] = "BRANCH_LENGTH";
		    BinTrieFlags[BinTrieFlags["JUMP_TABLE"] = 127] = "JUMP_TABLE";
		})(BinTrieFlags || (BinTrieFlags = {}));

		var CharCodes$1;
		(function (CharCodes) {
		    CharCodes[CharCodes["NUM"] = 35] = "NUM";
		    CharCodes[CharCodes["SEMI"] = 59] = "SEMI";
		    CharCodes[CharCodes["EQUALS"] = 61] = "EQUALS";
		    CharCodes[CharCodes["ZERO"] = 48] = "ZERO";
		    CharCodes[CharCodes["NINE"] = 57] = "NINE";
		    CharCodes[CharCodes["LOWER_A"] = 97] = "LOWER_A";
		    CharCodes[CharCodes["LOWER_F"] = 102] = "LOWER_F";
		    CharCodes[CharCodes["LOWER_X"] = 120] = "LOWER_X";
		    CharCodes[CharCodes["LOWER_Z"] = 122] = "LOWER_Z";
		    CharCodes[CharCodes["UPPER_A"] = 65] = "UPPER_A";
		    CharCodes[CharCodes["UPPER_F"] = 70] = "UPPER_F";
		    CharCodes[CharCodes["UPPER_Z"] = 90] = "UPPER_Z";
		})(CharCodes$1 || (CharCodes$1 = {}));
		/** Bit that needs to be set to convert an upper case ASCII character to lower case */
		const TO_LOWER_BIT = 0b10_0000;
		function isNumber(code) {
		    return code >= CharCodes$1.ZERO && code <= CharCodes$1.NINE;
		}
		function isHexadecimalCharacter(code) {
		    return ((code >= CharCodes$1.UPPER_A && code <= CharCodes$1.UPPER_F) ||
		        (code >= CharCodes$1.LOWER_A && code <= CharCodes$1.LOWER_F));
		}
		function isAsciiAlphaNumeric(code) {
		    return ((code >= CharCodes$1.UPPER_A && code <= CharCodes$1.UPPER_Z) ||
		        (code >= CharCodes$1.LOWER_A && code <= CharCodes$1.LOWER_Z) ||
		        isNumber(code));
		}
		/**
		 * Checks if the given character is a valid end character for an entity in an attribute.
		 *
		 * Attribute values that aren't terminated properly aren't parsed, and shouldn't lead to a parser error.
		 * See the example in https://html.spec.whatwg.org/multipage/parsing.html#named-character-reference-state
		 * @param code Code point to decode.
		 */
		function isEntityInAttributeInvalidEnd(code) {
		    return code === CharCodes$1.EQUALS || isAsciiAlphaNumeric(code);
		}
		var EntityDecoderState;
		(function (EntityDecoderState) {
		    EntityDecoderState[EntityDecoderState["EntityStart"] = 0] = "EntityStart";
		    EntityDecoderState[EntityDecoderState["NumericStart"] = 1] = "NumericStart";
		    EntityDecoderState[EntityDecoderState["NumericDecimal"] = 2] = "NumericDecimal";
		    EntityDecoderState[EntityDecoderState["NumericHex"] = 3] = "NumericHex";
		    EntityDecoderState[EntityDecoderState["NamedEntity"] = 4] = "NamedEntity";
		})(EntityDecoderState || (EntityDecoderState = {}));
		/**
		 * Decoding mode for named entities.
		 */
		var DecodingMode;
		(function (DecodingMode) {
		    /** Entities in text nodes that can end with any character. */
		    DecodingMode[DecodingMode["Legacy"] = 0] = "Legacy";
		    /** Only allow entities terminated with a semicolon. */
		    DecodingMode[DecodingMode["Strict"] = 1] = "Strict";
		    /** Entities in attributes have limitations on ending characters. */
		    DecodingMode[DecodingMode["Attribute"] = 2] = "Attribute";
		})(DecodingMode || (DecodingMode = {}));
		/**
		 * Token decoder with support of writing partial entities.
		 */
		class EntityDecoder {
		    decodeTree;
		    emitCodePoint;
		    errors;
		    constructor(
		    /** The tree used to decode entities. */
		    // biome-ignore lint/correctness/noUnusedPrivateClassMembers: False positive
		    decodeTree, 
		    /**
		     * The function that is called when a codepoint is decoded.
		     *
		     * For multi-byte named entities, this will be called multiple times,
		     * with the second codepoint, and the same `consumed` value.
		     * @param codepoint The decoded codepoint.
		     * @param consumed The number of bytes consumed by the decoder.
		     */
		    emitCodePoint, 
		    /** An object that is used to produce errors. */
		    errors) {
		        this.decodeTree = decodeTree;
		        this.emitCodePoint = emitCodePoint;
		        this.errors = errors;
		    }
		    /** The current state of the decoder. */
		    state = EntityDecoderState.EntityStart;
		    /** Characters that were consumed while parsing an entity. */
		    consumed = 1;
		    /**
		     * The result of the entity.
		     *
		     * Either the result index of a numeric entity, or the codepoint of a
		     * numeric entity.
		     */
		    result = 0;
		    /** The current index in the decode tree. */
		    treeIndex = 0;
		    /** The number of characters that were consumed in excess. */
		    excess = 1;
		    /** The mode in which the decoder is operating. */
		    decodeMode = DecodingMode.Strict;
		    /** The number of characters that have been consumed in the current run. */
		    runConsumed = 0;
		    /**
		     * Resets the instance to make it reusable.
		     * @param decodeMode Entity decoding mode to use.
		     */
		    startEntity(decodeMode) {
		        this.decodeMode = decodeMode;
		        this.state = EntityDecoderState.EntityStart;
		        this.result = 0;
		        this.treeIndex = 0;
		        this.excess = 1;
		        this.consumed = 1;
		        this.runConsumed = 0;
		    }
		    /**
		     * Write an entity to the decoder. This can be called multiple times with partial entities.
		     * If the entity is incomplete, the decoder will return -1.
		     *
		     * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
		     * entity is incomplete, and resume when the next string is written.
		     * @param input The string containing the entity (or a continuation of the entity).
		     * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
		     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
		     */
		    write(input, offset) {
		        switch (this.state) {
		            case EntityDecoderState.EntityStart: {
		                if (input.charCodeAt(offset) === CharCodes$1.NUM) {
		                    this.state = EntityDecoderState.NumericStart;
		                    this.consumed += 1;
		                    return this.stateNumericStart(input, offset + 1);
		                }
		                this.state = EntityDecoderState.NamedEntity;
		                return this.stateNamedEntity(input, offset);
		            }
		            case EntityDecoderState.NumericStart: {
		                return this.stateNumericStart(input, offset);
		            }
		            case EntityDecoderState.NumericDecimal: {
		                return this.stateNumericDecimal(input, offset);
		            }
		            case EntityDecoderState.NumericHex: {
		                return this.stateNumericHex(input, offset);
		            }
		            case EntityDecoderState.NamedEntity: {
		                return this.stateNamedEntity(input, offset);
		            }
		        }
		    }
		    /**
		     * Switches between the numeric decimal and hexadecimal states.
		     *
		     * Equivalent to the `Numeric character reference state` in the HTML spec.
		     * @param input The string containing the entity (or a continuation of the entity).
		     * @param offset The current offset.
		     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
		     */
		    stateNumericStart(input, offset) {
		        if (offset >= input.length) {
		            return -1;
		        }
		        if ((input.charCodeAt(offset) | TO_LOWER_BIT) === CharCodes$1.LOWER_X) {
		            this.state = EntityDecoderState.NumericHex;
		            this.consumed += 1;
		            return this.stateNumericHex(input, offset + 1);
		        }
		        this.state = EntityDecoderState.NumericDecimal;
		        return this.stateNumericDecimal(input, offset);
		    }
		    /**
		     * Parses a hexadecimal numeric entity.
		     *
		     * Equivalent to the `Hexademical character reference state` in the HTML spec.
		     * @param input The string containing the entity (or a continuation of the entity).
		     * @param offset The current offset.
		     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
		     */
		    stateNumericHex(input, offset) {
		        while (offset < input.length) {
		            const char = input.charCodeAt(offset);
		            if (isNumber(char) || isHexadecimalCharacter(char)) {
		                // Convert hex digit to value (0-15); 'a'/'A' -> 10.
		                const digit = char <= CharCodes$1.NINE
		                    ? char - CharCodes$1.ZERO
		                    : (char | TO_LOWER_BIT) - CharCodes$1.LOWER_A + 10;
		                this.result = this.result * 16 + digit;
		                this.consumed++;
		                offset++;
		            }
		            else {
		                return this.emitNumericEntity(char, 3);
		            }
		        }
		        return -1; // Incomplete entity
		    }
		    /**
		     * Parses a decimal numeric entity.
		     *
		     * Equivalent to the `Decimal character reference state` in the HTML spec.
		     * @param input The string containing the entity (or a continuation of the entity).
		     * @param offset The current offset.
		     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
		     */
		    stateNumericDecimal(input, offset) {
		        while (offset < input.length) {
		            const char = input.charCodeAt(offset);
		            if (isNumber(char)) {
		                this.result = this.result * 10 + (char - CharCodes$1.ZERO);
		                this.consumed++;
		                offset++;
		            }
		            else {
		                return this.emitNumericEntity(char, 2);
		            }
		        }
		        return -1; // Incomplete entity
		    }
		    /**
		     * Validate and emit a numeric entity.
		     *
		     * Implements the logic from the `Hexademical character reference start
		     * state` and `Numeric character reference end state` in the HTML spec.
		     * @param lastCp The last code point of the entity. Used to see if the
		     *               entity was terminated with a semicolon.
		     * @param expectedLength The minimum number of characters that should be
		     *                       consumed. Used to validate that at least one digit
		     *                       was consumed.
		     * @returns The number of characters that were consumed.
		     */
		    emitNumericEntity(lastCp, expectedLength) {
		        // Ensure we consumed at least one digit.
		        if (this.consumed <= expectedLength) {
		            this.errors?.absenceOfDigitsInNumericCharacterReference(this.consumed);
		            return 0;
		        }
		        // Figure out if this is a legit end of the entity
		        if (lastCp === CharCodes$1.SEMI) {
		            this.consumed += 1;
		        }
		        else if (this.decodeMode === DecodingMode.Strict) {
		            return 0;
		        }
		        this.emitCodePoint(replaceCodePoint(this.result), this.consumed);
		        if (this.errors) {
		            if (lastCp !== CharCodes$1.SEMI) {
		                this.errors.missingSemicolonAfterCharacterReference();
		            }
		            this.errors.validateNumericCharacterReference(this.result);
		        }
		        return this.consumed;
		    }
		    /**
		     * Parses a named entity.
		     *
		     * Equivalent to the `Named character reference state` in the HTML spec.
		     * @param input The string containing the entity (or a continuation of the entity).
		     * @param offset The current offset.
		     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
		     */
		    stateNamedEntity(input, offset) {
		        const { decodeTree } = this;
		        let current = decodeTree[this.treeIndex];
		        // The length is the number of bytes of the value, including the current byte.
		        let valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
		        while (offset < input.length) {
		            // Handle compact runs (possibly inline): valueLength == 0 and SEMI_REQUIRED bit set.
		            if (valueLength === 0 && (current & BinTrieFlags.FLAG13) !== 0) {
		                const runLength = (current & BinTrieFlags.BRANCH_LENGTH) >> 7; /* 2..63 */
		                // If we are starting a run, check the first char.
		                if (this.runConsumed === 0) {
		                    const firstChar = current & BinTrieFlags.JUMP_TABLE;
		                    if (input.charCodeAt(offset) !== firstChar) {
		                        return this.result === 0
		                            ? 0
		                            : this.emitNotTerminatedNamedEntity();
		                    }
		                    offset++;
		                    this.excess++;
		                    this.runConsumed++;
		                }
		                // Check remaining characters in the run.
		                while (this.runConsumed < runLength) {
		                    if (offset >= input.length) {
		                        return -1;
		                    }
		                    const charIndexInPacked = this.runConsumed - 1;
		                    const packedWord = decodeTree[this.treeIndex + 1 + (charIndexInPacked >> 1)];
		                    const expectedChar = charIndexInPacked % 2 === 0
		                        ? packedWord & 0xff
		                        : (packedWord >> 8) & 0xff;
		                    if (input.charCodeAt(offset) !== expectedChar) {
		                        this.runConsumed = 0;
		                        return this.result === 0
		                            ? 0
		                            : this.emitNotTerminatedNamedEntity();
		                    }
		                    offset++;
		                    this.excess++;
		                    this.runConsumed++;
		                }
		                this.runConsumed = 0;
		                this.treeIndex += 1 + (runLength >> 1);
		                current = decodeTree[this.treeIndex];
		                valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
		            }
		            if (offset >= input.length)
		                break;
		            const char = input.charCodeAt(offset);
		            /*
		             * Implicit semicolon handling for nodes that require a semicolon but
		             * don't have an explicit ';' branch stored in the trie. If we have
		             * a value on the current node, it requires a semicolon, and the
		             * current input character is a semicolon, emit the entity using the
		             * current node (without descending further).
		             */
		            if (char === CharCodes$1.SEMI &&
		                valueLength !== 0 &&
		                (current & BinTrieFlags.FLAG13) !== 0) {
		                return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
		            }
		            this.treeIndex = determineBranch(decodeTree, current, this.treeIndex + Math.max(1, valueLength), char);
		            if (this.treeIndex < 0) {
		                return this.result === 0 ||
		                    // If we are parsing an attribute
		                    (this.decodeMode === DecodingMode.Attribute &&
		                        // We shouldn't have consumed any characters after the entity,
		                        (valueLength === 0 ||
		                            // And there should be no invalid characters.
		                            isEntityInAttributeInvalidEnd(char)))
		                    ? 0
		                    : this.emitNotTerminatedNamedEntity();
		            }
		            current = decodeTree[this.treeIndex];
		            valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
		            // If the branch is a value, store it and continue
		            if (valueLength !== 0) {
		                // If the entity is terminated by a semicolon, we are done.
		                if (char === CharCodes$1.SEMI) {
		                    return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
		                }
		                // If we encounter a non-terminated (legacy) entity while parsing strictly, then ignore it.
		                if (this.decodeMode !== DecodingMode.Strict &&
		                    (current & BinTrieFlags.FLAG13) === 0) {
		                    this.result = this.treeIndex;
		                    this.consumed += this.excess;
		                    this.excess = 0;
		                }
		            }
		            // Increment offset & excess for next iteration
		            offset++;
		            this.excess++;
		        }
		        return -1;
		    }
		    /**
		     * Emit a named entity that was not terminated with a semicolon.
		     * @returns The number of characters consumed.
		     */
		    emitNotTerminatedNamedEntity() {
		        const { result, decodeTree } = this;
		        const valueLength = (decodeTree[result] & BinTrieFlags.VALUE_LENGTH) >> 14;
		        this.emitNamedEntityData(result, valueLength, this.consumed);
		        this.errors?.missingSemicolonAfterCharacterReference();
		        return this.consumed;
		    }
		    /**
		     * Emit a named entity.
		     * @param result The index of the entity in the decode tree.
		     * @param valueLength The number of bytes in the entity.
		     * @param consumed The number of characters consumed.
		     * @returns The number of characters consumed.
		     */
		    emitNamedEntityData(result, valueLength, consumed) {
		        const { decodeTree } = this;
		        this.emitCodePoint(valueLength === 1
		            ? decodeTree[result] &
		                ~(BinTrieFlags.VALUE_LENGTH | BinTrieFlags.FLAG13)
		            : decodeTree[result + 1], consumed);
		        if (valueLength === 3) {
		            // For multi-byte values, we need to emit the second byte.
		            this.emitCodePoint(decodeTree[result + 2], consumed);
		        }
		        return consumed;
		    }
		    /**
		     * Signal to the parser that the end of the input was reached.
		     *
		     * Remaining data will be emitted and relevant errors will be produced.
		     * @returns The number of characters consumed.
		     */
		    end() {
		        switch (this.state) {
		            case EntityDecoderState.NamedEntity: {
		                // Emit a named entity if we have one.
		                return this.result !== 0 &&
		                    (this.decodeMode !== DecodingMode.Attribute ||
		                        this.result === this.treeIndex)
		                    ? this.emitNotTerminatedNamedEntity()
		                    : 0;
		            }
		            // Otherwise, emit a numeric entity if we have one.
		            case EntityDecoderState.NumericDecimal: {
		                return this.emitNumericEntity(0, 2);
		            }
		            case EntityDecoderState.NumericHex: {
		                return this.emitNumericEntity(0, 3);
		            }
		            case EntityDecoderState.NumericStart: {
		                this.errors?.absenceOfDigitsInNumericCharacterReference(this.consumed);
		                return 0;
		            }
		            case EntityDecoderState.EntityStart: {
		                // Return 0 if we have no entity.
		                return 0;
		            }
		        }
		    }
		}
		/**
		 * Determines the branch of the current node that is taken given the current
		 * character. This function is used to traverse the trie.
		 * @param decodeTree The trie.
		 * @param current The current node.
		 * @param nodeIndex Index immediately after the current node header.
		 * @param char The current character.
		 * @returns The index of the next node, or -1 if no branch is taken.
		 */
		function determineBranch(decodeTree, current, nodeIndex, char) {
		    const branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
		    const jumpOffset = current & BinTrieFlags.JUMP_TABLE;
		    // Case 1: Single branch encoded in jump offset
		    if (branchCount === 0) {
		        return jumpOffset !== 0 && char === jumpOffset ? nodeIndex : -1;
		    }
		    // Case 2: Multiple branches encoded in jump table
		    if (jumpOffset) {
		        const value = char - jumpOffset;
		        return value < 0 || value >= branchCount
		            ? -1
		            : decodeTree[nodeIndex + value] - 1;
		    }
		    // Case 3: Multiple branches encoded in packed dictionary (two keys per uint16)
		    const packedKeySlots = (branchCount + 1) >> 1;
		    /*
		     * Treat packed keys as a virtual sorted array of length `branchCount`.
		     * Key(i) = low byte for even i, high byte for odd i in slot i>>1.
		     */
		    let lo = 0;
		    let hi = branchCount - 1;
		    while (lo <= hi) {
		        const mid = (lo + hi) >>> 1;
		        const slot = mid >> 1;
		        const packed = decodeTree[nodeIndex + slot];
		        const midKey = (packed >> ((mid & 1) * 8)) & 0xff;
		        if (midKey < char) {
		            lo = mid + 1;
		        }
		        else if (midKey > char) {
		            hi = mid - 1;
		        }
		        else {
		            return decodeTree[nodeIndex + packedKeySlots + mid];
		        }
		    }
		    return -1;
		}

		var CharCodes;
		(function (CharCodes) {
		    CharCodes[CharCodes["Tab"] = 9] = "Tab";
		    CharCodes[CharCodes["NewLine"] = 10] = "NewLine";
		    CharCodes[CharCodes["FormFeed"] = 12] = "FormFeed";
		    CharCodes[CharCodes["CarriageReturn"] = 13] = "CarriageReturn";
		    CharCodes[CharCodes["Space"] = 32] = "Space";
		    CharCodes[CharCodes["ExclamationMark"] = 33] = "ExclamationMark";
		    CharCodes[CharCodes["Number"] = 35] = "Number";
		    CharCodes[CharCodes["Amp"] = 38] = "Amp";
		    CharCodes[CharCodes["SingleQuote"] = 39] = "SingleQuote";
		    CharCodes[CharCodes["DoubleQuote"] = 34] = "DoubleQuote";
		    CharCodes[CharCodes["Dash"] = 45] = "Dash";
		    CharCodes[CharCodes["Slash"] = 47] = "Slash";
		    CharCodes[CharCodes["Zero"] = 48] = "Zero";
		    CharCodes[CharCodes["Nine"] = 57] = "Nine";
		    CharCodes[CharCodes["Semi"] = 59] = "Semi";
		    CharCodes[CharCodes["Lt"] = 60] = "Lt";
		    CharCodes[CharCodes["Eq"] = 61] = "Eq";
		    CharCodes[CharCodes["Gt"] = 62] = "Gt";
		    CharCodes[CharCodes["Questionmark"] = 63] = "Questionmark";
		    CharCodes[CharCodes["UpperA"] = 65] = "UpperA";
		    CharCodes[CharCodes["LowerA"] = 97] = "LowerA";
		    CharCodes[CharCodes["UpperF"] = 70] = "UpperF";
		    CharCodes[CharCodes["LowerF"] = 102] = "LowerF";
		    CharCodes[CharCodes["UpperZ"] = 90] = "UpperZ";
		    CharCodes[CharCodes["LowerZ"] = 122] = "LowerZ";
		    CharCodes[CharCodes["LowerX"] = 120] = "LowerX";
		    CharCodes[CharCodes["OpeningSquareBracket"] = 91] = "OpeningSquareBracket";
		})(CharCodes || (CharCodes = {}));
		/** All the states the tokenizer can be in. */
		var State;
		(function (State) {
		    State[State["Text"] = 1] = "Text";
		    State[State["BeforeTagName"] = 2] = "BeforeTagName";
		    State[State["InTagName"] = 3] = "InTagName";
		    State[State["InSelfClosingTag"] = 4] = "InSelfClosingTag";
		    State[State["BeforeClosingTagName"] = 5] = "BeforeClosingTagName";
		    State[State["InClosingTagName"] = 6] = "InClosingTagName";
		    State[State["AfterClosingTagName"] = 7] = "AfterClosingTagName";
		    // Attributes
		    State[State["BeforeAttributeName"] = 8] = "BeforeAttributeName";
		    State[State["InAttributeName"] = 9] = "InAttributeName";
		    State[State["AfterAttributeName"] = 10] = "AfterAttributeName";
		    State[State["BeforeAttributeValue"] = 11] = "BeforeAttributeValue";
		    State[State["InAttributeValueDq"] = 12] = "InAttributeValueDq";
		    State[State["InAttributeValueSq"] = 13] = "InAttributeValueSq";
		    State[State["InAttributeValueNq"] = 14] = "InAttributeValueNq";
		    // Declarations
		    State[State["BeforeDeclaration"] = 15] = "BeforeDeclaration";
		    State[State["InDeclaration"] = 16] = "InDeclaration";
		    // Processing instructions
		    State[State["InProcessingInstruction"] = 17] = "InProcessingInstruction";
		    // Comments & CDATA
		    State[State["BeforeComment"] = 18] = "BeforeComment";
		    State[State["CDATASequence"] = 19] = "CDATASequence";
		    State[State["DeclarationSequence"] = 20] = "DeclarationSequence";
		    State[State["InSpecialComment"] = 21] = "InSpecialComment";
		    State[State["InCommentLike"] = 22] = "InCommentLike";
		    // Special tags
		    State[State["SpecialStartSequence"] = 23] = "SpecialStartSequence";
		    State[State["InSpecialTag"] = 24] = "InSpecialTag";
		    State[State["InPlainText"] = 25] = "InPlainText";
		    State[State["InEntity"] = 26] = "InEntity";
		})(State || (State = {}));
		function isWhitespace(c) {
		    return (c === CharCodes.Space ||
		        c === CharCodes.NewLine ||
		        c === CharCodes.Tab ||
		        c === CharCodes.FormFeed ||
		        c === CharCodes.CarriageReturn);
		}
		function isEndOfTagSection(c) {
		    return c === CharCodes.Slash || c === CharCodes.Gt || isWhitespace(c);
		}
		function isASCIIAlpha(c) {
		    return ((c >= CharCodes.LowerA && c <= CharCodes.LowerZ) ||
		        (c >= CharCodes.UpperA && c <= CharCodes.UpperZ));
		}
		/**
		 * Quote style used for parsed attributes.
		 */
		var QuoteType;
		(function (QuoteType) {
		    QuoteType[QuoteType["NoValue"] = 0] = "NoValue";
		    QuoteType[QuoteType["Unquoted"] = 1] = "Unquoted";
		    QuoteType[QuoteType["Single"] = 2] = "Single";
		    QuoteType[QuoteType["Double"] = 3] = "Double";
		})(QuoteType || (QuoteType = {}));
		/**
		 * Sequences used to match longer strings.
		 *
		 * We don't have `Script`, `Style`, or `Title` here. Instead, we re-use the *End
		 * sequences with an increased offset.
		 */
		const Sequences = {
		    Empty: new Uint8Array(0),
		    Cdata: new Uint8Array([0x43, 0x44, 0x41, 0x54, 0x41, 0x5b]), // CDATA[
		    CdataEnd: new Uint8Array([0x5d, 0x5d, 0x3e]), // ]]>
		    CommentEnd: new Uint8Array([0x2d, 0x2d, 0x21, 0x3e]), // `--!>`
		    Doctype: new Uint8Array([0x64, 0x6f, 0x63, 0x74, 0x79, 0x70, 0x65]), // `doctype`
		    IframeEnd: new Uint8Array([0x3c, 0x2f, 0x69, 0x66, 0x72, 0x61, 0x6d, 0x65]), // `</iframe`
		    NoembedEnd: new Uint8Array([
		        0x3c, 0x2f, 0x6e, 0x6f, 0x65, 0x6d, 0x62, 0x65, 0x64,
		    ]), // `</noembed`
		    NoframesEnd: new Uint8Array([
		        0x3c, 0x2f, 0x6e, 0x6f, 0x66, 0x72, 0x61, 0x6d, 0x65, 0x73,
		    ]), // `</noframes`
		    Plaintext: new Uint8Array([
		        0x3c, 0x2f, 0x70, 0x6c, 0x61, 0x69, 0x6e, 0x74, 0x65, 0x78, 0x74,
		    ]), // `</plaintext`
		    ScriptEnd: new Uint8Array([0x3c, 0x2f, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74]), // `</script`
		    StyleEnd: new Uint8Array([0x3c, 0x2f, 0x73, 0x74, 0x79, 0x6c, 0x65]), // `</style`
		    TitleEnd: new Uint8Array([0x3c, 0x2f, 0x74, 0x69, 0x74, 0x6c, 0x65]), // `</title`
		    TextareaEnd: new Uint8Array([
		        0x3c, 0x2f, 0x74, 0x65, 0x78, 0x74, 0x61, 0x72, 0x65, 0x61,
		    ]), // `</textarea`
		    XmpEnd: new Uint8Array([0x3c, 0x2f, 0x78, 0x6d, 0x70]), // `</xmp`
		};
		/**
		 * Maps the first lowercase character of an HTML tag name to the sequence
		 * used for special-tag detection.  All sequences share a common layout
		 * where index 2 is the first tag-name character, so matching always
		 * continues from offset 3.
		 */
		const specialStartSequences = new Map([
		    [Sequences.IframeEnd[2], Sequences.IframeEnd],
		    [Sequences.NoembedEnd[2], Sequences.NoembedEnd],
		    [Sequences.Plaintext[2], Sequences.Plaintext],
		    [Sequences.ScriptEnd[2], Sequences.ScriptEnd],
		    [Sequences.TitleEnd[2], Sequences.TitleEnd],
		    [Sequences.XmpEnd[2], Sequences.XmpEnd],
		]);
		/**
		 * Tokenizer implementation used by `Parser`.
		 */
		class Tokenizer {
		    cbs;
		    /** The current state the tokenizer is in. */
		    state = State.Text;
		    /** The read buffer. */
		    buffer = "";
		    /** The beginning of the section that is currently being read. */
		    sectionStart = 0;
		    /** The index within the buffer that we are currently looking at. */
		    index = 0;
		    /** The start of the last entity. */
		    entityStart = 0;
		    /** Some behavior, eg. when decoding entities, is done while we are in another state. This keeps track of the other state type. */
		    baseState = State.Text;
		    /** For special parsing behavior inside of script and style tags. */
		    isSpecial = false;
		    /** Indicates whether the tokenizer has been paused. */
		    running = true;
		    /** The offset of the current buffer. */
		    offset = 0;
		    xmlMode;
		    decodeEntities;
		    recognizeSelfClosing;
		    entityDecoder;
		    constructor({ xmlMode = false, decodeEntities = true, recognizeSelfClosing = xmlMode, }, cbs) {
		        this.cbs = cbs;
		        this.xmlMode = xmlMode;
		        this.decodeEntities = decodeEntities;
		        this.recognizeSelfClosing = recognizeSelfClosing;
		        this.entityDecoder = new EntityDecoder(xmlMode ? xmlDecodeTree : htmlDecodeTree, (cp, consumed) => this.emitCodePoint(cp, consumed));
		    }
		    reset() {
		        this.state = State.Text;
		        this.buffer = "";
		        this.sectionStart = 0;
		        this.index = 0;
		        this.baseState = State.Text;
		        this.isSpecial = false;
		        this.currentSequence = Sequences.Empty;
		        this.sequenceIndex = 0;
		        this.running = true;
		        this.offset = 0;
		    }
		    write(chunk) {
		        this.offset += this.buffer.length;
		        this.buffer = chunk;
		        this.parse();
		    }
		    end() {
		        if (this.running)
		            this.finish();
		    }
		    pause() {
		        this.running = false;
		    }
		    resume() {
		        this.running = true;
		        if (this.index < this.buffer.length + this.offset) {
		            this.parse();
		        }
		    }
		    stateText(c) {
		        if (c === CharCodes.Lt ||
		            (!this.decodeEntities && this.fastForwardTo(CharCodes.Lt))) {
		            if (this.index > this.sectionStart) {
		                this.cbs.ontext(this.sectionStart, this.index);
		            }
		            this.state = State.BeforeTagName;
		            this.sectionStart = this.index;
		        }
		        else if (this.decodeEntities && c === CharCodes.Amp) {
		            this.startEntity();
		        }
		    }
		    currentSequence = Sequences.Empty;
		    sequenceIndex = 0;
		    enterTagBody() {
		        if (this.currentSequence === Sequences.Plaintext) {
		            this.currentSequence = Sequences.Empty;
		            this.state = State.InPlainText;
		        }
		        else if (this.isSpecial) {
		            this.state = State.InSpecialTag;
		            this.sequenceIndex = 0;
		        }
		        else {
		            this.state = State.Text;
		        }
		    }
		    /**
		     * Match the opening tag name against an HTML text-only tag sequence.
		     *
		     * Some tags share an initial prefix (`script`/`style`, `title`/`textarea`,
		     * `noembed`/`noframes`), so we may switch to an alternate sequence at the
		     * first distinguishing byte.  On a successful full match we fall back to
		     * the normal tag-name state; a later `>` will enter raw-text, RCDATA, or
		     * plaintext mode based on `currentSequence` / `isSpecial`.
		     * @param c Current character code point.
		     */
		    stateSpecialStartSequence(c) {
		        const lower = c | 0x20;
		        // Still matching — check for an alternate sequence at branch points.
		        if (this.sequenceIndex < this.currentSequence.length) {
		            if (lower === this.currentSequence[this.sequenceIndex]) {
		                this.sequenceIndex++;
		                return;
		            }
		            if (this.sequenceIndex === 3) {
		                if (this.currentSequence === Sequences.ScriptEnd &&
		                    lower === Sequences.StyleEnd[3]) {
		                    this.currentSequence = Sequences.StyleEnd;
		                    this.sequenceIndex = 4;
		                    return;
		                }
		                if (this.currentSequence === Sequences.TitleEnd &&
		                    lower === Sequences.TextareaEnd[3]) {
		                    this.currentSequence = Sequences.TextareaEnd;
		                    this.sequenceIndex = 4;
		                    return;
		                }
		            }
		            else if (this.sequenceIndex === 4 &&
		                this.currentSequence === Sequences.NoembedEnd &&
		                lower === Sequences.NoframesEnd[4]) {
		                this.currentSequence = Sequences.NoframesEnd;
		                this.sequenceIndex = 5;
		                return;
		            }
		        }
		        else if (isEndOfTagSection(c)) {
		            // Full match on a valid tag boundary — keep the sequence.
		            this.sequenceIndex = 0;
		            this.state = State.InTagName;
		            this.stateInTagName(c);
		            return;
		        }
		        // No match — abandon special-tag detection.
		        this.isSpecial = false;
		        this.currentSequence = Sequences.Empty;
		        this.sequenceIndex = 0;
		        this.state = State.InTagName;
		        this.stateInTagName(c);
		    }
		    stateCDATASequence(c) {
		        if (c === Sequences.Cdata[this.sequenceIndex]) {
		            if (++this.sequenceIndex === Sequences.Cdata.length) {
		                this.state = State.InCommentLike;
		                this.currentSequence = Sequences.CdataEnd;
		                this.sequenceIndex = 0;
		                this.sectionStart = this.index + 1;
		            }
		        }
		        else {
		            this.sequenceIndex = 0;
		            if (this.xmlMode) {
		                this.state = State.InDeclaration;
		                this.stateInDeclaration(c); // Reconsume the character
		            }
		            else {
		                this.state = State.InSpecialComment;
		                this.stateInSpecialComment(c); // Reconsume the character
		            }
		        }
		    }
		    /**
		     * When we wait for one specific character, we can speed things up
		     * by skipping through the buffer until we find it.
		     * @param c Current character code point.
		     * @returns Whether the character was found.
		     */
		    fastForwardTo(c) {
		        while (++this.index < this.buffer.length + this.offset) {
		            if (this.buffer.charCodeAt(this.index - this.offset) === c) {
		                return true;
		            }
		        }
		        /*
		         * We increment the index at the end of the `parse` loop,
		         * so set it to `buffer.length - 1` here.
		         *
		         * TODO: Refactor `parse` to increment index before calling states.
		         */
		        this.index = this.buffer.length + this.offset - 1;
		        return false;
		    }
		    /**
		     * Emit a comment token and return to the text state.
		     * @param offset Number of characters in the end sequence that have already been matched.
		     */
		    emitComment(offset) {
		        this.cbs.oncomment(this.sectionStart, this.index, offset);
		        this.sequenceIndex = 0;
		        this.sectionStart = this.index + 1;
		        this.state = State.Text;
		    }
		    /**
		     * Comments and CDATA end with `-->` and `]]>`.
		     *
		     * Their common qualities are:
		     * - Their end sequences have a distinct character they start with.
		     * - That character is then repeated, so we have to check multiple repeats.
		     * - All characters but the start character of the sequence can be skipped.
		     * @param c Current character code point.
		     */
		    stateInCommentLike(c) {
		        if (!this.xmlMode &&
		            this.currentSequence === Sequences.CommentEnd &&
		            this.sequenceIndex <= 1 &&
		            /*
		             * We're still at the very start of the comment: the only
		             * characters consumed since `<!--` are the dashes that
		             * advanced sequenceIndex (0 for `<!-->`, 1 for `<!--->`).
		             */
		            this.index === this.sectionStart + this.sequenceIndex &&
		            c === CharCodes.Gt) {
		            // Abruptly closed empty HTML comment.
		            this.emitComment(this.sequenceIndex);
		        }
		        else if (this.currentSequence === Sequences.CommentEnd &&
		            this.sequenceIndex === 2 &&
		            c === CharCodes.Gt) {
		            // `!` is optional here, so the same sequence also accepts `-->`.
		            this.emitComment(2);
		        }
		        else if (this.currentSequence === Sequences.CommentEnd &&
		            this.sequenceIndex === this.currentSequence.length - 1 &&
		            c !== CharCodes.Gt) {
		            this.sequenceIndex = Number(c === CharCodes.Dash);
		        }
		        else if (c === this.currentSequence[this.sequenceIndex]) {
		            if (++this.sequenceIndex === this.currentSequence.length) {
		                if (this.currentSequence === Sequences.CdataEnd) {
		                    this.cbs.oncdata(this.sectionStart, this.index, 2);
		                }
		                else {
		                    this.cbs.oncomment(this.sectionStart, this.index, 3);
		                }
		                this.sequenceIndex = 0;
		                this.sectionStart = this.index + 1;
		                this.state = State.Text;
		            }
		        }
		        else if (this.sequenceIndex === 0) {
		            // Fast-forward to the first character of the sequence
		            if (this.fastForwardTo(this.currentSequence[0])) {
		                this.sequenceIndex = 1;
		            }
		        }
		        else if (c !== this.currentSequence[this.sequenceIndex - 1]) {
		            // Allow long sequences, eg. --->, ]]]>
		            this.sequenceIndex = 0;
		        }
		    }
		    /**
		     * HTML only allows ASCII alpha characters (a-z and A-Z) at the beginning of a tag name.
		     *
		     * XML allows a lot more characters here (@see https://www.w3.org/TR/REC-xml/#NT-NameStartChar).
		     * We allow anything that wouldn't end the tag.
		     * @param c Current character code point.
		     */
		    isTagStartChar(c) {
		        return this.xmlMode ? !isEndOfTagSection(c) : isASCIIAlpha(c);
		    }
		    /**
		     * Scan raw-text / RCDATA content for the matching end tag.
		     *
		     * For RCDATA tags (`<title>`, `<textarea>`) entities are decoded inline.
		     * For raw-text tags (`<script>`, `<style>`, etc.) we fast-forward to `<`.
		     * @param c Current character code point.
		     */
		    stateInSpecialTag(c) {
		        if (this.sequenceIndex === this.currentSequence.length) {
		            if (isEndOfTagSection(c)) {
		                const endOfText = this.index - this.currentSequence.length;
		                if (this.sectionStart < endOfText) {
		                    // Spoof the index so that reported locations match up.
		                    const actualIndex = this.index;
		                    this.index = endOfText;
		                    this.cbs.ontext(this.sectionStart, endOfText);
		                    this.index = actualIndex;
		                }
		                this.isSpecial = false;
		                this.sectionStart = endOfText + 2; // Skip over the `</`
		                this.stateInClosingTagName(c);
		                return; // We are done; skip the rest of the function.
		            }
		            this.sequenceIndex = 0;
		        }
		        if ((c | 0x20) === this.currentSequence[this.sequenceIndex]) {
		            this.sequenceIndex += 1;
		        }
		        else if (this.sequenceIndex === 0) {
		            if (this.currentSequence === Sequences.TitleEnd ||
		                this.currentSequence === Sequences.TextareaEnd) {
		                // RCDATA tags have to parse entities while still looking for their end tag.
		                if (this.decodeEntities && c === CharCodes.Amp) {
		                    this.startEntity();
		                }
		            }
		            else if (this.fastForwardTo(CharCodes.Lt)) {
		                // Outside of RCDATA tags, we can fast-forward.
		                this.sequenceIndex = 1;
		            }
		        }
		        else {
		            // If we see a `<`, set the sequence index to 1; useful for eg. `<</script>`.
		            this.sequenceIndex = Number(c === CharCodes.Lt);
		        }
		    }
		    stateBeforeTagName(c) {
		        if (c === CharCodes.ExclamationMark) {
		            this.state = State.BeforeDeclaration;
		            this.sectionStart = this.index + 1;
		        }
		        else if (c === CharCodes.Questionmark) {
		            if (this.xmlMode) {
		                this.state = State.InProcessingInstruction;
		                this.sequenceIndex = 0;
		                this.sectionStart = this.index + 1;
		            }
		            else {
		                this.state = State.InSpecialComment;
		                this.sectionStart = this.index;
		            }
		        }
		        else if (this.isTagStartChar(c)) {
		            this.sectionStart = this.index;
		            const special = this.xmlMode || this.cbs.isInForeignContext?.()
		                ? undefined
		                : specialStartSequences.get(c | 0x20);
		            if (special === undefined) {
		                this.state = State.InTagName;
		            }
		            else {
		                this.isSpecial = true;
		                this.currentSequence = special;
		                this.sequenceIndex = 3;
		                this.state = State.SpecialStartSequence;
		            }
		        }
		        else if (c === CharCodes.Slash) {
		            this.state = State.BeforeClosingTagName;
		        }
		        else {
		            this.state = State.Text;
		            this.stateText(c);
		        }
		    }
		    stateInTagName(c) {
		        if (isEndOfTagSection(c)) {
		            this.cbs.onopentagname(this.sectionStart, this.index);
		            this.sectionStart = -1;
		            this.state = State.BeforeAttributeName;
		            this.stateBeforeAttributeName(c);
		        }
		    }
		    stateBeforeClosingTagName(c) {
		        if (isWhitespace(c)) {
		            if (this.xmlMode) ;
		            else {
		                this.state = State.InSpecialComment;
		                this.sectionStart = this.index;
		            }
		        }
		        else if (c === CharCodes.Gt) {
		            this.state = State.Text;
		            if (!this.xmlMode) {
		                this.sectionStart = this.index + 1;
		            }
		        }
		        else {
		            this.state = this.isTagStartChar(c)
		                ? State.InClosingTagName
		                : State.InSpecialComment;
		            this.sectionStart = this.index;
		        }
		    }
		    stateInClosingTagName(c) {
		        if (isEndOfTagSection(c)) {
		            this.cbs.onclosetag(this.sectionStart, this.index);
		            this.sectionStart = -1;
		            this.state = State.AfterClosingTagName;
		            this.stateAfterClosingTagName(c);
		        }
		    }
		    stateAfterClosingTagName(c) {
		        // Skip everything until ">"
		        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
		            this.state = State.Text;
		            this.sectionStart = this.index + 1;
		        }
		    }
		    stateBeforeAttributeName(c) {
		        if (c === CharCodes.Gt) {
		            this.cbs.onopentagend(this.index);
		            this.enterTagBody();
		            this.sectionStart = this.index + 1;
		        }
		        else if (c === CharCodes.Slash) {
		            this.state = State.InSelfClosingTag;
		        }
		        else if (!isWhitespace(c)) {
		            this.state = State.InAttributeName;
		            this.sectionStart = this.index;
		        }
		    }
		    /**
		     * Handle `/` before `>` in an opening tag.
		     *
		     * In HTML mode, text-only tags ignore the self-closing flag and still enter
		     * their raw-text/RCDATA/plaintext state unless self-closing tags are being
		     * recognized. In XML mode, or for ordinary tags, the tokenizer returns to
		     * regular text parsing after emitting the self-closing callback.
		     * @param c Current character code point.
		     */
		    stateInSelfClosingTag(c) {
		        if (c === CharCodes.Gt) {
		            this.cbs.onselfclosingtag(this.index);
		            this.sectionStart = this.index + 1;
		            if (!this.recognizeSelfClosing) {
		                this.enterTagBody();
		                return;
		            }
		            this.state = State.Text;
		            this.isSpecial = false; // Reset special state, in case of self-closing special tags
		            this.currentSequence = Sequences.Empty;
		        }
		        else if (!isWhitespace(c)) {
		            this.state = State.BeforeAttributeName;
		            this.stateBeforeAttributeName(c);
		        }
		    }
		    stateInAttributeName(c) {
		        if (c === CharCodes.Eq || isEndOfTagSection(c)) {
		            this.cbs.onattribname(this.sectionStart, this.index);
		            this.sectionStart = this.index;
		            this.state = State.AfterAttributeName;
		            this.stateAfterAttributeName(c);
		        }
		    }
		    stateAfterAttributeName(c) {
		        if (c === CharCodes.Eq) {
		            this.state = State.BeforeAttributeValue;
		        }
		        else if (c === CharCodes.Slash || c === CharCodes.Gt) {
		            this.cbs.onattribend(QuoteType.NoValue, this.sectionStart);
		            this.sectionStart = -1;
		            this.state = State.BeforeAttributeName;
		            this.stateBeforeAttributeName(c);
		        }
		        else if (!isWhitespace(c)) {
		            this.cbs.onattribend(QuoteType.NoValue, this.sectionStart);
		            this.state = State.InAttributeName;
		            this.sectionStart = this.index;
		        }
		    }
		    stateBeforeAttributeValue(c) {
		        if (c === CharCodes.DoubleQuote) {
		            this.state = State.InAttributeValueDq;
		            this.sectionStart = this.index + 1;
		        }
		        else if (c === CharCodes.SingleQuote) {
		            this.state = State.InAttributeValueSq;
		            this.sectionStart = this.index + 1;
		        }
		        else if (!isWhitespace(c)) {
		            this.sectionStart = this.index;
		            this.state = State.InAttributeValueNq;
		            this.stateInAttributeValueNoQuotes(c); // Reconsume token
		        }
		    }
		    handleInAttributeValue(c, quote) {
		        if (c === quote ||
		            (!this.decodeEntities && this.fastForwardTo(quote))) {
		            this.cbs.onattribdata(this.sectionStart, this.index);
		            this.sectionStart = -1;
		            this.cbs.onattribend(quote === CharCodes.DoubleQuote
		                ? QuoteType.Double
		                : QuoteType.Single, this.index + 1);
		            this.state = State.BeforeAttributeName;
		        }
		        else if (this.decodeEntities && c === CharCodes.Amp) {
		            this.startEntity();
		        }
		    }
		    stateInAttributeValueDoubleQuotes(c) {
		        this.handleInAttributeValue(c, CharCodes.DoubleQuote);
		    }
		    stateInAttributeValueSingleQuotes(c) {
		        this.handleInAttributeValue(c, CharCodes.SingleQuote);
		    }
		    stateInAttributeValueNoQuotes(c) {
		        if (isWhitespace(c) || c === CharCodes.Gt) {
		            this.cbs.onattribdata(this.sectionStart, this.index);
		            this.sectionStart = -1;
		            this.cbs.onattribend(QuoteType.Unquoted, this.index);
		            this.state = State.BeforeAttributeName;
		            this.stateBeforeAttributeName(c);
		        }
		        else if (this.decodeEntities && c === CharCodes.Amp) {
		            this.startEntity();
		        }
		    }
		    /**
		     * Distinguish between CDATA, declarations, HTML comments, and HTML bogus
		     * comments after `<!`.
		     *
		     * In HTML mode, only real comments and doctypes stay on declaration paths;
		     * everything else becomes a bogus comment terminated by the next `>`.
		     * @param c Current character code point.
		     */
		    stateBeforeDeclaration(c) {
		        if (c === CharCodes.OpeningSquareBracket) {
		            this.state = State.CDATASequence;
		            this.sequenceIndex = 0;
		        }
		        else if (this.xmlMode) {
		            this.state =
		                c === CharCodes.Dash
		                    ? State.BeforeComment
		                    : State.InDeclaration;
		        }
		        else if ((c | 0x20) === Sequences.Doctype[0]) {
		            this.state = State.DeclarationSequence;
		            this.currentSequence = Sequences.Doctype;
		            this.sequenceIndex = 1;
		        }
		        else if (c === CharCodes.Gt) {
		            this.cbs.oncomment(this.sectionStart, this.index, 0);
		            this.state = State.Text;
		            this.sectionStart = this.index + 1;
		        }
		        else if (c === CharCodes.Dash) {
		            this.state = State.BeforeComment;
		        }
		        else {
		            this.state = State.InSpecialComment;
		        }
		    }
		    /**
		     * Continue matching `doctype` after `<!d`.
		     *
		     * A full `doctype` match stays on the declaration path; any other name falls
		     * back to an HTML bogus comment, which matches browser behavior for
		     * non-doctype `<!...>` constructs.
		     * @param c Current character code point.
		     */
		    stateDeclarationSequence(c) {
		        if (this.sequenceIndex === this.currentSequence.length) {
		            this.state = State.InDeclaration;
		            this.stateInDeclaration(c);
		        }
		        else if ((c | 0x20) === this.currentSequence[this.sequenceIndex]) {
		            this.sequenceIndex += 1;
		        }
		        else if (c === CharCodes.Gt) {
		            this.cbs.oncomment(this.sectionStart, this.index, 0);
		            this.state = State.Text;
		            this.sectionStart = this.index + 1;
		        }
		        else {
		            this.state = State.InSpecialComment;
		        }
		    }
		    stateInDeclaration(c) {
		        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
		            this.cbs.ondeclaration(this.sectionStart, this.index);
		            this.state = State.Text;
		            this.sectionStart = this.index + 1;
		        }
		    }
		    /**
		     * XML processing instructions (`<?...?>`).
		     *
		     * In HTML mode `<?` is routed to `InSpecialComment` instead, so this
		     * state is only reachable in XML mode.
		     * @param c Current character code point.
		     */
		    stateInProcessingInstruction(c) {
		        if (c === CharCodes.Questionmark) {
		            // Remember that we just consumed `?`, so the next `>` closes the PI.
		            this.sequenceIndex = 1;
		        }
		        else if (c === CharCodes.Gt && this.sequenceIndex === 1) {
		            this.cbs.onprocessinginstruction(this.sectionStart, this.index - 1);
		            this.sequenceIndex = 0;
		            this.state = State.Text;
		            this.sectionStart = this.index + 1;
		        }
		        else {
		            // Keep scanning for the next `?`, which can start a closing `?>`.
		            this.sequenceIndex = Number(this.fastForwardTo(CharCodes.Questionmark));
		        }
		    }
		    stateBeforeComment(c) {
		        if (c === CharCodes.Dash) {
		            this.state = State.InCommentLike;
		            this.currentSequence = Sequences.CommentEnd;
		            this.sequenceIndex = 0;
		            this.sectionStart = this.index + 1;
		        }
		        else if (this.xmlMode) {
		            this.state = State.InDeclaration;
		        }
		        else if (c === CharCodes.Gt) {
		            this.cbs.oncomment(this.sectionStart, this.index, 0);
		            this.state = State.Text;
		            this.sectionStart = this.index + 1;
		        }
		        else {
		            this.state = State.InSpecialComment;
		        }
		    }
		    stateInSpecialComment(c) {
		        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
		            this.cbs.oncomment(this.sectionStart, this.index, 0);
		            this.state = State.Text;
		            this.sectionStart = this.index + 1;
		        }
		    }
		    startEntity() {
		        this.baseState = this.state;
		        this.state = State.InEntity;
		        this.entityStart = this.index;
		        this.entityDecoder.startEntity(this.xmlMode
		            ? DecodingMode.Strict
		            : this.baseState === State.Text ||
		                this.baseState === State.InSpecialTag
		                ? DecodingMode.Legacy
		                : DecodingMode.Attribute);
		    }
		    stateInEntity() {
		        const indexInBuffer = this.index - this.offset;
		        const length = this.entityDecoder.write(this.buffer, indexInBuffer);
		        // If `length` is positive, we are done with the entity.
		        if (length >= 0) {
		            this.state = this.baseState;
		            if (length === 0) {
		                this.index -= 1;
		            }
		        }
		        else {
		            if (indexInBuffer < this.buffer.length &&
		                this.buffer.charCodeAt(indexInBuffer) === CharCodes.Amp) {
		                this.state = this.baseState;
		                this.index -= 1;
		                return;
		            }
		            // Mark buffer as consumed.
		            this.index = this.offset + this.buffer.length - 1;
		        }
		    }
		    /**
		     * Remove data that has already been consumed from the buffer.
		     */
		    cleanup() {
		        // If we are inside of text or attributes, emit what we already have.
		        if (this.running && this.sectionStart !== this.index) {
		            if (this.state === State.Text ||
		                this.state === State.InPlainText ||
		                (this.state === State.InSpecialTag && this.sequenceIndex === 0)) {
		                this.cbs.ontext(this.sectionStart, this.index);
		                this.sectionStart = this.index;
		            }
		            else if (this.state === State.InAttributeValueDq ||
		                this.state === State.InAttributeValueSq ||
		                this.state === State.InAttributeValueNq) {
		                this.cbs.onattribdata(this.sectionStart, this.index);
		                this.sectionStart = this.index;
		            }
		        }
		    }
		    shouldContinue() {
		        return this.index < this.buffer.length + this.offset && this.running;
		    }
		    /**
		     * Iterates through the buffer, calling the function corresponding to the current state.
		     *
		     * States that are more likely to be hit are higher up, as a performance improvement.
		     */
		    parse() {
		        while (this.shouldContinue()) {
		            const c = this.buffer.charCodeAt(this.index - this.offset);
		            switch (this.state) {
		                case State.Text: {
		                    this.stateText(c);
		                    break;
		                }
		                case State.InPlainText: {
		                    // Skip to end of buffer; cleanup() emits the text.
		                    this.index = this.buffer.length + this.offset - 1;
		                    break;
		                }
		                case State.SpecialStartSequence: {
		                    this.stateSpecialStartSequence(c);
		                    break;
		                }
		                case State.InSpecialTag: {
		                    this.stateInSpecialTag(c);
		                    break;
		                }
		                case State.CDATASequence: {
		                    this.stateCDATASequence(c);
		                    break;
		                }
		                case State.DeclarationSequence: {
		                    this.stateDeclarationSequence(c);
		                    break;
		                }
		                case State.InAttributeValueDq: {
		                    this.stateInAttributeValueDoubleQuotes(c);
		                    break;
		                }
		                case State.InAttributeName: {
		                    this.stateInAttributeName(c);
		                    break;
		                }
		                case State.InCommentLike: {
		                    this.stateInCommentLike(c);
		                    break;
		                }
		                case State.InSpecialComment: {
		                    this.stateInSpecialComment(c);
		                    break;
		                }
		                case State.BeforeAttributeName: {
		                    this.stateBeforeAttributeName(c);
		                    break;
		                }
		                case State.InTagName: {
		                    this.stateInTagName(c);
		                    break;
		                }
		                case State.InClosingTagName: {
		                    this.stateInClosingTagName(c);
		                    break;
		                }
		                case State.BeforeTagName: {
		                    this.stateBeforeTagName(c);
		                    break;
		                }
		                case State.AfterAttributeName: {
		                    this.stateAfterAttributeName(c);
		                    break;
		                }
		                case State.InAttributeValueSq: {
		                    this.stateInAttributeValueSingleQuotes(c);
		                    break;
		                }
		                case State.BeforeAttributeValue: {
		                    this.stateBeforeAttributeValue(c);
		                    break;
		                }
		                case State.BeforeClosingTagName: {
		                    this.stateBeforeClosingTagName(c);
		                    break;
		                }
		                case State.AfterClosingTagName: {
		                    this.stateAfterClosingTagName(c);
		                    break;
		                }
		                case State.InAttributeValueNq: {
		                    this.stateInAttributeValueNoQuotes(c);
		                    break;
		                }
		                case State.InSelfClosingTag: {
		                    this.stateInSelfClosingTag(c);
		                    break;
		                }
		                case State.InDeclaration: {
		                    this.stateInDeclaration(c);
		                    break;
		                }
		                case State.BeforeDeclaration: {
		                    this.stateBeforeDeclaration(c);
		                    break;
		                }
		                case State.BeforeComment: {
		                    this.stateBeforeComment(c);
		                    break;
		                }
		                case State.InProcessingInstruction: {
		                    this.stateInProcessingInstruction(c);
		                    break;
		                }
		                case State.InEntity: {
		                    this.stateInEntity();
		                    break;
		                }
		            }
		            this.index++;
		        }
		        this.cleanup();
		    }
		    finish() {
		        if (this.state === State.InEntity) {
		            this.entityDecoder.end();
		            this.state = this.baseState;
		        }
		        this.handleTrailingData();
		        this.cbs.onend();
		    }
		    handleTrailingCommentLikeData(endIndex) {
		        if (this.state !== State.InCommentLike) {
		            return false;
		        }
		        if (this.currentSequence === Sequences.CdataEnd) {
		            if (this.xmlMode) {
		                if (this.sectionStart < endIndex) {
		                    this.cbs.oncdata(this.sectionStart, endIndex, 0);
		                }
		            }
		            else {
		                /* In HTML mode, unclosed CDATA is a bogus comment. */
		                const cdataStart = this.sectionStart - Sequences.Cdata.length - 1;
		                this.cbs.oncomment(cdataStart, endIndex, 0);
		            }
		        }
		        else {
		            const offset = this.xmlMode
		                ? 0
		                : Math.min(this.sequenceIndex, Sequences.CommentEnd.length - 1);
		            this.cbs.oncomment(this.sectionStart, endIndex, offset);
		        }
		        return true;
		    }
		    handleTrailingMarkupDeclaration(endIndex) {
		        if (this.xmlMode) {
		            switch (this.state) {
		                case State.InSpecialComment:
		                case State.BeforeComment:
		                case State.CDATASequence:
		                case State.DeclarationSequence:
		                case State.InDeclaration: {
		                    this.cbs.ontext(this.sectionStart, endIndex);
		                    return true;
		                }
		                default: {
		                    return false;
		                }
		            }
		        }
		        switch (this.state) {
		            case State.BeforeDeclaration:
		            case State.InSpecialComment:
		            case State.BeforeComment:
		            case State.CDATASequence: {
		                this.cbs.oncomment(this.sectionStart, endIndex, 0);
		                return true;
		            }
		            case State.DeclarationSequence: {
		                if (this.sequenceIndex !== Sequences.Doctype.length) {
		                    this.cbs.oncomment(this.sectionStart, endIndex, 0);
		                }
		                return true;
		            }
		            case State.InDeclaration: {
		                return true;
		            }
		            default: {
		                return false;
		            }
		        }
		    }
		    /** Handle any trailing data. */
		    handleTrailingData() {
		        const endIndex = this.buffer.length + this.offset;
		        if (this.handleTrailingCommentLikeData(endIndex) ||
		            this.handleTrailingMarkupDeclaration(endIndex)) {
		            return;
		        }
		        // If there is no remaining data, we are done.
		        if (this.sectionStart >= endIndex) {
		            return;
		        }
		        switch (this.state) {
		            case State.InTagName:
		            case State.BeforeAttributeName:
		            case State.BeforeAttributeValue:
		            case State.AfterAttributeName:
		            case State.InAttributeName:
		            case State.InAttributeValueSq:
		            case State.InAttributeValueDq:
		            case State.InAttributeValueNq:
		            case State.InClosingTagName: {
		                /*
		                 * If we are currently in an opening or closing tag, us not calling the
		                 * respective callback signals that the tag should be ignored.
		                 */
		                break;
		            }
		            default: {
		                this.cbs.ontext(this.sectionStart, endIndex);
		            }
		        }
		    }
		    emitCodePoint(cp, consumed) {
		        if (this.baseState !== State.Text &&
		            this.baseState !== State.InSpecialTag) {
		            if (this.sectionStart < this.entityStart) {
		                this.cbs.onattribdata(this.sectionStart, this.entityStart);
		            }
		            this.sectionStart = this.entityStart + consumed;
		            this.index = this.sectionStart - 1;
		            this.cbs.onattribentity(cp);
		        }
		        else {
		            if (this.sectionStart < this.entityStart) {
		                this.cbs.ontext(this.sectionStart, this.entityStart);
		            }
		            this.sectionStart = this.entityStart + consumed;
		            this.index = this.sectionStart - 1;
		            this.cbs.ontextentity(cp, this.sectionStart);
		        }
		    }
		}

		const { fromCodePoint } = String;
		const formTags = new Set([
		    "input",
		    "option",
		    "optgroup",
		    "select",
		    "button",
		    "datalist",
		    "textarea",
		]);
		const pTag = new Set(["p"]);
		const headingTags = new Set(["h1", "h2", "h3", "h4", "h5", "h6", "p"]);
		const tableSectionTags = new Set(["thead", "tbody"]);
		const ddtTags = new Set(["dd", "dt"]);
		const rtpTags = new Set(["rt", "rp"]);
		const openImpliesClose = new Map([
		    ["tr", new Set(["tr", "th", "td"])],
		    ["th", new Set(["th"])],
		    ["td", new Set(["thead", "th", "td"])],
		    ["body", new Set(["head", "link", "script"])],
		    ["a", new Set(["a"])],
		    ["li", new Set(["li"])],
		    ["p", pTag],
		    ["h1", headingTags],
		    ["h2", headingTags],
		    ["h3", headingTags],
		    ["h4", headingTags],
		    ["h5", headingTags],
		    ["h6", headingTags],
		    ["select", formTags],
		    ["input", formTags],
		    ["output", formTags],
		    ["button", formTags],
		    ["datalist", formTags],
		    ["textarea", formTags],
		    ["option", new Set(["option"])],
		    ["optgroup", new Set(["optgroup", "option"])],
		    ["dd", ddtTags],
		    ["dt", ddtTags],
		    ["address", pTag],
		    ["article", pTag],
		    ["aside", pTag],
		    ["blockquote", pTag],
		    ["details", pTag],
		    ["div", pTag],
		    ["dl", pTag],
		    ["fieldset", pTag],
		    ["figcaption", pTag],
		    ["figure", pTag],
		    ["footer", pTag],
		    ["form", pTag],
		    ["header", pTag],
		    ["hr", pTag],
		    ["main", pTag],
		    ["nav", pTag],
		    ["ol", pTag],
		    ["pre", pTag],
		    ["section", pTag],
		    ["table", pTag],
		    ["ul", pTag],
		    ["rt", rtpTags],
		    ["rp", rtpTags],
		    ["tbody", tableSectionTags],
		    ["tfoot", tableSectionTags],
		]);
		const DOCUMENT_TYPE = "doctype";
		const voidElements = new Set([
		    "area",
		    "base",
		    "basefont",
		    "br",
		    "col",
		    "command",
		    "embed",
		    "frame",
		    "hr",
		    "img",
		    "input",
		    "isindex",
		    "keygen",
		    "link",
		    "meta",
		    "param",
		    "source",
		    "track",
		    "wbr",
		]);
		const foreignContextElements = new Set(["math", "svg"]);
		/**
		 * Elements that can be used to integrate HTML content within foreign namespaces (e.g., SVG or MathML).
		 *
		 * Entries must use the SVG-adjusted casing (e.g. "foreignObject" not
		 * "foreignobject") since they are compared against adjusted tag names.
		 */
		const htmlIntegrationElements = new Set([
		    "mi",
		    "mo",
		    "mn",
		    "ms",
		    "mtext",
		    "annotation-xml",
		    "foreignObject",
		    "desc",
		    "title",
		]);
		const svgTagNameAdjustments = new Map([
		    ["altglyph", "altGlyph"],
		    ["altglyphdef", "altGlyphDef"],
		    ["altglyphitem", "altGlyphItem"],
		    ["animatecolor", "animateColor"],
		    ["animatemotion", "animateMotion"],
		    ["animatetransform", "animateTransform"],
		    ["clippath", "clipPath"],
		    ["feblend", "feBlend"],
		    ["fecolormatrix", "feColorMatrix"],
		    ["fecomponenttransfer", "feComponentTransfer"],
		    ["fecomposite", "feComposite"],
		    ["feconvolvematrix", "feConvolveMatrix"],
		    ["fediffuselighting", "feDiffuseLighting"],
		    ["fedisplacementmap", "feDisplacementMap"],
		    ["fedistantlight", "feDistantLight"],
		    ["fedropshadow", "feDropShadow"],
		    ["feflood", "feFlood"],
		    ["fefunca", "feFuncA"],
		    ["fefuncb", "feFuncB"],
		    ["fefuncg", "feFuncG"],
		    ["fefuncr", "feFuncR"],
		    ["fegaussianblur", "feGaussianBlur"],
		    ["feimage", "feImage"],
		    ["femerge", "feMerge"],
		    ["femergenode", "feMergeNode"],
		    ["femorphology", "feMorphology"],
		    ["feoffset", "feOffset"],
		    ["fepointlight", "fePointLight"],
		    ["fespecularlighting", "feSpecularLighting"],
		    ["fespotlight", "feSpotLight"],
		    ["fetile", "feTile"],
		    ["feturbulence", "feTurbulence"],
		    ["foreignobject", "foreignObject"],
		    ["glyphref", "glyphRef"],
		    ["lineargradient", "linearGradient"],
		    ["radialgradient", "radialGradient"],
		    ["textpath", "textPath"],
		]);
		var ForeignContext;
		(function (ForeignContext) {
		    ForeignContext[ForeignContext["None"] = 0] = "None";
		    ForeignContext[ForeignContext["Svg"] = 1] = "Svg";
		    ForeignContext[ForeignContext["MathML"] = 2] = "MathML";
		})(ForeignContext || (ForeignContext = {}));
		const reNameEnd = /\s|\//;
		/**
		 * Incremental parser implementation.
		 */
		class Parser {
		    options;
		    /** The start index of the last event. */
		    startIndex = 0;
		    /** The end index of the last event. */
		    endIndex = 0;
		    /**
		     * Store the start index of the current open tag,
		     * so we can update the start index for attributes.
		     */
		    openTagStart = 0;
		    tagname = "";
		    attribname = "";
		    attribvalue = "";
		    attribs = null;
		    stack = [];
		    foreignContext;
		    cbs;
		    lowerCaseTagNames;
		    lowerCaseAttributeNames;
		    recognizeSelfClosing;
		    /** We are parsing HTML. Inverse of the `xmlMode` option. */
		    htmlMode;
		    tokenizer;
		    buffers = [];
		    bufferOffset = 0;
		    /** The index of the last written buffer. Used when resuming after a `pause()`. */
		    writeIndex = 0;
		    /** Indicates whether the parser has finished running / `.end` has been called. */
		    ended = false;
		    constructor(cbs, options = {}) {
		        this.options = options;
		        this.cbs = cbs ?? {};
		        this.htmlMode = !this.options.xmlMode;
		        this.lowerCaseTagNames = options.lowerCaseTags ?? this.htmlMode;
		        this.lowerCaseAttributeNames =
		            options.lowerCaseAttributeNames ?? this.htmlMode;
		        this.recognizeSelfClosing =
		            options.recognizeSelfClosing ?? !this.htmlMode;
		        this.tokenizer = new (options.Tokenizer ?? Tokenizer)(this.options, this);
		        this.foreignContext = [ForeignContext.None];
		        this.cbs.onparserinit?.(this);
		    }
		    // Tokenizer event handlers
		    /**
		     * @param start Start index for the current parser event.
		     * @param endIndex End index for the current parser event.
		     * @internal
		     */
		    ontext(start, endIndex) {
		        const data = this.getSlice(start, endIndex);
		        this.endIndex = endIndex - 1;
		        this.cbs.ontext?.(data);
		        this.startIndex = endIndex;
		    }
		    /**
		     * @param cp Current Unicode code point.
		     * @param endIndex End index for the current parser event.
		     * @internal
		     */
		    ontextentity(cp, endIndex) {
		        this.endIndex = endIndex - 1;
		        this.cbs.ontext?.(fromCodePoint(cp));
		        this.startIndex = endIndex;
		    }
		    /** @internal */
		    isInForeignContext() {
		        return this.foreignContext[0] !== ForeignContext.None;
		    }
		    /**
		     * Checks if the current tag is a void element. Override this if you want
		     * to specify your own additional void elements.
		     * @param name Name of the pseudo selector.
		     */
		    isVoidElement(name) {
		        return this.htmlMode && voidElements.has(name);
		    }
		    /**
		     * Read a tag name from the buffer.
		     *
		     * When `lowerCaseTagNames` is enabled (the default in HTML mode), the name
		     * is lowercased and may be adjusted for SVG casing or the `image` → `img`
		     * alias.
		     * @param start Start index of the tag name in the buffer.
		     * @param endIndex End index of the tag name in the buffer.
		     */
		    readTagName(start, endIndex) {
		        const name = this.lowerCaseTagNames
		            ? this.getSlice(start, endIndex).toLowerCase()
		            : this.getSlice(start, endIndex);
		        if (!(this.lowerCaseTagNames && this.htmlMode)) {
		            return name;
		        }
		        if (this.foreignContext[0] === ForeignContext.Svg) {
		            return svgTagNameAdjustments.get(name) ?? name;
		        }
		        /*
		         * Closing tags for SVG elements inside HTML integration points
		         * (e.g. </foreignObject> while inside its own content) need case
		         * adjustment so the name matches what was pushed to the stack.
		         * `foreignContext.length > 1` means a foreign ancestor exists —
		         * the base [None] entry plus at least one pushed context.
		         */
		        if (this.foreignContext.length > 1) {
		            const adjusted = svgTagNameAdjustments.get(name);
		            if (adjusted !== undefined && this.stack.includes(adjusted)) {
		                return adjusted;
		            }
		        }
		        if (!this.isInForeignContext()) {
		            return name === "image" ? "img" : name;
		        }
		        return name;
		    }
		    /**
		     * @param start Start index for the current parser event.
		     * @param endIndex End index for the current parser event.
		     * @internal
		     */
		    onopentagname(start, endIndex) {
		        this.endIndex = endIndex;
		        this.emitOpenTag(this.readTagName(start, endIndex));
		    }
		    emitOpenTag(name) {
		        this.openTagStart = this.startIndex;
		        this.tagname = name;
		        /*
		         * The spec ignores a second <form> when one is already open.
		         * Setting tagname to "" suppresses all downstream effects: attribs
		         * stays null so endOpenTag is a no-op, and closeCurrentTag can't
		         * match "" on the stack.
		         */
		        if (this.htmlMode && name === "form" && this.stack.includes("form")) {
		            this.tagname = "";
		            return;
		        }
		        const impliesClose = this.htmlMode && openImpliesClose.get(name);
		        if (impliesClose) {
		            while (this.stack.length > 0 && impliesClose.has(this.stack[0])) {
		                this.popElement(true);
		            }
		        }
		        if (!this.isVoidElement(name)) {
		            this.stack.unshift(name);
		            if (this.htmlMode) {
		                if (name === "svg") {
		                    this.foreignContext.unshift(ForeignContext.Svg);
		                }
		                else if (name === "math") {
		                    this.foreignContext.unshift(ForeignContext.MathML);
		                }
		                else if (htmlIntegrationElements.has(name)) {
		                    this.foreignContext.unshift(ForeignContext.None);
		                }
		            }
		        }
		        this.cbs.onopentagname?.(name);
		        if (this.cbs.onopentag)
		            this.attribs = {};
		    }
		    endOpenTag(isImplied) {
		        this.startIndex = this.openTagStart;
		        if (this.attribs) {
		            this.cbs.onopentag?.(this.tagname, this.attribs, isImplied);
		            this.attribs = null;
		        }
		        if (this.cbs.onclosetag && this.isVoidElement(this.tagname)) {
		            this.cbs.onclosetag(this.tagname, true);
		        }
		        this.tagname = "";
		    }
		    /**
		     * @param endIndex End index for the current parser event.
		     * @internal
		     */
		    onopentagend(endIndex) {
		        this.endIndex = endIndex;
		        this.endOpenTag(false);
		        // Set `startIndex` for next node
		        this.startIndex = endIndex + 1;
		    }
		    /**
		     * @param start Start index for the current parser event.
		     * @param endIndex End index for the current parser event.
		     * @internal
		     */
		    onclosetag(start, endIndex) {
		        this.endIndex = endIndex;
		        const name = this.readTagName(start, endIndex);
		        if (!this.isVoidElement(name)) {
		            const pos = this.stack.indexOf(name);
		            if (pos !== -1) {
		                for (let index = 0; index < pos; index++) {
		                    this.popElement(true);
		                }
		                this.popElement(false);
		            }
		            else if (this.htmlMode && name === "p") {
		                // Implicit open before close
		                this.emitOpenTag("p");
		                this.closeCurrentTag(true);
		            }
		        }
		        else if (this.htmlMode && name === "br") {
		            // We can't use `emitOpenTag` for implicit open, as `br` would be implicitly closed.
		            this.cbs.onopentagname?.("br");
		            this.cbs.onopentag?.("br", {}, true);
		            this.cbs.onclosetag?.("br", false);
		        }
		        // Set `startIndex` for next node
		        this.startIndex = endIndex + 1;
		    }
		    /**
		     * @param endIndex End index for the current parser event.
		     * @internal
		     */
		    onselfclosingtag(endIndex) {
		        this.endIndex = endIndex;
		        if (this.recognizeSelfClosing || this.isInForeignContext()) {
		            this.closeCurrentTag(false);
		            // Set `startIndex` for next node
		            this.startIndex = endIndex + 1;
		        }
		        else {
		            // Ignore the fact that the tag is self-closing.
		            this.onopentagend(endIndex);
		        }
		    }
		    /**
		     * Pop the top element off the stack, emit a close event, and maintain
		     * the foreign context stack.
		     * @param implied Whether this close is implied (not from an explicit end tag).
		     */
		    popElement(implied) {
		        // biome-ignore lint/style/noNonNullAssertion: The element is guaranteed to exist.
		        const element = this.stack.shift();
		        if (this.htmlMode &&
		            (foreignContextElements.has(element) ||
		                htmlIntegrationElements.has(element))) {
		            this.foreignContext.shift();
		        }
		        this.cbs.onclosetag?.(element, implied);
		    }
		    closeCurrentTag(isOpenImplied) {
		        const name = this.tagname;
		        this.endOpenTag(isOpenImplied);
		        // Self-closing tags will be on the top of the stack
		        if (this.stack[0] === name) {
		            this.popElement(!isOpenImplied);
		        }
		    }
		    /**
		     * @param start Start index for the current parser event.
		     * @param endIndex End index for the current parser event.
		     * @internal
		     */
		    onattribname(start, endIndex) {
		        this.startIndex = start;
		        const name = this.getSlice(start, endIndex);
		        this.attribname = this.lowerCaseAttributeNames
		            ? name.toLowerCase()
		            : name;
		    }
		    /**
		     * @param start Start index for the current parser event.
		     * @param endIndex End index for the current parser event.
		     * @internal
		     */
		    onattribdata(start, endIndex) {
		        this.attribvalue += this.getSlice(start, endIndex);
		    }
		    /**
		     * @param cp Current Unicode code point.
		     * @internal
		     */
		    onattribentity(cp) {
		        this.attribvalue += fromCodePoint(cp);
		    }
		    /**
		     * @param quote Quote type used for the current attribute.
		     * @param endIndex End index for the current parser event.
		     * @internal
		     */
		    onattribend(quote, endIndex) {
		        this.endIndex = endIndex;
		        this.cbs.onattribute?.(this.attribname, this.attribvalue, quote === QuoteType.Double
		            ? '"'
		            : quote === QuoteType.Single
		                ? "'"
		                : quote === QuoteType.NoValue
		                    ? undefined
		                    : null);
		        if (this.attribs && !Object.hasOwn(this.attribs, this.attribname)) {
		            this.attribs[this.attribname] = this.attribvalue;
		        }
		        this.attribvalue = "";
		    }
		    getInstructionName(value) {
		        const index = value.search(reNameEnd);
		        let name = index < 0 ? value : value.substr(0, index);
		        if (this.lowerCaseTagNames) {
		            name = name.toLowerCase();
		        }
		        return name;
		    }
		    /**
		     * @param start Start index for the current parser event.
		     * @param endIndex End index for the current parser event.
		     * @internal
		     */
		    ondeclaration(start, endIndex) {
		        this.endIndex = endIndex;
		        const value = this.getSlice(start, endIndex);
		        if (this.cbs.onprocessinginstruction) {
		            /*
		             * In HTML mode, ondeclaration is only reached for DOCTYPE
		             * (the tokenizer routes everything else to bogus comments).
		             */
		            const name = this.htmlMode
		                ? this.lowerCaseTagNames
		                    ? DOCUMENT_TYPE
		                    : value.slice(0, DOCUMENT_TYPE.length)
		                : this.getInstructionName(value);
		            this.cbs.onprocessinginstruction(`!${name}`, `!${value}`);
		        }
		        // Set `startIndex` for next node
		        this.startIndex = endIndex + 1;
		    }
		    /**
		     * @param start Start index for the current parser event.
		     * @param endIndex End index for the current parser event.
		     * @internal
		     */
		    onprocessinginstruction(start, endIndex) {
		        this.endIndex = endIndex;
		        const value = this.getSlice(start, endIndex);
		        if (this.cbs.onprocessinginstruction) {
		            const name = this.getInstructionName(value);
		            this.cbs.onprocessinginstruction(`?${name}`, `?${value}`);
		        }
		        // Set `startIndex` for next node
		        this.startIndex = endIndex + 1;
		    }
		    /**
		     * @param start Start index for the current parser event.
		     * @param endIndex End index for the current parser event.
		     * @param offset Offset applied when computing parser indices.
		     * @internal
		     */
		    oncomment(start, endIndex, offset) {
		        this.endIndex = endIndex;
		        this.cbs.oncomment?.(this.getSlice(start, endIndex - offset));
		        this.cbs.oncommentend?.();
		        // Set `startIndex` for next node
		        this.startIndex = endIndex + 1;
		    }
		    /**
		     * @param start Start index for the current parser event.
		     * @param endIndex End index for the current parser event.
		     * @param offset Offset applied when computing parser indices.
		     * @internal
		     */
		    oncdata(start, endIndex, offset) {
		        this.endIndex = endIndex;
		        const value = this.getSlice(start, endIndex - offset);
		        if (!this.htmlMode || this.options.recognizeCDATA) {
		            this.cbs.oncdatastart?.();
		            this.cbs.ontext?.(value);
		            this.cbs.oncdataend?.();
		        }
		        else if (this.isInForeignContext()) {
		            this.cbs.ontext?.(value);
		        }
		        else {
		            this.cbs.oncomment?.(`[CDATA[${value}]]`);
		            this.cbs.oncommentend?.();
		        }
		        // Set `startIndex` for next node
		        this.startIndex = endIndex + 1;
		    }
		    /** @internal */
		    onend() {
		        if (this.cbs.onclosetag) {
		            // Set the end index for all remaining tags
		            this.endIndex = this.startIndex;
		            for (let index = 0; index < this.stack.length; index++) {
		                this.cbs.onclosetag(this.stack[index], true);
		            }
		        }
		        this.cbs.onend?.();
		    }
		    /**
		     * Resets the parser to a blank state, ready to parse a new HTML document
		     */
		    reset() {
		        this.cbs.onreset?.();
		        this.tokenizer.reset();
		        this.tagname = "";
		        this.attribname = "";
		        this.attribvalue = "";
		        this.attribs = null;
		        this.stack.length = 0;
		        this.startIndex = 0;
		        this.endIndex = 0;
		        this.cbs.onparserinit?.(this);
		        this.buffers.length = 0;
		        this.foreignContext.length = 0;
		        this.foreignContext.unshift(ForeignContext.None);
		        this.bufferOffset = 0;
		        this.writeIndex = 0;
		        this.ended = false;
		    }
		    /**
		     * Resets the parser, then parses a complete document and
		     * pushes it to the handler.
		     * @param data Document to parse.
		     */
		    parseComplete(data) {
		        this.reset();
		        this.end(data);
		    }
		    getSlice(start, end) {
		        if (start === end) {
		            return "";
		        }
		        while (start - this.bufferOffset >= this.buffers[0].length) {
		            this.shiftBuffer();
		        }
		        let slice = this.buffers[0].slice(start - this.bufferOffset, end - this.bufferOffset);
		        while (end - this.bufferOffset > this.buffers[0].length) {
		            this.shiftBuffer();
		            slice += this.buffers[0].slice(0, end - this.bufferOffset);
		        }
		        return slice;
		    }
		    shiftBuffer() {
		        this.bufferOffset += this.buffers[0].length;
		        this.writeIndex--;
		        this.buffers.shift();
		    }
		    /**
		     * Parses a chunk of data and calls the corresponding callbacks.
		     * @param chunk Chunk to parse.
		     */
		    write(chunk) {
		        if (this.ended) {
		            this.cbs.onerror?.(new Error(".write() after done!"));
		            return;
		        }
		        this.buffers.push(chunk);
		        if (this.tokenizer.running) {
		            this.tokenizer.write(chunk);
		            this.writeIndex++;
		        }
		    }
		    /**
		     * Parses the end of the buffer and clears the stack, calls onend.
		     * @param chunk Optional final chunk to parse.
		     */
		    end(chunk) {
		        if (this.ended) {
		            this.cbs.onerror?.(new Error(".end() after done!"));
		            return;
		        }
		        if (chunk)
		            this.write(chunk);
		        this.ended = true;
		        this.tokenizer.end();
		    }
		    /**
		     * Pauses parsing. The parser won't emit events until `resume` is called.
		     */
		    pause() {
		        this.tokenizer.pause();
		    }
		    /**
		     * Resumes parsing after `pause` was called.
		     */
		    resume() {
		        this.tokenizer.resume();
		        while (this.tokenizer.running &&
		            this.writeIndex < this.buffers.length) {
		            this.tokenizer.write(this.buffers[this.writeIndex++]);
		        }
		        if (this.ended)
		            this.tokenizer.end();
		    }
		}

		/**
		 * Sets root parent to null.
		 *
		 * @param nodes - Nodes.
		 * @returns - Nodes.
		 */
		function unsetRootParent(nodes) {
		    var index = 0;
		    var nodesLength = nodes.length;
		    for (; index < nodesLength; index++) {
		        var node = nodes[index];
		        node.parent = null;
		    }
		    return nodes;
		}

		/**
		 * Parses HTML string to DOM nodes in Node.js.
		 *
		 * This is the same method as `require('htmlparser2').parseDOM`
		 *
		 * @see https://github.com/fb55/htmlparser2/blob/v9.0.0/src/index.ts#L44-L46
		 * @see https://github.com/fb55/domhandler/tree/v5.0.3#readme
		 *
		 * @param html - HTML markup.
		 * @param options - Parser options.
		 * @returns - DOM nodes.
		 */
		function HTMLDOMParser(html, options) {
		    if (typeof html !== 'string') {
		        throw new TypeError('First argument must be a string.');
		    }
		    if (!html) {
		        return [];
		    }
		    var handler = new DomHandler(undefined, options);
		    new Parser(handler, options).end(html);
		    return unsetRootParent(handler.dom);
		}

		lib$1.default = HTMLDOMParser;
		
		return lib$1;
	}

	var attributesToProps = {};

	var lib = {};

	var possibleStandardNamesOptimized = {};

	var hasRequiredPossibleStandardNamesOptimized;

	function requirePossibleStandardNamesOptimized () {
		if (hasRequiredPossibleStandardNamesOptimized) return possibleStandardNamesOptimized;
		hasRequiredPossibleStandardNamesOptimized = 1;
		// An attribute in which the DOM/SVG standard name is the same as the React prop name (e.g., 'accept').
		var SAME = 0;
		possibleStandardNamesOptimized.SAME = SAME;

		// An attribute in which the React prop name is the camelcased version of the DOM/SVG standard name (e.g., 'acceptCharset').
		var CAMELCASE = 1;
		possibleStandardNamesOptimized.CAMELCASE = CAMELCASE;

		possibleStandardNamesOptimized.possibleStandardNames = {
		  accept: 0,
		  acceptCharset: 1,
		  'accept-charset': 'acceptCharset',
		  accessKey: 1,
		  action: 0,
		  allowFullScreen: 1,
		  alt: 0,
		  as: 0,
		  async: 0,
		  autoCapitalize: 1,
		  autoComplete: 1,
		  autoCorrect: 1,
		  autoFocus: 1,
		  autoPlay: 1,
		  autoSave: 1,
		  capture: 0,
		  cellPadding: 1,
		  cellSpacing: 1,
		  challenge: 0,
		  charSet: 1,
		  checked: 0,
		  children: 0,
		  cite: 0,
		  class: 'className',
		  classID: 1,
		  className: 1,
		  cols: 0,
		  colSpan: 1,
		  content: 0,
		  contentEditable: 1,
		  contextMenu: 1,
		  controls: 0,
		  controlsList: 1,
		  coords: 0,
		  crossOrigin: 1,
		  dangerouslySetInnerHTML: 1,
		  data: 0,
		  dateTime: 1,
		  default: 0,
		  defaultChecked: 1,
		  defaultValue: 1,
		  defer: 0,
		  dir: 0,
		  disabled: 0,
		  disablePictureInPicture: 1,
		  disableRemotePlayback: 1,
		  download: 0,
		  draggable: 0,
		  encType: 1,
		  enterKeyHint: 1,
		  for: 'htmlFor',
		  form: 0,
		  formMethod: 1,
		  formAction: 1,
		  formEncType: 1,
		  formNoValidate: 1,
		  formTarget: 1,
		  frameBorder: 1,
		  headers: 0,
		  height: 0,
		  hidden: 0,
		  high: 0,
		  href: 0,
		  hrefLang: 1,
		  htmlFor: 1,
		  httpEquiv: 1,
		  'http-equiv': 'httpEquiv',
		  icon: 0,
		  id: 0,
		  innerHTML: 1,
		  inputMode: 1,
		  integrity: 0,
		  is: 0,
		  itemID: 1,
		  itemProp: 1,
		  itemRef: 1,
		  itemScope: 1,
		  itemType: 1,
		  keyParams: 1,
		  keyType: 1,
		  kind: 0,
		  label: 0,
		  lang: 0,
		  list: 0,
		  loop: 0,
		  low: 0,
		  manifest: 0,
		  marginWidth: 1,
		  marginHeight: 1,
		  max: 0,
		  maxLength: 1,
		  media: 0,
		  mediaGroup: 1,
		  method: 0,
		  min: 0,
		  minLength: 1,
		  multiple: 0,
		  muted: 0,
		  name: 0,
		  noModule: 1,
		  nonce: 0,
		  noValidate: 1,
		  open: 0,
		  optimum: 0,
		  pattern: 0,
		  placeholder: 0,
		  playsInline: 1,
		  poster: 0,
		  preload: 0,
		  profile: 0,
		  radioGroup: 1,
		  readOnly: 1,
		  referrerPolicy: 1,
		  rel: 0,
		  required: 0,
		  reversed: 0,
		  role: 0,
		  rows: 0,
		  rowSpan: 1,
		  sandbox: 0,
		  scope: 0,
		  scoped: 0,
		  scrolling: 0,
		  seamless: 0,
		  selected: 0,
		  shape: 0,
		  size: 0,
		  sizes: 0,
		  span: 0,
		  spellCheck: 1,
		  src: 0,
		  srcDoc: 1,
		  srcLang: 1,
		  srcSet: 1,
		  start: 0,
		  step: 0,
		  style: 0,
		  summary: 0,
		  tabIndex: 1,
		  target: 0,
		  title: 0,
		  type: 0,
		  useMap: 1,
		  value: 0,
		  width: 0,
		  wmode: 0,
		  wrap: 0,
		  about: 0,
		  accentHeight: 1,
		  'accent-height': 'accentHeight',
		  accumulate: 0,
		  additive: 0,
		  alignmentBaseline: 1,
		  'alignment-baseline': 'alignmentBaseline',
		  allowReorder: 1,
		  alphabetic: 0,
		  amplitude: 0,
		  arabicForm: 1,
		  'arabic-form': 'arabicForm',
		  ascent: 0,
		  attributeName: 1,
		  attributeType: 1,
		  autoReverse: 1,
		  azimuth: 0,
		  baseFrequency: 1,
		  baselineShift: 1,
		  'baseline-shift': 'baselineShift',
		  baseProfile: 1,
		  bbox: 0,
		  begin: 0,
		  bias: 0,
		  by: 0,
		  calcMode: 1,
		  capHeight: 1,
		  'cap-height': 'capHeight',
		  clip: 0,
		  clipPath: 1,
		  'clip-path': 'clipPath',
		  clipPathUnits: 1,
		  clipRule: 1,
		  'clip-rule': 'clipRule',
		  color: 0,
		  colorInterpolation: 1,
		  'color-interpolation': 'colorInterpolation',
		  colorInterpolationFilters: 1,
		  'color-interpolation-filters': 'colorInterpolationFilters',
		  colorProfile: 1,
		  'color-profile': 'colorProfile',
		  colorRendering: 1,
		  'color-rendering': 'colorRendering',
		  contentScriptType: 1,
		  contentStyleType: 1,
		  cursor: 0,
		  cx: 0,
		  cy: 0,
		  d: 0,
		  datatype: 0,
		  decelerate: 0,
		  descent: 0,
		  diffuseConstant: 1,
		  direction: 0,
		  display: 0,
		  divisor: 0,
		  dominantBaseline: 1,
		  'dominant-baseline': 'dominantBaseline',
		  dur: 0,
		  dx: 0,
		  dy: 0,
		  edgeMode: 1,
		  elevation: 0,
		  enableBackground: 1,
		  'enable-background': 'enableBackground',
		  end: 0,
		  exponent: 0,
		  externalResourcesRequired: 1,
		  fill: 0,
		  fillOpacity: 1,
		  'fill-opacity': 'fillOpacity',
		  fillRule: 1,
		  'fill-rule': 'fillRule',
		  filter: 0,
		  filterRes: 1,
		  filterUnits: 1,
		  floodOpacity: 1,
		  'flood-opacity': 'floodOpacity',
		  floodColor: 1,
		  'flood-color': 'floodColor',
		  focusable: 0,
		  fontFamily: 1,
		  'font-family': 'fontFamily',
		  fontSize: 1,
		  'font-size': 'fontSize',
		  fontSizeAdjust: 1,
		  'font-size-adjust': 'fontSizeAdjust',
		  fontStretch: 1,
		  'font-stretch': 'fontStretch',
		  fontStyle: 1,
		  'font-style': 'fontStyle',
		  fontVariant: 1,
		  'font-variant': 'fontVariant',
		  fontWeight: 1,
		  'font-weight': 'fontWeight',
		  format: 0,
		  from: 0,
		  fx: 0,
		  fy: 0,
		  g1: 0,
		  g2: 0,
		  glyphName: 1,
		  'glyph-name': 'glyphName',
		  glyphOrientationHorizontal: 1,
		  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
		  glyphOrientationVertical: 1,
		  'glyph-orientation-vertical': 'glyphOrientationVertical',
		  glyphRef: 1,
		  gradientTransform: 1,
		  gradientUnits: 1,
		  hanging: 0,
		  horizAdvX: 1,
		  'horiz-adv-x': 'horizAdvX',
		  horizOriginX: 1,
		  'horiz-origin-x': 'horizOriginX',
		  ideographic: 0,
		  imageRendering: 1,
		  'image-rendering': 'imageRendering',
		  in2: 0,
		  in: 0,
		  inlist: 0,
		  intercept: 0,
		  k1: 0,
		  k2: 0,
		  k3: 0,
		  k4: 0,
		  k: 0,
		  kernelMatrix: 1,
		  kernelUnitLength: 1,
		  kerning: 0,
		  keyPoints: 1,
		  keySplines: 1,
		  keyTimes: 1,
		  lengthAdjust: 1,
		  letterSpacing: 1,
		  'letter-spacing': 'letterSpacing',
		  lightingColor: 1,
		  'lighting-color': 'lightingColor',
		  limitingConeAngle: 1,
		  local: 0,
		  markerEnd: 1,
		  'marker-end': 'markerEnd',
		  markerHeight: 1,
		  markerMid: 1,
		  'marker-mid': 'markerMid',
		  markerStart: 1,
		  'marker-start': 'markerStart',
		  markerUnits: 1,
		  markerWidth: 1,
		  mask: 0,
		  maskContentUnits: 1,
		  maskUnits: 1,
		  mathematical: 0,
		  mode: 0,
		  numOctaves: 1,
		  offset: 0,
		  opacity: 0,
		  operator: 0,
		  order: 0,
		  orient: 0,
		  orientation: 0,
		  origin: 0,
		  overflow: 0,
		  overlinePosition: 1,
		  'overline-position': 'overlinePosition',
		  overlineThickness: 1,
		  'overline-thickness': 'overlineThickness',
		  paintOrder: 1,
		  'paint-order': 'paintOrder',
		  panose1: 0,
		  'panose-1': 'panose1',
		  pathLength: 1,
		  patternContentUnits: 1,
		  patternTransform: 1,
		  patternUnits: 1,
		  pointerEvents: 1,
		  'pointer-events': 'pointerEvents',
		  points: 0,
		  pointsAtX: 1,
		  pointsAtY: 1,
		  pointsAtZ: 1,
		  prefix: 0,
		  preserveAlpha: 1,
		  preserveAspectRatio: 1,
		  primitiveUnits: 1,
		  property: 0,
		  r: 0,
		  radius: 0,
		  refX: 1,
		  refY: 1,
		  renderingIntent: 1,
		  'rendering-intent': 'renderingIntent',
		  repeatCount: 1,
		  repeatDur: 1,
		  requiredExtensions: 1,
		  requiredFeatures: 1,
		  resource: 0,
		  restart: 0,
		  result: 0,
		  results: 0,
		  rotate: 0,
		  rx: 0,
		  ry: 0,
		  scale: 0,
		  security: 0,
		  seed: 0,
		  shapeRendering: 1,
		  'shape-rendering': 'shapeRendering',
		  slope: 0,
		  spacing: 0,
		  specularConstant: 1,
		  specularExponent: 1,
		  speed: 0,
		  spreadMethod: 1,
		  startOffset: 1,
		  stdDeviation: 1,
		  stemh: 0,
		  stemv: 0,
		  stitchTiles: 1,
		  stopColor: 1,
		  'stop-color': 'stopColor',
		  stopOpacity: 1,
		  'stop-opacity': 'stopOpacity',
		  strikethroughPosition: 1,
		  'strikethrough-position': 'strikethroughPosition',
		  strikethroughThickness: 1,
		  'strikethrough-thickness': 'strikethroughThickness',
		  string: 0,
		  stroke: 0,
		  strokeDasharray: 1,
		  'stroke-dasharray': 'strokeDasharray',
		  strokeDashoffset: 1,
		  'stroke-dashoffset': 'strokeDashoffset',
		  strokeLinecap: 1,
		  'stroke-linecap': 'strokeLinecap',
		  strokeLinejoin: 1,
		  'stroke-linejoin': 'strokeLinejoin',
		  strokeMiterlimit: 1,
		  'stroke-miterlimit': 'strokeMiterlimit',
		  strokeWidth: 1,
		  'stroke-width': 'strokeWidth',
		  strokeOpacity: 1,
		  'stroke-opacity': 'strokeOpacity',
		  suppressContentEditableWarning: 1,
		  suppressHydrationWarning: 1,
		  surfaceScale: 1,
		  systemLanguage: 1,
		  tableValues: 1,
		  targetX: 1,
		  targetY: 1,
		  textAnchor: 1,
		  'text-anchor': 'textAnchor',
		  textDecoration: 1,
		  'text-decoration': 'textDecoration',
		  textLength: 1,
		  textRendering: 1,
		  'text-rendering': 'textRendering',
		  to: 0,
		  transform: 0,
		  typeof: 0,
		  u1: 0,
		  u2: 0,
		  underlinePosition: 1,
		  'underline-position': 'underlinePosition',
		  underlineThickness: 1,
		  'underline-thickness': 'underlineThickness',
		  unicode: 0,
		  unicodeBidi: 1,
		  'unicode-bidi': 'unicodeBidi',
		  unicodeRange: 1,
		  'unicode-range': 'unicodeRange',
		  unitsPerEm: 1,
		  'units-per-em': 'unitsPerEm',
		  unselectable: 0,
		  vAlphabetic: 1,
		  'v-alphabetic': 'vAlphabetic',
		  values: 0,
		  vectorEffect: 1,
		  'vector-effect': 'vectorEffect',
		  version: 0,
		  vertAdvY: 1,
		  'vert-adv-y': 'vertAdvY',
		  vertOriginX: 1,
		  'vert-origin-x': 'vertOriginX',
		  vertOriginY: 1,
		  'vert-origin-y': 'vertOriginY',
		  vHanging: 1,
		  'v-hanging': 'vHanging',
		  vIdeographic: 1,
		  'v-ideographic': 'vIdeographic',
		  viewBox: 1,
		  viewTarget: 1,
		  visibility: 0,
		  vMathematical: 1,
		  'v-mathematical': 'vMathematical',
		  vocab: 0,
		  widths: 0,
		  wordSpacing: 1,
		  'word-spacing': 'wordSpacing',
		  writingMode: 1,
		  'writing-mode': 'writingMode',
		  x1: 0,
		  x2: 0,
		  x: 0,
		  xChannelSelector: 1,
		  xHeight: 1,
		  'x-height': 'xHeight',
		  xlinkActuate: 1,
		  'xlink:actuate': 'xlinkActuate',
		  xlinkArcrole: 1,
		  'xlink:arcrole': 'xlinkArcrole',
		  xlinkHref: 1,
		  'xlink:href': 'xlinkHref',
		  xlinkRole: 1,
		  'xlink:role': 'xlinkRole',
		  xlinkShow: 1,
		  'xlink:show': 'xlinkShow',
		  xlinkTitle: 1,
		  'xlink:title': 'xlinkTitle',
		  xlinkType: 1,
		  'xlink:type': 'xlinkType',
		  xmlBase: 1,
		  'xml:base': 'xmlBase',
		  xmlLang: 1,
		  'xml:lang': 'xmlLang',
		  xmlns: 0,
		  'xml:space': 'xmlSpace',
		  xmlnsXlink: 1,
		  'xmlns:xlink': 'xmlnsXlink',
		  xmlSpace: 1,
		  y1: 0,
		  y2: 0,
		  y: 0,
		  yChannelSelector: 1,
		  z: 0,
		  zoomAndPan: 1
		};
		return possibleStandardNamesOptimized;
	}

	var hasRequiredLib$1;

	function requireLib$1 () {
		if (hasRequiredLib$1) return lib;
		hasRequiredLib$1 = 1;

		/**
		 * Copyright (c) Facebook, Inc. and its affiliates.
		 *
		 * This source code is licensed under the MIT license found in the
		 * LICENSE file in the root directory of this source tree.
		 *
		 * 
		 */




		// A reserved attribute.
		// It is handled by React separately and shouldn't be written to the DOM.
		const RESERVED = 0;

		// A simple string attribute.
		// Attributes that aren't in the filter are presumed to have this type.
		const STRING = 1;

		// A string attribute that accepts booleans in React. In HTML, these are called
		// "enumerated" attributes with "true" and "false" as possible values.
		// When true, it should be set to a "true" string.
		// When false, it should be set to a "false" string.
		const BOOLEANISH_STRING = 2;

		// A real boolean attribute.
		// When true, it should be present (set either to an empty string or its name).
		// When false, it should be omitted.
		const BOOLEAN = 3;

		// An attribute that can be used as a flag as well as with a value.
		// When true, it should be present (set either to an empty string or its name).
		// When false, it should be omitted.
		// For any other value, should be present with that value.
		const OVERLOADED_BOOLEAN = 4;

		// An attribute that must be numeric or parse as a numeric.
		// When falsy, it should be removed.
		const NUMERIC = 5;

		// An attribute that must be positive numeric or parse as a positive numeric.
		// When falsy, it should be removed.
		const POSITIVE_NUMERIC = 6;

		function getPropertyInfo(name) {
		  return properties.hasOwnProperty(name) ? properties[name] : null;
		}

		function PropertyInfoRecord(
		  name,
		  type,
		  mustUseProperty,
		  attributeName,
		  attributeNamespace,
		  sanitizeURL,
		  removeEmptyString,
		) {
		  this.acceptsBooleans =
		    type === BOOLEANISH_STRING ||
		    type === BOOLEAN ||
		    type === OVERLOADED_BOOLEAN;
		  this.attributeName = attributeName;
		  this.attributeNamespace = attributeNamespace;
		  this.mustUseProperty = mustUseProperty;
		  this.propertyName = name;
		  this.type = type;
		  this.sanitizeURL = sanitizeURL;
		  this.removeEmptyString = removeEmptyString;
		}

		// When adding attributes to this list, be sure to also add them to
		// the `possibleStandardNames` module to ensure casing and incorrect
		// name warnings.
		const properties = {};

		// These props are reserved by React. They shouldn't be written to the DOM.
		const reservedProps = [
		  'children',
		  'dangerouslySetInnerHTML',
		  // TODO: This prevents the assignment of defaultValue to regular
		  // elements (not just inputs). Now that ReactDOMInput assigns to the
		  // defaultValue property -- do we need this?
		  'defaultValue',
		  'defaultChecked',
		  'innerHTML',
		  'suppressContentEditableWarning',
		  'suppressHydrationWarning',
		  'style',
		];

		reservedProps.forEach(name => {
		  properties[name] = new PropertyInfoRecord(
		    name,
		    RESERVED,
		    false, // mustUseProperty
		    name, // attributeName
		    null, // attributeNamespace
		    false, // sanitizeURL
		    false, // removeEmptyString
		  );
		});

		// A few React string attributes have a different name.
		// This is a mapping from React prop names to the attribute names.
		[
		  ['acceptCharset', 'accept-charset'],
		  ['className', 'class'],
		  ['htmlFor', 'for'],
		  ['httpEquiv', 'http-equiv'],
		].forEach(([name, attributeName]) => {
		  properties[name] = new PropertyInfoRecord(
		    name,
		    STRING,
		    false, // mustUseProperty
		    attributeName, // attributeName
		    null, // attributeNamespace
		    false, // sanitizeURL
		    false, // removeEmptyString
		  );
		});

		// These are "enumerated" HTML attributes that accept "true" and "false".
		// In React, we let users pass `true` and `false` even though technically
		// these aren't boolean attributes (they are coerced to strings).
		['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(name => {
		  properties[name] = new PropertyInfoRecord(
		    name,
		    BOOLEANISH_STRING,
		    false, // mustUseProperty
		    name.toLowerCase(), // attributeName
		    null, // attributeNamespace
		    false, // sanitizeURL
		    false, // removeEmptyString
		  );
		});

		// These are "enumerated" SVG attributes that accept "true" and "false".
		// In React, we let users pass `true` and `false` even though technically
		// these aren't boolean attributes (they are coerced to strings).
		// Since these are SVG attributes, their attribute names are case-sensitive.
		[
		  'autoReverse',
		  'externalResourcesRequired',
		  'focusable',
		  'preserveAlpha',
		].forEach(name => {
		  properties[name] = new PropertyInfoRecord(
		    name,
		    BOOLEANISH_STRING,
		    false, // mustUseProperty
		    name, // attributeName
		    null, // attributeNamespace
		    false, // sanitizeURL
		    false, // removeEmptyString
		  );
		});

		// These are HTML boolean attributes.
		[
		  'allowFullScreen',
		  'async',
		  // Note: there is a special case that prevents it from being written to the DOM
		  // on the client side because the browsers are inconsistent. Instead we call focus().
		  'autoFocus',
		  'autoPlay',
		  'controls',
		  'default',
		  'defer',
		  'disabled',
		  'disablePictureInPicture',
		  'disableRemotePlayback',
		  'formNoValidate',
		  'hidden',
		  'loop',
		  'noModule',
		  'noValidate',
		  'open',
		  'playsInline',
		  'readOnly',
		  'required',
		  'reversed',
		  'scoped',
		  'seamless',
		  // Microdata
		  'itemScope',
		].forEach(name => {
		  properties[name] = new PropertyInfoRecord(
		    name,
		    BOOLEAN,
		    false, // mustUseProperty
		    name.toLowerCase(), // attributeName
		    null, // attributeNamespace
		    false, // sanitizeURL
		    false, // removeEmptyString
		  );
		});

		// These are the few React props that we set as DOM properties
		// rather than attributes. These are all booleans.
		[
		  'checked',
		  // Note: `option.selected` is not updated if `select.multiple` is
		  // disabled with `removeAttribute`. We have special logic for handling this.
		  'multiple',
		  'muted',
		  'selected',

		  // NOTE: if you add a camelCased prop to this list,
		  // you'll need to set attributeName to name.toLowerCase()
		  // instead in the assignment below.
		].forEach(name => {
		  properties[name] = new PropertyInfoRecord(
		    name,
		    BOOLEAN,
		    true, // mustUseProperty
		    name, // attributeName
		    null, // attributeNamespace
		    false, // sanitizeURL
		    false, // removeEmptyString
		  );
		});

		// These are HTML attributes that are "overloaded booleans": they behave like
		// booleans, but can also accept a string value.
		[
		  'capture',
		  'download',

		  // NOTE: if you add a camelCased prop to this list,
		  // you'll need to set attributeName to name.toLowerCase()
		  // instead in the assignment below.
		].forEach(name => {
		  properties[name] = new PropertyInfoRecord(
		    name,
		    OVERLOADED_BOOLEAN,
		    false, // mustUseProperty
		    name, // attributeName
		    null, // attributeNamespace
		    false, // sanitizeURL
		    false, // removeEmptyString
		  );
		});

		// These are HTML attributes that must be positive numbers.
		[
		  'cols',
		  'rows',
		  'size',
		  'span',

		  // NOTE: if you add a camelCased prop to this list,
		  // you'll need to set attributeName to name.toLowerCase()
		  // instead in the assignment below.
		].forEach(name => {
		  properties[name] = new PropertyInfoRecord(
		    name,
		    POSITIVE_NUMERIC,
		    false, // mustUseProperty
		    name, // attributeName
		    null, // attributeNamespace
		    false, // sanitizeURL
		    false, // removeEmptyString
		  );
		});

		// These are HTML attributes that must be numbers.
		['rowSpan', 'start'].forEach(name => {
		  properties[name] = new PropertyInfoRecord(
		    name,
		    NUMERIC,
		    false, // mustUseProperty
		    name.toLowerCase(), // attributeName
		    null, // attributeNamespace
		    false, // sanitizeURL
		    false, // removeEmptyString
		  );
		});

		const CAMELIZE = /[\-\:]([a-z])/g;
		const capitalize = token => token[1].toUpperCase();

		// This is a list of all SVG attributes that need special casing, namespacing,
		// or boolean value assignment. Regular attributes that just accept strings
		// and have the same names are omitted, just like in the HTML attribute filter.
		// Some of these attributes can be hard to find. This list was created by
		// scraping the MDN documentation.
		[
		  'accent-height',
		  'alignment-baseline',
		  'arabic-form',
		  'baseline-shift',
		  'cap-height',
		  'clip-path',
		  'clip-rule',
		  'color-interpolation',
		  'color-interpolation-filters',
		  'color-profile',
		  'color-rendering',
		  'dominant-baseline',
		  'enable-background',
		  'fill-opacity',
		  'fill-rule',
		  'flood-color',
		  'flood-opacity',
		  'font-family',
		  'font-size',
		  'font-size-adjust',
		  'font-stretch',
		  'font-style',
		  'font-variant',
		  'font-weight',
		  'glyph-name',
		  'glyph-orientation-horizontal',
		  'glyph-orientation-vertical',
		  'horiz-adv-x',
		  'horiz-origin-x',
		  'image-rendering',
		  'letter-spacing',
		  'lighting-color',
		  'marker-end',
		  'marker-mid',
		  'marker-start',
		  'overline-position',
		  'overline-thickness',
		  'paint-order',
		  'panose-1',
		  'pointer-events',
		  'rendering-intent',
		  'shape-rendering',
		  'stop-color',
		  'stop-opacity',
		  'strikethrough-position',
		  'strikethrough-thickness',
		  'stroke-dasharray',
		  'stroke-dashoffset',
		  'stroke-linecap',
		  'stroke-linejoin',
		  'stroke-miterlimit',
		  'stroke-opacity',
		  'stroke-width',
		  'text-anchor',
		  'text-decoration',
		  'text-rendering',
		  'underline-position',
		  'underline-thickness',
		  'unicode-bidi',
		  'unicode-range',
		  'units-per-em',
		  'v-alphabetic',
		  'v-hanging',
		  'v-ideographic',
		  'v-mathematical',
		  'vector-effect',
		  'vert-adv-y',
		  'vert-origin-x',
		  'vert-origin-y',
		  'word-spacing',
		  'writing-mode',
		  'xmlns:xlink',
		  'x-height',

		  // NOTE: if you add a camelCased prop to this list,
		  // you'll need to set attributeName to name.toLowerCase()
		  // instead in the assignment below.
		].forEach(attributeName => {
		  const name = attributeName.replace(CAMELIZE, capitalize);
		  properties[name] = new PropertyInfoRecord(
		    name,
		    STRING,
		    false, // mustUseProperty
		    attributeName,
		    null, // attributeNamespace
		    false, // sanitizeURL
		    false, // removeEmptyString
		  );
		});

		// String SVG attributes with the xlink namespace.
		[
		  'xlink:actuate',
		  'xlink:arcrole',
		  'xlink:role',
		  'xlink:show',
		  'xlink:title',
		  'xlink:type',

		  // NOTE: if you add a camelCased prop to this list,
		  // you'll need to set attributeName to name.toLowerCase()
		  // instead in the assignment below.
		].forEach(attributeName => {
		  const name = attributeName.replace(CAMELIZE, capitalize);
		  properties[name] = new PropertyInfoRecord(
		    name,
		    STRING,
		    false, // mustUseProperty
		    attributeName,
		    'http://www.w3.org/1999/xlink',
		    false, // sanitizeURL
		    false, // removeEmptyString
		  );
		});

		// String SVG attributes with the xml namespace.
		[
		  'xml:base',
		  'xml:lang',
		  'xml:space',

		  // NOTE: if you add a camelCased prop to this list,
		  // you'll need to set attributeName to name.toLowerCase()
		  // instead in the assignment below.
		].forEach(attributeName => {
		  const name = attributeName.replace(CAMELIZE, capitalize);
		  properties[name] = new PropertyInfoRecord(
		    name,
		    STRING,
		    false, // mustUseProperty
		    attributeName,
		    'http://www.w3.org/XML/1998/namespace',
		    false, // sanitizeURL
		    false, // removeEmptyString
		  );
		});

		// These attribute exists both in HTML and SVG.
		// The attribute name is case-sensitive in SVG so we can't just use
		// the React name like we do for attributes that exist only in HTML.
		['tabIndex', 'crossOrigin'].forEach(attributeName => {
		  properties[attributeName] = new PropertyInfoRecord(
		    attributeName,
		    STRING,
		    false, // mustUseProperty
		    attributeName.toLowerCase(), // attributeName
		    null, // attributeNamespace
		    false, // sanitizeURL
		    false, // removeEmptyString
		  );
		});

		// These attributes accept URLs. These must not allow javascript: URLS.
		// These will also need to accept Trusted Types object in the future.
		const xlinkHref = 'xlinkHref';
		properties[xlinkHref] = new PropertyInfoRecord(
		  'xlinkHref',
		  STRING,
		  false, // mustUseProperty
		  'xlink:href',
		  'http://www.w3.org/1999/xlink',
		  true, // sanitizeURL
		  false, // removeEmptyString
		);

		['src', 'href', 'action', 'formAction'].forEach(attributeName => {
		  properties[attributeName] = new PropertyInfoRecord(
		    attributeName,
		    STRING,
		    false, // mustUseProperty
		    attributeName.toLowerCase(), // attributeName
		    null, // attributeNamespace
		    true, // sanitizeURL
		    true, // removeEmptyString
		  );
		});

		// 
		const {
		  CAMELCASE,
		  SAME,
		  possibleStandardNames: possibleStandardNamesOptimized
		} = requirePossibleStandardNamesOptimized();

		const ATTRIBUTE_NAME_START_CHAR =
		  ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';

		const ATTRIBUTE_NAME_CHAR =
		  ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';

		/**
		 * Checks whether a property name is a custom attribute.
		 *
		 * @see https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/HTMLDOMPropertyConfig.js#L23-L25
		 *
		 * @type {(attribute: string) => boolean}
		 */
		const isCustomAttribute =
		  RegExp.prototype.test.bind(
		    // eslint-disable-next-line no-misleading-character-class
		    new RegExp('^(data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$')
		  );

		/**
		 * @type {Record<string, string>}
		 */
		const possibleStandardNames = Object.keys(
		  possibleStandardNamesOptimized
		).reduce((accumulator, standardName) => {
		  const propName = possibleStandardNamesOptimized[standardName];
		  if (propName === SAME) {
		    accumulator[standardName] = standardName;
		  } else if (propName === CAMELCASE) {
		    accumulator[standardName.toLowerCase()] = standardName;
		  } else {
		    accumulator[standardName] = propName;
		  }
		  return accumulator;
		}, {});

		lib.BOOLEAN = BOOLEAN;
		lib.BOOLEANISH_STRING = BOOLEANISH_STRING;
		lib.NUMERIC = NUMERIC;
		lib.OVERLOADED_BOOLEAN = OVERLOADED_BOOLEAN;
		lib.POSITIVE_NUMERIC = POSITIVE_NUMERIC;
		lib.RESERVED = RESERVED;
		lib.STRING = STRING;
		lib.getPropertyInfo = getPropertyInfo;
		lib.isCustomAttribute = isCustomAttribute;
		lib.possibleStandardNames = possibleStandardNames;
		return lib;
	}

	var utilities$1 = {};

	var cjs$2 = {};

	var cjs$1;
	var hasRequiredCjs$2;

	function requireCjs$2 () {
		if (hasRequiredCjs$2) return cjs$1;
		hasRequiredCjs$2 = 1;

		// http://www.w3.org/TR/CSS21/grammar.html
		// https://github.com/visionmedia/css-parse/pull/49#issuecomment-30088027
		var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;

		var NEWLINE_REGEX = /\n/g;
		var WHITESPACE_REGEX = /^\s*/;

		// declaration
		var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
		var COLON_REGEX = /^:\s*/;
		var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
		var SEMICOLON_REGEX = /^[;\s]*/;

		// https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Polyfill
		var TRIM_REGEX = /^\s+|\s+$/g;

		// strings
		var NEWLINE = '\n';
		var FORWARD_SLASH = '/';
		var ASTERISK = '*';
		var EMPTY_STRING = '';

		// types
		var TYPE_COMMENT = 'comment';
		var TYPE_DECLARATION = 'declaration';

		/**
		 * @param {String} style
		 * @param {Object} [options]
		 * @return {Object[]}
		 * @throws {TypeError}
		 * @throws {Error}
		 */
		function index (style, options) {
		  if (typeof style !== 'string') {
		    throw new TypeError('First argument must be a string');
		  }

		  if (!style) return [];

		  options = options || {};

		  /**
		   * Positional.
		   */
		  var lineno = 1;
		  var column = 1;

		  /**
		   * Update lineno and column based on `str`.
		   *
		   * @param {String} str
		   */
		  function updatePosition(str) {
		    var lines = str.match(NEWLINE_REGEX);
		    if (lines) lineno += lines.length;
		    var i = str.lastIndexOf(NEWLINE);
		    column = ~i ? str.length - i : column + str.length;
		  }

		  /**
		   * Mark position and patch `node.position`.
		   *
		   * @return {Function}
		   */
		  function position() {
		    var start = { line: lineno, column: column };
		    return function (node) {
		      node.position = new Position(start);
		      whitespace();
		      return node;
		    };
		  }

		  /**
		   * Store position information for a node.
		   *
		   * @constructor
		   * @property {Object} start
		   * @property {Object} end
		   * @property {undefined|String} source
		   */
		  function Position(start) {
		    this.start = start;
		    this.end = { line: lineno, column: column };
		    this.source = options.source;
		  }

		  /**
		   * Non-enumerable source string.
		   */
		  Position.prototype.content = style;

		  /**
		   * Error `msg`.
		   *
		   * @param {String} msg
		   * @throws {Error}
		   */
		  function error(msg) {
		    var err = new Error(
		      options.source + ':' + lineno + ':' + column + ': ' + msg
		    );
		    err.reason = msg;
		    err.filename = options.source;
		    err.line = lineno;
		    err.column = column;
		    err.source = style;

		    if (options.silent) ; else {
		      throw err;
		    }
		  }

		  /**
		   * Match `re` and return captures.
		   *
		   * @param {RegExp} re
		   * @return {undefined|Array}
		   */
		  function match(re) {
		    var m = re.exec(style);
		    if (!m) return;
		    var str = m[0];
		    updatePosition(str);
		    style = style.slice(str.length);
		    return m;
		  }

		  /**
		   * Parse whitespace.
		   */
		  function whitespace() {
		    match(WHITESPACE_REGEX);
		  }

		  /**
		   * Parse comments.
		   *
		   * @param {Object[]} [rules]
		   * @return {Object[]}
		   */
		  function comments(rules) {
		    var c;
		    rules = rules || [];
		    while ((c = comment())) {
		      if (c !== false) {
		        rules.push(c);
		      }
		    }
		    return rules;
		  }

		  /**
		   * Parse comment.
		   *
		   * @return {Object}
		   * @throws {Error}
		   */
		  function comment() {
		    var pos = position();
		    if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;

		    var i = 2;
		    while (
		      EMPTY_STRING != style.charAt(i) &&
		      (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))
		    ) {
		      ++i;
		    }
		    i += 2;

		    if (EMPTY_STRING === style.charAt(i - 1)) {
		      return error('End of comment missing');
		    }

		    var str = style.slice(2, i - 2);
		    column += 2;
		    updatePosition(str);
		    style = style.slice(i);
		    column += 2;

		    return pos({
		      type: TYPE_COMMENT,
		      comment: str
		    });
		  }

		  /**
		   * Parse declaration.
		   *
		   * @return {Object}
		   * @throws {Error}
		   */
		  function declaration() {
		    var pos = position();

		    // prop
		    var prop = match(PROPERTY_REGEX);
		    if (!prop) return;
		    comment();

		    // :
		    if (!match(COLON_REGEX)) return error("property missing ':'");

		    // val
		    var val = match(VALUE_REGEX);

		    var ret = pos({
		      type: TYPE_DECLARATION,
		      property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
		      value: val
		        ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING))
		        : EMPTY_STRING
		    });

		    // ;
		    match(SEMICOLON_REGEX);

		    return ret;
		  }

		  /**
		   * Parse declarations.
		   *
		   * @return {Object[]}
		   */
		  function declarations() {
		    var decls = [];

		    comments(decls);

		    // declarations
		    var decl;
		    while ((decl = declaration())) {
		      if (decl !== false) {
		        decls.push(decl);
		        comments(decls);
		      }
		    }

		    return decls;
		  }

		  whitespace();
		  return declarations();
		}

		/**
		 * Trim `str`.
		 *
		 * @param {String} str
		 * @return {String}
		 */
		function trim(str) {
		  return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
		}

		cjs$1 = index;
		
		return cjs$1;
	}

	var hasRequiredCjs$1;

	function requireCjs$1 () {
		if (hasRequiredCjs$1) return cjs$2;
		hasRequiredCjs$1 = 1;
		var __importDefault = (cjs$2 && cjs$2.__importDefault) || function (mod) {
		    return (mod && mod.__esModule) ? mod : { "default": mod };
		};
		Object.defineProperty(cjs$2, "__esModule", { value: true });
		cjs$2.default = StyleToObject;
		const inline_style_parser_1 = __importDefault(requireCjs$2());
		/**
		 * Parses inline style to object.
		 *
		 * @param style - Inline style.
		 * @param iterator - Iterator.
		 * @returns - Style object or null.
		 *
		 * @example Parsing inline style to object:
		 *
		 * ```js
		 * import parse from 'style-to-object';
		 * parse('line-height: 42;'); // { 'line-height': '42' }
		 * ```
		 */
		function StyleToObject(style, iterator) {
		    let styleObject = null;
		    if (!style || typeof style !== 'string') {
		        return styleObject;
		    }
		    const declarations = (0, inline_style_parser_1.default)(style);
		    const hasIterator = typeof iterator === 'function';
		    declarations.forEach((declaration) => {
		        if (declaration.type !== 'declaration') {
		            return;
		        }
		        const { property, value } = declaration;
		        if (hasIterator) {
		            iterator(property, value, declaration);
		        }
		        else if (value) {
		            styleObject = styleObject || {};
		            styleObject[property] = value;
		        }
		    });
		    return styleObject;
		}
		
		return cjs$2;
	}

	var utilities = {};

	var hasRequiredUtilities$1;

	function requireUtilities$1 () {
		if (hasRequiredUtilities$1) return utilities;
		hasRequiredUtilities$1 = 1;
		Object.defineProperty(utilities, "__esModule", { value: true });
		utilities.camelCase = void 0;
		var CUSTOM_PROPERTY_REGEX = /^--[a-zA-Z0-9_-]+$/;
		var HYPHEN_REGEX = /-([a-z])/g;
		var NO_HYPHEN_REGEX = /^[^-]+$/;
		var VENDOR_PREFIX_REGEX = /^-(webkit|moz|ms|o|khtml)-/;
		var MS_VENDOR_PREFIX_REGEX = /^-(ms)-/;
		/**
		 * Checks whether to skip camelCase.
		 */
		var skipCamelCase = function (property) {
		    return !property ||
		        NO_HYPHEN_REGEX.test(property) ||
		        CUSTOM_PROPERTY_REGEX.test(property);
		};
		/**
		 * Replacer that capitalizes first character.
		 */
		var capitalize = function (match, character) {
		    return character.toUpperCase();
		};
		/**
		 * Replacer that removes beginning hyphen of vendor prefix property.
		 */
		var trimHyphen = function (match, prefix) { return "".concat(prefix, "-"); };
		/**
		 * CamelCases a CSS property.
		 */
		var camelCase = function (property, options) {
		    if (options === void 0) { options = {}; }
		    if (skipCamelCase(property)) {
		        return property;
		    }
		    property = property.toLowerCase();
		    if (options.reactCompat) {
		        // `-ms` vendor prefix should not be capitalized
		        property = property.replace(MS_VENDOR_PREFIX_REGEX, trimHyphen);
		    }
		    else {
		        // for non-React, remove first hyphen so vendor prefix is not capitalized
		        property = property.replace(VENDOR_PREFIX_REGEX, trimHyphen);
		    }
		    return property.replace(HYPHEN_REGEX, capitalize);
		};
		utilities.camelCase = camelCase;
		
		return utilities;
	}

	var cjs;
	var hasRequiredCjs;

	function requireCjs () {
		if (hasRequiredCjs) return cjs;
		hasRequiredCjs = 1;
		var __importDefault = (cjs && cjs.__importDefault) || function (mod) {
		    return (mod && mod.__esModule) ? mod : { "default": mod };
		};
		var style_to_object_1 = __importDefault(requireCjs$1());
		var utilities_1 = requireUtilities$1();
		/**
		 * Parses CSS inline style to JavaScript object (camelCased).
		 */
		function StyleToJS(style, options) {
		    var output = {};
		    if (!style || typeof style !== 'string') {
		        return output;
		    }
		    (0, style_to_object_1.default)(style, function (property, value) {
		        // skip CSS comment
		        if (property && value) {
		            output[(0, utilities_1.camelCase)(property, options)] = value;
		        }
		    });
		    return output;
		}
		StyleToJS.default = StyleToJS;
		cjs = StyleToJS;
		
		return cjs;
	}

	var hasRequiredUtilities;

	function requireUtilities () {
		if (hasRequiredUtilities) return utilities$1;
		hasRequiredUtilities = 1;
		(function (exports$1) {
			var __importDefault = (utilities$1 && utilities$1.__importDefault) || function (mod) {
			    return (mod && mod.__esModule) ? mod : { "default": mod };
			};
			Object.defineProperty(exports$1, "__esModule", { value: true });
			exports$1.returnFirstArg = exports$1.canTextBeChildOfNode = exports$1.ELEMENTS_WITH_NO_TEXT_CHILDREN = exports$1.PRESERVE_CUSTOM_ATTRIBUTES = void 0;
			exports$1.isCustomComponent = isCustomComponent;
			exports$1.setStyleProp = setStyleProp;
			const react_1 = React$1;
			const style_to_js_1 = __importDefault(requireCjs());
			const RESERVED_SVG_MATHML_ELEMENTS = new Set([
			    'annotation-xml',
			    'color-profile',
			    'font-face',
			    'font-face-src',
			    'font-face-uri',
			    'font-face-format',
			    'font-face-name',
			    'missing-glyph',
			]);
			/**
			 * Check if a tag is a custom component.
			 *
			 * @see {@link https://github.com/facebook/react/blob/v16.6.3/packages/react-dom/src/shared/isCustomComponent.js}
			 *
			 * @param tagName - Tag name.
			 * @param props - Props passed to the element.
			 * @returns - Whether the tag is custom component.
			 */
			function isCustomComponent(tagName, props) {
			    if (!tagName.includes('-')) {
			        return Boolean(props && typeof props.is === 'string');
			    }
			    // These are reserved SVG and MathML elements.
			    // We don't mind this whitelist too much because we expect it to never grow.
			    // The alternative is to track the namespace in a few places which is convoluted.
			    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
			    if (RESERVED_SVG_MATHML_ELEMENTS.has(tagName)) {
			        return false;
			    }
			    return true;
			}
			const styleOptions = {
			    reactCompat: true,
			};
			/**
			 * Sets style prop.
			 *
			 * @param style - Inline style.
			 * @param props - Props object.
			 */
			function setStyleProp(style, props) {
			    if (typeof style !== 'string') {
			        return;
			    }
			    if (!style.trim()) {
			        props.style = {};
			        return;
			    }
			    try {
			        props.style = (0, style_to_js_1.default)(style, styleOptions);
			        // eslint-disable-next-line @typescript-eslint/no-unused-vars
			    }
			    catch (error) {
			        props.style = {};
			    }
			}
			/**
			 * @see https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html
			 */
			exports$1.PRESERVE_CUSTOM_ATTRIBUTES = Number(react_1.version.split('.')[0]) >= 16;
			/**
			 * @see https://github.com/facebook/react/blob/cae635054e17a6f107a39d328649137b83f25972/packages/react-dom/src/client/validateDOMNesting.js#L213
			 */
			exports$1.ELEMENTS_WITH_NO_TEXT_CHILDREN = new Set([
			    'tr',
			    'tbody',
			    'thead',
			    'tfoot',
			    'colgroup',
			    'table',
			    'head',
			    'html',
			    'frameset',
			]);
			/**
			 * Checks if the given node can contain text nodes
			 *
			 * @param node - Element node.
			 * @returns - Whether the node can contain text nodes.
			 */
			const canTextBeChildOfNode = (node) => !exports$1.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(node.name);
			exports$1.canTextBeChildOfNode = canTextBeChildOfNode;
			/**
			 * Returns the first argument as is.
			 *
			 * @param arg - The argument to be returned.
			 * @returns - The input argument `arg`.
			 */
			const returnFirstArg = (arg) => arg;
			exports$1.returnFirstArg = returnFirstArg;
			
		} (utilities$1));
		return utilities$1;
	}

	var hasRequiredAttributesToProps;

	function requireAttributesToProps () {
		if (hasRequiredAttributesToProps) return attributesToProps;
		hasRequiredAttributesToProps = 1;
		Object.defineProperty(attributesToProps, "__esModule", { value: true });
		attributesToProps.default = attributesToProps$1;
		const react_property_1 = requireLib$1();
		const utilities_1 = requireUtilities();
		// https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components
		// https://developer.mozilla.org/docs/Web/HTML/Attributes
		const UNCONTROLLED_COMPONENT_ATTRIBUTES = ['checked', 'value'];
		const UNCONTROLLED_COMPONENT_NAMES = ['input', 'select', 'textarea'];
		const valueOnlyInputs = {
		    reset: true,
		    submit: true,
		};
		/**
		 * Converts HTML/SVG DOM attributes to React props.
		 *
		 * @param attributes - HTML/SVG DOM attributes.
		 * @param nodeName - DOM node name.
		 * @returns - React props.
		 */
		function attributesToProps$1(attributes = {}, nodeName) {
		    const props = {};
		    const isInputValueOnly = Boolean(attributes.type && valueOnlyInputs[attributes.type]);
		    for (const attributeName in attributes) {
		        const attributeValue = attributes[attributeName];
		        // ARIA (aria-*) or custom data (data-*) attribute
		        if ((0, react_property_1.isCustomAttribute)(attributeName)) {
		            props[attributeName] = attributeValue;
		            continue;
		        }
		        // convert HTML/SVG attribute to React prop
		        const attributeNameLowerCased = attributeName.toLowerCase();
		        let propName = getPropName(attributeNameLowerCased);
		        if (propName) {
		            const propertyInfo = (0, react_property_1.getPropertyInfo)(propName);
		            // convert attribute to uncontrolled component prop (e.g., `value` to `defaultValue`)
		            if (UNCONTROLLED_COMPONENT_ATTRIBUTES.includes(propName) &&
		                UNCONTROLLED_COMPONENT_NAMES.includes(nodeName) &&
		                !isInputValueOnly) {
		                propName = getPropName('default' + attributeNameLowerCased);
		            }
		            props[propName] = attributeValue;
		            switch (propertyInfo === null || propertyInfo === void 0 ? void 0 : propertyInfo.type) {
		                case react_property_1.BOOLEAN:
		                    props[propName] = true;
		                    break;
		                case react_property_1.OVERLOADED_BOOLEAN:
		                    if (attributeValue === '') {
		                        props[propName] = true;
		                    }
		                    break;
		            }
		            continue;
		        }
		        // preserve custom attribute if React >=16
		        if (utilities_1.PRESERVE_CUSTOM_ATTRIBUTES) {
		            props[attributeName] = attributeValue;
		        }
		    }
		    // transform inline style to object
		    (0, utilities_1.setStyleProp)(attributes.style, props);
		    return props;
		}
		/**
		 * Gets prop name from lowercased attribute name.
		 *
		 * @param attributeName - Lowercased attribute name.
		 * @returns - Prop name.
		 */
		function getPropName(attributeName) {
		    return react_property_1.possibleStandardNames[attributeName];
		}
		
		return attributesToProps;
	}

	var domToReact = {};

	var hasRequiredDomToReact;

	function requireDomToReact () {
		if (hasRequiredDomToReact) return domToReact;
		hasRequiredDomToReact = 1;
		/* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */
		var __importDefault = (domToReact && domToReact.__importDefault) || function (mod) {
		    return (mod && mod.__esModule) ? mod : { "default": mod };
		};
		Object.defineProperty(domToReact, "__esModule", { value: true });
		domToReact.default = domToReact$1;
		const react_1 = React$1;
		const attributes_to_props_1 = __importDefault(requireAttributesToProps());
		const utilities_1 = requireUtilities();
		const React = {
		    cloneElement: react_1.cloneElement,
		    createElement: react_1.createElement,
		    isValidElement: react_1.isValidElement,
		};
		/**
		 * Converts DOM nodes to JSX element(s).
		 *
		 * @param nodes - DOM nodes.
		 * @param options - Options.
		 * @returns - String or JSX element(s).
		 */
		function domToReact$1(nodes, options = {}) {
		    var _a, _b, _c, _d, _e;
		    const reactElements = [];
		    const hasReplace = typeof options.replace === 'function';
		    const transform = (_a = options.transform) !== null && _a !== void 0 ? _a : utilities_1.returnFirstArg;
		    const { cloneElement, createElement, isValidElement } = (_b = options.library) !== null && _b !== void 0 ? _b : React;
		    const nodesLength = nodes.length;
		    for (let index = 0; index < nodesLength; index++) {
		        const node = nodes[index];
		        // replace with custom React element (if present)
		        if (hasReplace) {
		            let replaceElement = (_c = options.replace) === null || _c === void 0 ? void 0 : _c.call(options, node, index);
		            if (isValidElement(replaceElement)) {
		                // set "key" prop for sibling elements
		                // https://react.dev/learn/rendering-lists#rules-of-keys
		                if (nodesLength > 1) {
		                    replaceElement = cloneElement(replaceElement, {
		                        key: (_d = replaceElement.key) !== null && _d !== void 0 ? _d : index,
		                    });
		                }
		                reactElements.push(transform(replaceElement, node, index));
		                continue;
		            }
		        }
		        if (node.type === 'text') {
		            const isWhitespace = !node.data.trim().length;
		            // We have a whitespace node that can't be nested in its parent
		            // so skip it
		            if (isWhitespace &&
		                node.parent &&
		                !(0, utilities_1.canTextBeChildOfNode)(node.parent)) {
		                continue;
		            }
		            // Trim is enabled and we have a whitespace node
		            // so skip it
		            if (options.trim && isWhitespace) {
		                continue;
		            }
		            // We have a text node that's not whitespace and it can be nested
		            // in its parent so add it to the results
		            reactElements.push(transform(node.data, node, index));
		            continue;
		        }
		        const element = node;
		        let props = {};
		        if (skipAttributesToProps(element)) {
		            (0, utilities_1.setStyleProp)(element.attribs.style, element.attribs);
		            props = element.attribs;
		            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
		        }
		        else if (element.attribs) {
		            props = (0, attributes_to_props_1.default)(element.attribs, element.name);
		        }
		        let children;
		        switch (node.type) {
		            case 'script':
		            case 'style':
		                // prevent text in <script> or <style> from being escaped
		                // https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html
		                if (node.children[0]) {
		                    props.dangerouslySetInnerHTML = {
		                        __html: node.children[0].data,
		                    };
		                }
		                break;
		            case 'tag':
		                // setting textarea value in children is an antipattern in React
		                // https://react.dev/reference/react-dom/components/textarea#caveats
		                if (node.name === 'textarea' && node.children[0]) {
		                    props.defaultValue = node.children[0].data;
		                    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
		                }
		                else if ((_e = node.children) === null || _e === void 0 ? void 0 : _e.length) {
		                    // continue recursion of creating React elements (if applicable)
		                    children = domToReact$1(node.children, options);
		                }
		                break;
		            // skip all other cases (e.g., comment)
		            default:
		                continue;
		        }
		        // set "key" prop for sibling elements
		        // https://react.dev/learn/rendering-lists#rules-of-keys
		        if (nodesLength > 1) {
		            props.key = index;
		        }
		        reactElements.push(transform(createElement(node.name, props, children), node, index));
		    }
		    return reactElements.length === 1 ? reactElements[0] : reactElements;
		}
		/**
		 * Determines whether DOM element attributes should be transformed to props.
		 * Web Components should not have their attributes transformed except for `style`.
		 *
		 * @param node - Element node.
		 * @returns - Whether the node attributes should be converted to props.
		 */
		function skipAttributesToProps(node) {
		    return (utilities_1.PRESERVE_CUSTOM_ATTRIBUTES &&
		        node.type === 'tag' &&
		        (0, utilities_1.isCustomComponent)(node.name, node.attribs));
		}
		
		return domToReact;
	}

	/** Types of elements found in htmlparser2's DOM */
	var ElementType;
	(function (ElementType) {
	    /** Type for the root element of a document */
	    ElementType["Root"] = "root";
	    /** Type for Text */
	    ElementType["Text"] = "text";
	    /** Type for <? ... ?> */
	    ElementType["Directive"] = "directive";
	    /** Type for <!-- ... --> */
	    ElementType["Comment"] = "comment";
	    /** Type for <script> tags */
	    ElementType["Script"] = "script";
	    /** Type for <style> tags */
	    ElementType["Style"] = "style";
	    /** Type for Any tag */
	    ElementType["Tag"] = "tag";
	    /** Type for <![CDATA[ ... ]]> */
	    ElementType["CDATA"] = "cdata";
	    /** Type for <!doctype ...> */
	    ElementType["Doctype"] = "doctype";
	})(ElementType || (ElementType = {}));
	/**
	 * Tests whether an element is a tag or not.
	 * @param element Element to test
	 * @param element.type Node type discriminator to check.
	 */
	function isTag$1(element) {
	    return (element.type === ElementType.Tag ||
	        element.type === ElementType.Script ||
	        element.type === ElementType.Style);
	}
	// Exports for backwards compatibility
	/** Type for the root element of a document */
	// eslint-disable-next-line prefer-destructuring
	ElementType.Root;
	/** Type for Text */
	// eslint-disable-next-line prefer-destructuring
	ElementType.Text;
	/** Type for <? ... ?> */
	// eslint-disable-next-line prefer-destructuring
	ElementType.Directive;
	/** Type for <!-- ... --> */
	// eslint-disable-next-line prefer-destructuring
	ElementType.Comment;
	/** Type for <script> tags */
	// eslint-disable-next-line prefer-destructuring
	ElementType.Script;
	/** Type for <style> tags */
	// eslint-disable-next-line prefer-destructuring
	ElementType.Style;
	/** Type for Any tag */
	// eslint-disable-next-line prefer-destructuring
	ElementType.Tag;
	/** Type for <![CDATA[ ... ]]> */
	// eslint-disable-next-line prefer-destructuring
	ElementType.CDATA;
	/** Type for <!doctype ...> */
	// eslint-disable-next-line prefer-destructuring
	ElementType.Doctype;

	/**
	 * This object will be used as the prototype for Nodes when creating a
	 * DOM-Level-1-compliant structure.
	 */
	class Node {
	    /** Parent of the node */
	    parent = null;
	    /** Previous sibling */
	    prev = null;
	    /** Next sibling */
	    next = null;
	    /** The start index of the node. Requires `withStartIndices` on the handler to be `true. */
	    startIndex = null;
	    /** The end index of the node. Requires `withEndIndices` on the handler to be `true. */
	    endIndex = null;
	    // Read-write aliases for properties
	    /**
	     * Same as {@link parent}.
	     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
	     */
	    get parentNode() {
	        return this.parent;
	    }
	    set parentNode(parent) {
	        this.parent = parent;
	    }
	    /**
	     * Same as {@link prev}.
	     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
	     */
	    get previousSibling() {
	        return this.prev;
	    }
	    set previousSibling(previous) {
	        this.prev = previous;
	    }
	    /**
	     * Same as {@link next}.
	     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
	     */
	    get nextSibling() {
	        return this.next;
	    }
	    set nextSibling(next) {
	        this.next = next;
	    }
	    /**
	     * Clone this node, and optionally its children.
	     * @param recursive Clone child nodes as well.
	     * @returns A clone of the node.
	     */
	    cloneNode(recursive = false) {
	        return cloneNode(this, recursive);
	    }
	}
	/**
	 * A node that contains some data.
	 */
	class DataNode extends Node {
	    data;
	    /**
	     * @param data The content of the data node
	     */
	    constructor(data) {
	        super();
	        this.data = data;
	    }
	    /**
	     * Same as {@link data}.
	     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
	     */
	    get nodeValue() {
	        return this.data;
	    }
	    set nodeValue(data) {
	        this.data = data;
	    }
	}
	/**
	 * Text within the document.
	 */
	class Text extends DataNode {
	    type = ElementType.Text;
	    get nodeType() {
	        return 3;
	    }
	}
	/**
	 * Comments within the document.
	 */
	class Comment extends DataNode {
	    type = ElementType.Comment;
	    get nodeType() {
	        return 8;
	    }
	}
	/**
	 * Processing instructions, including doc types.
	 */
	class ProcessingInstruction extends DataNode {
	    type = ElementType.Directive;
	    name;
	    constructor(name, data) {
	        super(data);
	        this.name = name;
	    }
	    get nodeType() {
	        return 1;
	    }
	    /** If this is a doctype, the document type name (parse5 only). */
	    "x-name";
	    /** If this is a doctype, the document type public identifier (parse5 only). */
	    "x-publicId";
	    /** If this is a doctype, the document type system identifier (parse5 only). */
	    "x-systemId";
	}
	/**
	 * A node that can have children.
	 */
	class NodeWithChildren extends Node {
	    children;
	    /**
	     * @param children Children of the node. Only certain node types can have children.
	     */
	    constructor(children) {
	        super();
	        this.children = children;
	    }
	    // Aliases
	    /** First child of the node. */
	    get firstChild() {
	        return this.children[0] ?? null;
	    }
	    /** Last child of the node. */
	    get lastChild() {
	        return this.children.length > 0
	            ? this.children[this.children.length - 1]
	            : null;
	    }
	    /**
	     * Same as {@link children}.
	     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
	     */
	    get childNodes() {
	        return this.children;
	    }
	    set childNodes(children) {
	        this.children = children;
	    }
	}
	/**
	 * CDATA nodes.
	 */
	class CDATA extends NodeWithChildren {
	    type = ElementType.CDATA;
	    get nodeType() {
	        return 4;
	    }
	}
	/**
	 * The root node of the document.
	 */
	class Document extends NodeWithChildren {
	    type = ElementType.Root;
	    get nodeType() {
	        return 9;
	    }
	}
	/**
	 * An element within the DOM.
	 */
	class Element extends NodeWithChildren {
	    name;
	    attribs;
	    type;
	    /**
	     * @param name Name of the tag, eg. `div`, `span`.
	     * @param attribs Object mapping attribute names to attribute values.
	     * @param children Children of the node.
	     * @param type Node type used for the new node instance.
	     */
	    constructor(name, attribs, children = [], type = name === "script"
	        ? ElementType.Script
	        : name === "style"
	            ? ElementType.Style
	            : ElementType.Tag) {
	        super(children);
	        this.name = name;
	        this.attribs = attribs;
	        this.type = type;
	    }
	    get nodeType() {
	        return 1;
	    }
	    // DOM Level 1 aliases
	    /**
	     * Same as {@link name}.
	     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
	     */
	    get tagName() {
	        return this.name;
	    }
	    set tagName(name) {
	        this.name = name;
	    }
	    get attributes() {
	        return Object.keys(this.attribs).map((name) => ({
	            name,
	            value: this.attribs[name],
	            namespace: this["x-attribsNamespace"]?.[name],
	            prefix: this["x-attribsPrefix"]?.[name],
	        }));
	    }
	    /** Element namespace (parse5 only). */
	    namespace;
	    /** Element attribute namespaces (parse5 only). */
	    "x-attribsNamespace";
	    /** Element attribute namespace-related prefixes (parse5 only). */
	    "x-attribsPrefix";
	}
	/**
	 * Checks if `node` is an element node.
	 * @param node Node to check.
	 * @returns `true` if the node is an element node.
	 */
	function isTag(node) {
	    return isTag$1(node);
	}
	/**
	 * Checks if `node` is a CDATA node.
	 * @param node Node to check.
	 * @returns `true` if the node is a CDATA node.
	 */
	function isCDATA(node) {
	    return node.type === ElementType.CDATA;
	}
	/**
	 * Checks if `node` is a text node.
	 * @param node Node to check.
	 * @returns `true` if the node is a text node.
	 */
	function isText(node) {
	    return node.type === ElementType.Text;
	}
	/**
	 * Checks if `node` is a comment node.
	 * @param node Node to check.
	 * @returns `true` if the node is a comment node.
	 */
	function isComment(node) {
	    return node.type === ElementType.Comment;
	}
	/**
	 * Checks if `node` is a directive node.
	 * @param node Node to check.
	 * @returns `true` if the node is a directive node.
	 */
	function isDirective(node) {
	    return node.type === ElementType.Directive;
	}
	/**
	 * Checks if `node` is a document node.
	 * @param node Node to check.
	 * @returns `true` if the node is a document node.
	 */
	function isDocument(node) {
	    return node.type === ElementType.Root;
	}
	/**
	 * Checks if `node` has children.
	 * @param node Node to check.
	 * @returns `true` if the node has children.
	 */
	function hasChildren(node) {
	    return Object.hasOwn(node, "children");
	}
	/**
	 * Clone a node, and optionally its children.
	 * @param node Node to clone.
	 * @param recursive Clone child nodes as well.
	 * @returns A clone of the node.
	 */
	function cloneNode(node, recursive = false) {
	    let result;
	    if (isText(node)) {
	        result = new Text(node.data);
	    }
	    else if (isComment(node)) {
	        result = new Comment(node.data);
	    }
	    else if (isTag(node)) {
	        const children = recursive ? cloneChildren(node.children) : [];
	        const clone = new Element(node.name, { ...node.attribs }, children);
	        for (const child of children) {
	            child.parent = clone;
	        }
	        if (node.namespace != null) {
	            clone.namespace = node.namespace;
	        }
	        if (node["x-attribsNamespace"]) {
	            clone["x-attribsNamespace"] = { ...node["x-attribsNamespace"] };
	        }
	        if (node["x-attribsPrefix"]) {
	            clone["x-attribsPrefix"] = { ...node["x-attribsPrefix"] };
	        }
	        result = clone;
	    }
	    else if (isCDATA(node)) {
	        const children = recursive ? cloneChildren(node.children) : [];
	        const clone = new CDATA(children);
	        for (const child of children) {
	            child.parent = clone;
	        }
	        result = clone;
	    }
	    else if (isDocument(node)) {
	        const children = recursive ? cloneChildren(node.children) : [];
	        const clone = new Document(children);
	        for (const child of children) {
	            child.parent = clone;
	        }
	        if (node["x-mode"]) {
	            clone["x-mode"] = node["x-mode"];
	        }
	        result = clone;
	    }
	    else if (isDirective(node)) {
	        const instruction = new ProcessingInstruction(node.name, node.data);
	        if (node["x-name"] != null) {
	            instruction["x-name"] = node["x-name"];
	            instruction["x-publicId"] = node["x-publicId"];
	            instruction["x-systemId"] = node["x-systemId"];
	        }
	        result = instruction;
	    }
	    else {
	        throw new Error(`Not implemented yet: ${node.type}`);
	    }
	    result.startIndex = node.startIndex;
	    result.endIndex = node.endIndex;
	    if (node.sourceCodeLocation != null) {
	        result.sourceCodeLocation = node.sourceCodeLocation;
	    }
	    return result;
	}
	/**
	 * Clone a list of child nodes.
	 * @param childs The child nodes to clone.
	 * @returns A list of cloned child nodes.
	 */
	function cloneChildren(childs) {
	    const children = childs.map((child) => cloneNode(child, true));
	    for (let index = 1; index < children.length; index++) {
	        children[index].prev = children[index - 1];
	        children[index - 1].next = children[index];
	    }
	    return children;
	}

	// Default options
	const defaultOptions = {
	    withStartIndices: false,
	    withEndIndices: false,
	    xmlMode: false,
	};
	/**
	 * Event-based handler that builds a DOM tree from parser callbacks.
	 */
	class DomHandler {
	    /** The elements of the DOM */
	    dom = [];
	    /** The root element for the DOM */
	    root = new Document(this.dom);
	    /** Called once parsing has completed. */
	    callback;
	    /** Settings for the handler. */
	    options;
	    /** Callback whenever a tag is closed. */
	    elementCB;
	    /** Indicated whether parsing has been completed. */
	    done = false;
	    /** Stack of open tags. */
	    tagStack = [this.root];
	    /** A data node that is still being written to. */
	    lastNode = null;
	    /** Reference to the parser instance. Used for location information. */
	    parser = null;
	    /**
	     * @param callback Called once parsing has completed.
	     * @param options Settings for the handler.
	     * @param elementCB Callback whenever a tag is closed.
	     */
	    constructor(callback, options, elementCB) {
	        // Make it possible to skip arguments, for backwards-compatibility
	        if (typeof options === "function") {
	            elementCB = options;
	            options = defaultOptions;
	        }
	        if (typeof callback === "object") {
	            options = callback;
	            callback = undefined;
	        }
	        this.callback = callback ?? null;
	        this.options = options ?? defaultOptions;
	        this.elementCB = elementCB ?? null;
	    }
	    onparserinit(parser) {
	        this.parser = parser;
	    }
	    // Resets the handler back to starting state
	    onreset() {
	        this.dom = [];
	        this.root = new Document(this.dom);
	        this.done = false;
	        this.tagStack = [this.root];
	        this.lastNode = null;
	        this.parser = null;
	    }
	    // Signals the handler that parsing is done
	    onend() {
	        if (this.done)
	            return;
	        this.done = true;
	        this.parser = null;
	        this.handleCallback(null);
	    }
	    onerror(error) {
	        this.handleCallback(error);
	    }
	    onclosetag() {
	        this.lastNode = null;
	        const element = this.tagStack.pop();
	        if (this.options.withEndIndices && this.parser) {
	            element.endIndex = this.parser.endIndex;
	        }
	        if (this.elementCB)
	            this.elementCB(element);
	    }
	    onopentag(name, attribs) {
	        const type = this.options.xmlMode ? ElementType.Tag : undefined;
	        const element = new Element(name, attribs, undefined, type);
	        this.addNode(element);
	        this.tagStack.push(element);
	    }
	    ontext(data) {
	        const { lastNode } = this;
	        if (lastNode && lastNode.type === ElementType.Text) {
	            lastNode.data += data;
	            if (this.options.withEndIndices && this.parser) {
	                lastNode.endIndex = this.parser.endIndex;
	            }
	        }
	        else {
	            const node = new Text(data);
	            this.addNode(node);
	            this.lastNode = node;
	        }
	    }
	    oncomment(data) {
	        if (this.lastNode && this.lastNode.type === ElementType.Comment) {
	            this.lastNode.data += data;
	            return;
	        }
	        const node = new Comment(data);
	        this.addNode(node);
	        this.lastNode = node;
	    }
	    oncommentend() {
	        this.lastNode = null;
	    }
	    oncdatastart() {
	        const text = new Text("");
	        const node = new CDATA([text]);
	        this.addNode(node);
	        text.parent = node;
	        this.lastNode = text;
	    }
	    oncdataend() {
	        this.lastNode = null;
	    }
	    onprocessinginstruction(name, data) {
	        const node = new ProcessingInstruction(name, data);
	        this.addNode(node);
	    }
	    handleCallback(error) {
	        if (typeof this.callback === "function") {
	            this.callback(error, this.dom);
	        }
	        else if (error) {
	            throw error;
	        }
	    }
	    addNode(node) {
	        const parent = this.tagStack[this.tagStack.length - 1];
	        const previousSibling = parent.children[parent.children.length - 1];
	        if (this.options.withStartIndices && this.parser) {
	            node.startIndex = this.parser.startIndex;
	        }
	        if (this.options.withEndIndices && this.parser) {
	            node.endIndex = this.parser.endIndex;
	        }
	        parent.children.push(node);
	        if (previousSibling) {
	            node.prev = previousSibling;
	            previousSibling.next = node;
	        }
	        node.parent = parent;
	        this.lastNode = null;
	    }
	}

	var dist = /*#__PURE__*/Object.freeze({
		__proto__: null,
		CDATA: CDATA,
		Comment: Comment,
		DataNode: DataNode,
		Document: Document,
		DomHandler: DomHandler,
		Element: Element,
		Node: Node,
		NodeWithChildren: NodeWithChildren,
		ProcessingInstruction: ProcessingInstruction,
		Text: Text,
		cloneNode: cloneNode,
		default: DomHandler,
		hasChildren: hasChildren,
		isCDATA: isCDATA,
		isComment: isComment,
		isDirective: isDirective,
		isDocument: isDocument,
		isTag: isTag,
		isText: isText
	});

	var require$$3 = /*@__PURE__*/getAugmentedNamespace(dist);

	var hasRequiredLib;

	function requireLib () {
		if (hasRequiredLib) return lib$2;
		hasRequiredLib = 1;
		(function (exports$1) {
			var __importDefault = (lib$2 && lib$2.__importDefault) || function (mod) {
			    return (mod && mod.__esModule) ? mod : { "default": mod };
			};
			Object.defineProperty(exports$1, "__esModule", { value: true });
			exports$1.htmlToDOM = exports$1.domToReact = exports$1.attributesToProps = exports$1.Text = exports$1.ProcessingInstruction = exports$1.Element = exports$1.Comment = void 0;
			exports$1.default = HTMLReactParser;
			const html_dom_parser_1 = __importDefault(requireLib$2());
			exports$1.htmlToDOM = html_dom_parser_1.default;
			const attributes_to_props_1 = __importDefault(requireAttributesToProps());
			exports$1.attributesToProps = attributes_to_props_1.default;
			const dom_to_react_1 = __importDefault(requireDomToReact());
			exports$1.domToReact = dom_to_react_1.default;
			var domhandler_1 = require$$3;
			Object.defineProperty(exports$1, "Comment", { enumerable: true, get: function () { return domhandler_1.Comment; } });
			Object.defineProperty(exports$1, "Element", { enumerable: true, get: function () { return domhandler_1.Element; } });
			Object.defineProperty(exports$1, "ProcessingInstruction", { enumerable: true, get: function () { return domhandler_1.ProcessingInstruction; } });
			Object.defineProperty(exports$1, "Text", { enumerable: true, get: function () { return domhandler_1.Text; } });
			const domParserOptions = { lowerCaseAttributeNames: false };
			/**
			 * Converts HTML string to React elements.
			 *
			 * @param html - HTML string.
			 * @param options - Parser options.
			 * @returns - React element(s), empty array, or string.
			 */
			function HTMLReactParser(html, options) {
			    var _a;
			    if (typeof html !== 'string') {
			        throw new TypeError('First argument must be a string');
			    }
			    if (!html) {
			        return [];
			    }
			    return (0, dom_to_react_1.default)((0, html_dom_parser_1.default)(html, (_a = options === null || options === void 0 ? void 0 : options.htmlparser2) !== null && _a !== void 0 ? _a : domParserOptions), options);
			}
			
		} (lib$2));
		return lib$2;
	}

	var libExports = requireLib();
	var HTMLReactParser = /*@__PURE__*/getDefaultExportFromCjs(libExports);

	var ReactHtmlParser = HTMLReactParser.default || HTMLReactParser;

	//const { useForm } = window.ReactHookForm;

	let {
	  Modal: Modal$2,
	  Container: Container$2,
	  Row: Row$1,
	  Col: Col$1,
	  Image: Image$1,
	  InputGroup: InputGroup$2,
	  FormControl: FormControl$2,
	  Button: Button$4,
	  Media: Media$1
	} = ReactBootstrap;
	function LoginLogout({
	  screenSize = "large"
	}) {
	  const user_profile = useSelector(selectApplication);
	  const [unsplashPic, setUnsplashPic] = React$1.useState(null);
	  const dispatch = useDispatch();
	  const [modalShow, setModalShow] = React$1.useState(false);
	  function onSubmit(data) {
	    //    console.log(data);
	    dispatch(set_user_profile({
	      email: data.email,
	      user: data.user,
	      avatarUrl: data.avatarUrl
	    }));
	    setTimeout(function () {
	      setModalShow(false);
	    }, 1000);
	    setUnsplashPic(null);
	  }
	  return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, /*#__PURE__*/React$1.createElement("span", {
	    onClick: () => setModalShow(true),
	    style: {
	      marginRight: "1rem"
	    }
	  }, !!user_profile?.user && user_profile.user.length > 0 ? user_profile.user : 'Anonymous'), /*#__PURE__*/React$1.createElement(Modal$2, {
	    size: "lg",
	    show: modalShow,
	    onHide: () => setModalShow(false),
	    "aria-labelledby": "login"
	  }, /*#__PURE__*/React$1.createElement(Modal$2.Header, {
	    closeButton: true
	  }, screenSize === "large" ? /*#__PURE__*/React$1.createElement(Modal$2.Title, {
	    id: "login-lg"
	  }, "\u041B\u043E\u0433\u0438\u043D") : /*#__PURE__*/React$1.createElement("small", null, "\u041B\u043E\u0433\u0438\u043D")), /*#__PURE__*/React$1.createElement(Modal$2.Body, null, !!unsplashPic || user_profile?.avatarUrl && user_profile.avatarUrl.length > 10 ? /*#__PURE__*/React$1.createElement(UserFrofile, {
	    email: user_profile.email,
	    user: user_profile.user,
	    avatarUrl: !!unsplashPic ? unsplashPic : user_profile.avatarUrl
	  }) : null, /*#__PURE__*/React$1.createElement(UserFormHook, {
	    email: user_profile.email,
	    user: user_profile.user,
	    avatarUrl: !!unsplashPic ? unsplashPic : user_profile.avatarUrl,
	    unsplashPic: unsplashPic,
	    onSubmit: onSubmit,
	    screenSize: screenSize
	  }), /*#__PURE__*/React$1.createElement(SearchPhotos, {
	    setUnsplashPic: setUnsplashPic
	  }))));
	}
	let modalForm = [{
	  name: "email",
	  title: "Email",
	  type: "email"
	}, {
	  name: "user",
	  title: "ФИО Группа",
	  type: "text"
	}, {
	  name: "avatarUrl",
	  title: "URL аватар",
	  type: "url"
	}];
	function UserFormHook(props) {
	  // Create refs for each form field
	  const formRefs = {
	    email: React$1.useRef(null),
	    user: React$1.useRef(null),
	    avatarUrl: React$1.useRef(null)
	  };

	  // Handle form submission
	  const handleSubmit = e => {
	    e.preventDefault();

	    // Collect form data
	    const formData = {
	      email: formRefs.email.current?.value || '',
	      user: formRefs.user.current?.value || '',
	      avatarUrl: formRefs.avatarUrl.current?.value || ''
	    };

	    // Call parent's onSubmit with form data
	    props.onSubmit(formData);
	  };

	  // Update avatarUrl when unsplashPic changes
	  React$1.useEffect(() => {
	    if (formRefs.avatarUrl.current && props.unsplashPic) {
	      formRefs.avatarUrl.current.value = props.unsplashPic;
	    }
	  }, [props.unsplashPic]);

	  // Set initial values
	  React$1.useEffect(() => {
	    if (formRefs.email.current && props.email) {
	      formRefs.email.current.value = props.email;
	    }
	    if (formRefs.user.current && props.user) {
	      formRefs.user.current.value = props.user;
	    }
	    if (formRefs.avatarUrl.current && props.avatarUrl) {
	      formRefs.avatarUrl.current.value = props.avatarUrl;
	    }
	  }, []); // Run once on mount

	  return /*#__PURE__*/React$1.createElement("form", {
	    onSubmit: handleSubmit
	  }, modalForm.map(item => /*#__PURE__*/React$1.createElement(InputGroup$2, {
	    className: "mb-3",
	    size: "sm",
	    key: item.name
	  }, /*#__PURE__*/React$1.createElement(InputGroup$2.Prepend, null, /*#__PURE__*/React$1.createElement(InputGroup$2.Text, {
	    style: {
	      width: '6rem'
	    }
	  }, props.screenSize === "large" ? item.title : /*#__PURE__*/React$1.createElement("small", null, item.title))), /*#__PURE__*/React$1.createElement(FormControl$2, {
	    type: item.type,
	    ref: formRefs[item.name],
	    defaultValue: props[item.name] || ''
	  }))), /*#__PURE__*/React$1.createElement(Button$4, {
	    variant: "outline-secondary",
	    type: "submit",
	    size: "sm"
	  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"));
	}
	function findUnspalshImageByGender(isMale) {
	  let item = Math.floor(Math.random() * 64) + 1;
	  let picindex = item > 9 ? "" + item : "0" + item;
	  if (!!isMale) {
	    return "https://econolabs.github.io/avatars/male" + picindex + ".jpg";
	  }
	  return "https://econolabs.github.io/avatars/female" + picindex + ".jpg";
	  //  return "../avatars/female01.jpg";
	}
	function randomPhotoes(number) {
	  let males = Array.from({
	    length: number
	  }, (_, i) => {
	    return {
	      id: i + 1,
	      alt_description: "picmale" + i,
	      urls: {
	        thumb: findUnspalshImageByGender(true) // "https://econolabs.github.io/freelancer.jpg"
	      }
	    };
	  });
	  let females = Array.from({
	    length: number
	  }, (_, i) => {
	    return {
	      id: i + 1,
	      alt_description: "picfemale" + i,
	      urls: {
	        thumb: findUnspalshImageByGender(false) // "https://econolabs.github.io/freelancer.jpg"
	      }
	    };
	  });
	  return [...males, ...females];
	}
	function SearchPhotos(props) {
	  const [query, setQuery] = React$1.useState("");
	  const [pics, setPics] = React$1.useState([]);
	  const searchPhotos = async () => {
	    setTimeout(() => {
	      setPics([...randomPhotoes(6)]);
	    }, 425);
	  };
	  return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, /*#__PURE__*/React$1.createElement(Button$4, {
	    variant: "outline-secondary",
	    onClick: () => searchPhotos(),
	    size: "sm"
	  }, pics.length > 0 ? 'Искать снова' : 'Искать аватар'), /*#__PURE__*/React$1.createElement(Container$2, null, /*#__PURE__*/React$1.createElement(Row$1, null, pics.map(pic => /*#__PURE__*/React$1.createElement(Col$1, {
	    xs: 6,
	    md: 2,
	    key: pic.id
	  }, /*#__PURE__*/React$1.createElement(Image$1, {
	    alt: pic.alt_description,
	    src: pic.urls.thumb,
	    thumbnail: true,
	    onClick: () => props.setUnsplashPic(pic.urls.thumb)
	  }))))));
	}
	function UserFrofile(props) {
	  return /*#__PURE__*/React$1.createElement(Media$1, null, /*#__PURE__*/React$1.createElement("img", {
	    src: props.avatarUrl,
	    alt: props.user,
	    className: "m-3",
	    style: {
	      verticalAlign: "middle",
	      width: "60px",
	      height: "60px",
	      borderRadius: "50%",
	      filter: "grayscale(100%)",
	      objectFit: "cover"
	    }
	  }), /*#__PURE__*/React$1.createElement(Media$1.Body, null, /*#__PURE__*/React$1.createElement("h5", null, props.user), /*#__PURE__*/React$1.createElement("p", null, props.email)));
	}

	//import "./Spreadsheet.css";

	// let { 
	// alphabet
	//  } = basicfirebasecrudauthservices

	const alphabet$1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	function AlphabetRow(props) {
	  const alphabetRow = [];
	  for (let x = 0; x < props.x + 1; x += 1) {
	    alphabetRow.push(/*#__PURE__*/React$1.createElement("div", {
	      key: alphabet$1[x],
	      className: "cells__alphabet"
	    }, alphabet$1[x]));
	  }
	  return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, alphabetRow);
	}

	let {
	  ButtonGroup: ButtonGroup$3,
	  ButtonToolbar,
	  Button: Button$3,
	  Form: Form$2
	} = ReactBootstrap;
	function CompactSpreadsheetLayout({
	  screenSize
	}) {
	  const dispatch = useDispatch();
	  const [expandView, toggle_expand_view] = React$1.useState(false);
	  const userProfile = useSelector(selectApplication);
	  const [countLetter, setCountLetter] = React$1.useState(0);
	  const [countRow, setCountRow] = React$1.useState(7);
	  function doEmptySpreadsheet() {
	    toggle_expand_view(false);
	    dispatch(new_empty_spreadsheet());
	    setTimeout(function () {
	      toggle_expand_view(true);
	    }, 425);
	  }
	  function doChangeColumn(go) {
	    toggle_expand_view(false);
	    if (go === "right") {
	      setCountLetter(countLetter + 1);
	    }
	    if (go === "left") {
	      setCountLetter(countLetter - 1);
	    }
	    setTimeout(function () {
	      toggle_expand_view(true);
	    }, 425);
	  }
	  return /*#__PURE__*/React$1.createElement("div", {
	    className: "excelstyle"
	  }, /*#__PURE__*/React$1.createElement("div", {
	    className: "title",
	    style: {
	      display: "flex",
	      justifyContent: "space-between",
	      padding: ".4rem"
	    }
	  }, userProfile?.avatarUrl && userProfile.avatarUrl.length > 10 ? /*#__PURE__*/React$1.createElement("img", {
	    src: userProfile.avatarUrl,
	    alt: "",
	    style: {
	      verticalAlign: "middle",
	      width: "30px",
	      height: "30px",
	      borderRadius: "50%",
	      filter: "grayscale(100%)",
	      objectFit: "cover"
	    }
	  }) : null, /*#__PURE__*/React$1.createElement(LoginLogout, {
	    screenSize: screenSize
	  })), /*#__PURE__*/React$1.createElement("div", {
	    className: "icon-bar"
	  }, /*#__PURE__*/React$1.createElement(ButtonToolbar, {
	    "aria-label": "Toggle Toolbar"
	  }, /*#__PURE__*/React$1.createElement(ButtonGroup$3, {
	    "aria-label": "Posts Buttons",
	    size: "sm"
	  }, /*#__PURE__*/React$1.createElement(Button$3, {
	    variant: "outline-secondary",
	    onClick: () => toggle_expand_view(!expandView),
	    "data-toggle": "tooltip",
	    "data-placement": "bottom",
	    title: expandView ? "Свернуть расчет" : "Развернуть расчет"
	  }, expandView ? "Сверн" : "Разв"), /*#__PURE__*/React$1.createElement(Button$3, {
	    variant: "outline-secondary",
	    onClick: () => doEmptySpreadsheet(),
	    "data-toggle": "tooltip",
	    "data-placement": "bottom",
	    title: "\u041D\u043E\u0432\u044B\u0439 \u0440\u0430\u0441\u0447\u0435\u0442"
	  }, "\u041D\u043E\u0432")), !!userProfile?.email ? /*#__PURE__*/React$1.createElement(ButtonGroup$3, {
	    "aria-label": "Workbook Buttons",
	    size: "sm",
	    className: "ml-3"
	  }, /*#__PURE__*/React$1.createElement(Button$3, {
	    variant: "outline-secondary",
	    "data-toggle": "tooltip",
	    "data-placement": "bottom",
	    title: "\u0420\u0430\u0431\u043E\u0447\u0430\u044F \u0442\u0435\u0442\u0440\u0430\u0434\u044C"
	  }, /*#__PURE__*/React$1.createElement("a", {
	    href: "../myworkbook",
	    target: "_blank"
	  }, "\u0420\u0422"))) : null)), /*#__PURE__*/React$1.createElement("div", {
	    className: "icon-bar"
	  }, /*#__PURE__*/React$1.createElement(ButtonGroup$3, {
	    "aria-label": "Posts Buttons",
	    size: "sm"
	  }, countLetter > 0 ? /*#__PURE__*/React$1.createElement(Button$3, {
	    variant: "outline-secondary",
	    onClick: () => doChangeColumn("left"),
	    "data-toggle": "tooltip",
	    "data-placement": "bottom",
	    title: "Сместиться влево"
	  }, alphabet$1[countLetter - 1]) : null, /*#__PURE__*/React$1.createElement(Button$3, {
	    variant: "outline-secondary",
	    onClick: () => doChangeColumn("right"),
	    "data-toggle": "tooltip",
	    "data-placement": "bottom",
	    title: "Сместиться вправо"
	  }, alphabet$1[countLetter + 1]), /*#__PURE__*/React$1.createElement(Button$3, {
	    variant: "outline-secondary",
	    onClick: () => setCountRow(countRow + 1),
	    "data-toggle": "tooltip",
	    "data-placement": "bottom",
	    title: "Сместиться вправо"
	  }, "+_"))), expandView ? /*#__PURE__*/React$1.createElement(ActiveCells$1
	  //    userProfile={userProfile}
	  , {
	    currentLetter: alphabet$1[countLetter],
	    numberOfRows: countRow
	  }) : null);
	}
	function ActiveCells$1({
	  currentLetter,
	  numberOfRows
	}) {
	  const dispatch = useDispatch();
	  const protoDataObject = createProtoObject(useSelector(selectSpreadsheetProtoData));
	  const calculatedData = createProtoObject(useSelector(selectSpreadsheetData));
	  const formRef = React$1.useRef(null);
	  React$1.useRef({});
	  function reCalculate(formData) {
	    dispatch(load_data({
	      protoData: createProtoArray$1({
	        ...protoDataObject,
	        ...formData
	      })
	    }));
	  }
	  const handleSubmit = e => {
	    e.preventDefault();
	    if (!formRef.current) return;
	    const formData = new FormData(formRef.current);
	    const data = {};

	    // Collect all cell values
	    for (let [key, value] of formData.entries()) {
	      data[key] = value;
	    }
	    reCalculate(data);
	  };
	  let filledArray = new Array(numberOfRows).fill(currentLetter);
	  return /*#__PURE__*/React$1.createElement(Form$2, {
	    ref: formRef,
	    onSubmit: handleSubmit,
	    className: "p-1"
	  }, filledArray.map((item, index) => {
	    let cellAddress = item + (index + 1).toString();
	    return /*#__PURE__*/React$1.createElement(ActiveCell, {
	      key: cellAddress,
	      cellAddress: cellAddress,
	      cellCalculatedData: calculatedData[cellAddress],
	      defaultValue: protoDataObject[cellAddress] || ''
	    });
	  }), /*#__PURE__*/React$1.createElement(Button$3, {
	    variant: "outline-secondary",
	    type: "submit",
	    size: "sm",
	    block: true
	  }, "fx"));
	}
	function ActiveCell({
	  cellAddress,
	  cellCalculatedData,
	  defaultValue
	}) {
	  return /*#__PURE__*/React$1.createElement(Form$2.Group, {
	    controlId: "formBasicEmail" + cellAddress
	  }, /*#__PURE__*/React$1.createElement(Form$2.Label, {
	    className: "small text-muted"
	  }, !cellCalculatedData ? cellAddress : cellAddress + ":   " + cellCalculatedData), /*#__PURE__*/React$1.createElement(Form$2.Control, {
	    name: cellAddress,
	    type: "textarea",
	    rows: "3",
	    defaultValue: defaultValue
	  }));
	}

	// function ActiveCells({ currentLetter, numberOfRows }) {
	//   const dispatch = useDispatch();
	//   const protoDataObject = createProtoObject(useSelector(selectSpreadsheetProtoData));
	//   const calculatedData = createProtoObject(useSelector(selectSpreadsheetData));
	//   const methods = useForm({ defaultValues: protoDataObject });
	//   const { handleSubmit } = methods; //register 

	//   function reCalculate(data) {
	//     //  console.log(data);
	//     //  console.log(protoDataObject);
	//     //  console.log(calculatedData);
	//     dispatch(load_data({ protoData: createProtoArray({ ...protoDataObject, ...data }) }))
	//   }

	//   let filledArray = new Array(numberOfRows).fill(currentLetter);
	//  // console.log(filledArray);

	//   return (
	//     <FormProvider {...methods}>
	//       <Form onSubmit={handleSubmit((data) => reCalculate(data))} className="p-1">
	//         {filledArray.map((item, index) => {
	//           let cellAddress = item + (index + 1).toString();
	//     //      console.log(cellAddress);
	//           return <ActiveCell
	//             key={index}
	//             cellAddress={cellAddress}
	//             cellCalculatedData={calculatedData[cellAddress]}
	//           />
	//         })}
	//              <Button
	//           variant="outline-secondary"
	//           type="submit"
	//           size="sm"
	//           block
	//         >
	//           fx
	//           </Button>
	//         {/* <input  /> */}
	//       </Form>
	//     </FormProvider>
	//   );
	// }

	// function ActiveCell({ cellAddress, cellCalculatedData }) {
	//   const methods = useFormContext();
	//   return <Form.Group controlId={"formBasicEmail" + cellAddress}>
	//     <Form.Label className="small text-muted">{!cellCalculatedData ? cellAddress : cellAddress + ":   " + cellCalculatedData}</Form.Label>
	//     <Form.Control
	//       {...methods.register(cellAddress)}
	//       //   name={cellAddress}
	//       type="textarea"
	//       rows="3"
	//     />
	//     {/* <Form.Text className="text-muted">Пример: =NPV(0.1;100,200,300)-500</Form.Text> */}
	//   </Form.Group>
	// }

	//import "./Spreadsheet.css";

	function NumbersColumns(props) {
	  const numbersColumns = [];
	  for (let y = 1; y < props.y + 1; y += 1) {
	    numbersColumns.push(/*#__PURE__*/React$1.createElement("div", {
	      key: y,
	      className: "cells__number"
	    }, y));
	  }
	  return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, numbersColumns);
	}

	let {
	  alphabet
	} = basicfirebasecrudauthservices;

	//import { alphabet } from "../features/spreadsheet/AlphabetRow";

	let {
	  Table
	} = ReactBootstrap;
	function ShowXlTableArrayOfArrays({
	  xlArray
	}) {
	  return /*#__PURE__*/React$1.createElement(Table, {
	    striped: true,
	    bordered: true,
	    hover: true
	  }, /*#__PURE__*/React$1.createElement("thead", null, /*#__PURE__*/React$1.createElement("tr", null, /*#__PURE__*/React$1.createElement("th", null, " "), xlArray[0].map((column, columnIndex) => /*#__PURE__*/React$1.createElement("th", {
	    key: columnIndex,
	    className: "text-center"
	  }, alphabet[columnIndex])))), /*#__PURE__*/React$1.createElement("tbody", null, xlArray.map((row, rowIndex) => /*#__PURE__*/React$1.createElement("tr", {
	    key: rowIndex
	  }, /*#__PURE__*/React$1.createElement("td", null, " ", /*#__PURE__*/React$1.createElement("small", {
	    className: "ml-1"
	  }, rowIndex + 1)), row.map((column, columnIndex) => /*#__PURE__*/React$1.createElement("td", {
	    key: rowIndex + columnIndex
	  }, /*#__PURE__*/React$1.createElement("small", null, row[columnIndex])))))));
	}

	//import firebase from "gatsby-plugin-firebase";

	let {
	  getFirebaseNode
	} = basicfirebasecrudauthservices;
	function useFirebaseNode(url, options) {
	  const [status, setStatus] = React$1.useState({
	    loading: false,
	    data: undefined,
	    error: undefined
	  });
	  function fetchNow(url, options) {
	    setStatus({
	      loading: true
	    });
	    getFirebaseNode({
	      url: url,
	      type: "object"
	    })
	    // firebase
	    //   .database()
	    //   .ref(url)
	    //   .once("value")
	    .then(res => {
	      setStatus({
	        loading: false,
	        data: res
	      });
	    })
	    // .then(snapshot => {
	    //   setStatus({ loading: false, data: snapshot.val() });
	    // })
	    .catch(error => {
	      setStatus({
	        loading: false,
	        error
	      });
	    });
	  }
	  React$1.useEffect(() => {
	    if (url) {
	      fetchNow(url);
	    }
	  }, []);
	  return {
	    ...status,
	    fetchNow
	  };
	}

	//import { useForm } from "react-hook-form";

	//const { useForm } = window.ReactHookForm;

	let {
	  getFirebaseNodeKey: getFirebaseNodeKey$1,
	  updateFirebaseNode: updateFirebaseNode$1
	} = basicfirebasecrudauthservices;
	let {
	  Modal: Modal$1,
	  Container: Container$1,
	  Row,
	  Col,
	  Image,
	  InputGroup: InputGroup$1,
	  FormControl: FormControl$1,
	  Button: Button$2,
	  Media,
	  Alert: Alert$1,
	  ButtonGroup: ButtonGroup$2
	} = ReactBootstrap;

	// import UniFormLayout from "../../components/UniFormLayout";

	function PostsButtonGroup(props) {
	  const dispatch = useDispatch();
	  const [showSave, setShowSave] = React$1.useState(false);
	  const [showOpen, setShowOpen] = React$1.useState(false);
	  const handleClose = () => {
	    setShowSave(false);
	    setShowOpen(false);
	  };
	  const handleSaveShow = () => setShowSave(true);
	  const handleOpenShow = () => setShowOpen(true);
	  return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, /*#__PURE__*/React$1.createElement(ButtonGroup$2, {
	    "aria-label": "Posts Buttons",
	    size: "sm"
	  }, /*#__PURE__*/React$1.createElement(Button$2, {
	    variant: "outline-secondary",
	    onClick: () => dispatch(new_empty_spreadsheet()),
	    "data-toggle": "tooltip",
	    "data-placement": "bottom",
	    title: "\u041D\u043E\u0432\u044B\u0439 \u0440\u0430\u0441\u0447\u0435\u0442"
	  }, "\u041D\u043E\u0432"), /*#__PURE__*/React$1.createElement(Button$2, {
	    variant: "outline-secondary",
	    onClick: () => handleSaveShow(),
	    "data-toggle": "tooltip",
	    "data-placement": "bottom",
	    title: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0440\u0430\u0441\u0447\u0435\u0442"
	  }, "\u0421\u043E\u0445\u0440"), /*#__PURE__*/React$1.createElement(Button$2, {
	    variant: "outline-secondary",
	    onClick: () => handleOpenShow(),
	    "data-toggle": "tooltip",
	    "data-placement": "bottom",
	    title: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0440\u0430\u0441\u0447\u0435\u0442"
	  }, "\u041E\u0442\u043A\u0440"), /*#__PURE__*/React$1.createElement(Button$2, {
	    variant: "outline-secondary",
	    onClick: () => props.toggle_expand_view(!props.expandView),
	    "data-toggle": "tooltip",
	    "data-placement": "bottom",
	    title: props.expandView ? "Свернуть расчет" : "Развернуть расчет"
	  }, props.expandView ? "Сверн" : "Разв")), showSave ? /*#__PURE__*/React$1.createElement(SavePostModal, {
	    show: showSave,
	    handleClose: handleClose,
	    quizString: props?.quizString,
	    title: props?.title,
	    answer: props?.answer,
	    theme: props?.theme,
	    answerIsRight: props?.answerIsRight
	  }) : null, showOpen ? /*#__PURE__*/React$1.createElement(SelectAndOpenModal, {
	    show: showOpen,
	    handleClose: handleClose
	  }) : null);
	}
	function SavePostModal(props) {
	  const dispatch = useDispatch();
	  const content = useSelector(selectSpreadsheetProtoData);
	  const email = useSelector(selectApplication).email;
	  const user = useSelector(selectApplication).user;
	  const avatarUrl = useSelector(selectApplication)?.avatarUrl;
	  const [savedSuccessfully, DoSavedSuccessfully] = React$1.useState(false);
	  const [formDataObject, setFormDataObject] = React$1.useState({
	    title: "",
	    comment: ""
	  });
	  const [editPostTitleComment, doEditPostTitleComment] = React$1.useState(true);
	  function setFormObject(objectWithNamesValues) {
	    doEditPostTitleComment(false);
	    setFormDataObject(objectWithNamesValues);
	  }
	  function savePost() {
	    if (email.length > 6) {
	      let userEmail = email.replace(/[^a-zA-Z0-9]/g, "_");
	      let idPost = getFirebaseNodeKey$1('/usersTemplates/posts/');
	      // firebase.database().ref('/usersTemplates/posts/').push().key;

	      let postObject = {
	        id: idPost,
	        title: formDataObject.title.length > 2 ? formDataObject.title : props?.title,
	        theme: "Мои шаблоны",
	        answer: "",
	        comment: formDataObject.comment,
	        //Тема
	        type: "spreadsheet",
	        content: createProtoObject(content),
	        quizString: "",
	        //!!props?.quizString ? props.quizString : "",
	        deleted: false,
	        email: email,
	        user: user,
	        avatarUrl: !!avatarUrl ? avatarUrl : null,
	        date: new Intl.DateTimeFormat("ru", {
	          weekday: "short",
	          year: "numeric",
	          month: "short",
	          day: "numeric",
	          hour: "numeric",
	          minute: "numeric"
	        }).format(new Date()) //Date().toJSON()
	      };
	      dispatch(createPost(postObject));
	      var updates = {};
	      updates['/usersCraft/' + userEmail + '/posts/' + idPost] = postObject;
	      updates['/usersTemplates/posts/' + idPost] = postObject;
	      // updates['/currentDay/' + currentDay + '/posts/' + idPost] = currentDayObject;
	      // updates['/posts/' + user +  newPostKey] = postData;
	      // updates['/user-posts/' + uid + '/' + newPostKey] = postData;
	      return updateFirebaseNode$1(updates)
	      //   firebase.database().ref().update(updates)
	      .then(() => DoSavedSuccessfully(true));
	    }
	  }
	  return /*#__PURE__*/React$1.createElement(Modal$1, {
	    size: "lg",
	    show: props.show,
	    onHide: props.handleClose
	  }, /*#__PURE__*/React$1.createElement(Modal$1.Header, {
	    closeButton: true
	  }, /*#__PURE__*/React$1.createElement(Modal$1.Title, null, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0440\u0430\u0441\u0447\u0435\u0442 \u043A\u0430\u043A \u0428\u0430\u0431\u043B\u043E\u043D")), /*#__PURE__*/React$1.createElement(Modal$1.Body, null, /*#__PURE__*/React$1.createElement(Alert$1, {
	    variant: "primary"
	  }, /*#__PURE__*/React$1.createElement(Alert$1.Heading, null, "\u0421\u043A\u043E\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043E, \u0432\u0430\u043C \u043D\u0435 \u043D\u0443\u0436\u043D\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u044D\u0442\u043E\u0439 \u0444\u0443\u043D\u043A\u0446\u0438\u0435\u0439"), /*#__PURE__*/React$1.createElement("p", {
	    className: "mb-1"
	  }, "\u0420\u0430\u0441\u0447\u0435\u0442\u044B-\u0442\u0430\u0431\u043B\u0438\u0446\u044B \u043F\u043E \u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u0440\u0435\u0448\u0435\u043D\u043D\u044B\u043C \u0437\u0430\u0434\u0430\u0447\u0430\u043C \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u044E\u0442\u0441\u044F \u0432 \u0420\u0430\u0431\u043E\u0447\u0435\u0439 \u0442\u0435\u0442\u0440\u0430\u0434\u0438 \u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438")), editPostTitleComment ?
	  /*#__PURE__*/
	  // <UniFormLayout schema={schema} setFormObject={setFormObject} model={{ title: props?.title }} />
	  React$1.createElement(PostFormHook, {
	    title: !!props.title ? props.title : '',
	    setFormObject: setFormObject
	  }) : /*#__PURE__*/React$1.createElement(Card, null, /*#__PURE__*/React$1.createElement(Card.Header, null, "\u0428\u0430\u0431\u043B\u043E\u043D"), /*#__PURE__*/React$1.createElement(Card.Body, null, /*#__PURE__*/React$1.createElement(Card.Title, null, formDataObject.title), /*#__PURE__*/React$1.createElement(Card.Text, null, formDataObject.comment), /*#__PURE__*/React$1.createElement(ShowXlTableArrayOfArrays, {
	    xlArray: createProtoArray$1(createProtoObject(content), 0, 0)
	  }), savedSuccessfully ? "Сохранено" : /*#__PURE__*/React$1.createElement(Button$2, {
	    variant: "outline-secondary",
	    onClick: () => savePost()
	  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D")))));
	}
	function PostFormHook(props) {
	  const titleRef = React$1.useRef(null);
	  const commentRef = React$1.useRef(null);
	  const handleSubmit = e => {
	    e.preventDefault();
	    const data = {
	      title: titleRef.current?.value || '',
	      comment: commentRef.current?.value || ''
	    };
	    props.setFormObject(data);
	  };

	  // Update title when props.title changes
	  React$1.useEffect(() => {
	    if (titleRef.current && props.title !== undefined) {
	      titleRef.current.value = props.title;
	    }
	  }, [props.title]);
	  return /*#__PURE__*/React$1.createElement("form", {
	    onSubmit: handleSubmit
	  }, /*#__PURE__*/React$1.createElement(InputGroup$1, {
	    className: "mb-3",
	    size: "sm"
	  }, /*#__PURE__*/React$1.createElement(InputGroup$1.Prepend, null, /*#__PURE__*/React$1.createElement(InputGroup$1.Text, {
	    style: {
	      width: '8rem'
	    }
	  }, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")), /*#__PURE__*/React$1.createElement(FormControl$1, {
	    name: "title",
	    type: "text",
	    ref: titleRef,
	    defaultValue: props.title || ''
	  })), /*#__PURE__*/React$1.createElement(InputGroup$1, {
	    className: "mb-3",
	    size: "sm"
	  }, /*#__PURE__*/React$1.createElement(InputGroup$1.Prepend, null, /*#__PURE__*/React$1.createElement(InputGroup$1.Text, {
	    style: {
	      width: '8rem'
	    }
	  }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439")), /*#__PURE__*/React$1.createElement(FormControl$1, {
	    name: "comment",
	    type: "textarea",
	    as: "textarea",
	    ref: commentRef,
	    defaultValue: ""
	  })), /*#__PURE__*/React$1.createElement(Button$2, {
	    variant: "outline-secondary",
	    type: "submit",
	    size: "sm"
	  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"));
	}

	// function PostFormHook(props) {
	//   const { register, handleSubmit, reset } = useForm({
	//     defaultValues: { title: props.title }
	//   }); //, watch, errors

	//   useEffect(() => { reset({ title: props.title }) }, [props.title]);

	//   return <form onSubmit={handleSubmit(props.setFormObject)}>
	//     {modalForm.map(item =>
	//       <InputGroup className="mb-3" size="sm" key={item.name}>
	//         <InputGroup.Prepend><InputGroup.Text style={{ width: '8rem' }}>{item.title}</InputGroup.Text></InputGroup.Prepend>
	//         <FormControl
	//           key={item.name}
	//           type={item.type}
	//           {...register(item.name)} 

	//           as={item.type === "textarea" ? "textarea" : "input"}
	//         />
	//       </InputGroup>
	//     )}
	//     <Button variant="outline-secondary" type="submit" size="sm">Сохранить</Button>
	//   </form>
	// }

	function SelectAndOpenModal(props) {
	  const email = useSelector(selectApplication).email;
	  let userEmail = email.replace(/[^a-zA-Z0-9]/g, "_");
	  // const [filter, setFilter] = useState("");
	  const [selectedTheme, setSelectedTheme] = React$1.useState("");
	  const dispatch = useDispatch();
	  const {
	    data: userPosts,
	    loading,
	    error
	  } = useFirebaseNode("usersCraft/" + userEmail + "/posts/");
	  function closeModalopenSpreadsheet(content, title) {
	    //  console.log(content)
	    dispatch(load_data({
	      protoData: content
	    }));
	    dispatch(set_spreadsheetTitle({
	      spreadsheetTitle: title
	    }));
	    setTimeout(props.handleClose(), 3000);
	  }
	  if (!!loading || !userPosts) {
	    return /*#__PURE__*/React$1.createElement("div", null, "...");
	  }
	  if (!!error) {
	    return /*#__PURE__*/React$1.createElement("div", null, ":-(");
	  }
	  let data = Object.keys(userPosts).map(item => userPosts[item]).filter(quiz => quiz.type === "spreadsheet").filter(post => !post.deleted);
	  const uniqueThemes = !!data ? [...new Set(data.map(item => item.theme))] : []; // [ 'A', 'B']

	  return /*#__PURE__*/React$1.createElement(Modal$1, {
	    size: "lg",
	    show: props.show,
	    onHide: props.handleClose
	  }, /*#__PURE__*/React$1.createElement(Modal$1.Header, {
	    closeButton: true
	  }, /*#__PURE__*/React$1.createElement(Modal$1.Title, null, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0440\u0430\u0441\u0447\u0435\u0442")), /*#__PURE__*/React$1.createElement(Modal$1.Body, null, !!uniqueThemes && uniqueThemes.map(theme => /*#__PURE__*/React$1.createElement(Button$2, {
	    key: theme,
	    variant: "outline-secondary",
	    onClick: () => setSelectedTheme(theme)
	    // data-toggle="tooltip"
	    // data-placement="bottom"
	    // title="Сохранить расчет"
	    ,
	    className: "m-1",
	    size: "sm"
	  }, theme)), /*#__PURE__*/React$1.createElement(Container$1, null, data.filter(quiz => quiz.theme === selectedTheme).map((calc, index) =>
	  /*#__PURE__*/
	  // {data.map(calc =>
	  React$1.createElement(Row, {
	    className: "justify-content-md-center",
	    key: index
	  }, /*#__PURE__*/React$1.createElement(Col, {
	    md: "auto"
	  }, /*#__PURE__*/React$1.createElement(Button$2, {
	    variant: "outline-secondary",
	    size: "sm",
	    onClick: () => closeModalopenSpreadsheet(createProtoArray$1(calc.content), calc.title)
	  }, "\u041E\u0442\u043A\u0440")), /*#__PURE__*/React$1.createElement(Col, null, calc.title), /*#__PURE__*/React$1.createElement(Col, null, calc.comment))))));
	}

	function useMedia(queries, values, defaultValue) {
	  // Array containing a media query list for each query

	  const isSSR = typeof window === "undefined";
	  const mediaQueryLists = isSSR ? [] : queries.map(q => window.matchMedia(q));

	  // Function that gets value based on matching media query
	  const getValue = () => {
	    // Get index of first media query that matches
	    const index = mediaQueryLists.findIndex(mql => mql.matches);
	    // Return related value or defaultValue if none
	    return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
	  };

	  // State and setter for matched value
	  const [value, setValue] = React$1.useState(getValue);
	  React$1.useEffect(() => {
	    // Event listener callback
	    // Note: By defining getValue outside of useEffect we ensure that it has ...
	    // ... current values of hook args (as this hook callback is created once on mount).
	    const handler = () => setValue(getValue);
	    // Set a listener for each media query with above handler as callback.
	    mediaQueryLists.forEach(mql => mql.addListener(handler));
	    // Remove listeners on cleanup
	    return () => mediaQueryLists.forEach(mql => mql.removeListener(handler));
	  }, [] // Empty array ensures effect is only run on mount and unmount
	  );
	  return value;
	}

	let {
	  Alert,
	  ButtonGroup: ButtonGroup$1,
	  Button: Button$1,
	  Form: Form$1,
	  Modal
	} = ReactBootstrap;

	//function makeArray(string) { return string.split("/n").map((line) => line.split("/t")); }

	function SpreadsheetLayout(props) {
	  const [expandView, toggle_expand_view] = React$1.useState(false);
	  const dispatch = useDispatch();
	  const data = useSelector(selectSpreadsheetData);
	  const title = useSelector(selectSpreadsheetTitle);
	  const userProfile = useSelector(selectApplication);
	  //const [clipboard, setClipboard] = useClippy();
	  //let sheetclip = new SheetClip();

	  const screenSize = useMedia(
	  // Media queries
	  ["(min-width: 810px)", "(min-width: 400px)", "(min-width: 100px)"],
	  // Column counts (relates to above media queries by array index)
	  ["large", "medium", "small"],
	  // Default column count
	  "large");

	  //  console.log(screenSize);

	  let numberOfX = data[0].length - 1;
	  let numberOfY = data.length;

	  //  console.log(title);

	  if (screenSize === "small") {
	    return /*#__PURE__*/React$1.createElement(CompactSpreadsheetLayout, {
	      screenSize: screenSize
	    });
	    //    return <SmallScreenCalculations />;
	  }

	  // if (screenSize === 'medium') { return <MediumCalculations /> }

	  if (screenSize === "medium") {
	    // if (data.length > 3) {
	    //   dispatch(
	    //     load_data({
	    //       protoData: [[""], [""], [""], [""], [""], [""], [""], [""]],
	    //     })
	    //   );
	    // }

	    return /*#__PURE__*/React$1.createElement(CompactSpreadsheetLayout, {
	      screenSize: screenSize
	    });

	    //    return <CompactSpreadsheetLayout />;
	  }
	  return /*#__PURE__*/React$1.createElement("div", null, /*#__PURE__*/React$1.createElement("div", {
	    className: "excelstyle"
	  }, /*#__PURE__*/React$1.createElement("div", {
	    className: "title",
	    style: {
	      display: "flex",
	      justifyContent: "space-between",
	      padding: ".4rem"
	    }
	  }, userProfile?.avatarUrl && userProfile.avatarUrl.length > 10 ? /*#__PURE__*/React$1.createElement("img", {
	    src: userProfile.avatarUrl,
	    alt: "",
	    style: {
	      verticalAlign: "middle",
	      width: "30px",
	      height: "30px",
	      borderRadius: "50%",
	      filter: "grayscale(100%)",
	      objectFit: "cover"
	    }
	  }) : null, !!title ? /*#__PURE__*/React$1.createElement("span", {
	    style: {
	      marginLeft: "1rem"
	    }
	  }, title) : /*#__PURE__*/React$1.createElement("span", null, "Calc"), /*#__PURE__*/React$1.createElement(LoginLogout, null)), /*#__PURE__*/React$1.createElement("div", {
	    className: "icon-bar"
	  }, !!userProfile?.email ? /*#__PURE__*/React$1.createElement(PostsButtonGroup, {
	    expandView: expandView,
	    toggle_expand_view: toggle_expand_view,
	    quizString: props?.quizString,
	    title: props?.title,
	    answer: props?.answer,
	    theme: props?.theme,
	    answerIsRight: props?.answerIsRight
	  }) : /*#__PURE__*/React$1.createElement(ButtonGroup$1, {
	    "aria-label": "Posts Buttons",
	    size: "sm"
	  }, /*#__PURE__*/React$1.createElement(Button$1, {
	    variant: "outline-secondary",
	    onClick: () => dispatch(new_empty_spreadsheet()),
	    "data-toggle": "tooltip",
	    "data-placement": "bottom",
	    title: "\u041D\u043E\u0432\u044B\u0439 \u0440\u0430\u0441\u0447\u0435\u0442"
	  }, "\u041D\u043E\u0432"), /*#__PURE__*/React$1.createElement(Button$1, {
	    variant: "outline-secondary",
	    onClick: () => toggle_expand_view(!expandView),
	    "data-toggle": "tooltip",
	    "data-placement": "bottom",
	    title: expandView ? "Свернуть расчет" : "Развернуть расчет"
	  }, expandView ? "Сверн" : "Разв")), /*#__PURE__*/React$1.createElement(ButtonGroup$1, {
	    "aria-label": "Rows Buttons",
	    size: "sm"
	  }, /*#__PURE__*/React$1.createElement(Button$1, {
	    variant: "outline-secondary",
	    "data-toggle": "tooltip",
	    "data-placement": "bottom",
	    title: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u0440\u043E\u043A\u0443 \u043D\u0438\u0436\u0435",
	    onClick: () => dispatch(add_row_under())
	  }, "+_"), /*#__PURE__*/React$1.createElement(Button$1, {
	    variant: "outline-secondary",
	    "data-toggle": "tooltip",
	    "data-placement": "bottom",
	    title: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u0440\u043E\u043A\u0443 \u0432\u044B\u0448\u0435",
	    onClick: () => dispatch(add_row_before())
	  }, "+-"), /*#__PURE__*/React$1.createElement(Button$1, {
	    variant: "outline-secondary",
	    "data-toggle": "tooltip",
	    "data-placement": "bottom",
	    title: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u0443 \u0441\u0442\u0440\u043E\u043A\u0443",
	    onClick: () => dispatch(delete_row())
	  }, "x-")), /*#__PURE__*/React$1.createElement(ButtonGroup$1, {
	    "aria-label": "Columns Buttons",
	    size: "sm"
	  }, /*#__PURE__*/React$1.createElement(Button$1, {
	    variant: "outline-secondary",
	    "data-toggle": "tooltip",
	    "data-placement": "bottom",
	    title: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043B\u043E\u043D\u043A\u0443 \u0441\u043F\u0440\u0430\u0432\u0430",
	    onClick: () => dispatch(add_column_after())
	  }, "+|"), /*#__PURE__*/React$1.createElement(Button$1, {
	    variant: "outline-secondary",
	    "data-toggle": "tooltip",
	    "data-placement": "bottom",
	    title: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043B\u043E\u043D\u043A\u0443 \u0441\u043B\u0435\u0432\u0430",
	    onClick: () => dispatch(add_column_before())
	  }, "|+"), /*#__PURE__*/React$1.createElement(Button$1, {
	    variant: "outline-secondary",
	    "data-toggle": "tooltip",
	    "data-placement": "bottom",
	    title: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u0443 \u043A\u043E\u043B\u043E\u043D\u043A\u0443",
	    onClick: () => dispatch(delete_column())
	  }, "x|")), !!userProfile?.email ? /*#__PURE__*/React$1.createElement(ButtonGroup$1, {
	    "aria-label": "Workbook Buttons",
	    size: "sm"
	  }, /*#__PURE__*/React$1.createElement(Button$1, {
	    variant: "outline-secondary",
	    "data-toggle": "tooltip",
	    "data-placement": "bottom",
	    title: "\u0420\u0430\u0431\u043E\u0447\u0430\u044F \u0442\u0435\u0442\u0440\u0430\u0434\u044C"
	  }, /*#__PURE__*/React$1.createElement("a", {
	    href: "../myworkbook",
	    target: "_blank"
	  }, "\u0420\u0422"))) : null), /*#__PURE__*/React$1.createElement(FormulaBlock, null), expandView ? /*#__PURE__*/React$1.createElement("div", {
	    className: "cells",
	    style: {
	      gridTemplateColumns: `40px repeat(${numberOfX + 1}, calc((100% - 50px) / ${numberOfX + 1}))`,
	      gridTemplateRows: `repeat(${numberOfY}, 25px)`
	    }
	  }, /*#__PURE__*/React$1.createElement("div", {
	    className: "cells__spacer"
	  }), /*#__PURE__*/React$1.createElement(AlphabetRow, {
	    x: numberOfX
	  }), /*#__PURE__*/React$1.createElement(NumbersColumns, {
	    y: numberOfY
	  }), /*#__PURE__*/React$1.createElement(ActiveCells, null)) : null));
	}
	function ActiveCells() {
	  const data = useSelector(selectSpreadsheetData);
	  //  selectSpreadsheetFormulaValue,
	  const formulaRowIndex = useSelector(selectSpreadsheetFormulaRowIndex);
	  const formulaColumnIndex = useSelector(selectSpreadsheetFormulaColumnIndex);
	  return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, data.map((row, rowIndex) => {
	    return row.map((column, columnIndex) => {
	      return /*#__PURE__*/React$1.createElement(Cell, {
	        key: "" + rowIndex + "_" + columnIndex,
	        rowIndex: rowIndex,
	        columnIndex: columnIndex,
	        active: formulaRowIndex === rowIndex && formulaColumnIndex === columnIndex ? true : false
	      });
	    });
	  }));
	}
	function Cell(props) {
	  const data = useSelector(selectSpreadsheetData)[props.rowIndex][props.columnIndex];
	  const proDataValue = useSelector(selectSpreadsheetProtoData)[props.rowIndex][props.columnIndex];
	  const dispatch = useDispatch();
	  const [value, setValue] = React$1.useState(data);
	  React$1.useEffect(() => {
	    setValue(data);
	  }, [data]);
	  function onKeyPressOnInput(e) {
	    if (e.key === "Enter") {
	      let valueChecked = isNaN(value) ? !!value ? value : "" : +value;
	      dispatch(update_data({
	        rowIndex: props.rowIndex,
	        columnIndex: props.columnIndex,
	        value: valueChecked
	      }));
	      dispatch(update_formula({
	        rowIndex: props.rowIndex,
	        columnIndex: props.columnIndex,
	        value: !!value ? value : ""
	      }));
	    }
	  }
	  function clicked() {
	    dispatch(update_formula({
	      rowIndex: props.rowIndex,
	      columnIndex: props.columnIndex,
	      value: proDataValue
	    }));
	  }
	  return /*#__PURE__*/React$1.createElement("input", {
	    type: "text",
	    className: props.active ? "cells__input__active" : "cells__input",
	    value: value,
	    onChange: e => setValue(e.target.value),
	    onClick: () => clicked(),
	    onKeyPress: e => onKeyPressOnInput(e)
	  });
	}
	function FormulaBlock() {
	  const formulaValue = useSelector(selectSpreadsheetFormulaValue);
	  const formulaRowIndex = useSelector(selectSpreadsheetFormulaRowIndex);
	  const formulaColumnIndex = useSelector(selectSpreadsheetFormulaColumnIndex);
	  const [formula, setFormula] = React$1.useState("");
	  const dispatch = useDispatch();
	  React$1.useEffect(() => {
	    setFormula(formulaValue);
	  }, [formulaValue]);
	  function onKeyPressOnInput(e) {
	    if (e.key === "Enter") {
	      handleSubmit();
	    }
	  }
	  function handleSubmit() {
	    let valueChecked = isNaN(formula) ? !!formula ? formula.trim() : "" : +formula;
	    dispatch(update_data({
	      rowIndex: formulaRowIndex,
	      columnIndex: formulaColumnIndex,
	      value: valueChecked
	    }));
	    //   setFormula("");
	  }
	  return /*#__PURE__*/React$1.createElement("div", {
	    className: "cell-content"
	  }, /*#__PURE__*/React$1.createElement("div", null, "fx"), /*#__PURE__*/React$1.createElement(Button$1, {
	    onClick: () => handleSubmit(),
	    variant: "outline-secondary",
	    size: "sm"
	  }, /*#__PURE__*/React$1.createElement("span", null, "\u2713")), /*#__PURE__*/React$1.createElement("div", null, /*#__PURE__*/React$1.createElement("input", {
	    style: {
	      width: "100%",
	      border: "none",
	      outline: "none",
	      marginLeft: "3px",
	      fontSize: "1.2rem"
	    },
	    value: formula === "" ? formulaValue : formula,
	    onChange: e => setFormula(e.target.value),
	    onKeyPress: e => onKeyPressOnInput(e)
	  })));
	}

	let {
	  getFirebaseNodeKey,
	  updateFirebaseNode,
	  createNewDraft,
	  createProtoArray
	} = basicfirebasecrudauthservices;

	//import * as qSets from "../laboratory2021/quizesSets";

	let {
	  Card: Card$1,
	  Button,
	  InputGroup,
	  FormControl,
	  Form,
	  ButtonGroup,
	  Navbar
	} = ReactBootstrap;
	function doCalculate(formula) {
	  console.log(formula);
	  let calculatedResult = null;
	  try {
	    calculatedResult = createNewDraft([["=" + formula]])[0][0];
	    //  console.log(calculatedResult);
	    //  setResult(calculatedResult);
	  } catch (err) {
	    calculatedResult = "Ошибка в формуле. Проверьте правильность ввода";
	    //  setResult(null);
	  }
	  return calculatedResult;
	}
	function extract([beg, end]) {
	  const matcher = new RegExp(`${beg}(.*?)${end}`, "gm");
	  const normalise = str => str.slice(beg.length, end.length * -1);
	  return function (str) {
	    return str.match(matcher).map(normalise);
	  };
	}
	function GetChartForQuiz({
	  laboratoryChart
	}) {
	  const [chart, setChart] = React$1.useState(null);
	  React$1.useEffect(() => {
	    setChart(laboratoryChart);
	  }, [laboratoryChart]);

	  // console.log(laboratoryChart);
	  if (!!chart && !!laboratoryChart.toString().includes("beta")) {
	    return /*#__PURE__*/React$1.createElement(ScatterChartAbstractBetaCases, {
	      type: laboratoryChart
	    });
	  }
	  return null;
	}
	function QuizCardWithStorage(props) {
	  // const { ref, inView, entry } = useInView({ threshold: 0, triggerOnce: true});

	  if (props?.type === "OneRandomManyAnswers") {
	    return /*#__PURE__*/React$1.createElement(OneRandomManyAnswers, props);
	  }
	  console.log(props);
	  return /*#__PURE__*/React$1.createElement("div", null, !!props?.set ? /*#__PURE__*/React$1.createElement(QuizSet, props) : /*#__PURE__*/React$1.createElement(SingleQuizCardWithStorage, props));
	}
	function OneRandomManyAnswers(props) {
	  return /*#__PURE__*/React$1.createElement("div", null, /*#__PURE__*/React$1.createElement("h1", null, props.setTitle), /*#__PURE__*/React$1.createElement("div", {
	    className: "mb-4"
	  }, "\u0422\u0435\u0441\u0442\u044B"), /*#__PURE__*/React$1.createElement("hr", null));
	}
	function isObject(value) {
	  return value !== null && typeof value === "object";
	}
	function QuizSet({
	  set,
	  setTitle,
	  quizesIds = []
	}) {
	  const [state, localDispatch] = React$1.useReducer(caseReducer, {
	    selectedQuiz: 0,
	    loading: false,
	    currentPage: 0,
	    itemsPerPage: 7,
	    showQuizResults: false
	  });
	  console.log(quizesIds);

	  //  const [selectedQuiz, setSelectedQuiz] = useState(0);
	  //  const [loading, setLoading] = useState(false);

	  function onPreviousPageClick() {
	    if (state.currentPage < 1) {
	      localDispatch({
	        type: "SEED_STATE",
	        payload: {
	          objects: {
	            currentPage: 0
	          }
	        }
	      });
	    } else {
	      localDispatch({
	        type: "SEED_STATE",
	        payload: {
	          objects: {
	            currentPage: state.currentPage - 1
	          }
	        }
	      });
	    }
	  }
	  function onNextPageClick() {
	    console.log(state.currentPage, pagesCount);
	    if (state.currentPage + 2 > pagesCount) return;
	    localDispatch({
	      type: "SEED_STATE",
	      payload: {
	        objects: {
	          currentPage: state.currentPage + 1
	        }
	      }
	    });
	  }
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
	    setTimeout(() => {
	      localDispatch({
	        type: "SEED_STATE",
	        payload: {
	          objects: {
	            loading: false
	          }
	        }
	      });
	    }, 475);
	  }

	  // function doSelectQuiz(index) {
	  //   setLoading(true);
	  //   setSelectedQuiz(index);
	  //   setLoading(false);
	  // }

	  const pagesCount = Math.ceil(quizesIds.length / state.itemsPerPage);
	  console.log(pagesCount);
	  const isCurrentPageFirst = state.currentPage === 0;
	  console.log(isCurrentPageFirst);
	  const isCurrentPageLast = state.currentPage === pagesCount - 1;
	  console.log(isCurrentPageLast);
	  let quizprops = window.quizesSets[state.selectedQuiz]; // qSets[set]
	  console.log(quizprops);
	  if (quizesIds.length > 10) {
	    // qSets[set].length

	    let items = [];
	    for (let index = state.currentPage * state.itemsPerPage; index < state.currentPage * state.itemsPerPage + state.itemsPerPage && index < quizesIds.length - 1; index++) {
	      items.push(/*#__PURE__*/React$1.createElement(Button, {
	        variant: index === state.selectedQuiz ? "outline-primary" : "outline-secondary",
	        onClick: () => doSelectQuiz(index),
	        key: index
	      },
	      //    qSets[set].length
	      quizesIds.length < 10 ? /*#__PURE__*/React$1.createElement("span", {
	        className: "m-2"
	      }, index + 1) : /*#__PURE__*/React$1.createElement("small", null, index + 1)));
	    }
	    return /*#__PURE__*/React$1.createElement("div", null, /*#__PURE__*/React$1.createElement(Navbar, {
	      bg: "light"
	    }, /*#__PURE__*/React$1.createElement(Navbar.Brand, null, setTitle)), /*#__PURE__*/React$1.createElement("br", null), /*#__PURE__*/React$1.createElement("div", {
	      className: "d-flex justify-content-end"
	    }, /*#__PURE__*/React$1.createElement(ButtonGroup, {
	      size: "sm",
	      className: "my-1"
	    }, /*#__PURE__*/React$1.createElement(Button, {
	      disabled: isCurrentPageFirst ? true : false,
	      variant: "outline-secondary",
	      onClick: () => onPreviousPageClick()
	    },
	    //    qSets[set].length
	    quizesIds.length < 10 ? /*#__PURE__*/React$1.createElement("span", {
	      className: "m-2"
	    }, "<<") : /*#__PURE__*/React$1.createElement("small", null, "<<")), items, /*#__PURE__*/React$1.createElement(Button, {
	      disabled: isCurrentPageLast ? true : false,
	      variant: "outline-secondary",
	      onClick: () => onNextPageClick()
	    },
	    //    qSets[set].length
	    quizesIds.length < 10 ? /*#__PURE__*/React$1.createElement("span", {
	      className: "m-2"
	    }, ">>") : /*#__PURE__*/React$1.createElement("small", null, ">>")))), /*#__PURE__*/React$1.createElement("hr", null), state.loading || !isObject(quizprops) ? /*#__PURE__*/React$1.createElement("div", null, "...") : /*#__PURE__*/React$1.createElement(QuizCardWithStorage, _extends({
	      key: state.selectedQuiz,
	      setId: state.selectedQuiz + 1
	    }, quizprops)));
	  }
	  return /*#__PURE__*/React$1.createElement("div", null, /*#__PURE__*/React$1.createElement(Navbar, {
	    bg: "light"
	  }, /*#__PURE__*/React$1.createElement(Navbar.Brand, null, setTitle)), /*#__PURE__*/React$1.createElement("br", null), /*#__PURE__*/React$1.createElement(ButtonGroup, {
	    size: quizesIds.length < 5 ? "lg" : "sm"
	    //  qSets[set].length < 5 ? "lg" : "sm"
	  }, quizesIds
	  // qSets[set]
	  .map((quiz, index // qSets[set]
	  ) => /*#__PURE__*/React$1.createElement(Button, {
	    variant: "outline-secondary",
	    onClick: () => doSelectQuiz(index),
	    key: index
	  },
	  //    qSets[set].length
	  quizesIds.length < 10 ? /*#__PURE__*/React$1.createElement("span", {
	    className: "m-2"
	  }, index + 1) : /*#__PURE__*/React$1.createElement("small", null, index + 1)))), state.loading || !isObject(quizprops) ? /*#__PURE__*/React$1.createElement("div", null, "...") : /*#__PURE__*/React$1.createElement(QuizCardWithStorage, _extends({
	    key: state.selectedQuiz,
	    setId: state.selectedQuiz + 1
	  }, quizprops)));
	}
	function shuffle(array) {
	  return array.sort(() => Math.random() - 0.5);
	}
	function SingleQuizCardWithStorage(props) {
	  const [show, setShow] = React$1.useState(false);
	  let randomNumber = Math.random() * 10;
	  if (props?.type == "casestatistics") {
	    return /*#__PURE__*/React$1.createElement(CaseStatistics, _extends({}, props, {
	      randomNumber: randomNumber
	    }));
	  }
	  if (props?.text.includes("{=")) {
	    return /*#__PURE__*/React$1.createElement(QuizWithRandomNumber, _extends({}, props, {
	      randomNumber: randomNumber
	    }));
	  }
	  if (!!props?.choices) {
	    let {
	      choices,
	      ...other
	    } = props;
	    return /*#__PURE__*/React$1.createElement(MultipleChoicesQuiz, _extends({
	      choices: shuffle(choices)
	    }, other));
	  }
	  const handleShow = () => setShow(true);
	  return /*#__PURE__*/React$1.createElement(Card$1, {
	    bg: "light",
	    style: {
	      width: "95%",
	      margin: "1rem"
	    },
	    key: props.key
	  }, /*#__PURE__*/React$1.createElement(Card$1.Header, {
	    onClick: handleShow
	  }, props.header), /*#__PURE__*/React$1.createElement(Card$1.Body, null, !!props.imageurl ? /*#__PURE__*/React$1.createElement(Card$1.Img, {
	    variant: "top",
	    src: props.imageurl
	  }) : null, /*#__PURE__*/React$1.createElement(Card$1.Title, null, props.title), /*#__PURE__*/React$1.createElement(Card$1.Text, null, ReactHtmlParser(props.text)), props.children));
	}
	function MultipleChoicesQuiz(props) {
	  const [show, setShow] = React$1.useState(false);
	  const [showAnswer, setShowAnswer] = React$1.useState(null);
	  const [answerIsRight, setAnswerIsRight] = React$1.useState(null);
	  const [value, setValue] = React$1.useState("");
	  const dispatch = useDispatch();
	  // const content = useSelector(selectSpreadsheetProtoData);
	  const email = useSelector(selectApplication).email;
	  const user = useSelector(selectApplication).user;
	  const avatarUrl = useSelector(selectApplication)?.avatarUrl;
	  const handleShow = () => setShow(true);
	  function handleCheckboxChange(event) {
	    // console.log(event.target.id);
	    // const target = event.target;
	    // const checked = target.checked;
	    // const name = target.name;
	    setValue(event.target.id);
	  }
	  function handleCheckAnswer() {
	    setShowAnswer(true);
	    if (value === props.answers[0]) {
	      setAnswerIsRight(true);
	      if (email.length > 6) {
	        let userEmail = email.replace(/[^a-zA-Z0-9]/g, "_");
	        let idPost = getFirebaseNodeKey("usersCraft/" + userEmail + "/posts");
	        // .push().key;
	        let currentDay = new Intl.DateTimeFormat("en", {
	          weekday: "short",
	          year: "numeric",
	          month: "short",
	          day: "numeric"
	        }).format(new Date()).replace(/[^a-zA-Z0-9]/g, "_");
	        let postObject = {
	          id: idPost,
	          //Math.floor(Math.random() * 1001),
	          title: props.title,
	          theme: props.theme,
	          answer: props.answers[0],
	          comment: props.title + " (" + props.theme + ")",
	          //Тема
	          type: "multiplechoices",
	          content: props.text,
	          quizString: props.text,
	          deleted: false,
	          email: email,
	          user: user,
	          avatarUrl: !!avatarUrl ? avatarUrl : "",
	          date: new Intl.DateTimeFormat("ru", {
	            weekday: "short",
	            year: "numeric",
	            month: "short",
	            day: "numeric",
	            hour: "numeric",
	            minute: "numeric"
	          }).format(new Date()) //Date().toJSON()
	        };
	        let currentDayObject = {
	          id: idPost,
	          title: props.title,
	          theme: props.theme,
	          email: email,
	          user: user,
	          avatarUrl: !!avatarUrl ? avatarUrl : null,
	          timestamp: +Date.now()
	        };
	        dispatch(createPost(postObject));
	        var updates = {};
	        updates["/usersCraft/" + userEmail + "/posts/" + idPost] = postObject;
	        updates["/currentDay/" + currentDay + "/posts/" + idPost] = currentDayObject;
	        // updates['/posts/' + user +  newPostKey] = postData;
	        // updates['/user-posts/' + uid + '/' + newPostKey] = postData;
	        return updateFirebaseNode(updates);
	        // firebase.database().ref().update(updates);
	      }
	    }
	  }
	  return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, /*#__PURE__*/React$1.createElement(Card$1, {
	    bg: "light",
	    style: {
	      width: "95%",
	      margin: "1rem"
	    }
	  }, /*#__PURE__*/React$1.createElement(Card$1.Header, {
	    onClick: handleShow
	  }, props.header), /*#__PURE__*/React$1.createElement(Card$1.Body, null, /*#__PURE__*/React$1.createElement(Card$1.Title, null, !!props?.setId ? props.setId : "", " ", props.title), !!props?.imageurl ? /*#__PURE__*/React$1.createElement(Card$1.Img, {
	    variant: "top",
	    src: props.imageurl
	  }) : null, !!props?.laboratoryChart ? /*#__PURE__*/React$1.createElement(GetChartForQuiz, {
	    laboratoryChart: props.laboratoryChart
	  }) : null, /*#__PURE__*/React$1.createElement(Card$1.Text, null, ReactHtmlParser(props.text)), /*#__PURE__*/React$1.createElement(Card$1.Text, null, /*#__PURE__*/React$1.createElement(Form.Group, {
	    controlId: "formBasicCheckbox"
	  }, props.choices.map((item, index) => /*#__PURE__*/React$1.createElement(Form.Check, {
	    key: index,
	    type: "radio" // "checkbox"
	    ,
	    label: item,
	    onChange: handleCheckboxChange,
	    name: "item",
	    id: item,
	    className: "mb-2"
	  }))))), /*#__PURE__*/React$1.createElement(InputGroup, {
	    size: "sm",
	    className: "p-1"
	  }, /*#__PURE__*/React$1.createElement(InputGroup.Prepend, null, showAnswer ? /*#__PURE__*/React$1.createElement(React$1.Fragment, null, /*#__PURE__*/React$1.createElement(InputGroup.Text, {
	    id: "basic-addon1"
	  }, /*#__PURE__*/React$1.createElement("span", {
	    style: {
	      maxWidth: "400px",
	      whiteSpace: "nowrap" /* Prevent text from wrapping */,
	      overflow: "hidden" /* Hide the extra text */,
	      textOverflow: "ellipsis"
	    },
	    className: answerIsRight ? "text-success" : "text-danger"
	  }, "Ответ: " + props.answers[0]))) : /*#__PURE__*/React$1.createElement(Button, {
	    variant: "outline-secondary",
	    onClick: handleCheckAnswer
	  }, "\u041E\u0442\u0432\u0435\u0442"))), !!props?.hint && showAnswer ? /*#__PURE__*/React$1.createElement("div", {
	    className: "text-secondary p-1"
	  }, ReactHtmlParser(props.hint)) :
	  // <ReactMarkdown source={props.hint} escapeHtml={false} /></div>
	  null));
	}
	function CaseStatistics(props) {
	  const [showAnswer, setShowAnswer] = React$1.useState(null);
	  const [answerIsRight, setAnswerIsRight] = React$1.useState(null);
	  const dispatch = useDispatch();
	  const content = useSelector(selectSpreadsheetProtoData);
	  const email = useSelector(selectApplication).email;
	  const user = useSelector(selectApplication).user;
	  const avatarUrl = useSelector(selectApplication)?.avatarUrl;
	  function handleCheckAnswer() {
	    setShowAnswer(true);
	    if (parseFloat(value) / parseFloat(answer) < 1.02 && parseFloat(value) / parseFloat(answer) > 0.98 || answer === 0 && value === 0) {
	      setAnswerIsRight(true);
	      if (email.length > 6) {
	        let userEmail = email.replace(/[^a-zA-Z0-9]/g, "_");
	        let idPost = getFirebaseNodeKey("usersCraft/" + userEmail + "/posts");
	        //    firebase.database().ref(userEmail).child("posts").push().key;
	        let currentDay = new Intl.DateTimeFormat("en", {
	          weekday: "short",
	          year: "numeric",
	          month: "short",
	          day: "numeric"
	        }).format(new Date()).replace(/[^a-zA-Z0-9]/g, "_");
	        let postObject = {
	          id: idPost,
	          //Math.floor(Math.random() * 1001),
	          title: props.title,
	          theme: props.theme,
	          answer: answer,
	          comment: props.title + " (" + props.theme + ")",
	          //Тема
	          type: "spreadsheet",
	          content: createProtoObject(content),
	          quizString: quizString,
	          deleted: false,
	          email: email,
	          user: user,
	          avatarUrl: !!avatarUrl ? avatarUrl : null,
	          date: new Intl.DateTimeFormat("ru", {
	            weekday: "short",
	            year: "numeric",
	            month: "short",
	            day: "numeric",
	            hour: "numeric",
	            minute: "numeric"
	          }).format(new Date()) //Date().toJSON()
	        };
	        let currentDayObject = {
	          id: idPost,
	          title: props.title,
	          theme: props.theme,
	          email: email,
	          user: user,
	          avatarUrl: !!avatarUrl ? avatarUrl : null,
	          timestamp: +Date.now()
	        };
	        dispatch(createPost(postObject));
	        var updates = {};
	        updates["/usersCraft/" + userEmail + "/posts/" + idPost] = postObject;
	        updates["/currentDay/" + currentDay + "/posts/" + idPost] = currentDayObject;
	        // updates['/posts/' + user +  newPostKey] = postData;
	        // updates['/user-posts/' + uid + '/' + newPostKey] = postData;
	        return updateFirebaseNode(updates);
	        // firebase.database().ref().update(updates);
	      }
	    }
	  }
	  return /*#__PURE__*/React$1.createElement(Card$1, {
	    bg: "light",
	    style: {
	      width: "95%",
	      margin: "1rem"
	    }
	  }, /*#__PURE__*/React$1.createElement(Card$1.Header, null, props.header), /*#__PURE__*/React$1.createElement(Card$1.Body, null, /*#__PURE__*/React$1.createElement(Card$1.Title, null, !!props?.setId ? props.setId : "", " ", props.title), /*#__PURE__*/React$1.createElement(Card$1.Text, null, ReactHtmlParser(quizString)), !!props?.media && /*#__PURE__*/React$1.createElement(ShowQuizMedia, {
	    media: props.media,
	    randomNumber: props.randomNumber
	  }), /*#__PURE__*/React$1.createElement(SpreadsheetLayout, {
	    quizString: quizString,
	    theme: props.theme
	  })), showAnswer ? /*#__PURE__*/React$1.createElement(InputGroup, {
	    size: "sm",
	    style: {
	      width: "95%",
	      margin: "1rem"
	    }
	  }, /*#__PURE__*/React$1.createElement(InputGroup.Prepend, null, /*#__PURE__*/React$1.createElement(InputGroup.Text, {
	    id: "basic-addon1"
	  }, /*#__PURE__*/React$1.createElement("span", {
	    className: answerIsRight ? "text-success" : "text-danger"
	  }, "\u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442: ", answer))), /*#__PURE__*/React$1.createElement(FormControl, {
	    value: value,
	    type: "number",
	    onChange: handleChange,
	    "aria-label": "Answer",
	    "aria-describedby": "inputGroup-answer",
	    readOnly: true
	  })) : /*#__PURE__*/React$1.createElement(InputGroup, {
	    size: "sm",
	    style: {
	      width: "95%",
	      margin: "1rem"
	    }
	  }, /*#__PURE__*/React$1.createElement(InputGroup.Prepend, null, /*#__PURE__*/React$1.createElement(Button, {
	    variant: "outline-secondary",
	    onClick: handleCheckAnswer
	  }, "\u041E\u0442\u0432\u0435\u0442")), /*#__PURE__*/React$1.createElement(FormControl, {
	    value: value,
	    type: "number",
	    onChange: handleChange,
	    "aria-label": "Answer",
	    "aria-describedby": "inputGroup-answer"
	  })), !!props?.hint && showAnswer ? /*#__PURE__*/React$1.createElement(Card$1.Text, null, /*#__PURE__*/React$1.createElement("div", {
	    className: "text-secondary ml-3 mb-2"
	  }, ReactHtmlParser(props.hint))) :
	  // <ReactMarkdown source={props.hint} escapeHtml={false} /></div>
	  null);
	}
	function QuizWithRandomNumber(props) {
	  const [show, setShow] = React$1.useState(false);
	  const [value, setValue] = React$1.useState("");
	  const [showAnswer, setShowAnswer] = React$1.useState(null);
	  const [answerIsRight, setAnswerIsRight] = React$1.useState(null);
	  const dispatch = useDispatch();
	  const content = useSelector(selectSpreadsheetProtoData);
	  const email = useSelector(selectApplication).email;
	  const user = useSelector(selectApplication).user;
	  const avatarUrl = useSelector(selectApplication)?.avatarUrl;
	  function handleChange(event) {
	    setValue(event.target.value);
	  }

	  //let parser = new formulaParser.Parser();

	  let quizString = props.text;
	  //let quizString = `this {={var1-10}+1} some {=2+{var1-10}} that can be {=3+{var1-10}} with a {=4+{var1-10}} function`;
	  const searchRegExp = /{var1-10}/g;
	  const replaceWith = props.randomNumber.toString();
	  quizString = quizString.replace(searchRegExp, replaceWith);
	  let answer = props.answer.replace(searchRegExp, replaceWith);
	  // console.log(createNewDraft(createProtoArray({A1: answer}, 1, 1)))
	  answer = Math.round(
	  // createNewDraft([[answer]])[0][0]

	  doCalculate(answer) *
	  //   parser.parse(answer).result

	  1000) / 1000;
	  let stringExtractor = extract(["{=", "}"]);
	  let stuffIneed = stringExtractor(quizString);
	  //console.log(stuffIneed);
	  // Outputs: [ 'is', 'text', 'extracted', 'reusable' ]

	  for (let i = 0; i < stuffIneed.length; i++) {
	    // console.log(createNewDraft(createProtoArray({A1: [stuffIneed[i]]}, 1, 1))[0][0]);

	    let feedback = Math.round(doCalculate(stuffIneed[i]) *
	    //  parser.parse(stuffIneed[i]).result
	    1000) / 1000;
	    // console.log(answer);
	    quizString = quizString.replace("{=" + stuffIneed[i] + "}", feedback);
	  }
	  function handleCheckAnswer() {
	    setShowAnswer(true);
	    if (parseFloat(value) / parseFloat(answer) < 1.02 && parseFloat(value) / parseFloat(answer) > 0.98 || answer === 0 && value === 0) {
	      setAnswerIsRight(true);
	      if (email.length > 6) {
	        let userEmail = email.replace(/[^a-zA-Z0-9]/g, "_");
	        let idPost = getFirebaseNodeKey("usersCraft/" + userEmail + "/posts");
	        //    firebase.database().ref(userEmail).child("posts").push().key;
	        let currentDay = new Intl.DateTimeFormat("en", {
	          weekday: "short",
	          year: "numeric",
	          month: "short",
	          day: "numeric"
	        }).format(new Date()).replace(/[^a-zA-Z0-9]/g, "_");
	        let postObject = {
	          id: idPost,
	          //Math.floor(Math.random() * 1001),
	          title: props.title,
	          theme: props.theme,
	          answer: answer,
	          comment: props.title + " (" + props.theme + ")",
	          //Тема
	          type: "spreadsheet",
	          content: createProtoObject(content),
	          quizString: quizString,
	          deleted: false,
	          email: email,
	          user: user,
	          avatarUrl: !!avatarUrl ? avatarUrl : null,
	          date: new Intl.DateTimeFormat("ru", {
	            weekday: "short",
	            year: "numeric",
	            month: "short",
	            day: "numeric",
	            hour: "numeric",
	            minute: "numeric"
	          }).format(new Date()) //Date().toJSON()
	        };
	        let currentDayObject = {
	          id: idPost,
	          title: props.title,
	          theme: props.theme,
	          email: email,
	          user: user,
	          avatarUrl: !!avatarUrl ? avatarUrl : null,
	          timestamp: +Date.now()
	        };
	        dispatch(createPost(postObject));
	        var updates = {};
	        updates["/usersCraft/" + userEmail + "/posts/" + idPost] = postObject;
	        updates["/currentDay/" + currentDay + "/posts/" + idPost] = currentDayObject;
	        // updates['/posts/' + user +  newPostKey] = postData;
	        // updates['/user-posts/' + uid + '/' + newPostKey] = postData;
	        return updateFirebaseNode(updates);
	        // firebase.database().ref().update(updates);
	      }
	    }
	  }
	  return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, /*#__PURE__*/React$1.createElement(Card$1, {
	    bg: "light",
	    style: {
	      width: "95%",
	      margin: "1rem"
	    }
	  }, /*#__PURE__*/React$1.createElement(Card$1.Header, null, props.header), /*#__PURE__*/React$1.createElement(Card$1.Body, null, /*#__PURE__*/React$1.createElement(Card$1.Title, null, !!props?.setId ? props.setId : "", " ", props.title), /*#__PURE__*/React$1.createElement(Card$1.Text, null, ReactHtmlParser(quizString)), !!props?.media && /*#__PURE__*/React$1.createElement(ShowQuizMedia, {
	    media: props.media,
	    randomNumber: props.randomNumber
	  }), /*#__PURE__*/React$1.createElement(SpreadsheetLayout, {
	    quizString: quizString,
	    theme: props.theme
	  })), showAnswer ? /*#__PURE__*/React$1.createElement(InputGroup, {
	    size: "sm",
	    style: {
	      width: "95%",
	      margin: "1rem"
	    }
	  }, /*#__PURE__*/React$1.createElement(InputGroup.Prepend, null, /*#__PURE__*/React$1.createElement(InputGroup.Text, {
	    id: "basic-addon1"
	  }, /*#__PURE__*/React$1.createElement("span", {
	    className: answerIsRight ? "text-success" : "text-danger"
	  }, "\u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442: ", answer))), /*#__PURE__*/React$1.createElement(FormControl, {
	    value: value,
	    type: "number",
	    onChange: handleChange,
	    "aria-label": "Answer",
	    "aria-describedby": "inputGroup-answer",
	    readOnly: true
	  })) : /*#__PURE__*/React$1.createElement(InputGroup, {
	    size: "sm",
	    style: {
	      width: "95%",
	      margin: "1rem"
	    }
	  }, /*#__PURE__*/React$1.createElement(InputGroup.Prepend, null, /*#__PURE__*/React$1.createElement(Button, {
	    variant: "outline-secondary",
	    onClick: handleCheckAnswer
	  }, "\u041E\u0442\u0432\u0435\u0442")), /*#__PURE__*/React$1.createElement(FormControl, {
	    value: value,
	    type: "number",
	    onChange: handleChange,
	    "aria-label": "Answer",
	    "aria-describedby": "inputGroup-answer"
	  })), !!props?.hint && showAnswer ? /*#__PURE__*/React$1.createElement(Card$1.Text, null, /*#__PURE__*/React$1.createElement("div", {
	    className: "text-secondary ml-3 mb-2"
	  }, ReactHtmlParser(props.hint))) :
	  // <ReactMarkdown source={props.hint} escapeHtml={false} /></div>
	  null));
	}

	// function extract([beg, end]) {
	//   const matcher = new RegExp(`${beg}(.*?)${end}`, "gm");
	//   const normalise = (str) => str.slice(beg.length, end.length * -1);
	//   return function (str) {
	//     return str.match(matcher).map(normalise);
	//   };
	// }

	function calculateRandomNumber(quizString, randomNumber) {
	  //  console.log(quizString, randomNumber);
	  // let parser = new FormulaParser();
	  //let quizString = `this {={var1-10}+1} some {=2+{var1-10}} that can be {=3+{var1-10}} with a {=4+{var1-10}} function`;
	  const searchRegExp = /{var1-10}/g;
	  const replaceWith = randomNumber.toString();
	  quizString = quizString.replace(searchRegExp, replaceWith);
	  //  console.log(quizString);
	  let stringExtractor = extract(["{=", "}"]);
	  let stuffIneed = stringExtractor(quizString);
	  let feedback = Math.round(doCalculate(stuffIneed[0]) *
	  //   createNewDraft([[stuffIneed[0]]])[0][0]
	  //  parser.parse(stuffIneed[0]).result

	  1000) / 1000;
	  // for (let i = 0; i < stuffIneed.length; i++) {
	  //   let feedback = Math.round(parser.parse(stuffIneed[i]).result * 1000) / 1000;
	  //    quizString = quizString.replace("{=" + stuffIneed[i] + "}", feedback);
	  // }
	  //  console.log(feedback);
	  return feedback; //'2000+2*2.534908428867788*100'
	}
	function ShowQuizMedia({
	  media,
	  randomNumber
	}) {
	  return /*#__PURE__*/React$1.createElement("div", null, media.map((item, index) => {
	    let series = item.series.map(seriesItem => {
	      let itemData = seriesItem.data.map(dataItem => {
	        if ((typeof dataItem === "string" || dataItem instanceof String) && dataItem.startsWith("{=")) {
	          console.log(dataItem, randomNumber);
	          return calculateRandomNumber(dataItem, randomNumber); // 1000
	        } else {
	          return dataItem;
	        }
	      });
	      return {
	        ...seriesItem,
	        data: itemData
	      };
	    });
	    return /*#__PURE__*/React$1.createElement(ApexEmptyOptionsChart, {
	      key: index,
	      showAs: item.type,
	      options: item.options,
	      series: series,
	      categories: item.categories,
	      chartTitle: item.chartTitle,
	      xaxisTitle: item.xaxisTitle,
	      yaxisTitle: item.yaxisTitle
	    });
	  }));
	}

	let {
	  Container
	} = ReactBootstrap;
	function App() {
	  // let isExam = !!document.body.dataset?.exam ? true : false;
	  // let { email, user } = useSelector(selectApplication);

	  // if (!email || email.length < 5 || user.length < 5) {
	  //   return <SimpleUserForm />
	  // }

	  if (Array.isArray(window.quizesSets) && window.quizesSets.length > 1) {
	    let quizesIds = [...window.quizesSets].map(quiz => quiz.id);

	    // let quizes = await getFirebaseNode({ url: url + "posts", type: "array" });
	    // let cases = await getFirebaseNode({ url: url + "cases", type: "array" });

	    return /*#__PURE__*/React$1.createElement(Container, null, /*#__PURE__*/React$1.createElement(QuizCardWithStorage, {
	      set: "balance_sheet_financials",
	      setTitle: "\u0417\u0430\u0434\u0430\u0447\u0438 \u0438 \u0442\u0435\u0441\u0442\u044B",
	      quizesIds: quizesIds
	    }));
	  }
	  return /*#__PURE__*/React$1.createElement("div", null, "Mo Quizes Set");
	}
	const domNode = document.getElementById("root");
	const root = client.createRoot(domNode);
	root.render(/*#__PURE__*/React$1.createElement(Provider_default, {
	  store: store
	}, /*#__PURE__*/React$1.createElement(App, null)));

})(React, ReactDOM, RTK);
