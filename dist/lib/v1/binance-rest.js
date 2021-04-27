"use strict";
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
var beautifier_1 = __importDefault(require("./util/beautifier"));
var util_1 = require("util");
var rest_api_1 = __importDefault(require("../base/rest-api"));
var request_handler_1 = __importDefault(require("../base/util/request-handler"));
var BinanceRest = /** @class */ (function () {
    function BinanceRest(_a) {
        var key = _a.key, secret = _a.secret, recvWindow = _a.recvWindow, timeout = _a.timeout, disableBeautification = _a.disableBeautification, handleDrift = _a.handleDrift, baseUrl = _a.baseUrl, requestOptions = _a.requestOptions;
        this.key = key;
        this.secret = secret;
        this.recvWindow = recvWindow || 5000;
        this.timeout = timeout || 15000;
        this.disableBeautification = disableBeautification || false;
        this.handleDrift = handleDrift || false;
        this.requestOptions = requestOptions || {};
        this.beautifier = new beautifier_1.default();
        this.baseUrl = baseUrl || 'https://api.binance.com/';
        // add trailing slash if necessary
        if ('/' !== this.baseUrl.substr(-1)) {
            this.baseUrl += '/';
        }
        this.binance = new rest_api_1.default(new request_handler_1.default('', '', ''));
        this.drift = 0;
        this.syncInterval = 0;
    }
    BinanceRest.prototype.getBaseUrl = function () { return this.baseUrl; };
    // private doBeautifications(response, route) {
    //     if (this.disableBeautification) {
    //         return response;
    //     }
    //     return this.beautifier.beautify(response, route);
    // }
    BinanceRest.prototype.setTimestamp = function (query) {
        if (!query.timestamp) {
            query.timestamp = this.getTime() + this.drift;
        }
        return query;
    };
    /** Gets the time value in miliseconds */
    BinanceRest.prototype.getTime = function () { return new Date().getTime(); };
    /**
     *
     */
    BinanceRest.prototype.calculateDrift = function () {
        return __awaiter(this, void 0, void 0, function () {
            var systemTime;
            var _this = this;
            return __generator(this, function (_a) {
                systemTime = this.getTime();
                return [2 /*return*/, this.time().then(function (response) {
                        // Calculate the approximate trip time from here to binance
                        var transitTime = Math.round((_this.getTime() - systemTime) / 2);
                        _this.drift = response.serverTime - (systemTime + transitTime);
                    })];
            });
        });
    };
    /**
     *
     * @param interval
     * @param onRecalculateDriftCb
     */
    BinanceRest.prototype.startTimeSync = function (interval, onRecalculateDriftCb) {
        var _this = this;
        if (interval === void 0) { interval = 300000; }
        return new Promise(function (resolve, reject) {
            // If there's already an interval running, clear it and reset values
            if (_this.syncInterval !== 0) {
                _this.endTimeSync();
                return resolve();
            }
            // Calculate initial drift value and setup interval to periodically update it
            _this.calculateDrift().then(resolve).catch(reject);
            _this.syncInterval = setInterval(function () {
                var promise = _this.calculateDrift();
                if (typeof onRecalculateDriftCb === 'function') {
                    onRecalculateDriftCb(promise);
                }
            }, interval);
        });
    };
    /**
     * Clears the interval to keep the API connector synced with the
     * server time.
     */
    BinanceRest.prototype.endTimeSync = function () {
        clearInterval(this.syncInterval);
        this.drift = 0;
        this.syncInterval = 0;
    };
    BinanceRest.prototype.ping = function (callback) {
        if (callback) {
            util_1.callbackify(this.binance.queryPing)(callback);
        }
        else {
            return this.binance.queryPing();
        }
    };
    BinanceRest.prototype.time = function (callback) {
        if (callback) {
            util_1.callbackify(this.binance.queryTime)(callback);
        }
        else {
            return this.binance.queryTime();
        }
    };
    BinanceRest.prototype.depth = function (query, callback) {
        if (typeof query === 'string') {
            query = { symbol: query };
        }
        if (callback) {
            util_1.callbackify(this.binance.queryDepth)(query, callback);
        }
        else {
            return this.binance.queryDepth(query);
        }
    };
    BinanceRest.prototype.trades = function (query, callback) {
        if (typeof query === 'string') {
            query = { symbol: query };
        }
        if (callback) {
            util_1.callbackify(this.binance.queryTrades)(query, callback);
        }
        else {
            return this.binance.queryTrades(query);
        }
    };
    BinanceRest.prototype.historicalTrades = function (query, callback) {
        if (typeof query === 'string') {
            query = { symbol: query };
        }
        if (callback) {
            util_1.callbackify(this.binance.queryHistoricalTrades)(query, callback);
        }
        else {
            return this.binance.queryHistoricalTrades(query);
        }
    };
    BinanceRest.prototype.aggTrades = function (query, callback) {
        if (typeof query === 'string') {
            query = { symbol: query };
        }
        if (callback) {
            util_1.callbackify(this.binance.queryAggTrades)(query, callback);
        }
        else {
            return this.binance.queryAggTrades(query);
        }
    };
    BinanceRest.prototype.exchangeInfo = function (callback) {
        if (callback) {
            util_1.callbackify(this.binance.queryExchangeInfo)(callback);
        }
        else {
            return this.binance.queryExchangeInfo();
        }
    };
    BinanceRest.prototype.klines = function (query, callback) {
        if (callback) {
            util_1.callbackify(this.binance.queryKlines)(query, callback);
        }
        else {
            return this.binance.queryKlines(query);
        }
    };
    BinanceRest.prototype.ticker24Hr = function (query, callback) {
        if (!query)
            query = {};
        if (callback) {
            util_1.callbackify(this.binance.queryTicker24hr)(query, callback);
        }
        else {
            return this.binance.queryTicker24hr(query);
        }
    };
    BinanceRest.prototype.tickerPrice = function (query, callback) {
        if (callback) {
            util_1.callbackify(this.binance.queryTickerPrice)(query, callback);
        }
        else {
            return this.binance.queryTickerPrice(query);
        }
    };
    BinanceRest.prototype.bookTicker = function (query, callback) {
        if (!query) {
            query = {};
        }
        else if (typeof query === 'string') {
            query = { symbol: query };
        }
        if (callback) {
            this.binance.queryBookTicker({});
            util_1.callbackify(this.binance.queryBookTicker)(query, callback); // TODO WHY?!?!
        }
        else {
            return this.binance.queryBookTicker(query);
        }
    };
    BinanceRest.prototype.allBookTickers = function (callback) {
        if (callback) {
            util_1.callbackify(this.binance.queryBookTicker)({}, callback);
        }
        else {
            return this.binance.queryTime();
        }
    };
    BinanceRest.prototype.allPrices = function (callback) {
        if (callback) {
            (util_1.callbackify(this.binance.queryTickerPrice))({}, callback);
        }
        else {
            return this.binance.queryTickerPrice({});
        }
    };
    BinanceRest.prototype.newOrder = function (query, callback) {
        if (callback) {
            util_1.callbackify(this.binance.createOrder)(query, callback);
        }
        else {
            return this.binance.createOrder(query);
        }
    };
    BinanceRest.prototype.testOrder = function (query, callback) {
        if (callback) {
            util_1.callbackify(this.binance.testOrder)(query, callback);
        }
        else {
            return this.binance.testOrder(query);
        }
    };
    BinanceRest.prototype.queryOrder = function (query, callback) {
        if (callback) {
            util_1.callbackify(this.binance.queryOrder)(query, callback);
        }
        else {
            return this.binance.queryOrder(query);
        }
    };
    BinanceRest.prototype.cancelOrder = function (query, callback) {
        if (callback) {
            util_1.callbackify(this.binance.cancelOrder)(query, callback);
        }
        else {
            return this.binance.cancelOrder(query);
        }
    };
    return BinanceRest;
}());
exports.default = BinanceRest;
//# sourceMappingURL=binance-rest.js.map