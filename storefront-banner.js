var privacyBanner = (function (exports) {
    'use strict';

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    var __createBinding = Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function() { return m[k]; } };
        }
        Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    });

    function __exportStar(m, o) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }

    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    }

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    }
    var __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }

    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    function __classPrivateFieldIn(state, receiver) {
        if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
    }

    var tslib_es6 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        get __assign () { return __assign; },
        __asyncDelegator: __asyncDelegator,
        __asyncGenerator: __asyncGenerator,
        __asyncValues: __asyncValues,
        __await: __await,
        __awaiter: __awaiter,
        __classPrivateFieldGet: __classPrivateFieldGet,
        __classPrivateFieldIn: __classPrivateFieldIn,
        __classPrivateFieldSet: __classPrivateFieldSet,
        __createBinding: __createBinding,
        __decorate: __decorate,
        __exportStar: __exportStar,
        __extends: __extends,
        __generator: __generator,
        __importDefault: __importDefault,
        __importStar: __importStar,
        __makeTemplateObject: __makeTemplateObject,
        __metadata: __metadata,
        __param: __param,
        __read: __read,
        __rest: __rest,
        __spread: __spread,
        __spreadArray: __spreadArray,
        __spreadArrays: __spreadArrays,
        __values: __values
    });

    let TrackingEvents;

    (function (TrackingEvents) {
      TrackingEvents["TRACKING_ACCEPTED"] = "trackingConsentAccepted";
      TrackingEvents["TRACKING_DECLINED"] = "trackingConsentDeclined";
      TrackingEvents["FIRST_PARTY_MARKETING_ACCEPTED"] = "firstPartyMarketingConsentAccepted";
      TrackingEvents["THIRD_PARTY_MARKETING_ACCEPTED"] = "thirdPartyMarketingConsentAccepted";
      TrackingEvents["ANALYTICS_ACCEPTED"] = "analyticsConsentAccepted";
      TrackingEvents["PREFERENCES_ACCEPTED"] = "preferencesConsentAccepted";
      TrackingEvents["FIRST_PARTY_MARKETING_DECLINED"] = "firstPartyMarketingConsentDeclined";
      TrackingEvents["THIRD_PARTY_MARKETING_DECLINED"] = "thirdPartyMarketingConsentDeclined";
      TrackingEvents["ANALYTICS_DECLINED"] = "analyticsConsentDeclined";
      TrackingEvents["PREFERENCES_DECLINED"] = "preferencesConsentDeclined";
      TrackingEvents["CONSENT_COLLECTED"] = "visitorConsentCollected";
      TrackingEvents["CONSENT_TRACKING_API_LOADED"] = "consentTrackingApiLoaded";
    })(TrackingEvents || (TrackingEvents = {}));

    const CookieVersion = "2.1";
    let DisplayConsentValues;

    (function (DisplayConsentValues) {
      DisplayConsentValues["ACCEPTED"] = "yes";
      DisplayConsentValues["DECLINED"] = "no";
      DisplayConsentValues["NO_INTERACTION"] = "no_interaction";
      DisplayConsentValues["NO_VALUE"] = "";
    })(DisplayConsentValues || (DisplayConsentValues = {}));

    let ConsentValues;

    (function (ConsentValues) {
      ConsentValues["NO_VALUE"] = "";
      ConsentValues["ACCEPTED"] = "1";
      ConsentValues["DECLINED"] = "0";
    })(ConsentValues || (ConsentValues = {}));

    let TrackingRegulations;

    (function (TrackingRegulations) {
      TrackingRegulations["GDPR"] = "GDPR";
      TrackingRegulations["CCPA"] = "CCPA";
      TrackingRegulations["NO_VALUE"] = "";
    })(TrackingRegulations || (TrackingRegulations = {}));

    let DataProcessingPurpose;

    (function (DataProcessingPurpose) {
      DataProcessingPurpose["PREFERENCES"] = "p";
      DataProcessingPurpose["ANALYTICS"] = "a";
      DataProcessingPurpose["FIRST_PARTY_MARKETING"] = "m";
      DataProcessingPurpose["THIRD_PARTY_MARKETING"] = "t";
    })(DataProcessingPurpose || (DataProcessingPurpose = {}));

    let TrackingRegulationLimitations;

    (function (TrackingRegulationLimitations) {
      TrackingRegulationLimitations["GDPR"] = "GDPR";
      TrackingRegulationLimitations["GDPR_BLOCK_ALL"] = "GDPR_BLOCK_ALL";
      TrackingRegulationLimitations["CCPA"] = "CCPA";
    })(TrackingRegulationLimitations || (TrackingRegulationLimitations = {}));

    let ConsentKeys;

    (function (ConsentKeys) {
      ConsentKeys["MARKETING"] = "m";
      ConsentKeys["ANALYTICS"] = "a";
      ConsentKeys["PREFERENCES"] = "p";
      ConsentKeys["SALE_OF_DATA"] = "s";
    })(ConsentKeys || (ConsentKeys = {}));

    let ConsentDisplayKeys;

    (function (ConsentDisplayKeys) {
      ConsentDisplayKeys["MARKETING"] = "marketing";
      ConsentDisplayKeys["ANALYTICS"] = "analytics";
      ConsentDisplayKeys["PREFERENCES"] = "preferences";
      ConsentDisplayKeys["SALE_OF_DATA"] = "sale_of_data";
      ConsentDisplayKeys["EMAIL"] = "email";
    })(ConsentDisplayKeys || (ConsentDisplayKeys = {}));

    let HeadlessConsentMetadata;

    (function (HeadlessConsentMetadata) {
      HeadlessConsentMetadata["HEADLESS_STOREFRONT"] = "headlessStorefront";
      HeadlessConsentMetadata["ROOT_DOMAIN"] = "rootDomain";
      HeadlessConsentMetadata["STOREFRONT_ACCESS_TOKEN"] = "storefrontAccessToken";
    })(HeadlessConsentMetadata || (HeadlessConsentMetadata = {}));

    const CookieKeys = ["lim", "v", "con", "reg"];

    let cookieCache = {};

    function readCookie(cookieName) {
      if (cookieName in cookieCache) {
        return cookieCache[cookieName];
      }

      const cookies = document.cookie ? document.cookie.split("; ") : [];
      cookieCache[cookieName] = undefined;

      for (let i = 0; i < cookies.length; i++) {
        const [name, value] = cookies[i].split("=");

        if (cookieName === decodeURIComponent(name)) {
          cookieCache[cookieName] = JSON.parse(decodeURIComponent(value));
          break;
        }
      }

      return cookieCache[cookieName];
    }

    function isUriEncoded(str) {
      return str === encodeURIComponent(decodeURIComponent(str));
    }

    function writeCookie(cookieName, rootDomain, maxAge, cookieValue) {
      if (!isUriEncoded(cookieValue)) throw new TypeError("Cookie value is not correctly URI encoded.");
      if (!isUriEncoded(cookieName)) throw new TypeError("Cookie name is not correctly URI encoded.");
      let cookie = "".concat(cookieName, "=").concat(cookieValue);
      cookie += "; path=/";
      cookie += "; domain=".concat(rootDomain);
      cookie += "; expires=".concat(new Date(new Date().getTime() + maxAge).toUTCString());
      cookie += "; secure";
      document.cookie = cookie;
      cookieCache[cookieName] = JSON.parse(decodeURIComponent(cookieValue));
    }

    function resetCookieCache() {
      cookieCache = {};
    }

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }

      return keys;
    }

    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }

      return target;
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    function areArraysEqual(array1, array2) {
      const sortedArray2 = array2.slice().sort();
      return array1.length === array2.length && array1.slice().sort().every((value, index) => value === sortedArray2[index]);
    }

    function isArrayEmpty(array) {
      return array.length === 0;
    }

    const CONSENT_COOKIE_NAME = "_tracking_consent";

    function readConsentCookie() {
      const cookieObj = readCookie(CONSENT_COOKIE_NAME);

      if (cookieObj === undefined || cookieMalformed(cookieObj)) {
        return undefined;
      }

      return cookieObj;
    } // Similar to setTrackingConsent, but writes the cookie directly via JS instead of
    // asking the backend to do it. The tradeoff is that browser mechanisms like Apple's
    // Intelligent Tracking Protection will limit the cookie duration to short values.


    function setHeadlessTrackingConsent(consent, callback) {
      const oneYear = 1000 * 60 * 60 * 24 * 365; // 'reg' and 'lim' are corrected serverside when landing on checkout.
      // The values set here are placeholders.

      function coerceArgToVal(arg) {
        let defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ConsentValues.NO_VALUE;
        if (arg === true) return ConsentValues.ACCEPTED;
        if (arg === false) return ConsentValues.DECLINED;
        return defaultValue;
      }

      const signals = {
        [ConsentKeys.ANALYTICS]: coerceArgToVal(consent[ConsentDisplayKeys.ANALYTICS], ConsentValues.DECLINED),
        [ConsentKeys.MARKETING]: coerceArgToVal(consent[ConsentDisplayKeys.MARKETING], ConsentValues.DECLINED),
        [ConsentKeys.PREFERENCES]: coerceArgToVal(consent[ConsentDisplayKeys.PREFERENCES], ConsentValues.DECLINED),
        [ConsentKeys.SALE_OF_DATA]: coerceArgToVal(consent[ConsentDisplayKeys.SALE_OF_DATA])
      };
      const cookieValue = {
        v: CookieVersion,
        reg: TrackingRegulations.NO_VALUE,
        lim: [TrackingRegulationLimitations.GDPR_BLOCK_ALL, TrackingRegulationLimitations.CCPA],
        con: {
          CMP: signals
        }
      };
      const encodedCookie = encodeURIComponent(JSON.stringify(cookieValue));
      writeCookie(CONSENT_COOKIE_NAME, consent.rootDomain, oneYear, encodedCookie);
      callback(null);
    } // only exported for testing. Used as a single entrypoint for cookie reading, when
    // we had multiple versions this allows us to transform to the newest one on the fly.


    function readCookieAndTransform() {
      try {
        let cookie = readConsentCookie();

        if (!cookie) {
          return undefined;
        }

        return cookie;
      } catch (_unused) {
        return undefined;
      }
    }

    function getRegulationValue() {
      const cookie = readCookieAndTransform();

      if (validCookieDoesNotExist(cookie)) {
        return TrackingRegulations.NO_VALUE;
      }

      return cookie.reg;
    }

    function getShopPrefsValue() {
      const cookie = readCookieAndTransform();

      if (validCookieDoesNotExist(cookie)) {
        return {
          limit: []
        };
      }

      return {
        limit: cookie.lim
      };
    }

    function getCMPConsentValues() {
      return {
        m: getSignal(ConsentKeys.MARKETING),
        a: getSignal(ConsentKeys.ANALYTICS),
        p: getSignal(ConsentKeys.PREFERENCES),
        s: getSignal(ConsentKeys.SALE_OF_DATA)
      };
    }

    function getCCPAConsentValue() {
      return getCMPConsentValues()[ConsentKeys.SALE_OF_DATA];
    }

    function validCookieDoesNotExist() {
      let consentCookie = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (consentCookie === null) {
        consentCookie = readCookieAndTransform();
      }

      return consentCookie === undefined;
    }

    function cookieMalformed(cookie) {
      if (cookie.v !== CookieVersion) {
        return true;
      } // Remove optional keys from the cookie before checks:


      const keys = Object.keys(cookie).filter(key => key !== "region");
      return !areArraysEqual(keys, CookieKeys);
    }

    function transformConsentToDisplaySchema(consentValue) {
      switch (consentValue) {
        case ConsentValues.ACCEPTED:
          return DisplayConsentValues.ACCEPTED;

        case ConsentValues.DECLINED:
          return DisplayConsentValues.DECLINED;

        default:
          return DisplayConsentValues.NO_VALUE;
      }
    }

    function transformKeyToDisplayName(cookieKey) {
      switch (cookieKey) {
        case ConsentKeys.ANALYTICS:
          return ConsentDisplayKeys.ANALYTICS;

        case ConsentKeys.MARKETING:
          return ConsentDisplayKeys.MARKETING;

        case ConsentKeys.PREFERENCES:
          return ConsentDisplayKeys.PREFERENCES;

        case ConsentKeys.SALE_OF_DATA:
          return ConsentDisplayKeys.SALE_OF_DATA;
      }
    }

    function getSignal(signal) {
      const cookie = readCookieAndTransform();

      if (!cookie) {
        return ConsentValues.NO_VALUE;
      }

      const signals = cookie.con.CMP;

      if (!signals) {
        return ConsentValues.NO_VALUE;
      }

      return signals[signal];
    }

    const CMP_ANSWERS_COOKIE_NAME = "_cmp_a";

    function getCMPAnswersCookie() {
      return readCookie(CMP_ANSWERS_COOKIE_NAME);
    }

    function getPurposeFromCookie(purpose) {
      const cookie = getCMPAnswersCookie();

      if (!cookie) {
        return true;
      }

      const purposeValue = cookie.purposes[purpose];
      return typeof purposeValue === "boolean" ? purposeValue : true;
    }

    function preferencesProcessingAllowed$1() {
      return getPurposeFromCookie(DataProcessingPurpose.PREFERENCES);
    }

    function analyticsProcessingAllowed$1() {
      return getPurposeFromCookie(DataProcessingPurpose.ANALYTICS);
    }

    function firstPartyMarketingProcessingAllowed() {
      return getPurposeFromCookie(DataProcessingPurpose.FIRST_PARTY_MARKETING);
    }

    function thirdPartyMarketingProcessingAllowed() {
      return getPurposeFromCookie(DataProcessingPurpose.THIRD_PARTY_MARKETING);
    }

    function shouldShowBanner$2() {
      const cookie = getCMPAnswersCookie();

      if (!cookie) {
        return false;
      }

      return typeof cookie.display_banner === "boolean" ? cookie.display_banner : false;
    }

    function saleOfDataRegion$2() {
      const cookie = getCMPAnswersCookie();

      if (!cookie) {
        return false;
      }

      return cookie.sale_of_data_region || false;
    }

    const regulationEnforcementDict = {
      "": [],
      GDPR: [TrackingRegulationLimitations.GDPR, TrackingRegulationLimitations.GDPR_BLOCK_ALL],
      CCPA: [TrackingRegulationLimitations.CCPA]
    };

    function dispatchEvents(data) {
      if (data.consent !== undefined) {
        dispatchProcessingPurposeEvents({
          [DataProcessingPurpose.PREFERENCES]: data.consent,
          [DataProcessingPurpose.ANALYTICS]: data.consent,
          [DataProcessingPurpose.FIRST_PARTY_MARKETING]: data.consent,
          [DataProcessingPurpose.THIRD_PARTY_MARKETING]: data.consent
        });
      } else if (data.granular_consent !== undefined) {
        dispatchProcessingPurposeEvents({
          [DataProcessingPurpose.PREFERENCES]: preferencesProcessingAllowed$1(),
          [DataProcessingPurpose.ANALYTICS]: analyticsProcessingAllowed$1(),
          [DataProcessingPurpose.FIRST_PARTY_MARKETING]: firstPartyMarketingProcessingAllowed(),
          [DataProcessingPurpose.THIRD_PARTY_MARKETING]: thirdPartyMarketingProcessingAllowed()
        });
      }
    }

    function dispatchCustomEvent(event, detail) {
      document.dispatchEvent(new CustomEvent(event, {
        detail: detail || {}
      }));
    }

    function dispatchProcessingPurposeEvents(purposes) {
      const firstPartyMarketing = purposes[DataProcessingPurpose.FIRST_PARTY_MARKETING];
      const thirdPartyMarketing = purposes[DataProcessingPurpose.THIRD_PARTY_MARKETING];
      const analytics = purposes[DataProcessingPurpose.ANALYTICS];
      const preferences = purposes[DataProcessingPurpose.PREFERENCES];

      if (firstPartyMarketing === true) {
        dispatchCustomEvent(TrackingEvents.FIRST_PARTY_MARKETING_ACCEPTED);
      } else if (firstPartyMarketing === false) {
        dispatchCustomEvent(TrackingEvents.FIRST_PARTY_MARKETING_DECLINED);
      }

      if (thirdPartyMarketing === true) {
        dispatchCustomEvent(TrackingEvents.THIRD_PARTY_MARKETING_ACCEPTED);
      } else if (thirdPartyMarketing === false) {
        dispatchCustomEvent(TrackingEvents.THIRD_PARTY_MARKETING_DECLINED);
      }

      if (analytics === true) {
        dispatchCustomEvent(TrackingEvents.ANALYTICS_ACCEPTED);
      } else if (analytics === false) {
        dispatchCustomEvent(TrackingEvents.ANALYTICS_DECLINED);
      }

      if (preferences === true) {
        dispatchCustomEvent(TrackingEvents.PREFERENCES_ACCEPTED);
      } else if (preferences === false) {
        dispatchCustomEvent(TrackingEvents.PREFERENCES_DECLINED);
      }

      const consentCollectedEventDetail = generateGranularConsentEventDetail(purposes);
      dispatchCustomEvent(TrackingEvents.CONSENT_COLLECTED, consentCollectedEventDetail); // Compatibility: if everything is accepted/declined, fire the old events too.
      //
      // This fixes an issue that some merchants are having. Web pixels only listen for binary events,
      // so if you submit consent, the pixel won't launch until the page is reloaded.
      // With this, clicking the big accept all / reject all buttons, the pixel will do the correct thing.
      // Third party apps that never upgraded to our granular consent signals would also be affected by the
      // lack of this compatibility code.

      const consents = [analytics, preferences, firstPartyMarketing, thirdPartyMarketing];

      if (consents.every(con => con === true)) {
        dispatchCustomEvent(TrackingEvents.TRACKING_ACCEPTED);
      }

      if (consents.every(con => con === false)) {
        dispatchCustomEvent(TrackingEvents.TRACKING_DECLINED);
      }
    }

    function generateGranularConsentEventDetail(purposes) {
      const detailObject = {
        firstPartyMarketingAllowed: purposes[DataProcessingPurpose.FIRST_PARTY_MARKETING],
        thirdPartyMarketingAllowed: purposes[DataProcessingPurpose.THIRD_PARTY_MARKETING],
        analyticsAllowed: purposes[DataProcessingPurpose.ANALYTICS],
        preferencesAllowed: purposes[DataProcessingPurpose.PREFERENCES]
      };
      return detailObject;
    }

    const DONE = 4;

    function updateTrackingConsent(data, callback) {
      const xhr = new XMLHttpRequest();
      const body = JSON.stringify(data);
      xhr.open("POST", "/set_tracking_consent.json", true);
      xhr.setRequestHeader("Content-Type", "application/json");

      function handleReadyStateChange() {
        if (xhr.readyState !== DONE) {
          return;
        }

        resetCookieCache();
        const responseJson = parseResponse(xhr.responseText);

        if (isSuccessful(xhr.status)) {
          dispatchEvents(data);
          callback(null, responseJson);
        } else {
          callback(responseJson);
        }
      }

      xhr.onreadystatechange = handleReadyStateChange;
      xhr.send(body);
    }

    function parseResponse(responseText) {
      try {
        return JSON.parse(responseText);
      } catch (err) {
        return {
          error: "Unknown error"
        };
      }
    }

    function isSuccessful(status) {
      return status === 0 || 200 >= status && status < 400;
    }

    function headlessConsentApiCall(consent) {
      const payload = JSON.stringify({
        marketing: consent.marketing,
        analytics: consent.analytics,
        preferences: consent.preferences,
        saleOfData: consent.sale_of_data
      }).replace(/"/g, "");
      const query = "query { consentManagement { cookies(visitorConsent: ".concat(payload, ") { answersCookie trackingConsentCookie } } }");
      return {
        query: query,
        variables: {}
      };
    }

    function headlessUpdateTrackingConsent(payload, callback) {
      const consent = payload.granular_consent;
      const fetchParams = {
        headers: {
          "content-type": "application/json",
          "x-shopify-storefront-access-token": consent.storefrontAccessToken
        },
        body: JSON.stringify(headlessConsentApiCall(consent)),
        method: "POST"
      };
      fetch("https://".concat(consent.rootDomain, "/api/unstable/graphql.json"), fetchParams).then(serverResponse => {
        if (serverResponse.ok) {
          return serverResponse.json();
        } else {
          throw new Error("Server error");
        }
      }).then(responseJson => {
        const oneYear = 1000 * 60 * 60 * 24 * 365; // This seems to be deprecated, but the leading dot means "send this cookie to subdomains too".

        const domain = "." + window.location.hostname; // Ideally we would check here if the cookies are already set, for the correct
        // domain, before writting them ourselves.

        writeCookie(CONSENT_COOKIE_NAME, domain, oneYear, responseJson.data.consentManagement.cookies.trackingConsentCookie);
        writeCookie(CMP_ANSWERS_COOKIE_NAME, domain, oneYear, responseJson.data.consentManagement.cookies.answersCookie);
        dispatchEvents(payload);
        callback(null, responseJson);
      }).catch(error => {
        callback({
          error: "Error while setting headless consent: " + error.message
        });
      });
    }

    function validateConsent(consent) {
      if (typeof consent !== "boolean" && typeof consent !== "object") {
        throw TypeError("setTrackingConsent must be called with a boolean or object consent value");
      }

      if (typeof consent === "object") {
        const submittedConsentKeys = Object.keys(consent);

        if (submittedConsentKeys.length === 0) {
          throw TypeError("The submitted consent object is empty.");
        }

        const validConsentKeys = [ConsentDisplayKeys.MARKETING, ConsentDisplayKeys.ANALYTICS, ConsentDisplayKeys.PREFERENCES, ConsentDisplayKeys.SALE_OF_DATA, ConsentDisplayKeys.EMAIL, // Headless consent can give some extra metadata
        HeadlessConsentMetadata.ROOT_DOMAIN, HeadlessConsentMetadata.STOREFRONT_ACCESS_TOKEN, HeadlessConsentMetadata.HEADLESS_STOREFRONT];

        for (const purposeKey of submittedConsentKeys) {
          if (!validConsentKeys.includes(purposeKey)) {
            throw TypeError("The submitted consent object should only contain the following keys: ".concat(validConsentKeys.join(", "), ". Extraneous key: ").concat(purposeKey, "."));
          }
        }
      }
    }

    function setTrackingConsent$1(consent, callback) {
      if (validCookieDoesNotExist()) {
        // eslint-disable-next-line no-console
        console.warn("Shop is not configured to block privacy regulation in online store settings.");
      }

      validateConsent(consent);

      if (typeof callback !== "function") {
        throw TypeError("setTrackingConsent must be called with a callback function");
      }

      if (typeof consent === "object") {
        const referrerData = getReferrerData(consent.analytics);
        const landingPageData = getLandingPageData(consent.analytics);
        const consentClientMethod = consent.storefrontAccessToken && consent.rootDomain ? headlessUpdateTrackingConsent : updateTrackingConsent;
        return consentClientMethod(_objectSpread2(_objectSpread2({
          granular_consent: consent
        }, referrerData !== null && {
          referrer: referrerData
        }), landingPageData !== null && {
          landing_page: landingPageData
        }), callback);
      } else {
        const referrerData = getReferrerData(consent);
        const landingPageData = getLandingPageData(consent);
        return updateTrackingConsent(_objectSpread2(_objectSpread2({
          consent
        }, referrerData !== null && {
          referrer: referrerData
        }), landingPageData !== null && {
          landing_page: landingPageData
        }), callback);
      }
    }

    function setCCPAConsent$1(consent, callback) {
      if (!(typeof consent === "boolean")) {
        throw TypeError("setCCPAConsent must be called with a boolean consent value");
      }

      if (!(typeof callback === "function")) {
        throw TypeError("setCCPAConsent must be called with a callback function");
      }

      return updateTrackingConsent({
        ccpa_consent: consent
      }, callback);
    }

    function getConsentDisplayValue(consentValue) {
      if (validCookieDoesNotExist()) {
        return DisplayConsentValues.NO_VALUE;
      }

      if (consentValue === ConsentValues.NO_VALUE) {
        return DisplayConsentValues.NO_INTERACTION;
      }

      return transformConsentToDisplaySchema(consentValue);
    }

    function getTrackingConsent$1() {
      if (validCookieDoesNotExist()) {
        return DisplayConsentValues.NO_VALUE;
      }

      const consentValue = getCMPConsentValues();

      if (consentValue[ConsentKeys.MARKETING] === ConsentValues.ACCEPTED && consentValue[ConsentKeys.ANALYTICS] === ConsentValues.ACCEPTED) {
        return DisplayConsentValues.ACCEPTED;
      }

      if (consentValue[ConsentKeys.MARKETING] === ConsentValues.DECLINED || consentValue[ConsentKeys.ANALYTICS] === ConsentValues.DECLINED) {
        return DisplayConsentValues.DECLINED;
      }

      return DisplayConsentValues.NO_INTERACTION;
    }

    function getRegulation$1() {
      const regulation = getRegulationValue();

      if (regulation in TrackingRegulations) {
        return regulation;
      } else {
        return TrackingRegulations.NO_VALUE;
      }
    }

    function getShopPrefs$1() {
      return getShopPrefsValue();
    }

    function getReferrerData(consent) {
      if (!(merchantEnforcingRegulationLimit(TrackingRegulationLimitations.GDPR_BLOCK_ALL) && consent)) {
        return null;
      }

      return isBuyerOnFirstPageOfVisit() ? document.referrer : "";
    }

    function getLandingPageData(consent) {
      if (!(merchantEnforcingRegulationLimit(TrackingRegulationLimitations.GDPR_BLOCK_ALL) && consent)) {
        return null;
      }

      return isBuyerOnFirstPageOfVisit() ? window.location.pathname + window.location.search : "/";
    }

    function isLimitAppliedToRegulation(regulation, limitedReg) {
      return regulationEnforcementDict[regulation].includes(limitedReg);
    }

    function isBuyerOnFirstPageOfVisit() {
      if (document.referrer === "") {
        return true;
      }

      const a = document.createElement("a");
      a.href = document.referrer;
      return window.location.hostname != a.hostname;
    }

    function hasConsentForCCPA() {
      if (merchantEnforcingRegulationLimit(TrackingRegulationLimitations.CCPA)) {
        const consentValue = getCCPAConsentValue();
        return consentValue !== ConsentValues.DECLINED;
      }

      return true;
    }

    function merchantEnforcingGDPR() {
      return merchantEnforcingRegulationLimit(TrackingRegulationLimitations.GDPR) || merchantEnforcingRegulationLimit(TrackingRegulationLimitations.GDPR_BLOCK_ALL);
    }

    function hasConsentForGDPR() {
      if (!merchantEnforcingGDPR()) {
        return true;
      }

      const CMPConsent = getCMPConsentValues();

      if (CMPConsent[ConsentKeys.MARKETING] === ConsentValues.ACCEPTED && CMPConsent[ConsentKeys.ANALYTICS] === ConsentValues.ACCEPTED) {
        return true;
      }

      if (CMPConsent[ConsentKeys.MARKETING] === ConsentValues.DECLINED || CMPConsent[ConsentKeys.ANALYTICS] === ConsentValues.DECLINED) {
        return false;
      }

      const regulation = getRegulation$1();
      return regulation !== TrackingRegulations.GDPR;
    }

    function isRegulationEnforced$1() {
      const regulation = getRegulation$1();

      if (regulation === TrackingRegulations.NO_VALUE) {
        return false;
      }

      const shopPrefs = getShopPrefs$1();

      if (isArrayEmpty(shopPrefs.limit)) {
        return false;
      }

      return shopPrefs.limit.some(limitedReg => isLimitAppliedToRegulation(regulation, limitedReg));
    }

    function userCanBeTracked$1() {
      if (validCookieDoesNotExist()) {
        return true;
      }

      return hasConsentForGDPR();
    }

    function merchantEnforcingRegulationLimit(regulation) {
      const shopPrefs = getShopPrefs$1();
      return shopPrefs.limit.includes(regulation);
    } // true if Sale of Data has been accepted,
    // false if it has been declined,
    // null if there is no signal or we shouldn't read it.


    function GPCSignal() {
      if (getRegulation$1() !== TrackingRegulations.CCPA) {
        return null;
      }

      if (!merchantEnforcingRegulationLimit(TrackingRegulationLimitations.CCPA)) {
        return null;
      } // GPC seems to only be readable in firefox and brave.
      // Follows inverse logic. Positive signal means no consent.


      if (typeof navigator.globalPrivacyControl === "string") {
        // firefox
        return navigator.globalPrivacyControl === "1" ? false : true;
      }

      if (typeof navigator.globalPrivacyControl === "boolean") {
        // brave
        return !navigator.globalPrivacyControl;
      }

      return null;
    }

    function userDataCanBeSold$1() {
      const gpc = GPCSignal();
      const consent = hasConsentForCCPA();
      if (gpc !== null && consent !== false) return gpc;

      if (validCookieDoesNotExist()) {
        return true;
      }

      if (userCanBeTracked$1() === false) {
        return false;
      }

      return consent;
    }

    function shouldShowGDPRBanner$1() {
      return getRegulation$1() === TrackingRegulations.GDPR && isRegulationEnforced$1() && getTrackingConsent$1() === DisplayConsentValues.NO_INTERACTION;
    }

    function getCCPAConsent$1() {
      if (GPCSignal() === false) return DisplayConsentValues.DECLINED;
      return getConsentDisplayValue(getCCPAConsentValue());
    }

    function shouldShowCCPABanner$1() {
      return getRegulation$1() === TrackingRegulations.CCPA && getShopPrefs$1().limit.includes(TrackingRegulationLimitations.CCPA) && getCCPAConsent$1() === DisplayConsentValues.NO_INTERACTION;
    }

    function shouldShowBanner$1() {
      return shouldShowBanner$2() && getSignal(ConsentKeys.ANALYTICS) === ConsentValues.NO_VALUE && getSignal(ConsentKeys.MARKETING) === ConsentValues.NO_VALUE && getSignal(ConsentKeys.PREFERENCES) === ConsentValues.NO_VALUE;
    }

    function saleOfDataRegion$1() {
      return saleOfDataRegion$2();
    }

    function haveAnalyticsConsent() {
      return analyticsProcessingAllowed$1();
    }

    function havePreferencesConsent() {
      return preferencesProcessingAllowed$1();
    }

    function haveFirstPartyMarketingConsent() {
      return firstPartyMarketingProcessingAllowed();
    }

    function haveThirdPartyMarketingConsent() {
      return thirdPartyMarketingProcessingAllowed();
    }

    const consentMethods = {
      getTrackingConsent: getTrackingConsent$1,
      setTrackingConsent: setTrackingConsent$1,
      userCanBeTracked: userCanBeTracked$1,
      getRegulation: getRegulation$1,
      isRegulationEnforced: isRegulationEnforced$1,
      getShopPrefs: getShopPrefs$1,
      shouldShowGDPRBanner: shouldShowGDPRBanner$1,
      userDataCanBeSold: userDataCanBeSold$1,
      setCCPAConsent: setCCPAConsent$1,
      getCCPAConsent: getCCPAConsent$1,
      GPCSignal,
      shouldShowCCPABanner: shouldShowCCPABanner$1,
      haveAnalyticsConsent,
      havePreferencesConsent,
      haveFirstPartyMarketingConsent,
      haveThirdPartyMarketingConsent,
      getCCPAConsentValue,
      merchantEnforcingRegulationLimit,
      shouldShowBanner: shouldShowBanner$1,
      saleOfDataRegion: saleOfDataRegion$1
    };

    // Library to interact with bugsnag. We don't use the official package
    // (@bugsnag/js) because the bundle is fairly big.
    const BUGSNAG_API_KEY = "95ba910bcec4542ef2a0b64cd7ca666c"; // Use this method for reporting.
    //
    // - error: The error object being reported.
    // - context (optional): A string representing what was happening in the
    //     application at the time of the error. Usually a free form string about
    //     the general action being performed, for example "setTrackingConsent",
    //     "BannerDisplay", etc.
    // - notesForBugsnag (optional): A freeform string with any extra notes to add.

    function reportError(error, context, notesForBugsnag) {
      try {
        var _Shopify;

        const payload = {
          error: error,
          context: context,
          shopId: shopId() || ((_Shopify = window.Shopify) === null || _Shopify === void 0 ? void 0 : _Shopify.shop),
          notes: notesForBugsnag
        };
        sendBugsnagXhr(payload);
      } catch (e) {// don't handle - if error reporting fails, we don't want to try to report that error
      }
    } // This method takes a function and creates a proxy that catches errors and
    // reports them to bugsnag.
    //
    // Example:
    //
    //   function myFun(a, b){ return a[b]; }
    //   myInstrumentedFun = withBugsnag(myFun)
    //   myFun(null, 'property') // will throw because a is null
    //   myInstrumentedFun(null, 'property') // Will report to bugsnag before throwing


    function withBugsnag(fn) {
      return function () {
        try {
          return fn(...arguments);
        } catch (e) {
          reportError(e);
          throw e;
        }
      };
    }

    function shopId() {
      try {
        const features = document.getElementById("shopify-features").textContent;
        return JSON.parse(features).shopId;
      } catch (e) {
        // I'm not 100% sure that features object always there:
        return null;
      }
    }

    function stacktrace(error) {
      return error.stackTrace || error.stack || error.description || error.name;
    }

    function bugsnagPayload(metadata) {
      const stack = stacktrace(metadata.error);
      const [errorClass, errorMsg] = (stack || "unknown error").split("\n")[0].split(":");
      return JSON.stringify({
        payloadVersion: 5,
        notifier: {
          name: "ConsentTrackingAPI",
          version: "latest",
          url: "-"
        },
        events: [{
          exceptions: [{
            errorClass: (errorClass || "").trim(),
            message: (errorMsg || "").trim(),
            stacktrace: [{
              // Browsers don't have a standard for stacktraces. Bundle up as a
              // single object, attempting to extract column etc info will
              // possibly fail.
              //
              // We can improve this in the future, and also make sourcemaps work.
              file: "consent-tracking-api.js",
              lineNumber: "1",
              method: stack
            }],
            type: "browserjs"
          }],
          context: metadata.context || "general",
          app: {
            id: "ConsentTrackingAPI",
            version: "latest"
          },
          metaData: {
            request: {
              shopId: metadata.shopId,
              shopUrl: window.location.href
            },
            device: {
              userAgent: window.navigator.userAgent
            },
            "Additional Notes": metadata.notes
          },
          unhandled: false
        }]
      });
    }

    function sendBugsnagXhr(metadata) {
      const xhr = new XMLHttpRequest(); // https://bugsnagerrorreportingapi.docs.apiary.io/#reference/0/notify/send-error-reports

      xhr.open("POST", "https://notify.bugsnag.com/", true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("Bugsnag-Api-Key", BUGSNAG_API_KEY);
      xhr.setRequestHeader("Bugsnag-Payload-Version", "5");
      const payload = bugsnagPayload(metadata);
      xhr.send(payload);
    }

    /** PUBLIC METHODS: TODO Emit Monorail + Call Private Method Implementation */

    function getTrackingConsent() {
      return consentMethods.getTrackingConsent();
    }

    function setTrackingConsent(consent, callback) {
      // Legacy implementation of headless consent, it crafts the cookie manually
      // in javascript. To be deprecated in favour of the SF API based one.
      if (typeof consent === "object" && consent.headlessStorefront && !consent.storefrontAccessToken) {
        return setHeadlessTrackingConsent(consent, callback);
      }

      return consentMethods.setTrackingConsent(consent, callback);
    }

    function userCanBeTracked() {
      return consentMethods.userCanBeTracked();
    }

    function getRegulation() {
      return consentMethods.getRegulation();
    }

    function isRegulationEnforced() {
      return consentMethods.isRegulationEnforced();
    }

    function getShopPrefs() {
      return consentMethods.getShopPrefs();
    }

    function shouldShowGDPRBanner() {
      return consentMethods.shouldShowGDPRBanner();
    }

    function userDataCanBeSold() {
      return consentMethods.userDataCanBeSold();
    }

    function setCCPAConsent(consent, callback) {
      return consentMethods.setCCPAConsent(consent, callback);
    }

    function getCCPAConsent() {
      return consentMethods.getCCPAConsent();
    }

    function shouldShowCCPABanner() {
      return consentMethods.shouldShowCCPABanner();
    }

    function analyticsProcessingAllowed() {
      return consentMethods.haveAnalyticsConsent();
    }

    function preferencesProcessingAllowed() {
      return consentMethods.havePreferencesConsent();
    }

    function firstPartyMarketingAllowed() {
      return consentMethods.haveFirstPartyMarketingConsent();
    }

    function thirdPartyMarketingAllowed() {
      return consentMethods.haveThirdPartyMarketingConsent();
    }

    function shouldShowBanner() {
      return consentMethods.shouldShowBanner();
    }

    function saleOfDataRegion() {
      return consentMethods.saleOfDataRegion();
    }

    function doesMerchantSupportGranularConsent() {
      return true;
    }

    function currentVisitorConsent() {
      const currentConsent = {};
      const consent = getCMPConsentValues();

      for (const purpose of Object.keys(consent)) {
        currentConsent[transformKeyToDisplayName(purpose)] = transformConsentToDisplaySchema(consent[purpose]);
      }

      return currentConsent;
    }

    function shopifyConsentAPI() {
      // Shopify audiences relies on CCPA opt out events to respect CCPA.
      // To make it work with GPC we sync up the CCPA consent to the GPC value
      // when present, which as a side effect will send those events.
      // though in reality, this approach is flawed because Shopify Audiences
      // uses the IdentityGraph to match shopify_y to a Customer and does
      // not recheck after the initial event is fired (which is before there's
      // a chance to do an association between visitor to Customer) so the event
      // will never cause an opt Out of Audiences
      if (consentMethods.getCCPAConsentValue() != ConsentValues.DECLINED && consentMethods.GPCSignal() === false) {
        setCCPAConsent(false, () => false);
      }

      const api = {
        getTrackingConsent: withBugsnag(getTrackingConsent),
        setTrackingConsent: withBugsnag(setTrackingConsent),
        userCanBeTracked: withBugsnag(userCanBeTracked),
        getRegulation: withBugsnag(getRegulation),
        isRegulationEnforced: withBugsnag(isRegulationEnforced),
        getShopPrefs: withBugsnag(getShopPrefs),
        shouldShowGDPRBanner: withBugsnag(shouldShowGDPRBanner),
        userDataCanBeSold: withBugsnag(userDataCanBeSold),
        setCCPAConsent: withBugsnag(setCCPAConsent),
        getCCPAConsent: withBugsnag(getCCPAConsent),
        shouldShowCCPABanner: withBugsnag(shouldShowCCPABanner),
        doesMerchantSupportGranularConsent: withBugsnag(doesMerchantSupportGranularConsent),
        analyticsProcessingAllowed: withBugsnag(analyticsProcessingAllowed),
        preferencesProcessingAllowed: withBugsnag(preferencesProcessingAllowed),
        firstPartyMarketingAllowed: withBugsnag(firstPartyMarketingAllowed),
        thirdPartyMarketingAllowed: withBugsnag(thirdPartyMarketingAllowed),
        currentVisitorConsent: withBugsnag(currentVisitorConsent),
        shouldShowBanner: withBugsnag(shouldShowBanner),
        saleOfDataRegion: withBugsnag(saleOfDataRegion),
        unstable: {
          // Granular consent methods:
          analyticsProcessingAllowed: analyticsProcessingAllowed,
          preferencesProcessingAllowed: preferencesProcessingAllowed,
          firstPartyMarketingAllowed: firstPartyMarketingAllowed,
          thirdPartyMarketingAllowed: thirdPartyMarketingAllowed,
          currentVisitorConsent: currentVisitorConsent,
          shouldShowBanner: shouldShowBanner,
          saleOfDataRegion: saleOfDataRegion
        }
      };
      return api;
    } // exports required for the browser asset

    /* eslint-disable @typescript-eslint/naming-convention */
    var BannerInteraction;
    (function (BannerInteraction) {
        // Accept button in the main banner
        BannerInteraction["Accepted"] = "accept";
        // Decline button in the main banner
        BannerInteraction["Declined"] = "decline";
        // Accept All button in the preferences modal
        BannerInteraction["AcceptedAll"] = "accept_all";
        // Decline All button in the preferences modal
        BannerInteraction["DeclinedAll"] = "decline_all";
        // Manage preferences button in the main banner
        BannerInteraction["ManagePreferences"] = "manage_preferences";
        // Button in the preferences modal to save selection
        BannerInteraction["Save"] = "save";
        // Visitor left the preferences modal without saving, via the X button
        BannerInteraction["LeavePreferences"] = "leave_preferences";
        // Click on the privacy policy link
        BannerInteraction["PrivacyPolicyView"] = "privacy_policy_view";
    })(BannerInteraction || (BannerInteraction = {}));
    // banner id and class names
    var BannerAttribute;
    (function (BannerAttribute) {
        BannerAttribute["StylesContainerId"] = "shopify-pc__banner__styles";
        BannerAttribute["DialogId"] = "shopify-pc__banner";
        BannerAttribute["DialogClass"] = "shopify-pc__banner__dialog";
        BannerAttribute["WrapperClass"] = "shopify-pc__banner__wrapper";
        BannerAttribute["BodyClass"] = "shopify-pc__banner__body";
        BannerAttribute["BodyTitleId"] = "shopify-pc__banner__body-title";
        BannerAttribute["BodyCopyPolicyLinkId"] = "shopify-pc__banner__body-policy-link";
        BannerAttribute["ButtonsClass"] = "shopify-pc__banner__btns";
        BannerAttribute["ButtonsGranularClass"] = "shopify-pc__banner__btns-granular";
        BannerAttribute["ButtonAcceptId"] = "shopify-pc__banner__btn-accept";
        BannerAttribute["ButtonAcceptClass"] = "shopify-pc__banner__btn-accept";
        BannerAttribute["ButtonDeclineId"] = "shopify-pc__banner__btn-decline";
        BannerAttribute["ButtonDeclineClass"] = "shopify-pc__banner__btn-decline";
        BannerAttribute["ButtonManagePrefsId"] = "shopify-pc__banner__btn-manage-prefs";
        BannerAttribute["ButtonManagePrefsClass"] = "shopify-pc__banner__btn-manage-prefs";
    })(BannerAttribute || (BannerAttribute = {}));
    var ManageCookiesModal;
    (function (ManageCookiesModal) {
        ManageCookiesModal["StylesContainerId"] = "shopify-pc__prefs__styles";
        ManageCookiesModal["OverlayId"] = "shopify-pc__prefs__overlay";
        ManageCookiesModal["OverlayClass"] = "shopify-pc__prefs__overlay";
        ManageCookiesModal["WrapperId"] = "shopify-pc__prefs";
        ManageCookiesModal["WrapperClass"] = "shopify-pc__prefs";
        ManageCookiesModal["DialogId"] = "shopify-pc__prefs__dialog";
        ManageCookiesModal["DialogClass"] = "shopify-pc__prefs__dialog";
        ManageCookiesModal["DialogScrollableClass"] = "shopify-pc__prefs__scrollable";
        ManageCookiesModal["HeaderTitleId"] = "shopify-pc__prefs__header-title";
        ManageCookiesModal["HeaderActionsClass"] = "shopify-pc__prefs__header-actions";
        ManageCookiesModal["HeaderSaveId"] = "shopify-pc__prefs__header-save";
        ManageCookiesModal["HeaderAcceptId"] = "shopify-pc__prefs__header-accept";
        ManageCookiesModal["HeaderDeclineId"] = "shopify-pc__prefs__header-decline";
        ManageCookiesModal["HeaderCloseId"] = "shopify-pc__prefs__header-close";
        ManageCookiesModal["HeaderCloseClass"] = "shopify-pc__prefs__header-close";
        ManageCookiesModal["IntroClass"] = "shopify-pc__prefs__intro";
        ManageCookiesModal["IntroMainClass"] = "shopify-pc__prefs__intro-main";
        ManageCookiesModal["IntroExplainWrapperClass"] = "shopify-pc__prefs__intro-explain";
        ManageCookiesModal["IntroExplainAcceptClass"] = "shopify-pc__prefs__intro-explain-accept";
        ManageCookiesModal["IntroExplainDeclineClass"] = "shopify-pc__prefs__intro-explain-decline";
        ManageCookiesModal["OptionWrapperClass"] = "shopify-pc__prefs__options";
        ManageCookiesModal["OptionClass"] = "shopify-pc__prefs__option";
        ManageCookiesModal["OptionEssentialId"] = "shopify-pc__prefs__essential";
        ManageCookiesModal["OptionEssentialInputId"] = "shopify-pc__prefs__essential-input";
        ManageCookiesModal["OptionMarketingId"] = "shopify-pc__prefs__marketing";
        ManageCookiesModal["OptionMarketingInputId"] = "shopify-pc__prefs__marketing-input";
        ManageCookiesModal["OptionAnalyticsId"] = "shopify-pc__prefs__analytics";
        ManageCookiesModal["OptionAnalyticsInputId"] = "shopify-pc__prefs__analytics-input";
        ManageCookiesModal["OptionPreferencesId"] = "shopify-pc__prefs__preferences";
        ManageCookiesModal["OptionPreferencesInputId"] = "shopify-pc__prefs__preferences-input";
    })(ManageCookiesModal || (ManageCookiesModal = {}));
    var BannerPlacement;
    (function (BannerPlacement) {
        BannerPlacement["BottomFullWidth"] = "bottom-full-width";
        BannerPlacement["BottomLeft"] = "bottom-left";
        BannerPlacement["Center"] = "center";
        BannerPlacement["BottomRight"] = "bottom-right";
        BannerPlacement["BottomCenter"] = "bottom-center";
    })(BannerPlacement || (BannerPlacement = {}));
    var ButtonPlacement;
    (function (ButtonPlacement) {
        ButtonPlacement["AcceptFirst"] = "accept-first";
        ButtonPlacement["DeclineFirst"] = "decline-first";
    })(ButtonPlacement || (ButtonPlacement = {}));
    var ButtonWeight;
    (function (ButtonWeight) {
        ButtonWeight["Fill"] = "fill";
        ButtonWeight["Outline"] = "outline";
        ButtonWeight["Weighted"] = "weighted";
    })(ButtonWeight || (ButtonWeight = {}));
    var Overlay;
    (function (Overlay) {
        Overlay[Overlay["Yes"] = 1] = "Yes";
        Overlay[Overlay["No"] = 0] = "No";
    })(Overlay || (Overlay = {}));

    function getCSSForButtonPlacement(buttonPlacement, isAdminPreview) {
        switch (buttonPlacement) {
            case ButtonPlacement.AcceptFirst:
                return isAdminPreview ? 'flex-direction: column' : 'flex-direction: row;';
            case ButtonPlacement.DeclineFirst:
                return isAdminPreview ? 'flex-direction: column-reverse' : 'flex-direction: row-reverse;';
            default:
                return isAdminPreview ? 'flex-direction: column' : 'flex-direction: row;';
        }
    }

    var getButtonDivMinWidth = function (isAdminPreview, granularConsentEnabled) {
        if (isAdminPreview) {
            return 'auto';
        }
        // wide enough for buttons to render on a single line with default text (additional button in granular)
        return granularConsentEnabled ? '580px' : '365px';
    };
    function getCSSForBannerPlacement(bannerPlacement, buttonPlacement, themeColours, isAdminPreview, granularConsentEnabled) {
        var propsButtonPlacement = getCSSForButtonPlacement(buttonPlacement, isAdminPreview);
        var buttonDivMinWidth = getButtonDivMinWidth(isAdminPreview, granularConsentEnabled);
        var largeScreenBreakpoint = granularConsentEnabled ? '1280px' : '900px';
        var contentWrapper = "\n    .".concat(BannerAttribute.WrapperClass, " {\n      display: flex;\n      align-items: ").concat(isAdminPreview ? 'stretch' : 'center', ";\n      justify-content: space-between;\n      flex-direction: column;\n    }\n  ");
        var basePropsDialog = "\n    position: ".concat(isAdminPreview ? 'static' : 'fixed', ";\n    z-index: 2000000;\n    box-shadow: 0px 4px 10px rgb(63 63 68 / 40%);\n    max-height: 90%;\n    box-sizing: border-box;\n    opacity: 1;\n    padding: 32px;\n    background-color: ").concat(themeColours.backgroundColor, ";\n    overflow: auto;\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n    border: none;\n    text-align: left;\n  ");
        var flexDirectionColumnForMobile = function (isAdminPreview) {
            var styles = ".".concat(BannerAttribute.ButtonsClass, " {\n      flex-direction: column;\n    }\n    .").concat(BannerAttribute.ButtonsGranularClass, " :nth-child(1) {\n      order: 3;\n    }\n    .").concat(BannerAttribute.ButtonsGranularClass, " :nth-child(2) {\n      order: 1;\n    }\n    .").concat(BannerAttribute.ButtonsGranularClass, " :nth-child(3) {\n      order: 2;\n    }");
            return isAdminPreview
                ? styles
                : "\n      @media only screen and (max-width: 480px) {\n        ".concat(styles, "\n      }\n    ");
        };
        var cssForBottomFullWidth = "\n    .".concat(BannerAttribute.DialogClass, " {\n      ").concat(basePropsDialog, "\n      bottom: 0%;\n      width: 100%;\n    }\n    .").concat(BannerAttribute.DialogClass, " button {\n      margin: ").concat(isAdminPreview ? '15px' : '0', " 10px 0 0;\n    }\n    @media only screen and (max-width: ").concat(largeScreenBreakpoint, ") {\n      .").concat(BannerAttribute.DialogClass, " button {\n        margin: 15px 10px 0 0;\n      }\n    }\n    ").concat(contentWrapper, "\n    .").concat(BannerAttribute.WrapperClass, " {\n      flex-direction: ").concat(isAdminPreview ? 'column' : 'row', ";\n    }\n    @media only screen and (max-width: ").concat(largeScreenBreakpoint, ") {\n      .").concat(BannerAttribute.WrapperClass, " {\n        flex-direction: column;\n      }\n    }\n    .").concat(BannerAttribute.BodyClass, " {\n      margin-right: 5%;\n      margin-bottom: 0;\n    }\n    @media only screen and (max-width: ").concat(largeScreenBreakpoint, ") {\n      .").concat(BannerAttribute.BodyClass, " {\n        margin-right: 0;\n        margin-bottom: 10px;\n        width: 100%;\n      }\n    }\n    .").concat(BannerAttribute.ButtonsClass, " {\n      display: flex;\n      min-width: ").concat(buttonDivMinWidth, ";\n      ").concat(propsButtonPlacement, "\n    }\n    @media only screen and (max-width: ").concat(largeScreenBreakpoint, ") {\n      .").concat(BannerAttribute.ButtonsClass, " {\n        min-width: auto;\n        width: 100%;\n        justify-content: flex-end;\n      }\n    }\n    ").concat(flexDirectionColumnForMobile(isAdminPreview), "\n  ");
        var cssForCenter = "\n    .".concat(BannerAttribute.DialogClass, " {\n      ").concat(basePropsDialog, "\n      top: 50%;\n      left: 25%;\n      width: 50%;\n      transform: translate(0, -50%);\n      min-width: 280px;\n      border-radius: 3px;\n    }\n    ").concat(contentWrapper, "\n    @media only screen and (max-width: 1300px) {\n      .").concat(BannerAttribute.DialogClass, " {\n        left: 15%;\n        width: 70%;\n      }\n    }\n    @media only screen and (max-width: 900px) {\n      .").concat(BannerAttribute.DialogClass, " {\n        left: 5%;\n        width: 90%;\n      }\n    }\n    .").concat(BannerAttribute.BodyClass, " {\n      width: 100%;\n      margin-bottom: 10px;\n    }\n    .").concat(BannerAttribute.ButtonsClass, " {\n      display: flex;\n      width: 100%;\n      justify-content: flex-end;\n      ").concat(propsButtonPlacement, "\n    }\n    ").concat(flexDirectionColumnForMobile(isAdminPreview), "\n  ");
        var cssForBottomLeft = "\n    .".concat(BannerAttribute.DialogClass, " {\n      ").concat(basePropsDialog, "\n      bottom: 0;\n      left: 0;\n      max-width: 650px;\n      border-top-right-radius: 3px;\n    }\n    ").concat(contentWrapper, "\n    .").concat(BannerAttribute.BodyClass, " {\n      width: 100%;\n      margin-bottom: 10px;\n    }\n    .").concat(BannerAttribute.ButtonsClass, " {\n      display: flex;\n      justify-content: flex-end;\n      width: 100%;\n      ").concat(propsButtonPlacement, "\n    }\n    ").concat(flexDirectionColumnForMobile(isAdminPreview), "\n  ");
        var cssForBottomRight = "\n    .".concat(BannerAttribute.DialogClass, " {\n      ").concat(basePropsDialog, "\n      bottom: 0;\n      right: 0;\n      max-width: 650px;\n      border-top-left-radius: 3px;\n    }\n    ").concat(contentWrapper, "\n    .").concat(BannerAttribute.BodyClass, " {\n      width: 100%;\n      margin-bottom: 10px;\n    }\n    .").concat(BannerAttribute.ButtonsClass, " {\n      display: flex;\n      justify-content: flex-end;\n      width: 100%;\n      ").concat(propsButtonPlacement, "\n    }\n    ").concat(flexDirectionColumnForMobile(isAdminPreview), "\n  ");
        var cssForBottomCenter = "\n    .".concat(BannerAttribute.DialogClass, " {\n      ").concat(basePropsDialog, "\n      bottom: 0;\n      left: 25%;\n      width: 50%;\n      min-width: 280px;\n      border-top-right-radius: 3px;\n      border-top-left-radius: 3px;\n    }\n    ").concat(contentWrapper, "\n    @media only screen and (max-width: 1300px) {\n      .").concat(BannerAttribute.DialogClass, " {\n        left: 15%;\n        width: 70%;\n      }\n    }\n    @media only screen and (max-width: 900px) {\n      .").concat(BannerAttribute.DialogClass, " {\n        left: 5%;\n        width: 90%;\n      }\n    }\n    .").concat(BannerAttribute.BodyClass, " {\n      width: 100%;\n      margin-bottom: 10px;\n    }\n    .").concat(BannerAttribute.ButtonsClass, " {\n      display: flex;\n      width: 100%;\n      justify-content: flex-end;\n      ").concat(propsButtonPlacement, "\n    }\n    ").concat(flexDirectionColumnForMobile(isAdminPreview), "\n  ");
        if (isAdminPreview) {
            return cssForBottomFullWidth;
        }
        switch (bannerPlacement) {
            case BannerPlacement.BottomFullWidth:
                return cssForBottomFullWidth;
            case BannerPlacement.Center:
                return cssForCenter;
            case BannerPlacement.BottomLeft:
                return cssForBottomLeft;
            case BannerPlacement.BottomRight:
                return cssForBottomRight;
            case BannerPlacement.BottomCenter:
                return cssForBottomCenter;
            default:
                return cssForBottomFullWidth;
        }
    }

    var Colour;
    (function (Colour) {
        Colour["Black"] = "#333";
        Colour["White"] = "#fff";
        Colour["Gray"] = "#ccc";
        Colour["Green"] = "#3AA83A";
        Colour["LightGray"] = "#F7F8F9";
        Colour["DarkGray"] = "#36454F";
        Colour["VeryDarkGray"] = "#666";
        Colour["VeryLightGray"] = "#e5e5e5";
    })(Colour || (Colour = {}));

    var ThemeEnum;
    (function (ThemeEnum) {
        ThemeEnum["Custom"] = "custom";
        ThemeEnum["Dark"] = "dark";
        ThemeEnum["Light"] = "light";
    })(ThemeEnum || (ThemeEnum = {}));

    var BannerPositionEnum;
    (function (BannerPositionEnum) {
        BannerPositionEnum["BottomCenter"] = "bottom_center";
        BannerPositionEnum["BottomFullWidth"] = "bottom_full_width";
        BannerPositionEnum["BottomLeft"] = "bottom_left";
        BannerPositionEnum["BottomRight"] = "bottom_right";
        BannerPositionEnum["Center"] = "center";
    })(BannerPositionEnum || (BannerPositionEnum = {}));

    var linkStyle = function (themeColors) {
        return "\n    border: none;\n    color: ".concat(themeColors.fontColor, ";\n    background: transparent;\n  ");
    };
    var buttonStyle = function (themeColors) {
        return "\n    border: 1px solid ".concat(themeColors.button.borderColor, ";\n    color: ").concat(themeColors.button.fontColor, ";\n    background: ").concat(themeColors.button.backgroundColor, ";\n  ");
    };
    function getCSSForButtonWeight(buttonWeight, theme, themeColours) {
        if (theme === ThemeEnum.Custom) {
            return {
                accept: buttonStyle(themeColours),
                decline: buttonStyle(themeColours),
                manage: linkStyle(themeColours),
            };
        }
        var isDarkTheme = theme === ThemeEnum.Dark;
        var buttonFill = "\n    background: ".concat(isDarkTheme ? Colour.White : Colour.Black, ";\n    color: ").concat(isDarkTheme ? Colour.Black : Colour.White, ";\n  ");
        var buttonOutline = "\n    background: ".concat(isDarkTheme ? Colour.Black : Colour.White, ";\n    color: ").concat(isDarkTheme ? Colour.White : Colour.Black, ";\n  ");
        var buttonTransparent = "\n    background: transparent;\n    border: none;\n    color: ".concat(isDarkTheme ? Colour.White : Colour.Black, ";\n  ");
        switch (buttonWeight) {
            case ButtonWeight.Fill:
                return {
                    accept: buttonFill,
                    decline: buttonFill,
                    manage: buttonTransparent,
                };
            case ButtonWeight.Outline:
                return {
                    accept: buttonOutline,
                    decline: buttonOutline,
                    manage: buttonTransparent,
                };
            case ButtonWeight.Weighted:
                return {
                    accept: buttonFill,
                    decline: buttonOutline,
                    manage: buttonTransparent,
                };
            default:
                return {
                    accept: buttonFill,
                    decline: buttonOutline,
                    manage: buttonTransparent,
                };
        }
    }

    function getColours(hslaFont, hslaBackground, hslaButtonFont, hslaButtonBackground) {
        if (hslaBackground === void 0) { hslaBackground = '0,0,100,100'; }
        if (hslaButtonFont === void 0) { hslaButtonFont = '0,0,0,100'; }
        if (hslaButtonBackground === void 0) { hslaButtonBackground = '0,0,100,100'; }
        var _a = hslaFont.split(','), fontHue = _a[0], fontSat = _a[1], fontLightness = _a[2], fontAlpha = _a[3];
        var _b = hslaBackground.split(','), bgHue = _b[0], bgSat = _b[1], bgLightness = _b[2], bgAlpha = _b[3];
        var _c = hslaButtonFont.split(','), btnFontHue = _c[0], btnFontSat = _c[1], btnFontLightness = _c[2], btnFontAlpha = _c[3];
        var _d = hslaButtonBackground.split(','), btnBgHue = _d[0], btnBgSat = _d[1], btnBgLightness = _d[2], btnBgAlpha = _d[3];
        var font = {
            hue: Number(fontHue),
            saturation: Number(fontSat),
            lightness: Number(fontLightness),
            alpha: Number(fontAlpha),
        };
        var background = {
            hue: Number(bgHue),
            saturation: Number(bgSat),
            lightness: Number(bgLightness),
            alpha: Number(bgAlpha),
        };
        var buttonFont = {
            hue: Number(btnFontHue),
            saturation: Number(btnFontSat),
            lightness: Number(btnFontLightness),
            alpha: Number(btnFontAlpha),
        };
        var buttonBackground = {
            hue: Number(btnBgHue),
            saturation: Number(btnBgSat),
            lightness: Number(btnBgLightness),
            alpha: Number(btnBgAlpha),
        };
        var fontSubdued = {
            hue: font.hue,
            saturation: font.saturation,
            lightness: font.lightness,
            alpha: font.alpha - 10,
        };
        var divider = {
            hue: background.hue,
            saturation: background.saturation,
            lightness: background.lightness < 50 ? background.lightness + 14 : background.lightness - 12,
            alpha: background.alpha,
        };
        var focused = {
            hue: 201,
            saturation: background.lightness < 50 ? 60 : 90,
            lightness: background.lightness < 50 ? 60 : 80,
            alpha: background.lightness < 50 ? 80 : 100,
        };
        return {
            font: format(font),
            fontSubdued: format(fontSubdued),
            buttonFont: format(buttonFont),
            buttonBackground: format(buttonBackground),
            background: format(background),
            divider: format(divider),
            focused: format(focused),
        };
    }
    function format(hslaObject) {
        return "hsl(".concat(hslaObject.hue, "deg, ").concat(hslaObject.saturation, "%, ").concat(hslaObject.lightness, "%, ").concat(hslaObject.alpha, "%)");
    }
    function getThemeColours(theme, customFont, customBackground, customButtonFont, customButtonBackgroundFont) {
        var defaultCustomFont = '0,0,0,100';
        var defaultCustomBackground = '0,0,100,100';
        var coloursLightTheme = getColours('0,0,12,100', '0,0,100,100', '0,0,12,100', '0,0,100,100');
        var coloursDarkTheme = getColours('0,0,100,87', '0,0,12,100', '0,0,100,87', '0,0,12,100');
        var coloursCustomTheme = getColours(customFont !== null && customFont !== void 0 ? customFont : defaultCustomFont, customBackground !== null && customBackground !== void 0 ? customBackground : defaultCustomBackground, customButtonFont !== null && customButtonFont !== void 0 ? customButtonFont : defaultCustomFont, customButtonBackgroundFont !== null && customButtonBackgroundFont !== void 0 ? customButtonBackgroundFont : defaultCustomBackground);
        var colours = (function () {
            switch (theme) {
                case ThemeEnum.Light:
                    return coloursLightTheme;
                case ThemeEnum.Dark:
                    return coloursDarkTheme;
                case ThemeEnum.Custom:
                    return coloursCustomTheme;
                default:
                    return coloursLightTheme;
            }
        })();
        return {
            backgroundColor: colours.background,
            fontColor: colours.font,
            fontSubduedColor: colours.fontSubdued,
            sectionDivider: colours.divider,
            iconColor: colours.font,
            focused: colours.focused,
            button: {
                borderColor: colours.buttonFont,
                backgroundColor: colours.buttonBackground,
                fontColor: colours.buttonFont,
            },
            primaryButton: {
                borderColor: colours.buttonBackground,
                backgroundColor: colours.buttonFont,
                fontColor: colours.buttonBackground,
            },
        };
    }

    function getCSSForOverlay(overlay, isAdminPreview) {
        var applyOverlay = Boolean(overlay);
        if (isAdminPreview) {
            return 'display: none;';
        }
        if (applyOverlay) {
            return "\n      z-index: 2000001;\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-color: rgba(0, 0, 0, 0.6);\n    ";
        }
        return 'display: none;';
    }

    /* eslint-disable no-irregular-whitespace */
    function modalCssTemplate(bannerData, isAdminPreview) {
        if (isAdminPreview === void 0) { isAdminPreview = false; }
        var themeColours = getThemeColours(bannerData.theme, bannerData.themeColorHslFont, bannerData.themeColorHslBackground, bannerData.themeColorHslButtonFont, bannerData.themeColorHslButtonBackground);
        var propsOverlay = getCSSForOverlay(Overlay.Yes, isAdminPreview);
        return "\n    .".concat(ManageCookiesModal.WrapperClass, " {\n      position: relative;\n    }\n    .").concat(ManageCookiesModal.WrapperClass, ":after {\n      content: \"\";\n      display: block;\n      clear: both;\n    }\n\n    .").concat(ManageCookiesModal.DialogClass, " {\n      box-shadow: 0 5px 10px rgb(63 63 68 / 50%);\n      position: ").concat(isAdminPreview ? 'static' : 'fixed', ";\n      z-index: 2000002;\n      opacity: 1;\n      background-color: ").concat(themeColours.backgroundColor, ";\n      ").concat(isAdminPreview ? '' : 'max-height: 80%;', "\n      overflow-y: auto;\n      top: ").concat(isAdminPreview ? 'auto' : '50%', ";\n      transform: ").concat(isAdminPreview ? 'none' : 'translate(0, -50%)', ";\n      min-width: 280px;\n      border-radius: 3px;\n      display: flex;\n      flex-direction: column;\n      left: ").concat(isAdminPreview ? 'auto' : '25%', ";\n      width: ").concat(isAdminPreview ? '100%' : '50%', ";\n      text-align: left;\n    }\n    @media only screen and (max-width: 1900px) {\n      .").concat(ManageCookiesModal.DialogClass, " {\n        left: ").concat(isAdminPreview ? 'auto' : '20%', ";\n        width: ").concat(isAdminPreview ? 'auto' : '60%', ";\n      }\n    }\n    @media only screen and (max-width: 1600px) {\n      .").concat(ManageCookiesModal.DialogClass, " {\n        left: ").concat(isAdminPreview ? 'auto' : '15%', ";\n        width: ").concat(isAdminPreview ? 'auto' : '70%', ";\n      }\n    }\n    @media only screen and (max-width: 1350px) {\n      .").concat(ManageCookiesModal.DialogClass, " {\n        left: ").concat(isAdminPreview ? 'auto' : '5%', ";\n        width: ").concat(isAdminPreview ? 'auto' : '90%', ";\n      }\n    }\n\n    .").concat(ManageCookiesModal.OverlayClass, " {\n      ").concat(propsOverlay, "\n    }\n\n    /* Header */\n\n    .").concat(ManageCookiesModal.DialogClass, " header {\n      display: flex;\n      flex-direction: ").concat(isAdminPreview ? 'column' : 'row', ";\n      justify-content: space-between;\n      align-items: center;\n      padding: 32px 32px 20px 32px;\n      border-bottom: 1px solid ").concat(themeColours.sectionDivider, ";\n      position: relative;\n      background: transparent;\n    }\n\n    @media only screen and (max-width: 1200px) {\n      .").concat(ManageCookiesModal.DialogClass, " header {\n        flex-direction: column;\n      }\n    }\n    @media only screen and (max-width: 400px) {\n      .").concat(ManageCookiesModal.DialogClass, " header {\n        padding: 15px 20px 10px 20px;\n      }\n    }\n    .").concat(ManageCookiesModal.DialogClass, " header h2 {\n      color: ").concat(themeColours.fontColor, ";\n      font-family: inherit;\n      margin: ").concat(isAdminPreview ? '0 0 .8em 0' : '0 0 0 0', ";\n      padding: 0 20px 0 0 !important;\n      font-weight: 600;\n      font-size: 130%;\n      line-height: 1.2;\n      width: 100%;\n      text-align: left;\n      word-break: normal;\n    }\n    @media only screen and (max-width: 1200px) {\n      .").concat(ManageCookiesModal.DialogClass, " header h2 {\n        margin: 0 0 .8em 0;\n        padding: 0 !important;\n        text-align: ").concat(isAdminPreview ? 'left' : 'center', ";\n      }\n    }\n    @media only screen and (max-width: 750px) {\n      .").concat(ManageCookiesModal.DialogClass, " header h2 {\n        text-align: left;\n        padding: 0 25px 0 0 !important;\n      }\n    }\n\n    .").concat(ManageCookiesModal.HeaderCloseClass, " {\n      position: absolute;\n      top: ").concat(isAdminPreview ? '30px' : '40px', ";\n      right: ").concat(isAdminPreview ? '30px' : '35px', ";\n      width: 24px;\n      height: 24px;\n      padding: 0;\n      margin: 0;\n      background: transparent;\n      border: none;\n      outline: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      align-content: center;\n      border-radius: 50%;\n      min-width: 24px;\n    }\n\n    .").concat(ManageCookiesModal.HeaderCloseClass, " svg {\n      height: 12px;\n      width: 12px;\n    }\n\n    @media only screen and (max-width: 1200px) {\n      .").concat(ManageCookiesModal.HeaderCloseClass, " {\n        top: 20px;\n        right: 20px;\n      }\n    }\n    @media only screen and (max-width: 750px) {\n      .").concat(ManageCookiesModal.HeaderCloseClass, " {\n        top: 30px;\n        right: 30px;\n      }\n    }\n    @media only screen and (max-width: 400px) {\n      .").concat(ManageCookiesModal.HeaderCloseClass, " {\n        top: 15px;\n        right: 15px;\n      }\n    }\n    .").concat(ManageCookiesModal.HeaderCloseClass, ":hover {\n      cursor: pointer;\n    }\n    .").concat(ManageCookiesModal.HeaderCloseClass, ":focus {\n      outline: none;\n      box-shadow: 0 0 0 3px ").concat(themeColours.focused, ";\n    }\n    .").concat(ManageCookiesModal.HeaderCloseClass, " svg path {\n      fill: ").concat(themeColours.fontColor, ";\n    }\n    .").concat(ManageCookiesModal.HeaderCloseClass, ":disabled svg path {\n      fill: ").concat(themeColours.sectionDivider, ";\n    }\n\n    .").concat(ManageCookiesModal.HeaderActionsClass, " {\n      margin: 0;\n      display: flex;\n      justify-content: space-around;\n      flex-direction: ").concat(isAdminPreview ? 'column;' : 'row', ";\n      padding: ").concat(isAdminPreview ? '0' : '0 50px 0 0', ";\n      width: ").concat(isAdminPreview ? '100%' : 'auto', ";\n    }\n\n    @media only screen and (max-width: 750px) {\n      .").concat(ManageCookiesModal.HeaderActionsClass, " {\n        flex-direction: column;\n        width: 100%;\n      }\n    }\n    @media only screen and (max-width: 1200px) {\n      .").concat(ManageCookiesModal.HeaderActionsClass, " {\n        padding: 0;\n      }\n    }\n    .").concat(ManageCookiesModal.HeaderActionsClass, " button {\n      text-decoration: none;\n      font-family: inherit;\n      padding: 8px 25px 10px 25px;\n      margin: 0 20px 0 0;\n      font-size: 110%;\n      background: ").concat(themeColours.button.backgroundColor, ";\n      color: ").concat(themeColours.button.fontColor, ";\n      border: 1px solid ").concat(themeColours.button.borderColor, ";\n      white-space: nowrap;\n      border-radius: 2px;\n      line-height: 120%;\n      height: unset;\n      ").concat(isAdminPreview ? 'width: 100%;' : '', "\n      ").concat(isAdminPreview ? 'margin-bottom: 15px;' : '', "\n    }\n    @media only screen and (max-width: 750px) {\n      .").concat(ManageCookiesModal.HeaderActionsClass, " button {\n        width: 100%;\n        margin-bottom: 15px;\n      }\n    }\n    .").concat(ManageCookiesModal.HeaderActionsClass, " button.primary {\n      background: ").concat(themeColours.primaryButton.backgroundColor, ";\n      color: ").concat(themeColours.primaryButton.fontColor, ";\n      border: 1px solid ").concat(themeColours.primaryButton.borderColor, ";\n    }\n    .").concat(ManageCookiesModal.HeaderActionsClass, " button:last-child {\n      margin-right: 0;\n    }\n    .").concat(ManageCookiesModal.HeaderActionsClass, " button:hover {\n      cursor: pointer;\n    }\n    .").concat(ManageCookiesModal.HeaderActionsClass, " button:focus {\n      outline: none;\n      box-shadow: 0 0 0 4px ").concat(themeColours.focused, ";\n    }\n\n    .").concat(ManageCookiesModal.DialogScrollableClass, " {\n      overflow-y: scroll;\n      position: relative;\n    }\n\n    .").concat(ManageCookiesModal.DialogScrollableClass, "::-webkit-scrollbar {\n      width: 0px;\n      background: transparent;\n    }\n\n    /* Intro */\n\n    .").concat(ManageCookiesModal.IntroClass, " h3 {\n      color: ").concat(themeColours.fontColor, ";\n      font-family: inherit;\n      margin: 0 0 15px 0;\n      padding: 0 !important;\n      font-weight: 600;\n      line-height: 1.2;\n      text-align: left;\n    }\n    .").concat(ManageCookiesModal.IntroClass, " p {\n      color: ").concat(themeColours.fontSubduedColor, ";\n      font-family: inherit;\n      margin: 0;\n      padding: 0;\n    }\n    .").concat(ManageCookiesModal.IntroClass, " ul {\n      margin: 0;\n      padding: 0;\n    }\n    .").concat(ManageCookiesModal.IntroClass, " ul li {\n      margin: 0 0 0.5em 1.7em;\n      padding: 0;\n      line-height: 1.2;\n    }\n    .").concat(ManageCookiesModal.IntroMainClass, " {\n      padding: 20px 32px 0 32px;\n      line-height: 1.5;\n    }\n    @media only screen and (max-width: 400px) {\n      .").concat(ManageCookiesModal.IntroMainClass, " {\n        padding: 20px 20px 0 20px;\n      }\n    }\n    .").concat(ManageCookiesModal.IntroMainClass, " p {\n      padding-bottom: 20px;\n    }\n    .").concat(ManageCookiesModal.IntroMainClass, " h3 {\n      font-size: 110%;\n    }\n    .").concat(ManageCookiesModal.IntroMainClass, " p {\n      font-size: 105%;\n      margin: 0;\n      padding: 0;\n    }\n    .").concat(ManageCookiesModal.IntroExplainWrapperClass, " {\n      display: flex;\n      flex-direction: ").concat(isAdminPreview ? 'column' : 'row', ";\n      justify-content: center;\n      margin: 0;\n      padding: 20px 32px 0 32px;\n      color: ").concat(themeColours.fontSubduedColor, ";\n    }\n    @media only screen and (max-width: 700px) {\n      .").concat(ManageCookiesModal.IntroExplainWrapperClass, " {\n        flex-direction: column;\n        padding-bottom: 0;\n      }\n    }\n    @media only screen and (max-width: 400px) {\n      .").concat(ManageCookiesModal.IntroExplainWrapperClass, " {\n        padding: 20px 20px 0 20px;\n      }\n    }\n    .").concat(ManageCookiesModal.IntroExplainAcceptClass, " {\n      width: 100%;\n      padding: 0 ").concat(isAdminPreview ? '0' : '40px', " 0 0;\n    }\n    .").concat(ManageCookiesModal.IntroExplainAcceptClass, " li {\n      list-style-type: disc;\n    }\n    @media only screen and (max-width: 700px) {\n      .").concat(ManageCookiesModal.IntroExplainAcceptClass, " {\n        width: 100%;\n        padding-right: 0;\n      }\n    }\n    .").concat(ManageCookiesModal.IntroExplainAcceptClass, " h3 {\n      font-size: 110%;\n    }\n\n    /* Options */\n\n    .").concat(ManageCookiesModal.OptionWrapperClass, " {\n      padding: 0 32px 32px 32px;\n      color: ").concat(themeColours.fontColor, ";\n    }\n    @media only screen and (max-width: 400px) {\n      .").concat(ManageCookiesModal.OptionWrapperClass, " {\n        padding: 0 20px 15px 20px;\n      }\n    }\n\n    .").concat(ManageCookiesModal.OptionClass, " {\n      margin: 0;\n      font-size: 100%;\n      line-height: 1.1;\n      padding: 20px 0 0 0;\n    }\n    .").concat(ManageCookiesModal.OptionClass, ":first-child {\n      padding: 25px 0 0 0;\n      margin: 20px 0 0 0;\n      border-top: 1px solid ").concat(themeColours.sectionDivider, ";\n    }\n    .").concat(ManageCookiesModal.OptionClass, " label {\n      display: flex;\n      gap: 20px;\n      color: ").concat(themeColours.fontColor, ";\n      cursor: pointer;\n      font-family: inherit;\n      margin: 0 0 5px 0;\n      padding: 0;\n      font-weight: 600;\n      font-size: 110%;\n      line-height: 1.2;\n    }\n    .").concat(ManageCookiesModal.OptionClass, " label input {\n      position: absolute;\n      clip: rect(1px, 1px, 1px, 1px);\n      padding: 0;\n      border: 0;\n      height: 1px;\n      width: 1px;\n      overflow: hidden;\n    }\n    .").concat(ManageCookiesModal.OptionClass, " label span {\n      order: -1;\n      display: inline-block;\n      background-color: ").concat(themeColours.backgroundColor, ";\n      width: 24px;\n      height: 24px;\n    }\n    .").concat(ManageCookiesModal.OptionClass, " label span svg {\n      background-color: ").concat(themeColours.backgroundColor, ";\n      border-radius: 3px;\n    }\n    .").concat(ManageCookiesModal.OptionClass, " label input[aria-readonly=\"true\"] ~ span svg {\n      opacity: 0.2;\n      cursor: not-allowed;\n    }\n    .").concat(ManageCookiesModal.OptionClass, " label input:focus ~ span {\n      background-color: ").concat(themeColours.focused, ";\n    }\n    .").concat(ManageCookiesModal.OptionClass, " label input:focus ~ span svg {\n      outline: none;\n      border-radius: 5px;\n      box-shadow: 0 0 0 4px ").concat(themeColours.focused, ";\n    }\n    .").concat(ManageCookiesModal.OptionClass, " p {\n      line-height: ").concat(isAdminPreview ? '1.4' : '1.3', ";\n      font-size: 100%;\n      color: ").concat(themeColours.fontSubduedColor, ";\n      margin: 0;\n      padding: 0 0 0 45px;\n    }\n    @media only screen and (max-width: 700px) {\n      .").concat(ManageCookiesModal.OptionClass, " p {\n        width: 100%;\n        line-height: 1.4;\n      }\n    }\n    \u200B");
    }

    /* eslint-disable no-irregular-whitespace */
    function cssTemplate(bannerData, isAdminPreview, bannerProperties) {
        if (isAdminPreview === void 0) { isAdminPreview = false; }
        var granularConsentEnabled = bannerData.granularConsentEnabled;
        var themeColours = getThemeColours(bannerData.theme, bannerData.themeColorHslFont, bannerData.themeColorHslBackground, bannerData.themeColorHslButtonFont, bannerData.themeColorHslButtonBackground);
        var propsPlacement = getCSSForBannerPlacement(bannerProperties === null || bannerProperties === void 0 ? void 0 : bannerProperties.bannerPlacement, bannerProperties === null || bannerProperties === void 0 ? void 0 : bannerProperties.buttonPlacement, themeColours, isAdminPreview, granularConsentEnabled);
        var propsButtonWeight = getCSSForButtonWeight(bannerProperties === null || bannerProperties === void 0 ? void 0 : bannerProperties.buttonWeight, bannerData.theme, themeColours);
        return "\n    .".concat(BannerAttribute.DialogClass, " h2 {\n      color: ").concat(themeColours.fontColor, ";\n      font-family: inherit;\n      font-size: 120%;\n      margin: 0 0 .5em 0;\n      padding: 0;\n      font-weight: bold;\n    }\n    .").concat(BannerAttribute.DialogClass, " p {\n      color: ").concat(themeColours.fontColor, ";\n      font-family: inherit;\n      line-height: 1.3;\n      margin: 0;\n      padding: 0;\n    }\n    .").concat(BannerAttribute.DialogClass, " a {\n      color: ").concat(themeColours.fontColor, ";\n      text-decoration: underline;\n    }\n    .").concat(BannerAttribute.DialogClass, " button {\n      border: none;\n      text-decoration: none;\n      font-family: inherit;\n      padding: 8px 25px;\n      margin: 15px 20px 0 0;\n      font-size: 100%;\n      flex-basis: 50%;\n      border-radius: 2px;\n      line-height: 120%;\n      height: unset;\n      text-align: center;\n    }\n    .").concat(BannerAttribute.DialogClass, " button:focus {\n      outline: none;\n      box-shadow: 0 0 0 4px ").concat(themeColours.focused, ";\n    }\n    .").concat(BannerAttribute.DialogClass, " button:hover {\n      cursor: pointer;\n    }\n    .").concat(BannerAttribute.DialogClass, " button.").concat(BannerAttribute.ButtonAcceptClass, " {\n      border: 1px solid ").concat(themeColours.button.borderColor, ";\n      ").concat(propsButtonWeight.accept, "\n    }\n    .").concat(BannerAttribute.DialogClass, " button.").concat(BannerAttribute.ButtonManagePrefsClass, " {\n      text-decoration: underline;\n      ").concat(propsButtonWeight.manage, "\n    }\n    .").concat(BannerAttribute.DialogClass, " button.").concat(BannerAttribute.ButtonManagePrefsClass, ":focus {\n      box-shadow: none;\n    }\n    .").concat(BannerAttribute.DialogClass, " button.").concat(BannerAttribute.ButtonManagePrefsClass, ":focus span {\n      outline: 2px solid ").concat(themeColours.focused, ";\n    }\n    .").concat(BannerAttribute.DialogClass, " button.").concat(BannerAttribute.ButtonDeclineClass, " {\n      border: 1px solid ").concat(themeColours.button.borderColor, ";\n      ").concat(propsButtonWeight.decline, "\n    }\n\n    .").concat(BannerAttribute.BodyClass, " p a:focus {\n      outline: 2px solid ").concat(themeColours.focused, ";\n      box-shadow: none;\n    }\n\n    ").concat(propsPlacement, "\n  \u200B");
    }

    /* eslint-disable @typescript-eslint/naming-convention */
    /* eslint-disable no-process-env */
    // ie11 does not support Array.find() but does support Array.filter()
    function find(arr, predicate) {
        if (arr === undefined) {
            return undefined;
        }
        var arrFiltered = arr.filter(predicate);
        if (arrFiltered.length) {
            return arrFiltered[0];
        }
        return undefined;
    }
    function getURLParam(param) {
        var allQueryParams = window.location.search.substring(1);
        if (allQueryParams.length === 0) {
            return null;
        }
        var queryParams = allQueryParams.split('&').map(function (param) { return param.split('='); });
        var queryParamsFiltered = queryParams.filter(function (_a) {
            var key = _a[0];
            return key === param;
        });
        var paramArr = queryParamsFiltered[0];
        var paramValue = paramArr ? paramArr[1] : null;
        return paramValue || null;
    }
    function getCookie(cname) {
        var decodedCookie = decodeURIComponent(document.cookie);
        var cookies = decodedCookie.split(';');
        for (var _i = 0, cookies_1 = cookies; _i < cookies_1.length; _i++) {
            var cookie = cookies_1[_i];
            var _a = cookie.split('='), name_1 = _a[0], value = _a[1];
            if (name_1.trim() === cname) {
                return value;
            }
        }
        return '';
    }
    function getAppUrl() {
        {
            {
                return 'https://privacy-banner.myshopify.io';
            }
        }
    }
    function insertAfter(referenceNode, newNode) {
        var _a;
        (_a = referenceNode === null || referenceNode === void 0 ? void 0 : referenceNode.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(newNode, referenceNode.nextSibling);
    }
    /**
     * Calls the setTrackingConsent API.
     *
     * @param options - An object containing the following properties:
     *   - marketing: A boolean indicating the user's marketing consent preference. Omit value to indicate no answer.
     *   - analytics: A boolean indicating the user's analytics consent preference. Omit value to indicate no answer.
     *   - preferences: A boolean indicating the user's preferences consent preference. Omit value to indicate no answer.
     *   - sale_of_data: A boolean indicating the user's sale of data consent preference. Omit value to indicate no answer.
     *   - shopDomain: The domain of the shop. This is required for headless storefronts.
     *   - storefrontAccessToken: The access token for the storefront. This is required for headless storefronts.
     *   - callback: A function that's called after setting the consent.
     */
    function setConsent(options) {
        var api = window.Shopify.customerPrivacy;
        var params = {
            marketing: options.marketing,
            analytics: options.analytics,
            preferences: options.preferences,
            sale_of_data: options.sale_of_data,
        };
        if (options.shopDomain && options.storefrontAccessToken) {
            params.headlessStorefront = true;
            params.rootDomain = options.shopDomain;
            params.storefrontAccessToken = options.storefrontAccessToken;
        }
        api.setTrackingConsent(params, options.callback);
    }

    /* eslint-disable @typescript-eslint/no-extraneous-class */
    var DataFetcher = /** @class */ (function () {
        function DataFetcher() {
        }
        DataFetcher.getServerData = function (shopName, shopDomain) {
            var _a;
            return __awaiter(this, void 0, void 0, function () {
                var domain, appUrl, canExperiment, canonicalShopId, experimentShopIdParam, experimentShopNameParam, url;
                return __generator(this, function (_b) {
                    domain = shopDomain || ((_a = window.Shopify) === null || _a === void 0 ? void 0 : _a.shop);
                    appUrl = getAppUrl();
                    canExperiment = this.shopCanExperiment();
                    canonicalShopId = this.canonicalShopId();
                    experimentShopIdParam = canExperiment && canonicalShopId != null ? "&experiment_shop_id=".concat(canonicalShopId) : '';
                    experimentShopNameParam = shopName ? "&experiment_shop_name=".concat(encodeURIComponent(shopName)) : '';
                    url = this.SEND_EXPERIMENT_DATA
                        ? "".concat(appUrl, "/customization?shopify_domain=").concat(domain).concat(experimentShopIdParam).concat(experimentShopNameParam)
                        : "".concat(appUrl, "/customization?shopify_domain=").concat(domain);
                    return [2 /*return*/, this.getServerDataWithBackoff(url)];
                });
            });
        };
        DataFetcher.canonicalShopId = function () {
            var _a, _b, _c, _d;
            return (_d = (_c = (_b = (_a = window.trekkie) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.Trekkie) === null || _c === void 0 ? void 0 : _c.defaultAttributes) === null || _d === void 0 ? void 0 : _d.shopId;
        };
        DataFetcher.shopCanExperiment = function () {
            var _a;
            var cookieValue = getCookie('_tracking_consent');
            var parsedCookie;
            try {
                parsedCookie = JSON.parse(decodeURIComponent(cookieValue));
            }
            catch (error) {
                return false;
            }
            var merchantConfig = (_a = parsedCookie.lim) !== null && _a !== void 0 ? _a : [];
            return merchantConfig.includes('GDPR') && !merchantConfig.includes('GDPR_BLOCK_ALL');
        };
        DataFetcher.getServerDataWithBackoff = function (baseUrl, requestAttempt) {
            if (requestAttempt === void 0) { requestAttempt = 1; }
            return __awaiter(this, void 0, void 0, function () {
                var url, response, body;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = "".concat(baseUrl, "&request_attempt=").concat(requestAttempt);
                            return [4 /*yield*/, fetch(url)];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2:
                            body = _a.sent();
                            if (response.status === 200) {
                                return [2 /*return*/, body];
                            }
                            if (!(requestAttempt < this.MAX_RETRIES)) return [3 /*break*/, 4];
                            return [4 /*yield*/, this.wait()];
                        case 3:
                            _a.sent();
                            return [2 /*return*/, this.getServerDataWithBackoff(baseUrl, requestAttempt + 1)];
                        case 4: throw new Error('Could not reach the server');
                    }
                });
            });
        };
        DataFetcher.wait = function () {
            var _this = this;
            return new Promise(function (resolve) { return setTimeout(resolve, _this.TIME_BETWEEN_REQUESTS); });
        };
        DataFetcher.SEND_EXPERIMENT_DATA = false;
        DataFetcher.MAX_RETRIES = 6;
        DataFetcher.TIME_BETWEEN_REQUESTS = 5000;
        return DataFetcher;
    }());

    var pageNotExcluded = function () {
        // will exclude cart pages and supports cross-border localization paths
        // eg. xx (fr) or xx-XX (fr-CA)
        return !window.location.pathname.match(/^(\/[a-zA-Z]{2}(-[a-zA-Z]{2})?)?\/(cart|policies\/privacy-policy|password)$/);
    };
    var gdprConsentRequired = function () {
        var _a, _b, _c, _d, _e;
        var consentRequired;
        if ((_b = (_a = window.Shopify) === null || _a === void 0 ? void 0 : _a.customerPrivacy) === null || _b === void 0 ? void 0 : _b.doesMerchantSupportGranularConsent()) {
            consentRequired = pageNotExcluded() && ((_e = (_d = (_c = window.Shopify) === null || _c === void 0 ? void 0 : _c.customerPrivacy) === null || _d === void 0 ? void 0 : _d.unstable) === null || _e === void 0 ? void 0 : _e.shouldShowBanner());
        }
        else {
            consentRequired =
                pageNotExcluded() &&
                    window.Shopify !== undefined &&
                    window.Shopify.customerPrivacy !== undefined &&
                    window.Shopify.customerPrivacy.getRegulation() === 'GDPR' &&
                    window.Shopify.customerPrivacy.isRegulationEnforced() &&
                    window.Shopify.customerPrivacy.getTrackingConsent() === 'no_interaction';
        }
        return consentRequired;
    };
    var previewBanner = function () {
        return getURLParam('preview_privacy_banner') === '1';
    };

    function getAugmentedNamespace(n) {
      if (n.__esModule) return n;
      var f = n.default;
    	if (typeof f == "function") {
    		var a = function a () {
    			if (this instanceof a) {
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

    var monorail = {};

    var monorailEdgeProducer = {};

    var require$$0 = /*@__PURE__*/getAugmentedNamespace(tslib_es6);

    var endpoints = {};

    Object.defineProperty(endpoints, "__esModule", {
      value: true
    });
    endpoints.extractDomain = endpoints.PRODUCTION_CANADA_ENDPOINT = endpoints.PRODUCE_ENDPOINT = endpoints.PRODUCE_BATCH_ENDPOINT = endpoints.PRODUCTION_DOMAIN = endpoints.DEVELOPMENT_DOMAIN = void 0;
    endpoints.DEVELOPMENT_DOMAIN = 'http://localhost:8082';
    endpoints.PRODUCTION_DOMAIN = 'https://monorail-edge.shopifysvc.com';
    endpoints.PRODUCE_BATCH_ENDPOINT = '/unstable/produce_batch';
    endpoints.PRODUCE_ENDPOINT = '/v1/produce';
    endpoints.PRODUCTION_CANADA_ENDPOINT = 'https://monorail-edge-ca.shopifycloud.com/v1/produce';

    function extractDomain(urlString) {
      return "https://".concat(new URL(urlString).hostname);
    }

    endpoints.extractDomain = extractDomain;

    var producerMiddleware = {};

    var events = {};

    Object.defineProperty(events, "__esModule", {
      value: true
    });
    events.isCompositeMonorailEvent = void 0;

    function isCompositeMonorailEvent(monorailEvent) {
      return monorailEvent.schemaId !== undefined;
    }

    events.isCompositeMonorailEvent = isCompositeMonorailEvent;

    Object.defineProperty(producerMiddleware, "__esModule", {
      value: true
    });
    producerMiddleware.ProducerMiddleware = void 0;
    var events_1 = events;

    var ProducerMiddleware =
    /** @class */
    function () {
      function ProducerMiddleware(producer) {
        this.producer = producer;
      }

      ProducerMiddleware.prototype.do = function (event, proceed) {
        if ((0, events_1.isCompositeMonorailEvent)(event)) {
          return this.producer.produce(event);
        } else {
          return this.producer.produceBatch(event);
        }
      };

      return ProducerMiddleware;
    }();

    producerMiddleware.ProducerMiddleware = ProducerMiddleware;

    var uuid = {};

    var commonjsBrowser = {};

    var v1 = {};

    var rng = {};

    var hasRequiredRng;

    function requireRng () {
    	if (hasRequiredRng) return rng;
    	hasRequiredRng = 1;

    	Object.defineProperty(rng, "__esModule", {
    	  value: true
    	});
    	rng.default = rng$1;
    	// Unique ID creation requires a high quality random # generator. In the browser we therefore
    	// require the crypto API and do not support built-in fallback to lower quality random number
    	// generators (like Math.random()).
    	let getRandomValues;
    	const rnds8 = new Uint8Array(16);

    	function rng$1() {
    	  // lazy load so that environments that need to polyfill have a chance to do so
    	  if (!getRandomValues) {
    	    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    	    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    	    if (!getRandomValues) {
    	      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    	    }
    	  }

    	  return getRandomValues(rnds8);
    	}
    	return rng;
    }

    var stringify = {};

    var validate = {};

    var regex = {};

    var hasRequiredRegex;

    function requireRegex () {
    	if (hasRequiredRegex) return regex;
    	hasRequiredRegex = 1;

    	Object.defineProperty(regex, "__esModule", {
    	  value: true
    	});
    	regex.default = void 0;
    	var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    	regex.default = _default;
    	return regex;
    }

    var hasRequiredValidate;

    function requireValidate () {
    	if (hasRequiredValidate) return validate;
    	hasRequiredValidate = 1;

    	Object.defineProperty(validate, "__esModule", {
    	  value: true
    	});
    	validate.default = void 0;

    	var _regex = _interopRequireDefault(requireRegex());

    	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    	function validate$1(uuid) {
    	  return typeof uuid === 'string' && _regex.default.test(uuid);
    	}

    	var _default = validate$1;
    	validate.default = _default;
    	return validate;
    }

    var hasRequiredStringify;

    function requireStringify () {
    	if (hasRequiredStringify) return stringify;
    	hasRequiredStringify = 1;

    	Object.defineProperty(stringify, "__esModule", {
    	  value: true
    	});
    	stringify.default = void 0;
    	stringify.unsafeStringify = unsafeStringify;

    	var _validate = _interopRequireDefault(requireValidate());

    	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    	/**
    	 * Convert array of 16 byte values to UUID string format of the form:
    	 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
    	 */
    	const byteToHex = [];

    	for (let i = 0; i < 256; ++i) {
    	  byteToHex.push((i + 0x100).toString(16).slice(1));
    	}

    	function unsafeStringify(arr, offset = 0) {
    	  // Note: Be careful editing this code!  It's been tuned for performance
    	  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    	  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
    	}

    	function stringify$1(arr, offset = 0) {
    	  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
    	  // of the following:
    	  // - One or more input array values don't map to a hex octet (leading to
    	  // "undefined" in the uuid)
    	  // - Invalid input values for the RFC `version` or `variant` fields

    	  if (!(0, _validate.default)(uuid)) {
    	    throw TypeError('Stringified UUID is invalid');
    	  }

    	  return uuid;
    	}

    	var _default = stringify$1;
    	stringify.default = _default;
    	return stringify;
    }

    var hasRequiredV1;

    function requireV1 () {
    	if (hasRequiredV1) return v1;
    	hasRequiredV1 = 1;

    	Object.defineProperty(v1, "__esModule", {
    	  value: true
    	});
    	v1.default = void 0;

    	var _rng = _interopRequireDefault(requireRng());

    	var _stringify = requireStringify();

    	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    	// **`v1()` - Generate time-based UUID**
    	//
    	// Inspired by https://github.com/LiosK/UUID.js
    	// and http://docs.python.org/library/uuid.html
    	let _nodeId;

    	let _clockseq; // Previous uuid creation time


    	let _lastMSecs = 0;
    	let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

    	function v1$1(options, buf, offset) {
    	  let i = buf && offset || 0;
    	  const b = buf || new Array(16);
    	  options = options || {};
    	  let node = options.node || _nodeId;
    	  let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
    	  // specified.  We do this lazily to minimize issues related to insufficient
    	  // system entropy.  See #189

    	  if (node == null || clockseq == null) {
    	    const seedBytes = options.random || (options.rng || _rng.default)();

    	    if (node == null) {
    	      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
    	      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    	    }

    	    if (clockseq == null) {
    	      // Per 4.2.2, randomize (14 bit) clockseq
    	      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    	    }
    	  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
    	  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
    	  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
    	  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


    	  let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
    	  // cycle to simulate higher resolution clock

    	  let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

    	  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

    	  if (dt < 0 && options.clockseq === undefined) {
    	    clockseq = clockseq + 1 & 0x3fff;
    	  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
    	  // time interval


    	  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    	    nsecs = 0;
    	  } // Per 4.2.1.2 Throw error if too many uuids are requested


    	  if (nsecs >= 10000) {
    	    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    	  }

    	  _lastMSecs = msecs;
    	  _lastNSecs = nsecs;
    	  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

    	  msecs += 12219292800000; // `time_low`

    	  const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
    	  b[i++] = tl >>> 24 & 0xff;
    	  b[i++] = tl >>> 16 & 0xff;
    	  b[i++] = tl >>> 8 & 0xff;
    	  b[i++] = tl & 0xff; // `time_mid`

    	  const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
    	  b[i++] = tmh >>> 8 & 0xff;
    	  b[i++] = tmh & 0xff; // `time_high_and_version`

    	  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

    	  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

    	  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

    	  b[i++] = clockseq & 0xff; // `node`

    	  for (let n = 0; n < 6; ++n) {
    	    b[i + n] = node[n];
    	  }

    	  return buf || (0, _stringify.unsafeStringify)(b);
    	}

    	var _default = v1$1;
    	v1.default = _default;
    	return v1;
    }

    var v3 = {};

    var v35 = {};

    var parse = {};

    var hasRequiredParse;

    function requireParse () {
    	if (hasRequiredParse) return parse;
    	hasRequiredParse = 1;

    	Object.defineProperty(parse, "__esModule", {
    	  value: true
    	});
    	parse.default = void 0;

    	var _validate = _interopRequireDefault(requireValidate());

    	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    	function parse$1(uuid) {
    	  if (!(0, _validate.default)(uuid)) {
    	    throw TypeError('Invalid UUID');
    	  }

    	  let v;
    	  const arr = new Uint8Array(16); // Parse ########-....-....-....-............

    	  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
    	  arr[1] = v >>> 16 & 0xff;
    	  arr[2] = v >>> 8 & 0xff;
    	  arr[3] = v & 0xff; // Parse ........-####-....-....-............

    	  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
    	  arr[5] = v & 0xff; // Parse ........-....-####-....-............

    	  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
    	  arr[7] = v & 0xff; // Parse ........-....-....-####-............

    	  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
    	  arr[9] = v & 0xff; // Parse ........-....-....-....-############
    	  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

    	  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
    	  arr[11] = v / 0x100000000 & 0xff;
    	  arr[12] = v >>> 24 & 0xff;
    	  arr[13] = v >>> 16 & 0xff;
    	  arr[14] = v >>> 8 & 0xff;
    	  arr[15] = v & 0xff;
    	  return arr;
    	}

    	var _default = parse$1;
    	parse.default = _default;
    	return parse;
    }

    var hasRequiredV35;

    function requireV35 () {
    	if (hasRequiredV35) return v35;
    	hasRequiredV35 = 1;

    	Object.defineProperty(v35, "__esModule", {
    	  value: true
    	});
    	v35.URL = v35.DNS = void 0;
    	v35.default = v35$1;

    	var _stringify = requireStringify();

    	var _parse = _interopRequireDefault(requireParse());

    	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    	function stringToBytes(str) {
    	  str = unescape(encodeURIComponent(str)); // UTF8 escape

    	  const bytes = [];

    	  for (let i = 0; i < str.length; ++i) {
    	    bytes.push(str.charCodeAt(i));
    	  }

    	  return bytes;
    	}

    	const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
    	v35.DNS = DNS;
    	const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
    	v35.URL = URL;

    	function v35$1(name, version, hashfunc) {
    	  function generateUUID(value, namespace, buf, offset) {
    	    var _namespace;

    	    if (typeof value === 'string') {
    	      value = stringToBytes(value);
    	    }

    	    if (typeof namespace === 'string') {
    	      namespace = (0, _parse.default)(namespace);
    	    }

    	    if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
    	      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    	    } // Compute hash of namespace and value, Per 4.3
    	    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    	    // hashfunc([...namespace, ... value])`


    	    let bytes = new Uint8Array(16 + value.length);
    	    bytes.set(namespace);
    	    bytes.set(value, namespace.length);
    	    bytes = hashfunc(bytes);
    	    bytes[6] = bytes[6] & 0x0f | version;
    	    bytes[8] = bytes[8] & 0x3f | 0x80;

    	    if (buf) {
    	      offset = offset || 0;

    	      for (let i = 0; i < 16; ++i) {
    	        buf[offset + i] = bytes[i];
    	      }

    	      return buf;
    	    }

    	    return (0, _stringify.unsafeStringify)(bytes);
    	  } // Function#name is not settable on some platforms (#270)


    	  try {
    	    generateUUID.name = name; // eslint-disable-next-line no-empty
    	  } catch (err) {} // For CommonJS default export support


    	  generateUUID.DNS = DNS;
    	  generateUUID.URL = URL;
    	  return generateUUID;
    	}
    	return v35;
    }

    var md5 = {};

    var hasRequiredMd5;

    function requireMd5 () {
    	if (hasRequiredMd5) return md5;
    	hasRequiredMd5 = 1;

    	Object.defineProperty(md5, "__esModule", {
    	  value: true
    	});
    	md5.default = void 0;

    	/*
    	 * Browser-compatible JavaScript MD5
    	 *
    	 * Modification of JavaScript MD5
    	 * https://github.com/blueimp/JavaScript-MD5
    	 *
    	 * Copyright 2011, Sebastian Tschan
    	 * https://blueimp.net
    	 *
    	 * Licensed under the MIT license:
    	 * https://opensource.org/licenses/MIT
    	 *
    	 * Based on
    	 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
    	 * Digest Algorithm, as defined in RFC 1321.
    	 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
    	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
    	 * Distributed under the BSD License
    	 * See http://pajhome.org.uk/crypt/md5 for more info.
    	 */
    	function md5$1(bytes) {
    	  if (typeof bytes === 'string') {
    	    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    	    bytes = new Uint8Array(msg.length);

    	    for (let i = 0; i < msg.length; ++i) {
    	      bytes[i] = msg.charCodeAt(i);
    	    }
    	  }

    	  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
    	}
    	/*
    	 * Convert an array of little-endian words to an array of bytes
    	 */


    	function md5ToHexEncodedArray(input) {
    	  const output = [];
    	  const length32 = input.length * 32;
    	  const hexTab = '0123456789abcdef';

    	  for (let i = 0; i < length32; i += 8) {
    	    const x = input[i >> 5] >>> i % 32 & 0xff;
    	    const hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    	    output.push(hex);
    	  }

    	  return output;
    	}
    	/**
    	 * Calculate output length with padding and bit length
    	 */


    	function getOutputLength(inputLength8) {
    	  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
    	}
    	/*
    	 * Calculate the MD5 of an array of little-endian words, and a bit length.
    	 */


    	function wordsToMd5(x, len) {
    	  /* append padding */
    	  x[len >> 5] |= 0x80 << len % 32;
    	  x[getOutputLength(len) - 1] = len;
    	  let a = 1732584193;
    	  let b = -271733879;
    	  let c = -1732584194;
    	  let d = 271733878;

    	  for (let i = 0; i < x.length; i += 16) {
    	    const olda = a;
    	    const oldb = b;
    	    const oldc = c;
    	    const oldd = d;
    	    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    	    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    	    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    	    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    	    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    	    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    	    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    	    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    	    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    	    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    	    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    	    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    	    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    	    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    	    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    	    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    	    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    	    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    	    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    	    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    	    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    	    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    	    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    	    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    	    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    	    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    	    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    	    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    	    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    	    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    	    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    	    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    	    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    	    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    	    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    	    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    	    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    	    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    	    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    	    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    	    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    	    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    	    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    	    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    	    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    	    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    	    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    	    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    	    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    	    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    	    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    	    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    	    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    	    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    	    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    	    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    	    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    	    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    	    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    	    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    	    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    	    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    	    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    	    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    	    a = safeAdd(a, olda);
    	    b = safeAdd(b, oldb);
    	    c = safeAdd(c, oldc);
    	    d = safeAdd(d, oldd);
    	  }

    	  return [a, b, c, d];
    	}
    	/*
    	 * Convert an array bytes to an array of little-endian words
    	 * Characters >255 have their high-byte silently ignored.
    	 */


    	function bytesToWords(input) {
    	  if (input.length === 0) {
    	    return [];
    	  }

    	  const length8 = input.length * 8;
    	  const output = new Uint32Array(getOutputLength(length8));

    	  for (let i = 0; i < length8; i += 8) {
    	    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
    	  }

    	  return output;
    	}
    	/*
    	 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
    	 * to work around bugs in some JS interpreters.
    	 */


    	function safeAdd(x, y) {
    	  const lsw = (x & 0xffff) + (y & 0xffff);
    	  const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    	  return msw << 16 | lsw & 0xffff;
    	}
    	/*
    	 * Bitwise rotate a 32-bit number to the left.
    	 */


    	function bitRotateLeft(num, cnt) {
    	  return num << cnt | num >>> 32 - cnt;
    	}
    	/*
    	 * These functions implement the four basic operations the algorithm uses.
    	 */


    	function md5cmn(q, a, b, x, s, t) {
    	  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
    	}

    	function md5ff(a, b, c, d, x, s, t) {
    	  return md5cmn(b & c | ~b & d, a, b, x, s, t);
    	}

    	function md5gg(a, b, c, d, x, s, t) {
    	  return md5cmn(b & d | c & ~d, a, b, x, s, t);
    	}

    	function md5hh(a, b, c, d, x, s, t) {
    	  return md5cmn(b ^ c ^ d, a, b, x, s, t);
    	}

    	function md5ii(a, b, c, d, x, s, t) {
    	  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
    	}

    	var _default = md5$1;
    	md5.default = _default;
    	return md5;
    }

    var hasRequiredV3;

    function requireV3 () {
    	if (hasRequiredV3) return v3;
    	hasRequiredV3 = 1;

    	Object.defineProperty(v3, "__esModule", {
    	  value: true
    	});
    	v3.default = void 0;

    	var _v = _interopRequireDefault(requireV35());

    	var _md = _interopRequireDefault(requireMd5());

    	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    	const v3$1 = (0, _v.default)('v3', 0x30, _md.default);
    	var _default = v3$1;
    	v3.default = _default;
    	return v3;
    }

    var v4$1 = {};

    var native = {};

    var hasRequiredNative;

    function requireNative () {
    	if (hasRequiredNative) return native;
    	hasRequiredNative = 1;

    	Object.defineProperty(native, "__esModule", {
    	  value: true
    	});
    	native.default = void 0;
    	const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
    	var _default = {
    	  randomUUID
    	};
    	native.default = _default;
    	return native;
    }

    var hasRequiredV4;

    function requireV4 () {
    	if (hasRequiredV4) return v4$1;
    	hasRequiredV4 = 1;

    	Object.defineProperty(v4$1, "__esModule", {
    	  value: true
    	});
    	v4$1.default = void 0;

    	var _native = _interopRequireDefault(requireNative());

    	var _rng = _interopRequireDefault(requireRng());

    	var _stringify = requireStringify();

    	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    	function v4(options, buf, offset) {
    	  if (_native.default.randomUUID && !buf && !options) {
    	    return _native.default.randomUUID();
    	  }

    	  options = options || {};

    	  const rnds = options.random || (options.rng || _rng.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`


    	  rnds[6] = rnds[6] & 0x0f | 0x40;
    	  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

    	  if (buf) {
    	    offset = offset || 0;

    	    for (let i = 0; i < 16; ++i) {
    	      buf[offset + i] = rnds[i];
    	    }

    	    return buf;
    	  }

    	  return (0, _stringify.unsafeStringify)(rnds);
    	}

    	var _default = v4;
    	v4$1.default = _default;
    	return v4$1;
    }

    var v5 = {};

    var sha1 = {};

    var hasRequiredSha1;

    function requireSha1 () {
    	if (hasRequiredSha1) return sha1;
    	hasRequiredSha1 = 1;

    	Object.defineProperty(sha1, "__esModule", {
    	  value: true
    	});
    	sha1.default = void 0;

    	// Adapted from Chris Veness' SHA1 code at
    	// http://www.movable-type.co.uk/scripts/sha1.html
    	function f(s, x, y, z) {
    	  switch (s) {
    	    case 0:
    	      return x & y ^ ~x & z;

    	    case 1:
    	      return x ^ y ^ z;

    	    case 2:
    	      return x & y ^ x & z ^ y & z;

    	    case 3:
    	      return x ^ y ^ z;
    	  }
    	}

    	function ROTL(x, n) {
    	  return x << n | x >>> 32 - n;
    	}

    	function sha1$1(bytes) {
    	  const K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
    	  const H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

    	  if (typeof bytes === 'string') {
    	    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    	    bytes = [];

    	    for (let i = 0; i < msg.length; ++i) {
    	      bytes.push(msg.charCodeAt(i));
    	    }
    	  } else if (!Array.isArray(bytes)) {
    	    // Convert Array-like to Array
    	    bytes = Array.prototype.slice.call(bytes);
    	  }

    	  bytes.push(0x80);
    	  const l = bytes.length / 4 + 2;
    	  const N = Math.ceil(l / 16);
    	  const M = new Array(N);

    	  for (let i = 0; i < N; ++i) {
    	    const arr = new Uint32Array(16);

    	    for (let j = 0; j < 16; ++j) {
    	      arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
    	    }

    	    M[i] = arr;
    	  }

    	  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
    	  M[N - 1][14] = Math.floor(M[N - 1][14]);
    	  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

    	  for (let i = 0; i < N; ++i) {
    	    const W = new Uint32Array(80);

    	    for (let t = 0; t < 16; ++t) {
    	      W[t] = M[i][t];
    	    }

    	    for (let t = 16; t < 80; ++t) {
    	      W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
    	    }

    	    let a = H[0];
    	    let b = H[1];
    	    let c = H[2];
    	    let d = H[3];
    	    let e = H[4];

    	    for (let t = 0; t < 80; ++t) {
    	      const s = Math.floor(t / 20);
    	      const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
    	      e = d;
    	      d = c;
    	      c = ROTL(b, 30) >>> 0;
    	      b = a;
    	      a = T;
    	    }

    	    H[0] = H[0] + a >>> 0;
    	    H[1] = H[1] + b >>> 0;
    	    H[2] = H[2] + c >>> 0;
    	    H[3] = H[3] + d >>> 0;
    	    H[4] = H[4] + e >>> 0;
    	  }

    	  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
    	}

    	var _default = sha1$1;
    	sha1.default = _default;
    	return sha1;
    }

    var hasRequiredV5;

    function requireV5 () {
    	if (hasRequiredV5) return v5;
    	hasRequiredV5 = 1;

    	Object.defineProperty(v5, "__esModule", {
    	  value: true
    	});
    	v5.default = void 0;

    	var _v = _interopRequireDefault(requireV35());

    	var _sha = _interopRequireDefault(requireSha1());

    	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    	const v5$1 = (0, _v.default)('v5', 0x50, _sha.default);
    	var _default = v5$1;
    	v5.default = _default;
    	return v5;
    }

    var nil = {};

    var hasRequiredNil;

    function requireNil () {
    	if (hasRequiredNil) return nil;
    	hasRequiredNil = 1;

    	Object.defineProperty(nil, "__esModule", {
    	  value: true
    	});
    	nil.default = void 0;
    	var _default = '00000000-0000-0000-0000-000000000000';
    	nil.default = _default;
    	return nil;
    }

    var version = {};

    var hasRequiredVersion;

    function requireVersion () {
    	if (hasRequiredVersion) return version;
    	hasRequiredVersion = 1;

    	Object.defineProperty(version, "__esModule", {
    	  value: true
    	});
    	version.default = void 0;

    	var _validate = _interopRequireDefault(requireValidate());

    	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    	function version$1(uuid) {
    	  if (!(0, _validate.default)(uuid)) {
    	    throw TypeError('Invalid UUID');
    	  }

    	  return parseInt(uuid.slice(14, 15), 16);
    	}

    	var _default = version$1;
    	version.default = _default;
    	return version;
    }

    var hasRequiredCommonjsBrowser;

    function requireCommonjsBrowser () {
    	if (hasRequiredCommonjsBrowser) return commonjsBrowser;
    	hasRequiredCommonjsBrowser = 1;
    	(function (exports) {

    		Object.defineProperty(exports, "__esModule", {
    		  value: true
    		});
    		Object.defineProperty(exports, "NIL", {
    		  enumerable: true,
    		  get: function get() {
    		    return _nil.default;
    		  }
    		});
    		Object.defineProperty(exports, "parse", {
    		  enumerable: true,
    		  get: function get() {
    		    return _parse.default;
    		  }
    		});
    		Object.defineProperty(exports, "stringify", {
    		  enumerable: true,
    		  get: function get() {
    		    return _stringify.default;
    		  }
    		});
    		Object.defineProperty(exports, "v1", {
    		  enumerable: true,
    		  get: function get() {
    		    return _v.default;
    		  }
    		});
    		Object.defineProperty(exports, "v3", {
    		  enumerable: true,
    		  get: function get() {
    		    return _v2.default;
    		  }
    		});
    		Object.defineProperty(exports, "v4", {
    		  enumerable: true,
    		  get: function get() {
    		    return _v3.default;
    		  }
    		});
    		Object.defineProperty(exports, "v5", {
    		  enumerable: true,
    		  get: function get() {
    		    return _v4.default;
    		  }
    		});
    		Object.defineProperty(exports, "validate", {
    		  enumerable: true,
    		  get: function get() {
    		    return _validate.default;
    		  }
    		});
    		Object.defineProperty(exports, "version", {
    		  enumerable: true,
    		  get: function get() {
    		    return _version.default;
    		  }
    		});

    		var _v = _interopRequireDefault(requireV1());

    		var _v2 = _interopRequireDefault(requireV3());

    		var _v3 = _interopRequireDefault(requireV4());

    		var _v4 = _interopRequireDefault(requireV5());

    		var _nil = _interopRequireDefault(requireNil());

    		var _version = _interopRequireDefault(requireVersion());

    		var _validate = _interopRequireDefault(requireValidate());

    		var _stringify = _interopRequireDefault(requireStringify());

    		var _parse = _interopRequireDefault(requireParse());

    		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } 
    	} (commonjsBrowser));
    	return commonjsBrowser;
    }

    Object.defineProperty(uuid, "__esModule", {
      value: true
    });
    uuid.v4 = void 0;
    /**
     * Provides a poly-filled UUID v4 function. Environments that have access to the global crypto API
     * should use the randomUUID function. Others can fall back to the uuid library
     */

    function v4() {
      if (typeof crypto === 'object' && typeof crypto.randomUUID === 'function') {
        return crypto.randomUUID();
      } else {
        /* eslint-disable @typescript-eslint/no-var-requires */
        return requireCommonjsBrowser().v4();
        /* eslint-enable @typescript-eslint/no-var-requires */
      }
    }

    uuid.v4 = v4;

    var httpProducer = {};

    var convertCase = {};

    Object.defineProperty(convertCase, "__esModule", {
      value: true
    });
    convertCase.toUnderscoreCase = convertCase.convertAllEventsToUnderscoreCase = convertCase.convertStringToUnderscoreCase = void 0;
    var tslib_1$4 = require$$0;

    function toUnderscoreCase(object, convertToUnderscoreCase) {
      if (convertToUnderscoreCase === void 0) {
        convertToUnderscoreCase = true;
      }

      if (object && Object.keys(object).length && convertToUnderscoreCase) {
        return Object.keys(object).map(function (key) {
          var _a;

          return _a = {}, _a[convertStringToUnderscoreCase(key)] = object[key], _a;
        }).reduce(function (prev, next) {
          return tslib_1$4.__assign(tslib_1$4.__assign({}, prev), next);
        });
      }

      return object;
    }

    convertCase.toUnderscoreCase = toUnderscoreCase;

    function convertStringToUnderscoreCase(camelCaseString) {
      return camelCaseString.split(/(?=[A-Z])/).join('_').toLowerCase();
    }

    convertCase.convertStringToUnderscoreCase = convertStringToUnderscoreCase;

    function convertAllEventsToUnderscoreCase(monorailEvent) {
      return monorailEvent.events.map(function (event) {
        var convertToUnderscoreCase = true;
        var convertMetaToUnderscoreCase = true;

        if (event && event.options && Object.prototype.hasOwnProperty.call(event.options, 'convertEventCase')) {
          convertToUnderscoreCase = Boolean(event.options.convertEventCase);
        }

        if (event && event.options && Object.prototype.hasOwnProperty.call(event.options, 'convertMetaDataCase')) {
          convertMetaToUnderscoreCase = Boolean(event.options.convertMetaDataCase);
        }

        return {
          /* eslint-disable @typescript-eslint/naming-convention */
          schema_id: event.schemaId,

          /* eslint-enable @typescript-eslint/naming-convention */
          payload: toUnderscoreCase(event.payload, convertToUnderscoreCase),
          metadata: toUnderscoreCase(event.metadata, convertMetaToUnderscoreCase)
        };
      });
    }

    convertCase.convertAllEventsToUnderscoreCase = convertAllEventsToUnderscoreCase;

    var producerErrors = {};

    Object.defineProperty(producerErrors, "__esModule", {
      value: true
    });
    producerErrors.MonorailRetriesExceededError = producerErrors.MonorailRequestError = producerErrors.MonorailBatchProduceError = producerErrors.MonorailUnableToProduceError = void 0;
    var tslib_1$3 = require$$0;
    /*
    Please note that in both of the super calls below we are setting
    the prototype chain manually. This needs to be done when extending built-ins like
    `Error`, `Array` and `Map`.
    The detailed reason why we are doing this is because of the following recommendations
    from the typescript team:
    https://github.com/Microsoft/TypeScript/wiki/FAQ#why-doesnt-extending-built-ins-like-error-array-and-map-work
     */

    var MonorailUnableToProduceError =
    /** @class */
    function (_super) {
      tslib_1$3.__extends(MonorailUnableToProduceError, _super);

      function MonorailUnableToProduceError(response) {
        var _this = _super.call(this, "Error producing to the Monorail Edge. Response received: ".concat(JSON.stringify(response))) || this;

        _this.response = response;
        Object.setPrototypeOf(_this, MonorailUnableToProduceError.prototype);
        return _this;
      }

      return MonorailUnableToProduceError;
    }(Error);

    producerErrors.MonorailUnableToProduceError = MonorailUnableToProduceError;

    var MonorailBatchProduceError =
    /** @class */
    function (_super) {
      tslib_1$3.__extends(MonorailBatchProduceError, _super);

      function MonorailBatchProduceError(response) {
        var _this = _super.call(this, "Error producing to the Monorail Edge. Response received: ".concat(JSON.stringify(response))) || this;

        Object.setPrototypeOf(_this, MonorailBatchProduceError.prototype);
        _this.response = response;
        return _this;
      }

      return MonorailBatchProduceError;
    }(Error);

    producerErrors.MonorailBatchProduceError = MonorailBatchProduceError;

    var MonorailRequestError =
    /** @class */
    function (_super) {
      tslib_1$3.__extends(MonorailRequestError, _super);

      function MonorailRequestError(error) {
        var _this = _super.call(this, "Error completing request. A network failure may have prevented the request from completing. Error: ".concat(error)) || this;

        Object.setPrototypeOf(_this, MonorailRequestError.prototype);
        return _this;
      }

      return MonorailRequestError;
    }(Error);

    producerErrors.MonorailRequestError = MonorailRequestError;

    var MonorailRetriesExceededError =
    /** @class */
    function (_super) {
      tslib_1$3.__extends(MonorailRetriesExceededError, _super);

      function MonorailRetriesExceededError(error) {
        var _this = _super.call(this, "".concat(error)) || this;

        Object.setPrototypeOf(_this, MonorailRetriesExceededError.prototype);
        return _this;
      }

      return MonorailRetriesExceededError;
    }(Error);

    producerErrors.MonorailRetriesExceededError = MonorailRetriesExceededError;

    Object.defineProperty(httpProducer, "__esModule", {
      value: true
    });
    httpProducer.HttpProducer = void 0;
    var tslib_1$2 = require$$0;
    var Endpoints$1 = endpoints;
    var convert_case_1 = convertCase;
    var uuid_1$1 = uuid;
    /* eslint-disable @typescript-eslint/naming-convention, @typescript-eslint/ban-ts-comment */

    var producer_errors_1$1 = producerErrors;

    var HttpProducer =
    /** @class */
    function () {
      function HttpProducer(edgeDomain, keepalive) {
        if (edgeDomain === void 0) {
          edgeDomain = Endpoints$1.DEVELOPMENT_DOMAIN;
        }

        if (keepalive === void 0) {
          keepalive = false;
        }

        this.edgeDomain = edgeDomain;
        this.keepalive = keepalive;
      }

      HttpProducer.withEndpoint = function (edgeEndpoint) {
        return new HttpProducer(Endpoints$1.extractDomain(edgeEndpoint));
      };

      HttpProducer.getHeadersFromMetadata = function (metadata) {
        var headers = {
          'Content-Type': 'application/json; charset=utf-8',
          'X-Monorail-Edge-Event-Created-At-Ms': (metadata && metadata.eventCreatedAtMs || Date.now()).toString(),
          'X-Monorail-Edge-Event-Sent-At-Ms': Date.now().toString(),
          'X-Monorail-Edge-Client-Message-Id': (metadata && metadata.clientMessageId || (0, uuid_1$1.v4)()).toString()
        };

        if (metadata && metadata.userAgent) {
          headers['User-Agent'] = metadata.userAgent;
        }

        if (metadata && metadata.remoteIp) {
          headers['X-Forwarded-For'] = metadata.remoteIp;
        }

        return headers;
      };

      HttpProducer.prototype.produceBatch = function (monorailEvent) {
        return tslib_1$2.__awaiter(this, void 0, void 0, function () {
          var body, edgeResponse, error_1, response, _a;

          var _b;

          return tslib_1$2.__generator(this, function (_c) {
            switch (_c.label) {
              case 0:
                body = {
                  events: (0, convert_case_1.convertAllEventsToUnderscoreCase)(monorailEvent),
                  metadata: (0, convert_case_1.toUnderscoreCase)(monorailEvent.metadata)
                };
                _c.label = 1;

              case 1:
                _c.trys.push([1, 3,, 4]);

                return [4
                /*yield*/
                , fetch(this.produceBatchEndpoint(), {
                  method: 'post',
                  headers: HttpProducer.getHeadersFromMetadata(monorailEvent.metadata),
                  body: JSON.stringify(body),
                  keepalive: this.keepalive
                })];

              case 2:
                edgeResponse = _c.sent();
                return [3
                /*break*/
                , 4];

              case 3:
                error_1 = _c.sent(); // @ts-ignore

                throw new producer_errors_1$1.MonorailRequestError(error_1);

              case 4:
                if (!(edgeResponse.status === 207)) return [3
                /*break*/
                , 6];
                return [4
                /*yield*/
                , edgeResponse.json()];

              case 5:
                response = _c.sent();
                throw new producer_errors_1$1.MonorailBatchProduceError(response);

              case 6:
                if (!!edgeResponse.ok) return [3
                /*break*/
                , 8];
                _a = producer_errors_1$1.MonorailUnableToProduceError.bind;
                _b = {
                  status: edgeResponse.status
                };
                return [4
                /*yield*/
                , edgeResponse.text()];

              case 7:
                throw new (_a.apply(producer_errors_1$1.MonorailUnableToProduceError, [void 0, (_b.message = _c.sent(), _b)]))();

              case 8:
                return [2
                /*return*/
                , {
                  status: edgeResponse.status
                }];
            }
          });
        });
      };

      HttpProducer.prototype.produce = function (monorailEvent) {
        return tslib_1$2.__awaiter(this, void 0, void 0, function () {
          var convertToUnderscoreCase, body, edgeResponse, error_2, _a;

          var _b;

          return tslib_1$2.__generator(this, function (_c) {
            switch (_c.label) {
              case 0:
                convertToUnderscoreCase = true;

                if (monorailEvent && monorailEvent.options && Object.prototype.hasOwnProperty.call(monorailEvent.options, 'convertEventCase')) {
                  convertToUnderscoreCase = Boolean(monorailEvent.options.convertEventCase);
                }

                body = {
                  schema_id: monorailEvent.schemaId,
                  payload: (0, convert_case_1.toUnderscoreCase)(monorailEvent.payload, convertToUnderscoreCase)
                };
                _c.label = 1;

              case 1:
                _c.trys.push([1, 3,, 4]);

                return [4
                /*yield*/
                , fetch(this.produceEndpoint(), {
                  method: 'post',
                  headers: HttpProducer.getHeadersFromMetadata(monorailEvent.metadata),
                  body: JSON.stringify(body),
                  keepalive: this.keepalive
                })];

              case 2:
                edgeResponse = _c.sent();
                return [3
                /*break*/
                , 4];

              case 3:
                error_2 = _c.sent(); // @ts-ignore

                throw new producer_errors_1$1.MonorailRequestError(error_2);

              case 4:
                if (!edgeResponse) {
                  throw new producer_errors_1$1.MonorailUnableToProduceError({
                    message: 'No response from edge'
                  });
                }

                if (!!edgeResponse.ok) return [3
                /*break*/
                , 6];
                _a = producer_errors_1$1.MonorailUnableToProduceError.bind;
                _b = {
                  status: edgeResponse.status
                };
                return [4
                /*yield*/
                , edgeResponse.text()];

              case 5:
                throw new (_a.apply(producer_errors_1$1.MonorailUnableToProduceError, [void 0, (_b.message = _c.sent(), _b)]))();

              case 6:
                return [2
                /*return*/
                , {
                  status: edgeResponse.status
                }];
            }
          });
        });
      };

      HttpProducer.prototype.produceBatchEndpoint = function () {
        return this.edgeDomain + Endpoints$1.PRODUCE_BATCH_ENDPOINT;
      };

      HttpProducer.prototype.produceEndpoint = function () {
        return this.edgeDomain + Endpoints$1.PRODUCE_ENDPOINT;
      };

      return HttpProducer;
    }();

    httpProducer.HttpProducer = HttpProducer;

    var logProducer = {};

    Object.defineProperty(logProducer, "__esModule", {
      value: true
    });
    logProducer.LogProducer = void 0;

    var LogProducer =
    /** @class */
    function () {
      function LogProducer(sendToConsole) {
        this.sendToConsole = sendToConsole;

        if (sendToConsole) {
          LogProducer.printWelcomeMessage(sendToConsole);
        }
      }

      LogProducer.printWelcomeMessage = function (sendToConsole) {
        // eslint-disable-next-line no-console
        console.log("%c\uD83D\uDC4B from Monorail%c\n\n" + "We've noticed that you're".concat(sendToConsole ? '' : ' not', " ") + "running in debug mode. " + "As such, we will ".concat(sendToConsole ? 'produce' : 'not produce', " ") + "Monorail events to the console. " + "\n\nIf you want Monorail events to ".concat(sendToConsole ? 'stop' : 'start', " ") + "appearing here, %cset debugMode=".concat((!sendToConsole).toString(), "%c, ") + "for the Monorail Log Producer in your code.", 'font-size: large;', 'font-size: normal;', 'font-weight: bold;', 'font-weight: normal;');
      };

      LogProducer.prototype.produce = function (monorailEvent) {
        if (this.sendToConsole) {
          // eslint-disable-next-line no-console
          console.log('Monorail event produced', monorailEvent);
        }

        return new Promise(function (resolve) {
          resolve(monorailEvent);
        });
      };

      LogProducer.prototype.produceBatch = function (monorailBatchEvent) {
        if (this.sendToConsole) {
          // eslint-disable-next-line no-console
          console.log('Monorail Batch event produced', monorailBatchEvent);
        }

        return new Promise(function (resolve) {
          resolve(monorailBatchEvent);
        });
      };

      return LogProducer;
    }();

    logProducer.LogProducer = LogProducer;

    Object.defineProperty(monorailEdgeProducer, "__esModule", {
      value: true
    });
    monorailEdgeProducer.Monorail = void 0;
    var tslib_1$1 = require$$0;
    var Endpoints = endpoints;
    var producer_middleware_1 = producerMiddleware;
    var uuid_1 = uuid;
    var http_producer_1 = httpProducer;
    var log_producer_1 = logProducer;

    var Monorail =
    /** @class */
    function () {
      function Monorail(producer, middleware) {
        this.producer = producer;
        this.middleware = middleware;
        this.executeChain = Monorail.buildMiddlewareChain(this.middleware.concat(new producer_middleware_1.ProducerMiddleware(producer)));
      }

      Monorail.createLogProducer = function (config) {
        return new Monorail(new log_producer_1.LogProducer(config.debugMode), config.middleware || []);
      };

      Monorail.createHttpProducerWithEndpoint = function (edgeEndpoint, middleware) {
        if (middleware === void 0) {
          middleware = [];
        }

        return new Monorail(http_producer_1.HttpProducer.withEndpoint(edgeEndpoint), middleware);
      };

      Monorail.createHttpProducer = function (config) {
        var keepalive = config.options && config.options.keepalive;
        return new Monorail(config.production ? new http_producer_1.HttpProducer(Endpoints.PRODUCTION_DOMAIN, keepalive) : new http_producer_1.HttpProducer(Endpoints.DEVELOPMENT_DOMAIN, keepalive), config.middleware || []);
      };

      Monorail.buildMiddlewareChain = function (middleware, index) {
        var _this = this;

        if (index === void 0) {
          index = 0;
        }

        if (index === middleware.length) {
          return this.identityFn;
        }

        return function (event) {
          return middleware[index].do(event, _this.buildMiddlewareChain(middleware, index + 1));
        };
      };

      Monorail.prototype.produce = function (monorailEvent) {
        monorailEvent.metadata = tslib_1$1.__assign({
          eventCreatedAtMs: Date.now(),
          clientMessageId: (0, uuid_1.v4)()
        }, monorailEvent.metadata);
        return this.executeChain(monorailEvent);
      };

      Monorail.prototype.produceBatch = function (monorailBatchEvent) {
        return this.executeChain(monorailBatchEvent);
      };

      return Monorail;
    }();

    monorailEdgeProducer.Monorail = Monorail;

    var retryMiddleware = {};

    Object.defineProperty(retryMiddleware, "__esModule", {
      value: true
    });
    retryMiddleware.RetryMiddleware = void 0;
    var tslib_1 = require$$0;
    var producer_errors_1 = producerErrors;

    var RetryMiddleware =
    /** @class */
    function () {
      function RetryMiddleware(maxRetries, delayMs) {
        if (maxRetries === void 0) {
          maxRetries = 3;
        }

        if (delayMs === void 0) {
          delayMs = 150;
        }

        this.maxRetries = maxRetries;
        this.delayMs = delayMs;
      }

      RetryMiddleware.prototype.do = function (event, proceed) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
          var count, err, response, error_1, status_1;
          return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                count = 0;
                _a.label = 1;

              case 1:
                if (!(count < this.maxRetries)) return [3
                /*break*/
                , 7];
                response = void 0;
                _a.label = 2;

              case 2:
                _a.trys.push([2, 4,, 6]);

                return [4
                /*yield*/
                , proceed(event)];

              case 3:
                response = _a.sent();
                return [3
                /*break*/
                , 6];

              case 4:
                error_1 = _a.sent();
                err = err || new Error();
                err = new Error("".concat(err.message, " Retry count:").concat(count + 1, " Error msg:").concat(
                /* eslint-disable @typescript-eslint/ban-ts-comment */
                // @ts-ignore
                error_1.message
                /* eslint-enable @typescript-eslint/ban-ts-comment */
                , "\n"));

                if (error_1 instanceof producer_errors_1.MonorailUnableToProduceError) {
                  status_1 = error_1.response.status;

                  if (status_1 && status_1 >= 400 && status_1 < 500) {
                    throw error_1;
                  }
                }

                return [4
                /*yield*/
                , this.delay(this.delayMs * Math.pow(2, count))];

              case 5:
                _a.sent();

                count++;
                return [3
                /*break*/
                , 1];

              case 6:
                return [2
                /*return*/
                , response];

              case 7:
                if (err) {
                  err.message = "Retry count of ".concat(this.maxRetries, " exceeded. Failed with error: \n").concat(err.message, " Aborting request for ").concat(JSON.stringify(event));
                } else {
                  err = new Error();
                }

                throw new producer_errors_1.MonorailRetriesExceededError(err);
            }
          });
        });
      };

      RetryMiddleware.prototype.delay = function (ms) {
        return new Promise(function (resolve) {
          return setTimeout(resolve, ms);
        });
      };

      return RetryMiddleware;
    }();

    retryMiddleware.RetryMiddleware = RetryMiddleware;

    (function (exports) {

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.RetryMiddleware = exports.MonorailRetriesExceededError = exports.MonorailUnableToProduceError = exports.MonorailRequestError = exports.Monorail = void 0;
      var monorail_edge_producer_1 = monorailEdgeProducer;
      Object.defineProperty(exports, "Monorail", {
        enumerable: true,
        get: function get() {
          return monorail_edge_producer_1.Monorail;
        }
      });
      var producer_errors_1 = producerErrors;
      Object.defineProperty(exports, "MonorailRequestError", {
        enumerable: true,
        get: function get() {
          return producer_errors_1.MonorailRequestError;
        }
      });
      Object.defineProperty(exports, "MonorailUnableToProduceError", {
        enumerable: true,
        get: function get() {
          return producer_errors_1.MonorailUnableToProduceError;
        }
      });
      Object.defineProperty(exports, "MonorailRetriesExceededError", {
        enumerable: true,
        get: function get() {
          return producer_errors_1.MonorailRetriesExceededError;
        }
      });
      var retry_middleware_1 = retryMiddleware;
      Object.defineProperty(exports, "RetryMiddleware", {
        enumerable: true,
        get: function get() {
          return retry_middleware_1.RetryMiddleware;
        }
      });
    })(monorail);

    /* eslint-disable no-process-env */
    var BANNER_INTERACT_MONORAIL_SCHEMA = 'privacy_banner_interact/1.1';
    var BANNER_RENDER_MONORAIL_SCHEMA = 'privacy_banner_render/1.0';
    var Logger = /** @class */ (function () {
        function Logger(shopDomain) {
            this.VISIT_TOKEN = '_shopify_s';
            var options = { debugMode: true };
            this.shopDomain = shopDomain;
            this.monorail =
                monorail.Monorail.createLogProducer(options);
        }
        Logger.prototype.shouldEmit = function (interactionType) {
            var _a, _b;
            if (interactionType === BannerInteraction.Accepted) {
                return true;
            }
            else if (interactionType === BannerInteraction.Declined) {
                return false;
            }
            else if (interactionType === BannerInteraction.PrivacyPolicyView) {
                return ((_b = (_a = window === null || window === void 0 ? void 0 : window.Shopify) === null || _a === void 0 ? void 0 : _a.customerPrivacy) === null || _b === void 0 ? void 0 : _b.getTrackingConsent()) === 'yes';
            }
            else {
                // granular consent is not emitted yet
                // I'd expect an interaction type Granular at some point, where we check _cmp_a purposes
                return false;
            }
        };
        Logger.prototype.emitInteraction = function (interactionType, interactionMetadata) {
            if (interactionMetadata === void 0) { interactionMetadata = ''; }
            var commonPayload = this.getCommonPayload();
            this.monorail.produce({
                schemaId: BANNER_INTERACT_MONORAIL_SCHEMA,
                payload: __assign(__assign(__assign({}, commonPayload), (interactionMetadata && { interactionMetadata: interactionMetadata })), { interactionType: interactionType }),
            });
        };
        Logger.prototype.emitRender = function () {
            // render not related to user interaction, used for ensuring the banner is functioning correctly, always emit.
            var commonPayload = this.getCommonPayload();
            this.monorail.produce({
                schemaId: BANNER_RENDER_MONORAIL_SCHEMA,
                payload: __assign({}, commonPayload),
            });
        };
        Logger.prototype.visitorRegion = function () {
            // Uses an internal field of _tracking_consent
            var cookie = document.cookie.split(';').find(function (el) { return el.includes('_tracking_consent='); });
            if (!cookie) {
                return null;
            }
            var parsedCookie = {};
            try {
                parsedCookie = JSON.parse(unescape(cookie.split('=')[1]));
            }
            catch (_a) {
                return null;
            }
            return parsedCookie.region || null;
        };
        Logger.prototype.getCommonPayload = function () {
            var _a;
            var shopPermanentDomain = this.shopDomain || ((_a = window.Shopify) === null || _a === void 0 ? void 0 : _a.shop);
            var sessionToken = getCookie(this.VISIT_TOKEN) || '0';
            var regulation = window.Shopify.customerPrivacy.getRegulation();
            var path = window.location.pathname;
            var region = this.visitorRegion();
            return __assign({ shopPermanentDomain: shopPermanentDomain, sessionToken: sessionToken, regulation: regulation, path: path }, (region && { region: region }));
        };
        return Logger;
    }());

    var ExperimentFetcher = /** @class */ (function () {
        function ExperimentFetcher(experimentConfig, bannerData) {
            this.experimentId = '';
            this.experimentAssignment = '';
            this.experimentConfig = experimentConfig;
            this.setExperimentIds(bannerData);
        }
        ExperimentFetcher.prototype.getBannerProperties = function () {
            var assignment = this.getExperimentAssignment();
            var experimentBannerProperties = assignment
                ? {
                    bannerPlacement: assignment.bannerPlacement,
                    buttonPlacement: assignment.buttonPlacement,
                    buttonWeight: assignment.buttonWeight,
                    overlay: assignment.overlay,
                }
                : null;
            return experimentBannerProperties;
        };
        ExperimentFetcher.prototype.getBannerData = function () {
            var assignment = this.getExperimentAssignment();
            var expBannerData = {};
            if ((assignment === null || assignment === void 0 ? void 0 : assignment.acceptButtonCopy) !== undefined) {
                expBannerData.acceptButtonCopy = assignment.acceptButtonCopy || '';
            }
            if ((assignment === null || assignment === void 0 ? void 0 : assignment.declineButtonCopy) !== undefined) {
                expBannerData.declineButtonCopy = assignment.declineButtonCopy || '';
            }
            if ((assignment === null || assignment === void 0 ? void 0 : assignment.title) !== undefined) {
                expBannerData.title = assignment.title || '';
            }
            if ((assignment === null || assignment === void 0 ? void 0 : assignment.bannerCopy) !== undefined) {
                expBannerData.bannerCopy = assignment.bannerCopy || '';
            }
            return expBannerData;
        };
        ExperimentFetcher.prototype.getExperimentAssignment = function () {
            var _this = this;
            if (this.experimentId && this.experimentAssignment) {
                var experiment = find(this.experimentConfig, function (experiment) { return experiment.id === _this.experimentId; });
                var assignment = find(experiment === null || experiment === void 0 ? void 0 : experiment.assignments, function (assignment) { return assignment.id === _this.experimentAssignment; });
                return assignment;
            }
            return null;
        };
        ExperimentFetcher.prototype.setExperimentIds = function (bannerData) {
            var _a, _b;
            var experiments = (bannerData === null || bannerData === void 0 ? void 0 : bannerData.experiments) || [];
            var serverExperimentId = (_a = experiments[0]) === null || _a === void 0 ? void 0 : _a.experimentId;
            var serverExperimentAssignment = (_b = experiments[0]) === null || _b === void 0 ? void 0 : _b.experimentAssignment;
            var urlExperimentId = getURLParam('experiment-id');
            var urlExperimentAssignment = getURLParam('experiment-assignment');
            this.experimentId = urlExperimentId || serverExperimentId;
            this.experimentAssignment = urlExperimentAssignment || serverExperimentAssignment;
        };
        return ExperimentFetcher;
    }());

    // ids from Experiments Platform (ExP): https://experiments.shopify.com/
    var Exp;
    (function (Exp) {
        Exp["Example"] = "example";
        Exp["BannerPlacement"] = "customer_privacy_banner_placement_experiment";
        Exp["BannerPlacementV2"] = "customer_privacy_banner_placement_experiment_v2";
        Exp["BannerBodyCopy"] = "customer_privacy_body_copy_experiment";
        Exp["CtaPlacement"] = "customer_privacy_button_placement_experiment";
        Exp["CtaContent"] = "customer_privacy_button_content_experiment";
        Exp["CtaWeight"] = "customer_privacy_button_weight_experiment";
        Exp["BannerHeadline"] = "customer_privacy_headline_content_experiment";
        Exp["BannerOverlay"] = "customer_privacy_overlay_effect_experiment";
        Exp["VariableCombination"] = "customer_privacy_variable_combination_experiment";
    })(Exp || (Exp = {}));
    var ExpVariant;
    (function (ExpVariant) {
        ExpVariant["Example1"] = "1";
        ExpVariant["Example2"] = "2";
        ExpVariant["Example3"] = "3";
        ExpVariant["Example4"] = "4";
        ExpVariant["Example5"] = "5";
        ExpVariant["Example6"] = "6";
        ExpVariant["Example7"] = "7";
        ExpVariant["Example8"] = "8";
        ExpVariant["Example9"] = "9";
        ExpVariant["BannerPlacementFullWidth"] = "control";
        ExpVariant["BannerPlacementCenter"] = "test_group_a";
        ExpVariant["BannerPlacementBottomLeft"] = "test_group_b";
        ExpVariant["BannerPlacementBottomRight"] = "test_group_c";
        ExpVariant["BannerPlacementV2FullWidth"] = "control";
        ExpVariant["BannerPlacementV2Center"] = "test_group_a";
        ExpVariant["BannerPlacementV2BottomLeft"] = "test_group_b";
        ExpVariant["BannerPlacementV2BottomCenter"] = "test_group_c";
        ExpVariant["BannerBodyCopyMinimalText"] = "control";
        ExpVariant["BannerBodyCopyMoreDetails"] = "test_group_a";
        ExpVariant["BannerBodyCopyMoreTechnicalAndLegalDetails"] = "test_group_b";
        ExpVariant["CtaPlacementAcceptFirst"] = "control";
        ExpVariant["CtaPlacementDeclineFirst"] = "test";
        ExpVariant["CtaContentConversational"] = "control";
        ExpVariant["CtaContentUnambiguous"] = "test_group_a";
        ExpVariant["CtaContentPersonallyDriven"] = "test_group_b";
        ExpVariant["CtaWeightWeighted"] = "control";
        ExpVariant["CtaWeightFill"] = "test_group_a";
        ExpVariant["CtaWeightOutline"] = "test_group_b";
        ExpVariant["BannerHeadlineUserEmpathy"] = "control";
        ExpVariant["BannerHeadlinePersonalizedWithShopName"] = "test_group_a";
        ExpVariant["BannerHeadlineNoHeadline"] = "test_group_b";
        ExpVariant["BannerOverlayNo"] = "control";
        ExpVariant["BannerOverlayYes"] = "test";
        ExpVariant["VariableCombinationControl"] = "control";
        ExpVariant["VariableCombinationWinners"] = "test_group_a";
        ExpVariant["VariableCombinationWinnerAlt"] = "test_group_b";
    })(ExpVariant || (ExpVariant = {}));

    var experiment$9 = {
        id: Exp.Example,
        assignments: [
            {
                id: ExpVariant.Example1,
                desc: '',
                bannerPlacement: BannerPlacement.BottomFullWidth,
                buttonPlacement: ButtonPlacement.AcceptFirst,
                buttonWeight: ButtonWeight.Weighted,
                overlay: Overlay.Yes,
            },
            {
                id: ExpVariant.Example2,
                desc: '',
                bannerPlacement: BannerPlacement.Center,
                buttonPlacement: ButtonPlacement.DeclineFirst,
                buttonWeight: ButtonWeight.Outline,
                overlay: Overlay.Yes,
            },
            {
                id: ExpVariant.Example3,
                desc: '',
                bannerPlacement: BannerPlacement.BottomLeft,
                buttonPlacement: ButtonPlacement.AcceptFirst,
                buttonWeight: ButtonWeight.Fill,
                overlay: Overlay.Yes,
            },
            {
                id: ExpVariant.Example4,
                desc: '',
                bannerPlacement: BannerPlacement.BottomFullWidth,
                buttonPlacement: ButtonPlacement.AcceptFirst,
                buttonWeight: ButtonWeight.Fill,
                overlay: Overlay.No,
            },
            {
                id: ExpVariant.Example5,
                desc: '',
                bannerPlacement: BannerPlacement.Center,
                buttonPlacement: ButtonPlacement.AcceptFirst,
                buttonWeight: ButtonWeight.Fill,
                overlay: Overlay.No,
            },
            {
                id: ExpVariant.Example6,
                desc: '',
                bannerPlacement: BannerPlacement.BottomLeft,
                buttonPlacement: ButtonPlacement.DeclineFirst,
                buttonWeight: ButtonWeight.Outline,
                overlay: Overlay.No,
            },
            {
                id: ExpVariant.Example7,
                desc: '',
                bannerPlacement: BannerPlacement.BottomRight,
                buttonPlacement: ButtonPlacement.AcceptFirst,
                buttonWeight: ButtonWeight.Fill,
                overlay: Overlay.Yes,
            },
            {
                id: ExpVariant.Example8,
                desc: '',
                bannerPlacement: BannerPlacement.BottomRight,
                buttonPlacement: ButtonPlacement.AcceptFirst,
                buttonWeight: ButtonWeight.Fill,
                overlay: Overlay.No,
            },
            {
                id: ExpVariant.Example9,
                desc: '',
                bannerPlacement: BannerPlacement.BottomRight,
                buttonPlacement: ButtonPlacement.DeclineFirst,
                buttonWeight: ButtonWeight.Outline,
                overlay: Overlay.No,
            },
        ],
    };

    var experiment$8 = {
        id: Exp.BannerBodyCopy,
        assignments: [
            {
                id: ExpVariant.BannerBodyCopyMinimalText,
                desc: 'Control: Minimal text in the body',
                bannerPlacement: BannerPlacement.BottomFullWidth,
                buttonPlacement: ButtonPlacement.AcceptFirst,
                buttonWeight: ButtonWeight.Weighted,
                overlay: Overlay.No,
                acceptButtonCopy: 'Accept',
                declineButtonCopy: 'Do not accept',
                bannerCopy: 'We use cookies and similar technologies to provide the best experience on our website.',
            },
            {
                id: ExpVariant.BannerBodyCopyMoreDetails,
                desc: 'More details regarding data collection and usage in the body',
                bannerPlacement: BannerPlacement.BottomFullWidth,
                buttonPlacement: ButtonPlacement.AcceptFirst,
                buttonWeight: ButtonWeight.Weighted,
                overlay: Overlay.No,
                acceptButtonCopy: 'Accept',
                declineButtonCopy: 'Do not accept',
                bannerCopy: 'We and our partners use technologies, which may be stored on your device, and process personal data like IP addresses or device identifiers on our platforms. If you\'re OK with this, please click "Accept." If you\'re not, you can click "Do not accept."',
            },
            {
                id: ExpVariant.BannerBodyCopyMoreTechnicalAndLegalDetails,
                desc: 'More technical and legal details compared to the other two variants',
                bannerPlacement: BannerPlacement.BottomFullWidth,
                buttonPlacement: ButtonPlacement.AcceptFirst,
                buttonWeight: ButtonWeight.Weighted,
                overlay: Overlay.No,
                acceptButtonCopy: 'Accept',
                declineButtonCopy: 'Do not accept',
                bannerCopy: 'We and our partners use technologies, such as cookies stored on your device, and process personal data like IP addresses or device identifiers on our platforms. We use this data to analyze how our website is used and provide you with personalized advertising. If you\'re OK with this, please click "Accept." If you\'re not, you can click "Do not accept."',
            },
        ],
    };

    var SHOP_NAME_PLACEHOLDER = '{{{SHOPNAME}}}';

    var experiment$7 = {
        id: Exp.BannerHeadline,
        assignments: [
            {
                id: ExpVariant.BannerHeadlineUserEmpathy,
                desc: 'Control: Sense of user empathy in the headline',
                bannerPlacement: BannerPlacement.BottomFullWidth,
                buttonPlacement: ButtonPlacement.AcceptFirst,
                buttonWeight: ButtonWeight.Weighted,
                overlay: Overlay.No,
                title: 'We care about your privacy',
                acceptButtonCopy: 'Accept',
                declineButtonCopy: 'Do not accept',
                bannerCopy: 'We and our partners use technologies, which may be stored on your device, and process personal data like IP addresses or device identifiers on our platforms. If you\'re OK with this, please click "Accept." If you\'re not, you can click "Do not accept."',
            },
            {
                id: ExpVariant.BannerHeadlinePersonalizedWithShopName,
                desc: 'More personalized headline that contains the shop name',
                bannerPlacement: BannerPlacement.BottomFullWidth,
                buttonPlacement: ButtonPlacement.AcceptFirst,
                buttonWeight: ButtonWeight.Weighted,
                overlay: Overlay.No,
                title: "".concat(SHOP_NAME_PLACEHOLDER, " and privacy"),
                acceptButtonCopy: 'Accept',
                declineButtonCopy: 'Do not accept',
                bannerCopy: 'We and our partners use technologies, which may be stored on your device, and process personal data like IP addresses or device identifiers on our platforms. If you\'re OK with this, please click "Accept." If you\'re not, you can click "Do not accept."',
            },
            {
                id: ExpVariant.BannerHeadlineNoHeadline,
                desc: 'Without any headlines',
                bannerPlacement: BannerPlacement.BottomFullWidth,
                buttonPlacement: ButtonPlacement.AcceptFirst,
                buttonWeight: ButtonWeight.Weighted,
                overlay: Overlay.No,
                title: '',
                acceptButtonCopy: 'Accept',
                declineButtonCopy: 'Do not accept',
                bannerCopy: 'We and our partners use technologies, which may be stored on your device, and process personal data like IP addresses or device identifiers on our platforms. If you\'re OK with this, please click "Accept." If you\'re not, you can click "Do not accept."',
            },
        ],
    };

    var experiment$6 = {
        id: Exp.BannerOverlay,
        assignments: [
            {
                id: ExpVariant.BannerOverlayNo,
                desc: 'Control: Allows the user to interact with the site - no overlay',
                bannerPlacement: BannerPlacement.BottomFullWidth,
                buttonPlacement: ButtonPlacement.AcceptFirst,
                buttonWeight: ButtonWeight.Weighted,
                overlay: Overlay.No,
            },
            {
                id: ExpVariant.BannerOverlayYes,
                desc: 'Translucent overlay which obstructs site content',
                bannerPlacement: BannerPlacement.BottomFullWidth,
                buttonPlacement: ButtonPlacement.AcceptFirst,
                buttonWeight: ButtonWeight.Weighted,
                overlay: Overlay.Yes,
            },
        ],
    };

    var experiment$5 = {
        id: Exp.BannerPlacement,
        assignments: [
            {
                id: ExpVariant.BannerPlacementFullWidth,
                desc: 'Control: Full width bottom',
                bannerPlacement: BannerPlacement.BottomFullWidth,
                buttonPlacement: ButtonPlacement.AcceptFirst,
                buttonWeight: ButtonWeight.Weighted,
                overlay: Overlay.No,
            },
            {
                id: ExpVariant.BannerPlacementCenter,
                desc: 'Center aligned',
                bannerPlacement: BannerPlacement.Center,
                buttonPlacement: ButtonPlacement.AcceptFirst,
                buttonWeight: ButtonWeight.Weighted,
                overlay: Overlay.No,
            },
            {
                id: ExpVariant.BannerPlacementBottomLeft,
                desc: 'Bottom left',
                bannerPlacement: BannerPlacement.BottomLeft,
                buttonPlacement: ButtonPlacement.AcceptFirst,
                buttonWeight: ButtonWeight.Weighted,
                overlay: Overlay.No,
            },
            {
                id: ExpVariant.BannerPlacementBottomRight,
                desc: 'Bottom right',
                bannerPlacement: BannerPlacement.BottomRight,
                buttonPlacement: ButtonPlacement.AcceptFirst,
                buttonWeight: ButtonWeight.Weighted,
                overlay: Overlay.No,
            },
        ],
    };

    var experiment$4 = {
        id: Exp.BannerPlacementV2,
        assignments: [
            {
                id: ExpVariant.BannerPlacementV2FullWidth,
                desc: 'Control: Full width bottom',
                bannerPlacement: BannerPlacement.BottomFullWidth,
                buttonPlacement: ButtonPlacement.AcceptFirst,
                buttonWeight: ButtonWeight.Weighted,
                overlay: Overlay.No,
            },
            {
                id: ExpVariant.BannerPlacementV2Center,
                desc: 'Center aligned',
                bannerPlacement: BannerPlacement.Center,
                buttonPlacement: ButtonPlacement.AcceptFirst,
                buttonWeight: ButtonWeight.Weighted,
                overlay: Overlay.No,
            },
            {
                id: ExpVariant.BannerPlacementV2BottomLeft,
                desc: 'Bottom left',
                bannerPlacement: BannerPlacement.BottomLeft,
                buttonPlacement: ButtonPlacement.AcceptFirst,
                buttonWeight: ButtonWeight.Weighted,
                overlay: Overlay.No,
            },
            {
                id: ExpVariant.BannerPlacementV2BottomCenter,
                desc: 'Bottom center',
                bannerPlacement: BannerPlacement.BottomCenter,
                buttonPlacement: ButtonPlacement.AcceptFirst,
                buttonWeight: ButtonWeight.Weighted,
                overlay: Overlay.No,
            },
        ],
    };

    var experiment$3 = {
        id: Exp.CtaContent,
        assignments: [
            {
                id: ExpVariant.CtaContentConversational,
                desc: 'Control: "Ok" and "No, thank you" - Conversational',
                bannerPlacement: BannerPlacement.BottomFullWidth,
                buttonPlacement: ButtonPlacement.AcceptFirst,
                buttonWeight: ButtonWeight.Weighted,
                overlay: Overlay.No,
                acceptButtonCopy: 'Ok',
                declineButtonCopy: 'No Thanks',
            },
            {
                id: ExpVariant.CtaContentUnambiguous,
                desc: 'Unambiguous "Accept" and "Do not accept"',
                bannerPlacement: BannerPlacement.BottomFullWidth,
                buttonPlacement: ButtonPlacement.AcceptFirst,
                buttonWeight: ButtonWeight.Weighted,
                overlay: Overlay.No,
                acceptButtonCopy: 'Accept',
                declineButtonCopy: 'Do not accept',
            },
            {
                id: ExpVariant.CtaContentPersonallyDriven,
                desc: 'Personally driven "Yes, I agree" and "No, I decline"',
                bannerPlacement: BannerPlacement.BottomFullWidth,
                buttonPlacement: ButtonPlacement.AcceptFirst,
                buttonWeight: ButtonWeight.Weighted,
                overlay: Overlay.No,
                acceptButtonCopy: 'Yes, I agree',
                declineButtonCopy: 'No, I decline',
            },
        ],
    };

    var experiment$2 = {
        id: Exp.CtaPlacement,
        assignments: [
            {
                id: ExpVariant.CtaPlacementAcceptFirst,
                desc: 'Control: Accept button on the left side of the banner and decline button on the right',
                bannerPlacement: BannerPlacement.BottomFullWidth,
                buttonPlacement: ButtonPlacement.AcceptFirst,
                buttonWeight: ButtonWeight.Weighted,
                overlay: Overlay.No,
            },
            {
                id: ExpVariant.CtaPlacementDeclineFirst,
                desc: 'Accept button on the right side of the banner and decline button on the left',
                bannerPlacement: BannerPlacement.BottomFullWidth,
                buttonPlacement: ButtonPlacement.DeclineFirst,
                buttonWeight: ButtonWeight.Weighted,
                overlay: Overlay.No,
            },
        ],
    };

    var experiment$1 = {
        id: Exp.CtaWeight,
        assignments: [
            {
                id: ExpVariant.CtaWeightWeighted,
                desc: 'Control: Weighted - Filled "Ok" button',
                bannerPlacement: BannerPlacement.BottomFullWidth,
                buttonPlacement: ButtonPlacement.AcceptFirst,
                buttonWeight: ButtonWeight.Weighted,
                overlay: Overlay.No,
            },
            {
                id: ExpVariant.CtaWeightFill,
                desc: 'Both "accept" and "decline" buttons filled',
                bannerPlacement: BannerPlacement.BottomFullWidth,
                buttonPlacement: ButtonPlacement.AcceptFirst,
                buttonWeight: ButtonWeight.Fill,
                overlay: Overlay.No,
            },
            {
                id: ExpVariant.CtaWeightOutline,
                desc: 'Both "accept" and "decline" buttons outlined',
                bannerPlacement: BannerPlacement.BottomFullWidth,
                buttonPlacement: ButtonPlacement.AcceptFirst,
                buttonWeight: ButtonWeight.Outline,
                overlay: Overlay.No,
            },
        ],
    };

    var experiment = {
        id: Exp.VariableCombination,
        assignments: [
            {
                id: ExpVariant.VariableCombinationControl,
                desc: 'Control group - Existing prod experience.',
                bannerPlacement: BannerPlacement.BottomFullWidth,
                buttonPlacement: ButtonPlacement.AcceptFirst,
                buttonWeight: ButtonWeight.Weighted,
                overlay: Overlay.No,
                acceptButtonCopy: 'Ok',
                declineButtonCopy: 'No thanks',
                title: 'We care about your privacy',
                bannerCopy: 'We use cookies and similar technologies to provide the best experience on our website.',
            },
            {
                id: ExpVariant.VariableCombinationWinners,
                desc: 'Banner with elements that yielded the highest consent rate in past tests.',
                bannerPlacement: BannerPlacement.Center,
                buttonPlacement: ButtonPlacement.AcceptFirst,
                buttonWeight: ButtonWeight.Outline,
                overlay: Overlay.No,
                acceptButtonCopy: 'Accept',
                declineButtonCopy: 'Do not accept',
                title: 'We care about your privacy',
                bannerCopy: 'We and our partners use technologies, which may be stored on your device, and process personal data like IP addresses or device identifiers on our platforms. If you\'re ok with this, please click “Accept.” If you\'re not, you can click "Do not accept."',
            },
            {
                id: ExpVariant.VariableCombinationWinnerAlt,
                desc: 'Banner with elements that yielded the highest consent rate in past tests, with more user-friendly copy.',
                bannerPlacement: BannerPlacement.Center,
                buttonPlacement: ButtonPlacement.AcceptFirst,
                buttonWeight: ButtonWeight.Outline,
                overlay: Overlay.No,
                acceptButtonCopy: 'Accept all',
                declineButtonCopy: 'Decline all',
                title: 'We value your privacy',
                bannerCopy: 'We and our partners use cookies and other technologies stored on your device to improve your experience on our site and understand how you interact with our products. We also process personal data like IP addresses to provide you with ads and search results relevant to you. If that\'s OK, click "Accept all." If not, click "Decline all." More details in our',
            },
        ],
    };

    var experimentsConfig = [
        experiment$9,
        experiment$8,
        experiment$7,
        experiment$6,
        experiment$5,
        experiment$4,
        experiment$3,
        experiment$2,
        experiment$1,
        experiment,
    ];

    function setBaseAttributes(element, attributes) {
        if (attributes === null || attributes === void 0 ? void 0 : attributes.id) {
            element.setAttribute('id', attributes.id);
        }
        if (attributes === null || attributes === void 0 ? void 0 : attributes.class) {
            element.setAttribute('class', attributes.class);
        }
        if (attributes === null || attributes === void 0 ? void 0 : attributes.onClick) {
            element.addEventListener('click', attributes.onClick);
        }
        if (attributes === null || attributes === void 0 ? void 0 : attributes.appendTo) {
            attributes.appendTo.appendChild(element);
        }
        if (attributes === null || attributes === void 0 ? void 0 : attributes.role) {
            element.setAttribute('role', attributes.role);
        }
        if (attributes === null || attributes === void 0 ? void 0 : attributes.autofocus) {
            element.setAttribute('autofocus', '');
        }
        if (attributes === null || attributes === void 0 ? void 0 : attributes.ariaHidden) {
            element.setAttribute('aria-hidden', "".concat(attributes === null || attributes === void 0 ? void 0 : attributes.ariaHidden));
        }
        return element;
    }
    function div(attributes) {
        var div = setBaseAttributes(document.createElement('div'), attributes);
        if (attributes === null || attributes === void 0 ? void 0 : attributes.text) {
            div.textContent = attributes.text;
        }
        if (attributes === null || attributes === void 0 ? void 0 : attributes.ariaModal) {
            div.setAttribute('aria-modal', attributes.ariaModal);
        }
        if (attributes === null || attributes === void 0 ? void 0 : attributes.ariaLabelledby) {
            div.setAttribute('aria-labelledby', attributes.ariaLabelledby);
        }
        return div;
    }
    function span(attributes) {
        var span = setBaseAttributes(document.createElement('span'), attributes);
        if (attributes === null || attributes === void 0 ? void 0 : attributes.text) {
            span.textContent = attributes.text;
        }
        return span;
    }
    function button(attributes) {
        var _a;
        var button = setBaseAttributes(document.createElement('button'), attributes);
        button.textContent = (_a = attributes === null || attributes === void 0 ? void 0 : attributes.text) !== null && _a !== void 0 ? _a : null;
        if (attributes.disabled) {
            button.setAttribute('disabled', '');
        }
        if (attributes.ariaHaspopup) {
            button.setAttribute('aria-haspopup', attributes.ariaHaspopup);
        }
        if (attributes.type) {
            button.setAttribute('type', attributes.type);
        }
        if (attributes.ariaLabel) {
            button.setAttribute('aria-label', attributes.ariaLabel);
        }
        return button;
    }
    function anchor(attributes) {
        var link = setBaseAttributes(document.createElement('a'), attributes);
        link.setAttribute('href', attributes.href);
        link.textContent = attributes.text;
        link.setAttribute('target', attributes.target === undefined ? '_blank' : attributes.target);
        if (!attributes.target || attributes.target === '_blank') {
            link.setAttribute('rel', 'noopener noreferrer');
        }
        return link;
    }
    function paragraph(attributes) {
        var paragraph = setBaseAttributes(document.createElement('p'), attributes);
        paragraph.textContent = attributes.text;
        return paragraph;
    }
    var HeadingLevel;
    (function (HeadingLevel) {
        HeadingLevel["H1"] = "h1";
        HeadingLevel["H2"] = "h2";
        HeadingLevel["H3"] = "h3";
    })(HeadingLevel || (HeadingLevel = {}));
    function heading(level, attributes) {
        var heading = setBaseAttributes(document.createElement(level), attributes);
        heading.textContent = attributes.text;
        return heading;
    }
    function h2(attributes) {
        return heading(HeadingLevel.H2, attributes);
    }
    function h3(attributes) {
        return heading(HeadingLevel.H3, attributes);
    }
    function styleTag(attributes) {
        var styleTag = setBaseAttributes(document.createElement('style'), attributes);
        styleTag.textContent = attributes.content;
        return styleTag;
    }
    function input(attributes) {
        var input = setBaseAttributes(document.createElement('input'), attributes);
        input.setAttribute('type', attributes.type);
        if (attributes.checked) {
            input.setAttribute('checked', 'true');
        }
        if (attributes.disabled) {
            input.setAttribute('disabled', "".concat(attributes.disabled));
        }
        if (attributes === null || attributes === void 0 ? void 0 : attributes.onChange) {
            input.addEventListener('change', attributes.onChange);
        }
        if (attributes.tabindex) {
            input.setAttribute('tabindex', "".concat(attributes.tabindex));
        }
        if (attributes.ariaReadonly === true) {
            input.setAttribute('aria-readonly', "".concat(attributes.ariaReadonly));
        }
        return input;
    }
    function label(attributes) {
        var label = setBaseAttributes(document.createElement('label'), attributes);
        label.setAttribute('for', attributes.for);
        if (attributes === null || attributes === void 0 ? void 0 : attributes.text) {
            label.textContent = attributes.text;
        }
        return label;
    }
    function svg(attrs) {
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttributeNS(null, 'width', attrs.width);
        svg.setAttributeNS(null, 'height', attrs.height);
        svg.setAttributeNS(null, 'viewBox', "0 0 ".concat(attrs.width, " ").concat(attrs.height));
        if (attrs === null || attrs === void 0 ? void 0 : attrs.fillRule) {
            svg.setAttributeNS(null, 'fill-rule', attrs.fillRule);
        }
        if (attrs === null || attrs === void 0 ? void 0 : attrs.clipRule) {
            svg.setAttributeNS(null, 'clip-rule', attrs.clipRule);
        }
        var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttributeNS(null, 'fill', (attrs === null || attrs === void 0 ? void 0 : attrs.colour) || '#000');
        path.setAttributeNS(null, 'd', attrs.path);
        svg.appendChild(path);
        if (attrs === null || attrs === void 0 ? void 0 : attrs.id) {
            svg.setAttribute('id', attrs.id);
        }
        if (attrs === null || attrs === void 0 ? void 0 : attrs.class) {
            svg.setAttribute('class', attrs.class);
        }
        if (attrs === null || attrs === void 0 ? void 0 : attrs.dataIconType) {
            svg.setAttribute('data-icon-type', attrs.dataIconType);
        }
        if (attrs === null || attrs === void 0 ? void 0 : attrs.ariaHidden) {
            svg.setAttribute('aria-hidden', "".concat(attrs === null || attrs === void 0 ? void 0 : attrs.ariaHidden));
        }
        if (attrs === null || attrs === void 0 ? void 0 : attrs.focusable) {
            svg.setAttribute('focusable', "".concat(attrs === null || attrs === void 0 ? void 0 : attrs.focusable));
        }
        if (attrs === null || attrs === void 0 ? void 0 : attrs.appendTo) {
            attrs.appendTo.appendChild(svg);
        }
        return svg;
    }
    function ul(attributes) {
        var ul = setBaseAttributes(document.createElement('ul'), attributes);
        if (attributes.lis) {
            attributes.lis.forEach(function (liText) {
                var li = document.createElement('li');
                li.textContent = liText;
                ul.appendChild(li);
            });
        }
        return ul;
    }
    function section(attributes) {
        var section = setBaseAttributes(document.createElement('section'), attributes);
        if (attributes === null || attributes === void 0 ? void 0 : attributes.text) {
            section.textContent = attributes.text;
        }
        if (attributes === null || attributes === void 0 ? void 0 : attributes.ariaModal) {
            section.setAttribute('aria-modal', attributes.ariaModal);
        }
        if (attributes === null || attributes === void 0 ? void 0 : attributes.ariaLabelledby) {
            section.setAttribute('aria-labelledby', attributes.ariaLabelledby);
        }
        return section;
    }
    function header(attributes) {
        var header = setBaseAttributes(document.createElement('header'), attributes);
        return header;
    }

    function bannerTemplate(bannerData, adminPreview) {
        if (adminPreview === void 0) { adminPreview = false; }
        var bannerDialog = section({
            id: BannerAttribute.DialogId,
            class: BannerAttribute.DialogClass,
            role: 'alertdialog',
            ariaModal: 'false',
            ariaLabelledby: BannerAttribute.BodyTitleId,
        });
        var wrapperDiv = div({ class: BannerAttribute.WrapperClass });
        bannerDialog.appendChild(wrapperDiv);
        var bodyDiv = div({ class: BannerAttribute.BodyClass });
        wrapperDiv.appendChild(bodyDiv);
        var buttonDiv = div({ class: BannerAttribute.ButtonsClass });
        wrapperDiv.appendChild(buttonDiv);
        addTitle(bannerData, bodyDiv);
        addCopy(bannerData, bodyDiv);
        if (bannerData.granularConsentEnabled) {
            addButtonManage(bannerData, buttonDiv);
            buttonDiv.classList.add(BannerAttribute.ButtonsGranularClass);
        }
        addButtonAccept(bannerData, buttonDiv, adminPreview);
        addButtonDecline(bannerData, buttonDiv, adminPreview);
        return bannerDialog;
    }
    function addTitle(bannerData, bodyDiv) {
        if (bannerData.title) {
            var title = h2({ id: BannerAttribute.BodyTitleId, text: bannerData.title });
            bodyDiv.appendChild(title);
        }
    }
    function addCopy(bannerData, bodyDiv) {
        var copy = paragraph({ text: "".concat(bannerData.bannerCopy, " ") });
        var link = anchor({
            id: BannerAttribute.BodyCopyPolicyLinkId,
            href: bannerData.policyLink,
            target: '_blank',
            text: bannerData.policyTitle ? bannerData.policyTitle : 'Privacy Policy',
        });
        copy.appendChild(link);
        bodyDiv.appendChild(copy);
    }
    function addButtonAccept(bannerData, buttonDiv, adminPreview) {
        buttonDiv.appendChild(button({
            disabled: adminPreview,
            id: BannerAttribute.ButtonAcceptId,
            class: BannerAttribute.ButtonAcceptClass,
            type: 'button',
            text: bannerData.acceptButtonCopy,
        }));
    }
    function addButtonDecline(bannerData, buttonDiv, adminPreview) {
        buttonDiv.appendChild(button({
            disabled: adminPreview,
            id: BannerAttribute.ButtonDeclineId,
            class: BannerAttribute.ButtonDeclineClass,
            type: 'button',
            text: bannerData.declineButtonCopy,
        }));
    }
    function addButtonManage(bannerData, buttonDiv) {
        var text = span({
            text: bannerData.managePrefsButtonCopy,
        });
        var prefsButton = button({
            id: BannerAttribute.ButtonManagePrefsId,
            class: BannerAttribute.ButtonManagePrefsClass,
            ariaHaspopup: 'dialog',
            type: 'button',
        });
        prefsButton.appendChild(text);
        buttonDiv.appendChild(prefsButton);
    }

    function addModalHeader(modal, bannerData, adminPreview) {
        if (adminPreview === void 0) { adminPreview = false; }
        var modalHeader = header({
            appendTo: modal,
        });
        addCloseButton(modalHeader, 'Close dialog');
        h2({
            id: ManageCookiesModal.HeaderTitleId,
            text: bannerData.granularConsentTitle,
            appendTo: modalHeader,
        });
        var modalHeaderActions = div({
            class: ManageCookiesModal.HeaderActionsClass,
            appendTo: modalHeader,
        });
        addAcceptAllButton(modalHeaderActions, bannerData.granularConsentAcceptAllCopy, adminPreview);
        addDeclineAllButton(modalHeaderActions, bannerData.granularConsentDeclineAllCopy, adminPreview);
        addSaveButton(modalHeaderActions, bannerData.granularConsentSubmitCopy, adminPreview);
        return modalHeader;
    }
    function addCloseButton(parent, text) {
        var closeButton = button({
            id: ManageCookiesModal.HeaderCloseId,
            class: ManageCookiesModal.HeaderCloseClass,
            ariaLabel: text,
            type: 'button',
            text: '',
        });
        svg({
            appendTo: closeButton,
            ariaHidden: true,
            width: '12',
            height: '12',
            path: 'M7.41401 6.00012L11.707 1.70721C12.098 1.31622 12.098 0.684236 11.707 0.293244C11.316 -0.097748 10.684 -0.097748 10.293 0.293244L6.00001 4.58615L1.70701 0.293244C1.31601 -0.097748 0.684006 -0.097748 0.293006 0.293244C-0.0979941 0.684236 -0.0979941 1.31622 0.293006 1.70721L4.58601 6.00012L0.293006 10.293C-0.0979941 10.684 -0.0979941 11.316 0.293006 11.707C0.488006 11.902 0.744006 12 1.00001 12C1.25601 12 1.51201 11.902 1.70701 11.707L6.00001 7.4141L10.293 11.707C10.488 11.902 10.744 12 11 12C11.256 12 11.512 11.902 11.707 11.707C12.098 11.316 12.098 10.684 11.707 10.293L7.41401 6.00012Z',
        });
        parent.appendChild(closeButton);
    }
    function addSaveButton(parent, text, adminPreview) {
        var saveButton = button({
            disabled: adminPreview,
            id: ManageCookiesModal.HeaderSaveId,
            type: 'button',
            text: text,
        });
        if (adminPreview) {
            saveButton.style.display = 'block';
        }
        parent.appendChild(saveButton);
    }
    function addAcceptAllButton(parent, text, adminPreview) {
        parent.appendChild(button({
            disabled: adminPreview,
            id: ManageCookiesModal.HeaderAcceptId,
            type: 'button',
            text: text,
        }));
    }
    function addDeclineAllButton(parent, text, adminPreview) {
        parent.appendChild(button({
            disabled: adminPreview,
            id: ManageCookiesModal.HeaderDeclineId,
            type: 'button',
            text: text,
        }));
    }

    function addModalIntro(modalScrollable, bannerData) {
        var modalIntro = div({
            class: ManageCookiesModal.IntroClass,
            appendTo: modalScrollable,
        });
        addMainIntro(modalIntro, bannerData);
        if (bannerData.granularConsentBulletPointsEnabled) {
            addExplanationLists(modalIntro, bannerData);
        }
        return modalIntro;
    }
    function addMainIntro(modalIntro, bannerData) {
        var modalIntroMain = div({
            class: ManageCookiesModal.IntroMainClass,
            appendTo: modalIntro,
        });
        h3({
            text: bannerData.granularConsentCopyTitle,
            appendTo: modalIntroMain,
        });
        paragraph({
            text: bannerData.granularConsentCopy,
            appendTo: modalIntroMain,
        });
        return modalIntroMain;
    }
    function addExplanationLists(modalIntro, bannerData) {
        var explanationWrapper = div({
            class: ManageCookiesModal.IntroExplainWrapperClass,
            appendTo: modalIntro,
        });
        var explanationIfAccept = div({
            class: ManageCookiesModal.IntroExplainAcceptClass,
            appendTo: explanationWrapper,
        });
        h3({
            text: bannerData.granularConsentIfAccept,
            appendTo: explanationIfAccept,
        });
        ul({
            lis: [
                bannerData.granularConsentBulletPointPerformance,
                bannerData.granularConsentBulletPointPreferences,
                bannerData.granularConsentBulletPointMarketing,
            ],
            appendTo: explanationIfAccept,
        });
        return explanationWrapper;
    }

    function addModalOptions(modalScrollable, bannerData, adminPreview) {
        var themeColours = getThemeColours(bannerData.theme, bannerData.themeColorHslFont, bannerData.themeColorHslBackground, bannerData.themeColorHslButtonFont, bannerData.themeColorHslButtonBackground);
        var modalOptions = div({ class: ManageCookiesModal.OptionWrapperClass });
        modalScrollable.appendChild(modalOptions);
        addOption({
            themeColours: themeColours,
            ids: {
                section: ManageCookiesModal.OptionEssentialId,
                input: ManageCookiesModal.OptionEssentialInputId,
            },
            purpose: {
                description: bannerData.essentialPurposeShortDescription,
                longDescription: bannerData.essentialPurposeLongDescription,
            },
            parent: modalOptions,
            adminPreview: adminPreview,
        });
        addOption({
            themeColours: themeColours,
            ids: {
                section: ManageCookiesModal.OptionAnalyticsId,
                input: ManageCookiesModal.OptionAnalyticsInputId,
            },
            purpose: {
                description: bannerData.performancePurposeShortDescription,
                longDescription: bannerData.performancePurposeLongDescription,
            },
            parent: modalOptions,
            adminPreview: adminPreview,
        });
        addOption({
            themeColours: themeColours,
            ids: {
                section: ManageCookiesModal.OptionPreferencesId,
                input: ManageCookiesModal.OptionPreferencesInputId,
            },
            purpose: {
                description: bannerData.preferencesPurposeShortDescription,
                longDescription: bannerData.preferencesPurposeLongDescription,
            },
            parent: modalOptions,
            adminPreview: adminPreview,
        });
        addOption({
            themeColours: themeColours,
            ids: {
                section: ManageCookiesModal.OptionMarketingId,
                input: ManageCookiesModal.OptionMarketingInputId,
            },
            purpose: {
                description: bannerData.marketingPurposeShortDescription,
                longDescription: bannerData.marketingPurposeLongDescription,
            },
            parent: modalOptions,
            adminPreview: adminPreview,
        });
        return modalOptions;
    }
    function createUncheckedIcon(iconColor) {
        return svg({
            dataIconType: 'unchecked',
            width: '24',
            height: '24',
            path: 'M5 2c-1.654 0-3 1.346-3 3v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-14c0-1.654-1.346-3-3-3h-14zm19 3v14c0 2.761-2.238 5-5 5h-14c-2.762 0-5-2.239-5-5v-14c0-2.761 2.238-5 5-5h14c2.762 0 5 2.239 5 5z',
            colour: iconColor,
            focusable: true,
        });
    }
    function createCheckedIcon(iconColor) {
        return svg({
            dataIconType: 'checked',
            width: '24',
            height: '24',
            path: 'M19 0h-14c-2.762 0-5 2.239-5 5v14c0 2.761 2.238 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-8.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z',
            colour: iconColor,
            focusable: true,
        });
    }
    function addOption(params) {
        var themeColours = params.themeColours, purpose = params.purpose, ids = params.ids, parent = params.parent;
        var isEssentialInput = ids.input === ManageCookiesModal.OptionEssentialInputId;
        var uncheckedIcon = createUncheckedIcon(themeColours.iconColor);
        var checkedIcon = createCheckedIcon(themeColours.iconColor);
        var modalOption = div({
            class: ManageCookiesModal.OptionClass,
            id: ids.section,
        });
        var modalOptionLabel = label({
            appendTo: modalOption,
            for: ids.input,
            text: purpose.description,
        });
        input({
            appendTo: modalOptionLabel,
            id: ids.input,
            type: 'checkbox',
            checked: isEssentialInput,
            ariaReadonly: isEssentialInput,
            tabindex: '0',
        });
        var modealOptionLabelSpan = span({ appendTo: modalOptionLabel, ariaHidden: true });
        modealOptionLabelSpan.appendChild(checkedIcon);
        modealOptionLabelSpan.appendChild(uncheckedIcon);
        paragraph({
            appendTo: modalOption,
            text: purpose.longDescription,
        });
        if (isEssentialInput) {
            checkedIcon.style.display = 'block';
            uncheckedIcon.style.display = 'none';
        }
        else {
            checkedIcon.style.display = 'none';
            uncheckedIcon.style.display = 'block';
        }
        parent.appendChild(modalOption);
    }

    function consentModalTemplate(bannerData, adminPreview) {
        if (adminPreview === void 0) { adminPreview = false; }
        var modalWrapper = div({ id: ManageCookiesModal.WrapperId, class: ManageCookiesModal.WrapperClass });
        var modalOverlay = div({ id: ManageCookiesModal.OverlayId, class: ManageCookiesModal.OverlayClass, text: ' ' });
        modalWrapper.appendChild(modalOverlay);
        var modal = section({
            id: ManageCookiesModal.DialogId,
            class: ManageCookiesModal.DialogClass,
            role: 'dialog',
            ariaModal: 'true',
            ariaLabelledby: ManageCookiesModal.HeaderTitleId,
        });
        modalWrapper.appendChild(modal);
        addModalHeader(modal, bannerData, adminPreview);
        var modalScrollable = div({ class: ManageCookiesModal.DialogScrollableClass });
        modal.appendChild(modalScrollable);
        addModalIntro(modalScrollable, bannerData);
        addModalOptions(modalScrollable, bannerData, adminPreview);
        return modalWrapper;
    }

    var Preferences = /** @class */ (function () {
        function Preferences(bannerData, shopDomain, storefrontAccessToken) {
            this.bannerData = bannerData;
            if (shopDomain && storefrontAccessToken) {
                this.shopDomain = shopDomain;
                this.storefrontAccessToken = storefrontAccessToken;
                this.logger = new Logger(shopDomain);
            }
            else {
                this.logger = new Logger();
            }
        }
        Preferences.show = function () {
            var modal = document.getElementById(ManageCookiesModal.WrapperId);
            if (modal !== null) {
                modal.style.display = 'block';
                document.body.style.setProperty('overflow', 'hidden');
            }
        };
        Preferences.hide = function () {
            var modal = document.getElementById(ManageCookiesModal.WrapperId);
            if (modal !== null) {
                modal.style.display = 'none';
                document.body.style.removeProperty('overflow');
            }
        };
        Preferences.hideModalAndBanner = function () {
            var modal = document.getElementById(ManageCookiesModal.WrapperId);
            if (modal !== null) {
                modal.style.display = 'none';
                document.body.style.removeProperty('overflow');
            }
            var bannerDialog = document.getElementById(BannerAttribute.DialogId);
            if (bannerDialog !== null) {
                bannerDialog.style.display = 'none';
            }
        };
        Preferences.selectedConsent = function () {
            var marketingCheckbox = document.getElementById(ManageCookiesModal.OptionMarketingInputId);
            var analyticsCheckbox = document.getElementById(ManageCookiesModal.OptionAnalyticsInputId);
            var prefsCheckbox = document.getElementById(ManageCookiesModal.OptionPreferencesInputId);
            var marketingValue = marketingCheckbox.checked ? '1' : '0';
            var analyticsValue = analyticsCheckbox.checked ? '1' : '0';
            var preferencesValue = prefsCheckbox.checked ? '1' : '0';
            return "".concat(marketingValue).concat(analyticsValue).concat(preferencesValue);
        };
        Preferences.prototype.init = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.render();
                    return [2 /*return*/];
                });
            });
        };
        Preferences.prototype.render = function () {
            this.addCSS(this.bannerData);
            this.addHTML(this.bannerData);
            Preferences.show();
            this.setupCheckboxEventHandlers();
            this.setupButtonEventHandlers();
            this.setupKeyboardEventHandlers();
            this.logger.emitInteraction(BannerInteraction.ManagePreferences);
        };
        Preferences.prototype.addCSS = function (bannerData) {
            var content = modalCssTemplate(bannerData);
            var style = styleTag({ id: ManageCookiesModal.StylesContainerId, content: content });
            document.head.appendChild(style);
        };
        Preferences.prototype.addHTML = function (bannerData) {
            var content = consentModalTemplate(bannerData);
            var banner = document.getElementById(BannerAttribute.DialogId);
            insertAfter(banner, content);
            var modal = document.getElementById(ManageCookiesModal.DialogId);
            if (modal)
                modal.dataset.consent = Preferences.selectedConsent();
            Preferences.hide();
        };
        Preferences.prototype.handleOptionChange = function (_a) {
            var target = _a.target, isReadOnly = _a.isReadOnly, sectionId = _a.sectionId;
            if (isReadOnly) {
                target.checked = true;
            }
            var isChecked = target.checked;
            var section = document.getElementById(sectionId);
            var checkedIcon = section.querySelector("svg[data-icon-type=\"checked\"]");
            var uncheckedIcon = section.querySelector("svg[data-icon-type=\"unchecked\"]");
            var toggleCheckBoxIcon = function () {
                if (isChecked) {
                    checkedIcon.style.display = 'block';
                    uncheckedIcon.style.display = 'none';
                }
                else {
                    checkedIcon.style.display = 'none';
                    uncheckedIcon.style.display = 'block';
                }
            };
            var highlightSaveButton = function () {
                var currentConsent = Preferences.selectedConsent();
                var modal = document.getElementById(ManageCookiesModal.DialogId);
                var saveButton = document.getElementById(ManageCookiesModal.HeaderSaveId);
                if ((modal === null || modal === void 0 ? void 0 : modal.dataset.consent) === currentConsent) {
                    saveButton.className = '';
                }
                else {
                    saveButton.className = 'primary';
                }
            };
            toggleCheckBoxIcon();
            highlightSaveButton();
        };
        Preferences.prototype.setupCheckboxEventHandlers = function () {
            var _this = this;
            var essentialInput = document.getElementById(ManageCookiesModal.OptionEssentialInputId);
            essentialInput === null || essentialInput === void 0 ? void 0 : essentialInput.addEventListener('change', function (event) {
                _this.handleOptionChange({
                    target: event.target,
                    isReadOnly: true,
                    sectionId: ManageCookiesModal.OptionEssentialId,
                });
            });
            var analyticsInput = document.getElementById(ManageCookiesModal.OptionAnalyticsInputId);
            analyticsInput === null || analyticsInput === void 0 ? void 0 : analyticsInput.addEventListener('change', function (event) {
                _this.handleOptionChange({
                    target: event.target,
                    isReadOnly: false,
                    sectionId: ManageCookiesModal.OptionAnalyticsId,
                });
            });
            var preferencesInput = document.getElementById(ManageCookiesModal.OptionPreferencesInputId);
            preferencesInput === null || preferencesInput === void 0 ? void 0 : preferencesInput.addEventListener('change', function (event) {
                _this.handleOptionChange({
                    target: event.target,
                    isReadOnly: false,
                    sectionId: ManageCookiesModal.OptionPreferencesId,
                });
            });
            var marketingInput = document.getElementById(ManageCookiesModal.OptionMarketingInputId);
            marketingInput === null || marketingInput === void 0 ? void 0 : marketingInput.addEventListener('change', function (event) {
                _this.handleOptionChange({
                    target: event.target,
                    isReadOnly: false,
                    sectionId: ManageCookiesModal.OptionMarketingId,
                });
            });
        };
        Preferences.prototype.setupButtonEventHandlers = function () {
            var _this = this;
            var closeButton = document.getElementById(ManageCookiesModal.HeaderCloseId);
            closeButton === null || closeButton === void 0 ? void 0 : closeButton.addEventListener('click', function () {
                Preferences.hide();
                _this.logger.emitInteraction(BannerInteraction.LeavePreferences);
                var prefsButton = document.getElementById(BannerAttribute.ButtonManagePrefsId);
                prefsButton === null || prefsButton === void 0 ? void 0 : prefsButton.focus();
            });
            closeButton === null || closeButton === void 0 ? void 0 : closeButton.focus();
            var saveButton = document.getElementById(ManageCookiesModal.HeaderSaveId);
            saveButton === null || saveButton === void 0 ? void 0 : saveButton.addEventListener('click', function () {
                if (previewBanner()) {
                    Preferences.hideModalAndBanner();
                }
                else {
                    var marketingCheckbox = document.getElementById(ManageCookiesModal.OptionMarketingInputId);
                    var analyticsCheckbox = document.getElementById(ManageCookiesModal.OptionAnalyticsInputId);
                    var preferencesCheckbox = document.getElementById(ManageCookiesModal.OptionPreferencesInputId);
                    var marketing = marketingCheckbox.checked;
                    var analytics = analyticsCheckbox.checked;
                    var preferences = preferencesCheckbox.checked;
                    setConsent({
                        marketing: marketing,
                        analytics: analytics,
                        preferences: preferences,
                        shopDomain: _this.shopDomain,
                        storefrontAccessToken: _this.storefrontAccessToken,
                        callback: Preferences.hideModalAndBanner,
                    });
                    _this.logger.emitInteraction(BannerInteraction.Save, "".concat(marketing ? 'm' : '').concat(analytics ? 'a' : '').concat(preferences ? 'p' : ''));
                    Preferences.hideModalAndBanner();
                }
            });
            var acceptButton = document.getElementById(ManageCookiesModal.HeaderAcceptId);
            acceptButton === null || acceptButton === void 0 ? void 0 : acceptButton.addEventListener('click', function () {
                if (previewBanner()) {
                    Preferences.hideModalAndBanner();
                }
                else {
                    setConsent({
                        marketing: true,
                        analytics: true,
                        preferences: true,
                        shopDomain: _this.shopDomain,
                        storefrontAccessToken: _this.storefrontAccessToken,
                        callback: Preferences.hideModalAndBanner,
                    });
                    _this.logger.emitInteraction(BannerInteraction.AcceptedAll);
                }
            });
            var declineButton = document.getElementById(ManageCookiesModal.HeaderDeclineId);
            declineButton === null || declineButton === void 0 ? void 0 : declineButton.addEventListener('click', function () {
                if (previewBanner()) {
                    Preferences.hideModalAndBanner();
                }
                else {
                    setConsent({
                        marketing: false,
                        analytics: false,
                        preferences: false,
                        shopDomain: _this.shopDomain,
                        storefrontAccessToken: _this.storefrontAccessToken,
                        callback: Preferences.hideModalAndBanner,
                    });
                    _this.logger.emitInteraction(BannerInteraction.DeclinedAll);
                }
            });
        };
        Preferences.prototype.setupKeyboardEventHandlers = function () {
            var _this = this;
            var modal = document.getElementById(ManageCookiesModal.WrapperId);
            modal === null || modal === void 0 ? void 0 : modal.addEventListener('keydown', function (event) {
                if (event.defaultPrevented)
                    return;
                if (event.code === 'Escape') {
                    Preferences.hide();
                    _this.logger.emitInteraction(BannerInteraction.LeavePreferences);
                    var prefsButton = document.getElementById(BannerAttribute.ButtonManagePrefsId);
                    prefsButton === null || prefsButton === void 0 ? void 0 : prefsButton.focus();
                }
            });
        };
        return Preferences;
    }());

    var Banner = /** @class */ (function () {
        function Banner(shopDomain, storefrontAccessToken) {
            this.bannerProperties = {
                bannerPlacement: BannerPlacement.BottomCenter,
                buttonPlacement: ButtonPlacement.AcceptFirst,
                buttonWeight: ButtonWeight.Outline,
            };
            this.shopName = '';
            if (shopDomain && storefrontAccessToken) {
                this.shopDomain = shopDomain;
                this.storefrontAccessToken = storefrontAccessToken;
            }
            this.logger = new Logger(shopDomain);
        }
        Banner.show = function () {
            var bannerDialog = document.getElementById(BannerAttribute.DialogId);
            if (bannerDialog !== null) {
                bannerDialog.style.display = 'block';
            }
            var prefsButton = document.getElementById(BannerAttribute.ButtonManagePrefsId);
            prefsButton === null || prefsButton === void 0 ? void 0 : prefsButton.focus();
        };
        Banner.hide = function () {
            var bannerDialog = document.getElementById(BannerAttribute.DialogId);
            if (bannerDialog !== null) {
                bannerDialog.style.display = 'none';
            }
        };
        Banner.prototype.init = function () {
            return __awaiter(this, void 0, void 0, function () {
                var bannerDataFromServer, experimentsFetcher, experimentBannerProperties, bannerDataFromExperiment, bannerData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.removeExistingElements();
                            this.shopName = this.getShopNameFromMetaTag();
                            return [4 /*yield*/, DataFetcher.getServerData(this.shopName, this.shopDomain)];
                        case 1:
                            bannerDataFromServer = _a.sent();
                            experimentsFetcher = new ExperimentFetcher(experimentsConfig, bannerDataFromServer);
                            experimentBannerProperties = experimentsFetcher.getBannerProperties();
                            bannerDataFromExperiment = experimentsFetcher.getBannerData();
                            this.setBannerProperties(bannerDataFromServer, experimentBannerProperties);
                            bannerData = this.setBannerData(bannerDataFromServer, bannerDataFromExperiment);
                            this.render(bannerData);
                            return [2 /*return*/];
                    }
                });
            });
        };
        Banner.prototype.getShopNameFromMetaTag = function () {
            var _a;
            var shopName = (_a = document.querySelector("meta[property='og:site_name']")) === null || _a === void 0 ? void 0 : _a.getAttribute('content');
            return shopName !== null && shopName !== void 0 ? shopName : '';
        };
        Banner.prototype.bannerPositionToBannerPlacement = function (bannerPosition) {
            try {
                return bannerPosition.replace(/_/g, '-');
            }
            catch (error) {
                return BannerPlacement.BottomCenter;
            }
        };
        Banner.prototype.setBannerProperties = function (dataFromServer, experimentBannerProperties) {
            if (dataFromServer.bannerPosition) {
                this.bannerProperties.bannerPlacement = this.bannerPositionToBannerPlacement(dataFromServer.bannerPosition);
            }
            if (experimentBannerProperties === null || experimentBannerProperties === void 0 ? void 0 : experimentBannerProperties.bannerPlacement) {
                this.bannerProperties.bannerPlacement = experimentBannerProperties.bannerPlacement;
            }
            if (experimentBannerProperties === null || experimentBannerProperties === void 0 ? void 0 : experimentBannerProperties.buttonPlacement) {
                this.bannerProperties.buttonPlacement = experimentBannerProperties.buttonPlacement;
            }
            if (experimentBannerProperties === null || experimentBannerProperties === void 0 ? void 0 : experimentBannerProperties.buttonWeight) {
                this.bannerProperties.buttonWeight = experimentBannerProperties.buttonWeight;
            }
        };
        Banner.prototype.setBannerData = function (bannerDataFromServer, bannerDataFromExperiment) {
            var bannerData = __assign({}, bannerDataFromServer);
            if (bannerDataFromExperiment === null || bannerDataFromExperiment === void 0 ? void 0 : bannerDataFromExperiment.acceptButtonCopy) {
                bannerData.acceptButtonCopy = bannerDataFromExperiment.acceptButtonCopy;
            }
            if (bannerDataFromExperiment === null || bannerDataFromExperiment === void 0 ? void 0 : bannerDataFromExperiment.declineButtonCopy) {
                bannerData.declineButtonCopy = bannerDataFromExperiment.declineButtonCopy;
            }
            // check the type rather than truthy because the value could be an empty string
            if (typeof (bannerDataFromExperiment === null || bannerDataFromExperiment === void 0 ? void 0 : bannerDataFromExperiment.title) === 'string') {
                bannerData.title = this.getBannerDataTitle(bannerDataFromExperiment.title);
            }
            if (bannerDataFromExperiment === null || bannerDataFromExperiment === void 0 ? void 0 : bannerDataFromExperiment.bannerCopy) {
                bannerData.bannerCopy = bannerDataFromExperiment.bannerCopy;
            }
            return bannerData;
        };
        Banner.prototype.getBannerDataTitle = function (titleFromExperiment) {
            if (titleFromExperiment.includes(SHOP_NAME_PLACEHOLDER)) {
                return titleFromExperiment.replace(SHOP_NAME_PLACEHOLDER, this.shopName);
            }
            else {
                return titleFromExperiment;
            }
        };
        Banner.prototype.render = function (bannerData) {
            if (previewBanner()) {
                if (!Object.keys(bannerData).length) {
                    // eslint-disable-next-line no-console
                    console.warn('banner not rendered due to lack of saved data');
                    return;
                }
                this.addCSS(bannerData);
                this.addBannerHTML(bannerData);
                Banner.show();
                return;
            }
            if (this.merchantHasPublished(bannerData)) {
                this.addCSS(bannerData);
                this.addBannerHTML(bannerData);
                Banner.show();
                this.logger.emitRender();
            }
        };
        Banner.prototype.addCSS = function (bannerData) {
            var style = styleTag({
                id: BannerAttribute.StylesContainerId,
                content: cssTemplate(bannerData, false, this.bannerProperties),
            });
            document.head.appendChild(style);
        };
        Banner.prototype.addBannerHTML = function (bannerData) {
            var banner = bannerTemplate(bannerData);
            var body = document.getElementsByTagName('body')[0];
            body.insertBefore(banner, body.firstChild);
            this.addEventListeners(bannerData);
        };
        Banner.prototype.removeExistingElements = function () {
            var _a, _b;
            var bannerEl = document.getElementById(BannerAttribute.DialogId);
            var styleEl = document.getElementById(BannerAttribute.StylesContainerId);
            (_a = bannerEl === null || bannerEl === void 0 ? void 0 : bannerEl.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(bannerEl);
            (_b = styleEl === null || styleEl === void 0 ? void 0 : styleEl.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(styleEl);
        };
        Banner.prototype.addEventListeners = function (bannerData) {
            var _this = this;
            this.addEssentialEventListeners();
            if (!previewBanner()) {
                this.addMetricsEventListeners();
            }
            var manageCookiesButton = document.getElementById(BannerAttribute.ButtonManagePrefsId);
            manageCookiesButton === null || manageCookiesButton === void 0 ? void 0 : manageCookiesButton.addEventListener('click', function () {
                _this.preferencesModal = new Preferences(bannerData, _this.shopDomain, _this.storefrontAccessToken);
                _this.preferencesModal.init();
            });
        };
        Banner.prototype.addEssentialEventListeners = function () {
            var _this = this;
            var acceptButton = document.getElementById(BannerAttribute.ButtonAcceptId);
            acceptButton === null || acceptButton === void 0 ? void 0 : acceptButton.addEventListener('click', function () {
                if (previewBanner()) {
                    Banner.hide();
                }
                else {
                    setConsent({
                        marketing: true,
                        analytics: true,
                        preferences: true,
                        shopDomain: _this.shopDomain,
                        storefrontAccessToken: _this.storefrontAccessToken,
                        callback: Banner.hide,
                    });
                }
            });
            var declineButton = document.getElementById(BannerAttribute.ButtonDeclineId);
            declineButton === null || declineButton === void 0 ? void 0 : declineButton.addEventListener('click', function () {
                if (previewBanner()) {
                    Banner.hide();
                }
                else {
                    setConsent({
                        marketing: false,
                        analytics: false,
                        preferences: false,
                        shopDomain: _this.shopDomain,
                        storefrontAccessToken: _this.storefrontAccessToken,
                        callback: Banner.hide,
                    });
                }
            });
        };
        Banner.prototype.addMetricsEventListeners = function () {
            var _this = this;
            var privacyPolicyLink = document.getElementById(BannerAttribute.BodyCopyPolicyLinkId);
            privacyPolicyLink === null || privacyPolicyLink === void 0 ? void 0 : privacyPolicyLink.addEventListener('click', function () {
                _this.logger.emitInteraction(BannerInteraction.PrivacyPolicyView);
            });
            var acceptButton = document.getElementById(BannerAttribute.ButtonAcceptId);
            acceptButton === null || acceptButton === void 0 ? void 0 : acceptButton.addEventListener('click', function () {
                _this.logger.emitInteraction(BannerInteraction.Accepted);
            });
            var declineButton = document.getElementById(BannerAttribute.ButtonDeclineId);
            declineButton === null || declineButton === void 0 ? void 0 : declineButton.addEventListener('click', function () {
                _this.logger.emitInteraction(BannerInteraction.Declined);
            });
        };
        Banner.prototype.merchantHasPublished = function (bannerData) {
            return (bannerData === null || bannerData === void 0 ? void 0 : bannerData.visible) === true;
        };
        Banner.adminPreviewBannerProperties = {
            bannerPlacement: BannerPlacement.BottomCenter,
            buttonPlacement: ButtonPlacement.AcceptFirst,
            buttonWeight: ButtonWeight.Outline,
        };
        return Banner;
    }());

    /* eslint-disable @typescript-eslint/naming-convention */
    /* eslint-disable no-process-env */
    /**
     * Loads the banner in either Headless mode or Liquid mode.
     *
     * 1. Headless mode: If `shopDomain` and `storefrontAccessToken` are provided, the banner assumes
     *    that the storefront is headless.
     * 2. Liquid mode: If `shopDomain` and `storefrontAccessToken` are not provided, the banner assumes
     *    that the storefront is a liquid store.
     *
     * @param shopDomain - The `.myshopify.com` domain of the shop. This is required for headless storefronts.
     * @param storefrontAccessToken - The access token for the storefront. This is required for headless storefronts.
     */
    function loadBanner(shopDomain, storefrontAccessToken) {
        return __awaiter(this, void 0, void 0, function () {
            var run, currentVisitorConsent, consentMapping;
            return __generator(this, function (_a) {
                run = function () {
                    console.log("Checking if banner is needed....");
                    if (previewBanner() || gdprConsentRequired()) {
                        console.log("Banner needed!");
                        var banner = new Banner(shopDomain, storefrontAccessToken);
                        banner.init();
                    }
                };
                if (shopDomain && storefrontAccessToken) {
                    currentVisitorConsent = window.Shopify.customerPrivacy.currentVisitorConsent();
                    consentMapping = {
                        yes: true,
                        no: false,
                    };
                    setConsent({
                        marketing: consentMapping[currentVisitorConsent.marketing],
                        analytics: consentMapping[currentVisitorConsent.analytics],
                        preferences: consentMapping[currentVisitorConsent.preferences],
                        sale_of_data: consentMapping[currentVisitorConsent.sale_of_data],
                        shopDomain: shopDomain,
                        storefrontAccessToken: storefrontAccessToken,
                        callback: run,
                    });
                }
                else {
                    run();
                }
                return [2 /*return*/];
            });
        });
    }
    (function () {
        // This is probably brittle but it's the best way we know to check if the storefront is Liquid.
        // We are breaking this method for other libraries.
        var isLiquidStorefront = Boolean(window.Shopify);
        window.Shopify = window.Shopify || {};
        if (!window.Shopify.customerPrivacy || !window.Shopify.trackingConsent) {
            // As of the time of writing, expected use case is headless storefronts.
            window.Shopify.customerPrivacy = shopifyConsentAPI();
            window.Shopify.trackingConsent = shopifyConsentAPI();
        }
        if (isLiquidStorefront)
            loadBanner();
    })();

    exports.loadBanner = loadBanner;

    return exports;

})({});
//# sourceMappingURL=storefront-banner.js.map
