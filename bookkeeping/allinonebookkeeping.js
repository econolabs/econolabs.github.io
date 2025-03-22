(function () {
	'use strict';

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var react = {exports: {}};

	var react_production_min = {};

	/**
	 * @license React
	 * react.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredReact_production_min;

	function requireReact_production_min () {
		if (hasRequiredReact_production_min) return react_production_min;
		hasRequiredReact_production_min = 1;

		var l = Symbol.for("react.element"),
		  n = Symbol.for("react.portal"),
		  p = Symbol.for("react.fragment"),
		  q = Symbol.for("react.strict_mode"),
		  r = Symbol.for("react.profiler"),
		  t = Symbol.for("react.provider"),
		  u = Symbol.for("react.context"),
		  v = Symbol.for("react.forward_ref"),
		  w = Symbol.for("react.suspense"),
		  x = Symbol.for("react.memo"),
		  y = Symbol.for("react.lazy"),
		  z = Symbol.iterator;
		function A(a) {
		  if (null === a || "object" !== typeof a) return null;
		  a = z && a[z] || a["@@iterator"];
		  return "function" === typeof a ? a : null;
		}
		var B = {
		    isMounted: function () {
		      return false;
		    },
		    enqueueForceUpdate: function () {},
		    enqueueReplaceState: function () {},
		    enqueueSetState: function () {}
		  },
		  C = Object.assign,
		  D = {};
		function E(a, b, e) {
		  this.props = a;
		  this.context = b;
		  this.refs = D;
		  this.updater = e || B;
		}
		E.prototype.isReactComponent = {};
		E.prototype.setState = function (a, b) {
		  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
		  this.updater.enqueueSetState(this, a, b, "setState");
		};
		E.prototype.forceUpdate = function (a) {
		  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
		};
		function F() {}
		F.prototype = E.prototype;
		function G(a, b, e) {
		  this.props = a;
		  this.context = b;
		  this.refs = D;
		  this.updater = e || B;
		}
		var H = G.prototype = new F();
		H.constructor = G;
		C(H, E.prototype);
		H.isPureReactComponent = true;
		var I = Array.isArray,
		  J = Object.prototype.hasOwnProperty,
		  K = {
		    current: null
		  },
		  L = {
		    key: true,
		    ref: true,
		    __self: true,
		    __source: true
		  };
		function M(a, b, e) {
		  var d,
		    c = {},
		    k = null,
		    h = null;
		  if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
		  var g = arguments.length - 2;
		  if (1 === g) c.children = e;else if (1 < g) {
		    for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
		    c.children = f;
		  }
		  if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
		  return {
		    $$typeof: l,
		    type: a,
		    key: k,
		    ref: h,
		    props: c,
		    _owner: K.current
		  };
		}
		function N(a, b) {
		  return {
		    $$typeof: l,
		    type: a.type,
		    key: b,
		    ref: a.ref,
		    props: a.props,
		    _owner: a._owner
		  };
		}
		function O(a) {
		  return "object" === typeof a && null !== a && a.$$typeof === l;
		}
		function escape(a) {
		  var b = {
		    "=": "=0",
		    ":": "=2"
		  };
		  return "$" + a.replace(/[=:]/g, function (a) {
		    return b[a];
		  });
		}
		var P = /\/+/g;
		function Q(a, b) {
		  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
		}
		function R(a, b, e, d, c) {
		  var k = typeof a;
		  if ("undefined" === k || "boolean" === k) a = null;
		  var h = false;
		  if (null === a) h = true;else switch (k) {
		    case "string":
		    case "number":
		      h = true;
		      break;
		    case "object":
		      switch (a.$$typeof) {
		        case l:
		        case n:
		          h = true;
		      }
		  }
		  if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function (a) {
		    return a;
		  })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
		  h = 0;
		  d = "" === d ? "." : d + ":";
		  if (I(a)) for (var g = 0; g < a.length; g++) {
		    k = a[g];
		    var f = d + Q(k, g);
		    h += R(k, b, e, f, c);
		  } else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
		  return h;
		}
		function S(a, b, e) {
		  if (null == a) return a;
		  var d = [],
		    c = 0;
		  R(a, d, "", "", function (a) {
		    return b.call(e, a, c++);
		  });
		  return d;
		}
		function T(a) {
		  if (-1 === a._status) {
		    var b = a._result;
		    b = b();
		    b.then(function (b) {
		      if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
		    }, function (b) {
		      if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
		    });
		    -1 === a._status && (a._status = 0, a._result = b);
		  }
		  if (1 === a._status) return a._result.default;
		  throw a._result;
		}
		var U = {
		    current: null
		  },
		  V = {
		    transition: null
		  },
		  W = {
		    ReactCurrentDispatcher: U,
		    ReactCurrentBatchConfig: V,
		    ReactCurrentOwner: K
		  };
		function X() {
		  throw Error("act(...) is not supported in production builds of React.");
		}
		react_production_min.Children = {
		  map: S,
		  forEach: function (a, b, e) {
		    S(a, function () {
		      b.apply(this, arguments);
		    }, e);
		  },
		  count: function (a) {
		    var b = 0;
		    S(a, function () {
		      b++;
		    });
		    return b;
		  },
		  toArray: function (a) {
		    return S(a, function (a) {
		      return a;
		    }) || [];
		  },
		  only: function (a) {
		    if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
		    return a;
		  }
		};
		react_production_min.Component = E;
		react_production_min.Fragment = p;
		react_production_min.Profiler = r;
		react_production_min.PureComponent = G;
		react_production_min.StrictMode = q;
		react_production_min.Suspense = w;
		react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
		react_production_min.act = X;
		react_production_min.cloneElement = function (a, b, e) {
		  if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
		  var d = C({}, a.props),
		    c = a.key,
		    k = a.ref,
		    h = a._owner;
		  if (null != b) {
		    void 0 !== b.ref && (k = b.ref, h = K.current);
		    void 0 !== b.key && (c = "" + b.key);
		    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
		    for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
		  }
		  var f = arguments.length - 2;
		  if (1 === f) d.children = e;else if (1 < f) {
		    g = Array(f);
		    for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
		    d.children = g;
		  }
		  return {
		    $$typeof: l,
		    type: a.type,
		    key: c,
		    ref: k,
		    props: d,
		    _owner: h
		  };
		};
		react_production_min.createContext = function (a) {
		  a = {
		    $$typeof: u,
		    _currentValue: a,
		    _currentValue2: a,
		    _threadCount: 0,
		    Provider: null,
		    Consumer: null,
		    _defaultValue: null,
		    _globalName: null
		  };
		  a.Provider = {
		    $$typeof: t,
		    _context: a
		  };
		  return a.Consumer = a;
		};
		react_production_min.createElement = M;
		react_production_min.createFactory = function (a) {
		  var b = M.bind(null, a);
		  b.type = a;
		  return b;
		};
		react_production_min.createRef = function () {
		  return {
		    current: null
		  };
		};
		react_production_min.forwardRef = function (a) {
		  return {
		    $$typeof: v,
		    render: a
		  };
		};
		react_production_min.isValidElement = O;
		react_production_min.lazy = function (a) {
		  return {
		    $$typeof: y,
		    _payload: {
		      _status: -1,
		      _result: a
		    },
		    _init: T
		  };
		};
		react_production_min.memo = function (a, b) {
		  return {
		    $$typeof: x,
		    type: a,
		    compare: void 0 === b ? null : b
		  };
		};
		react_production_min.startTransition = function (a) {
		  var b = V.transition;
		  V.transition = {};
		  try {
		    a();
		  } finally {
		    V.transition = b;
		  }
		};
		react_production_min.unstable_act = X;
		react_production_min.useCallback = function (a, b) {
		  return U.current.useCallback(a, b);
		};
		react_production_min.useContext = function (a) {
		  return U.current.useContext(a);
		};
		react_production_min.useDebugValue = function () {};
		react_production_min.useDeferredValue = function (a) {
		  return U.current.useDeferredValue(a);
		};
		react_production_min.useEffect = function (a, b) {
		  return U.current.useEffect(a, b);
		};
		react_production_min.useId = function () {
		  return U.current.useId();
		};
		react_production_min.useImperativeHandle = function (a, b, e) {
		  return U.current.useImperativeHandle(a, b, e);
		};
		react_production_min.useInsertionEffect = function (a, b) {
		  return U.current.useInsertionEffect(a, b);
		};
		react_production_min.useLayoutEffect = function (a, b) {
		  return U.current.useLayoutEffect(a, b);
		};
		react_production_min.useMemo = function (a, b) {
		  return U.current.useMemo(a, b);
		};
		react_production_min.useReducer = function (a, b, e) {
		  return U.current.useReducer(a, b, e);
		};
		react_production_min.useRef = function (a) {
		  return U.current.useRef(a);
		};
		react_production_min.useState = function (a) {
		  return U.current.useState(a);
		};
		react_production_min.useSyncExternalStore = function (a, b, e) {
		  return U.current.useSyncExternalStore(a, b, e);
		};
		react_production_min.useTransition = function () {
		  return U.current.useTransition();
		};
		react_production_min.version = "18.3.1";
		return react_production_min;
	}

	var hasRequiredReact;

	function requireReact () {
		if (hasRequiredReact) return react.exports;
		hasRequiredReact = 1;

		{
		  react.exports = requireReact_production_min();
		}
		return react.exports;
	}

	var reactExports = requireReact();
	var React = /*@__PURE__*/getDefaultExportFromCjs(reactExports);

	var client = {};

	var reactDom = {exports: {}};

	var reactDom_production_min = {};

	var scheduler = {exports: {}};

	var scheduler_production_min = {};

	/**
	 * @license React
	 * scheduler.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredScheduler_production_min;

	function requireScheduler_production_min () {
		if (hasRequiredScheduler_production_min) return scheduler_production_min;
		hasRequiredScheduler_production_min = 1;
		(function (exports) {

			function f(a, b) {
			  var c = a.length;
			  a.push(b);
			  a: for (; 0 < c;) {
			    var d = c - 1 >>> 1,
			      e = a[d];
			    if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;else break a;
			  }
			}
			function h(a) {
			  return 0 === a.length ? null : a[0];
			}
			function k(a) {
			  if (0 === a.length) return null;
			  var b = a[0],
			    c = a.pop();
			  if (c !== b) {
			    a[0] = c;
			    a: for (var d = 0, e = a.length, w = e >>> 1; d < w;) {
			      var m = 2 * (d + 1) - 1,
			        C = a[m],
			        n = m + 1,
			        x = a[n];
			      if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n;else break a;
			    }
			  }
			  return b;
			}
			function g(a, b) {
			  var c = a.sortIndex - b.sortIndex;
			  return 0 !== c ? c : a.id - b.id;
			}
			if ("object" === typeof performance && "function" === typeof performance.now) {
			  var l = performance;
			  exports.unstable_now = function () {
			    return l.now();
			  };
			} else {
			  var p = Date,
			    q = p.now();
			  exports.unstable_now = function () {
			    return p.now() - q;
			  };
			}
			var r = [],
			  t = [],
			  u = 1,
			  v = null,
			  y = 3,
			  z = false,
			  A = false,
			  B = false,
			  D = "function" === typeof setTimeout ? setTimeout : null,
			  E = "function" === typeof clearTimeout ? clearTimeout : null,
			  F = "undefined" !== typeof setImmediate ? setImmediate : null;
			"undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
			function G(a) {
			  for (var b = h(t); null !== b;) {
			    if (null === b.callback) k(t);else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, f(r, b);else break;
			    b = h(t);
			  }
			}
			function H(a) {
			  B = false;
			  G(a);
			  if (!A) if (null !== h(r)) A = true, I(J);else {
			    var b = h(t);
			    null !== b && K(H, b.startTime - a);
			  }
			}
			function J(a, b) {
			  A = false;
			  B && (B = false, E(L), L = -1);
			  z = true;
			  var c = y;
			  try {
			    G(b);
			    for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M());) {
			      var d = v.callback;
			      if ("function" === typeof d) {
			        v.callback = null;
			        y = v.priorityLevel;
			        var e = d(v.expirationTime <= b);
			        b = exports.unstable_now();
			        "function" === typeof e ? v.callback = e : v === h(r) && k(r);
			        G(b);
			      } else k(r);
			      v = h(r);
			    }
			    if (null !== v) var w = !0;else {
			      var m = h(t);
			      null !== m && K(H, m.startTime - b);
			      w = !1;
			    }
			    return w;
			  } finally {
			    v = null, y = c, z = false;
			  }
			}
			var N = false,
			  O = null,
			  L = -1,
			  P = 5,
			  Q = -1;
			function M() {
			  return exports.unstable_now() - Q < P ? false : true;
			}
			function R() {
			  if (null !== O) {
			    var a = exports.unstable_now();
			    Q = a;
			    var b = true;
			    try {
			      b = O(!0, a);
			    } finally {
			      b ? S() : (N = false, O = null);
			    }
			  } else N = false;
			}
			var S;
			if ("function" === typeof F) S = function () {
			  F(R);
			};else if ("undefined" !== typeof MessageChannel) {
			  var T = new MessageChannel(),
			    U = T.port2;
			  T.port1.onmessage = R;
			  S = function () {
			    U.postMessage(null);
			  };
			} else S = function () {
			  D(R, 0);
			};
			function I(a) {
			  O = a;
			  N || (N = true, S());
			}
			function K(a, b) {
			  L = D(function () {
			    a(exports.unstable_now());
			  }, b);
			}
			exports.unstable_IdlePriority = 5;
			exports.unstable_ImmediatePriority = 1;
			exports.unstable_LowPriority = 4;
			exports.unstable_NormalPriority = 3;
			exports.unstable_Profiling = null;
			exports.unstable_UserBlockingPriority = 2;
			exports.unstable_cancelCallback = function (a) {
			  a.callback = null;
			};
			exports.unstable_continueExecution = function () {
			  A || z || (A = true, I(J));
			};
			exports.unstable_forceFrameRate = function (a) {
			  0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1E3 / a) : 5;
			};
			exports.unstable_getCurrentPriorityLevel = function () {
			  return y;
			};
			exports.unstable_getFirstCallbackNode = function () {
			  return h(r);
			};
			exports.unstable_next = function (a) {
			  switch (y) {
			    case 1:
			    case 2:
			    case 3:
			      var b = 3;
			      break;
			    default:
			      b = y;
			  }
			  var c = y;
			  y = b;
			  try {
			    return a();
			  } finally {
			    y = c;
			  }
			};
			exports.unstable_pauseExecution = function () {};
			exports.unstable_requestPaint = function () {};
			exports.unstable_runWithPriority = function (a, b) {
			  switch (a) {
			    case 1:
			    case 2:
			    case 3:
			    case 4:
			    case 5:
			      break;
			    default:
			      a = 3;
			  }
			  var c = y;
			  y = a;
			  try {
			    return b();
			  } finally {
			    y = c;
			  }
			};
			exports.unstable_scheduleCallback = function (a, b, c) {
			  var d = exports.unstable_now();
			  "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
			  switch (a) {
			    case 1:
			      var e = -1;
			      break;
			    case 2:
			      e = 250;
			      break;
			    case 5:
			      e = 1073741823;
			      break;
			    case 4:
			      e = 1E4;
			      break;
			    default:
			      e = 5E3;
			  }
			  e = c + e;
			  a = {
			    id: u++,
			    callback: b,
			    priorityLevel: a,
			    startTime: c,
			    expirationTime: e,
			    sortIndex: -1
			  };
			  c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = true, K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = true, I(J)));
			  return a;
			};
			exports.unstable_shouldYield = M;
			exports.unstable_wrapCallback = function (a) {
			  var b = y;
			  return function () {
			    var c = y;
			    y = b;
			    try {
			      return a.apply(this, arguments);
			    } finally {
			      y = c;
			    }
			  };
			}; 
		} (scheduler_production_min));
		return scheduler_production_min;
	}

	var hasRequiredScheduler;

	function requireScheduler () {
		if (hasRequiredScheduler) return scheduler.exports;
		hasRequiredScheduler = 1;

		{
		  scheduler.exports = requireScheduler_production_min();
		}
		return scheduler.exports;
	}

	/**
	 * @license React
	 * react-dom.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredReactDom_production_min;

	function requireReactDom_production_min () {
		if (hasRequiredReactDom_production_min) return reactDom_production_min;
		hasRequiredReactDom_production_min = 1;

		var aa = requireReact(),
		  ca = requireScheduler();
		function p(a) {
		  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
		  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
		}
		var da = new Set(),
		  ea = {};
		function fa(a, b) {
		  ha(a, b);
		  ha(a + "Capture", b);
		}
		function ha(a, b) {
		  ea[a] = b;
		  for (a = 0; a < b.length; a++) da.add(b[a]);
		}
		var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
		  ja = Object.prototype.hasOwnProperty,
		  ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
		  la = {},
		  ma = {};
		function oa(a) {
		  if (ja.call(ma, a)) return true;
		  if (ja.call(la, a)) return false;
		  if (ka.test(a)) return ma[a] = true;
		  la[a] = true;
		  return false;
		}
		function pa(a, b, c, d) {
		  if (null !== c && 0 === c.type) return false;
		  switch (typeof b) {
		    case "function":
		    case "symbol":
		      return true;
		    case "boolean":
		      if (d) return false;
		      if (null !== c) return !c.acceptsBooleans;
		      a = a.toLowerCase().slice(0, 5);
		      return "data-" !== a && "aria-" !== a;
		    default:
		      return false;
		  }
		}
		function qa(a, b, c, d) {
		  if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return true;
		  if (d) return false;
		  if (null !== c) switch (c.type) {
		    case 3:
		      return !b;
		    case 4:
		      return false === b;
		    case 5:
		      return isNaN(b);
		    case 6:
		      return isNaN(b) || 1 > b;
		  }
		  return false;
		}
		function v(a, b, c, d, e, f, g) {
		  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
		  this.attributeName = d;
		  this.attributeNamespace = e;
		  this.mustUseProperty = c;
		  this.propertyName = a;
		  this.type = b;
		  this.sanitizeURL = f;
		  this.removeEmptyString = g;
		}
		var z = {};
		"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (a) {
		  z[a] = new v(a, 0, false, a, null, false, false);
		});
		[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (a) {
		  var b = a[0];
		  z[b] = new v(b, 1, false, a[1], null, false, false);
		});
		["contentEditable", "draggable", "spellCheck", "value"].forEach(function (a) {
		  z[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
		});
		["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (a) {
		  z[a] = new v(a, 2, false, a, null, false, false);
		});
		"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (a) {
		  z[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
		});
		["checked", "multiple", "muted", "selected"].forEach(function (a) {
		  z[a] = new v(a, 3, true, a, null, false, false);
		});
		["capture", "download"].forEach(function (a) {
		  z[a] = new v(a, 4, false, a, null, false, false);
		});
		["cols", "rows", "size", "span"].forEach(function (a) {
		  z[a] = new v(a, 6, false, a, null, false, false);
		});
		["rowSpan", "start"].forEach(function (a) {
		  z[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
		});
		var ra = /[\-:]([a-z])/g;
		function sa(a) {
		  return a[1].toUpperCase();
		}
		"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (a) {
		  var b = a.replace(ra, sa);
		  z[b] = new v(b, 1, false, a, null, false, false);
		});
		"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (a) {
		  var b = a.replace(ra, sa);
		  z[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
		});
		["xml:base", "xml:lang", "xml:space"].forEach(function (a) {
		  var b = a.replace(ra, sa);
		  z[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
		});
		["tabIndex", "crossOrigin"].forEach(function (a) {
		  z[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
		});
		z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
		["src", "href", "action", "formAction"].forEach(function (a) {
		  z[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
		});
		function ta(a, b, c, d) {
		  var e = z.hasOwnProperty(b) ? z[b] : null;
		  if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
		}
		var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
		  va = Symbol.for("react.element"),
		  wa = Symbol.for("react.portal"),
		  ya = Symbol.for("react.fragment"),
		  za = Symbol.for("react.strict_mode"),
		  Aa = Symbol.for("react.profiler"),
		  Ba = Symbol.for("react.provider"),
		  Ca = Symbol.for("react.context"),
		  Da = Symbol.for("react.forward_ref"),
		  Ea = Symbol.for("react.suspense"),
		  Fa = Symbol.for("react.suspense_list"),
		  Ga = Symbol.for("react.memo"),
		  Ha = Symbol.for("react.lazy");
		var Ia = Symbol.for("react.offscreen");
		var Ja = Symbol.iterator;
		function Ka(a) {
		  if (null === a || "object" !== typeof a) return null;
		  a = Ja && a[Ja] || a["@@iterator"];
		  return "function" === typeof a ? a : null;
		}
		var A = Object.assign,
		  La;
		function Ma(a) {
		  if (void 0 === La) try {
		    throw Error();
		  } catch (c) {
		    var b = c.stack.trim().match(/\n( *(at )?)/);
		    La = b && b[1] || "";
		  }
		  return "\n" + La + a;
		}
		var Na = false;
		function Oa(a, b) {
		  if (!a || Na) return "";
		  Na = true;
		  var c = Error.prepareStackTrace;
		  Error.prepareStackTrace = void 0;
		  try {
		    if (b) {
		      if (b = function () {
		        throw Error();
		      }, Object.defineProperty(b.prototype, "props", {
		        set: function () {
		          throw Error();
		        }
		      }), "object" === typeof Reflect && Reflect.construct) {
		        try {
		          Reflect.construct(b, []);
		        } catch (l) {
		          var d = l;
		        }
		        Reflect.construct(a, [], b);
		      } else {
		        try {
		          b.call();
		        } catch (l) {
		          d = l;
		        }
		        a.call(b.prototype);
		      }
		    } else {
		      try {
		        throw Error();
		      } catch (l) {
		        d = l;
		      }
		      a();
		    }
		  } catch (l) {
		    if (l && d && "string" === typeof l.stack) {
		      for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h];) h--;
		      for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
		        if (1 !== g || 1 !== h) {
		          do if (g--, h--, 0 > h || e[g] !== f[h]) {
		            var k = "\n" + e[g].replace(" at new ", " at ");
		            a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
		            return k;
		          } while (1 <= g && 0 <= h);
		        }
		        break;
		      }
		    }
		  } finally {
		    Na = false, Error.prepareStackTrace = c;
		  }
		  return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
		}
		function Pa(a) {
		  switch (a.tag) {
		    case 5:
		      return Ma(a.type);
		    case 16:
		      return Ma("Lazy");
		    case 13:
		      return Ma("Suspense");
		    case 19:
		      return Ma("SuspenseList");
		    case 0:
		    case 2:
		    case 15:
		      return a = Oa(a.type, false), a;
		    case 11:
		      return a = Oa(a.type.render, false), a;
		    case 1:
		      return a = Oa(a.type, true), a;
		    default:
		      return "";
		  }
		}
		function Qa(a) {
		  if (null == a) return null;
		  if ("function" === typeof a) return a.displayName || a.name || null;
		  if ("string" === typeof a) return a;
		  switch (a) {
		    case ya:
		      return "Fragment";
		    case wa:
		      return "Portal";
		    case Aa:
		      return "Profiler";
		    case za:
		      return "StrictMode";
		    case Ea:
		      return "Suspense";
		    case Fa:
		      return "SuspenseList";
		  }
		  if ("object" === typeof a) switch (a.$$typeof) {
		    case Ca:
		      return (a.displayName || "Context") + ".Consumer";
		    case Ba:
		      return (a._context.displayName || "Context") + ".Provider";
		    case Da:
		      var b = a.render;
		      a = a.displayName;
		      a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
		      return a;
		    case Ga:
		      return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
		    case Ha:
		      b = a._payload;
		      a = a._init;
		      try {
		        return Qa(a(b));
		      } catch (c) {}
		  }
		  return null;
		}
		function Ra(a) {
		  var b = a.type;
		  switch (a.tag) {
		    case 24:
		      return "Cache";
		    case 9:
		      return (b.displayName || "Context") + ".Consumer";
		    case 10:
		      return (b._context.displayName || "Context") + ".Provider";
		    case 18:
		      return "DehydratedFragment";
		    case 11:
		      return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
		    case 7:
		      return "Fragment";
		    case 5:
		      return b;
		    case 4:
		      return "Portal";
		    case 3:
		      return "Root";
		    case 6:
		      return "Text";
		    case 16:
		      return Qa(b);
		    case 8:
		      return b === za ? "StrictMode" : "Mode";
		    case 22:
		      return "Offscreen";
		    case 12:
		      return "Profiler";
		    case 21:
		      return "Scope";
		    case 13:
		      return "Suspense";
		    case 19:
		      return "SuspenseList";
		    case 25:
		      return "TracingMarker";
		    case 1:
		    case 0:
		    case 17:
		    case 2:
		    case 14:
		    case 15:
		      if ("function" === typeof b) return b.displayName || b.name || null;
		      if ("string" === typeof b) return b;
		  }
		  return null;
		}
		function Sa(a) {
		  switch (typeof a) {
		    case "boolean":
		    case "number":
		    case "string":
		    case "undefined":
		      return a;
		    case "object":
		      return a;
		    default:
		      return "";
		  }
		}
		function Ta(a) {
		  var b = a.type;
		  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
		}
		function Ua(a) {
		  var b = Ta(a) ? "checked" : "value",
		    c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b),
		    d = "" + a[b];
		  if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
		    var e = c.get,
		      f = c.set;
		    Object.defineProperty(a, b, {
		      configurable: true,
		      get: function () {
		        return e.call(this);
		      },
		      set: function (a) {
		        d = "" + a;
		        f.call(this, a);
		      }
		    });
		    Object.defineProperty(a, b, {
		      enumerable: c.enumerable
		    });
		    return {
		      getValue: function () {
		        return d;
		      },
		      setValue: function (a) {
		        d = "" + a;
		      },
		      stopTracking: function () {
		        a._valueTracker = null;
		        delete a[b];
		      }
		    };
		  }
		}
		function Va(a) {
		  a._valueTracker || (a._valueTracker = Ua(a));
		}
		function Wa(a) {
		  if (!a) return false;
		  var b = a._valueTracker;
		  if (!b) return true;
		  var c = b.getValue();
		  var d = "";
		  a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
		  a = d;
		  return a !== c ? (b.setValue(a), true) : false;
		}
		function Xa(a) {
		  a = a || ("undefined" !== typeof document ? document : void 0);
		  if ("undefined" === typeof a) return null;
		  try {
		    return a.activeElement || a.body;
		  } catch (b) {
		    return a.body;
		  }
		}
		function Ya(a, b) {
		  var c = b.checked;
		  return A({}, b, {
		    defaultChecked: void 0,
		    defaultValue: void 0,
		    value: void 0,
		    checked: null != c ? c : a._wrapperState.initialChecked
		  });
		}
		function Za(a, b) {
		  var c = null == b.defaultValue ? "" : b.defaultValue,
		    d = null != b.checked ? b.checked : b.defaultChecked;
		  c = Sa(null != b.value ? b.value : c);
		  a._wrapperState = {
		    initialChecked: d,
		    initialValue: c,
		    controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
		  };
		}
		function ab(a, b) {
		  b = b.checked;
		  null != b && ta(a, "checked", b, false);
		}
		function bb(a, b) {
		  ab(a, b);
		  var c = Sa(b.value),
		    d = b.type;
		  if (null != c) {
		    if ("number" === d) {
		      if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
		    } else a.value !== "" + c && (a.value = "" + c);
		  } else if ("submit" === d || "reset" === d) {
		    a.removeAttribute("value");
		    return;
		  }
		  b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
		  null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
		}
		function db(a, b, c) {
		  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
		    var d = b.type;
		    if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
		    b = "" + a._wrapperState.initialValue;
		    c || b === a.value || (a.value = b);
		    a.defaultValue = b;
		  }
		  c = a.name;
		  "" !== c && (a.name = "");
		  a.defaultChecked = !!a._wrapperState.initialChecked;
		  "" !== c && (a.name = c);
		}
		function cb(a, b, c) {
		  if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
		}
		var eb = Array.isArray;
		function fb(a, b, c, d) {
		  a = a.options;
		  if (b) {
		    b = {};
		    for (var e = 0; e < c.length; e++) b["$" + c[e]] = true;
		    for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
		  } else {
		    c = "" + Sa(c);
		    b = null;
		    for (e = 0; e < a.length; e++) {
		      if (a[e].value === c) {
		        a[e].selected = true;
		        d && (a[e].defaultSelected = true);
		        return;
		      }
		      null !== b || a[e].disabled || (b = a[e]);
		    }
		    null !== b && (b.selected = true);
		  }
		}
		function gb(a, b) {
		  if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
		  return A({}, b, {
		    value: void 0,
		    defaultValue: void 0,
		    children: "" + a._wrapperState.initialValue
		  });
		}
		function hb(a, b) {
		  var c = b.value;
		  if (null == c) {
		    c = b.children;
		    b = b.defaultValue;
		    if (null != c) {
		      if (null != b) throw Error(p(92));
		      if (eb(c)) {
		        if (1 < c.length) throw Error(p(93));
		        c = c[0];
		      }
		      b = c;
		    }
		    null == b && (b = "");
		    c = b;
		  }
		  a._wrapperState = {
		    initialValue: Sa(c)
		  };
		}
		function ib(a, b) {
		  var c = Sa(b.value),
		    d = Sa(b.defaultValue);
		  null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
		  null != d && (a.defaultValue = "" + d);
		}
		function jb(a) {
		  var b = a.textContent;
		  b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
		}
		function kb(a) {
		  switch (a) {
		    case "svg":
		      return "http://www.w3.org/2000/svg";
		    case "math":
		      return "http://www.w3.org/1998/Math/MathML";
		    default:
		      return "http://www.w3.org/1999/xhtml";
		  }
		}
		function lb(a, b) {
		  return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
		}
		var mb,
		  nb = function (a) {
		    return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (b, c, d, e) {
		      MSApp.execUnsafeLocalFunction(function () {
		        return a(b, c, d, e);
		      });
		    } : a;
		  }(function (a, b) {
		    if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;else {
		      mb = mb || document.createElement("div");
		      mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
		      for (b = mb.firstChild; a.firstChild;) a.removeChild(a.firstChild);
		      for (; b.firstChild;) a.appendChild(b.firstChild);
		    }
		  });
		function ob(a, b) {
		  if (b) {
		    var c = a.firstChild;
		    if (c && c === a.lastChild && 3 === c.nodeType) {
		      c.nodeValue = b;
		      return;
		    }
		  }
		  a.textContent = b;
		}
		var pb = {
		    animationIterationCount: true,
		    aspectRatio: true,
		    borderImageOutset: true,
		    borderImageSlice: true,
		    borderImageWidth: true,
		    boxFlex: true,
		    boxFlexGroup: true,
		    boxOrdinalGroup: true,
		    columnCount: true,
		    columns: true,
		    flex: true,
		    flexGrow: true,
		    flexPositive: true,
		    flexShrink: true,
		    flexNegative: true,
		    flexOrder: true,
		    gridArea: true,
		    gridRow: true,
		    gridRowEnd: true,
		    gridRowSpan: true,
		    gridRowStart: true,
		    gridColumn: true,
		    gridColumnEnd: true,
		    gridColumnSpan: true,
		    gridColumnStart: true,
		    fontWeight: true,
		    lineClamp: true,
		    lineHeight: true,
		    opacity: true,
		    order: true,
		    orphans: true,
		    tabSize: true,
		    widows: true,
		    zIndex: true,
		    zoom: true,
		    fillOpacity: true,
		    floodOpacity: true,
		    stopOpacity: true,
		    strokeDasharray: true,
		    strokeDashoffset: true,
		    strokeMiterlimit: true,
		    strokeOpacity: true,
		    strokeWidth: true
		  },
		  qb = ["Webkit", "ms", "Moz", "O"];
		Object.keys(pb).forEach(function (a) {
		  qb.forEach(function (b) {
		    b = b + a.charAt(0).toUpperCase() + a.substring(1);
		    pb[b] = pb[a];
		  });
		});
		function rb(a, b, c) {
		  return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
		}
		function sb(a, b) {
		  a = a.style;
		  for (var c in b) if (b.hasOwnProperty(c)) {
		    var d = 0 === c.indexOf("--"),
		      e = rb(c, b[c], d);
		    "float" === c && (c = "cssFloat");
		    d ? a.setProperty(c, e) : a[c] = e;
		  }
		}
		var tb = A({
		  menuitem: true
		}, {
		  area: true,
		  base: true,
		  br: true,
		  col: true,
		  embed: true,
		  hr: true,
		  img: true,
		  input: true,
		  keygen: true,
		  link: true,
		  meta: true,
		  param: true,
		  source: true,
		  track: true,
		  wbr: true
		});
		function ub(a, b) {
		  if (b) {
		    if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
		    if (null != b.dangerouslySetInnerHTML) {
		      if (null != b.children) throw Error(p(60));
		      if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
		    }
		    if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
		  }
		}
		function vb(a, b) {
		  if (-1 === a.indexOf("-")) return "string" === typeof b.is;
		  switch (a) {
		    case "annotation-xml":
		    case "color-profile":
		    case "font-face":
		    case "font-face-src":
		    case "font-face-uri":
		    case "font-face-format":
		    case "font-face-name":
		    case "missing-glyph":
		      return false;
		    default:
		      return true;
		  }
		}
		var wb = null;
		function xb(a) {
		  a = a.target || a.srcElement || window;
		  a.correspondingUseElement && (a = a.correspondingUseElement);
		  return 3 === a.nodeType ? a.parentNode : a;
		}
		var yb = null,
		  zb = null,
		  Ab = null;
		function Bb(a) {
		  if (a = Cb(a)) {
		    if ("function" !== typeof yb) throw Error(p(280));
		    var b = a.stateNode;
		    b && (b = Db(b), yb(a.stateNode, a.type, b));
		  }
		}
		function Eb(a) {
		  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
		}
		function Fb() {
		  if (zb) {
		    var a = zb,
		      b = Ab;
		    Ab = zb = null;
		    Bb(a);
		    if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
		  }
		}
		function Gb(a, b) {
		  return a(b);
		}
		function Hb() {}
		var Ib = false;
		function Jb(a, b, c) {
		  if (Ib) return a(b, c);
		  Ib = true;
		  try {
		    return Gb(a, b, c);
		  } finally {
		    if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
		  }
		}
		function Kb(a, b) {
		  var c = a.stateNode;
		  if (null === c) return null;
		  var d = Db(c);
		  if (null === d) return null;
		  c = d[b];
		  a: switch (b) {
		    case "onClick":
		    case "onClickCapture":
		    case "onDoubleClick":
		    case "onDoubleClickCapture":
		    case "onMouseDown":
		    case "onMouseDownCapture":
		    case "onMouseMove":
		    case "onMouseMoveCapture":
		    case "onMouseUp":
		    case "onMouseUpCapture":
		    case "onMouseEnter":
		      (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
		      a = !d;
		      break a;
		    default:
		      a = false;
		  }
		  if (a) return null;
		  if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
		  return c;
		}
		var Lb = false;
		if (ia) try {
		  var Mb = {};
		  Object.defineProperty(Mb, "passive", {
		    get: function () {
		      Lb = !0;
		    }
		  });
		  window.addEventListener("test", Mb, Mb);
		  window.removeEventListener("test", Mb, Mb);
		} catch (a) {
		  Lb = false;
		}
		function Nb(a, b, c, d, e, f, g, h, k) {
		  var l = Array.prototype.slice.call(arguments, 3);
		  try {
		    b.apply(c, l);
		  } catch (m) {
		    this.onError(m);
		  }
		}
		var Ob = false,
		  Pb = null,
		  Qb = false,
		  Rb = null,
		  Sb = {
		    onError: function (a) {
		      Ob = true;
		      Pb = a;
		    }
		  };
		function Tb(a, b, c, d, e, f, g, h, k) {
		  Ob = false;
		  Pb = null;
		  Nb.apply(Sb, arguments);
		}
		function Ub(a, b, c, d, e, f, g, h, k) {
		  Tb.apply(this, arguments);
		  if (Ob) {
		    if (Ob) {
		      var l = Pb;
		      Ob = false;
		      Pb = null;
		    } else throw Error(p(198));
		    Qb || (Qb = true, Rb = l);
		  }
		}
		function Vb(a) {
		  var b = a,
		    c = a;
		  if (a.alternate) for (; b.return;) b = b.return;else {
		    a = b;
		    do b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return; while (a);
		  }
		  return 3 === b.tag ? c : null;
		}
		function Wb(a) {
		  if (13 === a.tag) {
		    var b = a.memoizedState;
		    null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
		    if (null !== b) return b.dehydrated;
		  }
		  return null;
		}
		function Xb(a) {
		  if (Vb(a) !== a) throw Error(p(188));
		}
		function Yb(a) {
		  var b = a.alternate;
		  if (!b) {
		    b = Vb(a);
		    if (null === b) throw Error(p(188));
		    return b !== a ? null : a;
		  }
		  for (var c = a, d = b;;) {
		    var e = c.return;
		    if (null === e) break;
		    var f = e.alternate;
		    if (null === f) {
		      d = e.return;
		      if (null !== d) {
		        c = d;
		        continue;
		      }
		      break;
		    }
		    if (e.child === f.child) {
		      for (f = e.child; f;) {
		        if (f === c) return Xb(e), a;
		        if (f === d) return Xb(e), b;
		        f = f.sibling;
		      }
		      throw Error(p(188));
		    }
		    if (c.return !== d.return) c = e, d = f;else {
		      for (var g = false, h = e.child; h;) {
		        if (h === c) {
		          g = true;
		          c = e;
		          d = f;
		          break;
		        }
		        if (h === d) {
		          g = true;
		          d = e;
		          c = f;
		          break;
		        }
		        h = h.sibling;
		      }
		      if (!g) {
		        for (h = f.child; h;) {
		          if (h === c) {
		            g = true;
		            c = f;
		            d = e;
		            break;
		          }
		          if (h === d) {
		            g = true;
		            d = f;
		            c = e;
		            break;
		          }
		          h = h.sibling;
		        }
		        if (!g) throw Error(p(189));
		      }
		    }
		    if (c.alternate !== d) throw Error(p(190));
		  }
		  if (3 !== c.tag) throw Error(p(188));
		  return c.stateNode.current === c ? a : b;
		}
		function Zb(a) {
		  a = Yb(a);
		  return null !== a ? $b(a) : null;
		}
		function $b(a) {
		  if (5 === a.tag || 6 === a.tag) return a;
		  for (a = a.child; null !== a;) {
		    var b = $b(a);
		    if (null !== b) return b;
		    a = a.sibling;
		  }
		  return null;
		}
		var ac = ca.unstable_scheduleCallback,
		  bc = ca.unstable_cancelCallback,
		  cc = ca.unstable_shouldYield,
		  dc = ca.unstable_requestPaint,
		  B = ca.unstable_now,
		  ec = ca.unstable_getCurrentPriorityLevel,
		  fc = ca.unstable_ImmediatePriority,
		  gc = ca.unstable_UserBlockingPriority,
		  hc = ca.unstable_NormalPriority,
		  ic = ca.unstable_LowPriority,
		  jc = ca.unstable_IdlePriority,
		  kc = null,
		  lc = null;
		function mc(a) {
		  if (lc && "function" === typeof lc.onCommitFiberRoot) try {
		    lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
		  } catch (b) {}
		}
		var oc = Math.clz32 ? Math.clz32 : nc,
		  pc = Math.log,
		  qc = Math.LN2;
		function nc(a) {
		  a >>>= 0;
		  return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
		}
		var rc = 64,
		  sc = 4194304;
		function tc(a) {
		  switch (a & -a) {
		    case 1:
		      return 1;
		    case 2:
		      return 2;
		    case 4:
		      return 4;
		    case 8:
		      return 8;
		    case 16:
		      return 16;
		    case 32:
		      return 32;
		    case 64:
		    case 128:
		    case 256:
		    case 512:
		    case 1024:
		    case 2048:
		    case 4096:
		    case 8192:
		    case 16384:
		    case 32768:
		    case 65536:
		    case 131072:
		    case 262144:
		    case 524288:
		    case 1048576:
		    case 2097152:
		      return a & 4194240;
		    case 4194304:
		    case 8388608:
		    case 16777216:
		    case 33554432:
		    case 67108864:
		      return a & 130023424;
		    case 134217728:
		      return 134217728;
		    case 268435456:
		      return 268435456;
		    case 536870912:
		      return 536870912;
		    case 1073741824:
		      return 1073741824;
		    default:
		      return a;
		  }
		}
		function uc(a, b) {
		  var c = a.pendingLanes;
		  if (0 === c) return 0;
		  var d = 0,
		    e = a.suspendedLanes,
		    f = a.pingedLanes,
		    g = c & 268435455;
		  if (0 !== g) {
		    var h = g & ~e;
		    0 !== h ? d = tc(h) : (f &= g, 0 !== f && (d = tc(f)));
		  } else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f && (d = tc(f));
		  if (0 === d) return 0;
		  if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
		  0 !== (d & 4) && (d |= c & 16);
		  b = a.entangledLanes;
		  if (0 !== b) for (a = a.entanglements, b &= d; 0 < b;) c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
		  return d;
		}
		function vc(a, b) {
		  switch (a) {
		    case 1:
		    case 2:
		    case 4:
		      return b + 250;
		    case 8:
		    case 16:
		    case 32:
		    case 64:
		    case 128:
		    case 256:
		    case 512:
		    case 1024:
		    case 2048:
		    case 4096:
		    case 8192:
		    case 16384:
		    case 32768:
		    case 65536:
		    case 131072:
		    case 262144:
		    case 524288:
		    case 1048576:
		    case 2097152:
		      return b + 5E3;
		    case 4194304:
		    case 8388608:
		    case 16777216:
		    case 33554432:
		    case 67108864:
		      return -1;
		    case 134217728:
		    case 268435456:
		    case 536870912:
		    case 1073741824:
		      return -1;
		    default:
		      return -1;
		  }
		}
		function wc(a, b) {
		  for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f;) {
		    var g = 31 - oc(f),
		      h = 1 << g,
		      k = e[g];
		    if (-1 === k) {
		      if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
		    } else k <= b && (a.expiredLanes |= h);
		    f &= ~h;
		  }
		}
		function xc(a) {
		  a = a.pendingLanes & -1073741825;
		  return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
		}
		function yc() {
		  var a = rc;
		  rc <<= 1;
		  0 === (rc & 4194240) && (rc = 64);
		  return a;
		}
		function zc(a) {
		  for (var b = [], c = 0; 31 > c; c++) b.push(a);
		  return b;
		}
		function Ac(a, b, c) {
		  a.pendingLanes |= b;
		  536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
		  a = a.eventTimes;
		  b = 31 - oc(b);
		  a[b] = c;
		}
		function Bc(a, b) {
		  var c = a.pendingLanes & ~b;
		  a.pendingLanes = b;
		  a.suspendedLanes = 0;
		  a.pingedLanes = 0;
		  a.expiredLanes &= b;
		  a.mutableReadLanes &= b;
		  a.entangledLanes &= b;
		  b = a.entanglements;
		  var d = a.eventTimes;
		  for (a = a.expirationTimes; 0 < c;) {
		    var e = 31 - oc(c),
		      f = 1 << e;
		    b[e] = 0;
		    d[e] = -1;
		    a[e] = -1;
		    c &= ~f;
		  }
		}
		function Cc(a, b) {
		  var c = a.entangledLanes |= b;
		  for (a = a.entanglements; c;) {
		    var d = 31 - oc(c),
		      e = 1 << d;
		    e & b | a[d] & b && (a[d] |= b);
		    c &= ~e;
		  }
		}
		var C = 0;
		function Dc(a) {
		  a &= -a;
		  return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
		}
		var Ec,
		  Fc,
		  Gc,
		  Hc,
		  Ic,
		  Jc = false,
		  Kc = [],
		  Lc = null,
		  Mc = null,
		  Nc = null,
		  Oc = new Map(),
		  Pc = new Map(),
		  Qc = [],
		  Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
		function Sc(a, b) {
		  switch (a) {
		    case "focusin":
		    case "focusout":
		      Lc = null;
		      break;
		    case "dragenter":
		    case "dragleave":
		      Mc = null;
		      break;
		    case "mouseover":
		    case "mouseout":
		      Nc = null;
		      break;
		    case "pointerover":
		    case "pointerout":
		      Oc.delete(b.pointerId);
		      break;
		    case "gotpointercapture":
		    case "lostpointercapture":
		      Pc.delete(b.pointerId);
		  }
		}
		function Tc(a, b, c, d, e, f) {
		  if (null === a || a.nativeEvent !== f) return a = {
		    blockedOn: b,
		    domEventName: c,
		    eventSystemFlags: d,
		    nativeEvent: f,
		    targetContainers: [e]
		  }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
		  a.eventSystemFlags |= d;
		  b = a.targetContainers;
		  null !== e && -1 === b.indexOf(e) && b.push(e);
		  return a;
		}
		function Uc(a, b, c, d, e) {
		  switch (b) {
		    case "focusin":
		      return Lc = Tc(Lc, a, b, c, d, e), true;
		    case "dragenter":
		      return Mc = Tc(Mc, a, b, c, d, e), true;
		    case "mouseover":
		      return Nc = Tc(Nc, a, b, c, d, e), true;
		    case "pointerover":
		      var f = e.pointerId;
		      Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
		      return true;
		    case "gotpointercapture":
		      return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), true;
		  }
		  return false;
		}
		function Vc(a) {
		  var b = Wc(a.target);
		  if (null !== b) {
		    var c = Vb(b);
		    if (null !== c) if (b = c.tag, 13 === b) {
		      if (b = Wb(c), null !== b) {
		        a.blockedOn = b;
		        Ic(a.priority, function () {
		          Gc(c);
		        });
		        return;
		      }
		    } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
		      a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
		      return;
		    }
		  }
		  a.blockedOn = null;
		}
		function Xc(a) {
		  if (null !== a.blockedOn) return false;
		  for (var b = a.targetContainers; 0 < b.length;) {
		    var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
		    if (null === c) {
		      c = a.nativeEvent;
		      var d = new c.constructor(c.type, c);
		      wb = d;
		      c.target.dispatchEvent(d);
		      wb = null;
		    } else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
		    b.shift();
		  }
		  return true;
		}
		function Zc(a, b, c) {
		  Xc(a) && c.delete(b);
		}
		function $c() {
		  Jc = false;
		  null !== Lc && Xc(Lc) && (Lc = null);
		  null !== Mc && Xc(Mc) && (Mc = null);
		  null !== Nc && Xc(Nc) && (Nc = null);
		  Oc.forEach(Zc);
		  Pc.forEach(Zc);
		}
		function ad(a, b) {
		  a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
		}
		function bd(a) {
		  function b(b) {
		    return ad(b, a);
		  }
		  if (0 < Kc.length) {
		    ad(Kc[0], a);
		    for (var c = 1; c < Kc.length; c++) {
		      var d = Kc[c];
		      d.blockedOn === a && (d.blockedOn = null);
		    }
		  }
		  null !== Lc && ad(Lc, a);
		  null !== Mc && ad(Mc, a);
		  null !== Nc && ad(Nc, a);
		  Oc.forEach(b);
		  Pc.forEach(b);
		  for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
		  for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn);) Vc(c), null === c.blockedOn && Qc.shift();
		}
		var cd = ua.ReactCurrentBatchConfig,
		  dd = true;
		function ed(a, b, c, d) {
		  var e = C,
		    f = cd.transition;
		  cd.transition = null;
		  try {
		    C = 1, fd(a, b, c, d);
		  } finally {
		    C = e, cd.transition = f;
		  }
		}
		function gd(a, b, c, d) {
		  var e = C,
		    f = cd.transition;
		  cd.transition = null;
		  try {
		    C = 4, fd(a, b, c, d);
		  } finally {
		    C = e, cd.transition = f;
		  }
		}
		function fd(a, b, c, d) {
		  if (dd) {
		    var e = Yc(a, b, c, d);
		    if (null === e) hd(a, b, d, id, c), Sc(a, d);else if (Uc(e, a, b, c, d)) d.stopPropagation();else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
		      for (; null !== e;) {
		        var f = Cb(e);
		        null !== f && Ec(f);
		        f = Yc(a, b, c, d);
		        null === f && hd(a, b, d, id, c);
		        if (f === e) break;
		        e = f;
		      }
		      null !== e && d.stopPropagation();
		    } else hd(a, b, d, null, c);
		  }
		}
		var id = null;
		function Yc(a, b, c, d) {
		  id = null;
		  a = xb(d);
		  a = Wc(a);
		  if (null !== a) if (b = Vb(a), null === b) a = null;else if (c = b.tag, 13 === c) {
		    a = Wb(b);
		    if (null !== a) return a;
		    a = null;
		  } else if (3 === c) {
		    if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
		    a = null;
		  } else b !== a && (a = null);
		  id = a;
		  return null;
		}
		function jd(a) {
		  switch (a) {
		    case "cancel":
		    case "click":
		    case "close":
		    case "contextmenu":
		    case "copy":
		    case "cut":
		    case "auxclick":
		    case "dblclick":
		    case "dragend":
		    case "dragstart":
		    case "drop":
		    case "focusin":
		    case "focusout":
		    case "input":
		    case "invalid":
		    case "keydown":
		    case "keypress":
		    case "keyup":
		    case "mousedown":
		    case "mouseup":
		    case "paste":
		    case "pause":
		    case "play":
		    case "pointercancel":
		    case "pointerdown":
		    case "pointerup":
		    case "ratechange":
		    case "reset":
		    case "resize":
		    case "seeked":
		    case "submit":
		    case "touchcancel":
		    case "touchend":
		    case "touchstart":
		    case "volumechange":
		    case "change":
		    case "selectionchange":
		    case "textInput":
		    case "compositionstart":
		    case "compositionend":
		    case "compositionupdate":
		    case "beforeblur":
		    case "afterblur":
		    case "beforeinput":
		    case "blur":
		    case "fullscreenchange":
		    case "focus":
		    case "hashchange":
		    case "popstate":
		    case "select":
		    case "selectstart":
		      return 1;
		    case "drag":
		    case "dragenter":
		    case "dragexit":
		    case "dragleave":
		    case "dragover":
		    case "mousemove":
		    case "mouseout":
		    case "mouseover":
		    case "pointermove":
		    case "pointerout":
		    case "pointerover":
		    case "scroll":
		    case "toggle":
		    case "touchmove":
		    case "wheel":
		    case "mouseenter":
		    case "mouseleave":
		    case "pointerenter":
		    case "pointerleave":
		      return 4;
		    case "message":
		      switch (ec()) {
		        case fc:
		          return 1;
		        case gc:
		          return 4;
		        case hc:
		        case ic:
		          return 16;
		        case jc:
		          return 536870912;
		        default:
		          return 16;
		      }
		    default:
		      return 16;
		  }
		}
		var kd = null,
		  ld = null,
		  md = null;
		function nd() {
		  if (md) return md;
		  var a,
		    b = ld,
		    c = b.length,
		    d,
		    e = "value" in kd ? kd.value : kd.textContent,
		    f = e.length;
		  for (a = 0; a < c && b[a] === e[a]; a++);
		  var g = c - a;
		  for (d = 1; d <= g && b[c - d] === e[f - d]; d++);
		  return md = e.slice(a, 1 < d ? 1 - d : void 0);
		}
		function od(a) {
		  var b = a.keyCode;
		  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
		  10 === a && (a = 13);
		  return 32 <= a || 13 === a ? a : 0;
		}
		function pd() {
		  return true;
		}
		function qd() {
		  return false;
		}
		function rd(a) {
		  function b(b, d, e, f, g) {
		    this._reactName = b;
		    this._targetInst = e;
		    this.type = d;
		    this.nativeEvent = f;
		    this.target = g;
		    this.currentTarget = null;
		    for (var c in a) a.hasOwnProperty(c) && (b = a[c], this[c] = b ? b(f) : f[c]);
		    this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : false === f.returnValue) ? pd : qd;
		    this.isPropagationStopped = qd;
		    return this;
		  }
		  A(b.prototype, {
		    preventDefault: function () {
		      this.defaultPrevented = true;
		      var a = this.nativeEvent;
		      a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = false), this.isDefaultPrevented = pd);
		    },
		    stopPropagation: function () {
		      var a = this.nativeEvent;
		      a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = true), this.isPropagationStopped = pd);
		    },
		    persist: function () {},
		    isPersistent: pd
		  });
		  return b;
		}
		var sd = {
		    eventPhase: 0,
		    bubbles: 0,
		    cancelable: 0,
		    timeStamp: function (a) {
		      return a.timeStamp || Date.now();
		    },
		    defaultPrevented: 0,
		    isTrusted: 0
		  },
		  td = rd(sd),
		  ud = A({}, sd, {
		    view: 0,
		    detail: 0
		  }),
		  vd = rd(ud),
		  wd,
		  xd,
		  yd,
		  Ad = A({}, ud, {
		    screenX: 0,
		    screenY: 0,
		    clientX: 0,
		    clientY: 0,
		    pageX: 0,
		    pageY: 0,
		    ctrlKey: 0,
		    shiftKey: 0,
		    altKey: 0,
		    metaKey: 0,
		    getModifierState: zd,
		    button: 0,
		    buttons: 0,
		    relatedTarget: function (a) {
		      return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
		    },
		    movementX: function (a) {
		      if ("movementX" in a) return a.movementX;
		      a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
		      return wd;
		    },
		    movementY: function (a) {
		      return "movementY" in a ? a.movementY : xd;
		    }
		  }),
		  Bd = rd(Ad),
		  Cd = A({}, Ad, {
		    dataTransfer: 0
		  }),
		  Dd = rd(Cd),
		  Ed = A({}, ud, {
		    relatedTarget: 0
		  }),
		  Fd = rd(Ed),
		  Gd = A({}, sd, {
		    animationName: 0,
		    elapsedTime: 0,
		    pseudoElement: 0
		  }),
		  Hd = rd(Gd),
		  Id = A({}, sd, {
		    clipboardData: function (a) {
		      return "clipboardData" in a ? a.clipboardData : window.clipboardData;
		    }
		  }),
		  Jd = rd(Id),
		  Kd = A({}, sd, {
		    data: 0
		  }),
		  Ld = rd(Kd),
		  Md = {
		    Esc: "Escape",
		    Spacebar: " ",
		    Left: "ArrowLeft",
		    Up: "ArrowUp",
		    Right: "ArrowRight",
		    Down: "ArrowDown",
		    Del: "Delete",
		    Win: "OS",
		    Menu: "ContextMenu",
		    Apps: "ContextMenu",
		    Scroll: "ScrollLock",
		    MozPrintableKey: "Unidentified"
		  },
		  Nd = {
		    8: "Backspace",
		    9: "Tab",
		    12: "Clear",
		    13: "Enter",
		    16: "Shift",
		    17: "Control",
		    18: "Alt",
		    19: "Pause",
		    20: "CapsLock",
		    27: "Escape",
		    32: " ",
		    33: "PageUp",
		    34: "PageDown",
		    35: "End",
		    36: "Home",
		    37: "ArrowLeft",
		    38: "ArrowUp",
		    39: "ArrowRight",
		    40: "ArrowDown",
		    45: "Insert",
		    46: "Delete",
		    112: "F1",
		    113: "F2",
		    114: "F3",
		    115: "F4",
		    116: "F5",
		    117: "F6",
		    118: "F7",
		    119: "F8",
		    120: "F9",
		    121: "F10",
		    122: "F11",
		    123: "F12",
		    144: "NumLock",
		    145: "ScrollLock",
		    224: "Meta"
		  },
		  Od = {
		    Alt: "altKey",
		    Control: "ctrlKey",
		    Meta: "metaKey",
		    Shift: "shiftKey"
		  };
		function Pd(a) {
		  var b = this.nativeEvent;
		  return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
		}
		function zd() {
		  return Pd;
		}
		var Qd = A({}, ud, {
		    key: function (a) {
		      if (a.key) {
		        var b = Md[a.key] || a.key;
		        if ("Unidentified" !== b) return b;
		      }
		      return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
		    },
		    code: 0,
		    location: 0,
		    ctrlKey: 0,
		    shiftKey: 0,
		    altKey: 0,
		    metaKey: 0,
		    repeat: 0,
		    locale: 0,
		    getModifierState: zd,
		    charCode: function (a) {
		      return "keypress" === a.type ? od(a) : 0;
		    },
		    keyCode: function (a) {
		      return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
		    },
		    which: function (a) {
		      return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
		    }
		  }),
		  Rd = rd(Qd),
		  Sd = A({}, Ad, {
		    pointerId: 0,
		    width: 0,
		    height: 0,
		    pressure: 0,
		    tangentialPressure: 0,
		    tiltX: 0,
		    tiltY: 0,
		    twist: 0,
		    pointerType: 0,
		    isPrimary: 0
		  }),
		  Td = rd(Sd),
		  Ud = A({}, ud, {
		    touches: 0,
		    targetTouches: 0,
		    changedTouches: 0,
		    altKey: 0,
		    metaKey: 0,
		    ctrlKey: 0,
		    shiftKey: 0,
		    getModifierState: zd
		  }),
		  Vd = rd(Ud),
		  Wd = A({}, sd, {
		    propertyName: 0,
		    elapsedTime: 0,
		    pseudoElement: 0
		  }),
		  Xd = rd(Wd),
		  Yd = A({}, Ad, {
		    deltaX: function (a) {
		      return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
		    },
		    deltaY: function (a) {
		      return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
		    },
		    deltaZ: 0,
		    deltaMode: 0
		  }),
		  Zd = rd(Yd),
		  $d = [9, 13, 27, 32],
		  ae = ia && "CompositionEvent" in window,
		  be = null;
		ia && "documentMode" in document && (be = document.documentMode);
		var ce = ia && "TextEvent" in window && !be,
		  de = ia && (!ae || be && 8 < be && 11 >= be),
		  ee = String.fromCharCode(32),
		  fe = false;
		function ge(a, b) {
		  switch (a) {
		    case "keyup":
		      return -1 !== $d.indexOf(b.keyCode);
		    case "keydown":
		      return 229 !== b.keyCode;
		    case "keypress":
		    case "mousedown":
		    case "focusout":
		      return true;
		    default:
		      return false;
		  }
		}
		function he(a) {
		  a = a.detail;
		  return "object" === typeof a && "data" in a ? a.data : null;
		}
		var ie = false;
		function je(a, b) {
		  switch (a) {
		    case "compositionend":
		      return he(b);
		    case "keypress":
		      if (32 !== b.which) return null;
		      fe = true;
		      return ee;
		    case "textInput":
		      return a = b.data, a === ee && fe ? null : a;
		    default:
		      return null;
		  }
		}
		function ke(a, b) {
		  if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
		  switch (a) {
		    case "paste":
		      return null;
		    case "keypress":
		      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
		        if (b.char && 1 < b.char.length) return b.char;
		        if (b.which) return String.fromCharCode(b.which);
		      }
		      return null;
		    case "compositionend":
		      return de && "ko" !== b.locale ? null : b.data;
		    default:
		      return null;
		  }
		}
		var le = {
		  color: true,
		  date: true,
		  datetime: true,
		  "datetime-local": true,
		  email: true,
		  month: true,
		  number: true,
		  password: true,
		  range: true,
		  search: true,
		  tel: true,
		  text: true,
		  time: true,
		  url: true,
		  week: true
		};
		function me(a) {
		  var b = a && a.nodeName && a.nodeName.toLowerCase();
		  return "input" === b ? !!le[a.type] : "textarea" === b ? true : false;
		}
		function ne(a, b, c, d) {
		  Eb(d);
		  b = oe(b, "onChange");
		  0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({
		    event: c,
		    listeners: b
		  }));
		}
		var pe = null,
		  qe = null;
		function re(a) {
		  se(a, 0);
		}
		function te(a) {
		  var b = ue(a);
		  if (Wa(b)) return a;
		}
		function ve(a, b) {
		  if ("change" === a) return b;
		}
		var we = false;
		if (ia) {
		  var xe;
		  if (ia) {
		    var ye = "oninput" in document;
		    if (!ye) {
		      var ze = document.createElement("div");
		      ze.setAttribute("oninput", "return;");
		      ye = "function" === typeof ze.oninput;
		    }
		    xe = ye;
		  } else xe = false;
		  we = xe && (!document.documentMode || 9 < document.documentMode);
		}
		function Ae() {
		  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
		}
		function Be(a) {
		  if ("value" === a.propertyName && te(qe)) {
		    var b = [];
		    ne(b, qe, a, xb(a));
		    Jb(re, b);
		  }
		}
		function Ce(a, b, c) {
		  "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
		}
		function De(a) {
		  if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
		}
		function Ee(a, b) {
		  if ("click" === a) return te(b);
		}
		function Fe(a, b) {
		  if ("input" === a || "change" === a) return te(b);
		}
		function Ge(a, b) {
		  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
		}
		var He = "function" === typeof Object.is ? Object.is : Ge;
		function Ie(a, b) {
		  if (He(a, b)) return true;
		  if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return false;
		  var c = Object.keys(a),
		    d = Object.keys(b);
		  if (c.length !== d.length) return false;
		  for (d = 0; d < c.length; d++) {
		    var e = c[d];
		    if (!ja.call(b, e) || !He(a[e], b[e])) return false;
		  }
		  return true;
		}
		function Je(a) {
		  for (; a && a.firstChild;) a = a.firstChild;
		  return a;
		}
		function Ke(a, b) {
		  var c = Je(a);
		  a = 0;
		  for (var d; c;) {
		    if (3 === c.nodeType) {
		      d = a + c.textContent.length;
		      if (a <= b && d >= b) return {
		        node: c,
		        offset: b - a
		      };
		      a = d;
		    }
		    a: {
		      for (; c;) {
		        if (c.nextSibling) {
		          c = c.nextSibling;
		          break a;
		        }
		        c = c.parentNode;
		      }
		      c = void 0;
		    }
		    c = Je(c);
		  }
		}
		function Le(a, b) {
		  return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
		}
		function Me() {
		  for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement;) {
		    try {
		      var c = "string" === typeof b.contentWindow.location.href;
		    } catch (d) {
		      c = false;
		    }
		    if (c) a = b.contentWindow;else break;
		    b = Xa(a.document);
		  }
		  return b;
		}
		function Ne(a) {
		  var b = a && a.nodeName && a.nodeName.toLowerCase();
		  return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
		}
		function Oe(a) {
		  var b = Me(),
		    c = a.focusedElem,
		    d = a.selectionRange;
		  if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
		    if (null !== d && Ne(c)) if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
		      a = a.getSelection();
		      var e = c.textContent.length,
		        f = Math.min(d.start, e);
		      d = void 0 === d.end ? f : Math.min(d.end, e);
		      !a.extend && f > d && (e = d, d = f, f = e);
		      e = Ke(c, f);
		      var g = Ke(c, d);
		      e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
		    }
		    b = [];
		    for (a = c; a = a.parentNode;) 1 === a.nodeType && b.push({
		      element: a,
		      left: a.scrollLeft,
		      top: a.scrollTop
		    });
		    "function" === typeof c.focus && c.focus();
		    for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
		  }
		}
		var Pe = ia && "documentMode" in document && 11 >= document.documentMode,
		  Qe = null,
		  Re = null,
		  Se = null,
		  Te = false;
		function Ue(a, b, c) {
		  var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
		  Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = {
		    start: d.selectionStart,
		    end: d.selectionEnd
		  } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = {
		    anchorNode: d.anchorNode,
		    anchorOffset: d.anchorOffset,
		    focusNode: d.focusNode,
		    focusOffset: d.focusOffset
		  }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({
		    event: b,
		    listeners: d
		  }), b.target = Qe)));
		}
		function Ve(a, b) {
		  var c = {};
		  c[a.toLowerCase()] = b.toLowerCase();
		  c["Webkit" + a] = "webkit" + b;
		  c["Moz" + a] = "moz" + b;
		  return c;
		}
		var We = {
		    animationend: Ve("Animation", "AnimationEnd"),
		    animationiteration: Ve("Animation", "AnimationIteration"),
		    animationstart: Ve("Animation", "AnimationStart"),
		    transitionend: Ve("Transition", "TransitionEnd")
		  },
		  Xe = {},
		  Ye = {};
		ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
		function Ze(a) {
		  if (Xe[a]) return Xe[a];
		  if (!We[a]) return a;
		  var b = We[a],
		    c;
		  for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
		  return a;
		}
		var $e = Ze("animationend"),
		  af = Ze("animationiteration"),
		  bf = Ze("animationstart"),
		  cf = Ze("transitionend"),
		  df = new Map(),
		  ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
		function ff(a, b) {
		  df.set(a, b);
		  fa(b, [a]);
		}
		for (var gf = 0; gf < ef.length; gf++) {
		  var hf = ef[gf],
		    jf = hf.toLowerCase(),
		    kf = hf[0].toUpperCase() + hf.slice(1);
		  ff(jf, "on" + kf);
		}
		ff($e, "onAnimationEnd");
		ff(af, "onAnimationIteration");
		ff(bf, "onAnimationStart");
		ff("dblclick", "onDoubleClick");
		ff("focusin", "onFocus");
		ff("focusout", "onBlur");
		ff(cf, "onTransitionEnd");
		ha("onMouseEnter", ["mouseout", "mouseover"]);
		ha("onMouseLeave", ["mouseout", "mouseover"]);
		ha("onPointerEnter", ["pointerout", "pointerover"]);
		ha("onPointerLeave", ["pointerout", "pointerover"]);
		fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
		fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
		fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
		fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
		fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
		fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
		var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
		  mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
		function nf(a, b, c) {
		  var d = a.type || "unknown-event";
		  a.currentTarget = c;
		  Ub(d, b, void 0, a);
		  a.currentTarget = null;
		}
		function se(a, b) {
		  b = 0 !== (b & 4);
		  for (var c = 0; c < a.length; c++) {
		    var d = a[c],
		      e = d.event;
		    d = d.listeners;
		    a: {
		      var f = void 0;
		      if (b) for (var g = d.length - 1; 0 <= g; g--) {
		        var h = d[g],
		          k = h.instance,
		          l = h.currentTarget;
		        h = h.listener;
		        if (k !== f && e.isPropagationStopped()) break a;
		        nf(e, h, l);
		        f = k;
		      } else for (g = 0; g < d.length; g++) {
		        h = d[g];
		        k = h.instance;
		        l = h.currentTarget;
		        h = h.listener;
		        if (k !== f && e.isPropagationStopped()) break a;
		        nf(e, h, l);
		        f = k;
		      }
		    }
		  }
		  if (Qb) throw a = Rb, Qb = false, Rb = null, a;
		}
		function D(a, b) {
		  var c = b[of];
		  void 0 === c && (c = b[of] = new Set());
		  var d = a + "__bubble";
		  c.has(d) || (pf(b, a, 2, false), c.add(d));
		}
		function qf(a, b, c) {
		  var d = 0;
		  b && (d |= 4);
		  pf(c, a, d, b);
		}
		var rf = "_reactListening" + Math.random().toString(36).slice(2);
		function sf(a) {
		  if (!a[rf]) {
		    a[rf] = true;
		    da.forEach(function (b) {
		      "selectionchange" !== b && (mf.has(b) || qf(b, false, a), qf(b, true, a));
		    });
		    var b = 9 === a.nodeType ? a : a.ownerDocument;
		    null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
		  }
		}
		function pf(a, b, c, d) {
		  switch (jd(b)) {
		    case 1:
		      var e = ed;
		      break;
		    case 4:
		      e = gd;
		      break;
		    default:
		      e = fd;
		  }
		  c = e.bind(null, b, c, a);
		  e = void 0;
		  !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
		  d ? void 0 !== e ? a.addEventListener(b, c, {
		    capture: true,
		    passive: e
		  }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, {
		    passive: e
		  }) : a.addEventListener(b, c, false);
		}
		function hd(a, b, c, d, e) {
		  var f = d;
		  if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (;;) {
		    if (null === d) return;
		    var g = d.tag;
		    if (3 === g || 4 === g) {
		      var h = d.stateNode.containerInfo;
		      if (h === e || 8 === h.nodeType && h.parentNode === e) break;
		      if (4 === g) for (g = d.return; null !== g;) {
		        var k = g.tag;
		        if (3 === k || 4 === k) if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
		        g = g.return;
		      }
		      for (; null !== h;) {
		        g = Wc(h);
		        if (null === g) return;
		        k = g.tag;
		        if (5 === k || 6 === k) {
		          d = f = g;
		          continue a;
		        }
		        h = h.parentNode;
		      }
		    }
		    d = d.return;
		  }
		  Jb(function () {
		    var d = f,
		      e = xb(c),
		      g = [];
		    a: {
		      var h = df.get(a);
		      if (void 0 !== h) {
		        var k = td,
		          n = a;
		        switch (a) {
		          case "keypress":
		            if (0 === od(c)) break a;
		          case "keydown":
		          case "keyup":
		            k = Rd;
		            break;
		          case "focusin":
		            n = "focus";
		            k = Fd;
		            break;
		          case "focusout":
		            n = "blur";
		            k = Fd;
		            break;
		          case "beforeblur":
		          case "afterblur":
		            k = Fd;
		            break;
		          case "click":
		            if (2 === c.button) break a;
		          case "auxclick":
		          case "dblclick":
		          case "mousedown":
		          case "mousemove":
		          case "mouseup":
		          case "mouseout":
		          case "mouseover":
		          case "contextmenu":
		            k = Bd;
		            break;
		          case "drag":
		          case "dragend":
		          case "dragenter":
		          case "dragexit":
		          case "dragleave":
		          case "dragover":
		          case "dragstart":
		          case "drop":
		            k = Dd;
		            break;
		          case "touchcancel":
		          case "touchend":
		          case "touchmove":
		          case "touchstart":
		            k = Vd;
		            break;
		          case $e:
		          case af:
		          case bf:
		            k = Hd;
		            break;
		          case cf:
		            k = Xd;
		            break;
		          case "scroll":
		            k = vd;
		            break;
		          case "wheel":
		            k = Zd;
		            break;
		          case "copy":
		          case "cut":
		          case "paste":
		            k = Jd;
		            break;
		          case "gotpointercapture":
		          case "lostpointercapture":
		          case "pointercancel":
		          case "pointerdown":
		          case "pointermove":
		          case "pointerout":
		          case "pointerover":
		          case "pointerup":
		            k = Td;
		        }
		        var t = 0 !== (b & 4),
		          J = !t && "scroll" === a,
		          x = t ? null !== h ? h + "Capture" : null : h;
		        t = [];
		        for (var w = d, u; null !== w;) {
		          u = w;
		          var F = u.stateNode;
		          5 === u.tag && null !== F && (u = F, null !== x && (F = Kb(w, x), null != F && t.push(tf(w, F, u))));
		          if (J) break;
		          w = w.return;
		        }
		        0 < t.length && (h = new k(h, n, null, c, e), g.push({
		          event: h,
		          listeners: t
		        }));
		      }
		    }
		    if (0 === (b & 7)) {
		      a: {
		        h = "mouseover" === a || "pointerover" === a;
		        k = "mouseout" === a || "pointerout" === a;
		        if (h && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf])) break a;
		        if (k || h) {
		          h = e.window === e ? e : (h = e.ownerDocument) ? h.defaultView || h.parentWindow : window;
		          if (k) {
		            if (n = c.relatedTarget || c.toElement, k = d, n = n ? Wc(n) : null, null !== n && (J = Vb(n), n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
		          } else k = null, n = d;
		          if (k !== n) {
		            t = Bd;
		            F = "onMouseLeave";
		            x = "onMouseEnter";
		            w = "mouse";
		            if ("pointerout" === a || "pointerover" === a) t = Td, F = "onPointerLeave", x = "onPointerEnter", w = "pointer";
		            J = null == k ? h : ue(k);
		            u = null == n ? h : ue(n);
		            h = new t(F, w + "leave", k, c, e);
		            h.target = J;
		            h.relatedTarget = u;
		            F = null;
		            Wc(e) === d && (t = new t(x, w + "enter", n, c, e), t.target = u, t.relatedTarget = J, F = t);
		            J = F;
		            if (k && n) b: {
		              t = k;
		              x = n;
		              w = 0;
		              for (u = t; u; u = vf(u)) w++;
		              u = 0;
		              for (F = x; F; F = vf(F)) u++;
		              for (; 0 < w - u;) t = vf(t), w--;
		              for (; 0 < u - w;) x = vf(x), u--;
		              for (; w--;) {
		                if (t === x || null !== x && t === x.alternate) break b;
		                t = vf(t);
		                x = vf(x);
		              }
		              t = null;
		            } else t = null;
		            null !== k && wf(g, h, k, t, false);
		            null !== n && null !== J && wf(g, J, n, t, true);
		          }
		        }
		      }
		      a: {
		        h = d ? ue(d) : window;
		        k = h.nodeName && h.nodeName.toLowerCase();
		        if ("select" === k || "input" === k && "file" === h.type) var na = ve;else if (me(h)) {
		          if (we) na = Fe;else {
		            na = De;
		            var xa = Ce;
		          }
		        } else (k = h.nodeName) && "input" === k.toLowerCase() && ("checkbox" === h.type || "radio" === h.type) && (na = Ee);
		        if (na && (na = na(a, d))) {
		          ne(g, na, c, e);
		          break a;
		        }
		        xa && xa(a, h, d);
		        "focusout" === a && (xa = h._wrapperState) && xa.controlled && "number" === h.type && cb(h, "number", h.value);
		      }
		      xa = d ? ue(d) : window;
		      switch (a) {
		        case "focusin":
		          if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d, Se = null;
		          break;
		        case "focusout":
		          Se = Re = Qe = null;
		          break;
		        case "mousedown":
		          Te = true;
		          break;
		        case "contextmenu":
		        case "mouseup":
		        case "dragend":
		          Te = false;
		          Ue(g, c, e);
		          break;
		        case "selectionchange":
		          if (Pe) break;
		        case "keydown":
		        case "keyup":
		          Ue(g, c, e);
		      }
		      var $a;
		      if (ae) b: {
		        switch (a) {
		          case "compositionstart":
		            var ba = "onCompositionStart";
		            break b;
		          case "compositionend":
		            ba = "onCompositionEnd";
		            break b;
		          case "compositionupdate":
		            ba = "onCompositionUpdate";
		            break b;
		        }
		        ba = void 0;
		      } else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
		      ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e), g.push({
		        event: ba,
		        listeners: xa
		      }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
		      if ($a = ce ? je(a, c) : ke(a, c)) d = oe(d, "onBeforeInput"), 0 < d.length && (e = new Ld("onBeforeInput", "beforeinput", null, c, e), g.push({
		        event: e,
		        listeners: d
		      }), e.data = $a);
		    }
		    se(g, b);
		  });
		}
		function tf(a, b, c) {
		  return {
		    instance: a,
		    listener: b,
		    currentTarget: c
		  };
		}
		function oe(a, b) {
		  for (var c = b + "Capture", d = []; null !== a;) {
		    var e = a,
		      f = e.stateNode;
		    5 === e.tag && null !== f && (e = f, f = Kb(a, c), null != f && d.unshift(tf(a, f, e)), f = Kb(a, b), null != f && d.push(tf(a, f, e)));
		    a = a.return;
		  }
		  return d;
		}
		function vf(a) {
		  if (null === a) return null;
		  do a = a.return; while (a && 5 !== a.tag);
		  return a ? a : null;
		}
		function wf(a, b, c, d, e) {
		  for (var f = b._reactName, g = []; null !== c && c !== d;) {
		    var h = c,
		      k = h.alternate,
		      l = h.stateNode;
		    if (null !== k && k === d) break;
		    5 === h.tag && null !== l && (h = l, e ? (k = Kb(c, f), null != k && g.unshift(tf(c, k, h))) : e || (k = Kb(c, f), null != k && g.push(tf(c, k, h))));
		    c = c.return;
		  }
		  0 !== g.length && a.push({
		    event: b,
		    listeners: g
		  });
		}
		var xf = /\r\n?/g,
		  yf = /\u0000|\uFFFD/g;
		function zf(a) {
		  return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
		}
		function Af(a, b, c) {
		  b = zf(b);
		  if (zf(a) !== b && c) throw Error(p(425));
		}
		function Bf() {}
		var Cf = null,
		  Df = null;
		function Ef(a, b) {
		  return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
		}
		var Ff = "function" === typeof setTimeout ? setTimeout : void 0,
		  Gf = "function" === typeof clearTimeout ? clearTimeout : void 0,
		  Hf = "function" === typeof Promise ? Promise : void 0,
		  Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function (a) {
		    return Hf.resolve(null).then(a).catch(If);
		  } : Ff;
		function If(a) {
		  setTimeout(function () {
		    throw a;
		  });
		}
		function Kf(a, b) {
		  var c = b,
		    d = 0;
		  do {
		    var e = c.nextSibling;
		    a.removeChild(c);
		    if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
		      if (0 === d) {
		        a.removeChild(e);
		        bd(b);
		        return;
		      }
		      d--;
		    } else "$" !== c && "$?" !== c && "$!" !== c || d++;
		    c = e;
		  } while (c);
		  bd(b);
		}
		function Lf(a) {
		  for (; null != a; a = a.nextSibling) {
		    var b = a.nodeType;
		    if (1 === b || 3 === b) break;
		    if (8 === b) {
		      b = a.data;
		      if ("$" === b || "$!" === b || "$?" === b) break;
		      if ("/$" === b) return null;
		    }
		  }
		  return a;
		}
		function Mf(a) {
		  a = a.previousSibling;
		  for (var b = 0; a;) {
		    if (8 === a.nodeType) {
		      var c = a.data;
		      if ("$" === c || "$!" === c || "$?" === c) {
		        if (0 === b) return a;
		        b--;
		      } else "/$" === c && b++;
		    }
		    a = a.previousSibling;
		  }
		  return null;
		}
		var Nf = Math.random().toString(36).slice(2),
		  Of = "__reactFiber$" + Nf,
		  Pf = "__reactProps$" + Nf,
		  uf = "__reactContainer$" + Nf,
		  of = "__reactEvents$" + Nf,
		  Qf = "__reactListeners$" + Nf,
		  Rf = "__reactHandles$" + Nf;
		function Wc(a) {
		  var b = a[Of];
		  if (b) return b;
		  for (var c = a.parentNode; c;) {
		    if (b = c[uf] || c[Of]) {
		      c = b.alternate;
		      if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a;) {
		        if (c = a[Of]) return c;
		        a = Mf(a);
		      }
		      return b;
		    }
		    a = c;
		    c = a.parentNode;
		  }
		  return null;
		}
		function Cb(a) {
		  a = a[Of] || a[uf];
		  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
		}
		function ue(a) {
		  if (5 === a.tag || 6 === a.tag) return a.stateNode;
		  throw Error(p(33));
		}
		function Db(a) {
		  return a[Pf] || null;
		}
		var Sf = [],
		  Tf = -1;
		function Uf(a) {
		  return {
		    current: a
		  };
		}
		function E(a) {
		  0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
		}
		function G(a, b) {
		  Tf++;
		  Sf[Tf] = a.current;
		  a.current = b;
		}
		var Vf = {},
		  H = Uf(Vf),
		  Wf = Uf(false),
		  Xf = Vf;
		function Yf(a, b) {
		  var c = a.type.contextTypes;
		  if (!c) return Vf;
		  var d = a.stateNode;
		  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
		  var e = {},
		    f;
		  for (f in c) e[f] = b[f];
		  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
		  return e;
		}
		function Zf(a) {
		  a = a.childContextTypes;
		  return null !== a && void 0 !== a;
		}
		function $f() {
		  E(Wf);
		  E(H);
		}
		function ag(a, b, c) {
		  if (H.current !== Vf) throw Error(p(168));
		  G(H, b);
		  G(Wf, c);
		}
		function bg(a, b, c) {
		  var d = a.stateNode;
		  b = b.childContextTypes;
		  if ("function" !== typeof d.getChildContext) return c;
		  d = d.getChildContext();
		  for (var e in d) if (!(e in b)) throw Error(p(108, Ra(a) || "Unknown", e));
		  return A({}, c, d);
		}
		function cg(a) {
		  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
		  Xf = H.current;
		  G(H, a);
		  G(Wf, Wf.current);
		  return true;
		}
		function dg(a, b, c) {
		  var d = a.stateNode;
		  if (!d) throw Error(p(169));
		  c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
		  G(Wf, c);
		}
		var eg = null,
		  fg = false,
		  gg = false;
		function hg(a) {
		  null === eg ? eg = [a] : eg.push(a);
		}
		function ig(a) {
		  fg = true;
		  hg(a);
		}
		function jg() {
		  if (!gg && null !== eg) {
		    gg = true;
		    var a = 0,
		      b = C;
		    try {
		      var c = eg;
		      for (C = 1; a < c.length; a++) {
		        var d = c[a];
		        do d = d(!0); while (null !== d);
		      }
		      eg = null;
		      fg = !1;
		    } catch (e) {
		      throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
		    } finally {
		      C = b, gg = false;
		    }
		  }
		  return null;
		}
		var kg = [],
		  lg = 0,
		  mg = null,
		  ng = 0,
		  og = [],
		  pg = 0,
		  qg = null,
		  rg = 1,
		  sg = "";
		function tg(a, b) {
		  kg[lg++] = ng;
		  kg[lg++] = mg;
		  mg = a;
		  ng = b;
		}
		function ug(a, b, c) {
		  og[pg++] = rg;
		  og[pg++] = sg;
		  og[pg++] = qg;
		  qg = a;
		  var d = rg;
		  a = sg;
		  var e = 32 - oc(d) - 1;
		  d &= ~(1 << e);
		  c += 1;
		  var f = 32 - oc(b) + e;
		  if (30 < f) {
		    var g = e - e % 5;
		    f = (d & (1 << g) - 1).toString(32);
		    d >>= g;
		    e -= g;
		    rg = 1 << 32 - oc(b) + e | c << e | d;
		    sg = f + a;
		  } else rg = 1 << f | c << e | d, sg = a;
		}
		function vg(a) {
		  null !== a.return && (tg(a, 1), ug(a, 1, 0));
		}
		function wg(a) {
		  for (; a === mg;) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
		  for (; a === qg;) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
		}
		var xg = null,
		  yg = null,
		  I = false,
		  zg = null;
		function Ag(a, b) {
		  var c = Bg(5, null, null, 0);
		  c.elementType = "DELETED";
		  c.stateNode = b;
		  c.return = a;
		  b = a.deletions;
		  null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
		}
		function Cg(a, b) {
		  switch (a.tag) {
		    case 5:
		      var c = a.type;
		      b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
		      return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
		    case 6:
		      return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
		    case 13:
		      return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? {
		        id: rg,
		        overflow: sg
		      } : null, a.memoizedState = {
		        dehydrated: b,
		        treeContext: c,
		        retryLane: 1073741824
		      }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
		    default:
		      return false;
		  }
		}
		function Dg(a) {
		  return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
		}
		function Eg(a) {
		  if (I) {
		    var b = yg;
		    if (b) {
		      var c = b;
		      if (!Cg(a, b)) {
		        if (Dg(a)) throw Error(p(418));
		        b = Lf(c.nextSibling);
		        var d = xg;
		        b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
		      }
		    } else {
		      if (Dg(a)) throw Error(p(418));
		      a.flags = a.flags & -4097 | 2;
		      I = false;
		      xg = a;
		    }
		  }
		}
		function Fg(a) {
		  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) a = a.return;
		  xg = a;
		}
		function Gg(a) {
		  if (a !== xg) return false;
		  if (!I) return Fg(a), I = true, false;
		  var b;
		  (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
		  if (b && (b = yg)) {
		    if (Dg(a)) throw Hg(), Error(p(418));
		    for (; b;) Ag(a, b), b = Lf(b.nextSibling);
		  }
		  Fg(a);
		  if (13 === a.tag) {
		    a = a.memoizedState;
		    a = null !== a ? a.dehydrated : null;
		    if (!a) throw Error(p(317));
		    a: {
		      a = a.nextSibling;
		      for (b = 0; a;) {
		        if (8 === a.nodeType) {
		          var c = a.data;
		          if ("/$" === c) {
		            if (0 === b) {
		              yg = Lf(a.nextSibling);
		              break a;
		            }
		            b--;
		          } else "$" !== c && "$!" !== c && "$?" !== c || b++;
		        }
		        a = a.nextSibling;
		      }
		      yg = null;
		    }
		  } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
		  return true;
		}
		function Hg() {
		  for (var a = yg; a;) a = Lf(a.nextSibling);
		}
		function Ig() {
		  yg = xg = null;
		  I = false;
		}
		function Jg(a) {
		  null === zg ? zg = [a] : zg.push(a);
		}
		var Kg = ua.ReactCurrentBatchConfig;
		function Lg(a, b, c) {
		  a = c.ref;
		  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
		    if (c._owner) {
		      c = c._owner;
		      if (c) {
		        if (1 !== c.tag) throw Error(p(309));
		        var d = c.stateNode;
		      }
		      if (!d) throw Error(p(147, a));
		      var e = d,
		        f = "" + a;
		      if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
		      b = function (a) {
		        var b = e.refs;
		        null === a ? delete b[f] : b[f] = a;
		      };
		      b._stringRef = f;
		      return b;
		    }
		    if ("string" !== typeof a) throw Error(p(284));
		    if (!c._owner) throw Error(p(290, a));
		  }
		  return a;
		}
		function Mg(a, b) {
		  a = Object.prototype.toString.call(b);
		  throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
		}
		function Ng(a) {
		  var b = a._init;
		  return b(a._payload);
		}
		function Og(a) {
		  function b(b, c) {
		    if (a) {
		      var d = b.deletions;
		      null === d ? (b.deletions = [c], b.flags |= 16) : d.push(c);
		    }
		  }
		  function c(c, d) {
		    if (!a) return null;
		    for (; null !== d;) b(c, d), d = d.sibling;
		    return null;
		  }
		  function d(a, b) {
		    for (a = new Map(); null !== b;) null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
		    return a;
		  }
		  function e(a, b) {
		    a = Pg(a, b);
		    a.index = 0;
		    a.sibling = null;
		    return a;
		  }
		  function f(b, c, d) {
		    b.index = d;
		    if (!a) return b.flags |= 1048576, c;
		    d = b.alternate;
		    if (null !== d) return d = d.index, d < c ? (b.flags |= 2, c) : d;
		    b.flags |= 2;
		    return c;
		  }
		  function g(b) {
		    a && null === b.alternate && (b.flags |= 2);
		    return b;
		  }
		  function h(a, b, c, d) {
		    if (null === b || 6 !== b.tag) return b = Qg(c, a.mode, d), b.return = a, b;
		    b = e(b, c);
		    b.return = a;
		    return b;
		  }
		  function k(a, b, c, d) {
		    var f = c.type;
		    if (f === ya) return m(a, b, c.props.children, d, c.key);
		    if (null !== b && (b.elementType === f || "object" === typeof f && null !== f && f.$$typeof === Ha && Ng(f) === b.type)) return d = e(b, c.props), d.ref = Lg(a, b, c), d.return = a, d;
		    d = Rg(c.type, c.key, c.props, null, a.mode, d);
		    d.ref = Lg(a, b, c);
		    d.return = a;
		    return d;
		  }
		  function l(a, b, c, d) {
		    if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = Sg(c, a.mode, d), b.return = a, b;
		    b = e(b, c.children || []);
		    b.return = a;
		    return b;
		  }
		  function m(a, b, c, d, f) {
		    if (null === b || 7 !== b.tag) return b = Tg(c, a.mode, d, f), b.return = a, b;
		    b = e(b, c);
		    b.return = a;
		    return b;
		  }
		  function q(a, b, c) {
		    if ("string" === typeof b && "" !== b || "number" === typeof b) return b = Qg("" + b, a.mode, c), b.return = a, b;
		    if ("object" === typeof b && null !== b) {
		      switch (b.$$typeof) {
		        case va:
		          return c = Rg(b.type, b.key, b.props, null, a.mode, c), c.ref = Lg(a, null, b), c.return = a, c;
		        case wa:
		          return b = Sg(b, a.mode, c), b.return = a, b;
		        case Ha:
		          var d = b._init;
		          return q(a, d(b._payload), c);
		      }
		      if (eb(b) || Ka(b)) return b = Tg(b, a.mode, c, null), b.return = a, b;
		      Mg(a, b);
		    }
		    return null;
		  }
		  function r(a, b, c, d) {
		    var e = null !== b ? b.key : null;
		    if ("string" === typeof c && "" !== c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);
		    if ("object" === typeof c && null !== c) {
		      switch (c.$$typeof) {
		        case va:
		          return c.key === e ? k(a, b, c, d) : null;
		        case wa:
		          return c.key === e ? l(a, b, c, d) : null;
		        case Ha:
		          return e = c._init, r(a, b, e(c._payload), d);
		      }
		      if (eb(c) || Ka(c)) return null !== e ? null : m(a, b, c, d, null);
		      Mg(a, c);
		    }
		    return null;
		  }
		  function y(a, b, c, d, e) {
		    if ("string" === typeof d && "" !== d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);
		    if ("object" === typeof d && null !== d) {
		      switch (d.$$typeof) {
		        case va:
		          return a = a.get(null === d.key ? c : d.key) || null, k(b, a, d, e);
		        case wa:
		          return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);
		        case Ha:
		          var f = d._init;
		          return y(a, b, c, f(d._payload), e);
		      }
		      if (eb(d) || Ka(d)) return a = a.get(c) || null, m(b, a, d, e, null);
		      Mg(b, d);
		    }
		    return null;
		  }
		  function n(e, g, h, k) {
		    for (var l = null, m = null, u = g, w = g = 0, x = null; null !== u && w < h.length; w++) {
		      u.index > w ? (x = u, u = null) : x = u.sibling;
		      var n = r(e, u, h[w], k);
		      if (null === n) {
		        null === u && (u = x);
		        break;
		      }
		      a && u && null === n.alternate && b(e, u);
		      g = f(n, g, w);
		      null === m ? l = n : m.sibling = n;
		      m = n;
		      u = x;
		    }
		    if (w === h.length) return c(e, u), I && tg(e, w), l;
		    if (null === u) {
		      for (; w < h.length; w++) u = q(e, h[w], k), null !== u && (g = f(u, g, w), null === m ? l = u : m.sibling = u, m = u);
		      I && tg(e, w);
		      return l;
		    }
		    for (u = d(e, u); w < h.length; w++) x = y(u, e, w, h[w], k), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w : x.key), g = f(x, g, w), null === m ? l = x : m.sibling = x, m = x);
		    a && u.forEach(function (a) {
		      return b(e, a);
		    });
		    I && tg(e, w);
		    return l;
		  }
		  function t(e, g, h, k) {
		    var l = Ka(h);
		    if ("function" !== typeof l) throw Error(p(150));
		    h = l.call(h);
		    if (null == h) throw Error(p(151));
		    for (var u = l = null, m = g, w = g = 0, x = null, n = h.next(); null !== m && !n.done; w++, n = h.next()) {
		      m.index > w ? (x = m, m = null) : x = m.sibling;
		      var t = r(e, m, n.value, k);
		      if (null === t) {
		        null === m && (m = x);
		        break;
		      }
		      a && m && null === t.alternate && b(e, m);
		      g = f(t, g, w);
		      null === u ? l = t : u.sibling = t;
		      u = t;
		      m = x;
		    }
		    if (n.done) return c(e, m), I && tg(e, w), l;
		    if (null === m) {
		      for (; !n.done; w++, n = h.next()) n = q(e, n.value, k), null !== n && (g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
		      I && tg(e, w);
		      return l;
		    }
		    for (m = d(e, m); !n.done; w++, n = h.next()) n = y(m, e, w, n.value, k), null !== n && (a && null !== n.alternate && m.delete(null === n.key ? w : n.key), g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
		    a && m.forEach(function (a) {
		      return b(e, a);
		    });
		    I && tg(e, w);
		    return l;
		  }
		  function J(a, d, f, h) {
		    "object" === typeof f && null !== f && f.type === ya && null === f.key && (f = f.props.children);
		    if ("object" === typeof f && null !== f) {
		      switch (f.$$typeof) {
		        case va:
		          a: {
		            for (var k = f.key, l = d; null !== l;) {
		              if (l.key === k) {
		                k = f.type;
		                if (k === ya) {
		                  if (7 === l.tag) {
		                    c(a, l.sibling);
		                    d = e(l, f.props.children);
		                    d.return = a;
		                    a = d;
		                    break a;
		                  }
		                } else if (l.elementType === k || "object" === typeof k && null !== k && k.$$typeof === Ha && Ng(k) === l.type) {
		                  c(a, l.sibling);
		                  d = e(l, f.props);
		                  d.ref = Lg(a, l, f);
		                  d.return = a;
		                  a = d;
		                  break a;
		                }
		                c(a, l);
		                break;
		              } else b(a, l);
		              l = l.sibling;
		            }
		            f.type === ya ? (d = Tg(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = Rg(f.type, f.key, f.props, null, a.mode, h), h.ref = Lg(a, d, f), h.return = a, a = h);
		          }
		          return g(a);
		        case wa:
		          a: {
		            for (l = f.key; null !== d;) {
		              if (d.key === l) {
		                if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
		                  c(a, d.sibling);
		                  d = e(d, f.children || []);
		                  d.return = a;
		                  a = d;
		                  break a;
		                } else {
		                  c(a, d);
		                  break;
		                }
		              } else b(a, d);
		              d = d.sibling;
		            }
		            d = Sg(f, a.mode, h);
		            d.return = a;
		            a = d;
		          }
		          return g(a);
		        case Ha:
		          return l = f._init, J(a, d, l(f._payload), h);
		      }
		      if (eb(f)) return n(a, d, f, h);
		      if (Ka(f)) return t(a, d, f, h);
		      Mg(a, f);
		    }
		    return "string" === typeof f && "" !== f || "number" === typeof f ? (f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = Qg(f, a.mode, h), d.return = a, a = d), g(a)) : c(a, d);
		  }
		  return J;
		}
		var Ug = Og(true),
		  Vg = Og(false),
		  Wg = Uf(null),
		  Xg = null,
		  Yg = null,
		  Zg = null;
		function $g() {
		  Zg = Yg = Xg = null;
		}
		function ah(a) {
		  var b = Wg.current;
		  E(Wg);
		  a._currentValue = b;
		}
		function bh(a, b, c) {
		  for (; null !== a;) {
		    var d = a.alternate;
		    (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
		    if (a === c) break;
		    a = a.return;
		  }
		}
		function ch(a, b) {
		  Xg = a;
		  Zg = Yg = null;
		  a = a.dependencies;
		  null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (dh = true), a.firstContext = null);
		}
		function eh(a) {
		  var b = a._currentValue;
		  if (Zg !== a) if (a = {
		    context: a,
		    memoizedValue: b,
		    next: null
		  }, null === Yg) {
		    if (null === Xg) throw Error(p(308));
		    Yg = a;
		    Xg.dependencies = {
		      lanes: 0,
		      firstContext: a
		    };
		  } else Yg = Yg.next = a;
		  return b;
		}
		var fh = null;
		function gh(a) {
		  null === fh ? fh = [a] : fh.push(a);
		}
		function hh(a, b, c, d) {
		  var e = b.interleaved;
		  null === e ? (c.next = c, gh(b)) : (c.next = e.next, e.next = c);
		  b.interleaved = c;
		  return ih(a, d);
		}
		function ih(a, b) {
		  a.lanes |= b;
		  var c = a.alternate;
		  null !== c && (c.lanes |= b);
		  c = a;
		  for (a = a.return; null !== a;) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
		  return 3 === c.tag ? c.stateNode : null;
		}
		var jh = false;
		function kh(a) {
		  a.updateQueue = {
		    baseState: a.memoizedState,
		    firstBaseUpdate: null,
		    lastBaseUpdate: null,
		    shared: {
		      pending: null,
		      interleaved: null,
		      lanes: 0
		    },
		    effects: null
		  };
		}
		function lh(a, b) {
		  a = a.updateQueue;
		  b.updateQueue === a && (b.updateQueue = {
		    baseState: a.baseState,
		    firstBaseUpdate: a.firstBaseUpdate,
		    lastBaseUpdate: a.lastBaseUpdate,
		    shared: a.shared,
		    effects: a.effects
		  });
		}
		function mh(a, b) {
		  return {
		    eventTime: a,
		    lane: b,
		    tag: 0,
		    payload: null,
		    callback: null,
		    next: null
		  };
		}
		function nh(a, b, c) {
		  var d = a.updateQueue;
		  if (null === d) return null;
		  d = d.shared;
		  if (0 !== (K & 2)) {
		    var e = d.pending;
		    null === e ? b.next = b : (b.next = e.next, e.next = b);
		    d.pending = b;
		    return ih(a, c);
		  }
		  e = d.interleaved;
		  null === e ? (b.next = b, gh(d)) : (b.next = e.next, e.next = b);
		  d.interleaved = b;
		  return ih(a, c);
		}
		function oh(a, b, c) {
		  b = b.updateQueue;
		  if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
		    var d = b.lanes;
		    d &= a.pendingLanes;
		    c |= d;
		    b.lanes = c;
		    Cc(a, c);
		  }
		}
		function ph(a, b) {
		  var c = a.updateQueue,
		    d = a.alternate;
		  if (null !== d && (d = d.updateQueue, c === d)) {
		    var e = null,
		      f = null;
		    c = c.firstBaseUpdate;
		    if (null !== c) {
		      do {
		        var g = {
		          eventTime: c.eventTime,
		          lane: c.lane,
		          tag: c.tag,
		          payload: c.payload,
		          callback: c.callback,
		          next: null
		        };
		        null === f ? e = f = g : f = f.next = g;
		        c = c.next;
		      } while (null !== c);
		      null === f ? e = f = b : f = f.next = b;
		    } else e = f = b;
		    c = {
		      baseState: d.baseState,
		      firstBaseUpdate: e,
		      lastBaseUpdate: f,
		      shared: d.shared,
		      effects: d.effects
		    };
		    a.updateQueue = c;
		    return;
		  }
		  a = c.lastBaseUpdate;
		  null === a ? c.firstBaseUpdate = b : a.next = b;
		  c.lastBaseUpdate = b;
		}
		function qh(a, b, c, d) {
		  var e = a.updateQueue;
		  jh = false;
		  var f = e.firstBaseUpdate,
		    g = e.lastBaseUpdate,
		    h = e.shared.pending;
		  if (null !== h) {
		    e.shared.pending = null;
		    var k = h,
		      l = k.next;
		    k.next = null;
		    null === g ? f = l : g.next = l;
		    g = k;
		    var m = a.alternate;
		    null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, m.lastBaseUpdate = k));
		  }
		  if (null !== f) {
		    var q = e.baseState;
		    g = 0;
		    m = l = k = null;
		    h = f;
		    do {
		      var r = h.lane,
		        y = h.eventTime;
		      if ((d & r) === r) {
		        null !== m && (m = m.next = {
		          eventTime: y,
		          lane: 0,
		          tag: h.tag,
		          payload: h.payload,
		          callback: h.callback,
		          next: null
		        });
		        a: {
		          var n = a,
		            t = h;
		          r = b;
		          y = c;
		          switch (t.tag) {
		            case 1:
		              n = t.payload;
		              if ("function" === typeof n) {
		                q = n.call(y, q, r);
		                break a;
		              }
		              q = n;
		              break a;
		            case 3:
		              n.flags = n.flags & -65537 | 128;
		            case 0:
		              n = t.payload;
		              r = "function" === typeof n ? n.call(y, q, r) : n;
		              if (null === r || void 0 === r) break a;
		              q = A({}, q, r);
		              break a;
		            case 2:
		              jh = true;
		          }
		        }
		        null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [h] : r.push(h));
		      } else y = {
		        eventTime: y,
		        lane: r,
		        tag: h.tag,
		        payload: h.payload,
		        callback: h.callback,
		        next: null
		      }, null === m ? (l = m = y, k = q) : m = m.next = y, g |= r;
		      h = h.next;
		      if (null === h) if (h = e.shared.pending, null === h) break;else r = h, h = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
		    } while (1);
		    null === m && (k = q);
		    e.baseState = k;
		    e.firstBaseUpdate = l;
		    e.lastBaseUpdate = m;
		    b = e.shared.interleaved;
		    if (null !== b) {
		      e = b;
		      do g |= e.lane, e = e.next; while (e !== b);
		    } else null === f && (e.shared.lanes = 0);
		    rh |= g;
		    a.lanes = g;
		    a.memoizedState = q;
		  }
		}
		function sh(a, b, c) {
		  a = b.effects;
		  b.effects = null;
		  if (null !== a) for (b = 0; b < a.length; b++) {
		    var d = a[b],
		      e = d.callback;
		    if (null !== e) {
		      d.callback = null;
		      d = c;
		      if ("function" !== typeof e) throw Error(p(191, e));
		      e.call(d);
		    }
		  }
		}
		var th = {},
		  uh = Uf(th),
		  vh = Uf(th),
		  wh = Uf(th);
		function xh(a) {
		  if (a === th) throw Error(p(174));
		  return a;
		}
		function yh(a, b) {
		  G(wh, b);
		  G(vh, a);
		  G(uh, th);
		  a = b.nodeType;
		  switch (a) {
		    case 9:
		    case 11:
		      b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
		      break;
		    default:
		      a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
		  }
		  E(uh);
		  G(uh, b);
		}
		function zh() {
		  E(uh);
		  E(vh);
		  E(wh);
		}
		function Ah(a) {
		  xh(wh.current);
		  var b = xh(uh.current);
		  var c = lb(b, a.type);
		  b !== c && (G(vh, a), G(uh, c));
		}
		function Bh(a) {
		  vh.current === a && (E(uh), E(vh));
		}
		var L = Uf(0);
		function Ch(a) {
		  for (var b = a; null !== b;) {
		    if (13 === b.tag) {
		      var c = b.memoizedState;
		      if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
		    } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
		      if (0 !== (b.flags & 128)) return b;
		    } else if (null !== b.child) {
		      b.child.return = b;
		      b = b.child;
		      continue;
		    }
		    if (b === a) break;
		    for (; null === b.sibling;) {
		      if (null === b.return || b.return === a) return null;
		      b = b.return;
		    }
		    b.sibling.return = b.return;
		    b = b.sibling;
		  }
		  return null;
		}
		var Dh = [];
		function Eh() {
		  for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
		  Dh.length = 0;
		}
		var Fh = ua.ReactCurrentDispatcher,
		  Gh = ua.ReactCurrentBatchConfig,
		  Hh = 0,
		  M = null,
		  N = null,
		  O = null,
		  Ih = false,
		  Jh = false,
		  Kh = 0,
		  Lh = 0;
		function P() {
		  throw Error(p(321));
		}
		function Mh(a, b) {
		  if (null === b) return false;
		  for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return false;
		  return true;
		}
		function Nh(a, b, c, d, e, f) {
		  Hh = f;
		  M = b;
		  b.memoizedState = null;
		  b.updateQueue = null;
		  b.lanes = 0;
		  Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
		  a = c(d, e);
		  if (Jh) {
		    f = 0;
		    do {
		      Jh = false;
		      Kh = 0;
		      if (25 <= f) throw Error(p(301));
		      f += 1;
		      O = N = null;
		      b.updateQueue = null;
		      Fh.current = Qh;
		      a = c(d, e);
		    } while (Jh);
		  }
		  Fh.current = Rh;
		  b = null !== N && null !== N.next;
		  Hh = 0;
		  O = N = M = null;
		  Ih = false;
		  if (b) throw Error(p(300));
		  return a;
		}
		function Sh() {
		  var a = 0 !== Kh;
		  Kh = 0;
		  return a;
		}
		function Th() {
		  var a = {
		    memoizedState: null,
		    baseState: null,
		    baseQueue: null,
		    queue: null,
		    next: null
		  };
		  null === O ? M.memoizedState = O = a : O = O.next = a;
		  return O;
		}
		function Uh() {
		  if (null === N) {
		    var a = M.alternate;
		    a = null !== a ? a.memoizedState : null;
		  } else a = N.next;
		  var b = null === O ? M.memoizedState : O.next;
		  if (null !== b) O = b, N = a;else {
		    if (null === a) throw Error(p(310));
		    N = a;
		    a = {
		      memoizedState: N.memoizedState,
		      baseState: N.baseState,
		      baseQueue: N.baseQueue,
		      queue: N.queue,
		      next: null
		    };
		    null === O ? M.memoizedState = O = a : O = O.next = a;
		  }
		  return O;
		}
		function Vh(a, b) {
		  return "function" === typeof b ? b(a) : b;
		}
		function Wh(a) {
		  var b = Uh(),
		    c = b.queue;
		  if (null === c) throw Error(p(311));
		  c.lastRenderedReducer = a;
		  var d = N,
		    e = d.baseQueue,
		    f = c.pending;
		  if (null !== f) {
		    if (null !== e) {
		      var g = e.next;
		      e.next = f.next;
		      f.next = g;
		    }
		    d.baseQueue = e = f;
		    c.pending = null;
		  }
		  if (null !== e) {
		    f = e.next;
		    d = d.baseState;
		    var h = g = null,
		      k = null,
		      l = f;
		    do {
		      var m = l.lane;
		      if ((Hh & m) === m) null !== k && (k = k.next = {
		        lane: 0,
		        action: l.action,
		        hasEagerState: l.hasEagerState,
		        eagerState: l.eagerState,
		        next: null
		      }), d = l.hasEagerState ? l.eagerState : a(d, l.action);else {
		        var q = {
		          lane: m,
		          action: l.action,
		          hasEagerState: l.hasEagerState,
		          eagerState: l.eagerState,
		          next: null
		        };
		        null === k ? (h = k = q, g = d) : k = k.next = q;
		        M.lanes |= m;
		        rh |= m;
		      }
		      l = l.next;
		    } while (null !== l && l !== f);
		    null === k ? g = d : k.next = h;
		    He(d, b.memoizedState) || (dh = true);
		    b.memoizedState = d;
		    b.baseState = g;
		    b.baseQueue = k;
		    c.lastRenderedState = d;
		  }
		  a = c.interleaved;
		  if (null !== a) {
		    e = a;
		    do f = e.lane, M.lanes |= f, rh |= f, e = e.next; while (e !== a);
		  } else null === e && (c.lanes = 0);
		  return [b.memoizedState, c.dispatch];
		}
		function Xh(a) {
		  var b = Uh(),
		    c = b.queue;
		  if (null === c) throw Error(p(311));
		  c.lastRenderedReducer = a;
		  var d = c.dispatch,
		    e = c.pending,
		    f = b.memoizedState;
		  if (null !== e) {
		    c.pending = null;
		    var g = e = e.next;
		    do f = a(f, g.action), g = g.next; while (g !== e);
		    He(f, b.memoizedState) || (dh = true);
		    b.memoizedState = f;
		    null === b.baseQueue && (b.baseState = f);
		    c.lastRenderedState = f;
		  }
		  return [f, d];
		}
		function Yh() {}
		function Zh(a, b) {
		  var c = M,
		    d = Uh(),
		    e = b(),
		    f = !He(d.memoizedState, e);
		  f && (d.memoizedState = e, dh = true);
		  d = d.queue;
		  $h(ai.bind(null, c, d, a), [a]);
		  if (d.getSnapshot !== b || f || null !== O && O.memoizedState.tag & 1) {
		    c.flags |= 2048;
		    bi(9, ci.bind(null, c, d, e, b), void 0, null);
		    if (null === Q) throw Error(p(349));
		    0 !== (Hh & 30) || di(c, b, e);
		  }
		  return e;
		}
		function di(a, b, c) {
		  a.flags |= 16384;
		  a = {
		    getSnapshot: b,
		    value: c
		  };
		  b = M.updateQueue;
		  null === b ? (b = {
		    lastEffect: null,
		    stores: null
		  }, M.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
		}
		function ci(a, b, c, d) {
		  b.value = c;
		  b.getSnapshot = d;
		  ei(b) && fi(a);
		}
		function ai(a, b, c) {
		  return c(function () {
		    ei(b) && fi(a);
		  });
		}
		function ei(a) {
		  var b = a.getSnapshot;
		  a = a.value;
		  try {
		    var c = b();
		    return !He(a, c);
		  } catch (d) {
		    return true;
		  }
		}
		function fi(a) {
		  var b = ih(a, 1);
		  null !== b && gi(b, a, 1, -1);
		}
		function hi(a) {
		  var b = Th();
		  "function" === typeof a && (a = a());
		  b.memoizedState = b.baseState = a;
		  a = {
		    pending: null,
		    interleaved: null,
		    lanes: 0,
		    dispatch: null,
		    lastRenderedReducer: Vh,
		    lastRenderedState: a
		  };
		  b.queue = a;
		  a = a.dispatch = ii.bind(null, M, a);
		  return [b.memoizedState, a];
		}
		function bi(a, b, c, d) {
		  a = {
		    tag: a,
		    create: b,
		    destroy: c,
		    deps: d,
		    next: null
		  };
		  b = M.updateQueue;
		  null === b ? (b = {
		    lastEffect: null,
		    stores: null
		  }, M.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
		  return a;
		}
		function ji() {
		  return Uh().memoizedState;
		}
		function ki(a, b, c, d) {
		  var e = Th();
		  M.flags |= a;
		  e.memoizedState = bi(1 | b, c, void 0, void 0 === d ? null : d);
		}
		function li(a, b, c, d) {
		  var e = Uh();
		  d = void 0 === d ? null : d;
		  var f = void 0;
		  if (null !== N) {
		    var g = N.memoizedState;
		    f = g.destroy;
		    if (null !== d && Mh(d, g.deps)) {
		      e.memoizedState = bi(b, c, f, d);
		      return;
		    }
		  }
		  M.flags |= a;
		  e.memoizedState = bi(1 | b, c, f, d);
		}
		function mi(a, b) {
		  return ki(8390656, 8, a, b);
		}
		function $h(a, b) {
		  return li(2048, 8, a, b);
		}
		function ni(a, b) {
		  return li(4, 2, a, b);
		}
		function oi(a, b) {
		  return li(4, 4, a, b);
		}
		function pi(a, b) {
		  if ("function" === typeof b) return a = a(), b(a), function () {
		    b(null);
		  };
		  if (null !== b && void 0 !== b) return a = a(), b.current = a, function () {
		    b.current = null;
		  };
		}
		function qi(a, b, c) {
		  c = null !== c && void 0 !== c ? c.concat([a]) : null;
		  return li(4, 4, pi.bind(null, b, a), c);
		}
		function ri() {}
		function si(a, b) {
		  var c = Uh();
		  b = void 0 === b ? null : b;
		  var d = c.memoizedState;
		  if (null !== d && null !== b && Mh(b, d[1])) return d[0];
		  c.memoizedState = [a, b];
		  return a;
		}
		function ti(a, b) {
		  var c = Uh();
		  b = void 0 === b ? null : b;
		  var d = c.memoizedState;
		  if (null !== d && null !== b && Mh(b, d[1])) return d[0];
		  a = a();
		  c.memoizedState = [a, b];
		  return a;
		}
		function ui(a, b, c) {
		  if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c;
		  He(c, b) || (c = yc(), M.lanes |= c, rh |= c, a.baseState = true);
		  return b;
		}
		function vi(a, b) {
		  var c = C;
		  C = 0 !== c && 4 > c ? c : 4;
		  a(true);
		  var d = Gh.transition;
		  Gh.transition = {};
		  try {
		    a(!1), b();
		  } finally {
		    C = c, Gh.transition = d;
		  }
		}
		function wi() {
		  return Uh().memoizedState;
		}
		function xi(a, b, c) {
		  var d = yi(a);
		  c = {
		    lane: d,
		    action: c,
		    hasEagerState: false,
		    eagerState: null,
		    next: null
		  };
		  if (zi(a)) Ai(b, c);else if (c = hh(a, b, c, d), null !== c) {
		    var e = R();
		    gi(c, a, d, e);
		    Bi(c, b, d);
		  }
		}
		function ii(a, b, c) {
		  var d = yi(a),
		    e = {
		      lane: d,
		      action: c,
		      hasEagerState: false,
		      eagerState: null,
		      next: null
		    };
		  if (zi(a)) Ai(b, e);else {
		    var f = a.alternate;
		    if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
		      var g = b.lastRenderedState,
		        h = f(g, c);
		      e.hasEagerState = !0;
		      e.eagerState = h;
		      if (He(h, g)) {
		        var k = b.interleaved;
		        null === k ? (e.next = e, gh(b)) : (e.next = k.next, k.next = e);
		        b.interleaved = e;
		        return;
		      }
		    } catch (l) {} finally {}
		    c = hh(a, b, e, d);
		    null !== c && (e = R(), gi(c, a, d, e), Bi(c, b, d));
		  }
		}
		function zi(a) {
		  var b = a.alternate;
		  return a === M || null !== b && b === M;
		}
		function Ai(a, b) {
		  Jh = Ih = true;
		  var c = a.pending;
		  null === c ? b.next = b : (b.next = c.next, c.next = b);
		  a.pending = b;
		}
		function Bi(a, b, c) {
		  if (0 !== (c & 4194240)) {
		    var d = b.lanes;
		    d &= a.pendingLanes;
		    c |= d;
		    b.lanes = c;
		    Cc(a, c);
		  }
		}
		var Rh = {
		    readContext: eh,
		    useCallback: P,
		    useContext: P,
		    useEffect: P,
		    useImperativeHandle: P,
		    useInsertionEffect: P,
		    useLayoutEffect: P,
		    useMemo: P,
		    useReducer: P,
		    useRef: P,
		    useState: P,
		    useDebugValue: P,
		    useDeferredValue: P,
		    useTransition: P,
		    useMutableSource: P,
		    useSyncExternalStore: P,
		    useId: P,
		    unstable_isNewReconciler: false
		  },
		  Oh = {
		    readContext: eh,
		    useCallback: function (a, b) {
		      Th().memoizedState = [a, void 0 === b ? null : b];
		      return a;
		    },
		    useContext: eh,
		    useEffect: mi,
		    useImperativeHandle: function (a, b, c) {
		      c = null !== c && void 0 !== c ? c.concat([a]) : null;
		      return ki(4194308, 4, pi.bind(null, b, a), c);
		    },
		    useLayoutEffect: function (a, b) {
		      return ki(4194308, 4, a, b);
		    },
		    useInsertionEffect: function (a, b) {
		      return ki(4, 2, a, b);
		    },
		    useMemo: function (a, b) {
		      var c = Th();
		      b = void 0 === b ? null : b;
		      a = a();
		      c.memoizedState = [a, b];
		      return a;
		    },
		    useReducer: function (a, b, c) {
		      var d = Th();
		      b = void 0 !== c ? c(b) : b;
		      d.memoizedState = d.baseState = b;
		      a = {
		        pending: null,
		        interleaved: null,
		        lanes: 0,
		        dispatch: null,
		        lastRenderedReducer: a,
		        lastRenderedState: b
		      };
		      d.queue = a;
		      a = a.dispatch = xi.bind(null, M, a);
		      return [d.memoizedState, a];
		    },
		    useRef: function (a) {
		      var b = Th();
		      a = {
		        current: a
		      };
		      return b.memoizedState = a;
		    },
		    useState: hi,
		    useDebugValue: ri,
		    useDeferredValue: function (a) {
		      return Th().memoizedState = a;
		    },
		    useTransition: function () {
		      var a = hi(false),
		        b = a[0];
		      a = vi.bind(null, a[1]);
		      Th().memoizedState = a;
		      return [b, a];
		    },
		    useMutableSource: function () {},
		    useSyncExternalStore: function (a, b, c) {
		      var d = M,
		        e = Th();
		      if (I) {
		        if (void 0 === c) throw Error(p(407));
		        c = c();
		      } else {
		        c = b();
		        if (null === Q) throw Error(p(349));
		        0 !== (Hh & 30) || di(d, b, c);
		      }
		      e.memoizedState = c;
		      var f = {
		        value: c,
		        getSnapshot: b
		      };
		      e.queue = f;
		      mi(ai.bind(null, d, f, a), [a]);
		      d.flags |= 2048;
		      bi(9, ci.bind(null, d, f, c, b), void 0, null);
		      return c;
		    },
		    useId: function () {
		      var a = Th(),
		        b = Q.identifierPrefix;
		      if (I) {
		        var c = sg;
		        var d = rg;
		        c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
		        b = ":" + b + "R" + c;
		        c = Kh++;
		        0 < c && (b += "H" + c.toString(32));
		        b += ":";
		      } else c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
		      return a.memoizedState = b;
		    },
		    unstable_isNewReconciler: false
		  },
		  Ph = {
		    readContext: eh,
		    useCallback: si,
		    useContext: eh,
		    useEffect: $h,
		    useImperativeHandle: qi,
		    useInsertionEffect: ni,
		    useLayoutEffect: oi,
		    useMemo: ti,
		    useReducer: Wh,
		    useRef: ji,
		    useState: function () {
		      return Wh(Vh);
		    },
		    useDebugValue: ri,
		    useDeferredValue: function (a) {
		      var b = Uh();
		      return ui(b, N.memoizedState, a);
		    },
		    useTransition: function () {
		      var a = Wh(Vh)[0],
		        b = Uh().memoizedState;
		      return [a, b];
		    },
		    useMutableSource: Yh,
		    useSyncExternalStore: Zh,
		    useId: wi,
		    unstable_isNewReconciler: false
		  },
		  Qh = {
		    readContext: eh,
		    useCallback: si,
		    useContext: eh,
		    useEffect: $h,
		    useImperativeHandle: qi,
		    useInsertionEffect: ni,
		    useLayoutEffect: oi,
		    useMemo: ti,
		    useReducer: Xh,
		    useRef: ji,
		    useState: function () {
		      return Xh(Vh);
		    },
		    useDebugValue: ri,
		    useDeferredValue: function (a) {
		      var b = Uh();
		      return null === N ? b.memoizedState = a : ui(b, N.memoizedState, a);
		    },
		    useTransition: function () {
		      var a = Xh(Vh)[0],
		        b = Uh().memoizedState;
		      return [a, b];
		    },
		    useMutableSource: Yh,
		    useSyncExternalStore: Zh,
		    useId: wi,
		    unstable_isNewReconciler: false
		  };
		function Ci(a, b) {
		  if (a && a.defaultProps) {
		    b = A({}, b);
		    a = a.defaultProps;
		    for (var c in a) void 0 === b[c] && (b[c] = a[c]);
		    return b;
		  }
		  return b;
		}
		function Di(a, b, c, d) {
		  b = a.memoizedState;
		  c = c(d, b);
		  c = null === c || void 0 === c ? b : A({}, b, c);
		  a.memoizedState = c;
		  0 === a.lanes && (a.updateQueue.baseState = c);
		}
		var Ei = {
		  isMounted: function (a) {
		    return (a = a._reactInternals) ? Vb(a) === a : false;
		  },
		  enqueueSetState: function (a, b, c) {
		    a = a._reactInternals;
		    var d = R(),
		      e = yi(a),
		      f = mh(d, e);
		    f.payload = b;
		    void 0 !== c && null !== c && (f.callback = c);
		    b = nh(a, f, e);
		    null !== b && (gi(b, a, e, d), oh(b, a, e));
		  },
		  enqueueReplaceState: function (a, b, c) {
		    a = a._reactInternals;
		    var d = R(),
		      e = yi(a),
		      f = mh(d, e);
		    f.tag = 1;
		    f.payload = b;
		    void 0 !== c && null !== c && (f.callback = c);
		    b = nh(a, f, e);
		    null !== b && (gi(b, a, e, d), oh(b, a, e));
		  },
		  enqueueForceUpdate: function (a, b) {
		    a = a._reactInternals;
		    var c = R(),
		      d = yi(a),
		      e = mh(c, d);
		    e.tag = 2;
		    void 0 !== b && null !== b && (e.callback = b);
		    b = nh(a, e, d);
		    null !== b && (gi(b, a, d, c), oh(b, a, d));
		  }
		};
		function Fi(a, b, c, d, e, f, g) {
		  a = a.stateNode;
		  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f) : true;
		}
		function Gi(a, b, c) {
		  var d = false,
		    e = Vf;
		  var f = b.contextType;
		  "object" === typeof f && null !== f ? f = eh(f) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
		  b = new b(c, f);
		  a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
		  b.updater = Ei;
		  a.stateNode = b;
		  b._reactInternals = a;
		  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
		  return b;
		}
		function Hi(a, b, c, d) {
		  a = b.state;
		  "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
		  "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
		  b.state !== a && Ei.enqueueReplaceState(b, b.state, null);
		}
		function Ii(a, b, c, d) {
		  var e = a.stateNode;
		  e.props = c;
		  e.state = a.memoizedState;
		  e.refs = {};
		  kh(a);
		  var f = b.contextType;
		  "object" === typeof f && null !== f ? e.context = eh(f) : (f = Zf(b) ? Xf : H.current, e.context = Yf(a, f));
		  e.state = a.memoizedState;
		  f = b.getDerivedStateFromProps;
		  "function" === typeof f && (Di(a, b, f, c), e.state = a.memoizedState);
		  "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a, c, e, d), e.state = a.memoizedState);
		  "function" === typeof e.componentDidMount && (a.flags |= 4194308);
		}
		function Ji(a, b) {
		  try {
		    var c = "",
		      d = b;
		    do c += Pa(d), d = d.return; while (d);
		    var e = c;
		  } catch (f) {
		    e = "\nError generating stack: " + f.message + "\n" + f.stack;
		  }
		  return {
		    value: a,
		    source: b,
		    stack: e,
		    digest: null
		  };
		}
		function Ki(a, b, c) {
		  return {
		    value: a,
		    source: null,
		    stack: null != c ? c : null,
		    digest: null != b ? b : null
		  };
		}
		function Li(a, b) {
		  try {
		    console.error(b.value);
		  } catch (c) {
		    setTimeout(function () {
		      throw c;
		    });
		  }
		}
		var Mi = "function" === typeof WeakMap ? WeakMap : Map;
		function Ni(a, b, c) {
		  c = mh(-1, c);
		  c.tag = 3;
		  c.payload = {
		    element: null
		  };
		  var d = b.value;
		  c.callback = function () {
		    Oi || (Oi = true, Pi = d);
		    Li(a, b);
		  };
		  return c;
		}
		function Qi(a, b, c) {
		  c = mh(-1, c);
		  c.tag = 3;
		  var d = a.type.getDerivedStateFromError;
		  if ("function" === typeof d) {
		    var e = b.value;
		    c.payload = function () {
		      return d(e);
		    };
		    c.callback = function () {
		      Li(a, b);
		    };
		  }
		  var f = a.stateNode;
		  null !== f && "function" === typeof f.componentDidCatch && (c.callback = function () {
		    Li(a, b);
		    "function" !== typeof d && (null === Ri ? Ri = new Set([this]) : Ri.add(this));
		    var c = b.stack;
		    this.componentDidCatch(b.value, {
		      componentStack: null !== c ? c : ""
		    });
		  });
		  return c;
		}
		function Si(a, b, c) {
		  var d = a.pingCache;
		  if (null === d) {
		    d = a.pingCache = new Mi();
		    var e = new Set();
		    d.set(b, e);
		  } else e = d.get(b), void 0 === e && (e = new Set(), d.set(b, e));
		  e.has(c) || (e.add(c), a = Ti.bind(null, a, b, c), b.then(a, a));
		}
		function Ui(a) {
		  do {
		    var b;
		    if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
		    if (b) return a;
		    a = a.return;
		  } while (null !== a);
		  return null;
		}
		function Vi(a, b, c, d, e) {
		  if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
		  a.flags |= 65536;
		  a.lanes = e;
		  return a;
		}
		var Wi = ua.ReactCurrentOwner,
		  dh = false;
		function Xi(a, b, c, d) {
		  b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
		}
		function Yi(a, b, c, d, e) {
		  c = c.render;
		  var f = b.ref;
		  ch(b, e);
		  d = Nh(a, b, c, d, f, e);
		  c = Sh();
		  if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
		  I && c && vg(b);
		  b.flags |= 1;
		  Xi(a, b, d, e);
		  return b.child;
		}
		function $i(a, b, c, d, e) {
		  if (null === a) {
		    var f = c.type;
		    if ("function" === typeof f && !aj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, bj(a, b, f, d, e);
		    a = Rg(c.type, null, d, b, b.mode, e);
		    a.ref = b.ref;
		    a.return = b;
		    return b.child = a;
		  }
		  f = a.child;
		  if (0 === (a.lanes & e)) {
		    var g = f.memoizedProps;
		    c = c.compare;
		    c = null !== c ? c : Ie;
		    if (c(g, d) && a.ref === b.ref) return Zi(a, b, e);
		  }
		  b.flags |= 1;
		  a = Pg(f, d);
		  a.ref = b.ref;
		  a.return = b;
		  return b.child = a;
		}
		function bj(a, b, c, d, e) {
		  if (null !== a) {
		    var f = a.memoizedProps;
		    if (Ie(f, d) && a.ref === b.ref) if (dh = false, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (dh = true);else return b.lanes = a.lanes, Zi(a, b, e);
		  }
		  return cj(a, b, c, d, e);
		}
		function dj(a, b, c) {
		  var d = b.pendingProps,
		    e = d.children,
		    f = null !== a ? a.memoizedState : null;
		  if ("hidden" === d.mode) {
		    if (0 === (b.mode & 1)) b.memoizedState = {
		      baseLanes: 0,
		      cachePool: null,
		      transitions: null
		    }, G(ej, fj), fj |= c;else {
		      if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
		        baseLanes: a,
		        cachePool: null,
		        transitions: null
		      }, b.updateQueue = null, G(ej, fj), fj |= a, null;
		      b.memoizedState = {
		        baseLanes: 0,
		        cachePool: null,
		        transitions: null
		      };
		      d = null !== f ? f.baseLanes : c;
		      G(ej, fj);
		      fj |= d;
		    }
		  } else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G(ej, fj), fj |= d;
		  Xi(a, b, e, c);
		  return b.child;
		}
		function gj(a, b) {
		  var c = b.ref;
		  if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
		}
		function cj(a, b, c, d, e) {
		  var f = Zf(c) ? Xf : H.current;
		  f = Yf(b, f);
		  ch(b, e);
		  c = Nh(a, b, c, d, f, e);
		  d = Sh();
		  if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
		  I && d && vg(b);
		  b.flags |= 1;
		  Xi(a, b, c, e);
		  return b.child;
		}
		function hj(a, b, c, d, e) {
		  if (Zf(c)) {
		    var f = true;
		    cg(b);
		  } else f = false;
		  ch(b, e);
		  if (null === b.stateNode) ij(a, b), Gi(b, c, d), Ii(b, c, d, e), d = true;else if (null === a) {
		    var g = b.stateNode,
		      h = b.memoizedProps;
		    g.props = h;
		    var k = g.context,
		      l = c.contextType;
		    "object" === typeof l && null !== l ? l = eh(l) : (l = Zf(c) ? Xf : H.current, l = Yf(b, l));
		    var m = c.getDerivedStateFromProps,
		      q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
		    q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Hi(b, g, d, l);
		    jh = false;
		    var r = b.memoizedState;
		    g.state = r;
		    qh(b, d, g, e);
		    k = b.memoizedState;
		    h !== d || r !== k || Wf.current || jh ? ("function" === typeof m && (Di(b, c, m, d), k = b.memoizedState), (h = jh || Fi(b, c, h, d, r, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
		  } else {
		    g = b.stateNode;
		    lh(a, b);
		    h = b.memoizedProps;
		    l = b.type === b.elementType ? h : Ci(b.type, h);
		    g.props = l;
		    q = b.pendingProps;
		    r = g.context;
		    k = c.contextType;
		    "object" === typeof k && null !== k ? k = eh(k) : (k = Zf(c) ? Xf : H.current, k = Yf(b, k));
		    var y = c.getDerivedStateFromProps;
		    (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k) && Hi(b, g, d, k);
		    jh = false;
		    r = b.memoizedState;
		    g.state = r;
		    qh(b, d, g, e);
		    var n = b.memoizedState;
		    h !== q || r !== n || Wf.current || jh ? ("function" === typeof y && (Di(b, c, y, d), n = b.memoizedState), (l = jh || Fi(b, c, l, d, r, n, k) || false) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d = false);
		  }
		  return jj(a, b, c, d, f, e);
		}
		function jj(a, b, c, d, e, f) {
		  gj(a, b);
		  var g = 0 !== (b.flags & 128);
		  if (!d && !g) return e && dg(b, c, false), Zi(a, b, f);
		  d = b.stateNode;
		  Wi.current = b;
		  var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
		  b.flags |= 1;
		  null !== a && g ? (b.child = Ug(b, a.child, null, f), b.child = Ug(b, null, h, f)) : Xi(a, b, h, f);
		  b.memoizedState = d.state;
		  e && dg(b, c, true);
		  return b.child;
		}
		function kj(a) {
		  var b = a.stateNode;
		  b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
		  yh(a, b.containerInfo);
		}
		function lj(a, b, c, d, e) {
		  Ig();
		  Jg(e);
		  b.flags |= 256;
		  Xi(a, b, c, d);
		  return b.child;
		}
		var mj = {
		  dehydrated: null,
		  treeContext: null,
		  retryLane: 0
		};
		function nj(a) {
		  return {
		    baseLanes: a,
		    cachePool: null,
		    transitions: null
		  };
		}
		function oj(a, b, c) {
		  var d = b.pendingProps,
		    e = L.current,
		    f = false,
		    g = 0 !== (b.flags & 128),
		    h;
		  (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
		  if (h) f = true, b.flags &= -129;else if (null === a || null !== a.memoizedState) e |= 1;
		  G(L, e & 1);
		  if (null === a) {
		    Eg(b);
		    a = b.memoizedState;
		    if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
		    g = d.children;
		    a = d.fallback;
		    return f ? (d = b.mode, f = b.child, g = {
		      mode: "hidden",
		      children: g
		    }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = pj(g, d, 0, null), a = Tg(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = nj(c), b.memoizedState = mj, a) : qj(b, g);
		  }
		  e = a.memoizedState;
		  if (null !== e && (h = e.dehydrated, null !== h)) return rj(a, b, g, d, h, e, c);
		  if (f) {
		    f = d.fallback;
		    g = b.mode;
		    e = a.child;
		    h = e.sibling;
		    var k = {
		      mode: "hidden",
		      children: d.children
		    };
		    0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = Pg(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
		    null !== h ? f = Pg(h, f) : (f = Tg(f, g, c, null), f.flags |= 2);
		    f.return = b;
		    d.return = b;
		    d.sibling = f;
		    b.child = d;
		    d = f;
		    f = b.child;
		    g = a.child.memoizedState;
		    g = null === g ? nj(c) : {
		      baseLanes: g.baseLanes | c,
		      cachePool: null,
		      transitions: g.transitions
		    };
		    f.memoizedState = g;
		    f.childLanes = a.childLanes & ~c;
		    b.memoizedState = mj;
		    return d;
		  }
		  f = a.child;
		  a = f.sibling;
		  d = Pg(f, {
		    mode: "visible",
		    children: d.children
		  });
		  0 === (b.mode & 1) && (d.lanes = c);
		  d.return = b;
		  d.sibling = null;
		  null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
		  b.child = d;
		  b.memoizedState = null;
		  return d;
		}
		function qj(a, b) {
		  b = pj({
		    mode: "visible",
		    children: b
		  }, a.mode, 0, null);
		  b.return = a;
		  return a.child = b;
		}
		function sj(a, b, c, d) {
		  null !== d && Jg(d);
		  Ug(b, a.child, null, c);
		  a = qj(b, b.pendingProps.children);
		  a.flags |= 2;
		  b.memoizedState = null;
		  return a;
		}
		function rj(a, b, c, d, e, f, g) {
		  if (c) {
		    if (b.flags & 256) return b.flags &= -257, d = Ki(Error(p(422))), sj(a, b, g, d);
		    if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
		    f = d.fallback;
		    e = b.mode;
		    d = pj({
		      mode: "visible",
		      children: d.children
		    }, e, 0, null);
		    f = Tg(f, e, g, null);
		    f.flags |= 2;
		    d.return = b;
		    f.return = b;
		    d.sibling = f;
		    b.child = d;
		    0 !== (b.mode & 1) && Ug(b, a.child, null, g);
		    b.child.memoizedState = nj(g);
		    b.memoizedState = mj;
		    return f;
		  }
		  if (0 === (b.mode & 1)) return sj(a, b, g, null);
		  if ("$!" === e.data) {
		    d = e.nextSibling && e.nextSibling.dataset;
		    if (d) var h = d.dgst;
		    d = h;
		    f = Error(p(419));
		    d = Ki(f, d, void 0);
		    return sj(a, b, g, d);
		  }
		  h = 0 !== (g & a.childLanes);
		  if (dh || h) {
		    d = Q;
		    if (null !== d) {
		      switch (g & -g) {
		        case 4:
		          e = 2;
		          break;
		        case 16:
		          e = 8;
		          break;
		        case 64:
		        case 128:
		        case 256:
		        case 512:
		        case 1024:
		        case 2048:
		        case 4096:
		        case 8192:
		        case 16384:
		        case 32768:
		        case 65536:
		        case 131072:
		        case 262144:
		        case 524288:
		        case 1048576:
		        case 2097152:
		        case 4194304:
		        case 8388608:
		        case 16777216:
		        case 33554432:
		        case 67108864:
		          e = 32;
		          break;
		        case 536870912:
		          e = 268435456;
		          break;
		        default:
		          e = 0;
		      }
		      e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
		      0 !== e && e !== f.retryLane && (f.retryLane = e, ih(a, e), gi(d, a, e, -1));
		    }
		    tj();
		    d = Ki(Error(p(421)));
		    return sj(a, b, g, d);
		  }
		  if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), e._reactRetry = b, null;
		  a = f.treeContext;
		  yg = Lf(e.nextSibling);
		  xg = b;
		  I = true;
		  zg = null;
		  null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
		  b = qj(b, d.children);
		  b.flags |= 4096;
		  return b;
		}
		function vj(a, b, c) {
		  a.lanes |= b;
		  var d = a.alternate;
		  null !== d && (d.lanes |= b);
		  bh(a.return, b, c);
		}
		function wj(a, b, c, d, e) {
		  var f = a.memoizedState;
		  null === f ? a.memoizedState = {
		    isBackwards: b,
		    rendering: null,
		    renderingStartTime: 0,
		    last: d,
		    tail: c,
		    tailMode: e
		  } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
		}
		function xj(a, b, c) {
		  var d = b.pendingProps,
		    e = d.revealOrder,
		    f = d.tail;
		  Xi(a, b, d.children, c);
		  d = L.current;
		  if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;else {
		    if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a;) {
		      if (13 === a.tag) null !== a.memoizedState && vj(a, c, b);else if (19 === a.tag) vj(a, c, b);else if (null !== a.child) {
		        a.child.return = a;
		        a = a.child;
		        continue;
		      }
		      if (a === b) break a;
		      for (; null === a.sibling;) {
		        if (null === a.return || a.return === b) break a;
		        a = a.return;
		      }
		      a.sibling.return = a.return;
		      a = a.sibling;
		    }
		    d &= 1;
		  }
		  G(L, d);
		  if (0 === (b.mode & 1)) b.memoizedState = null;else switch (e) {
		    case "forwards":
		      c = b.child;
		      for (e = null; null !== c;) a = c.alternate, null !== a && null === Ch(a) && (e = c), c = c.sibling;
		      c = e;
		      null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
		      wj(b, false, e, c, f);
		      break;
		    case "backwards":
		      c = null;
		      e = b.child;
		      for (b.child = null; null !== e;) {
		        a = e.alternate;
		        if (null !== a && null === Ch(a)) {
		          b.child = e;
		          break;
		        }
		        a = e.sibling;
		        e.sibling = c;
		        c = e;
		        e = a;
		      }
		      wj(b, true, c, null, f);
		      break;
		    case "together":
		      wj(b, false, null, null, void 0);
		      break;
		    default:
		      b.memoizedState = null;
		  }
		  return b.child;
		}
		function ij(a, b) {
		  0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
		}
		function Zi(a, b, c) {
		  null !== a && (b.dependencies = a.dependencies);
		  rh |= b.lanes;
		  if (0 === (c & b.childLanes)) return null;
		  if (null !== a && b.child !== a.child) throw Error(p(153));
		  if (null !== b.child) {
		    a = b.child;
		    c = Pg(a, a.pendingProps);
		    b.child = c;
		    for (c.return = b; null !== a.sibling;) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b;
		    c.sibling = null;
		  }
		  return b.child;
		}
		function yj(a, b, c) {
		  switch (b.tag) {
		    case 3:
		      kj(b);
		      Ig();
		      break;
		    case 5:
		      Ah(b);
		      break;
		    case 1:
		      Zf(b.type) && cg(b);
		      break;
		    case 4:
		      yh(b, b.stateNode.containerInfo);
		      break;
		    case 10:
		      var d = b.type._context,
		        e = b.memoizedProps.value;
		      G(Wg, d._currentValue);
		      d._currentValue = e;
		      break;
		    case 13:
		      d = b.memoizedState;
		      if (null !== d) {
		        if (null !== d.dehydrated) return G(L, L.current & 1), b.flags |= 128, null;
		        if (0 !== (c & b.child.childLanes)) return oj(a, b, c);
		        G(L, L.current & 1);
		        a = Zi(a, b, c);
		        return null !== a ? a.sibling : null;
		      }
		      G(L, L.current & 1);
		      break;
		    case 19:
		      d = 0 !== (c & b.childLanes);
		      if (0 !== (a.flags & 128)) {
		        if (d) return xj(a, b, c);
		        b.flags |= 128;
		      }
		      e = b.memoizedState;
		      null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
		      G(L, L.current);
		      if (d) break;else return null;
		    case 22:
		    case 23:
		      return b.lanes = 0, dj(a, b, c);
		  }
		  return Zi(a, b, c);
		}
		var zj, Aj, Bj, Cj;
		zj = function (a, b) {
		  for (var c = b.child; null !== c;) {
		    if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);else if (4 !== c.tag && null !== c.child) {
		      c.child.return = c;
		      c = c.child;
		      continue;
		    }
		    if (c === b) break;
		    for (; null === c.sibling;) {
		      if (null === c.return || c.return === b) return;
		      c = c.return;
		    }
		    c.sibling.return = c.return;
		    c = c.sibling;
		  }
		};
		Aj = function () {};
		Bj = function (a, b, c, d) {
		  var e = a.memoizedProps;
		  if (e !== d) {
		    a = b.stateNode;
		    xh(uh.current);
		    var f = null;
		    switch (c) {
		      case "input":
		        e = Ya(a, e);
		        d = Ya(a, d);
		        f = [];
		        break;
		      case "select":
		        e = A({}, e, {
		          value: void 0
		        });
		        d = A({}, d, {
		          value: void 0
		        });
		        f = [];
		        break;
		      case "textarea":
		        e = gb(a, e);
		        d = gb(a, d);
		        f = [];
		        break;
		      default:
		        "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
		    }
		    ub(c, d);
		    var g;
		    c = null;
		    for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
		      var h = e[l];
		      for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
		    } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
		    for (l in d) {
		      var k = d[l];
		      h = null != e ? e[l] : void 0;
		      if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) {
		        if (h) {
		          for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
		          for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
		        } else c || (f || (f = []), f.push(l, c)), c = k;
		      } else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && D("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l, k));
		    }
		    c && (f = f || []).push("style", c);
		    var l = f;
		    if (b.updateQueue = l) b.flags |= 4;
		  }
		};
		Cj = function (a, b, c, d) {
		  c !== d && (b.flags |= 4);
		};
		function Dj(a, b) {
		  if (!I) switch (a.tailMode) {
		    case "hidden":
		      b = a.tail;
		      for (var c = null; null !== b;) null !== b.alternate && (c = b), b = b.sibling;
		      null === c ? a.tail = null : c.sibling = null;
		      break;
		    case "collapsed":
		      c = a.tail;
		      for (var d = null; null !== c;) null !== c.alternate && (d = c), c = c.sibling;
		      null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
		  }
		}
		function S(a) {
		  var b = null !== a.alternate && a.alternate.child === a.child,
		    c = 0,
		    d = 0;
		  if (b) for (var e = a.child; null !== e;) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;else for (e = a.child; null !== e;) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
		  a.subtreeFlags |= d;
		  a.childLanes = c;
		  return b;
		}
		function Ej(a, b, c) {
		  var d = b.pendingProps;
		  wg(b);
		  switch (b.tag) {
		    case 2:
		    case 16:
		    case 15:
		    case 0:
		    case 11:
		    case 7:
		    case 8:
		    case 12:
		    case 9:
		    case 14:
		      return S(b), null;
		    case 1:
		      return Zf(b.type) && $f(), S(b), null;
		    case 3:
		      d = b.stateNode;
		      zh();
		      E(Wf);
		      E(H);
		      Eh();
		      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
		      if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Fj(zg), zg = null));
		      Aj(a, b);
		      S(b);
		      return null;
		    case 5:
		      Bh(b);
		      var e = xh(wh.current);
		      c = b.type;
		      if (null !== a && null != b.stateNode) Bj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);else {
		        if (!d) {
		          if (null === b.stateNode) throw Error(p(166));
		          S(b);
		          return null;
		        }
		        a = xh(uh.current);
		        if (Gg(b)) {
		          d = b.stateNode;
		          c = b.type;
		          var f = b.memoizedProps;
		          d[Of] = b;
		          d[Pf] = f;
		          a = 0 !== (b.mode & 1);
		          switch (c) {
		            case "dialog":
		              D("cancel", d);
		              D("close", d);
		              break;
		            case "iframe":
		            case "object":
		            case "embed":
		              D("load", d);
		              break;
		            case "video":
		            case "audio":
		              for (e = 0; e < lf.length; e++) D(lf[e], d);
		              break;
		            case "source":
		              D("error", d);
		              break;
		            case "img":
		            case "image":
		            case "link":
		              D("error", d);
		              D("load", d);
		              break;
		            case "details":
		              D("toggle", d);
		              break;
		            case "input":
		              Za(d, f);
		              D("invalid", d);
		              break;
		            case "select":
		              d._wrapperState = {
		                wasMultiple: !!f.multiple
		              };
		              D("invalid", d);
		              break;
		            case "textarea":
		              hb(d, f), D("invalid", d);
		          }
		          ub(c, f);
		          e = null;
		          for (var g in f) if (f.hasOwnProperty(g)) {
		            var h = f[g];
		            "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
		          }
		          switch (c) {
		            case "input":
		              Va(d);
		              db(d, f, true);
		              break;
		            case "textarea":
		              Va(d);
		              jb(d);
		              break;
		            case "select":
		            case "option":
		              break;
		            default:
		              "function" === typeof f.onClick && (d.onclick = Bf);
		          }
		          d = e;
		          b.updateQueue = d;
		          null !== d && (b.flags |= 4);
		        } else {
		          g = 9 === e.nodeType ? e : e.ownerDocument;
		          "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
		          "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script>\x3c/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, {
		            is: d.is
		          }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
		          a[Of] = b;
		          a[Pf] = d;
		          zj(a, b, false, false);
		          b.stateNode = a;
		          a: {
		            g = vb(c, d);
		            switch (c) {
		              case "dialog":
		                D("cancel", a);
		                D("close", a);
		                e = d;
		                break;
		              case "iframe":
		              case "object":
		              case "embed":
		                D("load", a);
		                e = d;
		                break;
		              case "video":
		              case "audio":
		                for (e = 0; e < lf.length; e++) D(lf[e], a);
		                e = d;
		                break;
		              case "source":
		                D("error", a);
		                e = d;
		                break;
		              case "img":
		              case "image":
		              case "link":
		                D("error", a);
		                D("load", a);
		                e = d;
		                break;
		              case "details":
		                D("toggle", a);
		                e = d;
		                break;
		              case "input":
		                Za(a, d);
		                e = Ya(a, d);
		                D("invalid", a);
		                break;
		              case "option":
		                e = d;
		                break;
		              case "select":
		                a._wrapperState = {
		                  wasMultiple: !!d.multiple
		                };
		                e = A({}, d, {
		                  value: void 0
		                });
		                D("invalid", a);
		                break;
		              case "textarea":
		                hb(a, d);
		                e = gb(a, d);
		                D("invalid", a);
		                break;
		              default:
		                e = d;
		            }
		            ub(c, e);
		            h = e;
		            for (f in h) if (h.hasOwnProperty(f)) {
		              var k = h[f];
		              "style" === f ? sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && ob(a, k) : "number" === typeof k && ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea.hasOwnProperty(f) ? null != k && "onScroll" === f && D("scroll", a) : null != k && ta(a, f, k, g));
		            }
		            switch (c) {
		              case "input":
		                Va(a);
		                db(a, d, false);
		                break;
		              case "textarea":
		                Va(a);
		                jb(a);
		                break;
		              case "option":
		                null != d.value && a.setAttribute("value", "" + Sa(d.value));
		                break;
		              case "select":
		                a.multiple = !!d.multiple;
		                f = d.value;
		                null != f ? fb(a, !!d.multiple, f, false) : null != d.defaultValue && fb(a, !!d.multiple, d.defaultValue, true);
		                break;
		              default:
		                "function" === typeof e.onClick && (a.onclick = Bf);
		            }
		            switch (c) {
		              case "button":
		              case "input":
		              case "select":
		              case "textarea":
		                d = !!d.autoFocus;
		                break a;
		              case "img":
		                d = true;
		                break a;
		              default:
		                d = false;
		            }
		          }
		          d && (b.flags |= 4);
		        }
		        null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
		      }
		      S(b);
		      return null;
		    case 6:
		      if (a && null != b.stateNode) Cj(a, b, a.memoizedProps, d);else {
		        if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
		        c = xh(wh.current);
		        xh(uh.current);
		        if (Gg(b)) {
		          d = b.stateNode;
		          c = b.memoizedProps;
		          d[Of] = b;
		          if (f = d.nodeValue !== c) if (a = xg, null !== a) switch (a.tag) {
		            case 3:
		              Af(d.nodeValue, c, 0 !== (a.mode & 1));
		              break;
		            case 5:
		              true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
		          }
		          f && (b.flags |= 4);
		        } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
		      }
		      S(b);
		      return null;
		    case 13:
		      E(L);
		      d = b.memoizedState;
		      if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
		        if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f = false;else if (f = Gg(b), null !== d && null !== d.dehydrated) {
		          if (null === a) {
		            if (!f) throw Error(p(318));
		            f = b.memoizedState;
		            f = null !== f ? f.dehydrated : null;
		            if (!f) throw Error(p(317));
		            f[Of] = b;
		          } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
		          S(b);
		          f = false;
		        } else null !== zg && (Fj(zg), zg = null), f = true;
		        if (!f) return b.flags & 65536 ? b : null;
		      }
		      if (0 !== (b.flags & 128)) return b.lanes = c, b;
		      d = null !== d;
		      d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
		      null !== b.updateQueue && (b.flags |= 4);
		      S(b);
		      return null;
		    case 4:
		      return zh(), Aj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
		    case 10:
		      return ah(b.type._context), S(b), null;
		    case 17:
		      return Zf(b.type) && $f(), S(b), null;
		    case 19:
		      E(L);
		      f = b.memoizedState;
		      if (null === f) return S(b), null;
		      d = 0 !== (b.flags & 128);
		      g = f.rendering;
		      if (null === g) {
		        if (d) Dj(f, false);else {
		          if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a;) {
		            g = Ch(a);
		            if (null !== g) {
		              b.flags |= 128;
		              Dj(f, false);
		              d = g.updateQueue;
		              null !== d && (b.updateQueue = d, b.flags |= 4);
		              b.subtreeFlags = 0;
		              d = c;
		              for (c = b.child; null !== c;) f = c, a = d, f.flags &= 14680066, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : {
		                lanes: a.lanes,
		                firstContext: a.firstContext
		              }), c = c.sibling;
		              G(L, L.current & 1 | 2);
		              return b.child;
		            }
		            a = a.sibling;
		          }
		          null !== f.tail && B() > Gj && (b.flags |= 128, d = true, Dj(f, false), b.lanes = 4194304);
		        }
		      } else {
		        if (!d) if (a = Ch(g), null !== a) {
		          if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Dj(f, true), null === f.tail && "hidden" === f.tailMode && !g.alternate && !I) return S(b), null;
		        } else 2 * B() - f.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, d = true, Dj(f, false), b.lanes = 4194304);
		        f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, f.last = g);
		      }
		      if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B(), b.sibling = null, c = L.current, G(L, d ? c & 1 | 2 : c & 1), b;
		      S(b);
		      return null;
		    case 22:
		    case 23:
		      return Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
		    case 24:
		      return null;
		    case 25:
		      return null;
		  }
		  throw Error(p(156, b.tag));
		}
		function Ij(a, b) {
		  wg(b);
		  switch (b.tag) {
		    case 1:
		      return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
		    case 3:
		      return zh(), E(Wf), E(H), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
		    case 5:
		      return Bh(b), null;
		    case 13:
		      E(L);
		      a = b.memoizedState;
		      if (null !== a && null !== a.dehydrated) {
		        if (null === b.alternate) throw Error(p(340));
		        Ig();
		      }
		      a = b.flags;
		      return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
		    case 19:
		      return E(L), null;
		    case 4:
		      return zh(), null;
		    case 10:
		      return ah(b.type._context), null;
		    case 22:
		    case 23:
		      return Hj(), null;
		    case 24:
		      return null;
		    default:
		      return null;
		  }
		}
		var Jj = false,
		  U = false,
		  Kj = "function" === typeof WeakSet ? WeakSet : Set,
		  V = null;
		function Lj(a, b) {
		  var c = a.ref;
		  if (null !== c) if ("function" === typeof c) try {
		    c(null);
		  } catch (d) {
		    W(a, b, d);
		  } else c.current = null;
		}
		function Mj(a, b, c) {
		  try {
		    c();
		  } catch (d) {
		    W(a, b, d);
		  }
		}
		var Nj = false;
		function Oj(a, b) {
		  Cf = dd;
		  a = Me();
		  if (Ne(a)) {
		    if ("selectionStart" in a) var c = {
		      start: a.selectionStart,
		      end: a.selectionEnd
		    };else a: {
		      c = (c = a.ownerDocument) && c.defaultView || window;
		      var d = c.getSelection && c.getSelection();
		      if (d && 0 !== d.rangeCount) {
		        c = d.anchorNode;
		        var e = d.anchorOffset,
		          f = d.focusNode;
		        d = d.focusOffset;
		        try {
		          c.nodeType, f.nodeType;
		        } catch (F) {
		          c = null;
		          break a;
		        }
		        var g = 0,
		          h = -1,
		          k = -1,
		          l = 0,
		          m = 0,
		          q = a,
		          r = null;
		        b: for (;;) {
		          for (var y;;) {
		            q !== c || 0 !== e && 3 !== q.nodeType || (h = g + e);
		            q !== f || 0 !== d && 3 !== q.nodeType || (k = g + d);
		            3 === q.nodeType && (g += q.nodeValue.length);
		            if (null === (y = q.firstChild)) break;
		            r = q;
		            q = y;
		          }
		          for (;;) {
		            if (q === a) break b;
		            r === c && ++l === e && (h = g);
		            r === f && ++m === d && (k = g);
		            if (null !== (y = q.nextSibling)) break;
		            q = r;
		            r = q.parentNode;
		          }
		          q = y;
		        }
		        c = -1 === h || -1 === k ? null : {
		          start: h,
		          end: k
		        };
		      } else c = null;
		    }
		    c = c || {
		      start: 0,
		      end: 0
		    };
		  } else c = null;
		  Df = {
		    focusedElem: a,
		    selectionRange: c
		  };
		  dd = false;
		  for (V = b; null !== V;) if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V = a;else for (; null !== V;) {
		    b = V;
		    try {
		      var n = b.alternate;
		      if (0 !== (b.flags & 1024)) switch (b.tag) {
		        case 0:
		        case 11:
		        case 15:
		          break;
		        case 1:
		          if (null !== n) {
		            var t = n.memoizedProps,
		              J = n.memoizedState,
		              x = b.stateNode,
		              w = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Ci(b.type, t), J);
		            x.__reactInternalSnapshotBeforeUpdate = w;
		          }
		          break;
		        case 3:
		          var u = b.stateNode.containerInfo;
		          1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
		          break;
		        case 5:
		        case 6:
		        case 4:
		        case 17:
		          break;
		        default:
		          throw Error(p(163));
		      }
		    } catch (F) {
		      W(b, b.return, F);
		    }
		    a = b.sibling;
		    if (null !== a) {
		      a.return = b.return;
		      V = a;
		      break;
		    }
		    V = b.return;
		  }
		  n = Nj;
		  Nj = false;
		  return n;
		}
		function Pj(a, b, c) {
		  var d = b.updateQueue;
		  d = null !== d ? d.lastEffect : null;
		  if (null !== d) {
		    var e = d = d.next;
		    do {
		      if ((e.tag & a) === a) {
		        var f = e.destroy;
		        e.destroy = void 0;
		        void 0 !== f && Mj(b, c, f);
		      }
		      e = e.next;
		    } while (e !== d);
		  }
		}
		function Qj(a, b) {
		  b = b.updateQueue;
		  b = null !== b ? b.lastEffect : null;
		  if (null !== b) {
		    var c = b = b.next;
		    do {
		      if ((c.tag & a) === a) {
		        var d = c.create;
		        c.destroy = d();
		      }
		      c = c.next;
		    } while (c !== b);
		  }
		}
		function Rj(a) {
		  var b = a.ref;
		  if (null !== b) {
		    var c = a.stateNode;
		    switch (a.tag) {
		      case 5:
		        a = c;
		        break;
		      default:
		        a = c;
		    }
		    "function" === typeof b ? b(a) : b.current = a;
		  }
		}
		function Sj(a) {
		  var b = a.alternate;
		  null !== b && (a.alternate = null, Sj(b));
		  a.child = null;
		  a.deletions = null;
		  a.sibling = null;
		  5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
		  a.stateNode = null;
		  a.return = null;
		  a.dependencies = null;
		  a.memoizedProps = null;
		  a.memoizedState = null;
		  a.pendingProps = null;
		  a.stateNode = null;
		  a.updateQueue = null;
		}
		function Tj(a) {
		  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
		}
		function Uj(a) {
		  a: for (;;) {
		    for (; null === a.sibling;) {
		      if (null === a.return || Tj(a.return)) return null;
		      a = a.return;
		    }
		    a.sibling.return = a.return;
		    for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag;) {
		      if (a.flags & 2) continue a;
		      if (null === a.child || 4 === a.tag) continue a;else a.child.return = a, a = a.child;
		    }
		    if (!(a.flags & 2)) return a.stateNode;
		  }
		}
		function Vj(a, b, c) {
		  var d = a.tag;
		  if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));else if (4 !== d && (a = a.child, null !== a)) for (Vj(a, b, c), a = a.sibling; null !== a;) Vj(a, b, c), a = a.sibling;
		}
		function Wj(a, b, c) {
		  var d = a.tag;
		  if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a;) Wj(a, b, c), a = a.sibling;
		}
		var X = null,
		  Xj = false;
		function Yj(a, b, c) {
		  for (c = c.child; null !== c;) Zj(a, b, c), c = c.sibling;
		}
		function Zj(a, b, c) {
		  if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
		    lc.onCommitFiberUnmount(kc, c);
		  } catch (h) {}
		  switch (c.tag) {
		    case 5:
		      U || Lj(c, b);
		    case 6:
		      var d = X,
		        e = Xj;
		      X = null;
		      Yj(a, b, c);
		      X = d;
		      Xj = e;
		      null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
		      break;
		    case 18:
		      null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
		      break;
		    case 4:
		      d = X;
		      e = Xj;
		      X = c.stateNode.containerInfo;
		      Xj = true;
		      Yj(a, b, c);
		      X = d;
		      Xj = e;
		      break;
		    case 0:
		    case 11:
		    case 14:
		    case 15:
		      if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
		        e = d = d.next;
		        do {
		          var f = e,
		            g = f.destroy;
		          f = f.tag;
		          void 0 !== g && (0 !== (f & 2) ? Mj(c, b, g) : 0 !== (f & 4) && Mj(c, b, g));
		          e = e.next;
		        } while (e !== d);
		      }
		      Yj(a, b, c);
		      break;
		    case 1:
		      if (!U && (Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
		        d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
		      } catch (h) {
		        W(c, b, h);
		      }
		      Yj(a, b, c);
		      break;
		    case 21:
		      Yj(a, b, c);
		      break;
		    case 22:
		      c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Yj(a, b, c), U = d) : Yj(a, b, c);
		      break;
		    default:
		      Yj(a, b, c);
		  }
		}
		function ak(a) {
		  var b = a.updateQueue;
		  if (null !== b) {
		    a.updateQueue = null;
		    var c = a.stateNode;
		    null === c && (c = a.stateNode = new Kj());
		    b.forEach(function (b) {
		      var d = bk.bind(null, a, b);
		      c.has(b) || (c.add(b), b.then(d, d));
		    });
		  }
		}
		function ck(a, b) {
		  var c = b.deletions;
		  if (null !== c) for (var d = 0; d < c.length; d++) {
		    var e = c[d];
		    try {
		      var f = a,
		        g = b,
		        h = g;
		      a: for (; null !== h;) {
		        switch (h.tag) {
		          case 5:
		            X = h.stateNode;
		            Xj = !1;
		            break a;
		          case 3:
		            X = h.stateNode.containerInfo;
		            Xj = !0;
		            break a;
		          case 4:
		            X = h.stateNode.containerInfo;
		            Xj = !0;
		            break a;
		        }
		        h = h.return;
		      }
		      if (null === X) throw Error(p(160));
		      Zj(f, g, e);
		      X = null;
		      Xj = !1;
		      var k = e.alternate;
		      null !== k && (k.return = null);
		      e.return = null;
		    } catch (l) {
		      W(e, b, l);
		    }
		  }
		  if (b.subtreeFlags & 12854) for (b = b.child; null !== b;) dk(b, a), b = b.sibling;
		}
		function dk(a, b) {
		  var c = a.alternate,
		    d = a.flags;
		  switch (a.tag) {
		    case 0:
		    case 11:
		    case 14:
		    case 15:
		      ck(b, a);
		      ek(a);
		      if (d & 4) {
		        try {
		          Pj(3, a, a.return), Qj(3, a);
		        } catch (t) {
		          W(a, a.return, t);
		        }
		        try {
		          Pj(5, a, a.return);
		        } catch (t) {
		          W(a, a.return, t);
		        }
		      }
		      break;
		    case 1:
		      ck(b, a);
		      ek(a);
		      d & 512 && null !== c && Lj(c, c.return);
		      break;
		    case 5:
		      ck(b, a);
		      ek(a);
		      d & 512 && null !== c && Lj(c, c.return);
		      if (a.flags & 32) {
		        var e = a.stateNode;
		        try {
		          ob(e, "");
		        } catch (t) {
		          W(a, a.return, t);
		        }
		      }
		      if (d & 4 && (e = a.stateNode, null != e)) {
		        var f = a.memoizedProps,
		          g = null !== c ? c.memoizedProps : f,
		          h = a.type,
		          k = a.updateQueue;
		        a.updateQueue = null;
		        if (null !== k) try {
		          "input" === h && "radio" === f.type && null != f.name && ab(e, f);
		          vb(h, g);
		          var l = vb(h, f);
		          for (g = 0; g < k.length; g += 2) {
		            var m = k[g],
		              q = k[g + 1];
		            "style" === m ? sb(e, q) : "dangerouslySetInnerHTML" === m ? nb(e, q) : "children" === m ? ob(e, q) : ta(e, m, q, l);
		          }
		          switch (h) {
		            case "input":
		              bb(e, f);
		              break;
		            case "textarea":
		              ib(e, f);
		              break;
		            case "select":
		              var r = e._wrapperState.wasMultiple;
		              e._wrapperState.wasMultiple = !!f.multiple;
		              var y = f.value;
		              null != y ? fb(e, !!f.multiple, y, !1) : r !== !!f.multiple && (null != f.defaultValue ? fb(e, !!f.multiple, f.defaultValue, !0) : fb(e, !!f.multiple, f.multiple ? [] : "", !1));
		          }
		          e[Pf] = f;
		        } catch (t) {
		          W(a, a.return, t);
		        }
		      }
		      break;
		    case 6:
		      ck(b, a);
		      ek(a);
		      if (d & 4) {
		        if (null === a.stateNode) throw Error(p(162));
		        e = a.stateNode;
		        f = a.memoizedProps;
		        try {
		          e.nodeValue = f;
		        } catch (t) {
		          W(a, a.return, t);
		        }
		      }
		      break;
		    case 3:
		      ck(b, a);
		      ek(a);
		      if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
		        bd(b.containerInfo);
		      } catch (t) {
		        W(a, a.return, t);
		      }
		      break;
		    case 4:
		      ck(b, a);
		      ek(a);
		      break;
		    case 13:
		      ck(b, a);
		      ek(a);
		      e = a.child;
		      e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
		      d & 4 && ak(a);
		      break;
		    case 22:
		      m = null !== c && null !== c.memoizedState;
		      a.mode & 1 ? (U = (l = U) || m, ck(b, a), U = l) : ck(b, a);
		      ek(a);
		      if (d & 8192) {
		        l = null !== a.memoizedState;
		        if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1)) for (V = a, m = a.child; null !== m;) {
		          for (q = V = m; null !== V;) {
		            r = V;
		            y = r.child;
		            switch (r.tag) {
		              case 0:
		              case 11:
		              case 14:
		              case 15:
		                Pj(4, r, r.return);
		                break;
		              case 1:
		                Lj(r, r.return);
		                var n = r.stateNode;
		                if ("function" === typeof n.componentWillUnmount) {
		                  d = r;
		                  c = r.return;
		                  try {
		                    b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
		                  } catch (t) {
		                    W(d, c, t);
		                  }
		                }
		                break;
		              case 5:
		                Lj(r, r.return);
		                break;
		              case 22:
		                if (null !== r.memoizedState) {
		                  gk(q);
		                  continue;
		                }
		            }
		            null !== y ? (y.return = r, V = y) : gk(q);
		          }
		          m = m.sibling;
		        }
		        a: for (m = null, q = a;;) {
		          if (5 === q.tag) {
		            if (null === m) {
		              m = q;
		              try {
		                e = q.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = rb("display", g));
		              } catch (t) {
		                W(a, a.return, t);
		              }
		            }
		          } else if (6 === q.tag) {
		            if (null === m) try {
		              q.stateNode.nodeValue = l ? "" : q.memoizedProps;
		            } catch (t) {
		              W(a, a.return, t);
		            }
		          } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
		            q.child.return = q;
		            q = q.child;
		            continue;
		          }
		          if (q === a) break a;
		          for (; null === q.sibling;) {
		            if (null === q.return || q.return === a) break a;
		            m === q && (m = null);
		            q = q.return;
		          }
		          m === q && (m = null);
		          q.sibling.return = q.return;
		          q = q.sibling;
		        }
		      }
		      break;
		    case 19:
		      ck(b, a);
		      ek(a);
		      d & 4 && ak(a);
		      break;
		    case 21:
		      break;
		    default:
		      ck(b, a), ek(a);
		  }
		}
		function ek(a) {
		  var b = a.flags;
		  if (b & 2) {
		    try {
		      a: {
		        for (var c = a.return; null !== c;) {
		          if (Tj(c)) {
		            var d = c;
		            break a;
		          }
		          c = c.return;
		        }
		        throw Error(p(160));
		      }
		      switch (d.tag) {
		        case 5:
		          var e = d.stateNode;
		          d.flags & 32 && (ob(e, ""), d.flags &= -33);
		          var f = Uj(a);
		          Wj(a, f, e);
		          break;
		        case 3:
		        case 4:
		          var g = d.stateNode.containerInfo,
		            h = Uj(a);
		          Vj(a, h, g);
		          break;
		        default:
		          throw Error(p(161));
		      }
		    } catch (k) {
		      W(a, a.return, k);
		    }
		    a.flags &= -3;
		  }
		  b & 4096 && (a.flags &= -4097);
		}
		function hk(a, b, c) {
		  V = a;
		  ik(a);
		}
		function ik(a, b, c) {
		  for (var d = 0 !== (a.mode & 1); null !== V;) {
		    var e = V,
		      f = e.child;
		    if (22 === e.tag && d) {
		      var g = null !== e.memoizedState || Jj;
		      if (!g) {
		        var h = e.alternate,
		          k = null !== h && null !== h.memoizedState || U;
		        h = Jj;
		        var l = U;
		        Jj = g;
		        if ((U = k) && !l) for (V = e; null !== V;) g = V, k = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e) : null !== k ? (k.return = g, V = k) : jk(e);
		        for (; null !== f;) V = f, ik(f), f = f.sibling;
		        V = e;
		        Jj = h;
		        U = l;
		      }
		      kk(a);
		    } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, V = f) : kk(a);
		  }
		}
		function kk(a) {
		  for (; null !== V;) {
		    var b = V;
		    if (0 !== (b.flags & 8772)) {
		      var c = b.alternate;
		      try {
		        if (0 !== (b.flags & 8772)) switch (b.tag) {
		          case 0:
		          case 11:
		          case 15:
		            U || Qj(5, b);
		            break;
		          case 1:
		            var d = b.stateNode;
		            if (b.flags & 4 && !U) if (null === c) d.componentDidMount();else {
		              var e = b.elementType === b.type ? c.memoizedProps : Ci(b.type, c.memoizedProps);
		              d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
		            }
		            var f = b.updateQueue;
		            null !== f && sh(b, f, d);
		            break;
		          case 3:
		            var g = b.updateQueue;
		            if (null !== g) {
		              c = null;
		              if (null !== b.child) switch (b.child.tag) {
		                case 5:
		                  c = b.child.stateNode;
		                  break;
		                case 1:
		                  c = b.child.stateNode;
		              }
		              sh(b, g, c);
		            }
		            break;
		          case 5:
		            var h = b.stateNode;
		            if (null === c && b.flags & 4) {
		              c = h;
		              var k = b.memoizedProps;
		              switch (b.type) {
		                case "button":
		                case "input":
		                case "select":
		                case "textarea":
		                  k.autoFocus && c.focus();
		                  break;
		                case "img":
		                  k.src && (c.src = k.src);
		              }
		            }
		            break;
		          case 6:
		            break;
		          case 4:
		            break;
		          case 12:
		            break;
		          case 13:
		            if (null === b.memoizedState) {
		              var l = b.alternate;
		              if (null !== l) {
		                var m = l.memoizedState;
		                if (null !== m) {
		                  var q = m.dehydrated;
		                  null !== q && bd(q);
		                }
		              }
		            }
		            break;
		          case 19:
		          case 17:
		          case 21:
		          case 22:
		          case 23:
		          case 25:
		            break;
		          default:
		            throw Error(p(163));
		        }
		        U || b.flags & 512 && Rj(b);
		      } catch (r) {
		        W(b, b.return, r);
		      }
		    }
		    if (b === a) {
		      V = null;
		      break;
		    }
		    c = b.sibling;
		    if (null !== c) {
		      c.return = b.return;
		      V = c;
		      break;
		    }
		    V = b.return;
		  }
		}
		function gk(a) {
		  for (; null !== V;) {
		    var b = V;
		    if (b === a) {
		      V = null;
		      break;
		    }
		    var c = b.sibling;
		    if (null !== c) {
		      c.return = b.return;
		      V = c;
		      break;
		    }
		    V = b.return;
		  }
		}
		function jk(a) {
		  for (; null !== V;) {
		    var b = V;
		    try {
		      switch (b.tag) {
		        case 0:
		        case 11:
		        case 15:
		          var c = b.return;
		          try {
		            Qj(4, b);
		          } catch (k) {
		            W(b, c, k);
		          }
		          break;
		        case 1:
		          var d = b.stateNode;
		          if ("function" === typeof d.componentDidMount) {
		            var e = b.return;
		            try {
		              d.componentDidMount();
		            } catch (k) {
		              W(b, e, k);
		            }
		          }
		          var f = b.return;
		          try {
		            Rj(b);
		          } catch (k) {
		            W(b, f, k);
		          }
		          break;
		        case 5:
		          var g = b.return;
		          try {
		            Rj(b);
		          } catch (k) {
		            W(b, g, k);
		          }
		      }
		    } catch (k) {
		      W(b, b.return, k);
		    }
		    if (b === a) {
		      V = null;
		      break;
		    }
		    var h = b.sibling;
		    if (null !== h) {
		      h.return = b.return;
		      V = h;
		      break;
		    }
		    V = b.return;
		  }
		}
		var lk = Math.ceil,
		  mk = ua.ReactCurrentDispatcher,
		  nk = ua.ReactCurrentOwner,
		  ok = ua.ReactCurrentBatchConfig,
		  K = 0,
		  Q = null,
		  Y = null,
		  Z = 0,
		  fj = 0,
		  ej = Uf(0),
		  T = 0,
		  pk = null,
		  rh = 0,
		  qk = 0,
		  rk = 0,
		  sk = null,
		  tk = null,
		  fk = 0,
		  Gj = Infinity,
		  uk = null,
		  Oi = false,
		  Pi = null,
		  Ri = null,
		  vk = false,
		  wk = null,
		  xk = 0,
		  yk = 0,
		  zk = null,
		  Ak = -1,
		  Bk = 0;
		function R() {
		  return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
		}
		function yi(a) {
		  if (0 === (a.mode & 1)) return 1;
		  if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
		  if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
		  a = C;
		  if (0 !== a) return a;
		  a = window.event;
		  a = void 0 === a ? 16 : jd(a.type);
		  return a;
		}
		function gi(a, b, c, d) {
		  if (50 < yk) throw yk = 0, zk = null, Error(p(185));
		  Ac(a, c, d);
		  if (0 === (K & 2) || a !== Q) a === Q && (0 === (K & 2) && (qk |= c), 4 === T && Ck(a, Z)), Dk(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Gj = B() + 500, fg && jg());
		}
		function Dk(a, b) {
		  var c = a.callbackNode;
		  wc(a, b);
		  var d = uc(a, a === Q ? Z : 0);
		  if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;else if (b = d & -d, a.callbackPriority !== b) {
		    null != c && bc(c);
		    if (1 === b) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function () {
		      0 === (K & 6) && jg();
		    }), c = null;else {
		      switch (Dc(d)) {
		        case 1:
		          c = fc;
		          break;
		        case 4:
		          c = gc;
		          break;
		        case 16:
		          c = hc;
		          break;
		        case 536870912:
		          c = jc;
		          break;
		        default:
		          c = hc;
		      }
		      c = Fk(c, Gk.bind(null, a));
		    }
		    a.callbackPriority = b;
		    a.callbackNode = c;
		  }
		}
		function Gk(a, b) {
		  Ak = -1;
		  Bk = 0;
		  if (0 !== (K & 6)) throw Error(p(327));
		  var c = a.callbackNode;
		  if (Hk() && a.callbackNode !== c) return null;
		  var d = uc(a, a === Q ? Z : 0);
		  if (0 === d) return null;
		  if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ik(a, d);else {
		    b = d;
		    var e = K;
		    K |= 2;
		    var f = Jk();
		    if (Q !== a || Z !== b) uk = null, Gj = B() + 500, Kk(a, b);
		    do try {
		      Lk();
		      break;
		    } catch (h) {
		      Mk(a, h);
		    } while (1);
		    $g();
		    mk.current = f;
		    K = e;
		    null !== Y ? b = 0 : (Q = null, Z = 0, b = T);
		  }
		  if (0 !== b) {
		    2 === b && (e = xc(a), 0 !== e && (d = e, b = Nk(a, e)));
		    if (1 === b) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
		    if (6 === b) Ck(a, d);else {
		      e = a.current.alternate;
		      if (0 === (d & 30) && !Ok(e) && (b = Ik(a, d), 2 === b && (f = xc(a), 0 !== f && (d = f, b = Nk(a, f))), 1 === b)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
		      a.finishedWork = e;
		      a.finishedLanes = d;
		      switch (b) {
		        case 0:
		        case 1:
		          throw Error(p(345));
		        case 2:
		          Pk(a, tk, uk);
		          break;
		        case 3:
		          Ck(a, d);
		          if ((d & 130023424) === d && (b = fk + 500 - B(), 10 < b)) {
		            if (0 !== uc(a, 0)) break;
		            e = a.suspendedLanes;
		            if ((e & d) !== d) {
		              R();
		              a.pingedLanes |= a.suspendedLanes & e;
		              break;
		            }
		            a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
		            break;
		          }
		          Pk(a, tk, uk);
		          break;
		        case 4:
		          Ck(a, d);
		          if ((d & 4194240) === d) break;
		          b = a.eventTimes;
		          for (e = -1; 0 < d;) {
		            var g = 31 - oc(d);
		            f = 1 << g;
		            g = b[g];
		            g > e && (e = g);
		            d &= ~f;
		          }
		          d = e;
		          d = B() - d;
		          d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3E3 > d ? 3E3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
		          if (10 < d) {
		            a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
		            break;
		          }
		          Pk(a, tk, uk);
		          break;
		        case 5:
		          Pk(a, tk, uk);
		          break;
		        default:
		          throw Error(p(329));
		      }
		    }
		  }
		  Dk(a, B());
		  return a.callbackNode === c ? Gk.bind(null, a) : null;
		}
		function Nk(a, b) {
		  var c = sk;
		  a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
		  a = Ik(a, b);
		  2 !== a && (b = tk, tk = c, null !== b && Fj(b));
		  return a;
		}
		function Fj(a) {
		  null === tk ? tk = a : tk.push.apply(tk, a);
		}
		function Ok(a) {
		  for (var b = a;;) {
		    if (b.flags & 16384) {
		      var c = b.updateQueue;
		      if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
		        var e = c[d],
		          f = e.getSnapshot;
		        e = e.value;
		        try {
		          if (!He(f(), e)) return !1;
		        } catch (g) {
		          return false;
		        }
		      }
		    }
		    c = b.child;
		    if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;else {
		      if (b === a) break;
		      for (; null === b.sibling;) {
		        if (null === b.return || b.return === a) return true;
		        b = b.return;
		      }
		      b.sibling.return = b.return;
		      b = b.sibling;
		    }
		  }
		  return true;
		}
		function Ck(a, b) {
		  b &= ~rk;
		  b &= ~qk;
		  a.suspendedLanes |= b;
		  a.pingedLanes &= ~b;
		  for (a = a.expirationTimes; 0 < b;) {
		    var c = 31 - oc(b),
		      d = 1 << c;
		    a[c] = -1;
		    b &= ~d;
		  }
		}
		function Ek(a) {
		  if (0 !== (K & 6)) throw Error(p(327));
		  Hk();
		  var b = uc(a, 0);
		  if (0 === (b & 1)) return Dk(a, B()), null;
		  var c = Ik(a, b);
		  if (0 !== a.tag && 2 === c) {
		    var d = xc(a);
		    0 !== d && (b = d, c = Nk(a, d));
		  }
		  if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B()), c;
		  if (6 === c) throw Error(p(345));
		  a.finishedWork = a.current.alternate;
		  a.finishedLanes = b;
		  Pk(a, tk, uk);
		  Dk(a, B());
		  return null;
		}
		function Qk(a, b) {
		  var c = K;
		  K |= 1;
		  try {
		    return a(b);
		  } finally {
		    K = c, 0 === K && (Gj = B() + 500, fg && jg());
		  }
		}
		function Rk(a) {
		  null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
		  var b = K;
		  K |= 1;
		  var c = ok.transition,
		    d = C;
		  try {
		    if (ok.transition = null, C = 1, a) return a();
		  } finally {
		    C = d, ok.transition = c, K = b, 0 === (K & 6) && jg();
		  }
		}
		function Hj() {
		  fj = ej.current;
		  E(ej);
		}
		function Kk(a, b) {
		  a.finishedWork = null;
		  a.finishedLanes = 0;
		  var c = a.timeoutHandle;
		  -1 !== c && (a.timeoutHandle = -1, Gf(c));
		  if (null !== Y) for (c = Y.return; null !== c;) {
		    var d = c;
		    wg(d);
		    switch (d.tag) {
		      case 1:
		        d = d.type.childContextTypes;
		        null !== d && void 0 !== d && $f();
		        break;
		      case 3:
		        zh();
		        E(Wf);
		        E(H);
		        Eh();
		        break;
		      case 5:
		        Bh(d);
		        break;
		      case 4:
		        zh();
		        break;
		      case 13:
		        E(L);
		        break;
		      case 19:
		        E(L);
		        break;
		      case 10:
		        ah(d.type._context);
		        break;
		      case 22:
		      case 23:
		        Hj();
		    }
		    c = c.return;
		  }
		  Q = a;
		  Y = a = Pg(a.current, null);
		  Z = fj = b;
		  T = 0;
		  pk = null;
		  rk = qk = rh = 0;
		  tk = sk = null;
		  if (null !== fh) {
		    for (b = 0; b < fh.length; b++) if (c = fh[b], d = c.interleaved, null !== d) {
		      c.interleaved = null;
		      var e = d.next,
		        f = c.pending;
		      if (null !== f) {
		        var g = f.next;
		        f.next = e;
		        d.next = g;
		      }
		      c.pending = d;
		    }
		    fh = null;
		  }
		  return a;
		}
		function Mk(a, b) {
		  do {
		    var c = Y;
		    try {
		      $g();
		      Fh.current = Rh;
		      if (Ih) {
		        for (var d = M.memoizedState; null !== d;) {
		          var e = d.queue;
		          null !== e && (e.pending = null);
		          d = d.next;
		        }
		        Ih = !1;
		      }
		      Hh = 0;
		      O = N = M = null;
		      Jh = !1;
		      Kh = 0;
		      nk.current = null;
		      if (null === c || null === c.return) {
		        T = 1;
		        pk = b;
		        Y = null;
		        break;
		      }
		      a: {
		        var f = a,
		          g = c.return,
		          h = c,
		          k = b;
		        b = Z;
		        h.flags |= 32768;
		        if (null !== k && "object" === typeof k && "function" === typeof k.then) {
		          var l = k,
		            m = h,
		            q = m.tag;
		          if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
		            var r = m.alternate;
		            r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
		          }
		          var y = Ui(g);
		          if (null !== y) {
		            y.flags &= -257;
		            Vi(y, g, h, f, b);
		            y.mode & 1 && Si(f, l, b);
		            b = y;
		            k = l;
		            var n = b.updateQueue;
		            if (null === n) {
		              var t = new Set();
		              t.add(k);
		              b.updateQueue = t;
		            } else n.add(k);
		            break a;
		          } else {
		            if (0 === (b & 1)) {
		              Si(f, l, b);
		              tj();
		              break a;
		            }
		            k = Error(p(426));
		          }
		        } else if (I && h.mode & 1) {
		          var J = Ui(g);
		          if (null !== J) {
		            0 === (J.flags & 65536) && (J.flags |= 256);
		            Vi(J, g, h, f, b);
		            Jg(Ji(k, h));
		            break a;
		          }
		        }
		        f = k = Ji(k, h);
		        4 !== T && (T = 2);
		        null === sk ? sk = [f] : sk.push(f);
		        f = g;
		        do {
		          switch (f.tag) {
		            case 3:
		              f.flags |= 65536;
		              b &= -b;
		              f.lanes |= b;
		              var x = Ni(f, k, b);
		              ph(f, x);
		              break a;
		            case 1:
		              h = k;
		              var w = f.type,
		                u = f.stateNode;
		              if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Ri || !Ri.has(u)))) {
		                f.flags |= 65536;
		                b &= -b;
		                f.lanes |= b;
		                var F = Qi(f, h, b);
		                ph(f, F);
		                break a;
		              }
		          }
		          f = f.return;
		        } while (null !== f);
		      }
		      Sk(c);
		    } catch (na) {
		      b = na;
		      Y === c && null !== c && (Y = c = c.return);
		      continue;
		    }
		    break;
		  } while (1);
		}
		function Jk() {
		  var a = mk.current;
		  mk.current = Rh;
		  return null === a ? Rh : a;
		}
		function tj() {
		  if (0 === T || 3 === T || 2 === T) T = 4;
		  null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
		}
		function Ik(a, b) {
		  var c = K;
		  K |= 2;
		  var d = Jk();
		  if (Q !== a || Z !== b) uk = null, Kk(a, b);
		  do try {
		    Tk();
		    break;
		  } catch (e) {
		    Mk(a, e);
		  } while (1);
		  $g();
		  K = c;
		  mk.current = d;
		  if (null !== Y) throw Error(p(261));
		  Q = null;
		  Z = 0;
		  return T;
		}
		function Tk() {
		  for (; null !== Y;) Uk(Y);
		}
		function Lk() {
		  for (; null !== Y && !cc();) Uk(Y);
		}
		function Uk(a) {
		  var b = Vk(a.alternate, a, fj);
		  a.memoizedProps = a.pendingProps;
		  null === b ? Sk(a) : Y = b;
		  nk.current = null;
		}
		function Sk(a) {
		  var b = a;
		  do {
		    var c = b.alternate;
		    a = b.return;
		    if (0 === (b.flags & 32768)) {
		      if (c = Ej(c, b, fj), null !== c) {
		        Y = c;
		        return;
		      }
		    } else {
		      c = Ij(c, b);
		      if (null !== c) {
		        c.flags &= 32767;
		        Y = c;
		        return;
		      }
		      if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;else {
		        T = 6;
		        Y = null;
		        return;
		      }
		    }
		    b = b.sibling;
		    if (null !== b) {
		      Y = b;
		      return;
		    }
		    Y = b = a;
		  } while (null !== b);
		  0 === T && (T = 5);
		}
		function Pk(a, b, c) {
		  var d = C,
		    e = ok.transition;
		  try {
		    ok.transition = null, C = 1, Wk(a, b, c, d);
		  } finally {
		    ok.transition = e, C = d;
		  }
		  return null;
		}
		function Wk(a, b, c, d) {
		  do Hk(); while (null !== wk);
		  if (0 !== (K & 6)) throw Error(p(327));
		  c = a.finishedWork;
		  var e = a.finishedLanes;
		  if (null === c) return null;
		  a.finishedWork = null;
		  a.finishedLanes = 0;
		  if (c === a.current) throw Error(p(177));
		  a.callbackNode = null;
		  a.callbackPriority = 0;
		  var f = c.lanes | c.childLanes;
		  Bc(a, f);
		  a === Q && (Y = Q = null, Z = 0);
		  0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = true, Fk(hc, function () {
		    Hk();
		    return null;
		  }));
		  f = 0 !== (c.flags & 15990);
		  if (0 !== (c.subtreeFlags & 15990) || f) {
		    f = ok.transition;
		    ok.transition = null;
		    var g = C;
		    C = 1;
		    var h = K;
		    K |= 4;
		    nk.current = null;
		    Oj(a, c);
		    dk(c, a);
		    Oe(Df);
		    dd = !!Cf;
		    Df = Cf = null;
		    a.current = c;
		    hk(c);
		    dc();
		    K = h;
		    C = g;
		    ok.transition = f;
		  } else a.current = c;
		  vk && (vk = false, wk = a, xk = e);
		  f = a.pendingLanes;
		  0 === f && (Ri = null);
		  mc(c.stateNode);
		  Dk(a, B());
		  if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, {
		    componentStack: e.stack,
		    digest: e.digest
		  });
		  if (Oi) throw Oi = false, a = Pi, Pi = null, a;
		  0 !== (xk & 1) && 0 !== a.tag && Hk();
		  f = a.pendingLanes;
		  0 !== (f & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
		  jg();
		  return null;
		}
		function Hk() {
		  if (null !== wk) {
		    var a = Dc(xk),
		      b = ok.transition,
		      c = C;
		    try {
		      ok.transition = null;
		      C = 16 > a ? 16 : a;
		      if (null === wk) var d = !1;else {
		        a = wk;
		        wk = null;
		        xk = 0;
		        if (0 !== (K & 6)) throw Error(p(331));
		        var e = K;
		        K |= 4;
		        for (V = a.current; null !== V;) {
		          var f = V,
		            g = f.child;
		          if (0 !== (V.flags & 16)) {
		            var h = f.deletions;
		            if (null !== h) {
		              for (var k = 0; k < h.length; k++) {
		                var l = h[k];
		                for (V = l; null !== V;) {
		                  var m = V;
		                  switch (m.tag) {
		                    case 0:
		                    case 11:
		                    case 15:
		                      Pj(8, m, f);
		                  }
		                  var q = m.child;
		                  if (null !== q) q.return = m, V = q;else for (; null !== V;) {
		                    m = V;
		                    var r = m.sibling,
		                      y = m.return;
		                    Sj(m);
		                    if (m === l) {
		                      V = null;
		                      break;
		                    }
		                    if (null !== r) {
		                      r.return = y;
		                      V = r;
		                      break;
		                    }
		                    V = y;
		                  }
		                }
		              }
		              var n = f.alternate;
		              if (null !== n) {
		                var t = n.child;
		                if (null !== t) {
		                  n.child = null;
		                  do {
		                    var J = t.sibling;
		                    t.sibling = null;
		                    t = J;
		                  } while (null !== t);
		                }
		              }
		              V = f;
		            }
		          }
		          if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, V = g;else b: for (; null !== V;) {
		            f = V;
		            if (0 !== (f.flags & 2048)) switch (f.tag) {
		              case 0:
		              case 11:
		              case 15:
		                Pj(9, f, f.return);
		            }
		            var x = f.sibling;
		            if (null !== x) {
		              x.return = f.return;
		              V = x;
		              break b;
		            }
		            V = f.return;
		          }
		        }
		        var w = a.current;
		        for (V = w; null !== V;) {
		          g = V;
		          var u = g.child;
		          if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V = u;else b: for (g = w; null !== V;) {
		            h = V;
		            if (0 !== (h.flags & 2048)) try {
		              switch (h.tag) {
		                case 0:
		                case 11:
		                case 15:
		                  Qj(9, h);
		              }
		            } catch (na) {
		              W(h, h.return, na);
		            }
		            if (h === g) {
		              V = null;
		              break b;
		            }
		            var F = h.sibling;
		            if (null !== F) {
		              F.return = h.return;
		              V = F;
		              break b;
		            }
		            V = h.return;
		          }
		        }
		        K = e;
		        jg();
		        if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
		          lc.onPostCommitFiberRoot(kc, a);
		        } catch (na) {}
		        d = !0;
		      }
		      return d;
		    } finally {
		      C = c, ok.transition = b;
		    }
		  }
		  return false;
		}
		function Xk(a, b, c) {
		  b = Ji(c, b);
		  b = Ni(a, b, 1);
		  a = nh(a, b, 1);
		  b = R();
		  null !== a && (Ac(a, 1, b), Dk(a, b));
		}
		function W(a, b, c) {
		  if (3 === a.tag) Xk(a, a, c);else for (; null !== b;) {
		    if (3 === b.tag) {
		      Xk(b, a, c);
		      break;
		    } else if (1 === b.tag) {
		      var d = b.stateNode;
		      if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
		        a = Ji(c, a);
		        a = Qi(b, a, 1);
		        b = nh(b, a, 1);
		        a = R();
		        null !== b && (Ac(b, 1, a), Dk(b, a));
		        break;
		      }
		    }
		    b = b.return;
		  }
		}
		function Ti(a, b, c) {
		  var d = a.pingCache;
		  null !== d && d.delete(b);
		  b = R();
		  a.pingedLanes |= a.suspendedLanes & c;
		  Q === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a, 0) : rk |= c);
		  Dk(a, b);
		}
		function Yk(a, b) {
		  0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
		  var c = R();
		  a = ih(a, b);
		  null !== a && (Ac(a, b, c), Dk(a, c));
		}
		function uj(a) {
		  var b = a.memoizedState,
		    c = 0;
		  null !== b && (c = b.retryLane);
		  Yk(a, c);
		}
		function bk(a, b) {
		  var c = 0;
		  switch (a.tag) {
		    case 13:
		      var d = a.stateNode;
		      var e = a.memoizedState;
		      null !== e && (c = e.retryLane);
		      break;
		    case 19:
		      d = a.stateNode;
		      break;
		    default:
		      throw Error(p(314));
		  }
		  null !== d && d.delete(b);
		  Yk(a, c);
		}
		var Vk;
		Vk = function (a, b, c) {
		  if (null !== a) {
		    if (a.memoizedProps !== b.pendingProps || Wf.current) dh = true;else {
		      if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return dh = false, yj(a, b, c);
		      dh = 0 !== (a.flags & 131072) ? true : false;
		    }
		  } else dh = false, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
		  b.lanes = 0;
		  switch (b.tag) {
		    case 2:
		      var d = b.type;
		      ij(a, b);
		      a = b.pendingProps;
		      var e = Yf(b, H.current);
		      ch(b, c);
		      e = Nh(null, b, d, a, e, c);
		      var f = Sh();
		      b.flags |= 1;
		      "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = true, cg(b)) : f = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b), e.updater = Ei, b.stateNode = e, e._reactInternals = b, Ii(b, d, a, c), b = jj(null, b, d, true, f, c)) : (b.tag = 0, I && f && vg(b), Xi(null, b, e, c), b = b.child);
		      return b;
		    case 16:
		      d = b.elementType;
		      a: {
		        ij(a, b);
		        a = b.pendingProps;
		        e = d._init;
		        d = e(d._payload);
		        b.type = d;
		        e = b.tag = Zk(d);
		        a = Ci(d, a);
		        switch (e) {
		          case 0:
		            b = cj(null, b, d, a, c);
		            break a;
		          case 1:
		            b = hj(null, b, d, a, c);
		            break a;
		          case 11:
		            b = Yi(null, b, d, a, c);
		            break a;
		          case 14:
		            b = $i(null, b, d, Ci(d.type, a), c);
		            break a;
		        }
		        throw Error(p(306, d, ""));
		      }
		      return b;
		    case 0:
		      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), cj(a, b, d, e, c);
		    case 1:
		      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), hj(a, b, d, e, c);
		    case 3:
		      a: {
		        kj(b);
		        if (null === a) throw Error(p(387));
		        d = b.pendingProps;
		        f = b.memoizedState;
		        e = f.element;
		        lh(a, b);
		        qh(b, d, null, c);
		        var g = b.memoizedState;
		        d = g.element;
		        if (f.isDehydrated) {
		          if (f = {
		            element: d,
		            isDehydrated: false,
		            cache: g.cache,
		            pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
		            transitions: g.transitions
		          }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
		            e = Ji(Error(p(423)), b);
		            b = lj(a, b, d, c, e);
		            break a;
		          } else if (d !== e) {
		            e = Ji(Error(p(424)), b);
		            b = lj(a, b, d, c, e);
		            break a;
		          } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = true, zg = null, c = Vg(b, null, d, c), b.child = c; c;) c.flags = c.flags & -3 | 4096, c = c.sibling;
		        } else {
		          Ig();
		          if (d === e) {
		            b = Zi(a, b, c);
		            break a;
		          }
		          Xi(a, b, d, c);
		        }
		        b = b.child;
		      }
		      return b;
		    case 5:
		      return Ah(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f && Ef(d, f) && (b.flags |= 32), gj(a, b), Xi(a, b, g, c), b.child;
		    case 6:
		      return null === a && Eg(b), null;
		    case 13:
		      return oj(a, b, c);
		    case 4:
		      return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Ug(b, null, d, c) : Xi(a, b, d, c), b.child;
		    case 11:
		      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), Yi(a, b, d, e, c);
		    case 7:
		      return Xi(a, b, b.pendingProps, c), b.child;
		    case 8:
		      return Xi(a, b, b.pendingProps.children, c), b.child;
		    case 12:
		      return Xi(a, b, b.pendingProps.children, c), b.child;
		    case 10:
		      a: {
		        d = b.type._context;
		        e = b.pendingProps;
		        f = b.memoizedProps;
		        g = e.value;
		        G(Wg, d._currentValue);
		        d._currentValue = g;
		        if (null !== f) if (He(f.value, g)) {
		          if (f.children === e.children && !Wf.current) {
		            b = Zi(a, b, c);
		            break a;
		          }
		        } else for (f = b.child, null !== f && (f.return = b); null !== f;) {
		          var h = f.dependencies;
		          if (null !== h) {
		            g = f.child;
		            for (var k = h.firstContext; null !== k;) {
		              if (k.context === d) {
		                if (1 === f.tag) {
		                  k = mh(-1, c & -c);
		                  k.tag = 2;
		                  var l = f.updateQueue;
		                  if (null !== l) {
		                    l = l.shared;
		                    var m = l.pending;
		                    null === m ? k.next = k : (k.next = m.next, m.next = k);
		                    l.pending = k;
		                  }
		                }
		                f.lanes |= c;
		                k = f.alternate;
		                null !== k && (k.lanes |= c);
		                bh(f.return, c, b);
		                h.lanes |= c;
		                break;
		              }
		              k = k.next;
		            }
		          } else if (10 === f.tag) g = f.type === b.type ? null : f.child;else if (18 === f.tag) {
		            g = f.return;
		            if (null === g) throw Error(p(341));
		            g.lanes |= c;
		            h = g.alternate;
		            null !== h && (h.lanes |= c);
		            bh(g, c, b);
		            g = f.sibling;
		          } else g = f.child;
		          if (null !== g) g.return = f;else for (g = f; null !== g;) {
		            if (g === b) {
		              g = null;
		              break;
		            }
		            f = g.sibling;
		            if (null !== f) {
		              f.return = g.return;
		              g = f;
		              break;
		            }
		            g = g.return;
		          }
		          f = g;
		        }
		        Xi(a, b, e.children, c);
		        b = b.child;
		      }
		      return b;
		    case 9:
		      return e = b.type, d = b.pendingProps.children, ch(b, c), e = eh(e), d = d(e), b.flags |= 1, Xi(a, b, d, c), b.child;
		    case 14:
		      return d = b.type, e = Ci(d, b.pendingProps), e = Ci(d.type, e), $i(a, b, d, e, c);
		    case 15:
		      return bj(a, b, b.type, b.pendingProps, c);
		    case 17:
		      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), ij(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, ch(b, c), Gi(b, d, e), Ii(b, d, e, c), jj(null, b, d, true, a, c);
		    case 19:
		      return xj(a, b, c);
		    case 22:
		      return dj(a, b, c);
		  }
		  throw Error(p(156, b.tag));
		};
		function Fk(a, b) {
		  return ac(a, b);
		}
		function $k(a, b, c, d) {
		  this.tag = a;
		  this.key = c;
		  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
		  this.index = 0;
		  this.ref = null;
		  this.pendingProps = b;
		  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
		  this.mode = d;
		  this.subtreeFlags = this.flags = 0;
		  this.deletions = null;
		  this.childLanes = this.lanes = 0;
		  this.alternate = null;
		}
		function Bg(a, b, c, d) {
		  return new $k(a, b, c, d);
		}
		function aj(a) {
		  a = a.prototype;
		  return !(!a || !a.isReactComponent);
		}
		function Zk(a) {
		  if ("function" === typeof a) return aj(a) ? 1 : 0;
		  if (void 0 !== a && null !== a) {
		    a = a.$$typeof;
		    if (a === Da) return 11;
		    if (a === Ga) return 14;
		  }
		  return 2;
		}
		function Pg(a, b) {
		  var c = a.alternate;
		  null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
		  c.flags = a.flags & 14680064;
		  c.childLanes = a.childLanes;
		  c.lanes = a.lanes;
		  c.child = a.child;
		  c.memoizedProps = a.memoizedProps;
		  c.memoizedState = a.memoizedState;
		  c.updateQueue = a.updateQueue;
		  b = a.dependencies;
		  c.dependencies = null === b ? null : {
		    lanes: b.lanes,
		    firstContext: b.firstContext
		  };
		  c.sibling = a.sibling;
		  c.index = a.index;
		  c.ref = a.ref;
		  return c;
		}
		function Rg(a, b, c, d, e, f) {
		  var g = 2;
		  d = a;
		  if ("function" === typeof a) aj(a) && (g = 1);else if ("string" === typeof a) g = 5;else a: switch (a) {
		    case ya:
		      return Tg(c.children, e, f, b);
		    case za:
		      g = 8;
		      e |= 8;
		      break;
		    case Aa:
		      return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f, a;
		    case Ea:
		      return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f, a;
		    case Fa:
		      return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f, a;
		    case Ia:
		      return pj(c, e, f, b);
		    default:
		      if ("object" === typeof a && null !== a) switch (a.$$typeof) {
		        case Ba:
		          g = 10;
		          break a;
		        case Ca:
		          g = 9;
		          break a;
		        case Da:
		          g = 11;
		          break a;
		        case Ga:
		          g = 14;
		          break a;
		        case Ha:
		          g = 16;
		          d = null;
		          break a;
		      }
		      throw Error(p(130, null == a ? a : typeof a, ""));
		  }
		  b = Bg(g, c, b, e);
		  b.elementType = a;
		  b.type = d;
		  b.lanes = f;
		  return b;
		}
		function Tg(a, b, c, d) {
		  a = Bg(7, a, d, b);
		  a.lanes = c;
		  return a;
		}
		function pj(a, b, c, d) {
		  a = Bg(22, a, d, b);
		  a.elementType = Ia;
		  a.lanes = c;
		  a.stateNode = {
		    isHidden: false
		  };
		  return a;
		}
		function Qg(a, b, c) {
		  a = Bg(6, a, null, b);
		  a.lanes = c;
		  return a;
		}
		function Sg(a, b, c) {
		  b = Bg(4, null !== a.children ? a.children : [], a.key, b);
		  b.lanes = c;
		  b.stateNode = {
		    containerInfo: a.containerInfo,
		    pendingChildren: null,
		    implementation: a.implementation
		  };
		  return b;
		}
		function al(a, b, c, d, e) {
		  this.tag = b;
		  this.containerInfo = a;
		  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
		  this.timeoutHandle = -1;
		  this.callbackNode = this.pendingContext = this.context = null;
		  this.callbackPriority = 0;
		  this.eventTimes = zc(0);
		  this.expirationTimes = zc(-1);
		  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
		  this.entanglements = zc(0);
		  this.identifierPrefix = d;
		  this.onRecoverableError = e;
		  this.mutableSourceEagerHydrationData = null;
		}
		function bl(a, b, c, d, e, f, g, h, k) {
		  a = new al(a, b, c, h, k);
		  1 === b ? (b = 1, true === f && (b |= 8)) : b = 0;
		  f = Bg(3, null, null, b);
		  a.current = f;
		  f.stateNode = a;
		  f.memoizedState = {
		    element: d,
		    isDehydrated: c,
		    cache: null,
		    transitions: null,
		    pendingSuspenseBoundaries: null
		  };
		  kh(f);
		  return a;
		}
		function cl(a, b, c) {
		  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
		  return {
		    $$typeof: wa,
		    key: null == d ? null : "" + d,
		    children: a,
		    containerInfo: b,
		    implementation: c
		  };
		}
		function dl(a) {
		  if (!a) return Vf;
		  a = a._reactInternals;
		  a: {
		    if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
		    var b = a;
		    do {
		      switch (b.tag) {
		        case 3:
		          b = b.stateNode.context;
		          break a;
		        case 1:
		          if (Zf(b.type)) {
		            b = b.stateNode.__reactInternalMemoizedMergedChildContext;
		            break a;
		          }
		      }
		      b = b.return;
		    } while (null !== b);
		    throw Error(p(171));
		  }
		  if (1 === a.tag) {
		    var c = a.type;
		    if (Zf(c)) return bg(a, c, b);
		  }
		  return b;
		}
		function el(a, b, c, d, e, f, g, h, k) {
		  a = bl(c, d, true, a, e, f, g, h, k);
		  a.context = dl(null);
		  c = a.current;
		  d = R();
		  e = yi(c);
		  f = mh(d, e);
		  f.callback = void 0 !== b && null !== b ? b : null;
		  nh(c, f, e);
		  a.current.lanes = e;
		  Ac(a, e, d);
		  Dk(a, d);
		  return a;
		}
		function fl(a, b, c, d) {
		  var e = b.current,
		    f = R(),
		    g = yi(e);
		  c = dl(c);
		  null === b.context ? b.context = c : b.pendingContext = c;
		  b = mh(f, g);
		  b.payload = {
		    element: a
		  };
		  d = void 0 === d ? null : d;
		  null !== d && (b.callback = d);
		  a = nh(e, b, g);
		  null !== a && (gi(a, e, g, f), oh(a, e, g));
		  return g;
		}
		function gl(a) {
		  a = a.current;
		  if (!a.child) return null;
		  switch (a.child.tag) {
		    case 5:
		      return a.child.stateNode;
		    default:
		      return a.child.stateNode;
		  }
		}
		function hl(a, b) {
		  a = a.memoizedState;
		  if (null !== a && null !== a.dehydrated) {
		    var c = a.retryLane;
		    a.retryLane = 0 !== c && c < b ? c : b;
		  }
		}
		function il(a, b) {
		  hl(a, b);
		  (a = a.alternate) && hl(a, b);
		}
		function jl() {
		  return null;
		}
		var kl = "function" === typeof reportError ? reportError : function (a) {
		  console.error(a);
		};
		function ll(a) {
		  this._internalRoot = a;
		}
		ml.prototype.render = ll.prototype.render = function (a) {
		  var b = this._internalRoot;
		  if (null === b) throw Error(p(409));
		  fl(a, b, null, null);
		};
		ml.prototype.unmount = ll.prototype.unmount = function () {
		  var a = this._internalRoot;
		  if (null !== a) {
		    this._internalRoot = null;
		    var b = a.containerInfo;
		    Rk(function () {
		      fl(null, a, null, null);
		    });
		    b[uf] = null;
		  }
		};
		function ml(a) {
		  this._internalRoot = a;
		}
		ml.prototype.unstable_scheduleHydration = function (a) {
		  if (a) {
		    var b = Hc();
		    a = {
		      blockedOn: null,
		      target: a,
		      priority: b
		    };
		    for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++);
		    Qc.splice(c, 0, a);
		    0 === c && Vc(a);
		  }
		};
		function nl(a) {
		  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
		}
		function ol(a) {
		  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
		}
		function pl() {}
		function ql(a, b, c, d, e) {
		  if (e) {
		    if ("function" === typeof d) {
		      var f = d;
		      d = function () {
		        var a = gl(g);
		        f.call(a);
		      };
		    }
		    var g = el(b, d, a, 0, null, false, false, "", pl);
		    a._reactRootContainer = g;
		    a[uf] = g.current;
		    sf(8 === a.nodeType ? a.parentNode : a);
		    Rk();
		    return g;
		  }
		  for (; e = a.lastChild;) a.removeChild(e);
		  if ("function" === typeof d) {
		    var h = d;
		    d = function () {
		      var a = gl(k);
		      h.call(a);
		    };
		  }
		  var k = bl(a, 0, false, null, null, false, false, "", pl);
		  a._reactRootContainer = k;
		  a[uf] = k.current;
		  sf(8 === a.nodeType ? a.parentNode : a);
		  Rk(function () {
		    fl(b, k, c, d);
		  });
		  return k;
		}
		function rl(a, b, c, d, e) {
		  var f = c._reactRootContainer;
		  if (f) {
		    var g = f;
		    if ("function" === typeof e) {
		      var h = e;
		      e = function () {
		        var a = gl(g);
		        h.call(a);
		      };
		    }
		    fl(b, g, a, e);
		  } else g = ql(c, b, a, e, d);
		  return gl(g);
		}
		Ec = function (a) {
		  switch (a.tag) {
		    case 3:
		      var b = a.stateNode;
		      if (b.current.memoizedState.isDehydrated) {
		        var c = tc(b.pendingLanes);
		        0 !== c && (Cc(b, c | 1), Dk(b, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
		      }
		      break;
		    case 13:
		      Rk(function () {
		        var b = ih(a, 1);
		        if (null !== b) {
		          var c = R();
		          gi(b, a, 1, c);
		        }
		      }), il(a, 1);
		  }
		};
		Fc = function (a) {
		  if (13 === a.tag) {
		    var b = ih(a, 134217728);
		    if (null !== b) {
		      var c = R();
		      gi(b, a, 134217728, c);
		    }
		    il(a, 134217728);
		  }
		};
		Gc = function (a) {
		  if (13 === a.tag) {
		    var b = yi(a),
		      c = ih(a, b);
		    if (null !== c) {
		      var d = R();
		      gi(c, a, b, d);
		    }
		    il(a, b);
		  }
		};
		Hc = function () {
		  return C;
		};
		Ic = function (a, b) {
		  var c = C;
		  try {
		    return C = a, b();
		  } finally {
		    C = c;
		  }
		};
		yb = function (a, b, c) {
		  switch (b) {
		    case "input":
		      bb(a, c);
		      b = c.name;
		      if ("radio" === c.type && null != b) {
		        for (c = a; c.parentNode;) c = c.parentNode;
		        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
		        for (b = 0; b < c.length; b++) {
		          var d = c[b];
		          if (d !== a && d.form === a.form) {
		            var e = Db(d);
		            if (!e) throw Error(p(90));
		            Wa(d);
		            bb(d, e);
		          }
		        }
		      }
		      break;
		    case "textarea":
		      ib(a, c);
		      break;
		    case "select":
		      b = c.value, null != b && fb(a, !!c.multiple, b, false);
		  }
		};
		Gb = Qk;
		Hb = Rk;
		var sl = {
		    usingClientEntryPoint: false,
		    Events: [Cb, ue, Db, Eb, Fb, Qk]
		  },
		  tl = {
		    findFiberByHostInstance: Wc,
		    bundleType: 0,
		    version: "18.3.1",
		    rendererPackageName: "react-dom"
		  };
		var ul = {
		  bundleType: tl.bundleType,
		  version: tl.version,
		  rendererPackageName: tl.rendererPackageName,
		  rendererConfig: tl.rendererConfig,
		  overrideHookState: null,
		  overrideHookStateDeletePath: null,
		  overrideHookStateRenamePath: null,
		  overrideProps: null,
		  overridePropsDeletePath: null,
		  overridePropsRenamePath: null,
		  setErrorHandler: null,
		  setSuspenseHandler: null,
		  scheduleUpdate: null,
		  currentDispatcherRef: ua.ReactCurrentDispatcher,
		  findHostInstanceByFiber: function (a) {
		    a = Zb(a);
		    return null === a ? null : a.stateNode;
		  },
		  findFiberByHostInstance: tl.findFiberByHostInstance || jl,
		  findHostInstancesForRefresh: null,
		  scheduleRefresh: null,
		  scheduleRoot: null,
		  setRefreshHandler: null,
		  getCurrentFiber: null,
		  reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
		};
		if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
		  var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		  if (!vl.isDisabled && vl.supportsFiber) try {
		    kc = vl.inject(ul), lc = vl;
		  } catch (a) {}
		}
		reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
		reactDom_production_min.createPortal = function (a, b) {
		  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
		  if (!nl(b)) throw Error(p(200));
		  return cl(a, b, null, c);
		};
		reactDom_production_min.createRoot = function (a, b) {
		  if (!nl(a)) throw Error(p(299));
		  var c = false,
		    d = "",
		    e = kl;
		  null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
		  b = bl(a, 1, false, null, null, c, false, d, e);
		  a[uf] = b.current;
		  sf(8 === a.nodeType ? a.parentNode : a);
		  return new ll(b);
		};
		reactDom_production_min.findDOMNode = function (a) {
		  if (null == a) return null;
		  if (1 === a.nodeType) return a;
		  var b = a._reactInternals;
		  if (void 0 === b) {
		    if ("function" === typeof a.render) throw Error(p(188));
		    a = Object.keys(a).join(",");
		    throw Error(p(268, a));
		  }
		  a = Zb(b);
		  a = null === a ? null : a.stateNode;
		  return a;
		};
		reactDom_production_min.flushSync = function (a) {
		  return Rk(a);
		};
		reactDom_production_min.hydrate = function (a, b, c) {
		  if (!ol(b)) throw Error(p(200));
		  return rl(null, a, b, true, c);
		};
		reactDom_production_min.hydrateRoot = function (a, b, c) {
		  if (!nl(a)) throw Error(p(405));
		  var d = null != c && c.hydratedSources || null,
		    e = false,
		    f = "",
		    g = kl;
		  null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
		  b = el(b, null, a, 1, null != c ? c : null, e, false, f, g);
		  a[uf] = b.current;
		  sf(a);
		  if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(c, e);
		  return new ml(b);
		};
		reactDom_production_min.render = function (a, b, c) {
		  if (!ol(b)) throw Error(p(200));
		  return rl(null, a, b, false, c);
		};
		reactDom_production_min.unmountComponentAtNode = function (a) {
		  if (!ol(a)) throw Error(p(40));
		  return a._reactRootContainer ? (Rk(function () {
		    rl(null, null, a, !1, function () {
		      a._reactRootContainer = null;
		      a[uf] = null;
		    });
		  }), true) : false;
		};
		reactDom_production_min.unstable_batchedUpdates = Qk;
		reactDom_production_min.unstable_renderSubtreeIntoContainer = function (a, b, c, d) {
		  if (!ol(c)) throw Error(p(200));
		  if (null == a || void 0 === a._reactInternals) throw Error(p(38));
		  return rl(a, b, c, false, d);
		};
		reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426";
		return reactDom_production_min;
	}

	var hasRequiredReactDom;

	function requireReactDom () {
		if (hasRequiredReactDom) return reactDom.exports;
		hasRequiredReactDom = 1;

		function checkDCE() {
		  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
		  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') {
		    return;
		  }
		  try {
		    // Verify that the code above has been dead code eliminated (DCE'd).
		    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
		  } catch (err) {
		    // DevTools shouldn't crash React, no matter what.
		    // We should still report in case we break this code.
		    console.error(err);
		  }
		}
		{
		  // DCE check should happen before ReactDOM bundle executes so that
		  // DevTools can report bad minification during injection.
		  checkDCE();
		  reactDom.exports = requireReactDom_production_min();
		}
		return reactDom.exports;
	}

	var hasRequiredClient;

	function requireClient () {
		if (hasRequiredClient) return client;
		hasRequiredClient = 1;

		var m = requireReactDom();
		{
		  client.createRoot = m.createRoot;
		  client.hydrateRoot = m.hydrateRoot;
		}
		return client;
	}

	var clientExports = requireClient();
	var ReactDOM$1 = /*@__PURE__*/getDefaultExportFromCjs(clientExports);

	// src/utils/env.ts
	var NOTHING = Symbol.for("immer-nothing");
	var DRAFTABLE = Symbol.for("immer-draftable");
	var DRAFT_STATE = Symbol.for("immer-state");
	function die(error, ...args) {
	  throw new Error(
	    `[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`
	  );
	}

	// src/utils/common.ts
	var getPrototypeOf = Object.getPrototypeOf;
	function isDraft(value) {
	  return !!value && !!value[DRAFT_STATE];
	}
	function isDraftable(value) {
	  if (!value)
	    return false;
	  return isPlainObject(value) || Array.isArray(value) || !!value[DRAFTABLE] || !!value.constructor?.[DRAFTABLE] || isMap(value) || isSet(value);
	}
	var objectCtorString = Object.prototype.constructor.toString();
	function isPlainObject(value) {
	  if (!value || typeof value !== "object")
	    return false;
	  const proto = getPrototypeOf(value);
	  if (proto === null) {
	    return true;
	  }
	  const Ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
	  if (Ctor === Object)
	    return true;
	  return typeof Ctor == "function" && Function.toString.call(Ctor) === objectCtorString;
	}
	function each(obj, iter) {
	  if (getArchtype(obj) === 0 /* Object */) {
	    Reflect.ownKeys(obj).forEach((key) => {
	      iter(key, obj[key], obj);
	    });
	  } else {
	    obj.forEach((entry, index) => iter(index, entry, obj));
	  }
	}
	function getArchtype(thing) {
	  const state = thing[DRAFT_STATE];
	  return state ? state.type_ : Array.isArray(thing) ? 1 /* Array */ : isMap(thing) ? 2 /* Map */ : isSet(thing) ? 3 /* Set */ : 0 /* Object */;
	}
	function has(thing, prop) {
	  return getArchtype(thing) === 2 /* Map */ ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
	}
	function set(thing, propOrOldValue, value) {
	  const t = getArchtype(thing);
	  if (t === 2 /* Map */)
	    thing.set(propOrOldValue, value);
	  else if (t === 3 /* Set */) {
	    thing.add(value);
	  } else
	    thing[propOrOldValue] = value;
	}
	function is(x, y) {
	  if (x === y) {
	    return x !== 0 || 1 / x === 1 / y;
	  } else {
	    return x !== x && y !== y;
	  }
	}
	function isMap(target) {
	  return target instanceof Map;
	}
	function isSet(target) {
	  return target instanceof Set;
	}
	function latest(state) {
	  return state.copy_ || state.base_;
	}
	function shallowCopy(base, strict) {
	  if (isMap(base)) {
	    return new Map(base);
	  }
	  if (isSet(base)) {
	    return new Set(base);
	  }
	  if (Array.isArray(base))
	    return Array.prototype.slice.call(base);
	  const isPlain = isPlainObject(base);
	  if (strict === true || strict === "class_only" && !isPlain) {
	    const descriptors = Object.getOwnPropertyDescriptors(base);
	    delete descriptors[DRAFT_STATE];
	    let keys = Reflect.ownKeys(descriptors);
	    for (let i = 0; i < keys.length; i++) {
	      const key = keys[i];
	      const desc = descriptors[key];
	      if (desc.writable === false) {
	        desc.writable = true;
	        desc.configurable = true;
	      }
	      if (desc.get || desc.set)
	        descriptors[key] = {
	          configurable: true,
	          writable: true,
	          // could live with !!desc.set as well here...
	          enumerable: desc.enumerable,
	          value: base[key]
	        };
	    }
	    return Object.create(getPrototypeOf(base), descriptors);
	  } else {
	    const proto = getPrototypeOf(base);
	    if (proto !== null && isPlain) {
	      return { ...base };
	    }
	    const obj = Object.create(proto);
	    return Object.assign(obj, base);
	  }
	}
	function freeze(obj, deep = false) {
	  if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj))
	    return obj;
	  if (getArchtype(obj) > 1) {
	    obj.set = obj.add = obj.clear = obj.delete = dontMutateFrozenCollections;
	  }
	  Object.freeze(obj);
	  if (deep)
	    Object.entries(obj).forEach(([key, value]) => freeze(value, true));
	  return obj;
	}
	function dontMutateFrozenCollections() {
	  die(2);
	}
	function isFrozen(obj) {
	  return Object.isFrozen(obj);
	}

	// src/utils/plugins.ts
	var plugins = {};
	function getPlugin(pluginKey) {
	  const plugin = plugins[pluginKey];
	  if (!plugin) {
	    die(0, pluginKey);
	  }
	  return plugin;
	}

	// src/core/scope.ts
	var currentScope;
	function getCurrentScope() {
	  return currentScope;
	}
	function createScope(parent_, immer_) {
	  return {
	    drafts_: [],
	    parent_,
	    immer_,
	    // Whenever the modified draft contains a draft from another scope, we
	    // need to prevent auto-freezing so the unowned draft can be finalized.
	    canAutoFreeze_: true,
	    unfinalizedDrafts_: 0
	  };
	}
	function usePatchesInScope(scope, patchListener) {
	  if (patchListener) {
	    getPlugin("Patches");
	    scope.patches_ = [];
	    scope.inversePatches_ = [];
	    scope.patchListener_ = patchListener;
	  }
	}
	function revokeScope(scope) {
	  leaveScope(scope);
	  scope.drafts_.forEach(revokeDraft);
	  scope.drafts_ = null;
	}
	function leaveScope(scope) {
	  if (scope === currentScope) {
	    currentScope = scope.parent_;
	  }
	}
	function enterScope(immer2) {
	  return currentScope = createScope(currentScope, immer2);
	}
	function revokeDraft(draft) {
	  const state = draft[DRAFT_STATE];
	  if (state.type_ === 0 /* Object */ || state.type_ === 1 /* Array */)
	    state.revoke_();
	  else
	    state.revoked_ = true;
	}

	// src/core/finalize.ts
	function processResult(result, scope) {
	  scope.unfinalizedDrafts_ = scope.drafts_.length;
	  const baseDraft = scope.drafts_[0];
	  const isReplaced = result !== void 0 && result !== baseDraft;
	  if (isReplaced) {
	    if (baseDraft[DRAFT_STATE].modified_) {
	      revokeScope(scope);
	      die(4);
	    }
	    if (isDraftable(result)) {
	      result = finalize(scope, result);
	      if (!scope.parent_)
	        maybeFreeze(scope, result);
	    }
	    if (scope.patches_) {
	      getPlugin("Patches").generateReplacementPatches_(
	        baseDraft[DRAFT_STATE].base_,
	        result,
	        scope.patches_,
	        scope.inversePatches_
	      );
	    }
	  } else {
	    result = finalize(scope, baseDraft, []);
	  }
	  revokeScope(scope);
	  if (scope.patches_) {
	    scope.patchListener_(scope.patches_, scope.inversePatches_);
	  }
	  return result !== NOTHING ? result : void 0;
	}
	function finalize(rootScope, value, path) {
	  if (isFrozen(value))
	    return value;
	  const state = value[DRAFT_STATE];
	  if (!state) {
	    each(
	      value,
	      (key, childValue) => finalizeProperty(rootScope, state, value, key, childValue, path)
	    );
	    return value;
	  }
	  if (state.scope_ !== rootScope)
	    return value;
	  if (!state.modified_) {
	    maybeFreeze(rootScope, state.base_, true);
	    return state.base_;
	  }
	  if (!state.finalized_) {
	    state.finalized_ = true;
	    state.scope_.unfinalizedDrafts_--;
	    const result = state.copy_;
	    let resultEach = result;
	    let isSet2 = false;
	    if (state.type_ === 3 /* Set */) {
	      resultEach = new Set(result);
	      result.clear();
	      isSet2 = true;
	    }
	    each(
	      resultEach,
	      (key, childValue) => finalizeProperty(rootScope, state, result, key, childValue, path, isSet2)
	    );
	    maybeFreeze(rootScope, result, false);
	    if (path && rootScope.patches_) {
	      getPlugin("Patches").generatePatches_(
	        state,
	        path,
	        rootScope.patches_,
	        rootScope.inversePatches_
	      );
	    }
	  }
	  return state.copy_;
	}
	function finalizeProperty(rootScope, parentState, targetObject, prop, childValue, rootPath, targetIsSet) {
	  if (isDraft(childValue)) {
	    const path = rootPath && parentState && parentState.type_ !== 3 /* Set */ && // Set objects are atomic since they have no keys.
	    !has(parentState.assigned_, prop) ? rootPath.concat(prop) : void 0;
	    const res = finalize(rootScope, childValue, path);
	    set(targetObject, prop, res);
	    if (isDraft(res)) {
	      rootScope.canAutoFreeze_ = false;
	    } else
	      return;
	  } else if (targetIsSet) {
	    targetObject.add(childValue);
	  }
	  if (isDraftable(childValue) && !isFrozen(childValue)) {
	    if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
	      return;
	    }
	    finalize(rootScope, childValue);
	    if ((!parentState || !parentState.scope_.parent_) && typeof prop !== "symbol" && Object.prototype.propertyIsEnumerable.call(targetObject, prop))
	      maybeFreeze(rootScope, childValue);
	  }
	}
	function maybeFreeze(scope, value, deep = false) {
	  if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
	    freeze(value, deep);
	  }
	}

	// src/core/proxy.ts
	function createProxyProxy(base, parent) {
	  const isArray = Array.isArray(base);
	  const state = {
	    type_: isArray ? 1 /* Array */ : 0 /* Object */,
	    // Track which produce call this is associated with.
	    scope_: parent ? parent.scope_ : getCurrentScope(),
	    // True for both shallow and deep changes.
	    modified_: false,
	    // Used during finalization.
	    finalized_: false,
	    // Track which properties have been assigned (true) or deleted (false).
	    assigned_: {},
	    // The parent draft state.
	    parent_: parent,
	    // The base state.
	    base_: base,
	    // The base proxy.
	    draft_: null,
	    // set below
	    // The base copy with any updated values.
	    copy_: null,
	    // Called by the `produce` function.
	    revoke_: null,
	    isManual_: false
	  };
	  let target = state;
	  let traps = objectTraps;
	  if (isArray) {
	    target = [state];
	    traps = arrayTraps;
	  }
	  const { revoke, proxy } = Proxy.revocable(target, traps);
	  state.draft_ = proxy;
	  state.revoke_ = revoke;
	  return proxy;
	}
	var objectTraps = {
	  get(state, prop) {
	    if (prop === DRAFT_STATE)
	      return state;
	    const source = latest(state);
	    if (!has(source, prop)) {
	      return readPropFromProto(state, source, prop);
	    }
	    const value = source[prop];
	    if (state.finalized_ || !isDraftable(value)) {
	      return value;
	    }
	    if (value === peek(state.base_, prop)) {
	      prepareCopy(state);
	      return state.copy_[prop] = createProxy(value, state);
	    }
	    return value;
	  },
	  has(state, prop) {
	    return prop in latest(state);
	  },
	  ownKeys(state) {
	    return Reflect.ownKeys(latest(state));
	  },
	  set(state, prop, value) {
	    const desc = getDescriptorFromProto(latest(state), prop);
	    if (desc?.set) {
	      desc.set.call(state.draft_, value);
	      return true;
	    }
	    if (!state.modified_) {
	      const current2 = peek(latest(state), prop);
	      const currentState = current2?.[DRAFT_STATE];
	      if (currentState && currentState.base_ === value) {
	        state.copy_[prop] = value;
	        state.assigned_[prop] = false;
	        return true;
	      }
	      if (is(value, current2) && (value !== void 0 || has(state.base_, prop)))
	        return true;
	      prepareCopy(state);
	      markChanged(state);
	    }
	    if (state.copy_[prop] === value && // special case: handle new props with value 'undefined'
	    (value !== void 0 || prop in state.copy_) || // special case: NaN
	    Number.isNaN(value) && Number.isNaN(state.copy_[prop]))
	      return true;
	    state.copy_[prop] = value;
	    state.assigned_[prop] = true;
	    return true;
	  },
	  deleteProperty(state, prop) {
	    if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
	      state.assigned_[prop] = false;
	      prepareCopy(state);
	      markChanged(state);
	    } else {
	      delete state.assigned_[prop];
	    }
	    if (state.copy_) {
	      delete state.copy_[prop];
	    }
	    return true;
	  },
	  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
	  // the same guarantee in ES5 mode.
	  getOwnPropertyDescriptor(state, prop) {
	    const owner = latest(state);
	    const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
	    if (!desc)
	      return desc;
	    return {
	      writable: true,
	      configurable: state.type_ !== 1 /* Array */ || prop !== "length",
	      enumerable: desc.enumerable,
	      value: owner[prop]
	    };
	  },
	  defineProperty() {
	    die(11);
	  },
	  getPrototypeOf(state) {
	    return getPrototypeOf(state.base_);
	  },
	  setPrototypeOf() {
	    die(12);
	  }
	};
	var arrayTraps = {};
	each(objectTraps, (key, fn) => {
	  arrayTraps[key] = function() {
	    arguments[0] = arguments[0][0];
	    return fn.apply(this, arguments);
	  };
	});
	arrayTraps.deleteProperty = function(state, prop) {
	  return arrayTraps.set.call(this, state, prop, void 0);
	};
	arrayTraps.set = function(state, prop, value) {
	  return objectTraps.set.call(this, state[0], prop, value, state[0]);
	};
	function peek(draft, prop) {
	  const state = draft[DRAFT_STATE];
	  const source = state ? latest(state) : draft;
	  return source[prop];
	}
	function readPropFromProto(state, source, prop) {
	  const desc = getDescriptorFromProto(source, prop);
	  return desc ? `value` in desc ? desc.value : (
	    // This is a very special case, if the prop is a getter defined by the
	    // prototype, we should invoke it with the draft as context!
	    desc.get?.call(state.draft_)
	  ) : void 0;
	}
	function getDescriptorFromProto(source, prop) {
	  if (!(prop in source))
	    return void 0;
	  let proto = getPrototypeOf(source);
	  while (proto) {
	    const desc = Object.getOwnPropertyDescriptor(proto, prop);
	    if (desc)
	      return desc;
	    proto = getPrototypeOf(proto);
	  }
	  return void 0;
	}
	function markChanged(state) {
	  if (!state.modified_) {
	    state.modified_ = true;
	    if (state.parent_) {
	      markChanged(state.parent_);
	    }
	  }
	}
	function prepareCopy(state) {
	  if (!state.copy_) {
	    state.copy_ = shallowCopy(
	      state.base_,
	      state.scope_.immer_.useStrictShallowCopy_
	    );
	  }
	}

	// src/core/immerClass.ts
	var Immer2 = class {
	  constructor(config) {
	    this.autoFreeze_ = true;
	    this.useStrictShallowCopy_ = false;
	    /**
	     * The `produce` function takes a value and a "recipe function" (whose
	     * return value often depends on the base state). The recipe function is
	     * free to mutate its first argument however it wants. All mutations are
	     * only ever applied to a __copy__ of the base state.
	     *
	     * Pass only a function to create a "curried producer" which relieves you
	     * from passing the recipe function every time.
	     *
	     * Only plain objects and arrays are made mutable. All other objects are
	     * considered uncopyable.
	     *
	     * Note: This function is __bound__ to its `Immer` instance.
	     *
	     * @param {any} base - the initial state
	     * @param {Function} recipe - function that receives a proxy of the base state as first argument and which can be freely modified
	     * @param {Function} patchListener - optional function that will be called with all the patches produced here
	     * @returns {any} a new state, or the initial state if nothing was modified
	     */
	    this.produce = (base, recipe, patchListener) => {
	      if (typeof base === "function" && typeof recipe !== "function") {
	        const defaultBase = recipe;
	        recipe = base;
	        const self = this;
	        return function curriedProduce(base2 = defaultBase, ...args) {
	          return self.produce(base2, (draft) => recipe.call(this, draft, ...args));
	        };
	      }
	      if (typeof recipe !== "function")
	        die(6);
	      if (patchListener !== void 0 && typeof patchListener !== "function")
	        die(7);
	      let result;
	      if (isDraftable(base)) {
	        const scope = enterScope(this);
	        const proxy = createProxy(base, void 0);
	        let hasError = true;
	        try {
	          result = recipe(proxy);
	          hasError = false;
	        } finally {
	          if (hasError)
	            revokeScope(scope);
	          else
	            leaveScope(scope);
	        }
	        usePatchesInScope(scope, patchListener);
	        return processResult(result, scope);
	      } else if (!base || typeof base !== "object") {
	        result = recipe(base);
	        if (result === void 0)
	          result = base;
	        if (result === NOTHING)
	          result = void 0;
	        if (this.autoFreeze_)
	          freeze(result, true);
	        if (patchListener) {
	          const p = [];
	          const ip = [];
	          getPlugin("Patches").generateReplacementPatches_(base, result, p, ip);
	          patchListener(p, ip);
	        }
	        return result;
	      } else
	        die(1, base);
	    };
	    this.produceWithPatches = (base, recipe) => {
	      if (typeof base === "function") {
	        return (state, ...args) => this.produceWithPatches(state, (draft) => base(draft, ...args));
	      }
	      let patches, inversePatches;
	      const result = this.produce(base, recipe, (p, ip) => {
	        patches = p;
	        inversePatches = ip;
	      });
	      return [result, patches, inversePatches];
	    };
	    if (typeof config?.autoFreeze === "boolean")
	      this.setAutoFreeze(config.autoFreeze);
	    if (typeof config?.useStrictShallowCopy === "boolean")
	      this.setUseStrictShallowCopy(config.useStrictShallowCopy);
	  }
	  createDraft(base) {
	    if (!isDraftable(base))
	      die(8);
	    if (isDraft(base))
	      base = current(base);
	    const scope = enterScope(this);
	    const proxy = createProxy(base, void 0);
	    proxy[DRAFT_STATE].isManual_ = true;
	    leaveScope(scope);
	    return proxy;
	  }
	  finishDraft(draft, patchListener) {
	    const state = draft && draft[DRAFT_STATE];
	    if (!state || !state.isManual_)
	      die(9);
	    const { scope_: scope } = state;
	    usePatchesInScope(scope, patchListener);
	    return processResult(void 0, scope);
	  }
	  /**
	   * Pass true to automatically freeze all copies created by Immer.
	   *
	   * By default, auto-freezing is enabled.
	   */
	  setAutoFreeze(value) {
	    this.autoFreeze_ = value;
	  }
	  /**
	   * Pass true to enable strict shallow copy.
	   *
	   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
	   */
	  setUseStrictShallowCopy(value) {
	    this.useStrictShallowCopy_ = value;
	  }
	  applyPatches(base, patches) {
	    let i;
	    for (i = patches.length - 1; i >= 0; i--) {
	      const patch = patches[i];
	      if (patch.path.length === 0 && patch.op === "replace") {
	        base = patch.value;
	        break;
	      }
	    }
	    if (i > -1) {
	      patches = patches.slice(i + 1);
	    }
	    const applyPatchesImpl = getPlugin("Patches").applyPatches_;
	    if (isDraft(base)) {
	      return applyPatchesImpl(base, patches);
	    }
	    return this.produce(
	      base,
	      (draft) => applyPatchesImpl(draft, patches)
	    );
	  }
	};
	function createProxy(value, parent) {
	  const draft = isMap(value) ? getPlugin("MapSet").proxyMap_(value, parent) : isSet(value) ? getPlugin("MapSet").proxySet_(value, parent) : createProxyProxy(value, parent);
	  const scope = parent ? parent.scope_ : getCurrentScope();
	  scope.drafts_.push(draft);
	  return draft;
	}

	// src/core/current.ts
	function current(value) {
	  if (!isDraft(value))
	    die(10, value);
	  return currentImpl(value);
	}
	function currentImpl(value) {
	  if (!isDraftable(value) || isFrozen(value))
	    return value;
	  const state = value[DRAFT_STATE];
	  let copy;
	  if (state) {
	    if (!state.modified_)
	      return state.base_;
	    state.finalized_ = true;
	    copy = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
	  } else {
	    copy = shallowCopy(value, true);
	  }
	  each(copy, (key, childValue) => {
	    set(copy, key, currentImpl(childValue));
	  });
	  if (state) {
	    state.finalized_ = false;
	  }
	  return copy;
	}

	// src/immer.ts
	var immer = new Immer2();
	var produce = immer.produce;
	immer.produceWithPatches.bind(
	  immer
	);
	immer.setAutoFreeze.bind(immer);
	immer.setUseStrictShallowCopy.bind(immer);
	immer.applyPatches.bind(immer);
	immer.createDraft.bind(immer);
	immer.finishDraft.bind(immer);

	var classnames = {exports: {}};

	/*!
		Copyright (c) 2018 Jed Watson.
		Licensed under the MIT License (MIT), see
		http://jedwatson.github.io/classnames
	*/

	var hasRequiredClassnames;

	function requireClassnames () {
		if (hasRequiredClassnames) return classnames.exports;
		hasRequiredClassnames = 1;
		(function (module) {
			/* global define */

			(function () {

			  var hasOwn = {}.hasOwnProperty;
			  function classNames() {
			    var classes = '';
			    for (var i = 0; i < arguments.length; i++) {
			      var arg = arguments[i];
			      if (arg) {
			        classes = appendClass(classes, parseValue(arg));
			      }
			    }
			    return classes;
			  }
			  function parseValue(arg) {
			    if (typeof arg === 'string' || typeof arg === 'number') {
			      return arg;
			    }
			    if (typeof arg !== 'object') {
			      return '';
			    }
			    if (Array.isArray(arg)) {
			      return classNames.apply(null, arg);
			    }
			    if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			      return arg.toString();
			    }
			    var classes = '';
			    for (var key in arg) {
			      if (hasOwn.call(arg, key) && arg[key]) {
			        classes = appendClass(classes, key);
			      }
			    }
			    return classes;
			  }
			  function appendClass(value, newClass) {
			    if (!newClass) {
			      return value;
			    }
			    if (value) {
			      return value + ' ' + newClass;
			    }
			    return value + newClass;
			  }
			  if (module.exports) {
			    classNames.default = classNames;
			    module.exports = classNames;
			  } else {
			    window.classNames = classNames;
			  }
			})(); 
		} (classnames));
		return classnames.exports;
	}

	var classnamesExports = requireClassnames();
	var classNames = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);

	var jsxRuntime = {exports: {}};

	var reactJsxRuntime_production_min = {};

	/**
	 * @license React
	 * react-jsx-runtime.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredReactJsxRuntime_production_min;

	function requireReactJsxRuntime_production_min () {
		if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
		hasRequiredReactJsxRuntime_production_min = 1;

		var f = requireReact(),
		  k = Symbol.for("react.element"),
		  l = Symbol.for("react.fragment"),
		  m = Object.prototype.hasOwnProperty,
		  n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
		  p = {
		    key: true,
		    ref: true,
		    __self: true,
		    __source: true
		  };
		function q(c, a, g) {
		  var b,
		    d = {},
		    e = null,
		    h = null;
		  void 0 !== g && (e = "" + g);
		  void 0 !== a.key && (e = "" + a.key);
		  void 0 !== a.ref && (h = a.ref);
		  for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
		  if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
		  return {
		    $$typeof: k,
		    type: c,
		    key: e,
		    ref: h,
		    props: d,
		    _owner: n.current
		  };
		}
		reactJsxRuntime_production_min.Fragment = l;
		reactJsxRuntime_production_min.jsx = q;
		reactJsxRuntime_production_min.jsxs = q;
		return reactJsxRuntime_production_min;
	}

	var hasRequiredJsxRuntime;

	function requireJsxRuntime () {
		if (hasRequiredJsxRuntime) return jsxRuntime.exports;
		hasRequiredJsxRuntime = 1;

		{
		  jsxRuntime.exports = requireReactJsxRuntime_production_min();
		}
		return jsxRuntime.exports;
	}

	var jsxRuntimeExports = requireJsxRuntime();

	const _excluded$3 = ["as", "disabled"];
	function _objectWithoutPropertiesLoose$4(r, e) {
	  if (null == r) return {};
	  var t = {};
	  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
	    if (e.indexOf(n) >= 0) continue;
	    t[n] = r[n];
	  }
	  return t;
	}
	function isTrivialHref(href) {
	  return !href || href.trim() === '#';
	}
	function useButtonProps({
	  tagName,
	  disabled,
	  href,
	  target,
	  rel,
	  role,
	  onClick,
	  tabIndex = 0,
	  type
	}) {
	  if (!tagName) {
	    if (href != null || target != null || rel != null) {
	      tagName = 'a';
	    } else {
	      tagName = 'button';
	    }
	  }
	  const meta = {
	    tagName
	  };
	  if (tagName === 'button') {
	    return [{
	      type: type || 'button',
	      disabled
	    }, meta];
	  }
	  const handleClick = event => {
	    if (disabled || tagName === 'a' && isTrivialHref(href)) {
	      event.preventDefault();
	    }
	    if (disabled) {
	      event.stopPropagation();
	      return;
	    }
	    onClick == null ? void 0 : onClick(event);
	  };
	  const handleKeyDown = event => {
	    if (event.key === ' ') {
	      event.preventDefault();
	      handleClick(event);
	    }
	  };
	  if (tagName === 'a') {
	    // Ensure there's a href so Enter can trigger anchor button.
	    href || (href = '#');
	    if (disabled) {
	      href = undefined;
	    }
	  }
	  return [{
	    role: role != null ? role : 'button',
	    // explicitly undefined so that it overrides the props disabled in a spread
	    // e.g. <Tag {...props} {...hookProps} />
	    disabled: undefined,
	    tabIndex: disabled ? undefined : tabIndex,
	    href,
	    target: tagName === 'a' ? target : undefined,
	    'aria-disabled': !disabled ? undefined : disabled,
	    rel: tagName === 'a' ? rel : undefined,
	    onClick: handleClick,
	    onKeyDown: handleKeyDown
	  }, meta];
	}
	const Button$1 = /*#__PURE__*/reactExports.forwardRef((_ref, ref) => {
	  let {
	      as: asProp,
	      disabled
	    } = _ref,
	    props = _objectWithoutPropertiesLoose$4(_ref, _excluded$3);
	  const [buttonProps, {
	    tagName: Component
	  }] = useButtonProps(Object.assign({
	    tagName: asProp,
	    disabled
	  }, props));
	  return /*#__PURE__*/jsxRuntimeExports.jsx(Component, Object.assign({}, props, buttonProps, {
	    ref: ref
	  }));
	});
	Button$1.displayName = 'Button';

	const DEFAULT_BREAKPOINTS = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
	const DEFAULT_MIN_BREAKPOINT = 'xs';
	const ThemeContext = /*#__PURE__*/reactExports.createContext({
	  prefixes: {},
	  breakpoints: DEFAULT_BREAKPOINTS,
	  minBreakpoint: DEFAULT_MIN_BREAKPOINT
	});
	const {
	  Consumer,
	  Provider
	} = ThemeContext;
	function useBootstrapPrefix(prefix, defaultPrefix) {
	  const {
	    prefixes
	  } = reactExports.useContext(ThemeContext);
	  return prefix || prefixes[defaultPrefix] || defaultPrefix;
	}
	function useBootstrapBreakpoints() {
	  const {
	    breakpoints
	  } = reactExports.useContext(ThemeContext);
	  return breakpoints;
	}
	function useBootstrapMinBreakpoint() {
	  const {
	    minBreakpoint
	  } = reactExports.useContext(ThemeContext);
	  return minBreakpoint;
	}

	const Button = /*#__PURE__*/reactExports.forwardRef(({
	  as,
	  bsPrefix,
	  variant = 'primary',
	  size,
	  active = false,
	  disabled = false,
	  className,
	  ...props
	}, ref) => {
	  const prefix = useBootstrapPrefix(bsPrefix, 'btn');
	  const [buttonProps, {
	    tagName
	  }] = useButtonProps({
	    tagName: as,
	    disabled,
	    ...props
	  });
	  const Component = tagName;
	  return /*#__PURE__*/jsxRuntimeExports.jsx(Component, {
	    ...buttonProps,
	    ...props,
	    ref: ref,
	    disabled: disabled,
	    className: classNames(className, prefix, active && 'active', variant && `${prefix}-${variant}`, size && `${prefix}-${size}`, props.href && disabled && 'disabled')
	  });
	});
	Button.displayName = 'Button';

	var propTypes$3 = {exports: {}};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret_1;
	var hasRequiredReactPropTypesSecret;

	function requireReactPropTypesSecret () {
		if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
		hasRequiredReactPropTypesSecret = 1;

		var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
		ReactPropTypesSecret_1 = ReactPropTypesSecret;
		return ReactPropTypesSecret_1;
	}

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var factoryWithThrowingShims;
	var hasRequiredFactoryWithThrowingShims;

	function requireFactoryWithThrowingShims () {
		if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
		hasRequiredFactoryWithThrowingShims = 1;

		var ReactPropTypesSecret = /*@__PURE__*/ requireReactPropTypesSecret();
		function emptyFunction() {}
		function emptyFunctionWithReset() {}
		emptyFunctionWithReset.resetWarningCache = emptyFunction;
		factoryWithThrowingShims = function () {
		  function shim(props, propName, componentName, location, propFullName, secret) {
		    if (secret === ReactPropTypesSecret) {
		      // It is still safe when called from React.
		      return;
		    }
		    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
		    err.name = 'Invariant Violation';
		    throw err;
		  }
		  shim.isRequired = shim;
		  function getShim() {
		    return shim;
		  }
		  // Important!
		  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
		  var ReactPropTypes = {
		    array: shim,
		    bigint: shim,
		    bool: shim,
		    func: shim,
		    number: shim,
		    object: shim,
		    string: shim,
		    symbol: shim,
		    any: shim,
		    arrayOf: getShim,
		    element: shim,
		    elementType: shim,
		    instanceOf: getShim,
		    node: shim,
		    objectOf: getShim,
		    oneOf: getShim,
		    oneOfType: getShim,
		    shape: getShim,
		    exact: getShim,
		    checkPropTypes: emptyFunctionWithReset,
		    resetWarningCache: emptyFunction
		  };
		  ReactPropTypes.PropTypes = ReactPropTypes;
		  return ReactPropTypes;
		};
		return factoryWithThrowingShims;
	}

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredPropTypes;

	function requirePropTypes () {
		if (hasRequiredPropTypes) return propTypes$3.exports;
		hasRequiredPropTypes = 1;
		{
		  // By explicitly using `prop-types` you are opting into new production behavior.
		  // http://fb.me/prop-types-in-prod
		  propTypes$3.exports = /*@__PURE__*/ requireFactoryWithThrowingShims()();
		}
		return propTypes$3.exports;
	}

	var propTypesExports = /*@__PURE__*/ requirePropTypes();
	var PropTypes = /*@__PURE__*/getDefaultExportFromCjs(propTypesExports);

	const propTypes$2 = {
	  /**
	   * Specify whether the feedback is for valid or invalid fields
	   *
	   * @type {('valid'|'invalid')}
	   */
	  type: PropTypes.string,
	  /** Display feedback as a tooltip. */
	  tooltip: PropTypes.bool,
	  as: PropTypes.elementType
	};
	const Feedback = /*#__PURE__*/reactExports.forwardRef(
	// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
	({
	  as: Component = 'div',
	  className,
	  type = 'valid',
	  tooltip = false,
	  ...props
	}, ref) => /*#__PURE__*/jsxRuntimeExports.jsx(Component, {
	  ...props,
	  ref: ref,
	  className: classNames(className, `${type}-${tooltip ? 'tooltip' : 'feedback'}`)
	}));
	Feedback.displayName = 'Feedback';
	Feedback.propTypes = propTypes$2;

	// TODO

	const FormContext = /*#__PURE__*/reactExports.createContext({});

	const FormCheckInput = /*#__PURE__*/reactExports.forwardRef(({
	  id,
	  bsPrefix,
	  className,
	  type = 'checkbox',
	  isValid = false,
	  isInvalid = false,
	  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
	  as: Component = 'input',
	  ...props
	}, ref) => {
	  const {
	    controlId
	  } = reactExports.useContext(FormContext);
	  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-check-input');
	  return /*#__PURE__*/jsxRuntimeExports.jsx(Component, {
	    ...props,
	    ref: ref,
	    type: type,
	    id: id || controlId,
	    className: classNames(className, bsPrefix, isValid && 'is-valid', isInvalid && 'is-invalid')
	  });
	});
	FormCheckInput.displayName = 'FormCheckInput';

	const FormCheckLabel = /*#__PURE__*/reactExports.forwardRef(({
	  bsPrefix,
	  className,
	  htmlFor,
	  ...props
	}, ref) => {
	  const {
	    controlId
	  } = reactExports.useContext(FormContext);
	  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-check-label');
	  return /*#__PURE__*/jsxRuntimeExports.jsx("label", {
	    ...props,
	    ref: ref,
	    htmlFor: htmlFor || controlId,
	    className: classNames(className, bsPrefix)
	  });
	});
	FormCheckLabel.displayName = 'FormCheckLabel';

	/**
	 * Finds whether a component's `children` prop includes a React element of the
	 * specified type.
	 */
	function hasChildOfType(children, type) {
	  return reactExports.Children.toArray(children).some(child => /*#__PURE__*/ /*#__PURE__*/reactExports.isValidElement(child) && child.type === type);
	}

	const FormCheck = /*#__PURE__*/reactExports.forwardRef(({
	  id,
	  bsPrefix,
	  bsSwitchPrefix,
	  inline = false,
	  reverse = false,
	  disabled = false,
	  isValid = false,
	  isInvalid = false,
	  feedbackTooltip = false,
	  feedback,
	  feedbackType,
	  className,
	  style,
	  title = '',
	  type = 'checkbox',
	  label,
	  children,
	  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
	  as = 'input',
	  ...props
	}, ref) => {
	  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-check');
	  bsSwitchPrefix = useBootstrapPrefix(bsSwitchPrefix, 'form-switch');
	  const {
	    controlId
	  } = reactExports.useContext(FormContext);
	  const innerFormContext = reactExports.useMemo(() => ({
	    controlId: id || controlId
	  }), [controlId, id]);
	  const hasLabel = !children && label != null && label !== false || hasChildOfType(children, FormCheckLabel);
	  const input = /*#__PURE__*/jsxRuntimeExports.jsx(FormCheckInput, {
	    ...props,
	    type: type === 'switch' ? 'checkbox' : type,
	    ref: ref,
	    isValid: isValid,
	    isInvalid: isInvalid,
	    disabled: disabled,
	    as: as
	  });
	  return /*#__PURE__*/jsxRuntimeExports.jsx(FormContext.Provider, {
	    value: innerFormContext,
	    children: /*#__PURE__*/jsxRuntimeExports.jsx("div", {
	      style: style,
	      className: classNames(className, hasLabel && bsPrefix, inline && `${bsPrefix}-inline`, reverse && `${bsPrefix}-reverse`, type === 'switch' && bsSwitchPrefix),
	      children: children || /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
	        children: [input, hasLabel && /*#__PURE__*/jsxRuntimeExports.jsx(FormCheckLabel, {
	          title: title,
	          children: label
	        }), feedback && /*#__PURE__*/jsxRuntimeExports.jsx(Feedback, {
	          type: feedbackType,
	          tooltip: feedbackTooltip,
	          children: feedback
	        })]
	      })
	    })
	  });
	});
	FormCheck.displayName = 'FormCheck';
	var FormCheck$1 = Object.assign(FormCheck, {
	  Input: FormCheckInput,
	  Label: FormCheckLabel
	});

	const FormControl = /*#__PURE__*/reactExports.forwardRef(({
	  bsPrefix,
	  type,
	  size,
	  htmlSize,
	  id,
	  className,
	  isValid = false,
	  isInvalid = false,
	  plaintext,
	  readOnly,
	  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
	  as: Component = 'input',
	  ...props
	}, ref) => {
	  const {
	    controlId
	  } = reactExports.useContext(FormContext);
	  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-control');
	  return /*#__PURE__*/jsxRuntimeExports.jsx(Component, {
	    ...props,
	    type: type,
	    size: htmlSize,
	    ref: ref,
	    readOnly: readOnly,
	    id: id || controlId,
	    className: classNames(className, plaintext ? `${bsPrefix}-plaintext` : bsPrefix, size && `${bsPrefix}-${size}`, type === 'color' && `${bsPrefix}-color`, isValid && 'is-valid', isInvalid && 'is-invalid')
	  });
	});
	FormControl.displayName = 'FormControl';
	var FormControl$1 = Object.assign(FormControl, {
	  Feedback
	});

	const FormFloating = /*#__PURE__*/reactExports.forwardRef(({
	  className,
	  bsPrefix,
	  as: Component = 'div',
	  ...props
	}, ref) => {
	  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-floating');
	  return /*#__PURE__*/jsxRuntimeExports.jsx(Component, {
	    ref: ref,
	    className: classNames(className, bsPrefix),
	    ...props
	  });
	});
	FormFloating.displayName = 'FormFloating';

	const FormGroup = /*#__PURE__*/reactExports.forwardRef(({
	  controlId,
	  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
	  as: Component = 'div',
	  ...props
	}, ref) => {
	  const context = reactExports.useMemo(() => ({
	    controlId
	  }), [controlId]);
	  return /*#__PURE__*/jsxRuntimeExports.jsx(FormContext.Provider, {
	    value: context,
	    children: /*#__PURE__*/jsxRuntimeExports.jsx(Component, {
	      ...props,
	      ref: ref
	    })
	  });
	});
	FormGroup.displayName = 'FormGroup';

	function useCol({
	  as,
	  bsPrefix,
	  className,
	  ...props
	}) {
	  bsPrefix = useBootstrapPrefix(bsPrefix, 'col');
	  const breakpoints = useBootstrapBreakpoints();
	  const minBreakpoint = useBootstrapMinBreakpoint();
	  const spans = [];
	  const classes = [];
	  breakpoints.forEach(brkPoint => {
	    const propValue = props[brkPoint];
	    delete props[brkPoint];
	    let span;
	    let offset;
	    let order;
	    if (typeof propValue === 'object' && propValue != null) {
	      ({
	        span,
	        offset,
	        order
	      } = propValue);
	    } else {
	      span = propValue;
	    }
	    const infix = brkPoint !== minBreakpoint ? `-${brkPoint}` : '';
	    if (span) spans.push(span === true ? `${bsPrefix}${infix}` : `${bsPrefix}${infix}-${span}`);
	    if (order != null) classes.push(`order${infix}-${order}`);
	    if (offset != null) classes.push(`offset${infix}-${offset}`);
	  });
	  return [{
	    ...props,
	    className: classNames(className, ...spans, ...classes)
	  }, {
	    as,
	    bsPrefix,
	    spans
	  }];
	}
	const Col = /*#__PURE__*/reactExports.forwardRef(
	// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
	(props, ref) => {
	  const [{
	    className,
	    ...colProps
	  }, {
	    as: Component = 'div',
	    bsPrefix,
	    spans
	  }] = useCol(props);
	  return /*#__PURE__*/jsxRuntimeExports.jsx(Component, {
	    ...colProps,
	    ref: ref,
	    className: classNames(className, !spans.length && bsPrefix)
	  });
	});
	Col.displayName = 'Col';

	const FormLabel = /*#__PURE__*/reactExports.forwardRef(({
	  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
	  as: Component = 'label',
	  bsPrefix,
	  column = false,
	  visuallyHidden = false,
	  className,
	  htmlFor,
	  ...props
	}, ref) => {
	  const {
	    controlId
	  } = reactExports.useContext(FormContext);
	  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-label');
	  let columnClass = 'col-form-label';
	  if (typeof column === 'string') columnClass = `${columnClass} ${columnClass}-${column}`;
	  const classes = classNames(className, bsPrefix, visuallyHidden && 'visually-hidden', column && columnClass);
	  htmlFor = htmlFor || controlId;
	  if (column) return /*#__PURE__*/jsxRuntimeExports.jsx(Col, {
	    ref: ref,
	    as: "label",
	    className: classes,
	    htmlFor: htmlFor,
	    ...props
	  });
	  return (/*#__PURE__*/
	    // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
	    jsxRuntimeExports.jsx(Component, {
	      ref: ref,
	      className: classes,
	      htmlFor: htmlFor,
	      ...props
	    })
	  );
	});
	FormLabel.displayName = 'FormLabel';

	const FormRange = /*#__PURE__*/reactExports.forwardRef(({
	  bsPrefix,
	  className,
	  id,
	  ...props
	}, ref) => {
	  const {
	    controlId
	  } = reactExports.useContext(FormContext);
	  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-range');
	  return /*#__PURE__*/jsxRuntimeExports.jsx("input", {
	    ...props,
	    type: "range",
	    ref: ref,
	    className: classNames(className, bsPrefix),
	    id: id || controlId
	  });
	});
	FormRange.displayName = 'FormRange';

	const FormSelect = /*#__PURE__*/reactExports.forwardRef(({
	  bsPrefix,
	  size,
	  htmlSize,
	  className,
	  isValid = false,
	  isInvalid = false,
	  id,
	  ...props
	}, ref) => {
	  const {
	    controlId
	  } = reactExports.useContext(FormContext);
	  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-select');
	  return /*#__PURE__*/jsxRuntimeExports.jsx("select", {
	    ...props,
	    size: htmlSize,
	    ref: ref,
	    className: classNames(className, bsPrefix, size && `${bsPrefix}-${size}`, isValid && `is-valid`, isInvalid && `is-invalid`),
	    id: id || controlId
	  });
	});
	FormSelect.displayName = 'FormSelect';

	const FormText = /*#__PURE__*/reactExports.forwardRef(
	// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
	({
	  bsPrefix,
	  className,
	  as: Component = 'small',
	  muted,
	  ...props
	}, ref) => {
	  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-text');
	  return /*#__PURE__*/jsxRuntimeExports.jsx(Component, {
	    ...props,
	    ref: ref,
	    className: classNames(className, bsPrefix, muted && 'text-muted')
	  });
	});
	FormText.displayName = 'FormText';

	const Switch = /*#__PURE__*/reactExports.forwardRef((props, ref) => /*#__PURE__*/jsxRuntimeExports.jsx(FormCheck$1, {
	  ...props,
	  ref: ref,
	  type: "switch"
	}));
	Switch.displayName = 'Switch';
	var Switch$1 = Object.assign(Switch, {
	  Input: FormCheck$1.Input,
	  Label: FormCheck$1.Label
	});

	const FloatingLabel = /*#__PURE__*/reactExports.forwardRef(({
	  bsPrefix,
	  className,
	  children,
	  controlId,
	  label,
	  ...props
	}, ref) => {
	  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-floating');
	  return /*#__PURE__*/jsxRuntimeExports.jsxs(FormGroup, {
	    ref: ref,
	    className: classNames(className, bsPrefix),
	    controlId: controlId,
	    ...props,
	    children: [children, /*#__PURE__*/jsxRuntimeExports.jsx("label", {
	      htmlFor: controlId,
	      children: label
	    })]
	  });
	});
	FloatingLabel.displayName = 'FloatingLabel';

	const propTypes$1 = {
	  /**
	   * The Form `ref` will be forwarded to the underlying element,
	   * which means, unless it's rendered `as` a composite component,
	   * it will be a DOM node, when resolved.
	   *
	   * @type {ReactRef}
	   * @alias ref
	   */
	  _ref: PropTypes.any,
	  /**
	   * Mark a form as having been validated. Setting it to `true` will
	   * toggle any validation styles on the forms elements.
	   */
	  validated: PropTypes.bool,
	  as: PropTypes.elementType
	};
	const Form = /*#__PURE__*/reactExports.forwardRef(({
	  className,
	  validated,
	  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
	  as: Component = 'form',
	  ...props
	}, ref) => /*#__PURE__*/jsxRuntimeExports.jsx(Component, {
	  ...props,
	  ref: ref,
	  className: classNames(className, validated && 'was-validated')
	}));
	Form.displayName = 'Form';
	Form.propTypes = propTypes$1;
	var Form$1 = Object.assign(Form, {
	  Group: FormGroup,
	  Control: FormControl$1,
	  Floating: FormFloating,
	  Check: FormCheck$1,
	  Switch: Switch$1,
	  Label: FormLabel,
	  Text: FormText,
	  Range: FormRange,
	  Select: FormSelect,
	  FloatingLabel
	});

	const Row = /*#__PURE__*/reactExports.forwardRef(({
	  bsPrefix,
	  className,
	  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
	  as: Component = 'div',
	  ...props
	}, ref) => {
	  const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, 'row');
	  const breakpoints = useBootstrapBreakpoints();
	  const minBreakpoint = useBootstrapMinBreakpoint();
	  const sizePrefix = `${decoratedBsPrefix}-cols`;
	  const classes = [];
	  breakpoints.forEach(brkPoint => {
	    const propValue = props[brkPoint];
	    delete props[brkPoint];
	    let cols;
	    if (propValue != null && typeof propValue === 'object') {
	      ({
	        cols
	      } = propValue);
	    } else {
	      cols = propValue;
	    }
	    const infix = brkPoint !== minBreakpoint ? `-${brkPoint}` : '';
	    if (cols != null) classes.push(`${sizePrefix}${infix}-${cols}`);
	  });
	  return /*#__PURE__*/jsxRuntimeExports.jsx(Component, {
	    ref: ref,
	    ...props,
	    className: classNames(className, decoratedBsPrefix, ...classes)
	  });
	});
	Row.displayName = 'Row';

	const SelectableContext = /*#__PURE__*/reactExports.createContext(null);

	function _extends() {
	  return _extends = Object.assign ? Object.assign.bind() : function (n) {
	    for (var e = 1; e < arguments.length; e++) {
	      var t = arguments[e];
	      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
	    }
	    return n;
	  }, _extends.apply(null, arguments);
	}

	function _objectWithoutPropertiesLoose$3(r, e) {
	  if (null == r) return {};
	  var t = {};
	  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
	    if (e.includes(n)) continue;
	    t[n] = r[n];
	  }
	  return t;
	}

	function defaultKey(key) {
	  return 'default' + key.charAt(0).toUpperCase() + key.substr(1);
	}

	function _toPropertyKey(arg) {
	  var key = _toPrimitive(arg, "string");
	  return typeof key === "symbol" ? key : String(key);
	}
	function _toPrimitive(input, hint) {
	  if (typeof input !== "object" || input === null) return input;
	  var prim = input[Symbol.toPrimitive];
	  if (prim !== undefined) {
	    var res = prim.call(input, hint);
	    if (typeof res !== "object") return res;
	    throw new TypeError("@@toPrimitive must return a primitive value.");
	  }
	  return (String )(input);
	}
	function useUncontrolledProp(propValue, defaultValue, handler) {
	  var wasPropRef = reactExports.useRef(propValue !== undefined);
	  var _useState = reactExports.useState(defaultValue),
	    stateValue = _useState[0],
	    setState = _useState[1];
	  var isProp = propValue !== undefined;
	  var wasProp = wasPropRef.current;
	  wasPropRef.current = isProp;
	  /**
	   * If a prop switches from controlled to Uncontrolled
	   * reset its value to the defaultValue
	   */

	  if (!isProp && wasProp && stateValue !== defaultValue) {
	    setState(defaultValue);
	  }
	  return [isProp ? propValue : stateValue, reactExports.useCallback(function (value) {
	    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	    if (handler) handler.apply(void 0, [value].concat(args));
	    setState(value);
	  }, [handler])];
	}
	function useUncontrolled(props, config) {
	  return Object.keys(config).reduce(function (result, fieldName) {
	    var _extends2;
	    var _ref = result,
	      defaultValue = _ref[defaultKey(fieldName)],
	      propsValue = _ref[fieldName],
	      rest = _objectWithoutPropertiesLoose$3(_ref, [defaultKey(fieldName), fieldName].map(_toPropertyKey));
	    var handlerName = config[fieldName];
	    var _useUncontrolledProp = useUncontrolledProp(propsValue, defaultValue, props[handlerName]),
	      value = _useUncontrolledProp[0],
	      handler = _useUncontrolledProp[1];
	    return _extends({}, rest, (_extends2 = {}, _extends2[fieldName] = value, _extends2[handlerName] = handler, _extends2));
	  }, props);
	}

	function _setPrototypeOf(t, e) {
	  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
	    return t.__proto__ = e, t;
	  }, _setPrototypeOf(t, e);
	}

	function _inheritsLoose(t, o) {
	  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
	}

	const NavbarBrand = /*#__PURE__*/reactExports.forwardRef(({
	  bsPrefix,
	  className,
	  as,
	  ...props
	}, ref) => {
	  bsPrefix = useBootstrapPrefix(bsPrefix, 'navbar-brand');
	  const Component = as || (props.href ? 'a' : 'span');
	  return /*#__PURE__*/jsxRuntimeExports.jsx(Component, {
	    ...props,
	    ref: ref,
	    className: classNames(className, bsPrefix)
	  });
	});
	NavbarBrand.displayName = 'NavbarBrand';

	/**
	 * Returns the owner document of a given element.
	 * 
	 * @param node the element
	 */
	function ownerDocument(node) {
	  return node && node.ownerDocument || document;
	}

	/**
	 * Returns the owner window of a given element.
	 * 
	 * @param node the element
	 */

	function ownerWindow(node) {
	  var doc = ownerDocument(node);
	  return doc && doc.defaultView || window;
	}

	/**
	 * Returns one or all computed style properties of an element.
	 * 
	 * @param node the element
	 * @param psuedoElement the style property
	 */

	function getComputedStyle(node, psuedoElement) {
	  return ownerWindow(node).getComputedStyle(node, psuedoElement);
	}

	var rUpper = /([A-Z])/g;
	function hyphenate(string) {
	  return string.replace(rUpper, '-$1').toLowerCase();
	}

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
	 */
	var msPattern = /^ms-/;
	function hyphenateStyleName(string) {
	  return hyphenate(string).replace(msPattern, '-ms-');
	}

	var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
	function isTransform(value) {
	  return !!(value && supportedTransforms.test(value));
	}

	function style(node, property) {
	  var css = '';
	  var transforms = '';
	  if (typeof property === 'string') {
	    return node.style.getPropertyValue(hyphenateStyleName(property)) || getComputedStyle(node).getPropertyValue(hyphenateStyleName(property));
	  }
	  Object.keys(property).forEach(function (key) {
	    var value = property[key];
	    if (!value && value !== 0) {
	      node.style.removeProperty(hyphenateStyleName(key));
	    } else if (isTransform(key)) {
	      transforms += key + "(" + value + ") ";
	    } else {
	      css += hyphenateStyleName(key) + ": " + value + ";";
	    }
	  });
	  if (transforms) {
	    css += "transform: " + transforms + ";";
	  }
	  node.style.cssText += ";" + css;
	}

	var reactDomExports = requireReactDom();
	var ReactDOM = /*@__PURE__*/getDefaultExportFromCjs(reactDomExports);

	var config = {
	  disabled: false
	};

	var TransitionGroupContext = /*#__PURE__*/React.createContext(null);

	var forceReflow = function forceReflow(node) {
	  return node.scrollTop;
	};

	var UNMOUNTED = 'unmounted';
	var EXITED = 'exited';
	var ENTERING = 'entering';
	var ENTERED = 'entered';
	var EXITING = 'exiting';
	/**
	 * The Transition component lets you describe a transition from one component
	 * state to another _over time_ with a simple declarative API. Most commonly
	 * it's used to animate the mounting and unmounting of a component, but can also
	 * be used to describe in-place transition states as well.
	 *
	 * ---
	 *
	 * **Note**: `Transition` is a platform-agnostic base component. If you're using
	 * transitions in CSS, you'll probably want to use
	 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
	 * instead. It inherits all the features of `Transition`, but contains
	 * additional features necessary to play nice with CSS transitions (hence the
	 * name of the component).
	 *
	 * ---
	 *
	 * By default the `Transition` component does not alter the behavior of the
	 * component it renders, it only tracks "enter" and "exit" states for the
	 * components. It's up to you to give meaning and effect to those states. For
	 * example we can add styles to a component when it enters or exits:
	 *
	 * ```jsx
	 * import { Transition } from 'react-transition-group';
	 *
	 * const duration = 300;
	 *
	 * const defaultStyle = {
	 *   transition: `opacity ${duration}ms ease-in-out`,
	 *   opacity: 0,
	 * }
	 *
	 * const transitionStyles = {
	 *   entering: { opacity: 1 },
	 *   entered:  { opacity: 1 },
	 *   exiting:  { opacity: 0 },
	 *   exited:  { opacity: 0 },
	 * };
	 *
	 * const Fade = ({ in: inProp }) => (
	 *   <Transition in={inProp} timeout={duration}>
	 *     {state => (
	 *       <div style={{
	 *         ...defaultStyle,
	 *         ...transitionStyles[state]
	 *       }}>
	 *         I'm a fade Transition!
	 *       </div>
	 *     )}
	 *   </Transition>
	 * );
	 * ```
	 *
	 * There are 4 main states a Transition can be in:
	 *  - `'entering'`
	 *  - `'entered'`
	 *  - `'exiting'`
	 *  - `'exited'`
	 *
	 * Transition state is toggled via the `in` prop. When `true` the component
	 * begins the "Enter" stage. During this stage, the component will shift from
	 * its current transition state, to `'entering'` for the duration of the
	 * transition and then to the `'entered'` stage once it's complete. Let's take
	 * the following example (we'll use the
	 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
	 *
	 * ```jsx
	 * function App() {
	 *   const [inProp, setInProp] = useState(false);
	 *   return (
	 *     <div>
	 *       <Transition in={inProp} timeout={500}>
	 *         {state => (
	 *           // ...
	 *         )}
	 *       </Transition>
	 *       <button onClick={() => setInProp(true)}>
	 *         Click to Enter
	 *       </button>
	 *     </div>
	 *   );
	 * }
	 * ```
	 *
	 * When the button is clicked the component will shift to the `'entering'` state
	 * and stay there for 500ms (the value of `timeout`) before it finally switches
	 * to `'entered'`.
	 *
	 * When `in` is `false` the same thing happens except the state moves from
	 * `'exiting'` to `'exited'`.
	 */

	var Transition = /*#__PURE__*/function (_React$Component) {
	  _inheritsLoose(Transition, _React$Component);
	  function Transition(props, context) {
	    var _this;
	    _this = _React$Component.call(this, props, context) || this;
	    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

	    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
	    var initialStatus;
	    _this.appearStatus = null;
	    if (props.in) {
	      if (appear) {
	        initialStatus = EXITED;
	        _this.appearStatus = ENTERING;
	      } else {
	        initialStatus = ENTERED;
	      }
	    } else {
	      if (props.unmountOnExit || props.mountOnEnter) {
	        initialStatus = UNMOUNTED;
	      } else {
	        initialStatus = EXITED;
	      }
	    }
	    _this.state = {
	      status: initialStatus
	    };
	    _this.nextCallback = null;
	    return _this;
	  }
	  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
	    var nextIn = _ref.in;
	    if (nextIn && prevState.status === UNMOUNTED) {
	      return {
	        status: EXITED
	      };
	    }
	    return null;
	  } // getSnapshotBeforeUpdate(prevProps) {
	  //   let nextStatus = null
	  //   if (prevProps !== this.props) {
	  //     const { status } = this.state
	  //     if (this.props.in) {
	  //       if (status !== ENTERING && status !== ENTERED) {
	  //         nextStatus = ENTERING
	  //       }
	  //     } else {
	  //       if (status === ENTERING || status === ENTERED) {
	  //         nextStatus = EXITING
	  //       }
	  //     }
	  //   }
	  //   return { nextStatus }
	  // }
	  ;
	  var _proto = Transition.prototype;
	  _proto.componentDidMount = function componentDidMount() {
	    this.updateStatus(true, this.appearStatus);
	  };
	  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
	    var nextStatus = null;
	    if (prevProps !== this.props) {
	      var status = this.state.status;
	      if (this.props.in) {
	        if (status !== ENTERING && status !== ENTERED) {
	          nextStatus = ENTERING;
	        }
	      } else {
	        if (status === ENTERING || status === ENTERED) {
	          nextStatus = EXITING;
	        }
	      }
	    }
	    this.updateStatus(false, nextStatus);
	  };
	  _proto.componentWillUnmount = function componentWillUnmount() {
	    this.cancelNextCallback();
	  };
	  _proto.getTimeouts = function getTimeouts() {
	    var timeout = this.props.timeout;
	    var exit, enter, appear;
	    exit = enter = appear = timeout;
	    if (timeout != null && typeof timeout !== 'number') {
	      exit = timeout.exit;
	      enter = timeout.enter; // TODO: remove fallback for next major

	      appear = timeout.appear !== undefined ? timeout.appear : enter;
	    }
	    return {
	      exit: exit,
	      enter: enter,
	      appear: appear
	    };
	  };
	  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
	    if (mounting === void 0) {
	      mounting = false;
	    }
	    if (nextStatus !== null) {
	      // nextStatus will always be ENTERING or EXITING.
	      this.cancelNextCallback();
	      if (nextStatus === ENTERING) {
	        if (this.props.unmountOnExit || this.props.mountOnEnter) {
	          var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this); // https://github.com/reactjs/react-transition-group/pull/749
	          // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
	          // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.

	          if (node) forceReflow(node);
	        }
	        this.performEnter(mounting);
	      } else {
	        this.performExit();
	      }
	    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
	      this.setState({
	        status: UNMOUNTED
	      });
	    }
	  };
	  _proto.performEnter = function performEnter(mounting) {
	    var _this2 = this;
	    var enter = this.props.enter;
	    var appearing = this.context ? this.context.isMounting : mounting;
	    var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM.findDOMNode(this), appearing],
	      maybeNode = _ref2[0],
	      maybeAppearing = _ref2[1];
	    var timeouts = this.getTimeouts();
	    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
	    // if we are mounting and running this it means appear _must_ be set

	    if (!mounting && !enter || config.disabled) {
	      this.safeSetState({
	        status: ENTERED
	      }, function () {
	        _this2.props.onEntered(maybeNode);
	      });
	      return;
	    }
	    this.props.onEnter(maybeNode, maybeAppearing);
	    this.safeSetState({
	      status: ENTERING
	    }, function () {
	      _this2.props.onEntering(maybeNode, maybeAppearing);
	      _this2.onTransitionEnd(enterTimeout, function () {
	        _this2.safeSetState({
	          status: ENTERED
	        }, function () {
	          _this2.props.onEntered(maybeNode, maybeAppearing);
	        });
	      });
	    });
	  };
	  _proto.performExit = function performExit() {
	    var _this3 = this;
	    var exit = this.props.exit;
	    var timeouts = this.getTimeouts();
	    var maybeNode = this.props.nodeRef ? undefined : ReactDOM.findDOMNode(this); // no exit animation skip right to EXITED

	    if (!exit || config.disabled) {
	      this.safeSetState({
	        status: EXITED
	      }, function () {
	        _this3.props.onExited(maybeNode);
	      });
	      return;
	    }
	    this.props.onExit(maybeNode);
	    this.safeSetState({
	      status: EXITING
	    }, function () {
	      _this3.props.onExiting(maybeNode);
	      _this3.onTransitionEnd(timeouts.exit, function () {
	        _this3.safeSetState({
	          status: EXITED
	        }, function () {
	          _this3.props.onExited(maybeNode);
	        });
	      });
	    });
	  };
	  _proto.cancelNextCallback = function cancelNextCallback() {
	    if (this.nextCallback !== null) {
	      this.nextCallback.cancel();
	      this.nextCallback = null;
	    }
	  };
	  _proto.safeSetState = function safeSetState(nextState, callback) {
	    // This shouldn't be necessary, but there are weird race conditions with
	    // setState callbacks and unmounting in testing, so always make sure that
	    // we can cancel any pending setState callbacks after we unmount.
	    callback = this.setNextCallback(callback);
	    this.setState(nextState, callback);
	  };
	  _proto.setNextCallback = function setNextCallback(callback) {
	    var _this4 = this;
	    var active = true;
	    this.nextCallback = function (event) {
	      if (active) {
	        active = false;
	        _this4.nextCallback = null;
	        callback(event);
	      }
	    };
	    this.nextCallback.cancel = function () {
	      active = false;
	    };
	    return this.nextCallback;
	  };
	  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
	    this.setNextCallback(handler);
	    var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
	    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;
	    if (!node || doesNotHaveTimeoutOrListener) {
	      setTimeout(this.nextCallback, 0);
	      return;
	    }
	    if (this.props.addEndListener) {
	      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
	        maybeNode = _ref3[0],
	        maybeNextCallback = _ref3[1];
	      this.props.addEndListener(maybeNode, maybeNextCallback);
	    }
	    if (timeout != null) {
	      setTimeout(this.nextCallback, timeout);
	    }
	  };
	  _proto.render = function render() {
	    var status = this.state.status;
	    if (status === UNMOUNTED) {
	      return null;
	    }
	    var _this$props = this.props,
	      children = _this$props.children;
	      _this$props.in;
	      _this$props.mountOnEnter;
	      _this$props.unmountOnExit;
	      _this$props.appear;
	      _this$props.enter;
	      _this$props.exit;
	      _this$props.timeout;
	      _this$props.addEndListener;
	      _this$props.onEnter;
	      _this$props.onEntering;
	      _this$props.onEntered;
	      _this$props.onExit;
	      _this$props.onExiting;
	      _this$props.onExited;
	      _this$props.nodeRef;
	      var childProps = _objectWithoutPropertiesLoose$3(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
	    return (/*#__PURE__*/
	      // allows for nested Transitions
	      React.createElement(TransitionGroupContext.Provider, {
	        value: null
	      }, typeof children === 'function' ? children(status, childProps) : /*#__PURE__*/React.cloneElement(React.Children.only(children), childProps))
	    );
	  };
	  return Transition;
	}(React.Component);
	Transition.contextType = TransitionGroupContext;
	Transition.propTypes = {}; // Name the function so it is clearer in the documentation

	function noop() {}
	Transition.defaultProps = {
	  in: false,
	  mountOnEnter: false,
	  unmountOnExit: false,
	  appear: false,
	  enter: true,
	  exit: true,
	  onEnter: noop,
	  onEntering: noop,
	  onEntered: noop,
	  onExit: noop,
	  onExiting: noop,
	  onExited: noop
	};
	Transition.UNMOUNTED = UNMOUNTED;
	Transition.EXITED = EXITED;
	Transition.ENTERING = ENTERING;
	Transition.ENTERED = ENTERED;
	Transition.EXITING = EXITING;

	function isEscKey(e) {
	  return e.code === 'Escape' || e.keyCode === 27;
	}
	function getReactVersion() {
	  const parts = reactExports.version.split('.');
	  return {
	    major: +parts[0],
	    minor: +parts[1],
	    patch: +parts[2]
	  };
	}
	function getChildRef(element) {
	  if (!element || typeof element === 'function') {
	    return null;
	  }
	  const {
	    major
	  } = getReactVersion();
	  const childRef = major >= 19 ? element.props.ref : element.ref;
	  return childRef;
	}

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	/* eslint-disable no-return-assign */
	var optionsSupported = false;
	var onceSupported = false;
	try {
	  var options = {
	    get passive() {
	      return optionsSupported = true;
	    },
	    get once() {
	      // eslint-disable-next-line no-multi-assign
	      return onceSupported = optionsSupported = true;
	    }
	  };
	  if (canUseDOM) {
	    window.addEventListener('test', options, options);
	    window.removeEventListener('test', options, true);
	  }
	} catch (e) {
	  /* */
	}

	/**
	 * An `addEventListener` ponyfill, supports the `once` option
	 * 
	 * @param node the element
	 * @param eventName the event name
	 * @param handle the handler
	 * @param options event options
	 */
	function addEventListener(node, eventName, handler, options) {
	  if (options && typeof options !== 'boolean' && !onceSupported) {
	    var once = options.once,
	      capture = options.capture;
	    var wrappedHandler = handler;
	    if (!onceSupported && once) {
	      wrappedHandler = handler.__once || function onceHandler(event) {
	        this.removeEventListener(eventName, onceHandler, capture);
	        handler.call(this, event);
	      };
	      handler.__once = wrappedHandler;
	    }
	    node.addEventListener(eventName, wrappedHandler, optionsSupported ? options : capture);
	  }
	  node.addEventListener(eventName, handler, options);
	}

	/**
	 * A `removeEventListener` ponyfill
	 * 
	 * @param node the element
	 * @param eventName the event name
	 * @param handle the handler
	 * @param options event options
	 */
	function removeEventListener(node, eventName, handler, options) {
	  var capture = options && typeof options !== 'boolean' ? options.capture : options;
	  node.removeEventListener(eventName, handler, capture);
	  if (handler.__once) {
	    node.removeEventListener(eventName, handler.__once, capture);
	  }
	}

	function listen(node, eventName, handler, options) {
	  addEventListener(node, eventName, handler, options);
	  return function () {
	    removeEventListener(node, eventName, handler, options);
	  };
	}

	/**
	 * Triggers an event on a given element.
	 * 
	 * @param node the element
	 * @param eventName the event name to trigger
	 * @param bubbles whether the event should bubble up
	 * @param cancelable whether the event should be cancelable
	 */
	function triggerEvent(node, eventName, bubbles, cancelable) {
	  if (cancelable === void 0) {
	    cancelable = true;
	  }
	  if (node) {
	    var event = document.createEvent('HTMLEvents');
	    event.initEvent(eventName, bubbles, cancelable);
	    node.dispatchEvent(event);
	  }
	}

	function parseDuration$1(node) {
	  var str = style(node, 'transitionDuration') || '';
	  var mult = str.indexOf('ms') === -1 ? 1000 : 1;
	  return parseFloat(str) * mult;
	}
	function emulateTransitionEnd(element, duration, padding) {
	  if (padding === void 0) {
	    padding = 5;
	  }
	  var called = false;
	  var handle = setTimeout(function () {
	    if (!called) triggerEvent(element, 'transitionend', true);
	  }, duration + padding);
	  var remove = listen(element, 'transitionend', function () {
	    called = true;
	  }, {
	    once: true
	  });
	  return function () {
	    clearTimeout(handle);
	    remove();
	  };
	}
	function transitionEnd(element, handler, duration, padding) {
	  if (duration == null) duration = parseDuration$1(element) || 0;
	  var removeEmulate = emulateTransitionEnd(element, duration, padding);
	  var remove = listen(element, 'transitionend', handler);
	  return function () {
	    removeEmulate();
	    remove();
	  };
	}

	function parseDuration(node, property) {
	  const str = style(node, property) || '';
	  const mult = str.indexOf('ms') === -1 ? 1000 : 1;
	  return parseFloat(str) * mult;
	}
	function transitionEndListener(element, handler) {
	  const duration = parseDuration(element, 'transitionDuration');
	  const delay = parseDuration(element, 'transitionDelay');
	  const remove = transitionEnd(element, e => {
	    if (e.target === element) {
	      remove();
	      handler(e);
	    }
	  }, duration + delay);
	}

	/**
	 * Safe chained function
	 *
	 * Will only create a new function if needed,
	 * otherwise will pass back existing functions or null.
	 *
	 * @param {function} functions to chain
	 * @returns {function|null}
	 */
	function createChainedFunction(...funcs) {
	  return funcs.filter(f => f != null).reduce((acc, f) => {
	    if (typeof f !== 'function') {
	      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
	    }
	    if (acc === null) return f;
	    return function chainedFunction(...args) {
	      // @ts-ignore
	      acc.apply(this, args);
	      // @ts-ignore
	      f.apply(this, args);
	    };
	  }, null);
	}

	// reading a dimension prop will cause the browser to recalculate,
	// which will let our animations work
	function triggerBrowserReflow(node) {
	  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
	  node.offsetHeight;
	}

	const toFnRef$1 = ref => !ref || typeof ref === 'function' ? ref : value => {
	  ref.current = value;
	};
	function mergeRefs$1(refA, refB) {
	  const a = toFnRef$1(refA);
	  const b = toFnRef$1(refB);
	  return value => {
	    if (a) a(value);
	    if (b) b(value);
	  };
	}

	/**
	 * Create and returns a single callback ref composed from two other Refs.
	 *
	 * ```tsx
	 * const Button = React.forwardRef((props, ref) => {
	 *   const [element, attachRef] = useCallbackRef<HTMLButtonElement>();
	 *   const mergedRef = useMergedRefs(ref, attachRef);
	 *
	 *   return <button ref={mergedRef} {...props}/>
	 * })
	 * ```
	 *
	 * @param refA A Callback or mutable Ref
	 * @param refB A Callback or mutable Ref
	 * @category refs
	 */
	function useMergedRefs$1(refA, refB) {
	  return reactExports.useMemo(() => mergeRefs$1(refA, refB), [refA, refB]);
	}

	function safeFindDOMNode(componentOrElement) {
	  if (componentOrElement && 'setState' in componentOrElement) {
	    return ReactDOM.findDOMNode(componentOrElement);
	  }
	  return componentOrElement != null ? componentOrElement : null;
	}

	// Normalizes Transition callbacks when nodeRef is used.
	const TransitionWrapper = /*#__PURE__*/React.forwardRef(({
	  onEnter,
	  onEntering,
	  onEntered,
	  onExit,
	  onExiting,
	  onExited,
	  addEndListener,
	  children,
	  childRef,
	  ...props
	}, ref) => {
	  const nodeRef = reactExports.useRef(null);
	  const mergedRef = useMergedRefs$1(nodeRef, childRef);
	  const attachRef = r => {
	    mergedRef(safeFindDOMNode(r));
	  };
	  const normalize = callback => param => {
	    if (callback && nodeRef.current) {
	      callback(nodeRef.current, param);
	    }
	  };

	  /* eslint-disable react-hooks/exhaustive-deps */
	  const handleEnter = reactExports.useCallback(normalize(onEnter), [onEnter]);
	  const handleEntering = reactExports.useCallback(normalize(onEntering), [onEntering]);
	  const handleEntered = reactExports.useCallback(normalize(onEntered), [onEntered]);
	  const handleExit = reactExports.useCallback(normalize(onExit), [onExit]);
	  const handleExiting = reactExports.useCallback(normalize(onExiting), [onExiting]);
	  const handleExited = reactExports.useCallback(normalize(onExited), [onExited]);
	  const handleAddEndListener = reactExports.useCallback(normalize(addEndListener), [addEndListener]);
	  /* eslint-enable react-hooks/exhaustive-deps */

	  return /*#__PURE__*/jsxRuntimeExports.jsx(Transition, {
	    ref: ref,
	    ...props,
	    onEnter: handleEnter,
	    onEntered: handleEntered,
	    onEntering: handleEntering,
	    onExit: handleExit,
	    onExited: handleExited,
	    onExiting: handleExiting,
	    addEndListener: handleAddEndListener,
	    nodeRef: nodeRef,
	    children: typeof children === 'function' ? (status, innerProps) =>
	    // TODO: Types for RTG missing innerProps, so need to cast.
	    children(status, {
	      ...innerProps,
	      ref: attachRef
	    }) : /*#__PURE__*/React.cloneElement(children, {
	      ref: attachRef
	    })
	  });
	});

	const MARGINS = {
	  height: ['marginTop', 'marginBottom'],
	  width: ['marginLeft', 'marginRight']
	};
	function getDefaultDimensionValue(dimension, elem) {
	  const offset = `offset${dimension[0].toUpperCase()}${dimension.slice(1)}`;
	  const value = elem[offset];
	  const margins = MARGINS[dimension];
	  return value +
	  // @ts-ignore
	  parseInt(style(elem, margins[0]), 10) +
	  // @ts-ignore
	  parseInt(style(elem, margins[1]), 10);
	}
	const collapseStyles = {
	  [EXITED]: 'collapse',
	  [EXITING]: 'collapsing',
	  [ENTERING]: 'collapsing',
	  [ENTERED]: 'collapse show'
	};
	const Collapse = /*#__PURE__*/React.forwardRef(({
	  onEnter,
	  onEntering,
	  onEntered,
	  onExit,
	  onExiting,
	  className,
	  children,
	  dimension = 'height',
	  in: inProp = false,
	  timeout = 300,
	  mountOnEnter = false,
	  unmountOnExit = false,
	  appear = false,
	  getDimensionValue = getDefaultDimensionValue,
	  ...props
	}, ref) => {
	  /* Compute dimension */
	  const computedDimension = typeof dimension === 'function' ? dimension() : dimension;

	  /* -- Expanding -- */
	  const handleEnter = reactExports.useMemo(() => createChainedFunction(elem => {
	    elem.style[computedDimension] = '0';
	  }, onEnter), [computedDimension, onEnter]);
	  const handleEntering = reactExports.useMemo(() => createChainedFunction(elem => {
	    const scroll = `scroll${computedDimension[0].toUpperCase()}${computedDimension.slice(1)}`;
	    elem.style[computedDimension] = `${elem[scroll]}px`;
	  }, onEntering), [computedDimension, onEntering]);
	  const handleEntered = reactExports.useMemo(() => createChainedFunction(elem => {
	    elem.style[computedDimension] = null;
	  }, onEntered), [computedDimension, onEntered]);

	  /* -- Collapsing -- */
	  const handleExit = reactExports.useMemo(() => createChainedFunction(elem => {
	    elem.style[computedDimension] = `${getDimensionValue(computedDimension, elem)}px`;
	    triggerBrowserReflow(elem);
	  }, onExit), [onExit, getDimensionValue, computedDimension]);
	  const handleExiting = reactExports.useMemo(() => createChainedFunction(elem => {
	    elem.style[computedDimension] = null;
	  }, onExiting), [computedDimension, onExiting]);
	  return /*#__PURE__*/jsxRuntimeExports.jsx(TransitionWrapper, {
	    ref: ref,
	    addEndListener: transitionEndListener,
	    ...props,
	    "aria-expanded": props.role ? inProp : null,
	    onEnter: handleEnter,
	    onEntering: handleEntering,
	    onEntered: handleEntered,
	    onExit: handleExit,
	    onExiting: handleExiting,
	    childRef: getChildRef(children),
	    in: inProp,
	    timeout: timeout,
	    mountOnEnter: mountOnEnter,
	    unmountOnExit: unmountOnExit,
	    appear: appear,
	    children: (state, innerProps) => /*#__PURE__*/React.cloneElement(children, {
	      ...innerProps,
	      className: classNames(className, children.props.className, collapseStyles[state], computedDimension === 'width' && 'collapse-horizontal')
	    })
	  });
	});

	// TODO: check

	const context = /*#__PURE__*/reactExports.createContext(null);
	context.displayName = 'NavbarContext';

	const NavbarCollapse = /*#__PURE__*/reactExports.forwardRef(({
	  children,
	  bsPrefix,
	  ...props
	}, ref) => {
	  bsPrefix = useBootstrapPrefix(bsPrefix, 'navbar-collapse');
	  const context$1 = reactExports.useContext(context);
	  return /*#__PURE__*/jsxRuntimeExports.jsx(Collapse, {
	    in: !!(context$1 && context$1.expanded),
	    ...props,
	    children: /*#__PURE__*/jsxRuntimeExports.jsx("div", {
	      ref: ref,
	      className: bsPrefix,
	      children: children
	    })
	  });
	});
	NavbarCollapse.displayName = 'NavbarCollapse';

	/**
	 * Creates a `Ref` whose value is updated in an effect, ensuring the most recent
	 * value is the one rendered with. Generally only required for Concurrent mode usage
	 * where previous work in `render()` may be discarded before being used.
	 *
	 * This is safe to access in an event handler.
	 *
	 * @param value The `Ref` value
	 */
	function useCommittedRef$1(value) {
	  const ref = reactExports.useRef(value);
	  reactExports.useEffect(() => {
	    ref.current = value;
	  }, [value]);
	  return ref;
	}

	function useEventCallback$1(fn) {
	  const ref = useCommittedRef$1(fn);
	  return reactExports.useCallback(function (...args) {
	    return ref.current && ref.current(...args);
	  }, [ref]);
	}

	const NavbarToggle = /*#__PURE__*/reactExports.forwardRef(({
	  bsPrefix,
	  className,
	  children,
	  label = 'Toggle navigation',
	  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
	  as: Component = 'button',
	  onClick,
	  ...props
	}, ref) => {
	  bsPrefix = useBootstrapPrefix(bsPrefix, 'navbar-toggler');
	  const {
	    onToggle,
	    expanded
	  } = reactExports.useContext(context) || {};
	  const handleClick = useEventCallback$1(e => {
	    if (onClick) onClick(e);
	    if (onToggle) onToggle();
	  });
	  if (Component === 'button') {
	    props.type = 'button';
	  }
	  return /*#__PURE__*/jsxRuntimeExports.jsx(Component, {
	    ...props,
	    ref: ref,
	    onClick: handleClick,
	    "aria-label": label,
	    className: classNames(className, bsPrefix, !expanded && 'collapsed'),
	    children: children || /*#__PURE__*/jsxRuntimeExports.jsx("span", {
	      className: `${bsPrefix}-icon`
	    })
	  });
	});
	NavbarToggle.displayName = 'NavbarToggle';

	const isReactNative$1 = typeof global !== 'undefined' &&
	// @ts-ignore
	global.navigator &&
	// @ts-ignore
	global.navigator.product === 'ReactNative';
	const isDOM$1 = typeof document !== 'undefined';

	/**
	 * Is `useLayoutEffect` in a DOM or React Native environment, otherwise resolves to useEffect
	 * Only useful to avoid the console warning.
	 *
	 * PREFER `useEffect` UNLESS YOU KNOW WHAT YOU ARE DOING.
	 *
	 * @category effects
	 */
	var useEffect = isDOM$1 || isReactNative$1 ? reactExports.useLayoutEffect : reactExports.useEffect;

	const matchersByWindow = new WeakMap();
	const getMatcher = (query, targetWindow) => {
	  if (!query || !targetWindow) return undefined;
	  const matchers = matchersByWindow.get(targetWindow) || new Map();
	  matchersByWindow.set(targetWindow, matchers);
	  let mql = matchers.get(query);
	  if (!mql) {
	    mql = targetWindow.matchMedia(query);
	    mql.refCount = 0;
	    matchers.set(mql.media, mql);
	  }
	  return mql;
	};
	/**
	 * Match a media query and get updates as the match changes. The media string is
	 * passed directly to `window.matchMedia` and run as a Layout Effect, so initial
	 * matches are returned before the browser has a chance to paint.
	 *
	 * ```tsx
	 * function Page() {
	 *   const isWide = useMediaQuery('min-width: 1000px')
	 *
	 *   return isWide ? "very wide" : 'not so wide'
	 * }
	 * ```
	 *
	 * Media query lists are also reused globally, hook calls for the same query
	 * will only create a matcher once under the hood.
	 *
	 * @param query A media query
	 * @param targetWindow The window to match against, uses the globally available one as a default.
	 */
	function useMediaQuery(query, targetWindow = typeof window === 'undefined' ? undefined : window) {
	  const mql = getMatcher(query, targetWindow);
	  const [matches, setMatches] = reactExports.useState(() => mql ? mql.matches : false);
	  useEffect(() => {
	    let mql = getMatcher(query, targetWindow);
	    if (!mql) {
	      return setMatches(false);
	    }
	    let matchers = matchersByWindow.get(targetWindow);
	    const handleChange = () => {
	      setMatches(mql.matches);
	    };
	    mql.refCount++;
	    mql.addListener(handleChange);
	    handleChange();
	    return () => {
	      mql.removeListener(handleChange);
	      mql.refCount--;
	      if (mql.refCount <= 0) {
	        matchers == null ? void 0 : matchers.delete(mql.media);
	      }
	      mql = undefined;
	    };
	  }, [query]);
	  return matches;
	}

	/**
	 * Create a responsive hook we a set of breakpoint names and widths.
	 * You can use any valid css units as well as a numbers (for pixels).
	 *
	 * **NOTE:** The object key order is important! it's assumed to be in order from smallest to largest
	 *
	 * ```ts
	 * const useBreakpoint = createBreakpointHook({
	 *  xs: 0,
	 *  sm: 576,
	 *  md: 768,
	 *  lg: 992,
	 *  xl: 1200,
	 * })
	 * ```
	 *
	 * **Watch out!** using string values will sometimes construct media queries using css `calc()` which
	 * is NOT supported in media queries by all browsers at the moment. use numbers for
	 * the widest range of browser support.
	 *
	 * @param breakpointValues A object hash of names to breakpoint dimensions
	 */
	function createBreakpointHook(breakpointValues) {
	  const names = Object.keys(breakpointValues);
	  function and(query, next) {
	    if (query === next) {
	      return next;
	    }
	    return query ? `${query} and ${next}` : next;
	  }
	  function getNext(breakpoint) {
	    return names[Math.min(names.indexOf(breakpoint) + 1, names.length - 1)];
	  }
	  function getMaxQuery(breakpoint) {
	    const next = getNext(breakpoint);
	    let value = breakpointValues[next];
	    if (typeof value === 'number') value = `${value - 0.2}px`;else value = `calc(${value} - 0.2px)`;
	    return `(max-width: ${value})`;
	  }
	  function getMinQuery(breakpoint) {
	    let value = breakpointValues[breakpoint];
	    if (typeof value === 'number') {
	      value = `${value}px`;
	    }
	    return `(min-width: ${value})`;
	  }

	  /**
	   * Match a set of breakpoints
	   *
	   * ```tsx
	   * const MidSizeOnly = () => {
	   *   const isMid = useBreakpoint({ lg: 'down', sm: 'up' });
	   *
	   *   if (isMid) return <div>On a Reasonable sized Screen!</div>
	   *   return null;
	   * }
	   * ```
	   * @param breakpointMap An object map of breakpoints and directions, queries are constructed using "and" to join
	   * breakpoints together
	   * @param window Optionally specify the target window to match against (useful when rendering into iframes)
	   */

	  /**
	   * Match a single breakpoint exactly, up, or down.
	   *
	   * ```tsx
	   * const PhoneOnly = () => {
	   *   const isSmall = useBreakpoint('sm', 'down');
	   *
	   *   if (isSmall) return <div>On a Small Screen!</div>
	   *   return null;
	   * }
	   * ```
	   *
	   * @param breakpoint The breakpoint key
	   * @param direction A direction 'up' for a max, 'down' for min, true to match only the breakpoint
	   * @param window Optionally specify the target window to match against (useful when rendering into iframes)
	   */

	  function useBreakpoint(breakpointOrMap, direction, window) {
	    let breakpointMap;
	    if (typeof breakpointOrMap === 'object') {
	      breakpointMap = breakpointOrMap;
	      window = direction;
	      direction = true;
	    } else {
	      direction = direction || true;
	      breakpointMap = {
	        [breakpointOrMap]: direction
	      };
	    }
	    let query = reactExports.useMemo(() => Object.entries(breakpointMap).reduce((query, [key, direction]) => {
	      if (direction === 'up' || direction === true) {
	        query = and(query, getMinQuery(key));
	      }
	      if (direction === 'down' || direction === true) {
	        query = and(query, getMaxQuery(key));
	      }
	      return query;
	    }, ''), [JSON.stringify(breakpointMap)]);
	    return useMediaQuery(query, window);
	  }
	  return useBreakpoint;
	}
	const useBreakpoint = createBreakpointHook({
	  xs: 0,
	  sm: 576,
	  md: 768,
	  lg: 992,
	  xl: 1200,
	  xxl: 1400
	});

	/**
	 * Returns the actively focused element safely.
	 *
	 * @param doc the document to check
	 */

	function activeElement(doc) {
	  if (doc === void 0) {
	    doc = ownerDocument();
	  }

	  // Support: IE 9 only
	  // IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
	  try {
	    var active = doc.activeElement; // IE11 returns a seemingly empty object in some cases when accessing
	    // document.activeElement from an <iframe>

	    if (!active || !active.nodeName) return null;
	    return active;
	  } catch (e) {
	    /* ie throws if no active element */
	    return doc.body;
	  }
	}

	/* eslint-disable no-bitwise, no-cond-assign */

	/**
	 * Checks if an element contains another given element.
	 * 
	 * @param context the context element
	 * @param node the element to check
	 */
	function contains(context, node) {
	  // HTML DOM and SVG DOM may have different support levels,
	  // so we need to check on context instead of a document root element.
	  if (context.contains) return context.contains(node);
	  if (context.compareDocumentPosition) return context === node || !!(context.compareDocumentPosition(node) & 16);
	}

	/**
	 * Track whether a component is current mounted. Generally less preferable than
	 * properlly canceling effects so they don't run after a component is unmounted,
	 * but helpful in cases where that isn't feasible, such as a `Promise` resolution.
	 *
	 * @returns a function that returns the current isMounted state of the component
	 *
	 * ```ts
	 * const [data, setData] = useState(null)
	 * const isMounted = useMounted()
	 *
	 * useEffect(() => {
	 *   fetchdata().then((newData) => {
	 *      if (isMounted()) {
	 *        setData(newData);
	 *      }
	 *   })
	 * })
	 * ```
	 */
	function useMounted() {
	  const mounted = reactExports.useRef(true);
	  const isMounted = reactExports.useRef(() => mounted.current);
	  reactExports.useEffect(() => {
	    mounted.current = true;
	    return () => {
	      mounted.current = false;
	    };
	  }, []);
	  return isMounted.current;
	}

	/**
	 * Returns a ref that is immediately updated with the new value
	 *
	 * @param value The Ref value
	 * @category refs
	 */
	function useUpdatedRef(value) {
	  const valueRef = reactExports.useRef(value);
	  valueRef.current = value;
	  return valueRef;
	}

	/**
	 * Attach a callback that fires when a component unmounts
	 *
	 * @param fn Handler to run when the component unmounts
	 * @deprecated Use `useMounted` and normal effects, this is not StrictMode safe
	 * @category effects
	 */
	function useWillUnmount(fn) {
	  const onUnmount = useUpdatedRef(fn);
	  reactExports.useEffect(() => () => onUnmount.current(), []);
	}

	/**
	 * Store the last of some value. Tracked via a `Ref` only updating it
	 * after the component renders.
	 *
	 * Helpful if you need to compare a prop value to it's previous value during render.
	 *
	 * ```ts
	 * function Component(props) {
	 *   const lastProps = usePrevious(props)
	 *
	 *   if (lastProps.foo !== props.foo)
	 *     resetValueFromProps(props.foo)
	 * }
	 * ```
	 *
	 * @param value the value to track
	 */
	function usePrevious(value) {
	  const ref = reactExports.useRef(null);
	  reactExports.useEffect(() => {
	    ref.current = value;
	  });
	  return ref.current;
	}

	/**
	 * Creates a `Ref` whose value is updated in an effect, ensuring the most recent
	 * value is the one rendered with. Generally only required for Concurrent mode usage
	 * where previous work in `render()` may be discarded before being used.
	 *
	 * This is safe to access in an event handler.
	 *
	 * @param value The `Ref` value
	 */
	function useCommittedRef(value) {
	  const ref = reactExports.useRef(value);
	  reactExports.useEffect(() => {
	    ref.current = value;
	  }, [value]);
	  return ref;
	}

	function useEventCallback(fn) {
	  const ref = useCommittedRef(fn);
	  return reactExports.useCallback(function (...args) {
	    return ref.current && ref.current(...args);
	  }, [ref]);
	}

	const ATTRIBUTE_PREFIX = `data-rr-ui-`;
	function dataAttr(property) {
	  return `${ATTRIBUTE_PREFIX}${property}`;
	}

	/**
	 * Get the width of the vertical window scrollbar if it's visible
	 */
	function getBodyScrollbarWidth(ownerDocument = document) {
	  const window = ownerDocument.defaultView;
	  return Math.abs(window.innerWidth - ownerDocument.documentElement.clientWidth);
	}

	const OPEN_DATA_ATTRIBUTE = dataAttr('modal-open');

	/**
	 * Manages a stack of Modals as well as ensuring
	 * body scrolling is is disabled and padding accounted for
	 */
	class ModalManager {
	  constructor({
	    ownerDocument,
	    handleContainerOverflow = true,
	    isRTL = false
	  } = {}) {
	    this.handleContainerOverflow = handleContainerOverflow;
	    this.isRTL = isRTL;
	    this.modals = [];
	    this.ownerDocument = ownerDocument;
	  }
	  getScrollbarWidth() {
	    return getBodyScrollbarWidth(this.ownerDocument);
	  }
	  getElement() {
	    return (this.ownerDocument || document).body;
	  }
	  setModalAttributes(_modal) {
	    // For overriding
	  }
	  removeModalAttributes(_modal) {
	    // For overriding
	  }
	  setContainerStyle(containerState) {
	    const style$1 = {
	      overflow: 'hidden'
	    };

	    // we are only interested in the actual `style` here
	    // because we will override it
	    const paddingProp = this.isRTL ? 'paddingLeft' : 'paddingRight';
	    const container = this.getElement();
	    containerState.style = {
	      overflow: container.style.overflow,
	      [paddingProp]: container.style[paddingProp]
	    };
	    if (containerState.scrollBarWidth) {
	      // use computed style, here to get the real padding
	      // to add our scrollbar width
	      style$1[paddingProp] = `${parseInt(style(container, paddingProp) || '0', 10) + containerState.scrollBarWidth}px`;
	    }
	    container.setAttribute(OPEN_DATA_ATTRIBUTE, '');
	    style(container, style$1);
	  }
	  reset() {
	    [...this.modals].forEach(m => this.remove(m));
	  }
	  removeContainerStyle(containerState) {
	    const container = this.getElement();
	    container.removeAttribute(OPEN_DATA_ATTRIBUTE);
	    Object.assign(container.style, containerState.style);
	  }
	  add(modal) {
	    let modalIdx = this.modals.indexOf(modal);
	    if (modalIdx !== -1) {
	      return modalIdx;
	    }
	    modalIdx = this.modals.length;
	    this.modals.push(modal);
	    this.setModalAttributes(modal);
	    if (modalIdx !== 0) {
	      return modalIdx;
	    }
	    this.state = {
	      scrollBarWidth: this.getScrollbarWidth(),
	      style: {}
	    };
	    if (this.handleContainerOverflow) {
	      this.setContainerStyle(this.state);
	    }
	    return modalIdx;
	  }
	  remove(modal) {
	    const modalIdx = this.modals.indexOf(modal);
	    if (modalIdx === -1) {
	      return;
	    }
	    this.modals.splice(modalIdx, 1);

	    // if that was the last modal in a container,
	    // clean up the container
	    if (!this.modals.length && this.handleContainerOverflow) {
	      this.removeContainerStyle(this.state);
	    }
	    this.removeModalAttributes(modal);
	  }
	  isTopModal(modal) {
	    return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
	  }
	}

	const Context = /*#__PURE__*/reactExports.createContext(canUseDOM ? window : undefined);
	Context.Provider;

	/**
	 * The document "window" placed in React context. Helpful for determining
	 * SSR context, or when rendering into an iframe.
	 *
	 * @returns the current window
	 */
	function useWindow() {
	  return reactExports.useContext(Context);
	}

	const resolveContainerRef = (ref, document) => {
	  if (!canUseDOM) return null;
	  if (ref == null) return (document || ownerDocument()).body;
	  if (typeof ref === 'function') ref = ref();
	  if (ref && 'current' in ref) ref = ref.current;
	  if (ref && ('nodeType' in ref || ref.getBoundingClientRect)) return ref;
	  return null;
	};
	function useWaitForDOMRef(ref, onResolved) {
	  const window = useWindow();
	  const [resolvedRef, setRef] = reactExports.useState(() => resolveContainerRef(ref, window == null ? void 0 : window.document));
	  if (!resolvedRef) {
	    const earlyRef = resolveContainerRef(ref);
	    if (earlyRef) setRef(earlyRef);
	  }
	  reactExports.useEffect(() => {
	  }, [onResolved, resolvedRef]);
	  reactExports.useEffect(() => {
	    const nextRef = resolveContainerRef(ref);
	    if (nextRef !== resolvedRef) {
	      setRef(nextRef);
	    }
	  }, [ref, resolvedRef]);
	  return resolvedRef;
	}

	const toFnRef = ref => !ref || typeof ref === 'function' ? ref : value => {
	  ref.current = value;
	};
	function mergeRefs(refA, refB) {
	  const a = toFnRef(refA);
	  const b = toFnRef(refB);
	  return value => {
	    if (a) a(value);
	    if (b) b(value);
	  };
	}

	/**
	 * Create and returns a single callback ref composed from two other Refs.
	 *
	 * ```tsx
	 * const Button = React.forwardRef((props, ref) => {
	 *   const [element, attachRef] = useCallbackRef<HTMLButtonElement>();
	 *   const mergedRef = useMergedRefs(ref, attachRef);
	 *
	 *   return <button ref={mergedRef} {...props}/>
	 * })
	 * ```
	 *
	 * @param refA A Callback or mutable Ref
	 * @param refB A Callback or mutable Ref
	 * @category refs
	 */
	function useMergedRefs(refA, refB) {
	  return reactExports.useMemo(() => mergeRefs(refA, refB), [refA, refB]);
	}

	const isReactNative = typeof global !== 'undefined' &&
	// @ts-ignore
	global.navigator &&
	// @ts-ignore
	global.navigator.product === 'ReactNative';
	const isDOM = typeof document !== 'undefined';

	/**
	 * Is `useLayoutEffect` in a DOM or React Native environment, otherwise resolves to useEffect
	 * Only useful to avoid the console warning.
	 *
	 * PREFER `useEffect` UNLESS YOU KNOW WHAT YOU ARE DOING.
	 *
	 * @category effects
	 */
	var useIsomorphicEffect = isDOM || isReactNative ? reactExports.useLayoutEffect : reactExports.useEffect;

	function NoopTransition({
	  children,
	  in: inProp,
	  onExited,
	  mountOnEnter,
	  unmountOnExit
	}) {
	  const ref = reactExports.useRef(null);
	  const hasEnteredRef = reactExports.useRef(inProp);
	  const handleExited = useEventCallback(onExited);
	  reactExports.useEffect(() => {
	    if (inProp) hasEnteredRef.current = true;else {
	      handleExited(ref.current);
	    }
	  }, [inProp, handleExited]);
	  const combinedRef = useMergedRefs(ref, children.ref);
	  const child = /*#__PURE__*/reactExports.cloneElement(children, {
	    ref: combinedRef
	  });
	  if (inProp) return child;
	  if (unmountOnExit) {
	    return null;
	  }
	  if (!hasEnteredRef.current && mountOnEnter) {
	    return null;
	  }
	  return child;
	}

	const _excluded$2 = ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "addEndListener", "children"];
	function _objectWithoutPropertiesLoose$2(r, e) {
	  if (null == r) return {};
	  var t = {};
	  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
	    if (e.indexOf(n) >= 0) continue;
	    t[n] = r[n];
	  }
	  return t;
	}
	/**
	 * Normalizes RTG transition callbacks with nodeRef to better support
	 * strict mode.
	 *
	 * @param props Transition props.
	 * @returns Normalized transition props.
	 */
	function useRTGTransitionProps(_ref) {
	  let {
	      onEnter,
	      onEntering,
	      onEntered,
	      onExit,
	      onExiting,
	      onExited,
	      addEndListener,
	      children
	    } = _ref,
	    props = _objectWithoutPropertiesLoose$2(_ref, _excluded$2);
	  const nodeRef = reactExports.useRef(null);
	  const mergedRef = useMergedRefs(nodeRef, getChildRef(children));
	  const normalize = callback => param => {
	    if (callback && nodeRef.current) {
	      callback(nodeRef.current, param);
	    }
	  };

	  /* eslint-disable react-hooks/exhaustive-deps */
	  const handleEnter = reactExports.useCallback(normalize(onEnter), [onEnter]);
	  const handleEntering = reactExports.useCallback(normalize(onEntering), [onEntering]);
	  const handleEntered = reactExports.useCallback(normalize(onEntered), [onEntered]);
	  const handleExit = reactExports.useCallback(normalize(onExit), [onExit]);
	  const handleExiting = reactExports.useCallback(normalize(onExiting), [onExiting]);
	  const handleExited = reactExports.useCallback(normalize(onExited), [onExited]);
	  const handleAddEndListener = reactExports.useCallback(normalize(addEndListener), [addEndListener]);
	  /* eslint-enable react-hooks/exhaustive-deps */

	  return Object.assign({}, props, {
	    nodeRef
	  }, onEnter && {
	    onEnter: handleEnter
	  }, onEntering && {
	    onEntering: handleEntering
	  }, onEntered && {
	    onEntered: handleEntered
	  }, onExit && {
	    onExit: handleExit
	  }, onExiting && {
	    onExiting: handleExiting
	  }, onExited && {
	    onExited: handleExited
	  }, addEndListener && {
	    addEndListener: handleAddEndListener
	  }, {
	    children: typeof children === 'function' ? (status, innerProps) =>
	    // TODO: Types for RTG missing innerProps, so need to cast.
	    children(status, Object.assign({}, innerProps, {
	      ref: mergedRef
	    })) : /*#__PURE__*/reactExports.cloneElement(children, {
	      ref: mergedRef
	    })
	  });
	}

	const _excluded$1 = ["component"];
	function _objectWithoutPropertiesLoose$1(r, e) {
	  if (null == r) return {};
	  var t = {};
	  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
	    if (e.indexOf(n) >= 0) continue;
	    t[n] = r[n];
	  }
	  return t;
	}
	// Normalizes Transition callbacks when nodeRef is used.
	const RTGTransition = /*#__PURE__*/reactExports.forwardRef((_ref, ref) => {
	  let {
	      component: Component
	    } = _ref,
	    props = _objectWithoutPropertiesLoose$1(_ref, _excluded$1);
	  const transitionProps = useRTGTransitionProps(props);
	  return /*#__PURE__*/jsxRuntimeExports.jsx(Component, Object.assign({
	    ref: ref
	  }, transitionProps));
	});

	function useTransition({
	  in: inProp,
	  onTransition
	}) {
	  const ref = reactExports.useRef(null);
	  const isInitialRef = reactExports.useRef(true);
	  const handleTransition = useEventCallback(onTransition);
	  useIsomorphicEffect(() => {
	    if (!ref.current) {
	      return undefined;
	    }
	    let stale = false;
	    handleTransition({
	      in: inProp,
	      element: ref.current,
	      initial: isInitialRef.current,
	      isStale: () => stale
	    });
	    return () => {
	      stale = true;
	    };
	  }, [inProp, handleTransition]);
	  useIsomorphicEffect(() => {
	    isInitialRef.current = false;
	    // this is for strict mode
	    return () => {
	      isInitialRef.current = true;
	    };
	  }, []);
	  return ref;
	}
	/**
	 * Adapts an imperative transition function to a subset of the RTG `<Transition>` component API.
	 *
	 * ImperativeTransition does not support mounting options or `appear` at the moment, meaning
	 * that it always acts like: `mountOnEnter={true} unmountOnExit={true} appear={true}`
	 */
	function ImperativeTransition({
	  children,
	  in: inProp,
	  onExited,
	  onEntered,
	  transition
	}) {
	  const [exited, setExited] = reactExports.useState(!inProp);

	  // TODO: I think this needs to be in an effect
	  if (inProp && exited) {
	    setExited(false);
	  }
	  const ref = useTransition({
	    in: !!inProp,
	    onTransition: options => {
	      const onFinish = () => {
	        if (options.isStale()) return;
	        if (options.in) {
	          onEntered == null ? void 0 : onEntered(options.element, options.initial);
	        } else {
	          setExited(true);
	          onExited == null ? void 0 : onExited(options.element);
	        }
	      };
	      Promise.resolve(transition(options)).then(onFinish, error => {
	        if (!options.in) setExited(true);
	        throw error;
	      });
	    }
	  });
	  const combinedRef = useMergedRefs(ref, children.ref);
	  return exited && !inProp ? null : /*#__PURE__*/reactExports.cloneElement(children, {
	    ref: combinedRef
	  });
	}
	function renderTransition(component, runTransition, props) {
	  if (component) {
	    return /*#__PURE__*/jsxRuntimeExports.jsx(RTGTransition, Object.assign({}, props, {
	      component: component
	    }));
	  }
	  if (runTransition) {
	    return /*#__PURE__*/jsxRuntimeExports.jsx(ImperativeTransition, Object.assign({}, props, {
	      transition: runTransition
	    }));
	  }
	  return /*#__PURE__*/jsxRuntimeExports.jsx(NoopTransition, Object.assign({}, props));
	}

	const _excluded = ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "runTransition", "backdropTransition", "runBackdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"];
	function _objectWithoutPropertiesLoose(r, e) {
	  if (null == r) return {};
	  var t = {};
	  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
	    if (e.indexOf(n) >= 0) continue;
	    t[n] = r[n];
	  }
	  return t;
	}
	let manager;

	/*
	  Modal props are split into a version with and without index signature so that you can fully use them in another projects
	  This is due to Typescript not playing well with index signatures e.g. when using Omit
	*/

	function getManager(window) {
	  if (!manager) manager = new ModalManager({
	    ownerDocument: window == null ? void 0 : window.document
	  });
	  return manager;
	}
	function useModalManager(provided) {
	  const window = useWindow();
	  const modalManager = provided || getManager(window);
	  const modal = reactExports.useRef({
	    dialog: null,
	    backdrop: null
	  });
	  return Object.assign(modal.current, {
	    add: () => modalManager.add(modal.current),
	    remove: () => modalManager.remove(modal.current),
	    isTopModal: () => modalManager.isTopModal(modal.current),
	    setDialogRef: reactExports.useCallback(ref => {
	      modal.current.dialog = ref;
	    }, []),
	    setBackdropRef: reactExports.useCallback(ref => {
	      modal.current.backdrop = ref;
	    }, [])
	  });
	}
	const Modal = /*#__PURE__*/reactExports.forwardRef((_ref, ref) => {
	  let {
	      show = false,
	      role = 'dialog',
	      className,
	      style,
	      children,
	      backdrop = true,
	      keyboard = true,
	      onBackdropClick,
	      onEscapeKeyDown,
	      transition,
	      runTransition,
	      backdropTransition,
	      runBackdropTransition,
	      autoFocus = true,
	      enforceFocus = true,
	      restoreFocus = true,
	      restoreFocusOptions,
	      renderDialog,
	      renderBackdrop = props => /*#__PURE__*/jsxRuntimeExports.jsx("div", Object.assign({}, props)),
	      manager: providedManager,
	      container: containerRef,
	      onShow,
	      onHide = () => {},
	      onExit,
	      onExited,
	      onExiting,
	      onEnter,
	      onEntering,
	      onEntered
	    } = _ref,
	    rest = _objectWithoutPropertiesLoose(_ref, _excluded);
	  const ownerWindow = useWindow();
	  const container = useWaitForDOMRef(containerRef);
	  const modal = useModalManager(providedManager);
	  const isMounted = useMounted();
	  const prevShow = usePrevious(show);
	  const [exited, setExited] = reactExports.useState(!show);
	  const lastFocusRef = reactExports.useRef(null);
	  reactExports.useImperativeHandle(ref, () => modal, [modal]);
	  if (canUseDOM && !prevShow && show) {
	    lastFocusRef.current = activeElement(ownerWindow == null ? void 0 : ownerWindow.document);
	  }

	  // TODO: I think this needs to be in an effect
	  if (show && exited) {
	    setExited(false);
	  }
	  const handleShow = useEventCallback(() => {
	    modal.add();
	    removeKeydownListenerRef.current = listen(document, 'keydown', handleDocumentKeyDown);
	    removeFocusListenerRef.current = listen(document, 'focus',
	    // the timeout is necessary b/c this will run before the new modal is mounted
	    // and so steals focus from it
	    () => setTimeout(handleEnforceFocus), true);
	    if (onShow) {
	      onShow();
	    }

	    // autofocus after onShow to not trigger a focus event for previous
	    // modals before this one is shown.
	    if (autoFocus) {
	      var _modal$dialog$ownerDo, _modal$dialog;
	      const currentActiveElement = activeElement((_modal$dialog$ownerDo = (_modal$dialog = modal.dialog) == null ? void 0 : _modal$dialog.ownerDocument) != null ? _modal$dialog$ownerDo : ownerWindow == null ? void 0 : ownerWindow.document);
	      if (modal.dialog && currentActiveElement && !contains(modal.dialog, currentActiveElement)) {
	        lastFocusRef.current = currentActiveElement;
	        modal.dialog.focus();
	      }
	    }
	  });
	  const handleHide = useEventCallback(() => {
	    modal.remove();
	    removeKeydownListenerRef.current == null ? void 0 : removeKeydownListenerRef.current();
	    removeFocusListenerRef.current == null ? void 0 : removeFocusListenerRef.current();
	    if (restoreFocus) {
	      var _lastFocusRef$current;
	      // Support: <=IE11 doesn't support `focus()` on svg elements (RB: #917)
	      (_lastFocusRef$current = lastFocusRef.current) == null ? void 0 : _lastFocusRef$current.focus == null ? void 0 : _lastFocusRef$current.focus(restoreFocusOptions);
	      lastFocusRef.current = null;
	    }
	  });

	  // TODO: try and combine these effects: https://github.com/react-bootstrap/react-overlays/pull/794#discussion_r409954120

	  // Show logic when:
	  //  - show is `true` _and_ `container` has resolved
	  reactExports.useEffect(() => {
	    if (!show || !container) return;
	    handleShow();
	  }, [show, container, /* should never change: */handleShow]);

	  // Hide cleanup logic when:
	  //  - `exited` switches to true
	  //  - component unmounts;
	  reactExports.useEffect(() => {
	    if (!exited) return;
	    handleHide();
	  }, [exited, handleHide]);
	  useWillUnmount(() => {
	    handleHide();
	  });

	  // --------------------------------

	  const handleEnforceFocus = useEventCallback(() => {
	    if (!enforceFocus || !isMounted() || !modal.isTopModal()) {
	      return;
	    }
	    const currentActiveElement = activeElement(ownerWindow == null ? void 0 : ownerWindow.document);
	    if (modal.dialog && currentActiveElement && !contains(modal.dialog, currentActiveElement)) {
	      modal.dialog.focus();
	    }
	  });
	  const handleBackdropClick = useEventCallback(e => {
	    if (e.target !== e.currentTarget) {
	      return;
	    }
	    onBackdropClick == null ? void 0 : onBackdropClick(e);
	    if (backdrop === true) {
	      onHide();
	    }
	  });
	  const handleDocumentKeyDown = useEventCallback(e => {
	    if (keyboard && isEscKey(e) && modal.isTopModal()) {
	      onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(e);
	      if (!e.defaultPrevented) {
	        onHide();
	      }
	    }
	  });
	  const removeFocusListenerRef = reactExports.useRef();
	  const removeKeydownListenerRef = reactExports.useRef();
	  const handleHidden = (...args) => {
	    setExited(true);
	    onExited == null ? void 0 : onExited(...args);
	  };
	  if (!container) {
	    return null;
	  }
	  const dialogProps = Object.assign({
	    role,
	    ref: modal.setDialogRef,
	    // apparently only works on the dialog role element
	    'aria-modal': role === 'dialog' ? true : undefined
	  }, rest, {
	    style,
	    className,
	    tabIndex: -1
	  });
	  let dialog = renderDialog ? renderDialog(dialogProps) : /*#__PURE__*/jsxRuntimeExports.jsx("div", Object.assign({}, dialogProps, {
	    children: /*#__PURE__*/reactExports.cloneElement(children, {
	      role: 'document'
	    })
	  }));
	  dialog = renderTransition(transition, runTransition, {
	    unmountOnExit: true,
	    mountOnEnter: true,
	    appear: true,
	    in: !!show,
	    onExit,
	    onExiting,
	    onExited: handleHidden,
	    onEnter,
	    onEntering,
	    onEntered,
	    children: dialog
	  });
	  let backdropElement = null;
	  if (backdrop) {
	    backdropElement = renderBackdrop({
	      ref: modal.setBackdropRef,
	      onClick: handleBackdropClick
	    });
	    backdropElement = renderTransition(backdropTransition, runBackdropTransition, {
	      in: !!show,
	      appear: true,
	      mountOnEnter: true,
	      unmountOnExit: true,
	      children: backdropElement
	    });
	  }
	  return /*#__PURE__*/jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
	    children: /*#__PURE__*/ReactDOM.createPortal(/*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
	      children: [backdropElement, dialog]
	    }), container)
	  });
	});
	Modal.displayName = 'Modal';
	var BaseModal = Object.assign(Modal, {
	  Manager: ModalManager
	});

	const fadeStyles = {
	  [ENTERING]: 'show',
	  [ENTERED]: 'show'
	};
	const Fade = /*#__PURE__*/reactExports.forwardRef(({
	  className,
	  children,
	  transitionClasses = {},
	  onEnter,
	  ...rest
	}, ref) => {
	  const props = {
	    in: false,
	    timeout: 300,
	    mountOnEnter: false,
	    unmountOnExit: false,
	    appear: false,
	    ...rest
	  };
	  const handleEnter = reactExports.useCallback((node, isAppearing) => {
	    triggerBrowserReflow(node);
	    onEnter == null || onEnter(node, isAppearing);
	  }, [onEnter]);
	  return /*#__PURE__*/jsxRuntimeExports.jsx(TransitionWrapper, {
	    ref: ref,
	    addEndListener: transitionEndListener,
	    ...props,
	    onEnter: handleEnter,
	    childRef: getChildRef(children),
	    children: (status, innerProps) => /*#__PURE__*/reactExports.cloneElement(children, {
	      ...innerProps,
	      className: classNames('fade', className, children.props.className, fadeStyles[status], transitionClasses[status])
	    })
	  });
	});
	Fade.displayName = 'Fade';

	const OffcanvasBody = /*#__PURE__*/reactExports.forwardRef(({
	  className,
	  bsPrefix,
	  as: Component = 'div',
	  ...props
	}, ref) => {
	  bsPrefix = useBootstrapPrefix(bsPrefix, 'offcanvas-body');
	  return /*#__PURE__*/jsxRuntimeExports.jsx(Component, {
	    ref: ref,
	    className: classNames(className, bsPrefix),
	    ...props
	  });
	});
	OffcanvasBody.displayName = 'OffcanvasBody';

	const transitionStyles = {
	  [ENTERING]: 'show',
	  [ENTERED]: 'show'
	};
	const OffcanvasToggling = /*#__PURE__*/reactExports.forwardRef(({
	  bsPrefix,
	  className,
	  children,
	  in: inProp = false,
	  mountOnEnter = false,
	  unmountOnExit = false,
	  appear = false,
	  ...props
	}, ref) => {
	  bsPrefix = useBootstrapPrefix(bsPrefix, 'offcanvas');
	  return /*#__PURE__*/jsxRuntimeExports.jsx(TransitionWrapper, {
	    ref: ref,
	    addEndListener: transitionEndListener,
	    in: inProp,
	    mountOnEnter: mountOnEnter,
	    unmountOnExit: unmountOnExit,
	    appear: appear,
	    ...props,
	    childRef: getChildRef(children),
	    children: (status, innerProps) => /*#__PURE__*/reactExports.cloneElement(children, {
	      ...innerProps,
	      className: classNames(className, children.props.className, (status === ENTERING || status === EXITING) && `${bsPrefix}-toggling`, transitionStyles[status])
	    })
	  });
	});
	OffcanvasToggling.displayName = 'OffcanvasToggling';

	const ModalContext = /*#__PURE__*/reactExports.createContext({
	  // eslint-disable-next-line @typescript-eslint/no-empty-function
	  onHide() {}
	});

	const propTypes = {
	  /** An accessible label indicating the relevant information about the Close Button. */
	  'aria-label': PropTypes.string,
	  /** A callback fired after the Close Button is clicked. */
	  onClick: PropTypes.func,
	  /**
	   * Render different color variant for the button.
	   *
	   * Omitting this will render the default dark color.
	   */
	  variant: PropTypes.oneOf(['white'])
	};
	const CloseButton = /*#__PURE__*/reactExports.forwardRef(({
	  className,
	  variant,
	  'aria-label': ariaLabel = 'Close',
	  ...props
	}, ref) => /*#__PURE__*/jsxRuntimeExports.jsx("button", {
	  ref: ref,
	  type: "button",
	  className: classNames('btn-close', variant && `btn-close-${variant}`, className),
	  "aria-label": ariaLabel,
	  ...props
	}));
	CloseButton.displayName = 'CloseButton';
	CloseButton.propTypes = propTypes;

	const AbstractModalHeader = /*#__PURE__*/reactExports.forwardRef(({
	  closeLabel = 'Close',
	  closeVariant,
	  closeButton = false,
	  onHide,
	  children,
	  ...props
	}, ref) => {
	  const context = reactExports.useContext(ModalContext);
	  const handleClick = useEventCallback$1(() => {
	    context == null || context.onHide();
	    onHide == null || onHide();
	  });
	  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
	    ref: ref,
	    ...props,
	    children: [children, closeButton && /*#__PURE__*/jsxRuntimeExports.jsx(CloseButton, {
	      "aria-label": closeLabel,
	      variant: closeVariant,
	      onClick: handleClick
	    })]
	  });
	});

	const OffcanvasHeader = /*#__PURE__*/reactExports.forwardRef(({
	  bsPrefix,
	  className,
	  closeLabel = 'Close',
	  closeButton = false,
	  ...props
	}, ref) => {
	  bsPrefix = useBootstrapPrefix(bsPrefix, 'offcanvas-header');
	  return /*#__PURE__*/jsxRuntimeExports.jsx(AbstractModalHeader, {
	    ref: ref,
	    ...props,
	    className: classNames(className, bsPrefix),
	    closeLabel: closeLabel,
	    closeButton: closeButton
	  });
	});
	OffcanvasHeader.displayName = 'OffcanvasHeader';

	var divWithClassName = className => /*#__PURE__*/reactExports.forwardRef((p, ref) => /*#__PURE__*/jsxRuntimeExports.jsx("div", {
	  ...p,
	  ref: ref,
	  className: classNames(p.className, className)
	}));

	const DivStyledAsH5 = divWithClassName('h5');
	const OffcanvasTitle = /*#__PURE__*/reactExports.forwardRef(({
	  className,
	  bsPrefix,
	  as: Component = DivStyledAsH5,
	  ...props
	}, ref) => {
	  bsPrefix = useBootstrapPrefix(bsPrefix, 'offcanvas-title');
	  return /*#__PURE__*/jsxRuntimeExports.jsx(Component, {
	    ref: ref,
	    className: classNames(className, bsPrefix),
	    ...props
	  });
	});
	OffcanvasTitle.displayName = 'OffcanvasTitle';

	/**
	 * Checks if a given element has a CSS class.
	 * 
	 * @param element the element
	 * @param className the CSS class name
	 */
	function hasClass(element, className) {
	  if (element.classList) return element.classList.contains(className);
	  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
	}

	/**
	 * Adds a CSS class to a given element.
	 * 
	 * @param element the element
	 * @param className the CSS class name
	 */

	function addClass(element, className) {
	  if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
	}

	var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
	/**
	 * Runs `querySelectorAll` on a given element.
	 * 
	 * @param element the element
	 * @param selector the selector
	 */

	function qsa(element, selector) {
	  return toArray(element.querySelectorAll(selector));
	}

	function replaceClassName(origClass, classToRemove) {
	  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
	}
	/**
	 * Removes a CSS class from a given element.
	 * 
	 * @param element the element
	 * @param className the CSS class name
	 */

	function removeClass(element, className) {
	  if (element.classList) {
	    element.classList.remove(className);
	  } else if (typeof element.className === 'string') {
	    element.className = replaceClassName(element.className, className);
	  } else {
	    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
	  }
	}

	const Selector = {
	  FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
	  STICKY_CONTENT: '.sticky-top',
	  NAVBAR_TOGGLER: '.navbar-toggler'
	};
	class BootstrapModalManager extends ModalManager {
	  adjustAndStore(prop, element, adjust) {
	    const actual = element.style[prop];
	    // TODO: DOMStringMap and CSSStyleDeclaration aren't strictly compatible
	    // @ts-ignore
	    element.dataset[prop] = actual;
	    style(element, {
	      [prop]: `${parseFloat(style(element, prop)) + adjust}px`
	    });
	  }
	  restore(prop, element) {
	    const value = element.dataset[prop];
	    if (value !== undefined) {
	      delete element.dataset[prop];
	      style(element, {
	        [prop]: value
	      });
	    }
	  }
	  setContainerStyle(containerState) {
	    super.setContainerStyle(containerState);
	    const container = this.getElement();
	    addClass(container, 'modal-open');
	    if (!containerState.scrollBarWidth) return;
	    const paddingProp = this.isRTL ? 'paddingLeft' : 'paddingRight';
	    const marginProp = this.isRTL ? 'marginLeft' : 'marginRight';
	    qsa(container, Selector.FIXED_CONTENT).forEach(el => this.adjustAndStore(paddingProp, el, containerState.scrollBarWidth));
	    qsa(container, Selector.STICKY_CONTENT).forEach(el => this.adjustAndStore(marginProp, el, -containerState.scrollBarWidth));
	    qsa(container, Selector.NAVBAR_TOGGLER).forEach(el => this.adjustAndStore(marginProp, el, containerState.scrollBarWidth));
	  }
	  removeContainerStyle(containerState) {
	    super.removeContainerStyle(containerState);
	    const container = this.getElement();
	    removeClass(container, 'modal-open');
	    const paddingProp = this.isRTL ? 'paddingLeft' : 'paddingRight';
	    const marginProp = this.isRTL ? 'marginLeft' : 'marginRight';
	    qsa(container, Selector.FIXED_CONTENT).forEach(el => this.restore(paddingProp, el));
	    qsa(container, Selector.STICKY_CONTENT).forEach(el => this.restore(marginProp, el));
	    qsa(container, Selector.NAVBAR_TOGGLER).forEach(el => this.restore(marginProp, el));
	  }
	}
	let sharedManager;
	function getSharedManager(options) {
	  if (!sharedManager) sharedManager = new BootstrapModalManager(options);
	  return sharedManager;
	}

	function DialogTransition(props) {
	  return /*#__PURE__*/jsxRuntimeExports.jsx(OffcanvasToggling, {
	    ...props
	  });
	}
	function BackdropTransition(props) {
	  return /*#__PURE__*/jsxRuntimeExports.jsx(Fade, {
	    ...props
	  });
	}
	const Offcanvas = /*#__PURE__*/reactExports.forwardRef(({
	  bsPrefix,
	  className,
	  children,
	  'aria-labelledby': ariaLabelledby,
	  placement = 'start',
	  responsive,
	  /* BaseModal props */

	  show = false,
	  backdrop = true,
	  keyboard = true,
	  scroll = false,
	  onEscapeKeyDown,
	  onShow,
	  onHide,
	  container,
	  autoFocus = true,
	  enforceFocus = true,
	  restoreFocus = true,
	  restoreFocusOptions,
	  onEntered,
	  onExit,
	  onExiting,
	  onEnter,
	  onEntering,
	  onExited,
	  backdropClassName,
	  manager: propsManager,
	  renderStaticNode = false,
	  ...props
	}, ref) => {
	  const modalManager = reactExports.useRef();
	  bsPrefix = useBootstrapPrefix(bsPrefix, 'offcanvas');
	  const [showOffcanvas, setShowOffcanvas] = reactExports.useState(false);
	  const handleHide = useEventCallback$1(onHide);
	  const hideResponsiveOffcanvas = useBreakpoint(responsive || 'xs', 'up');
	  reactExports.useEffect(() => {
	    // Handles the case where screen is resized while the responsive
	    // offcanvas is shown. If `responsive` not provided, just use `show`.
	    setShowOffcanvas(responsive ? show && !hideResponsiveOffcanvas : show);
	  }, [show, responsive, hideResponsiveOffcanvas]);
	  const modalContext = reactExports.useMemo(() => ({
	    onHide: handleHide
	  }), [handleHide]);
	  function getModalManager() {
	    if (propsManager) return propsManager;
	    if (scroll) {
	      // Have to use a different modal manager since the shared
	      // one handles overflow.
	      if (!modalManager.current) modalManager.current = new BootstrapModalManager({
	        handleContainerOverflow: false
	      });
	      return modalManager.current;
	    }
	    return getSharedManager();
	  }
	  const handleEnter = (node, ...args) => {
	    if (node) node.style.visibility = 'visible';
	    onEnter == null || onEnter(node, ...args);
	  };
	  const handleExited = (node, ...args) => {
	    if (node) node.style.visibility = '';
	    onExited == null || onExited(...args);
	  };
	  const renderBackdrop = reactExports.useCallback(backdropProps => /*#__PURE__*/jsxRuntimeExports.jsx("div", {
	    ...backdropProps,
	    className: classNames(`${bsPrefix}-backdrop`, backdropClassName)
	  }), [backdropClassName, bsPrefix]);
	  const renderDialog = dialogProps => /*#__PURE__*/jsxRuntimeExports.jsx("div", {
	    ...dialogProps,
	    ...props,
	    className: classNames(className, responsive ? `${bsPrefix}-${responsive}` : bsPrefix, `${bsPrefix}-${placement}`),
	    "aria-labelledby": ariaLabelledby,
	    children: children
	  });
	  return /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
	    children: [!showOffcanvas && (responsive || renderStaticNode) && renderDialog({}), /*#__PURE__*/jsxRuntimeExports.jsx(ModalContext.Provider, {
	      value: modalContext,
	      children: /*#__PURE__*/jsxRuntimeExports.jsx(BaseModal, {
	        show: showOffcanvas,
	        ref: ref,
	        backdrop: backdrop,
	        container: container,
	        keyboard: keyboard,
	        autoFocus: autoFocus,
	        enforceFocus: enforceFocus && !scroll,
	        restoreFocus: restoreFocus,
	        restoreFocusOptions: restoreFocusOptions,
	        onEscapeKeyDown: onEscapeKeyDown,
	        onShow: onShow,
	        onHide: handleHide,
	        onEnter: handleEnter,
	        onEntering: onEntering,
	        onEntered: onEntered,
	        onExit: onExit,
	        onExiting: onExiting,
	        onExited: handleExited,
	        manager: getModalManager(),
	        transition: DialogTransition,
	        backdropTransition: BackdropTransition,
	        renderBackdrop: renderBackdrop,
	        renderDialog: renderDialog
	      })
	    })]
	  });
	});
	Offcanvas.displayName = 'Offcanvas';
	var Offcanvas$1 = Object.assign(Offcanvas, {
	  Body: OffcanvasBody,
	  Header: OffcanvasHeader,
	  Title: OffcanvasTitle
	});

	const NavbarOffcanvas = /*#__PURE__*/reactExports.forwardRef(({
	  onHide,
	  ...props
	}, ref) => {
	  const context$1 = reactExports.useContext(context);
	  const handleHide = useEventCallback$1(() => {
	    context$1 == null || context$1.onToggle == null || context$1.onToggle();
	    onHide == null || onHide();
	  });
	  return /*#__PURE__*/jsxRuntimeExports.jsx(Offcanvas$1, {
	    ref: ref,
	    show: !!(context$1 != null && context$1.expanded),
	    ...props,
	    renderStaticNode: true,
	    onHide: handleHide
	  });
	});
	NavbarOffcanvas.displayName = 'NavbarOffcanvas';

	const NavbarText = /*#__PURE__*/reactExports.forwardRef(({
	  className,
	  bsPrefix,
	  as: Component = 'span',
	  ...props
	}, ref) => {
	  bsPrefix = useBootstrapPrefix(bsPrefix, 'navbar-text');
	  return /*#__PURE__*/jsxRuntimeExports.jsx(Component, {
	    ref: ref,
	    className: classNames(className, bsPrefix),
	    ...props
	  });
	});
	NavbarText.displayName = 'NavbarText';

	const Navbar = /*#__PURE__*/reactExports.forwardRef((props, ref) => {
	  const {
	    bsPrefix: initialBsPrefix,
	    expand = true,
	    variant = 'light',
	    bg,
	    fixed,
	    sticky,
	    className,
	    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
	    as: Component = 'nav',
	    expanded,
	    onToggle,
	    onSelect,
	    collapseOnSelect = false,
	    ...controlledProps
	  } = useUncontrolled(props, {
	    expanded: 'onToggle'
	  });
	  const bsPrefix = useBootstrapPrefix(initialBsPrefix, 'navbar');
	  const handleCollapse = reactExports.useCallback((...args) => {
	    onSelect == null || onSelect(...args);
	    if (collapseOnSelect && expanded) {
	      onToggle == null || onToggle(false);
	    }
	  }, [onSelect, collapseOnSelect, expanded, onToggle]);

	  // will result in some false positives but that seems better
	  // than false negatives. strict `undefined` check allows explicit
	  // "nulling" of the role if the user really doesn't want one
	  if (controlledProps.role === undefined && Component !== 'nav') {
	    controlledProps.role = 'navigation';
	  }
	  let expandClass = `${bsPrefix}-expand`;
	  if (typeof expand === 'string') expandClass = `${expandClass}-${expand}`;
	  const navbarContext = reactExports.useMemo(() => ({
	    onToggle: () => onToggle == null ? void 0 : onToggle(!expanded),
	    bsPrefix,
	    expanded: !!expanded,
	    expand
	  }), [bsPrefix, expanded, expand, onToggle]);
	  return /*#__PURE__*/jsxRuntimeExports.jsx(context.Provider, {
	    value: navbarContext,
	    children: /*#__PURE__*/jsxRuntimeExports.jsx(SelectableContext.Provider, {
	      value: handleCollapse,
	      children: /*#__PURE__*/jsxRuntimeExports.jsx(Component, {
	        ref: ref,
	        ...controlledProps,
	        className: classNames(className, bsPrefix, expand && expandClass, variant && `${bsPrefix}-${variant}`, bg && `bg-${bg}`, sticky && `sticky-${sticky}`, fixed && `fixed-${fixed}`)
	      })
	    })
	  });
	});
	Navbar.displayName = 'Navbar';
	var Navbar$1 = Object.assign(Navbar, {
	  Brand: NavbarBrand,
	  Collapse: NavbarCollapse,
	  Offcanvas: NavbarOffcanvas,
	  Text: NavbarText,
	  Toggle: NavbarToggle
	});

	const Container = /*#__PURE__*/reactExports.forwardRef(({
	  bsPrefix,
	  fluid = false,
	  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
	  as: Component = 'div',
	  className,
	  ...props
	}, ref) => {
	  const prefix = useBootstrapPrefix(bsPrefix, 'container');
	  const suffix = typeof fluid === 'string' ? `-${fluid}` : '-fluid';
	  return /*#__PURE__*/jsxRuntimeExports.jsx(Component, {
	    ref: ref,
	    ...props,
	    className: classNames(className, fluid ? `${prefix}${suffix}` : prefix)
	  });
	});
	Container.displayName = 'Container';

	function caseReducer(state = {}, action) {
	  // console.log(action);
	  switch (action.type) {
	    case "SEED_STATE":
	      {
	        return produce(state, draft => {
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
	      return produce(state, draft => {
	        draft[action.payload.arrayName] = action.payload.arrayItems;
	      });
	    case "LOAD_DATA":
	      return produce(state, draft => {
	        draft.data = action.payload.data;
	        draft.protoData = action.payload.protoData;
	        draft.expandView = true;
	      });
	    case "NEW_EMPTY_SPREADSHEET":
	      {
	        return produce(state, draft => {
	          draft.data = action.payload.data;
	          draft.protoData = action.payload.protoData;
	          draft.formulaValue = action.payload.protoData[0][0];
	          draft.expandView = true;
	        });
	      }
	    case "UPDATE_FORMULA":
	      return produce(state, draft => {
	        draft.formulaValue = action.payload.formulaValue;
	        draft.formulaRowIndex = action.payload.formulaRowIndex;
	        draft.formulaColumnIndex = action.payload.formulaColumnIndex;
	        draft.formulaIsInFocus = false;
	      });
	    case "SAVE_CELL_AND_SET_NEXT_CELL_ACTIVE":
	      return produce(state, draft => {
	        draft.data = action.payload.data;
	        draft.protoData = action.payload.protoData;
	        // action.payload.value
	        draft.formulaValue = action.payload.formulaValue;
	        draft.formulaRowIndex = action.payload.formulaRowIndex;
	        draft.formulaColumnIndex = action.payload.formulaColumnIndex;
	      });
	    case "SET_STORE_OBJECT":
	      return produce(state, draft => {
	        draft[action.payload.key] = action.payload.value;
	      });
	    case "PUSH_ITEM_TO_ARRAY":
	      return produce(state, draft => {
	        draft[action.payload.arrayName].push(action.payload.item);
	      });
	    default:
	      return state;
	  }
	}
	function transactionsListFull(bookrecords) {
	  let markup = Array.isArray(bookrecords) && bookrecords.length > 0 ? `<table class="table">
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">Дебет</th>
    <th scope="col">Кредит</th>
    <th scope="col">Сумма</th>
    <th scope="col">Период</th>
  </tr>
</thead>
<tbody>
  ` + bookrecords.map((item, index) => {
	    return `
      <tr>
    <th scope="row">${index + 1}</th>
    <td>${item?.d}</td>
    <td>${item?.k}</td>
    <td>${item?.sum}</td>
     <td>${item?.period}</td>
  </tr>
  <tr>
  <th scope='row'>Ком</th>
  <td colspan='4'>${!!item?.comment ? item.comment : ""}</td>
  </tr>
  `;
	  }).join("") + `
  </tbody>
</table> 
  ` : "";
	  return markup;
	}
	function transactionsList(bookrecords) {
	  let markup = Array.isArray(bookrecords) && bookrecords.length > 0 ? `<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Дебет</th>
      <th scope="col">Кредит</th>      
    </tr>
  </thead>
  <tbody>
    ` + bookrecords.map((item, index) => {
	    return `
        <tr>
      <th scope="row">${index + 1}</th>
    
      <td>${item.d}</td>
      <td>${item.k}</td>
    
    </tr>
    <tr>
    <th scope='row'>Ком</th>
    <td colspan='2'>${!!item?.comment ? item.comment : ""}</td>
    </tr>
    `;
	  }).join("") + `
    </tbody>
</table> 
    ` : "";

	  // console.log(markup);
	  return markup;
	}
	function SaveMyRecords({
	  state
	}) {
	  console.log(state);
	  let {
	    curretProjectId,
	    userEmail,
	    bookrecords,
	    allaccountingrecords,
	    user,
	    email,
	    avatarUrl,
	    title
	    // theme
	  } = state;
	  // let { id, title, theme } = state.posts.find(post => post.id === state.curretProjectId)
	  // console.log(state.posts.find(state.posts.find(post => post.id === state.curretProjectId)));

	  function onSave() {
	    let currentDay = new Intl.DateTimeFormat("en", {
	      weekday: "short",
	      year: "numeric",
	      month: "short",
	      day: "numeric"
	    }).format(new Date()).replace(/[^a-zA-Z0-9]/g, "_");
	    let currentDayObject = {
	      id: curretProjectId + userEmail,
	      email: email,
	      user: user,
	      type: "html",
	      avatarUrl: !!avatarUrl ? avatarUrl : null,
	      timestamp: +Date.now(),
	      theme: "Изученные проводки",
	      title: "Проводки по кейсу " + user + " " + title
	    };
	    let updates = {};
	    updates["/usersCraft/" + userEmail + "/posts/" + curretProjectId + "/mediaItems/0/"] = {
	      comment: "Проводки проекта",
	      content: transactionsListFull(bookrecords),
	      mediaType: "html"
	    };
	    updates["/usersCraft/" + userEmail + "/posts/" + curretProjectId + "/bookrecords"] = bookrecords;
	    let htmlPost = {
	      answer: "",
	      comment: "Проводки",
	      quizString: "",
	      deleted: false,
	      email: state?.email,
	      user: state?.user,
	      avatarUrl: !!state?.avatarUrl ? avatarUrl : null,
	      date: new Intl.DateTimeFormat("ru", {
	        weekday: "short",
	        year: "numeric",
	        month: "short",
	        day: "numeric",
	        hour: "numeric",
	        minute: "numeric"
	      }).format(new Date()) //Date().toJSON()
	    };
	    updates["/usersCraft/" + userEmail + "/posts/" + curretProjectId + userEmail] = {
	      ...htmlPost,
	      id: curretProjectId + userEmail,
	      theme: "Изученные проводки",
	      title: "Проводки по кейсу " + user + " " + title,
	      content: transactionsListFull(bookrecords),
	      type: "html"
	    };
	    updates["/usersCraft/" + userEmail + "/posts/accounting"] = {
	      ...htmlPost,
	      id: "accounting",
	      theme: "Изученные проводки",
	      title: "Список проводок",
	      allbookrecords: allaccountingrecords,
	      content: transactionsList(allaccountingrecords),
	      type: "html"
	    };
	    updates["currentDay/" + currentDay + "/posts/" + currentDayObject.id] = currentDayObject;
	    // updates["/openmedia/" + idPost] = postObject;
	    // updates["/usersTemplates/projects/" + userEmail + "/" + idPost] =
	    //   postObject;

	    basicfirebasecrudservices.updateFirebaseNode(updates).then(() => console.log("Done"));
	  }
	  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
	    variant: "outline-secondary m-1",
	    size: "sm",
	    onClick: onSave
	  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043F\u0440\u043E\u0432\u043E\u0434\u043A\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0430"));
	}
	function loadState() {
	  try {
	    const serializedState = localStorage.getItem("econolabs");
	    if (serializedState === null) {
	      return undefined;
	    }
	    return JSON.parse(serializedState);
	  } catch (err) {
	    return undefined;
	  }
	}
	function timeout(ms) {
	  return new Promise(resolve => setTimeout(resolve, ms));
	}
	function AccountingMachine({
	  dispatch,
	  state
	}) {
	  async function handleSubmit(e) {
	    e.preventDefault();
	    const currentTarget = e.currentTarget;
	    const formdata = new FormData(currentTarget);
	    let {
	      d,
	      k,
	      comment,
	      sum,
	      period
	    } = Object.fromEntries(formdata);
	    if (d.length > 1 && k.length > 1 && sum.length > 0 && period.length > 1) {
	      console.log(d, k, comment);
	      dispatch({
	        type: "PUSH_ITEM_TO_ARRAY",
	        payload: {
	          arrayName: "bookrecords",
	          item: {
	            d,
	            k,
	            comment,
	            sum,
	            period
	          }
	        }
	      });
	      let found = Array.isArray(state?.allaccountingrecords) && state.allaccountingrecords.find(item => item.d === d && item.k === k);
	      if (!found) {
	        console.log("Adding " + d + " " + k + " to allaccountingrecords");
	        dispatch({
	          type: "PUSH_ITEM_TO_ARRAY",
	          payload: {
	            arrayName: "allaccountingrecords",
	            item: {
	              d,
	              k,
	              comment
	            }
	          }
	        });
	      }
	    }
	    timeout(275).then(() => {
	      currentTarget.reset();
	    });
	  }
	  return /*#__PURE__*/React.createElement(Form$1, {
	    onSubmit: handleSubmit
	  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, null, state?.theme), /*#__PURE__*/React.createElement(Col, null, state?.title)), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, null, /*#__PURE__*/React.createElement(Form$1.Group, {
	    className: "m-1",
	    controlId: "d"
	  }, /*#__PURE__*/React.createElement(Form$1.Label, null, "\u0414\u0435\u0431\u0435\u0442"), /*#__PURE__*/React.createElement(Form$1.Control, {
	    type: "text",
	    placeholder: "\u0414\u0435\u0431\u0435\u0442",
	    name: "d"
	  }))), /*#__PURE__*/React.createElement(Col, null, /*#__PURE__*/React.createElement(Form$1.Group, {
	    className: "m-1",
	    controlId: "k"
	  }, /*#__PURE__*/React.createElement(Form$1.Label, null, "\u041A\u0440\u0435\u0434\u0438\u0442"), /*#__PURE__*/React.createElement(Form$1.Control, {
	    type: "text",
	    placeholder: "\u041A\u0440\u0435\u0434\u0438\u0442",
	    name: "k"
	  })))), /*#__PURE__*/React.createElement(Form$1.Group, {
	    className: "mb-3",
	    controlId: "exampleForm.ControlTextarea1"
	  }, /*#__PURE__*/React.createElement(Form$1.Label, null, "\u0421\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435"), /*#__PURE__*/React.createElement(Form$1.Control, {
	    as: "textarea",
	    rows: 3,
	    name: "comment"
	  })), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, null, /*#__PURE__*/React.createElement(Form$1.Group, {
	    className: "m-1",
	    controlId: "sum"
	  }, /*#__PURE__*/React.createElement(Form$1.Label, null, "\u0421\u0443\u043C\u043C\u0430"), /*#__PURE__*/React.createElement(Form$1.Control, {
	    type: "text",
	    placeholder: "\u0421\u0443\u043C\u043C\u0430",
	    name: "sum"
	  }))), /*#__PURE__*/React.createElement(Col, null, /*#__PURE__*/React.createElement(Form$1.Group, {
	    className: "m-1",
	    controlId: "sum"
	  }, /*#__PURE__*/React.createElement(Form$1.Label, null, "\u041F\u0435\u0440\u0438\u043E\u0434"), /*#__PURE__*/React.createElement(Form$1.Control, {
	    type: "text",
	    placeholder: "\u041F\u0435\u0440\u0438\u043E\u0434",
	    name: "period"
	  })))), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, null, /*#__PURE__*/React.createElement(Button, {
	    variant: "outline-secondary m-1",
	    size: "sm",
	    type: "submit"
	  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044E"))));
	}
	function ShowRecords({
	  bookrecords
	}) {
	  console.log(bookrecords);
	  if (!bookrecords) return null;
	  return /*#__PURE__*/React.createElement("div", null, bookrecords.map((item, index) => {
	    return /*#__PURE__*/React.createElement("div", {
	      key: index
	    }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, null, index), /*#__PURE__*/React.createElement(Col, null, item?.period, " "), /*#__PURE__*/React.createElement(Col, null, item?.d, " "), /*#__PURE__*/React.createElement(Col, null, item?.k, " "), /*#__PURE__*/React.createElement(Col, null, item?.sum, " ")), /*#__PURE__*/React.createElement(Row, null, item?.comment));
	  }));
	}
	function AccountingNavigation({
	  state
	}) {
	  return /*#__PURE__*/React.createElement(Navbar$1, {
	    className: "bg-body-tertiary m-1"
	  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("img", {
	    loading: "lazy",
	    src: !!state?.avatarUrl ? state.avatarUrl : "../freelancer.jpg",
	    alt: "me",
	    style: {
	      marginRight: "20px",
	      marginLeft: "20px",
	      width: "40px",
	      height: "40px",
	      borderRadius: "50%",
	      filter: "grayscale(100%)",
	      objectFit: "cover"
	    }
	  }), /*#__PURE__*/React.createElement(Navbar$1.Brand, {
	    href: "#home"
	  }, state?.title), /*#__PURE__*/React.createElement(Navbar$1.Toggle, null), /*#__PURE__*/React.createElement(Navbar$1.Collapse, {
	    className: "justify-content-end"
	  }, /*#__PURE__*/React.createElement(Navbar$1.Text, null, /*#__PURE__*/React.createElement("small", null, state?.theme)), /*#__PURE__*/React.createElement(SaveMyRecords, {
	    state: state
	  }))));
	}
	function App() {
	  const [state, dispatch] = reactExports.useReducer(caseReducer, {
	    loading: true,
	    posts: "",
	    bookrecords: "",
	    email: "",
	    user: "",
	    avatarUrl: "",
	    recordsArray: [],
	    userEmail: "",
	    title: "",
	    theme: "",
	    idMediaPost: "",
	    idPost: ""
	  });

	  // const [state, setBrowserState] = useState(null);

	  reactExports.useEffect(() => {
	    let {
	      application,
	      recordsArray
	    } = loadState();
	    async function getRecords() {
	      await timeout(5000);
	      let res = await basicfirebasecrudservices.getFirebaseNode({
	        url: "usersCraft/" + application?.email.replace(/[^a-zA-Z0-9]/g, "_") + "/posts/",
	        //   "usersCraft/" + "accounting@yandex.ru".replace(/[^a-zA-Z0-9]/g, "_") + "/posts/",
	        type: "array"
	      });
	      let allaccountingrecords = await basicfirebasecrudservices.getFirebaseNode({
	        url: "usersCraft/" + application?.email.replace(/[^a-zA-Z0-9]/g, "_") + "/posts/accounting/allbookrecords",
	        //   "usersCraft/" + "accounting@yandex.ru".replace(/[^a-zA-Z0-9]/g, "_") + "/posts/",
	        type: "array"
	      });
	      let projectobject = await basicfirebasecrudservices.getFirebaseNode({
	        url: "usersCraft/" + application?.email.replace(/[^a-zA-Z0-9]/g, "_") + "/posts/" + "-MYq31PEnR3Pviq-trvL",
	        //   "usersCraft/" + "accounting@yandex.ru".replace(/[^a-zA-Z0-9]/g, "_") + "/posts/",
	        type: "object"
	      });
	      console.log(projectobject);
	      return {
	        posts: res,
	        allaccountingrecords: allaccountingrecords
	      };
	    }
	    getRecords().then(res => {
	      let userEmail = application?.email.replace(/[^a-zA-Z0-9]/g, "_");
	      if (Array.isArray(res?.posts) && res.posts.filter(post => post.type === "accountingwithprofitscash").length > 0) {
	        let selectedProject = res.posts.filter(post => post.type === "accountingwithprofitscash")[0];
	        dispatch({
	          type: "SEED_STATE",
	          payload: {
	            objects: {
	              loading: false,
	              posts: res.posts.filter(post => post.type === "accountingwithprofitscash"),
	              curretProjectId: selectedProject.id,
	              bookrecords: !!selectedProject?.bookrecords ? Array.from(selectedProject?.bookrecords, x => x) : [],
	              email: application?.email,
	              //"accounting@yandex.ru",
	              user: application?.user,
	              avatarUrl: application?.avatarUrl,
	              userEmail: userEmail,
	              //"accounting@yandex.ru".replace(/[^a-zA-Z0-9]/g, "_"),
	              title: selectedProject.title,
	              theme: selectedProject.theme,
	              allaccountingrecords: res.allaccountingrecords
	            }
	          }
	        });
	      } else {
	        dispatch({
	          type: "SEED_STATE",
	          payload: {
	            objects: {
	              loading: false,
	              posts: [],
	              curretProjectId: basicfirebasecrudservices.getFirebaseNodeKey("usersCraft/" + userEmail + "/posts"),
	              bookrecords: [],
	              email: application?.email,
	              //"accounting@yandex.ru",
	              user: application?.user,
	              avatarUrl: application?.avatarUrl,
	              userEmail: userEmail,
	              //"accounting@yandex.ru".replace(/[^a-zA-Z0-9]/g, "_"),
	              title: "Кейс " + res.posts.filter(post => post.type === "accountingwithprofitscash").length,
	              theme: "Кейсы по бухгалтерскому учету",
	              allaccountingrecords: res.allaccountingrecords
	            }
	          }
	        });
	      }
	    });
	  }, []);
	  if (state.loading) {
	    return /*#__PURE__*/React.createElement("div", {
	      className: "card my-5",
	      style: {
	        width: "640px",
	        height: "480px"
	      }
	    }, /*#__PURE__*/React.createElement("img", {
	      src: "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	      className: "card-img-top",
	      alt: "loading"
	    }), /*#__PURE__*/React.createElement("div", {
	      className: "card-body"
	    }, /*#__PURE__*/React.createElement("div", {
	      className: "text-center"
	    }, /*#__PURE__*/React.createElement("div", {
	      className: "spinner-grow spinner-grow-sm text-secondary",
	      role: "status"
	    }, /*#__PURE__*/React.createElement("span", {
	      className: "visually-hidden"
	    }, "Loading...")))));
	  }
	  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AccountingNavigation, {
	    state: state
	  }), /*#__PURE__*/React.createElement(AccountingMachine, {
	    state: state,
	    dispatch: dispatch
	  }), /*#__PURE__*/React.createElement(ShowRecords, {
	    bookrecords: state?.bookrecords
	  }));
	}
	ReactDOM$1.createRoot(document.querySelector("#root")).render(/*#__PURE__*/React.createElement(App, null));

})();
