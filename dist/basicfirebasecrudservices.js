!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).basicfirebasecrudservices=t()}(this,(function(){"use strict";!function(){const e={NODE_ENV:"production"};try{if(process)return process.env=Object.assign({},process.env),void Object.assign(process.env,e)}catch(e){}globalThis.process={env:e}}();const e="${JSCORE_VERSION}",t=function(e,t){if(!e)throw n(t)},n=function(t){return new Error("Firebase Database ("+e+") INTERNAL ASSERT FAILED: "+t)},i=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},r={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=r>>2,h=(3&r)<<4|o>>4;let u=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(u=64)),i.push(n[c],n[h],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],o=t<e.length?n[e.charAt(t)]:0;++t;const a=t<e.length?n[e.charAt(t)]:64;++t;const l=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==o||null==a||null==l)throw new s;const c=r<<2|o>>4;if(i.push(c),64!==a){const e=o<<4&240|a>>2;if(i.push(e),64!==l){const e=a<<6&192|l;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class s extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const o=function(e){const t=i(e);return r.encodeByteArray(t,!0)},a=function(e){return o(e).replace(/\./g,"")},l=function(e){try{return r.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function c(e){return h(void 0,e)}function h(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=h(e[n],t[n]));return e}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const u=()=>
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,d=()=>{try{return u()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const e=process.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&l(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},p=e=>{const t=(e=>{var t,n;return null===(n=null===(t=d())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]})(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},_=()=>{var e;return null===(e=d())||void 0===e?void 0:e.config};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class f{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function g(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:"")}class m extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,m.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,y.prototype.create)}}class y{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?function(e,t){return e.replace(v,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new m(i,o,n)}}const v=/\{\$([^}]+)}/g;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function C(e){return JSON.parse(e)}function w(e){return JSON.stringify(e)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const b=function(e){let t={},n={},i={},r="";try{const s=e.split(".");t=C(l(s[0])||""),n=C(l(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:r}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function I(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function E(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function T(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function S(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function k(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(N(n)&&N(s)){if(!k(n,s))return!1}else if(n!==s)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function N(e){return null!==e&&"object"==typeof e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class P{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,r,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=l^o&(a^l),r=1518500249):(i=o^a^l,r=1859775393):e<60?(i=o&a|l&(o|a),r=2400959708):(i=o^a^l,r=3395469782);const t=(s<<5|s>>>27)+i+c+r+n[e]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let s=this.inbuf_;for(;i<t;){if(0===s)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else for(;i<t;)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}}function R(e,t){return`${e} failed: ${t} argument `}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const x=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function D(e){return e&&e._delegate?e._delegate:e}class A{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const O="[DEFAULT]";
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class M{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new f;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e))try{this.getOrInitializeService({instanceIdentifier:O})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=O){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=O){return this.instances.has(e)}getOptions(e=O){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===O?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e=O){return this.component?this.component.multipleInstances?e:O:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class F{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new M(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}var L;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(L||(L={}));const q={debug:L.DEBUG,verbose:L.VERBOSE,info:L.INFO,warn:L.WARN,error:L.ERROR,silent:L.SILENT},j=L.INFO,W={[L.DEBUG]:"log",[L.VERBOSE]:"log",[L.INFO]:"info",[L.WARN]:"warn",[L.ERROR]:"error"},U=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=W[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class z{constructor(e){this.name=e,this._logLevel=j,this._logHandler=U,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in L))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?q[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,L.DEBUG,...e),this._logHandler(this,L.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,L.VERBOSE,...e),this._logHandler(this,L.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,L.INFO,...e),this._logHandler(this,L.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,L.WARN,...e),this._logHandler(this,L.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,L.ERROR,...e),this._logHandler(this,L.ERROR,...e)}}let B,H;const V=new WeakMap,$=new WeakMap,Y=new WeakMap,K=new WeakMap,G=new WeakMap;let Q={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return $.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Y.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Z(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function J(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(H||(H=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(ee(this),t),Z(V.get(this))}:function(...t){return Z(e.apply(ee(this),t))}:function(t,...n){const i=e.call(ee(this),t,...n);return Y.set(i,t.sort?t.sort():[t]),Z(i)}}function X(e){return"function"==typeof e?J(e):(e instanceof IDBTransaction&&function(e){if($.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)}));$.set(e,t)}(e),t=e,(B||(B=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,Q):e);var t}function Z(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(Z(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&V.set(t,e)})).catch((()=>{})),G.set(t,e),t}(e);if(K.has(e))return K.get(e);const t=X(e);return t!==e&&(K.set(e,t),G.set(t,e)),t}const ee=e=>G.get(e);const te=["get","getKey","getAll","getAllKeys","count"],ne=["put","add","delete","clear"],ie=new Map;function re(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(ie.get(t))return ie.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=ne.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!te.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return ie.set(t,s),s}Q=(e=>({...e,get:(t,n,i)=>re(t,n)||e.get(t,n,i),has:(t,n)=>!!re(t,n)||e.has(t,n)}))(Q);
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class se{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const oe="@firebase/app",ae="0.11.2",le=new z("@firebase/app"),ce="@firebase/app-compat",he="@firebase/analytics-compat",ue="@firebase/analytics",de="@firebase/app-check-compat",pe="@firebase/app-check",_e="@firebase/auth",fe="@firebase/auth-compat",ge="@firebase/database",me="@firebase/data-connect",ye="@firebase/database-compat",ve="@firebase/functions",Ce="@firebase/functions-compat",we="@firebase/installations",be="@firebase/installations-compat",Ie="@firebase/messaging",Ee="@firebase/messaging-compat",Te="@firebase/performance",Se="@firebase/performance-compat",ke="@firebase/remote-config",Ne="@firebase/remote-config-compat",Pe="@firebase/storage",Re="@firebase/storage-compat",xe="@firebase/firestore",De="@firebase/vertexai",Ae="@firebase/firestore-compat",Oe="firebase",Me="[DEFAULT]",Fe={[oe]:"fire-core",[ce]:"fire-core-compat",[ue]:"fire-analytics",[he]:"fire-analytics-compat",[pe]:"fire-app-check",[de]:"fire-app-check-compat",[_e]:"fire-auth",[fe]:"fire-auth-compat",[ge]:"fire-rtdb",[me]:"fire-data-connect",[ye]:"fire-rtdb-compat",[ve]:"fire-fn",[Ce]:"fire-fn-compat",[we]:"fire-iid",[be]:"fire-iid-compat",[Ie]:"fire-fcm",[Ee]:"fire-fcm-compat",[Te]:"fire-perf",[Se]:"fire-perf-compat",[ke]:"fire-rc",[Ne]:"fire-rc-compat",[Pe]:"fire-gcs",[Re]:"fire-gcs-compat",[xe]:"fire-fst",[Ae]:"fire-fst-compat",[De]:"fire-vertex","fire-js":"fire-js",[Oe]:"fire-js-all"},Le=new Map,qe=new Map,je=new Map;function We(e,t){try{e.container.addComponent(t)}catch(n){le.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ue(e){const t=e.name;if(je.has(t))return le.debug(`There were multiple attempts to register component ${t}.`),!1;je.set(t,e);for(const t of Le.values())We(t,e);for(const t of qe.values())We(t,e);return!0}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const ze=new y("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Be{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new A("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ze.create("app-deleted",{appName:this._name})}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function He(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:Me,automaticDataCollectionEnabled:!1},t),r=i.name;if("string"!=typeof r||!r)throw ze.create("bad-app-name",{appName:String(r)});if(n||(n=_()),!n)throw ze.create("no-options");const s=Le.get(r);if(s){if(k(n,s.options)&&k(i,s.config))return s;throw ze.create("duplicate-app",{appName:r})}const o=new F(r);for(const e of je.values())o.addComponent(e);const a=new Be(n,i,o);return Le.set(r,a),a}function Ve(){return Array.from(Le.values())}function $e(e,t,n){var i;let r=null!==(i=Fe[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void le.warn(e.join(" "))}Ue(new A(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Ye="firebase-heartbeat-store";let Ke=null;function Ge(){return Ke||(Ke=function(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=Z(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(Z(o.result),e.oldVersion,e.newVersion,Z(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),r&&e.addEventListener("versionchange",(e=>r(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(Ye)}catch(e){console.warn(e)}}}).catch((e=>{throw ze.create("idb-open",{originalErrorMessage:e.message})}))),Ke}async function Qe(e,t){try{const n=(await Ge()).transaction(Ye,"readwrite"),i=n.objectStore(Ye);await i.put(t,Je(e)),await n.done}catch(e){if(e instanceof m)le.warn(e.message);else{const t=ze.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});le.warn(t.message)}}}function Je(e){return`${e.name}!${e.options.appId}`}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Xe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new et(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ze();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some((e=>e.date===i)))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1;let t=0,n=e[0].date;for(let i=1;i<e.length;i++)e[i].date<n&&(n=e[i].date,t=i);return t}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){le.warn(e)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Ze(),{heartbeatsToSend:n,unsentEntries:i}=function(e,t=1024){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),tt(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),tt(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),r=a(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return le.warn(e),""}}}function Ze(){return(new Date).toISOString().substring(0,10)}class et{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await Ge()).transaction(Ye),n=await t.objectStore(Ye).get(Je(e));return await t.done,n}catch(e){if(e instanceof m)le.warn(e.message);else{const t=ze.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});le.warn(t.message)}}}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Qe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Qe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function tt(e){return a(JSON.stringify({version:2,heartbeats:e})).length}var nt;nt="",Ue(new A("platform-logger",(e=>new se(e)),"PRIVATE")),Ue(new A("heartbeat",(e=>new Xe(e)),"PRIVATE")),$e(oe,ae,nt),$e(oe,ae,"esm2017"),$e("fire-js","");
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
$e("firebase","11.4.0","app");const it="@firebase/database",rt="1.0.13";
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
let st="";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class ot{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),w(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:C(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class at{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return I(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const lt=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new ot(t)}}catch(e){}return new at},ct=lt("localStorage"),ht=lt("sessionStorage"),ut=new z("@firebase/database"),dt=function(){let e=1;return function(){return e++}}(),pt=function(e){const n=function(e){const n=[];let i=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);if(s>=55296&&s<=56319){const n=s-55296;r++,t(r<e.length,"Surrogate pair missing trail surrogate."),s=65536+(n<<10)+(e.charCodeAt(r)-56320)}s<128?n[i++]=s:s<2048?(n[i++]=s>>6|192,n[i++]=63&s|128):s<65536?(n[i++]=s>>12|224,n[i++]=s>>6&63|128,n[i++]=63&s|128):(n[i++]=s>>18|240,n[i++]=s>>12&63|128,n[i++]=s>>6&63|128,n[i++]=63&s|128)}return n}(e),i=new P;i.update(n);const s=i.digest();return r.encodeByteArray(s)},_t=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=_t.apply(null,i):t+="object"==typeof i?w(i):i,t+=" "}return t};let ft=null,gt=!0;const mt=function(...e){if(!0===gt&&(gt=!1,null===ft&&!0===ht.get("logging_enabled")&&(t(!0,"Can't turn on custom loggers persistently."),ut.logLevel=L.VERBOSE,ft=ut.log.bind(ut))),ft){const t=_t.apply(null,e);ft(t)}},yt=function(e){return function(...t){mt(e,...t)}},vt=function(...e){const t="FIREBASE INTERNAL ERROR: "+_t(...e);ut.error(t)},Ct=function(...e){const t=`FIREBASE FATAL ERROR: ${_t(...e)}`;throw ut.error(t),new Error(t)},wt=function(...e){const t="FIREBASE WARNING: "+_t(...e);ut.warn(t)},bt=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},It="[MIN_NAME]",Et="[MAX_NAME]",Tt=function(e,t){if(e===t)return 0;if(e===It||t===Et)return-1;if(t===It||e===Et)return 1;{const n=At(e),i=At(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},St=function(e,t){return e===t?0:e<t?-1:1},kt=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+w(t))},Nt=function(e){if("object"!=typeof e||null===e)return w(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=w(t[i]),n+=":",n+=Nt(e[t[i]]);return n+="}",n},Pt=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function Rt(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const xt=function(e){t(!bt(e),"Invalid JSON number");const n=1023;let i,r,s,o,a;0===e?(r=0,s=0,i=1/e==-1/0?1:0):(i=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(o=Math.min(Math.floor(Math.log(e)/Math.LN2),n),r=o+n,s=Math.round(e*Math.pow(2,52-o)-Math.pow(2,52))):(r=0,s=Math.round(e/Math.pow(2,-1074))));const l=[];for(a=52;a;a-=1)l.push(s%2?1:0),s=Math.floor(s/2);for(a=11;a;a-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(i?1:0),l.reverse();const c=l.join("");let h="";for(a=0;a<64;a+=8){let e=parseInt(c.substr(a,8),2).toString(16);1===e.length&&(e="0"+e),h+=e}return h.toLowerCase()};const Dt=new RegExp("^-?(0*)\\d{1,10}$"),At=function(e){if(Dt.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Ot=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw wt("Exception was thrown by user callback.",t),e}),Math.floor(0))}},Mt=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Ft{constructor(e,t){var n;this.appCheckProvider=t,this.appName=e.name,null!=(n=e)&&void 0!==n.settings&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){wt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Lt{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(mt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',wt(e)}}class qt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}qt.OWNER="owner";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const jt=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Wt="ac",Ut="websocket",zt="long_polling";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Bt{constructor(e,t,n,i,r=!1,s="",o=!1,a=!1,l=null){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this.emulatorOptions=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ct.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ct.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Ht(e,n,i){let r;if(t("string"==typeof n,"typeof type must == string"),t("object"==typeof i,"typeof params must == object"),n===Ut)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(n!==zt)throw new Error("Unknown connection type: "+n);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(i.ns=e.namespace);const s=[];return Rt(i,((e,t)=>{s.push(e+"="+t)})),r+s.join("&")}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Vt{constructor(){this.counters_={}}incrementCounter(e,t=1){I(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return c(this.counters_)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const $t={},Yt={};function Kt(e){const t=e.toString();return $t[t]||($t[t]=new Vt),$t[t]}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Gt{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Ot((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Qt="start";class Jt{constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=yt(e),this.stats_=Kt(t),this.urlFn=e=>(this.appCheckToken&&(e[Wt]=this.appCheckToken),Ht(t,zt,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Gt(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if("complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Xt(((...e)=>{const[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===Qt)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[Qt]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e[Wt]=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&jt.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Jt.forceAllow_=!0}static forceDisallow(){Jt.forceDisallow_=!0}static isAvailable(){return!!Jt.forceAllow_||!(Jt.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI)}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=w(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=o(t),i=Pt(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=w(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Xt{constructor(e,t,n,i){this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=dt(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=Xt.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){mt("frame writing exception"),e.stack&&mt(e.stack),mt(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||mt("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{mt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */let Zt=null;"undefined"!=typeof MozWebSocket?Zt=MozWebSocket:"undefined"!=typeof WebSocket&&(Zt=WebSocket);class en{constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=yt(this.connId),this.stats_=Kt(t),this.connURL=en.connectionURL_(t,s,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,r){const s={v:"5"};return"undefined"!=typeof location&&location.hostname&&jt.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),i&&(s[Wt]=i),r&&(s.p=r),Ht(e,Ut,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ct.set("previous_websocket_failure",!0);try{let e;this.mySock=new Zt(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){en.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Zt&&!en.forceDisallow_}static previouslyFailed(){return ct.isInMemoryStorage||!0===ct.get("previous_websocket_failure")}markConnectionHealthy(){ct.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=C(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(t(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=w(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Pt(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}en.responsesRequiredToBeHealthy=2,en.healthyTimeout=3e4;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class tn{static get ALL_TRANSPORTS(){return[Jt,en]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=en&&en.isAvailable();let n=t&&!en.previouslyFailed();if(e.webSocketOnly&&(t||wt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[en];else{const e=this.transports_=[];for(const t of tn.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);tn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}tn.globalTransportInitialized_=!1;class nn{constructor(e,t,n,i,r,s,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=yt("c:"+this.id+":"),this.transportManager_=new tn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Mt((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=kt("t",e),n=kt("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=kt("t",e),n=kt("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=kt("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?vt("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):vt("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&wt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Mt((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Mt((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ct.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class rn{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class sn{constructor(e){this.allowedEvents_=e,this.listeners_={},t(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){t(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class on extends sn{static getInstance(){return new on}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||g()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}getInitialEvent(e){return t("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class an{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ln(){return new an("")}function cn(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function hn(e){return e.pieces_.length-e.pieceNum_}function un(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new an(e.pieces_,t)}function dn(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function pn(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function _n(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new an(t,0)}function fn(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof an)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new an(n,0)}function gn(e){return e.pieceNum_>=e.pieces_.length}function mn(e,t){const n=cn(e),i=cn(t);if(null===n)return t;if(n===i)return mn(un(e),un(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function yn(e,t){const n=pn(e,0),i=pn(t,0);for(let e=0;e<n.length&&e<i.length;e++){const t=Tt(n[e],i[e]);if(0!==t)return t}return n.length===i.length?0:n.length<i.length?-1:1}function vn(e,t){if(hn(e)!==hn(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Cn(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(hn(e)>hn(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class wn{constructor(e,t){this.errorPrefix_=t,this.parts_=pn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=x(this.parts_[e]);bn(this)}}function bn(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+In(e))}function In(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class En extends sn{static getInstance(){return new En}constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}getInitialEvent(e){return t("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Tn=1e3;class Sn extends rn{constructor(e,t,n,i,r,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=Sn.nextPersistentConnectionId_++,this.log_=yt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Tn,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");En.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&on.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const r=++this.requestNumber_,s={r:r,a:e,b:n};this.log_(w(s)),t(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const t=new f,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,n,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),t(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),t(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,(r=>{const s=r.d,o=r.s;Sn.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&I(e,"w")){const n=E(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();wt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||function(e){const t=b(e).claims;return"object"==typeof t&&!0===t.admin}(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=function(e){const t=b(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")}(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,n){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),t(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,n)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const s={p:t,d:n};void 0!==r&&(s.h=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+w(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):vt("Unrecognized action received from server: "+w(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){t(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Tn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Tn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=Tn),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=Math.max(0,(new Date).getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Sn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(e){t(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[t,l]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?mt("getToken() completed but was canceled"):(mt("getToken() completed. Creating connection."),this.authToken_=t&&t.accessToken,this.appCheckToken_=l&&l.token,a=new nn(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,(e=>{wt(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),s))}catch(e){this.log_("Failed to get token: "+e),o||(this.repoInfo_.nodeAdmin&&wt(e),l())}}}interrupt(e){mt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){mt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],T(this.interruptReasons_)&&(this.reconnectDelay_=Tn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>Nt(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new an(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){mt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){mt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};e["sdk.js."+st.replace(/\./g,"-")]=1,g()?e["framework.cordova"]=1:"object"==typeof navigator&&"ReactNative"===navigator.product&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=on.getInstance().currentlyOnline();return T(this.interruptReasons_)&&e}}Sn.nextPersistentConnectionId_=0,Sn.nextConnectionId_=0;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class kn{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new kn(e,t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Nn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new kn(It,e),i=new kn(It,t);return 0!==this.compare(n,i)}minPost(){return kn.MIN}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */let Pn;class Rn extends Nn{static get __EMPTY_NODE(){return Pn}static set __EMPTY_NODE(e){Pn=e}compare(e,t){return Tt(e.name,t.name)}isDefinedOn(e){throw n("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return kn.MIN}maxPost(){return new kn(Et,Pn)}makePost(e,n){return t("string"==typeof e,"KeyIndex indexValue must always be a string."),new kn(e,Pn)}toString(){return".key"}}const xn=new Rn;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Dn{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class An{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:An.RED,this.left=null!=i?i:On.EMPTY_NODE,this.right=null!=r?r:On.EMPTY_NODE}copy(e,t,n,i,r){return new An(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return On.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return On.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,An.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,An.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}An.RED=!0,An.BLACK=!1;class On{constructor(e,t=On.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new On(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,An.BLACK,null,null))}remove(e){return new On(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,An.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Dn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Dn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Dn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Dn(this.root_,null,this.comparator_,!0,e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Mn(e,t){return Tt(e.name,t.name)}function Fn(e,t){return Tt(e,t)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */let Ln;On.EMPTY_NODE=new class{copy(e,t,n,i,r){return this}insert(e,t,n){return new An(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const qn=function(e){return"number"==typeof e?"number:"+xt(e):"string:"+e},jn=function(e){if(e.isLeafNode()){const n=e.val();t("string"==typeof n||"number"==typeof n||"object"==typeof n&&I(n,".sv"),"Priority must be a string or number.")}else t(e===Ln||e.isEmpty(),"priority of unexpected type.");t(e===Ln||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
let Wn,Un,zn;class Bn{static set __childrenNodeConstructor(e){Wn=e}static get __childrenNodeConstructor(){return Wn}constructor(e,n=Bn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,t(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),jn(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Bn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Bn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return gn(e)?this:".priority"===cn(e)?this.priorityNode_:Bn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Bn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,n){const i=cn(e);return null===i?n:n.isEmpty()&&".priority"!==i?this:(t(".priority"!==i||1===hn(e),".priority must be the last token in a path"),this.updateImmediateChild(i,Bn.__childrenNodeConstructor.EMPTY_NODE.updateChild(un(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+qn(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?xt(this.value_):this.value_,this.lazyHash_=pt(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Bn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Bn.__childrenNodeConstructor?-1:(t(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,r=Bn.VALUE_TYPE_ORDER.indexOf(n),s=Bn.VALUE_TYPE_ORDER.indexOf(i);return t(r>=0,"Unknown leaf type: "+n),t(s>=0,"Unknown leaf type: "+i),r===s?"object"===i?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}Bn.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Hn=new class extends Nn{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?Tt(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return kn.MIN}maxPost(){return new kn(Et,new Bn("[PRIORITY-POST]",zn))}makePost(e,t){const n=Un(e);return new kn(t,new Bn("[PRIORITY-POST]",n))}toString(){return".priority"}},Vn=Math.log(2);
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class $n{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Vn,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Yn=function(e,t,n,i){e.sort(t);const r=function(t,i){const s=i-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new An(a,o.node,An.BLACK,null,null);{const l=parseInt(s/2,10)+t,c=r(t,l),h=r(l+1,i);return o=e[l],a=n?n(o):o,new An(a,o.node,An.BLACK,c,h)}},s=function(t){let i=null,s=null,o=e.length;const a=function(t,i){const s=o-t,a=o;o-=t;const c=r(s+1,a),h=e[s],u=n?n(h):h;l(new An(u,h.node,i,null,c))},l=function(e){i?(i.left=e,i=e):(s=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,An.BLACK):(a(i,An.BLACK),a(i,An.RED))}return s}(new $n(e.length));return new On(i||t,s)};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */let Kn;const Gn={};class Qn{static get Default(){return t(Gn&&Hn,"ChildrenNode.ts has not been loaded"),Kn=Kn||new Qn({".priority":Gn},{".priority":Hn}),Kn}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=E(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof On?t:null}hasIndex(e){return I(this.indexSet_,e.toString())}addIndex(e,n){t(e!==xn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator(kn.Wrap);let o,a=s.getNext();for(;a;)r=r||e.isDefinedOn(a.node),i.push(a),a=s.getNext();o=r?Yn(i,e.getCompare()):Gn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=o,new Qn(h,c)}addToIndexes(e,n){const i=S(this.indexes_,((i,r)=>{const s=E(this.indexSet_,r);if(t(s,"Missing index implementation for "+r),i===Gn){if(s.isDefinedOn(e.node)){const t=[],i=n.getIterator(kn.Wrap);let r=i.getNext();for(;r;)r.name!==e.name&&t.push(r),r=i.getNext();return t.push(e),Yn(t,s.getCompare())}return Gn}{const t=n.get(e.name);let r=i;return t&&(r=r.remove(new kn(e.name,t))),r.insert(e,e.node)}}));return new Qn(i,this.indexSet_)}removeFromIndexes(e,t){const n=S(this.indexes_,(n=>{if(n===Gn)return n;{const i=t.get(e.name);return i?n.remove(new kn(e.name,i)):n}}));return new Qn(n,this.indexSet_)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */let Jn;class Xn{static get EMPTY_NODE(){return Jn||(Jn=new Xn(new On(Fn),null,Qn.Default))}constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&jn(this.priorityNode_),this.children_.isEmpty()&&t(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Jn}updatePriority(e){return this.children_.isEmpty()?this:new Xn(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?Jn:t}}getChild(e){const t=cn(e);return null===t?this:this.getImmediateChild(t).getChild(un(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,n){if(t(n,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(n);{const t=new kn(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(t,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(t,this.children_));const s=i.isEmpty()?Jn:this.priorityNode_;return new Xn(i,s,r)}}updateChild(e,n){const i=cn(e);if(null===i)return n;{t(".priority"!==cn(e)||1===hn(e),".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(un(e),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(Hn,((s,o)=>{t[s]=o.val(e),n++,r&&Xn.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1})),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+qn(this.getPriority().val())+":"),this.forEachChild(Hn,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":pt(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new kn(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new kn(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new kn(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,kn.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,kn.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Zn?-1:0}withIndex(e){if(e===xn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Xn(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===xn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Hn),n=t.getIterator(Hn);let i=e.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===xn?null:this.indexMap_.get(e.toString())}}Xn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const Zn=new class extends Xn{constructor(){super(new On(Fn),Xn.EMPTY_NODE,Qn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Xn.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(kn,{MIN:{value:new kn(It,Xn.EMPTY_NODE)},MAX:{value:new kn(Et,Zn)}}),Rn.__EMPTY_NODE=Xn.EMPTY_NODE,Bn.__childrenNodeConstructor=Xn,Ln=Zn,function(e){zn=e}(Zn);function ei(e,n=null){if(null===e)return Xn.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(n=e[".priority"]),t(null===n||"string"==typeof n||"number"==typeof n||"object"==typeof n&&".sv"in n,"Invalid priority type found: "+typeof n),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new Bn(e,ei(n))}if(e instanceof Array){let t=Xn.EMPTY_NODE;return Rt(e,((n,i)=>{if(I(e,n)&&"."!==n.substring(0,1)){const e=ei(i);!e.isLeafNode()&&e.isEmpty()||(t=t.updateImmediateChild(n,e))}})),t.updatePriority(ei(n))}{const t=[];let i=!1;if(Rt(e,((e,n)=>{if("."!==e.substring(0,1)){const r=ei(n);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),t.push(new kn(e,r)))}})),0===t.length)return Xn.EMPTY_NODE;const r=Yn(t,Mn,(e=>e.name),Fn);if(i){const e=Yn(t,Hn.getCompare());return new Xn(r,ei(n),new Qn({".priority":e},{".priority":Hn}))}return new Xn(r,ei(n),Qn.Default)}}!function(e){Un=e}(ei);
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class ti extends Nn{constructor(e){super(),this.indexPath_=e,t(!gn(e)&&".priority"!==cn(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?Tt(e.name,t.name):r}makePost(e,t){const n=ei(e),i=Xn.EMPTY_NODE.updateChild(this.indexPath_,n);return new kn(t,i)}maxPost(){const e=Xn.EMPTY_NODE.updateChild(this.indexPath_,Zn);return new kn(Et,e)}toString(){return pn(this.indexPath_,0).join("/")}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ni=new class extends Nn{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?Tt(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return kn.MIN}maxPost(){return kn.MAX}makePost(e,t){const n=ei(e);return new kn(t,n)}toString(){return".value"}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ii(e){return{type:"value",snapshotNode:e}}function ri(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function si(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function oi(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class ai{constructor(e){this.index_=e}updateChild(e,n,i,r,s,o){t(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(r).equals(i.getChild(r))&&a.isEmpty()===i.isEmpty()?e:(null!=o&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(si(n,a)):t(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ri(n,i)):o.trackChildChange(oi(n,i,a))),e.isLeafNode()&&i.isEmpty()?e:e.updateImmediateChild(n,i).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(Hn,((e,i)=>{t.hasChild(e)||n.trackChildChange(si(e,i))})),t.isLeafNode()||t.forEachChild(Hn,((t,i)=>{if(e.hasChild(t)){const r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(oi(t,i,r))}else n.trackChildChange(ri(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Xn.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class li{constructor(e){this.indexedFilter_=new ai(e.getIndex()),this.index_=e.getIndex(),this.startPost_=li.getStartPost_(e),this.endPost_=li.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,i,r,s){return this.matches(new kn(t,n))||(n=Xn.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=Xn.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(Xn.EMPTY_NODE);const r=this;return t.forEachChild(Hn,((e,t)=>{r.matches(new kn(e,t))||(i=i.updateImmediateChild(e,Xn.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ci{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new li(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,i,r,s){return this.rangedFilter_.matches(new kn(t,n))||(n=Xn.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,s):this.fullLimitUpdateChild_(e,t,n,r,s)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=Xn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=Xn.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;i=i.updateImmediateChild(t.name,t.node),n++}}}else{let e;i=t.withIndex(this.index_),i=i.updatePriority(Xn.EMPTY_NODE),e=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);let n=0;for(;e.hasNext();){const t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:i=i.updateImmediateChild(t.name,Xn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,r,s){let o;if(this.reverse_){const e=this.index_.getCompare();o=(t,n)=>e(n,t)}else o=this.index_.getCompare();const a=e;t(a.numChildren()===this.limit_,"");const l=new kn(n,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(n)){const e=a.getImmediateChild(n);let t=r.getChildAfterChild(this.index_,c,this.reverse_);for(;null!=t&&(t.name===n||a.hasChild(t.name));)t=r.getChildAfterChild(this.index_,t,this.reverse_);const u=null==t?1:o(t,l);if(h&&!i.isEmpty()&&u>=0)return null!=s&&s.trackChildChange(oi(n,i,e)),a.updateImmediateChild(n,i);{null!=s&&s.trackChildChange(si(n,e));const i=a.updateImmediateChild(n,Xn.EMPTY_NODE);return null!=t&&this.rangedFilter_.matches(t)?(null!=s&&s.trackChildChange(ri(t.name,t.node)),i.updateImmediateChild(t.name,t.node)):i}}return i.isEmpty()?e:h&&o(c,l)>=0?(null!=s&&(s.trackChildChange(si(c.name,c.node)),s.trackChildChange(ri(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(c.name,Xn.EMPTY_NODE)):e}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class hi{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Hn}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return t(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return t(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:It}hasEnd(){return this.endSet_}getIndexEndValue(){return t(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return t(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Et}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return t(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Hn}copy(){const e=new hi;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ui(e){const n={};if(e.isDefault())return n;let i;if(e.index_===Hn?i="$priority":e.index_===ni?i="$value":e.index_===xn?i="$key":(t(e.index_ instanceof ti,"Unrecognized index type!"),i=e.index_.toString()),n.orderBy=w(i),e.startSet_){const t=e.startAfterSet_?"startAfter":"startAt";n[t]=w(e.indexStartValue_),e.startNameSet_&&(n[t]+=","+w(e.indexStartName_))}if(e.endSet_){const t=e.endBeforeSet_?"endBefore":"endAt";n[t]=w(e.indexEndValue_),e.endNameSet_&&(n[t]+=","+w(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?n.limitToFirst=e.limit_:n.limitToLast=e.limit_),n}function di(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Hn&&(t.i=e.index_.toString()),t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class pi extends rn{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return void 0!==n?"tag$"+n:(t(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=yt("p:rest:"),this.listens_={}}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const s=pi.getListenId_(e,n),o={};this.listens_[s]=o;const a=ui(e._queryParams);this.restRequest_(r+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,n),E(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=pi.getListenId_(e,t);delete this.listens_[n]}get(e){const t=ui(e._queryParams),n=e._path.toString(),i=new f;return this.restRequest_(n+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+function(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=C(o.responseText)}catch(e){wt("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&wt("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class _i{constructor(){this.rootNode_=Xn.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function fi(){return{value:null,children:new Map}}function gi(e,t,n){if(gn(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=cn(t);e.children.has(i)||e.children.set(i,fi());gi(e.children.get(i),t=un(t),n)}}function mi(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e,((e,i)=>{mi(i,new an(t.toString()+"/"+e),n)}))}class yi{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Rt(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class vi{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new yi(e);const n=1e4+2e4*Math.random();Mt(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;Rt(e,((e,i)=>{i>0&&I(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),Mt(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var Ci;function wi(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */!function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"}(Ci||(Ci={}));class bi{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Ci.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(gn(this.path)){if(null!=this.affectedTree.value)return t(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new an(e));return new bi(ln(),t,this.revert)}}return t(cn(this.path)===e,"operationForChild called for unrelated child."),new bi(un(this.path),this.affectedTree,this.revert)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ii{constructor(e,t){this.source=e,this.path=t,this.type=Ci.LISTEN_COMPLETE}operationForChild(e){return gn(this.path)?new Ii(this.source,ln()):new Ii(this.source,un(this.path))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ei{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Ci.OVERWRITE}operationForChild(e){return gn(this.path)?new Ei(this.source,ln(),this.snap.getImmediateChild(e)):new Ei(this.source,un(this.path),this.snap)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ti{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Ci.MERGE}operationForChild(e){if(gn(this.path)){const t=this.children.subtree(new an(e));return t.isEmpty()?null:t.value?new Ei(this.source,ln(),t.value):new Ti(this.source,ln(),t)}return t(cn(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ti(this.source,un(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Si{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(gn(e))return this.isFullyInitialized()&&!this.filtered_;const t=cn(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ki{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Ni(e,t,i,r,s,o){const a=r.filter((e=>e.type===i));a.sort(((t,i)=>function(e,t,i){if(null==t.childName||null==i.childName)throw n("Should only compare child_ events.");const r=new kn(t.childName,t.snapshotNode),s=new kn(i.childName,i.snapshotNode);return e.index_.compare(r,s)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e,t,i))),a.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,o);s.forEach((r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))}))}))}function Pi(e,t){return{eventCache:e,serverCache:t}}function Ri(e,t,n,i){return Pi(new Si(t,n,i),e.serverCache)}function xi(e,t,n,i){return Pi(e.eventCache,new Si(t,n,i))}function Di(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Ai(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */let Oi;class Mi{static fromObject(e){let t=new Mi(null);return Rt(e,((e,n)=>{t=t.set(new an(e),n)})),t}constructor(e,t=(()=>(Oi||(Oi=new On(St)),Oi))()){this.value=e,this.children=t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ln(),value:this.value};if(gn(e))return null;{const n=cn(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(un(e),t);if(null!=r){return{path:fn(new an(n),r.path),value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(gn(e))return this;{const t=cn(e),n=this.children.get(t);return null!==n?n.subtree(un(e)):new Mi(null)}}set(e,t){if(gn(e))return new Mi(t,this.children);{const n=cn(e),i=(this.children.get(n)||new Mi(null)).set(un(e),t),r=this.children.insert(n,i);return new Mi(this.value,r)}}remove(e){if(gn(e))return this.children.isEmpty()?new Mi(null):new Mi(null,this.children);{const t=cn(e),n=this.children.get(t);if(n){const i=n.remove(un(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new Mi(null):new Mi(this.value,r)}return this}}get(e){if(gn(e))return this.value;{const t=cn(e),n=this.children.get(t);return n?n.get(un(e)):null}}setTree(e,t){if(gn(e))return t;{const n=cn(e),i=(this.children.get(n)||new Mi(null)).setTree(un(e),t);let r;return r=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new Mi(this.value,r)}}fold(e){return this.fold_(ln(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(fn(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ln(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(gn(e))return null;{const i=cn(e),r=this.children.get(i);return r?r.findOnPath_(un(e),fn(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ln(),t)}foreachOnPath_(e,t,n){if(gn(e))return this;{this.value&&n(t,this.value);const i=cn(e),r=this.children.get(i);return r?r.foreachOnPath_(un(e),fn(t,i),n):new Mi(null)}}foreach(e){this.foreach_(ln(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(fn(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Fi{constructor(e){this.writeTree_=e}static empty(){return new Fi(new Mi(null))}}function Li(e,t,n){if(gn(t))return new Fi(new Mi(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let s=i.value;const o=mn(r,t);return s=s.updateChild(o,n),new Fi(e.writeTree_.set(r,s))}{const i=new Mi(n),r=e.writeTree_.setTree(t,i);return new Fi(r)}}}function qi(e,t,n){let i=e;return Rt(n,((e,n)=>{i=Li(i,fn(t,e),n)})),i}function ji(e,t){if(gn(t))return Fi.empty();{const n=e.writeTree_.setTree(t,new Mi(null));return new Fi(n)}}function Wi(e,t){return null!=Ui(e,t)}function Ui(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(mn(n.path,t)):null}function zi(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Hn,((e,n)=>{t.push(new kn(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new kn(e,n.value))})),t}function Bi(e,t){if(gn(t))return e;{const n=Ui(e,t);return new Fi(null!=n?new Mi(n):e.writeTree_.subtree(t))}}function Hi(e){return e.writeTree_.isEmpty()}function Vi(e,t){return $i(ln(),e.writeTree_,t)}function $i(e,n,i){if(null!=n.value)return i.updateChild(e,n.value);{let r=null;return n.children.inorderTraversal(((n,s)=>{".priority"===n?(t(null!==s.value,"Priority writes must always be leaf nodes"),r=s.value):i=$i(fn(e,n),s,i)})),i.getChild(e).isEmpty()||null===r||(i=i.updateChild(fn(e,".priority"),r)),i}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Yi(e,t){return or(t,e)}function Ki(e,n){const i=e.allWrites.findIndex((e=>e.writeId===n));t(i>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[i];e.allWrites.splice(i,1);let s=r.visible,o=!1,a=e.allWrites.length-1;for(;s&&a>=0;){const t=e.allWrites[a];t.visible&&(a>=i&&Gi(t,r.path)?s=!1:Cn(r.path,t.path)&&(o=!0)),a--}if(s){if(o)return function(e){e.visibleWrites=Ji(e.allWrites,Qi,ln()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(r.snap)e.visibleWrites=ji(e.visibleWrites,r.path);else{Rt(r.children,(t=>{e.visibleWrites=ji(e.visibleWrites,fn(r.path,t))}))}return!0}return!1}function Gi(e,t){if(e.snap)return Cn(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Cn(fn(e.path,n),t))return!0;return!1}function Qi(e){return e.visible}function Ji(e,t,i){let r=Fi.empty();for(let s=0;s<e.length;++s){const o=e[s];if(t(o)){const e=o.path;let t;if(o.snap)Cn(i,e)?(t=mn(i,e),r=Li(r,t,o.snap)):Cn(e,i)&&(t=mn(e,i),r=Li(r,ln(),o.snap.getChild(t)));else{if(!o.children)throw n("WriteRecord should have .snap or .children");if(Cn(i,e))t=mn(i,e),r=qi(r,t,o.children);else if(Cn(e,i))if(t=mn(e,i),gn(t))r=qi(r,ln(),o.children);else{const e=E(o.children,cn(t));if(e){const n=e.getChild(un(t));r=Li(r,ln(),n)}}}}}return r}function Xi(e,t,n,i,r){if(i||r){const s=Bi(e.visibleWrites,t);if(!r&&Hi(s))return n;if(r||null!=n||Wi(s,ln())){const s=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(Cn(e.path,t)||Cn(t,e.path))};return Vi(Ji(e.allWrites,s,t),n||Xn.EMPTY_NODE)}return null}{const i=Ui(e.visibleWrites,t);if(null!=i)return i;{const i=Bi(e.visibleWrites,t);if(Hi(i))return n;if(null!=n||Wi(i,ln())){return Vi(i,n||Xn.EMPTY_NODE)}return null}}}function Zi(e,t,n,i){return Xi(e.writeTree,e.treePath,t,n,i)}function er(e,t){return function(e,t,n){let i=Xn.EMPTY_NODE;const r=Ui(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(Hn,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const r=Bi(e.visibleWrites,t);return n.forEachChild(Hn,((e,t)=>{const n=Vi(Bi(r,new an(e)),t);i=i.updateImmediateChild(e,n)})),zi(r).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return zi(Bi(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function tr(e,n,i,r){return function(e,n,i,r,s){t(r||s,"Either existingEventSnap or existingServerSnap must exist");const o=fn(n,i);if(Wi(e.visibleWrites,o))return null;{const t=Bi(e.visibleWrites,o);return Hi(t)?s.getChild(i):Vi(t,s.getChild(i))}}(e.writeTree,e.treePath,n,i,r)}function nr(e,t){return function(e,t){return Ui(e.visibleWrites,t)}(e.writeTree,fn(e.treePath,t))}function ir(e,t,n,i,r,s){return function(e,t,n,i,r,s,o){let a;const l=Bi(e.visibleWrites,t),c=Ui(l,ln());if(null!=c)a=c;else{if(null==n)return[];a=Vi(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();for(;l&&e.length<r;)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,r,s)}function rr(e,t,n){return function(e,t,n,i){const r=fn(t,n),s=Ui(e.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n))return Vi(Bi(e.visibleWrites,r),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function sr(e,t){return or(fn(e.treePath,t),e.writeTree)}function or(e,t){return{treePath:e,writeTree:t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ar{constructor(){this.changeMap=new Map}trackChildChange(e){const i=e.type,r=e.childName;t("child_added"===i||"child_changed"===i||"child_removed"===i,"Only child changes supported for tracking"),t(".priority"!==r,"Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const t=s.type;if("child_added"===i&&"child_removed"===t)this.changeMap.set(r,oi(r,e.snapshotNode,s.snapshotNode));else if("child_removed"===i&&"child_added"===t)this.changeMap.delete(r);else if("child_removed"===i&&"child_changed"===t)this.changeMap.set(r,si(r,s.oldSnap));else if("child_changed"===i&&"child_added"===t)this.changeMap.set(r,ri(r,e.snapshotNode));else{if("child_changed"!==i||"child_changed"!==t)throw n("Illegal combination of changes: "+e+" occurred after "+s);this.changeMap.set(r,oi(r,e.snapshotNode,s.oldSnap))}}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const lr=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class cr{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Si(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return rr(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Ai(this.viewCache_),r=ir(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function hr(e,i,r,s,o){const a=new ar;let l,c;if(r.type===Ci.OVERWRITE){const n=r;n.source.fromUser?l=pr(e,i,n.path,n.snap,s,o,a):(t(n.source.fromServer,"Unknown source."),c=n.source.tagged||i.serverCache.isFiltered()&&!gn(n.path),l=dr(e,i,n.path,n.snap,s,o,c,a))}else if(r.type===Ci.MERGE){const n=r;n.source.fromUser?l=function(e,t,n,i,r,s,o){let a=t;return i.foreach(((i,l)=>{const c=fn(n,i);_r(t,cn(c))&&(a=pr(e,a,c,l,r,s,o))})),i.foreach(((i,l)=>{const c=fn(n,i);_r(t,cn(c))||(a=pr(e,a,c,l,r,s,o))})),a}(e,i,n.path,n.children,s,o,a):(t(n.source.fromServer,"Unknown source."),c=n.source.tagged||i.serverCache.isFiltered(),l=gr(e,i,n.path,n.children,s,o,c,a))}else if(r.type===Ci.ACK_USER_WRITE){const n=r;l=n.revert?function(e,n,i,r,s,o){let a;if(null!=nr(r,i))return n;{const l=new cr(r,n,s),c=n.eventCache.getNode();let h;if(gn(i)||".priority"===cn(i)){let i;if(n.serverCache.isFullyInitialized())i=Zi(r,Ai(n));else{const e=n.serverCache.getNode();t(e instanceof Xn,"serverChildren would be complete if leaf node"),i=er(r,e)}h=e.filter.updateFullNode(c,i,o)}else{const t=cn(i);let s=rr(r,t,n.serverCache);null==s&&n.serverCache.isCompleteForChild(t)&&(s=c.getImmediateChild(t)),h=null!=s?e.filter.updateChild(c,t,s,un(i),l,o):n.eventCache.getNode().hasChild(t)?e.filter.updateChild(c,t,Xn.EMPTY_NODE,un(i),l,o):c,h.isEmpty()&&n.serverCache.isFullyInitialized()&&(a=Zi(r,Ai(n)),a.isLeafNode()&&(h=e.filter.updateFullNode(h,a,o)))}return a=n.serverCache.isFullyInitialized()||null!=nr(r,ln()),Ri(n,h,a,e.filter.filtersNodes())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e,i,n.path,s,o,a):function(e,t,n,i,r,s,o){if(null!=nr(r,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(gn(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return dr(e,t,n,l.getNode().getChild(n),r,s,a,o);if(gn(n)){let i=new Mi(null);return l.getNode().forEachChild(xn,((e,t)=>{i=i.set(new an(e),t)})),gr(e,t,n,i,r,s,a,o)}return t}{let c=new Mi(null);return i.foreach(((e,t)=>{const i=fn(n,e);l.isCompleteForPath(i)&&(c=c.set(e,l.getNode().getChild(i)))})),gr(e,t,n,c,r,s,a,o)}}(e,i,n.path,n.affectedTree,s,o,a)}else{if(r.type!==Ci.LISTEN_COMPLETE)throw n("Unknown operation type: "+r.type);l=function(e,t,n,i,r){const s=t.serverCache,o=xi(t,s.getNode(),s.isFullyInitialized()||gn(n),s.isFiltered());return ur(e,o,n,i,lr,r)}(e,i,r.path,s,a)}const h=a.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=Di(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(ii(Di(t)))}}(i,l,h),{viewCache:l,changes:h}}function ur(e,n,i,r,s,o){const a=n.eventCache;if(null!=nr(r,i))return n;{let l,c;if(gn(i))if(t(n.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),n.serverCache.isFiltered()){const t=Ai(n),i=er(r,t instanceof Xn?t:Xn.EMPTY_NODE);l=e.filter.updateFullNode(n.eventCache.getNode(),i,o)}else{const t=Zi(r,Ai(n));l=e.filter.updateFullNode(n.eventCache.getNode(),t,o)}else{const h=cn(i);if(".priority"===h){t(1===hn(i),"Can't have a priority with additional path components");const s=a.getNode();c=n.serverCache.getNode();const o=tr(r,i,s,c);l=null!=o?e.filter.updatePriority(s,o):a.getNode()}else{const t=un(i);let u;if(a.isCompleteForChild(h)){c=n.serverCache.getNode();const e=tr(r,i,a.getNode(),c);u=null!=e?a.getNode().getImmediateChild(h).updateChild(t,e):a.getNode().getImmediateChild(h)}else u=rr(r,h,n.serverCache);l=null!=u?e.filter.updateChild(a.getNode(),h,u,t,s,o):a.getNode()}}return Ri(n,l,a.isFullyInitialized()||gn(i),e.filter.filtersNodes())}}function dr(e,t,n,i,r,s,o,a){const l=t.serverCache;let c;const h=o?e.filter:e.filter.getIndexedFilter();if(gn(n))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);c=h.updateFullNode(l.getNode(),e,null)}else{const e=cn(n);if(!l.isCompleteForPath(n)&&hn(n)>1)return t;const r=un(n),s=l.getNode().getImmediateChild(e).updateChild(r,i);c=".priority"===e?h.updatePriority(l.getNode(),s):h.updateChild(l.getNode(),e,s,r,lr,null)}const u=xi(t,c,l.isFullyInitialized()||gn(n),h.filtersNodes());return ur(e,u,n,r,new cr(r,u,s),a)}function pr(e,t,n,i,r,s,o){const a=t.eventCache;let l,c;const h=new cr(r,t,s);if(gn(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=Ri(t,c,!0,e.filter.filtersNodes());else{const r=cn(n);if(".priority"===r)c=e.filter.updatePriority(t.eventCache.getNode(),i),l=Ri(t,c,a.isFullyInitialized(),a.isFiltered());else{const s=un(n),c=a.getNode().getImmediateChild(r);let u;if(gn(s))u=i;else{const e=h.getCompleteChild(r);u=null!=e?".priority"===dn(s)&&e.getChild(_n(s)).isEmpty()?e:e.updateChild(s,i):Xn.EMPTY_NODE}if(c.equals(u))l=t;else{l=Ri(t,e.filter.updateChild(a.getNode(),r,u,s,h,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function _r(e,t){return e.eventCache.isCompleteForChild(t)}function fr(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function gr(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=gn(n)?i:new Mi(null).setTree(n,i);const h=t.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(h.hasChild(n)){const l=fr(0,t.serverCache.getNode().getImmediateChild(n),i);c=dr(e,c,new an(n),l,r,s,o,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!h.hasChild(n)&&!l){const l=fr(0,t.serverCache.getNode().getImmediateChild(n),i);c=dr(e,c,new an(n),l,r,s,o,a)}})),c}class mr{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new ai(n.getIndex()),r=(s=n).loadsAllData()?new ai(s.getIndex()):s.hasLimit()?new ci(s):new li(s);var s;this.processor_=function(e){return{filter:e}}(r);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(Xn.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(Xn.EMPTY_NODE,a.getNode(),null),h=new Si(l,o.isFullyInitialized(),i.filtersNodes()),u=new Si(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Pi(u,h),this.eventGenerator_=new ki(this.query_)}get query(){return this.query_}}function yr(e,t){const n=Ai(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!gn(t)&&!n.getImmediateChild(cn(t)).isEmpty())?n.getChild(t):null}function vr(e){return 0===e.eventRegistrations_.length}function Cr(e,n,i){const r=[];if(i){t(null==n,"A cancel should cancel all event registrations.");const s=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(i,s);t&&r.push(t)}))}if(n){let t=[];for(let i=0;i<e.eventRegistrations_.length;++i){const r=e.eventRegistrations_[i];if(r.matches(n)){if(n.hasAnyCallback()){t=t.concat(e.eventRegistrations_.slice(i+1));break}}else t.push(r)}e.eventRegistrations_=t}else e.eventRegistrations_=[];return r}function wr(e,n,i,r){n.type===Ci.MERGE&&null!==n.source.queryId&&(t(Ai(e.viewCache_),"We should always have a full cache before handling merges"),t(Di(e.viewCache_),"Missing event cache, even though we have a server cache"));const s=e.viewCache_,o=hr(e.processor_,s,n,i,r);var a,l;return a=e.processor_,l=o.viewCache,t(l.eventCache.getNode().isIndexed(a.filter.getIndex()),"Event snap not indexed"),t(l.serverCache.getNode().isIndexed(a.filter.getIndex()),"Server snap not indexed"),t(o.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,br(e,o.changes,o.viewCache.eventCache.getNode(),null)}function br(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const r=[],s=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Ni(e,r,"child_removed",t,i,n),Ni(e,r,"child_added",t,i,n),Ni(e,r,"child_moved",s,i,n),Ni(e,r,"child_changed",t,i,n),Ni(e,r,"value",t,i,n),r}(e.eventGenerator_,t,n,r)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */let Ir,Er;class Tr{constructor(){this.views=new Map}}function Sr(e,n,i,r){const s=n.source.queryId;if(null!==s){const o=e.views.get(s);return t(null!=o,"SyncTree gave us an op for an invalid query."),wr(o,n,i,r)}{let t=[];for(const s of e.views.values())t=t.concat(wr(s,n,i,r));return t}}function kr(e,t,n,i,r){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=Zi(n,r?i:null),s=!1;e?s=!0:i instanceof Xn?(e=er(n,i),s=!1):(e=Xn.EMPTY_NODE,s=!1);const o=Pi(new Si(e,s,!1),new Si(i,r,!1));return new mr(t,o)}return o}function Nr(e,t,n,i,r,s){const o=kr(e,t,i,r,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,i=[];n.getNode().isLeafNode()||n.getNode().forEachChild(Hn,((e,t)=>{i.push(ri(e,t))}));return n.isFullyInitialized()&&i.push(ii(n.getNode())),br(e,i,n.getNode(),t)}(o,n)}function Pr(e,n,i,r){const s=n._queryIdentifier,o=[];let a=[];const l=Or(e);if("default"===s)for(const[t,n]of e.views.entries())a=a.concat(Cr(n,i,r)),vr(n)&&(e.views.delete(t),n.query._queryParams.loadsAllData()||o.push(n.query));else{const t=e.views.get(s);t&&(a=a.concat(Cr(t,i,r)),vr(t)&&(e.views.delete(s),t.query._queryParams.loadsAllData()||o.push(t.query)))}return l&&!Or(e)&&o.push(new(t(Ir,"Reference.ts has not been loaded"),Ir)(n._repo,n._path)),{removed:o,events:a}}function Rr(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function xr(e,t){let n=null;for(const i of e.views.values())n=n||yr(i,t);return n}function Dr(e,t){if(t._queryParams.loadsAllData())return Mr(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Ar(e,t){return null!=Dr(e,t)}function Or(e){return null!=Mr(e)}function Mr(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */let Fr=1;class Lr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Mi(null),this.pendingWriteTree_={visibleWrites:Fi.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function qr(e,n,i,r,s){return function(e,n,i,r,s){t(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===s&&(s=!0),e.allWrites.push({path:n,snap:i,writeId:r,visible:s}),s&&(e.visibleWrites=Li(e.visibleWrites,n,i)),e.lastWriteId=r}(e.pendingWriteTree_,n,i,r,s),s?Yr(e,new Ei({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},n,i)):[]}function jr(e,n,i,r){!function(e,n,i,r){t(r>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:n,children:i,writeId:r,visible:!0}),e.visibleWrites=qi(e.visibleWrites,n,i),e.lastWriteId=r}(e.pendingWriteTree_,n,i,r);const s=Mi.fromObject(i);return Yr(e,new Ti({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},n,s))}function Wr(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(Ki(e.pendingWriteTree_,t)){let t=new Mi(null);return null!=i.snap?t=t.set(ln(),!0):Rt(i.children,(e=>{t=t.set(new an(e),!0)})),Yr(e,new bi(i.path,t,n))}return[]}function Ur(e,t,n){return Yr(e,new Ei({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function zr(e,t,n,i,r=!1){const s=t._path,o=e.syncPointTree_.get(s);let a=[];if(o&&("default"===t._queryIdentifier||Ar(o,t))){const l=Pr(o,t,n,i);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!r){const n=-1!==c.findIndex((e=>e._queryParams.loadsAllData())),r=e.syncPointTree_.findOnPath(s,((e,t)=>Or(t)));if(n&&!r){const t=e.syncPointTree_.subtree(s);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&Or(t)){return[Mr(t)]}{let e=[];return t&&(e=Rr(t)),Rt(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const i=n[t],r=i.query,s=Qr(e,i);e.listenProvider_.startListening(ns(r),Jr(e,r),s.hashFn,s.onComplete)}}}if(!r&&c.length>0&&!i)if(n){const n=null;e.listenProvider_.stopListening(ns(t),n)}else c.forEach((t=>{const n=e.queryToTagMap.get(Xr(t));e.listenProvider_.stopListening(ns(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=Xr(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,c)}return a}function Br(e,t,n,i){const r=Zr(e,i);if(null!=r){const i=es(r),s=i.path,o=i.queryId,a=mn(s,t);return ts(e,s,new Ei(wi(o),a,n))}return[]}function Hr(e,n,i,r=!1){const s=n._path;let o=null,a=!1;e.syncPointTree_.foreachOnPath(s,((e,t)=>{const n=mn(e,s);o=o||xr(t,n),a=a||Or(t)}));let l,c=e.syncPointTree_.get(s);if(c?(a=a||Or(c),o=o||xr(c,ln())):(c=new Tr,e.syncPointTree_=e.syncPointTree_.set(s,c)),null!=o)l=!0;else{l=!1,o=Xn.EMPTY_NODE;e.syncPointTree_.subtree(s).foreachChild(((e,t)=>{const n=xr(t,ln());n&&(o=o.updateImmediateChild(e,n))}))}const h=Ar(c,n);if(!h&&!n._queryParams.loadsAllData()){const i=Xr(n);t(!e.queryToTagMap.has(i),"View does not exist, but we have a tag");const r=Fr++;e.queryToTagMap.set(i,r),e.tagToQueryMap.set(r,i)}let u=Nr(c,n,i,Yi(e.pendingWriteTree_,s),o,l);if(!h&&!a&&!r){const i=Dr(c,n);u=u.concat(function(e,n,i){const r=n._path,s=Jr(e,n),o=Qr(e,i),a=e.listenProvider_.startListening(ns(n),s,o.hashFn,o.onComplete),l=e.syncPointTree_.subtree(r);if(s)t(!Or(l.value),"If we're adding a query, it shouldn't be shadowed");else{const t=l.fold(((e,t,n)=>{if(!gn(e)&&t&&Or(t))return[Mr(t).query];{let e=[];return t&&(e=e.concat(Rr(t).map((e=>e.query)))),Rt(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(ns(i),Jr(e,i))}}return a}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e,n,i))}return u}function Vr(e,t,n){const i=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=xr(n,mn(e,t));if(i)return i}));return Xi(i,t,r,n,!0)}function $r(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const r=mn(e,n);i=i||xr(t,r)}));let r=e.syncPointTree_.get(n);r?i=i||xr(r,ln()):(r=new Tr,e.syncPointTree_=e.syncPointTree_.set(n,r));const s=null!=i,o=s?new Si(i,!0,!1):null;return function(e){return Di(e.viewCache_)}(kr(r,t,Yi(e.pendingWriteTree_,t._path),s?o.getNode():Xn.EMPTY_NODE,s))}function Yr(e,t){return Kr(t,e.syncPointTree_,null,Yi(e.pendingWriteTree_,ln()))}function Kr(e,t,n,i){if(gn(e.path))return Gr(e,t,n,i);{const r=t.get(ln());null==n&&null!=r&&(n=xr(r,ln()));let s=[];const o=cn(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=sr(i,o);s=s.concat(Kr(a,l,e,t))}return r&&(s=s.concat(Sr(r,e,i,n))),s}}function Gr(e,t,n,i){const r=t.get(ln());null==n&&null!=r&&(n=xr(r,ln()));let s=[];return t.children.inorderTraversal(((t,r)=>{const o=n?n.getImmediateChild(t):null,a=sr(i,t),l=e.operationForChild(t);l&&(s=s.concat(Gr(l,r,o,a)))})),r&&(s=s.concat(Sr(r,e,i,n))),s}function Qr(e,t){const n=t.query,i=Jr(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||Xn.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?function(e,t,n){const i=Zr(e,n);if(i){const n=es(i),r=n.path,s=n.queryId,o=mn(r,t);return ts(e,r,new Ii(wi(s),o))}return[]}(e,n._path,i):function(e,t){return Yr(e,new Ii({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const i=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return zr(e,n,null,i)}}}}function Jr(e,t){const n=Xr(t);return e.queryToTagMap.get(n)}function Xr(e){return e._path.toString()+"$"+e._queryIdentifier}function Zr(e,t){return e.tagToQueryMap.get(t)}function es(e){const n=e.indexOf("$");return t(-1!==n&&n<e.length-1,"Bad queryKey."),{queryId:e.substr(n+1),path:new an(e.substr(0,n))}}function ts(e,n,i){const r=e.syncPointTree_.get(n);t(r,"Missing sync point for query tag that we're tracking");return Sr(r,i,Yi(e.pendingWriteTree_,n),null)}function ns(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(t(Er,"Reference.ts has not been loaded"),Er)(e._repo,e._path):e}class is{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new is(t)}node(){return this.node_}}class rs{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=fn(this.path_,e);return new rs(this.syncTree_,t)}node(){return Vr(this.syncTree_,this.path_)}}const ss=function(e,n,i){return e&&"object"==typeof e?(t(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?os(e[".sv"],n,i):"object"==typeof e[".sv"]?as(e[".sv"],n):void t(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},os=function(e,n,i){if("timestamp"===e)return i.timestamp;t(!1,"Unexpected server value: "+e)},as=function(e,n,i){e.hasOwnProperty("increment")||t(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;"number"!=typeof r&&t(!1,"Unexpected increment value: "+r);const s=n.node();if(t(null!=s,"Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return"number"!=typeof o?r:o+r},ls=function(e,t,n,i){return hs(t,new rs(n,e),i)},cs=function(e,t,n){return hs(e,new is(t),n)};function hs(e,t,n){const i=e.getPriority().val(),r=ss(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const i=e,s=ss(i.getValue(),t,n);return s!==i.getValue()||r!==i.getPriority().val()?new Bn(s,ei(r)):e}{const i=e;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new Bn(r))),i.forEachChild(Hn,((e,i)=>{const r=hs(i,t.getImmediateChild(e),n);r!==i&&(s=s.updateImmediateChild(e,r))})),s}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class us{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function ds(e,t){let n=t instanceof an?t:new an(t),i=e,r=cn(n);for(;null!==r;){const e=E(i.node.children,r)||{children:{},childCount:0};i=new us(r,i,e),n=un(n),r=cn(n)}return i}function ps(e){return e.node.value}function _s(e,t){e.node.value=t,vs(e)}function fs(e){return e.node.childCount>0}function gs(e,t){Rt(e.node.children,((n,i)=>{t(new us(n,e,i))}))}function ms(e,t,n,i){n&&t(e),gs(e,(e=>{ms(e,t,!0)}))}function ys(e){return new an(null===e.parent?e.name:ys(e.parent)+"/"+e.name)}function vs(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===ps(e)&&!fs(e)}(n),r=I(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,vs(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,vs(e))}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e.parent,e.name,e)}const Cs=/[\[\].#$\/\u0000-\u001F\u007F]/,ws=/[\[\].#$\u0000-\u001F\u007F]/,bs=10485760,Is=function(e){return"string"==typeof e&&0!==e.length&&!Cs.test(e)},Es=function(e){return"string"==typeof e&&0!==e.length&&!ws.test(e)},Ts=function(e,t,n){const i=n instanceof an?new wn(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+In(i));if("function"==typeof t)throw new Error(e+"contains a function "+In(i)+" with contents = "+t.toString());if(bt(t))throw new Error(e+"contains "+t.toString()+" "+In(i));if("string"==typeof t&&t.length>bs/3&&x(t)>bs)throw new Error(e+"contains a string greater than "+bs+" utf8 bytes "+In(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,r=!1;if(Rt(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!Is(t)))throw new Error(e+" contains an invalid key ("+t+") "+In(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');!function(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=x(t),bn(e)}(i,t),Ts(e,s,i),function(e){const t=e.parts_.pop();e.byteLength_-=x(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&r)throw new Error(e+' contains ".value" child '+In(i)+" in addition to actual children.")}},Ss=function(e,t,n,i){const r=R(e,"values");if(!t||"object"!=typeof t||Array.isArray(t))throw new Error(r+" must be an object containing the children to replace.");const s=[];Rt(t,((e,t)=>{const i=new an(e);if(Ts(r,t,fn(n,i)),".priority"===dn(i)&&!(null===(o=t)||"string"==typeof o||"number"==typeof o&&!bt(o)||o&&"object"==typeof o&&I(o,".sv")))throw new Error(r+"contains an invalid value for '"+i.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");var o;s.push(i)})),function(e,t){let n,i;for(n=0;n<t.length;n++){i=t[n];const r=pn(i);for(let t=0;t<r.length;t++)if(".priority"===r[t]&&t===r.length-1);else if(!Is(r[t]))throw new Error(e+"contains an invalid key ("+r[t]+") in path "+i.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(yn);let r=null;for(n=0;n<t.length;n++){if(i=t[n],null!==r&&Cn(r,i))throw new Error(e+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}}(r,s)},ks=function(e,t,n,i){if(!Es(n))throw new Error(R(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Ns=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Is(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Es(e)}(n))throw new Error(R(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Ps{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Rs(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();null===n||vn(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function xs(e,t,n){Rs(e,n),function(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){t(r.path)?(Ds(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]);e.recursionDepth_--}(e,(e=>Cn(e,t)||Cn(t,e)))}function Ds(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();ft&&mt("event: "+n.toString()),Ot(i)}}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class As{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ps,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=fi(),this.transactionQueueTree_=new us,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Os(e,t,n){if(e.stats_=Kt(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new pi(e.repoInfo_,((t,n,i,r)=>{Ls(e,t,n,i,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>qs(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{w(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Sn(e.repoInfo_,t,((t,n,i,r)=>{Ls(e,t,n,i,r)}),(t=>{qs(e,t)}),(t=>{!function(e,t){Rt(t,((t,n)=>{js(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return Yt[n]||(Yt[n]=t()),Yt[n]}(e.repoInfo_,(()=>new vi(e.stats_,e.server_))),e.infoData_=new _i,e.infoSyncTree_=new Lr({startListening:(t,n,i,r)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=Ur(e.infoSyncTree_,t._path,o),setTimeout((()=>{r("ok")}),0)),s},stopListening:()=>{}}),js(e,"connected",!1),e.serverSyncTree_=new Lr({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,((n,i)=>{const s=r(n,i);xs(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Ms(e){const t=e.infoData_.getNode(new an(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function Fs(e){return(t=(t={timestamp:Ms(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function Ls(e,t,n,i,r){e.dataUpdateCount++;const s=new an(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(r)if(i){const t=S(n,(e=>ei(e)));o=function(e,t,n,i){const r=Zr(e,i);if(r){const i=es(r),s=i.path,o=i.queryId,a=mn(s,t),l=Mi.fromObject(n);return ts(e,s,new Ti(wi(o),a,l))}return[]}(e.serverSyncTree_,s,t,r)}else{const t=ei(n);o=Br(e.serverSyncTree_,s,t,r)}else if(i){const t=S(n,(e=>ei(e)));o=function(e,t,n){const i=Mi.fromObject(n);return Yr(e,new Ti({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,s,t)}else{const t=ei(n);o=Ur(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=Vs(e,s)),xs(e.eventQueue_,a,o)}function qs(e,t){js(e,"connected",t),!1===t&&function(e){Us(e,"onDisconnectEvents");const t=Fs(e),n=fi();mi(e.onDisconnect_,ln(),((i,r)=>{const s=ls(i,r,e.serverSyncTree_,t);gi(n,i,s)}));let i=[];mi(n,ln(),((t,n)=>{i=i.concat(Ur(e.serverSyncTree_,t,n));const r=Qs(e,t);Vs(e,r)})),e.onDisconnect_=fi(),xs(e.eventQueue_,ln(),i)}(e)}function js(e,t,n){const i=new an("/.info/"+t),r=ei(n);e.infoData_.updateSnapshot(i,r);const s=Ur(e.infoSyncTree_,i,r);xs(e.eventQueue_,i,s)}function Ws(e){return e.nextWriteId_++}function Us(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),mt(n,...t)}function zs(e,t,n,i){t&&Ot((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let r=e;i&&(r+=": "+i);const s=new Error(r);s.code=e,t(s)}}))}function Bs(e,t,n){return Vr(e.serverSyncTree_,t,n)||Xn.EMPTY_NODE}function Hs(e,n=e.transactionQueueTree_){if(n||Gs(e,n),ps(n)){const i=Ys(e,n);t(i.length>0,"Sending zero length transaction queue");i.every((e=>0===e.status))&&function(e,n,i){const r=i.map((e=>e.currentWriteId)),s=Bs(e,n,r);let o=s;const a=s.hash();for(let e=0;e<i.length;e++){const r=i[e];t(0===r.status,"tryToSendTransactionQueue_: items in queue should all be run."),r.status=1,r.retryCount++;const s=mn(n,r.path);o=o.updateChild(s,r.currentOutputSnapshotRaw)}const l=o.val(!0),c=n;e.server_.put(c.toString(),l,(t=>{Us(e,"transaction put response",{path:c.toString(),status:t});let r=[];if("ok"===t){const t=[];for(let n=0;n<i.length;n++)i[n].status=2,r=r.concat(Wr(e.serverSyncTree_,i[n].currentWriteId)),i[n].onComplete&&t.push((()=>i[n].onComplete(null,!0,i[n].currentOutputSnapshotResolved))),i[n].unwatcher();Gs(e,ds(e.transactionQueueTree_,n)),Hs(e,e.transactionQueueTree_),xs(e.eventQueue_,n,r);for(let e=0;e<t.length;e++)Ot(t[e])}else{if("datastale"===t)for(let e=0;e<i.length;e++)3===i[e].status?i[e].status=4:i[e].status=0;else{wt("transaction at "+c.toString()+" failed: "+t);for(let e=0;e<i.length;e++)i[e].status=4,i[e].abortReason=t}Vs(e,n)}}),a)}(e,ys(n),i)}else fs(n)&&gs(n,(t=>{Hs(e,t)}))}function Vs(e,n){const i=$s(e,n),r=ys(i);return function(e,n,i){if(0===n.length)return;const r=[];let s=[];const o=n.filter((e=>0===e.status)),a=o.map((e=>e.currentWriteId));for(let o=0;o<n.length;o++){const c=n[o],h=mn(i,c.path);let u,d=!1;if(t(null!==h,"rerunTransactionsUnderNode_: relativePath should not be null."),4===c.status)d=!0,u=c.abortReason,s=s.concat(Wr(e.serverSyncTree_,c.currentWriteId,!0));else if(0===c.status)if(c.retryCount>=25)d=!0,u="maxretry",s=s.concat(Wr(e.serverSyncTree_,c.currentWriteId,!0));else{const t=Bs(e,c.path,a);c.currentInputSnapshot=t;const i=n[o].update(t.val());if(void 0!==i){Ts("transaction failed: Data returned ",i,c.path);let n=ei(i);"object"==typeof i&&null!=i&&I(i,".priority")||(n=n.updatePriority(t.getPriority()));const r=c.currentWriteId,o=Fs(e),l=cs(n,t,o);c.currentOutputSnapshotRaw=n,c.currentOutputSnapshotResolved=l,c.currentWriteId=Ws(e),a.splice(a.indexOf(r),1),s=s.concat(qr(e.serverSyncTree_,c.path,l,c.currentWriteId,c.applyLocally)),s=s.concat(Wr(e.serverSyncTree_,r,!0))}else d=!0,u="nodata",s=s.concat(Wr(e.serverSyncTree_,c.currentWriteId,!0))}xs(e.eventQueue_,i,s),s=[],d&&(n[o].status=2,l=n[o].unwatcher,setTimeout(l,Math.floor(0)),n[o].onComplete&&("nodata"===u?r.push((()=>n[o].onComplete(null,!1,n[o].currentInputSnapshot))):r.push((()=>n[o].onComplete(new Error(u),!1,null)))))}var l;Gs(e,e.transactionQueueTree_);for(let e=0;e<r.length;e++)Ot(r[e]);Hs(e,e.transactionQueueTree_)}(e,Ys(e,i),r),r}function $s(e,t){let n,i=e.transactionQueueTree_;for(n=cn(t);null!==n&&void 0===ps(i);)i=ds(i,n),n=cn(t=un(t));return i}function Ys(e,t){const n=[];return Ks(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Ks(e,t,n){const i=ps(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);gs(t,(t=>{Ks(e,t,n)}))}function Gs(e,t){const n=ps(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,_s(t,n.length>0?n:void 0)}gs(t,(t=>{Gs(e,t)}))}function Qs(e,t){const n=ys($s(e,t)),i=ds(e.transactionQueueTree_,t);return function(e,t){let n=e.parent;for(;null!==n;){if(t(n))return!0;n=n.parent}}(i,(t=>{Js(e,t)})),Js(e,i),ms(i,(t=>{Js(e,t)})),n}function Js(e,n){const i=ps(n);if(i){const r=[];let s=[],o=-1;for(let n=0;n<i.length;n++)3===i[n].status||(1===i[n].status?(t(o===n-1,"All SENT items should be at beginning of queue."),o=n,i[n].status=3,i[n].abortReason="set"):(t(0===i[n].status,"Unexpected transaction status in abort"),i[n].unwatcher(),s=s.concat(Wr(e.serverSyncTree_,i[n].currentWriteId,!0)),i[n].onComplete&&r.push(i[n].onComplete.bind(null,new Error("set"),!1,null))));-1===o?_s(n,void 0):i.length=o+1,xs(e.eventQueue_,ys(n),s);for(let e=0;e<r.length;e++)Ot(r[e])}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Xs=function(e,t){const n=Zs(e),i=n.namespace;"firebase.com"===n.domain&&Ct(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||Ct("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&wt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Bt(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new an(n.pathString)}},Zs=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let h=e.indexOf("/");-1===h&&(h=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(h,u)),h<u&&(r=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(h,u)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):wt(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in d&&(s=d.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}},eo="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",to=function(){let e=0;const n=[];return function(i){const r=i===e;let s;e=i;const o=new Array(8);for(s=7;s>=0;s--)o[s]=eo.charAt(i%64),i=Math.floor(i/64);t(0===i,"Cannot push at time == 0");let a=o.join("");if(r){for(s=11;s>=0&&63===n[s];s--)n[s]=0;n[s]++}else for(s=0;s<12;s++)n[s]=Math.floor(64*Math.random());for(s=0;s<12;s++)a+=eo.charAt(n[s]);return t(20===a.length,"nextPushId: Length should be 20."),a}}();
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class no{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+w(this.snapshot.exportVal())}}class io{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ro{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return t(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class so{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return gn(this._path)?null:dn(this._path)}get ref(){return new oo(this._repo,this._path)}get _queryIdentifier(){const e=di(this._queryParams),t=Nt(e);return"{}"===t?"default":t}get _queryObject(){return di(this._queryParams)}isEqual(e){if(!((e=D(e))instanceof so))return!1;const t=this._repo===e._repo,n=vn(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class oo extends so{constructor(e,t){super(e,t,new hi,!1)}get parent(){const e=_n(this._path);return null===e?null:new oo(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class ao{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new an(e),n=co(this.ref,e);return new ao(this._node.getChild(t),n,Hn)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new ao(n,co(this.ref,t),Hn))))}hasChild(e){const t=new an(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function lo(e,t){return(e=D(e))._checkNotDeleted("ref"),void 0!==t?co(e._root,t):e._root}function co(e,t){var n,i,r;return null===cn((e=D(e))._path)?(n="child",i="path",(r=t)&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),ks(n,i,r)):ks("child","path",t),new oo(e._repo,fn(e._path,t))}function ho(e,t){(function(e,t){if(".info"===cn(t))throw new Error(e+" failed = Can't modify data under /.info/")})("push",(e=D(e))._path),e._path;const n=Ms(e._repo),i=to(n),r=co(e,i),s=co(e,i);let o;return o=Promise.resolve(s),r.then=o.then.bind(o),r.catch=o.then.bind(o,void 0),r}function uo(e,t){Ss("update",t,e._path);const n=new f;return function(e,t,n,i){Us(e,"update",{path:t.toString(),value:n});let r=!0;const s=Fs(e),o={};if(Rt(n,((n,i)=>{r=!1,o[n]=ls(fn(t,n),ei(i),e.serverSyncTree_,s)})),r)mt("update() called with empty data.  Don't do anything."),zs(0,i,"ok",void 0);else{const r=Ws(e),s=jr(e.serverSyncTree_,t,o,r);Rs(e.eventQueue_,s),e.server_.merge(t.toString(),n,((n,s)=>{const o="ok"===n;o||wt("update at "+t+" failed: "+n);const a=Wr(e.serverSyncTree_,r,!o),l=a.length>0?Vs(e,t):t;xs(e.eventQueue_,l,a),zs(0,i,n,s)})),Rt(n,(n=>{const i=Qs(e,fn(t,n));Vs(e,i)})),xs(e.eventQueue_,t,[])}}(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}function po(e){e=D(e);const t=new ro((()=>{})),n=new _o(t);return function(e,t,n){const i=$r(e.serverSyncTree_,t);return null!=i?Promise.resolve(i):e.server_.get(t).then((i=>{const r=ei(i).withIndex(t._queryParams.getIndex());let s;if(Hr(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())s=Ur(e.serverSyncTree_,t._path,r);else{const n=Jr(e.serverSyncTree_,t);s=Br(e.serverSyncTree_,t._path,r,n)}return xs(e.eventQueue_,t._path,s),zr(e.serverSyncTree_,t,n,null,!0),r}),(n=>(Us(e,"get for query "+w(t)+" failed: "+n),Promise.reject(new Error(n)))))}(e._repo,e,n).then((t=>new ao(t,new oo(e._repo,e._path),e._queryParams.getIndex())))}class _o{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new no("value",this,new ao(e.snapshotNode,new oo(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new io(this,e,t):null}matches(e){return e instanceof _o&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}!function(e){t(!Ir,"__referenceConstructor has already been defined"),Ir=e}(oo),function(e){t(!Er,"__referenceConstructor has already been defined"),Er=e}(oo);
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const fo={};let go=!1;function mo(e,t,n,i,r){let s=i||e.options.databaseURL;void 0===s&&(e.options.projectId||Ct("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),mt("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a=Xs(s,r),l=a.repoInfo;"undefined"!=typeof process&&process.env&&(o=process.env.FIREBASE_DATABASE_EMULATOR_HOST),o?(s=`http://${o}?ns=${l.namespace}`,a=Xs(s,r),l=a.repoInfo):a.repoInfo.secure;const c=new Lt(e.name,e.options,t);Ns("Invalid Firebase Database URL",a),gn(a.path)||Ct("Database URL must point to the root of a Firebase Database (not including a child path).");const h=function(e,t,n,i){let r=fo[t.name];r||(r={},fo[t.name]=r);let s=r[e.toURLString()];s&&Ct("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new As(e,go,n,i),r[e.toURLString()]=s,s}(l,e,c,new Ft(e,n));return new yo(h,e)}class yo{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Os(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new oo(this._repo,ln())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=fo[t];n&&n[e.key]===e||Ct(`Database ${t}(${e.repoInfo_}) has already been deleted.`),function(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&Ct("Cannot call "+e+" on a deleted database.")}}Sn.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Sn.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function(e){!function(e){st=e}("11.4.0"),Ue(new A("database",((e,{instanceIdentifier:t})=>mo(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),$e(it,rt,e),$e(it,rt,"esm2017")}();var vo=Symbol.for("immer-nothing"),Co=Symbol.for("immer-draftable"),wo=Symbol.for("immer-state"),bo="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function Io(e,...t){if("production"!==process.env.NODE_ENV){const n=bo[e],i="function"==typeof n?n.apply(null,t):n;throw new Error(`[Immer] ${i}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Eo=Object.getPrototypeOf;function To(e){return!!e&&!!e[wo]}function So(e){return!!e&&(No(e)||Array.isArray(e)||!!e[Co]||!!e.constructor?.[Co]||Ao(e)||Oo(e))}var ko=Object.prototype.constructor.toString();function No(e){if(!e||"object"!=typeof e)return!1;const t=Eo(e);if(null===t)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===ko}function Po(e,t){0===Ro(e)?Reflect.ownKeys(e).forEach((n=>{t(n,e[n],e)})):e.forEach(((n,i)=>t(i,n,e)))}function Ro(e){const t=e[wo];return t?t.type_:Array.isArray(e)?1:Ao(e)?2:Oo(e)?3:0}function xo(e,t){return 2===Ro(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Do(e,t,n){const i=Ro(e);2===i?e.set(t,n):3===i?e.add(n):e[t]=n}function Ao(e){return e instanceof Map}function Oo(e){return e instanceof Set}function Mo(e){return e.copy_||e.base_}function Fo(e,t){if(Ao(e))return new Map(e);if(Oo(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=No(e);if(!0===t||"class_only"===t&&!n){const t=Object.getOwnPropertyDescriptors(e);delete t[wo];let n=Reflect.ownKeys(t);for(let i=0;i<n.length;i++){const r=n[i],s=t[r];!1===s.writable&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(t[r]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[r]})}return Object.create(Eo(e),t)}{const t=Eo(e);if(null!==t&&n)return{...e};const i=Object.create(t);return Object.assign(i,e)}}function Lo(e,t=!1){return jo(e)||To(e)||!So(e)||(Ro(e)>1&&(e.set=e.add=e.clear=e.delete=qo),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>Lo(t,!0)))),e}function qo(){Io(2)}function jo(e){return Object.isFrozen(e)}var Wo,Uo={};function zo(e){const t=Uo[e];return t||Io(0,e),t}function Bo(){return Wo}function Ho(e,t){t&&(zo("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Vo(e){$o(e),e.drafts_.forEach(Ko),e.drafts_=null}function $o(e){e===Wo&&(Wo=e.parent_)}function Yo(e){return Wo={drafts_:[],parent_:Wo,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Ko(e){const t=e[wo];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function Go(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return void 0!==e&&e!==n?(n[wo].modified_&&(Vo(t),Io(4)),So(e)&&(e=Qo(t,e),t.parent_||Xo(t,e)),t.patches_&&zo("Patches").generateReplacementPatches_(n[wo].base_,e,t.patches_,t.inversePatches_)):e=Qo(t,n,[]),Vo(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==vo?e:void 0}function Qo(e,t,n){if(jo(t))return t;const i=t[wo];if(!i)return Po(t,((r,s)=>Jo(e,i,t,r,s,n))),t;if(i.scope_!==e)return t;if(!i.modified_)return Xo(e,i.base_,!0),i.base_;if(!i.finalized_){i.finalized_=!0,i.scope_.unfinalizedDrafts_--;const t=i.copy_;let r=t,s=!1;3===i.type_&&(r=new Set(t),t.clear(),s=!0),Po(r,((r,o)=>Jo(e,i,t,r,o,n,s))),Xo(e,t,!1),n&&e.patches_&&zo("Patches").generatePatches_(i,n,e.patches_,e.inversePatches_)}return i.copy_}function Jo(e,t,n,i,r,s,o){if("production"!==process.env.NODE_ENV&&r===n&&Io(5),To(r)){const o=Qo(e,r,s&&t&&3!==t.type_&&!xo(t.assigned_,i)?s.concat(i):void 0);if(Do(n,i,o),!To(o))return;e.canAutoFreeze_=!1}else o&&n.add(r);if(So(r)&&!jo(r)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Qo(e,r),t&&t.scope_.parent_||"symbol"==typeof i||!Object.prototype.propertyIsEnumerable.call(n,i)||Xo(e,r)}}function Xo(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Lo(t,n)}var Zo={get(e,t){if(t===wo)return e;const n=Mo(e);if(!xo(n,t))return function(e,t,n){const i=na(t,n);return i?"value"in i?i.value:i.get?.call(e.draft_):void 0}(e,n,t);const i=n[t];return e.finalized_||!So(i)?i:i===ta(e.base_,t)?(ra(e),e.copy_[t]=sa(i,e)):i},has:(e,t)=>t in Mo(e),ownKeys:e=>Reflect.ownKeys(Mo(e)),set(e,t,n){const i=na(Mo(e),t);if(i?.set)return i.set.call(e.draft_,n),!0;if(!e.modified_){const i=ta(Mo(e),t),o=i?.[wo];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(((r=n)===(s=i)?0!==r||1/r==1/s:r!=r&&s!=s)&&(void 0!==n||xo(e.base_,t)))return!0;ra(e),ia(e)}var r,s;return e.copy_[t]===n&&(void 0!==n||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==ta(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,ra(e),ia(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const n=Mo(e),i=Reflect.getOwnPropertyDescriptor(n,t);return i?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:i.enumerable,value:n[t]}:i},defineProperty(){Io(11)},getPrototypeOf:e=>Eo(e.base_),setPrototypeOf(){Io(12)}},ea={};function ta(e,t){const n=e[wo];return(n?Mo(n):e)[t]}function na(e,t){if(!(t in e))return;let n=Eo(e);for(;n;){const e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=Eo(n)}}function ia(e){e.modified_||(e.modified_=!0,e.parent_&&ia(e.parent_))}function ra(e){e.copy_||(e.copy_=Fo(e.base_,e.scope_.immer_.useStrictShallowCopy_))}Po(Zo,((e,t)=>{ea[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),ea.deleteProperty=function(e,t){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&Io(13),ea.set.call(this,e,t,void 0)},ea.set=function(e,t,n){return"production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&Io(14),Zo.set.call(this,e[0],t,n,e[0])};function sa(e,t){const n=Ao(e)?zo("MapSet").proxyMap_(e,t):Oo(e)?zo("MapSet").proxySet_(e,t):function(e,t){const n=Array.isArray(e),i={type_:n?1:0,scope_:t?t.scope_:Bo(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let r=i,s=Zo;n&&(r=[i],s=ea);const{revoke:o,proxy:a}=Proxy.revocable(r,s);return i.draft_=a,i.revoke_=o,a}(e,t);return(t?t.scope_:Bo()).drafts_.push(n),n}function oa(e){if(!So(e)||jo(e))return e;const t=e[wo];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Fo(e,t.scope_.immer_.useStrictShallowCopy_)}else n=Fo(e,!0);return Po(n,((e,t)=>{Do(n,e,oa(t))})),t&&(t.finalized_=!1),n}var aa=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,n)=>{if("function"==typeof e&&"function"!=typeof t){const n=t;t=e;const i=this;return function(e=n,...r){return i.produce(e,(e=>t.call(this,e,...r)))}}let i;if("function"!=typeof t&&Io(6),void 0!==n&&"function"!=typeof n&&Io(7),So(e)){const r=Yo(this),s=sa(e,void 0);let o=!0;try{i=t(s),o=!1}finally{o?Vo(r):$o(r)}return Ho(r,n),Go(i,r)}if(!e||"object"!=typeof e){if(i=t(e),void 0===i&&(i=e),i===vo&&(i=void 0),this.autoFreeze_&&Lo(i,!0),n){const t=[],r=[];zo("Patches").generateReplacementPatches_(e,i,t,r),n(t,r)}return i}Io(1,e)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...n)=>this.produceWithPatches(t,(t=>e(t,...n)));let n,i;return[this.produce(e,t,((e,t)=>{n=e,i=t})),n,i]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){So(e)||Io(8),To(e)&&(e=function(e){To(e)||Io(10,e);return oa(e)}(e));const t=Yo(this),n=sa(e,void 0);return n[wo].isManual_=!0,$o(t),n}finishDraft(e,t){const n=e&&e[wo];n&&n.isManual_||Io(9);const{scope_:i}=n;return Ho(i,t),Go(void 0,i)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(0===i.path.length&&"replace"===i.op){e=i.value;break}}n>-1&&(t=t.slice(n+1));const i=zo("Patches").applyPatches_;return To(e)?i(e,t):this.produce(e,(e=>i(e,t)))}},la=aa.produce;aa.produceWithPatches.bind(aa),aa.setAutoFreeze.bind(aa),aa.setUseStrictShallowCopy.bind(aa),aa.applyPatches.bind(aa),aa.createDraft.bind(aa),aa.finishDraft.bind(aa);const ca=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];function ha(e,t){let n=new window.formulaParser.Parser,i=[];n.on("callCellValue",((t,n)=>{const r=t.column.index+1,s=t.row.index+1;if(i.push({x:r,y:s}),!e[s-1]||!e[s-1][r-1])return n("");n(e[s-1][r-1])})),n.on("callRangeValue",((t,n,r)=>{for(var s=[],o=t.row.index;o<=n.row.index;o++){for(var a=e[o],l=[],c=t.column.index;c<=n.column.index;c++){var h=a[c];i.push({x:c,y:o}),l.push(h)}s.push(l)}s&&r(s)}));let r=n.parse(t),s=!1,o=[];return i.forEach((t=>{let n=null;try{n=e[t.y-1][t.x-1],o.push(n)}catch{}("string"==typeof n||n instanceof String)&&n.toString().includes("=")&&(s=!0)})),{res:r,dependencies:i,later:s,dependendentOn:o}}if(console.log("unbundledbasicfirebasecrudservices"),Ve().length>1&&async function(e){let t=!1;const n=e.name;Le.has(n)?(t=!0,Le.delete(n)):qe.has(n)&&e.decRefCount()<=0&&(qe.delete(n),t=!0);t&&(await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}(Ve()[1]).then((function(){console.log("App deleted successfully")})).catch((function(e){console.log("Error deleting app:",e)})),Ve().length<1){let e={};try{e=document.body.dataset}catch(e){throw new Error("Unable to get params"+e)}He({apiKey:e.api,databaseURL:"https://"+e.base+".firebaseio.com",appId:e.app})}const ua=function(e=function(e=Me){const t=Le.get(e);if(!t&&e===Me&&_())return He();if(!t)throw ze.create("no-app",{appName:e});return t}(),t){const n=function(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=p("database");e&&function(e,t,n,i={}){e=D(e),e._checkNotDeleted("useEmulator");const r=`${t}:${n}`,s=e._repoInternal;if(e._instanceStarted){if(r===e._repoInternal.repoInfo_.host&&k(i,s.repoInfo_.emulatorOptions))return;Ct("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Ct('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new qt(qt.OWNER);else if(i.mockUserToken){const t="string"==typeof i.mockUserToken?i.mockUserToken:function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[a(JSON.stringify({alg:"none",type:"JWT"})),a(JSON.stringify(s)),""].join(".")}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(i.mockUserToken,e.app.options.projectId);o=new qt(t)}!function(e,t,n,i){e.repoInfo_=new Bt(t,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0,n),i&&(e.authTokenProvider_=i)}(s,r,i,o)}(n,...e)}return n}();let da=Object.assign({},{createNewDraft:function(e){return function(e){const t=la(e,(e=>{let t=!0;for(;t;){t=!1;for(let n=0;n<e.length;n++)for(let i=0;i<e[n].length;i++){let r=e[n][i];if(("string"==typeof r||r instanceof String)&&r.toString().includes("=")){let s={"СТЕПЕНЬ":"POWER","ЧПС":"NPV","ВСД":"IRR","МВСД":"MIRR","СУММ":"SUM","СРЗНАЧ":"AVERAGE","ОКРУГЛ":"ROUND","СТАНДОТКЛОН":"STDEV"},o=new RegExp(Object.keys(s).join("|"),"gi");r=r.replace(o,(function(e){return s[e]}));let a=ha(e,r.slice(1));a.later?(e[n][i]=r,t=!0):e[n][i]=a.res.result}else e[n][i]=r}}}));return t}(e)},getFirebaseNode:async function({url:e="crafts/temp_gmail_com/posts/-Ml6DEjYhdnjuW6HiHB7",type:t="array"}){try{let n=await po(lo(ua,e));if(n.exists()){let e=n.val();return"array"===t?Object.keys(e).map((t=>e[t])):e}return"array"===t?[]:null}catch(e){return console.log(e),"array"===t?[]:{}}},getFirebaseNodeKey:function(e){return ho(co(lo(ua),e+"/")).key},updateFirebaseNode:async function(e={temp:"temp"}){try{return await uo(lo(ua),e),!0}catch(e){return console.error(e),e}},caseReducer:function(e={},t){switch(t.type){case"SEED_ARRAY":return la(e,(e=>{e[t.payload.arrayName]=t.payload.arrayItems}));case"LOAD_DATA":return la(e,(e=>{e.data=t.payload.data,e.protoData=t.payload.protoData,e.expandView=!0}));case"NEW_EMPTY_SPREADSHEET":return la(e,(e=>{e.data=t.payload.data,e.protoData=t.payload.protoData,e.formulaValue=t.payload.protoData[0][0],e.expandView=!0}));case"UPDATE_FORMULA":return la(e,(e=>{e.formulaValue=t.payload.formulaValue,e.formulaRowIndex=t.payload.formulaRowIndex,e.formulaColumnIndex=t.payload.formulaColumnIndex,e.formulaIsInFocus=!1}));case"SAVE_CELL_AND_SET_NEXT_CELL_ACTIVE":return la(e,(e=>{e.data=t.payload.data,e.protoData=t.payload.protoData,e.formulaValue=t.payload.formulaValue,e.formulaRowIndex=t.payload.formulaRowIndex,e.formulaColumnIndex=t.payload.formulaColumnIndex}));case"SET_STORE_OBJECT":return la(e,(e=>{e[t.payload.key]=t.payload.value}));case"PUSH_ITEM_TO_ARRAY":return la(e,(e=>{e[t.payload.arrayName].push(t.payload.item)}));default:return e}},timeout:function(e){return new Promise((t=>setTimeout(t,e)))},loadState:function(){try{const e=localStorage.getItem("econolabs");if(null===e)return;return JSON.parse(e)}catch(e){return}},shuffle:function(e){return e.sort((()=>Math.random()-.5))},extract:function([e,t]){const n=new RegExp(`${e}(.*?)${t}`,"gm"),i=n=>n.slice(e.length,-1*t.length);return function(e){return e.match(n).map(i)}},produce:la,saveState:e=>{try{const t=JSON.stringify(e);localStorage.setItem("econolabs",t)}catch(e){console.log(e)}},generateUser:function(){const e=new Date;let t=e.getMonth()+1,n=e.getDay(),i=e.getSeconds(),r=e.getMilliseconds();t.toString().length<2&&(t="0"+(e.getMonth()+1)),i.toString().length<2&&(i="0"+e.getMinutes());let s="user-"+t+"-"+n+"-"+i+"-"+r+"@gmail.com";return{email:s,user:"Anonymous "+r+i,userEmail:s.replace(/[^a-zA-Z0-9]/g,"_")}},createProtoObject:function(e){let t={};for(var n=0;n<e.length;n++)for(var i=e[n],r=0;r<i.length;r++)""!==e[n][r]&&(t[ca[r]+(n+1)]=e[n][r]);return t},transactionsListFull:function(e){return Array.isArray(e)&&e.length>0?'<table class="table">\n  <thead>\n    <tr>\n      <th scope="col">#</th>\n      <th scope="col">Дебет</th>\n      <th scope="col">Кредит</th>\n      <th scope="col">Сумма</th>\n      <th scope="col">Период</th>\n    </tr>\n  </thead>\n  <tbody>\n    '+e.map(((e,t)=>`\n        <tr>\n      <th scope="row">${t+1}</th>\n      <td>${e?.bookD}</td>\n      <td>${e?.bookK}</td>\n      <td>${e?.sum}</td>\n       <td>${e?.period}</td>\n    </tr>\n    <tr>\n    <th scope='row'>Ком</th>\n    <td colspan='4'>${e?.comment?e.comment:""}</td>\n    </tr>\n    `)).join("")+"\n    </tbody>\n  </table> \n    ":""}});return da}));
//# sourceMappingURL=basicfirebasecrudservices.js.map
