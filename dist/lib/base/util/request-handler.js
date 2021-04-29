"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var crypto_1 = __importDefault(require("crypto"));
var qs_1 = __importDefault(require("qs"));
var request_error_1 = __importDefault(require("./request-error"));
/** Name of the header to assign the API key to */
var API_KEY_HEADER_NAME = 'X-MBX-APIKEY';
/**
 * Handles REST requests to binance by adding the appropriate headers
 * and sending the data to the provided url
 */
var RequestHandler = /** @class */ (function () {
    function RequestHandler(apiKey, apiSecret, baseURL) {
        this.apiKey = apiKey;
        this.apiSecret = apiSecret;
        this.baseURL = baseURL;
    }
    /**
     * Uses the HMAC-SHA256 algorithm to sign the data passed in
     * using the secret key used to initialise the handler.
     * @param data The data to create a signature for
     */
    RequestHandler.prototype.getSignature = function (data) {
        return crypto_1.default.createHmac('sha256', this.apiSecret).update(data).digest('hex');
    };
    /**
     *
     */
    RequestHandler.prototype.sendRequest = function (_a) {
        var path = _a.path, method = _a.method, weight = _a.weight, params = _a.params;
        return __awaiter(this, void 0, void 0, function () {
            var headers, err_1, data;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        headers = (_b = {}, _b[API_KEY_HEADER_NAME] = this.apiKey, _b);
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, axios_1.default.request({ baseURL: this.baseURL, url: path, method: method, params: params, headers: headers })];
                    case 2: return [2 /*return*/, (_c.sent()).data];
                    case 3:
                        err_1 = _c.sent();
                        data = err_1.response.data;
                        throw new request_error_1.default(data.code || err_1.response.statusText, data.msg || err_1.response.status);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     * Also adds a HMAC-SHA256 signature to the request.
     */
    RequestHandler.prototype.sendSignedRequest = function (_a) {
        var path = _a.path, method = _a.method, weight = _a.weight, params = _a.params;
        return __awaiter(this, void 0, void 0, function () {
            var headers, signature, err_2, data;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        headers = (_b = {}, _b[API_KEY_HEADER_NAME] = this.apiKey, _b);
                        signature = this.getSignature(qs_1.default.stringify(params));
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        params = __assign({ signature: signature }, params);
                        return [4 /*yield*/, axios_1.default.request({ baseURL: this.baseURL, url: path, method: method, params: params, headers: headers })];
                    case 2: return [2 /*return*/, (_c.sent()).data];
                    case 3:
                        err_2 = _c.sent();
                        data = err_2.response.data;
                        throw new request_error_1.default(data.code, data.msg);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return RequestHandler;
}());
exports.default = RequestHandler;
//# sourceMappingURL=request-handler.js.map