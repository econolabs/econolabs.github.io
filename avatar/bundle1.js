(function (React, client, reactBootstrap) {
  'use strict';

  // src/utils/env.ts
  var NOTHING = Symbol.for("immer-nothing");
  var DRAFTABLE = Symbol.for("immer-draftable");
  var DRAFT_STATE = Symbol.for("immer-state");

  // src/utils/errors.ts
  var errors = [
    // All error codes, starting by 0:
    function(plugin) {
      return `The plugin for '${plugin}' has not been loaded into Immer. To enable the plugin, import and call \`enable${plugin}()\` when initializing your application.`;
    },
    function(thing) {
      return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${thing}'`;
    },
    "This object has been frozen and should not be mutated",
    function(data) {
      return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + data;
    },
    "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
    "Immer forbids circular references",
    "The first or second argument to `produce` must be a function",
    "The third argument to `produce` must be a function or undefined",
    "First argument to `createDraft` must be a plain object, an array, or an immerable object",
    "First argument to `finishDraft` must be a draft returned by `createDraft`",
    function(thing) {
      return `'current' expects a draft, got: ${thing}`;
    },
    "Object.defineProperty() cannot be used on an Immer draft",
    "Object.setPrototypeOf() cannot be used on an Immer draft",
    "Immer only supports deleting array indices",
    "Immer only supports setting array indices and the 'length' property",
    function(thing) {
      return `'original' expects a draft, got: ${thing}`;
    }
    // Note: if more errors are added, the errorOffset in Patches.ts should be increased
    // See Patches.ts for additional errors
  ] ;
  function die(error, ...args) {
    {
      const e = errors[error];
      const msg = isFunction(e) ? e.apply(null, args) : e;
      throw new Error(`[Immer] ${msg}`);
    }
  }

  // src/utils/common.ts
  var O = Object;
  var getPrototypeOf = O.getPrototypeOf;
  var CONSTRUCTOR = "constructor";
  var PROTOTYPE = "prototype";
  var CONFIGURABLE = "configurable";
  var ENUMERABLE = "enumerable";
  var WRITABLE = "writable";
  var VALUE = "value";
  var isDraft = (value) => !!value && !!value[DRAFT_STATE];
  function isDraftable(value) {
    if (!value)
      return false;
    return isPlainObject(value) || isArray(value) || !!value[DRAFTABLE] || !!value[CONSTRUCTOR]?.[DRAFTABLE] || isMap(value) || isSet(value);
  }
  var objectCtorString = O[PROTOTYPE][CONSTRUCTOR].toString();
  var cachedCtorStrings = /* @__PURE__ */ new WeakMap();
  function isPlainObject(value) {
    if (!value || !isObjectish(value))
      return false;
    const proto = getPrototypeOf(value);
    if (proto === null || proto === O[PROTOTYPE])
      return true;
    const Ctor = O.hasOwnProperty.call(proto, CONSTRUCTOR) && proto[CONSTRUCTOR];
    if (Ctor === Object)
      return true;
    if (!isFunction(Ctor))
      return false;
    let ctorString = cachedCtorStrings.get(Ctor);
    if (ctorString === void 0) {
      ctorString = Function.toString.call(Ctor);
      cachedCtorStrings.set(Ctor, ctorString);
    }
    return ctorString === objectCtorString;
  }
  function each(obj, iter, strict = true) {
    if (getArchtype(obj) === 0 /* Object */) {
      const keys = strict ? Reflect.ownKeys(obj) : O.keys(obj);
      keys.forEach((key) => {
        iter(key, obj[key], obj);
      });
    } else {
      obj.forEach((entry, index) => iter(index, entry, obj));
    }
  }
  function getArchtype(thing) {
    const state = thing[DRAFT_STATE];
    return state ? state.type_ : isArray(thing) ? 1 /* Array */ : isMap(thing) ? 2 /* Map */ : isSet(thing) ? 3 /* Set */ : 0 /* Object */;
  }
  var has = (thing, prop, type = getArchtype(thing)) => type === 2 /* Map */ ? thing.has(prop) : O[PROTOTYPE].hasOwnProperty.call(thing, prop);
  var get = (thing, prop, type = getArchtype(thing)) => (
    // @ts-ignore
    type === 2 /* Map */ ? thing.get(prop) : thing[prop]
  );
  var set = (thing, propOrOldValue, value, type = getArchtype(thing)) => {
    if (type === 2 /* Map */)
      thing.set(propOrOldValue, value);
    else if (type === 3 /* Set */) {
      thing.add(value);
    } else
      thing[propOrOldValue] = value;
  };
  function is(x, y) {
    if (x === y) {
      return x !== 0 || 1 / x === 1 / y;
    } else {
      return x !== x && y !== y;
    }
  }
  var isArray = Array.isArray;
  var isMap = (target) => target instanceof Map;
  var isSet = (target) => target instanceof Set;
  var isObjectish = (target) => typeof target === "object";
  var isFunction = (target) => typeof target === "function";
  var isBoolean = (target) => typeof target === "boolean";
  function isArrayIndex(value) {
    const n = +value;
    return Number.isInteger(n) && String(n) === value;
  }
  var latest = (state) => state.copy_ || state.base_;
  var getFinalValue = (state) => state.modified_ ? state.copy_ : state.base_;
  function shallowCopy(base, strict) {
    if (isMap(base)) {
      return new Map(base);
    }
    if (isSet(base)) {
      return new Set(base);
    }
    if (isArray(base))
      return Array[PROTOTYPE].slice.call(base);
    const isPlain = isPlainObject(base);
    if (strict === true || strict === "class_only" && !isPlain) {
      const descriptors = O.getOwnPropertyDescriptors(base);
      delete descriptors[DRAFT_STATE];
      let keys = Reflect.ownKeys(descriptors);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const desc = descriptors[key];
        if (desc[WRITABLE] === false) {
          desc[WRITABLE] = true;
          desc[CONFIGURABLE] = true;
        }
        if (desc.get || desc.set)
          descriptors[key] = {
            [CONFIGURABLE]: true,
            [WRITABLE]: true,
            // could live with !!desc.set as well here...
            [ENUMERABLE]: desc[ENUMERABLE],
            [VALUE]: base[key]
          };
      }
      return O.create(getPrototypeOf(base), descriptors);
    } else {
      const proto = getPrototypeOf(base);
      if (proto !== null && isPlain) {
        return { ...base };
      }
      const obj = O.create(proto);
      return O.assign(obj, base);
    }
  }
  function freeze(obj, deep = false) {
    if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj))
      return obj;
    if (getArchtype(obj) > 1) {
      O.defineProperties(obj, {
        set: dontMutateMethodOverride,
        add: dontMutateMethodOverride,
        clear: dontMutateMethodOverride,
        delete: dontMutateMethodOverride
      });
    }
    O.freeze(obj);
    if (deep)
      each(
        obj,
        (_key, value) => {
          freeze(value, true);
        },
        false
      );
    return obj;
  }
  function dontMutateFrozenCollections() {
    die(2);
  }
  var dontMutateMethodOverride = {
    [VALUE]: dontMutateFrozenCollections
  };
  function isFrozen(obj) {
    if (obj === null || !isObjectish(obj))
      return true;
    return O.isFrozen(obj);
  }

  // src/utils/plugins.ts
  var PluginMapSet = "MapSet";
  var PluginPatches = "Patches";
  var PluginArrayMethods = "ArrayMethods";
  var plugins = {};
  function getPlugin(pluginKey) {
    const plugin = plugins[pluginKey];
    if (!plugin) {
      die(0, pluginKey);
    }
    return plugin;
  }
  var isPluginLoaded = (pluginKey) => !!plugins[pluginKey];

  // src/core/scope.ts
  var currentScope;
  var getCurrentScope = () => currentScope;
  var createScope = (parent_, immer_) => ({
    drafts_: [],
    parent_,
    immer_,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: true,
    unfinalizedDrafts_: 0,
    handledSet_: /* @__PURE__ */ new Set(),
    processedForPatches_: /* @__PURE__ */ new Set(),
    mapSetPlugin_: isPluginLoaded(PluginMapSet) ? getPlugin(PluginMapSet) : void 0,
    arrayMethodsPlugin_: isPluginLoaded(PluginArrayMethods) ? getPlugin(PluginArrayMethods) : void 0
  });
  function usePatchesInScope(scope, patchListener) {
    if (patchListener) {
      scope.patchPlugin_ = getPlugin(PluginPatches);
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
  var enterScope = (immer2) => currentScope = createScope(currentScope, immer2);
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
      }
      const { patchPlugin_ } = scope;
      if (patchPlugin_) {
        patchPlugin_.generateReplacementPatches_(
          baseDraft[DRAFT_STATE].base_,
          result,
          scope
        );
      }
    } else {
      result = finalize(scope, baseDraft);
    }
    maybeFreeze(scope, result, true);
    revokeScope(scope);
    if (scope.patches_) {
      scope.patchListener_(scope.patches_, scope.inversePatches_);
    }
    return result !== NOTHING ? result : void 0;
  }
  function finalize(rootScope, value) {
    if (isFrozen(value))
      return value;
    const state = value[DRAFT_STATE];
    if (!state) {
      const finalValue = handleValue(value, rootScope.handledSet_, rootScope);
      return finalValue;
    }
    if (!isSameScope(state, rootScope)) {
      return value;
    }
    if (!state.modified_) {
      return state.base_;
    }
    if (!state.finalized_) {
      const { callbacks_ } = state;
      if (callbacks_) {
        while (callbacks_.length > 0) {
          const callback = callbacks_.pop();
          callback(rootScope);
        }
      }
      generatePatchesAndFinalize(state, rootScope);
    }
    return state.copy_;
  }
  function maybeFreeze(scope, value, deep = false) {
    if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
      freeze(value, deep);
    }
  }
  function markStateFinalized(state) {
    state.finalized_ = true;
    state.scope_.unfinalizedDrafts_--;
  }
  var isSameScope = (state, rootScope) => state.scope_ === rootScope;
  var EMPTY_LOCATIONS_RESULT = [];
  function updateDraftInParent(parent, draftValue, finalizedValue, originalKey) {
    const parentCopy = latest(parent);
    const parentType = parent.type_;
    if (originalKey !== void 0) {
      const currentValue = get(parentCopy, originalKey, parentType);
      if (currentValue === draftValue) {
        set(parentCopy, originalKey, finalizedValue, parentType);
        return;
      }
    }
    if (!parent.draftLocations_) {
      const draftLocations = parent.draftLocations_ = /* @__PURE__ */ new Map();
      each(parentCopy, (key, value) => {
        if (isDraft(value)) {
          const keys = draftLocations.get(value) || [];
          keys.push(key);
          draftLocations.set(value, keys);
        }
      });
    }
    const locations = parent.draftLocations_.get(draftValue) ?? EMPTY_LOCATIONS_RESULT;
    for (const location of locations) {
      set(parentCopy, location, finalizedValue, parentType);
    }
  }
  function registerChildFinalizationCallback(parent, child, key) {
    parent.callbacks_.push(function childCleanup(rootScope) {
      const state = child;
      if (!state || !isSameScope(state, rootScope)) {
        return;
      }
      rootScope.mapSetPlugin_?.fixSetContents(state);
      const finalizedValue = getFinalValue(state);
      updateDraftInParent(parent, state.draft_ ?? state, finalizedValue, key);
      generatePatchesAndFinalize(state, rootScope);
    });
  }
  function generatePatchesAndFinalize(state, rootScope) {
    const shouldFinalize = state.modified_ && !state.finalized_ && (state.type_ === 3 /* Set */ || state.type_ === 1 /* Array */ && state.allIndicesReassigned_ || (state.assigned_?.size ?? 0) > 0);
    if (shouldFinalize) {
      const { patchPlugin_ } = rootScope;
      if (patchPlugin_) {
        const basePath = patchPlugin_.getPath(state);
        if (basePath) {
          patchPlugin_.generatePatches_(state, basePath, rootScope);
        }
      }
      markStateFinalized(state);
    }
  }
  function handleCrossReference(target, key, value) {
    const { scope_ } = target;
    if (isDraft(value)) {
      const state = value[DRAFT_STATE];
      if (isSameScope(state, scope_)) {
        state.callbacks_.push(function crossReferenceCleanup() {
          prepareCopy(target);
          const finalizedValue = getFinalValue(state);
          updateDraftInParent(target, value, finalizedValue, key);
        });
      }
    } else if (isDraftable(value)) {
      target.callbacks_.push(function nestedDraftCleanup() {
        const targetCopy = latest(target);
        if (target.type_ === 3 /* Set */) {
          if (targetCopy.has(value)) {
            handleValue(value, scope_.handledSet_, scope_);
          }
        } else {
          if (get(targetCopy, key, target.type_) === value) {
            if (scope_.drafts_.length > 1 && (target.assigned_.get(key) ?? false) === true && target.copy_) {
              handleValue(
                get(target.copy_, key, target.type_),
                scope_.handledSet_,
                scope_
              );
            }
          }
        }
      });
    }
  }
  function handleValue(target, handledSet, rootScope) {
    if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
      return target;
    }
    if (isDraft(target) || handledSet.has(target) || !isDraftable(target) || isFrozen(target)) {
      return target;
    }
    handledSet.add(target);
    each(target, (key, value) => {
      if (isDraft(value)) {
        const state = value[DRAFT_STATE];
        if (isSameScope(state, rootScope)) {
          const updatedValue = getFinalValue(state);
          set(target, key, updatedValue, target.type_);
          markStateFinalized(state);
        }
      } else if (isDraftable(value)) {
        handleValue(value, handledSet, rootScope);
      }
    });
    return target;
  }

  // src/core/proxy.ts
  function createProxyProxy(base, parent) {
    const baseIsArray = isArray(base);
    const state = {
      type_: baseIsArray ? 1 /* Array */ : 0 /* Object */,
      // Track which produce call this is associated with.
      scope_: parent ? parent.scope_ : getCurrentScope(),
      // True for both shallow and deep changes.
      modified_: false,
      // Used during finalization.
      finalized_: false,
      // Track which properties have been assigned (true) or deleted (false).
      // actually instantiated in `prepareCopy()`
      assigned_: void 0,
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
      isManual_: false,
      // `callbacks` actually gets assigned in `createProxy`
      callbacks_: void 0
    };
    let target = state;
    let traps = objectTraps;
    if (baseIsArray) {
      target = [state];
      traps = arrayTraps;
    }
    const { revoke, proxy } = Proxy.revocable(target, traps);
    state.draft_ = proxy;
    state.revoke_ = revoke;
    return [proxy, state];
  }
  var objectTraps = {
    get(state, prop) {
      if (prop === DRAFT_STATE)
        return state;
      let arrayPlugin = state.scope_.arrayMethodsPlugin_;
      const isArrayWithStringProp = state.type_ === 1 /* Array */ && typeof prop === "string";
      if (isArrayWithStringProp) {
        if (arrayPlugin?.isArrayOperationMethod(prop)) {
          return arrayPlugin.createMethodInterceptor(state, prop);
        }
      }
      const source = latest(state);
      if (!has(source, prop, state.type_)) {
        return readPropFromProto(state, source, prop);
      }
      const value = source[prop];
      if (state.finalized_ || !isDraftable(value)) {
        return value;
      }
      if (isArrayWithStringProp && state.operationMethod && arrayPlugin?.isMutatingArrayMethod(
        state.operationMethod
      ) && isArrayIndex(prop)) {
        return value;
      }
      if (value === peek(state.base_, prop)) {
        prepareCopy(state);
        const childKey = state.type_ === 1 /* Array */ ? +prop : prop;
        const childDraft = createProxy(state.scope_, value, state, childKey);
        return state.copy_[childKey] = childDraft;
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
          state.assigned_.set(prop, false);
          return true;
        }
        if (is(value, current2) && (value !== void 0 || has(state.base_, prop, state.type_)))
          return true;
        prepareCopy(state);
        markChanged(state);
      }
      if (state.copy_[prop] === value && // special case: handle new props with value 'undefined'
      (value !== void 0 || prop in state.copy_) || // special case: NaN
      Number.isNaN(value) && Number.isNaN(state.copy_[prop]))
        return true;
      state.copy_[prop] = value;
      state.assigned_.set(prop, true);
      handleCrossReference(state, prop, value);
      return true;
    },
    deleteProperty(state, prop) {
      prepareCopy(state);
      if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
        state.assigned_.set(prop, false);
        markChanged(state);
      } else {
        state.assigned_.delete(prop);
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
        [WRITABLE]: true,
        [CONFIGURABLE]: state.type_ !== 1 /* Array */ || prop !== "length",
        [ENUMERABLE]: desc[ENUMERABLE],
        [VALUE]: owner[prop]
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
  for (let key in objectTraps) {
    let fn = objectTraps[key];
    arrayTraps[key] = function() {
      const args = arguments;
      args[0] = args[0][0];
      return fn.apply(this, args);
    };
  }
  arrayTraps.deleteProperty = function(state, prop) {
    if (isNaN(parseInt(prop)))
      die(13);
    return arrayTraps.set.call(this, state, prop, void 0);
  };
  arrayTraps.set = function(state, prop, value) {
    if (prop !== "length" && isNaN(parseInt(prop)))
      die(14);
    return objectTraps.set.call(this, state[0], prop, value, state[0]);
  };
  function peek(draft, prop) {
    const state = draft[DRAFT_STATE];
    const source = state ? latest(state) : draft;
    return source[prop];
  }
  function readPropFromProto(state, source, prop) {
    const desc = getDescriptorFromProto(source, prop);
    return desc ? VALUE in desc ? desc[VALUE] : (
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
      state.assigned_ = /* @__PURE__ */ new Map();
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
      this.useStrictIteration_ = false;
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
        if (isFunction(base) && !isFunction(recipe)) {
          const defaultBase = recipe;
          recipe = base;
          const self = this;
          return function curriedProduce(base2 = defaultBase, ...args) {
            return self.produce(base2, (draft) => recipe.call(this, draft, ...args));
          };
        }
        if (!isFunction(recipe))
          die(6);
        if (patchListener !== void 0 && !isFunction(patchListener))
          die(7);
        let result;
        if (isDraftable(base)) {
          const scope = enterScope(this);
          const proxy = createProxy(scope, base, void 0);
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
        } else if (!base || !isObjectish(base)) {
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
            getPlugin(PluginPatches).generateReplacementPatches_(base, result, {
              patches_: p,
              inversePatches_: ip
            });
            patchListener(p, ip);
          }
          return result;
        } else
          die(1, base);
      };
      this.produceWithPatches = (base, recipe) => {
        if (isFunction(base)) {
          return (state, ...args) => this.produceWithPatches(state, (draft) => base(draft, ...args));
        }
        let patches, inversePatches;
        const result = this.produce(base, recipe, (p, ip) => {
          patches = p;
          inversePatches = ip;
        });
        return [result, patches, inversePatches];
      };
      if (isBoolean(config?.autoFreeze))
        this.setAutoFreeze(config.autoFreeze);
      if (isBoolean(config?.useStrictShallowCopy))
        this.setUseStrictShallowCopy(config.useStrictShallowCopy);
      if (isBoolean(config?.useStrictIteration))
        this.setUseStrictIteration(config.useStrictIteration);
    }
    createDraft(base) {
      if (!isDraftable(base))
        die(8);
      if (isDraft(base))
        base = current(base);
      const scope = enterScope(this);
      const proxy = createProxy(scope, base, void 0);
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
    /**
     * Pass false to use faster iteration that skips non-enumerable properties
     * but still handles symbols for compatibility.
     *
     * By default, strict iteration is enabled (includes all own properties).
     */
    setUseStrictIteration(value) {
      this.useStrictIteration_ = value;
    }
    shouldUseStrictIteration() {
      return this.useStrictIteration_;
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
      const applyPatchesImpl = getPlugin(PluginPatches).applyPatches_;
      if (isDraft(base)) {
        return applyPatchesImpl(base, patches);
      }
      return this.produce(
        base,
        (draft) => applyPatchesImpl(draft, patches)
      );
    }
  };
  function createProxy(rootScope, value, parent, key) {
    const [draft, state] = isMap(value) ? getPlugin(PluginMapSet).proxyMap_(value, parent) : isSet(value) ? getPlugin(PluginMapSet).proxySet_(value, parent) : createProxyProxy(value, parent);
    const scope = parent?.scope_ ?? getCurrentScope();
    scope.drafts_.push(draft);
    state.callbacks_ = parent?.callbacks_ ?? [];
    state.key_ = key;
    if (parent && key !== void 0) {
      registerChildFinalizationCallback(parent, state, key);
    } else {
      state.callbacks_.push(function rootDraftCleanup(rootScope2) {
        rootScope2.mapSetPlugin_?.fixSetContents(state);
        const { patchPlugin_ } = rootScope2;
        if (state.modified_ && patchPlugin_) {
          patchPlugin_.generatePatches_(state, [], rootScope2);
        }
      });
    }
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
    let strict = true;
    if (state) {
      if (!state.modified_)
        return state.base_;
      state.finalized_ = true;
      copy = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
      strict = state.scope_.immer_.shouldUseStrictIteration();
    } else {
      copy = shallowCopy(value, true);
    }
    each(
      copy,
      (key, childValue) => {
        set(copy, key, currentImpl(childValue));
      },
      strict
    );
    if (state) {
      state.finalized_ = false;
    }
    return copy;
  }

  // src/immer.ts
  var immer = new Immer2();
  var produce = immer.produce;

  //import { produce } from "immer";
  function caseReducer(state = {}, action) {
    // console.log(action);
    switch (action.type) {
      case "TOGGLE_PROPERTY":
        return produce(state, draft => {
          draft[action.payload.property] = !state[property];
        });
      case "SET_STORE_OBJECT":
        return produce(state, draft => {
          console.log(action.payload);
          draft[action.payload.key] = action.payload.value;
        });
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
      case "PUSH_ITEM_TO_ARRAY":
        return produce(state, draft => {
          draft[action.payload.arrayName].push(action.payload.item);
        });
      case "DELETE_ITEM_FROM_ARRAY":
        return produce(state, draft => {
          console.log(action.payload);
          const index = draft[action.payload.arrayName].findIndex(item => item.id === action.payload.id);
          if (index !== -1) draft[action.payload.arrayName].splice(index, 1);
        });
      case "UPDATE_ITEM_IN_ARRAY":
        return produce(state, draft => {
          console.log(action.payload);
          const index = draft[action.payload.arrayName].findIndex(item => item.id === action.payload.item.id);
          if (index !== -1) draft[action.payload.arrayName][index] = action.payload.item;
        });
      case "DELETE_FROM_ARRAY_BY_INDEX":
        {
          return produce(state, draft => {
            draft[action.payload.arrayName].splice(action.payload.itemIndex, 1);
            draft.triggerRerender = action.payload.itemIndex;
          });
        }
      default:
        return state;
    }
  }

  let {
    getFirebaseNode,
    updateFirebaseNode,
    loadState
  } = window.basicfirebasecrudservices;
  function App() {
    const [state, dispatch] = React.useReducer(caseReducer, {
      isMale: true
    });
    React.useEffect(() => {
      async function getUserData() {
        let applicationlocalstorage = loadState()?.application;
        console.log(applicationlocalstorage);
        let application = await getFirebaseNode({
          url: "openavatars/" + !!applicationlocalstorage?.email ? applicationlocalstorage.email.replace(/[^a-zA-Z0-9]/g, "_") : `${Math.random().toString(36).substring(2, 11)}@yandex.ru`,
          type: "object"
        });
        console.log(application);
        dispatch({
          type: "SEED_STATE",
          payload: {
            objects: {
              ...applicationlocalstorage,
              ...application
            }
          }
        });

        // console.log(
        //   "openavatars/" + application?.email.replace(/[^a-zA-Z0-9]/g, "_"),
        // );
        return application;
      }
      getUserData().then(res => console.log(res));
    }, []);
    console.log(state);
    if (Object.keys(state).length === 1) {
      return null;
    }
    function findUnspalshImageByGender(isMale) {
      let usedAvatars = [];
      let currentDay = new Intl.DateTimeFormat("en", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric"
      }).format(new Date()).replace(/[^a-zA-Z0-9]/g, "_");
      getFirebaseNode({
        url: "/currentDay/" + currentDay + "/posts",
        type: "array"
      }).then(res => {
        console.log("current day ");
        console.log(res);
        const emails = res.map(item => item.email);
        console.log(emails);

        // Fetch avatars for all emails in parallel
        const avatarPromises = emails.map(email => getFirebaseNode({
          url: "openavatars/" + email.replace(/[^a-zA-Z0-9]/g, "_"),
          type: "object"
        }));
        Promise.all(avatarPromises).then(avatarResults => {
          // Collect all used avatars from every email
          avatarResults.forEach(result => {
            console.log(result);
            if (result && result.avatarUrl) {
              usedAvatars.push(result.avatarUrl);
            }
          });
          console.log(usedAvatars);

          // Find an unused avatar
          let avatarUrl = "https://econolabs.github.io/freelancer.jpg";
          let counter = 0;
          while (true) {
            counter++;
            let item = Math.floor(Math.random() * 64) + 1;
            let picindex = item > 9 ? "" + item : "0" + item;
            avatarUrl = isMale ? "https://econolabs.github.io/avatars/male" + picindex + ".jpg" : "https://econolabs.github.io/avatars/female" + picindex + ".jpg";
            if (!usedAvatars.includes(avatarUrl)) {
              break;
            }

            // Safety guard to avoid infinite loop if all 64 avatars are used
            if (counter > 64) {
              console.warn("All avatars are already in use.");
              break;
            }
          }
          dispatch({
            type: "SEED_STATE",
            payload: {
              objects: {
                avatarUrl: avatarUrl
              }
            }
          });
          return avatarUrl;
        });
      });
    }
    const handleSubmit = e => {
      e.preventDefault();
      console.log(state);
      try {
        const serializedState = JSON.stringify({
          application: {
            ...state
          }
        });
        localStorage.setItem("econolabs", serializedState);
      } catch (err) {
        console.log(err);
      }
      let updates = {};
      updates["/openavatars/" + state.email.replace(/[^a-zA-Z0-9]/g, "_")] = {
        ...state
      };
      console.log(updates);
      updateFirebaseNode(updates).then(() => {
        window.location.reload();
      });

      //         {
      //     avatarUrl: "https://econolabs.github.io/avatars/male30.jpg",
      //     group: "vemst",
      //     id: "nick_golovenkin_yandex_ru",
      //     user: "Д.А. Головенкин"
      // }

      // setTimeout(function () {
      //   
      // }, 3000);
    };
    return /*#__PURE__*/React.createElement(reactBootstrap.Container, null, /*#__PURE__*/React.createElement("div", {
      className: "container mt-5"
    }), /*#__PURE__*/React.createElement(reactBootstrap.Container, null, /*#__PURE__*/React.createElement(reactBootstrap.Row, null, /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement(reactBootstrap.Button, {
      variant: "primary",
      onClick: () => findUnspalshImageByGender(state?.isMale)
    }, "\u0414\u0440\u0443\u0433\u043E\u0439 \u0430\u0432\u0430\u0442\u0430\u0440")), /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement("img", {
      src: state?.avatarUrl,
      style: {
        width: "64px",
        height: "64px",
        borderRadius: "50%",
        objectFit: "cover",
        border: "2px solid #e2e8f0"
      }
    })), /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement(reactBootstrap.Button, {
      variant: "secondary",
      onClick: () => {
        dispatch({
          type: "SEED_STATE",
          payload: {
            objects: {
              avatarUrl: findUnspalshImageByGender(!state?.isMale),
              isMale: !state?.isMale
            }
          }
        });
      }
    }, "\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043F\u043E\u043B")))), /*#__PURE__*/React.createElement(reactBootstrap.Form, {
      onSubmit: handleSubmit
    }, /*#__PURE__*/React.createElement(reactBootstrap.Form.Group, {
      className: "my-5"
    }, /*#__PURE__*/React.createElement(reactBootstrap.Form.Label, null, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F (\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E 3-4 \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u044B\u0445) \u0438 \u0433\u0440\u0443\u043F\u043F\u0430"), /*#__PURE__*/React.createElement(reactBootstrap.Form.Control, {
      type: "text",
      value: state?.user,
      onChange: e => dispatch({
        type: "SEED_STATE",
        payload: {
          objects: {
            user: e.target.value
          }
        }
      }),
      placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F",
      required: true
    })), /*#__PURE__*/React.createElement(reactBootstrap.Form.Group, {
      className: "my-5"
    }, /*#__PURE__*/React.createElement(reactBootstrap.Form.Label, null, "URL \u0441\u0430\u0439\u0442\u0430(\u0431\u043B\u043E\u0433\u0430)"), /*#__PURE__*/React.createElement(reactBootstrap.Form.Control, {
      type: "url",
      value: state?.url,
      onChange: e => dispatch({
        type: "SEED_STATE",
        payload: {
          objects: {
            url: e.target.value
          }
        }
      }),
      placeholder: "URL \u0441\u0430\u0439\u0442\u0430(\u0431\u043B\u043E\u0433\u0430)",
      required: true
    })), /*#__PURE__*/React.createElement(reactBootstrap.Button, {
      variant: "primary",
      type: "submit",
      className: "w-100"
    }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")));
  }
  const container = document.getElementById("root");
  const root = client.createRoot(container);
  root.render(
  /*#__PURE__*/
  //   <Provider store={store}>
  //       <InitialLoad />
  React.createElement(App, null)
  //   </Provider>
  );

})(React, ReactDOM, ReactBootstrap);
