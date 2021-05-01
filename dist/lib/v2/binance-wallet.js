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
var base_1 = require("../base");
var request_handler_1 = __importDefault(require("../base/util/request-handler"));
var wallet_api_1 = __importDefault(require("../base/wallet-api"));
var drift_request_handler_1 = __importDefault(require("./util/drift-request-handler"));
var DEFAULT_BASE_URL = 'https://api.binance.com/';
/**
 * Binance Wallet API
 */
var BinanceWallet = /** @class */ (function () {
    function BinanceWallet(options) {
        this.drift = 0;
        var DEFAULT_OPTIONS = {
            baseURL: DEFAULT_BASE_URL,
            timeout: 15000,
            recvWindow: 10000,
            handleDrift: false
        };
        this.options = __assign(__assign({}, DEFAULT_OPTIONS), options);
        if (options.handleDrift) {
            this.handler = new drift_request_handler_1.default(options.apiKey, options.apiSecret, this.options.baseURL, this.fixDrift.bind(this));
        }
        else {
            this.handler = new request_handler_1.default(options.apiKey, options.apiSecret, this.options.baseURL);
        }
        this.wallet = new wallet_api_1.default(this.handler);
        this.rest = new base_1.RESTAPI(this.handler);
    }
    BinanceWallet.prototype.fixDrift = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.calculateDrift()];
                    case 1:
                        _a.drift = _b.sent();
                        return [2 /*return*/, this.drift];
                }
            });
        });
    };
    Object.defineProperty(BinanceWallet.prototype, "timestamp", {
        get: function () { return Date.now() + this.drift; },
        enumerable: false,
        configurable: true
    });
    /**
     * Starts an interval that automatically calculates drift between the server and client,
     * and updates the request handler accordingly.
     * @param interval The time in milliseconds between the requests to sync time.
     * Note: A lower interval will use more weight and can potentially overuse request weight allowance.
     */
    BinanceWallet.prototype.startTimeSync = function (interval) {
        if (interval === void 0) { interval = 30000; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // If there's already an interval running, clear it and reset values
                        if (!!this.syncInterval) {
                            this.endTimeSync();
                        }
                        // Calculate initial drift value and setup interval to periodically update it
                        return [4 /*yield*/, this.fixDrift()];
                    case 1:
                        // Calculate initial drift value and setup interval to periodically update it
                        _a.sent();
                        this.syncInterval = setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _a = this;
                                        return [4 /*yield*/, this.calculateDrift()];
                                    case 1:
                                        _a.drift = _b.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }, interval);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Clears the interval for syncing server time with local time for requests.
     */
    BinanceWallet.prototype.endTimeSync = function () {
        if (!this.syncInterval) {
            return;
        }
        ;
        clearInterval(this.syncInterval);
        this.drift = 0;
        this.syncInterval = undefined;
    };
    /**
     * Test connectivity to the REST API and get the difference in milliseconds
     * between the current server time and the local time.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#check-server-time
     */
    BinanceWallet.prototype.calculateDrift = function () {
        return __awaiter(this, void 0, void 0, function () {
            var systemTime, serverTime, transitTime;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        systemTime = Date.now();
                        return [4 /*yield*/, this.rest.queryTime()];
                    case 1:
                        serverTime = (_a.sent()).serverTime;
                        transitTime = Math.round((Date.now() - systemTime) / 2);
                        return [2 /*return*/, (serverTime - (systemTime + transitTime))];
                }
            });
        });
    };
    BinanceWallet.prototype.getAllCoins = function () {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.wallet.getAllCoins({ timestamp: this.timestamp })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_1 = _a.sent();
                        throw err_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return BinanceWallet;
}());
exports.default = BinanceWallet;
//# sourceMappingURL=binance-wallet.js.map