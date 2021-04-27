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
var drift_request_handler_1 = __importDefault(require("./util/drift-request-handler"));
var DEFAULT_BASE_URL = 'https://api.binance.com/';
/**
 * Binance REST API for executing common tasks.
 */
var BinanceREST = /** @class */ (function () {
    function BinanceREST(options) {
        this.drift = 0;
        var DEFAULT_OPTIONS = {
            baseUrl: DEFAULT_BASE_URL,
            timeout: 15000,
            recvWindow: 10000,
            handleDrift: false
        };
        this.options = __assign(__assign({}, DEFAULT_OPTIONS), options);
        if (options.handleDrift) {
            this.handler = new drift_request_handler_1.default(options.apiKey, options.apiSecret, options.baseUrl, this.fixDrift.bind(this));
        }
        else {
            this.handler = new request_handler_1.default(options.apiKey, options.apiSecret, options.baseUrl);
        }
        this.rest = new base_1.RESTAPI(this.handler);
    }
    BinanceREST.prototype.fixDrift = function () {
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
    Object.defineProperty(BinanceREST.prototype, "timestamp", {
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
    BinanceREST.prototype.startTimeSync = function (interval) {
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
    BinanceREST.prototype.endTimeSync = function () {
        if (!this.syncInterval) {
            return;
        }
        ;
        clearInterval(this.syncInterval);
        this.drift = 0;
        this.syncInterval = undefined;
    };
    /**
     * Test connectivity to the REST API.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#test-connectivity
     */
    BinanceREST.prototype.ping = function () {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.rest.queryPing()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_1 = _a.sent();
                        throw err_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Test connectivity to the REST API and get the current server time.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#check-server-time
     */
    BinanceREST.prototype.getTime = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.rest.queryTime()];
            });
        });
    };
    /**
     * Test connectivity to the REST API and get the difference in milliseconds
     * between the current server time and the local time.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#check-server-time
     */
    BinanceREST.prototype.calculateDrift = function () {
        return __awaiter(this, void 0, void 0, function () {
            var systemTime, serverTime, transitTime;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        systemTime = Date.now();
                        return [4 /*yield*/, this.getTime()];
                    case 1:
                        serverTime = (_a.sent()).serverTime;
                        transitTime = Math.round((Date.now() - systemTime) / 2);
                        return [2 /*return*/, (serverTime - (systemTime + transitTime))];
                }
            });
        });
    };
    /**
     * Current exchange trading rules and symbol information.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#exchange-information
     */
    BinanceREST.prototype.getExchangeInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.rest.queryExchangeInfo()];
            });
        });
    };
    /**
     * Gets the order book depth.
     * Weight: Adjusted based on the limit:
     * 5-100: 1
     * 500:   5
     * 1000   10
     * 5000   50
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#order-book
     */
    BinanceREST.prototype.queryDepth = function (symbol, limit) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.rest.queryDepth({ symbol: symbol, limit: limit })];
            });
        });
    };
    /**
     * Get recent trades.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#recent-trades-list
     */
    BinanceREST.prototype.queryTrades = function (symbol, limit) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.rest.queryTrades({ symbol: symbol, limit: limit })];
            });
        });
    };
    /**
     * Get older trades.
     * Weight: 5
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#old-trade-lookup-market_data
     */
    BinanceREST.prototype.queryHistoricalTrades = function (symbol, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.rest.queryHistoricalTrades(__assign(__assign({}, options), { symbol: symbol }))];
            });
        });
    };
    /**
     * Get compressed, aggregate trades.
     * Trades that fill at the time, from the same taker order, with the same price will have the quantity aggregated.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#compressedaggregate-trades-list
     */
    BinanceREST.prototype.queryAggTrades = function (symbol, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.rest.queryAggTrades(__assign(__assign({}, options), { symbol: symbol }))];
            });
        });
    };
    /**
     * Kline/candlestick bars for a symbol.
     * Klines are uniquely identified by their open time.
     * If startTime and endTime are not sent, the most recent klines are returned.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#klinecandlestick-data
     */
    BinanceREST.prototype.queryKlines = function (symbol, interval, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.rest.queryKlines(__assign(__assign({}, options), { symbol: symbol, interval: interval }))];
            });
        });
    };
    /**
     * Current average price for a symbol.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#current-average-price
     */
    BinanceREST.prototype.queryAvgPrice = function (symbol) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.rest.queryAvgPrice({ symbol: symbol })];
            });
        });
    };
    /**
     * 24 hour rolling window price change statistics.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#24hr-ticker-price-change-statistics
     */
    BinanceREST.prototype.queryTicker24hr = function (symbol) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.rest.queryTicker24hr({ symbol: symbol })];
            });
        });
    };
    /**
     * 24 hour rolling window price change statistics.
     * Weight: 40
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#24hr-ticker-price-change-statistics
     */
    BinanceREST.prototype.queryAllTicker24hr = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.rest.queryTicker24hr({})];
            });
        });
    };
    /**
     * Latest price for a symbol.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-price-ticker
     */
    BinanceREST.prototype.queryTickerPrice = function (symbol) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.rest.queryTickerPrice({ symbol: symbol })];
            });
        });
    };
    /**
     * Latest price for all symbols.
     * Weight: 2
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-price-ticker
     */
    BinanceREST.prototype.queryAllTickersPrice = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.rest.queryTickerPrice({})];
            });
        });
    };
    /**
     * Best price/qty on the order book for a symbol.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-order-book-ticker
     */
    BinanceREST.prototype.queryBookTicker = function (symbol) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.rest.queryBookTicker({ symbol: symbol })];
            });
        });
    };
    /**
     * Best price/qty on the order book for all symbols.
     * Weight: 2
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-order-book-ticker
     */
    BinanceREST.prototype.queryAllBookTickers = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.rest.queryBookTicker({})];
            });
        });
    };
    /**
     * Send in a new limit buy order.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
     */
    BinanceREST.prototype.createLimitBuyOrder = function (symbol, quantity, price, options) {
        if (options === void 0) { options = {
            timeInForce: 'GTC',
            newOrderRespType: 'ACK'
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var type, side;
            return __generator(this, function (_a) {
                type = 'LIMIT';
                side = 'BUY';
                return [2 /*return*/, this.rest.createOrder(__assign(__assign({}, options), { type: type, side: side, symbol: symbol, quantity: quantity, price: price }))];
            });
        });
    };
    /**
     * Send in a new limit sell order.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
     */
    BinanceREST.prototype.createLimitSellOrder = function (symbol, quantity, price, options) {
        return __awaiter(this, void 0, void 0, function () {
            var type, side, DEFAULT_OPTIONS;
            return __generator(this, function (_a) {
                type = 'LIMIT';
                side = 'SELL';
                DEFAULT_OPTIONS = { timeInForce: 'GTC', newOrderRespType: 'ACK' };
                return [2 /*return*/, this.rest.createOrder(__assign(__assign(__assign({}, DEFAULT_OPTIONS), options), { type: type, side: side, symbol: symbol, quantity: quantity, price: price }))];
            });
        });
    };
    // /**
    //  * Send in a new market buy order.  
    //  * Weight: 1  
    //  * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
    //  */
    // async createMarketBuyOrder(symbol: string, options?: CreateMarketOrderOptions) {
    //     const type = 'MARKET';
    //     const side = 'BUY';
    //     const DEFAULT_OPTIONS = { timeInForce: 'GTC', newOrderRespType: 'ACK' };
    //     return this.rest.createOrder({ ...DEFAULT_OPTIONS, ...options, type, side, symbol } as MarketOrderParameters);
    // }
    // /**
    //  * Send in a new market sell order.  
    //  * Weight: 1  
    //  * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
    //  */
    // async createMarketSellOrder(symbol: string, options?: CreateMarketOrderOptions) {
    //     const type = 'MARKET';
    //     const side = 'SELL';
    //     const DEFAULT_OPTIONS = { timeInForce: 'GTC', newOrderRespType: 'ACK' }; 
    //     return this.rest.createOrder({ ...DEFAULT_OPTIONS, ...options, type, side, symbol } as MarketOrderParameters);
    // }
    /**
     * Send in a new market buy order with a stop-loss.
     * A stop-loss is a price-target in the unfavourable direction of the current price, relative to your position.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
     */
    BinanceREST.prototype.createStopLossBuyOrder = function (symbol, quantity, stopPrice, options) {
        return __awaiter(this, void 0, void 0, function () {
            var type, side, DEFAULT_OPTIONS;
            return __generator(this, function (_a) {
                type = 'STOP_LOSS';
                side = 'BUY';
                DEFAULT_OPTIONS = { timeInForce: 'GTC', newOrderRespType: 'ACK' };
                return [2 /*return*/, this.rest.createOrder(__assign(__assign({}, options), { type: type, side: side, symbol: symbol, quantity: quantity, stopPrice: stopPrice }))];
            });
        });
    };
    /**
     * Send in a new market sell order with a stop-loss.
     * A stop-loss is a price-target in the unfavourable direction of the current price, relative to your position.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
     */
    BinanceREST.prototype.createStopLossSellOrder = function (symbol, quantity, stopPrice, options) {
        return __awaiter(this, void 0, void 0, function () {
            var type, side, DEFAULT_OPTIONS;
            return __generator(this, function (_a) {
                type = 'STOP_LOSS';
                side = 'SELL';
                DEFAULT_OPTIONS = { timeInForce: 'GTC', newOrderRespType: 'ACK' };
                return [2 /*return*/, this.rest.createOrder(__assign(__assign(__assign({}, DEFAULT_OPTIONS), options), { type: type, side: side, symbol: symbol, quantity: quantity, stopPrice: stopPrice }))];
            });
        });
    };
    /**
     * Send in a new limit buy order with a stop-loss.
     * A stop-loss is a price-target in the unfavourable direction of the current price, relative to your position.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
     */
    BinanceREST.prototype.createStopLossLimitBuyOrder = function (symbol, quantity, price, stopPrice, options) {
        return __awaiter(this, void 0, void 0, function () {
            var type, side, DEFAULT_OPTIONS;
            return __generator(this, function (_a) {
                type = 'STOP_LOSS_LIMIT';
                side = 'BUY';
                DEFAULT_OPTIONS = { timeInForce: 'GTC', newOrderRespType: 'ACK' };
                return [2 /*return*/, this.rest.createOrder(__assign(__assign(__assign({}, DEFAULT_OPTIONS), options), { type: type, side: side, symbol: symbol, quantity: quantity, price: price, stopPrice: stopPrice }))];
            });
        });
    };
    /**
     * Send in a new limit sell order with a stop-loss.
     * A stop-loss is a price-target in the unfavourable direction of the current price, relative to your position.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
     */
    BinanceREST.prototype.createStopLossLimitSellOrder = function (symbol, quantity, price, stopPrice, options) {
        return __awaiter(this, void 0, void 0, function () {
            var type, side, DEFAULT_OPTIONS;
            return __generator(this, function (_a) {
                type = 'STOP_LOSS_LIMIT';
                side = 'SELL';
                DEFAULT_OPTIONS = { timeInForce: 'GTC', newOrderRespType: 'ACK' };
                return [2 /*return*/, this.rest.createOrder(__assign(__assign(__assign({}, DEFAULT_OPTIONS), options), { type: type, side: side, symbol: symbol, quantity: quantity, price: price, stopPrice: stopPrice }))];
            });
        });
    };
    /**
     * Send in a new market buy order with a take-profit.
     * A take-profit is a price-target in the favourable direction of the current price, relative to your position.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
     */
    BinanceREST.prototype.createTakeProfitBuyOrder = function (symbol, quantity, price, stopPrice, options) {
        return __awaiter(this, void 0, void 0, function () {
            var type, side, DEFAULT_OPTIONS;
            return __generator(this, function (_a) {
                type = 'TAKE_PROFIT';
                side = 'BUY';
                DEFAULT_OPTIONS = { timeInForce: 'GTC', newOrderRespType: 'ACK' };
                return [2 /*return*/, this.rest.createOrder(__assign(__assign(__assign({}, DEFAULT_OPTIONS), options), { type: type, side: side, symbol: symbol, quantity: quantity, price: price, stopPrice: stopPrice }))];
            });
        });
    };
    /**
     * Send in a new market sell order with a take-profit.
     * A take-profit is a price-target in the favourable direction of the current price, relative to your position.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
     */
    BinanceREST.prototype.createTakeProfitSellOrder = function (symbol, quantity, price, stopPrice, options) {
        return __awaiter(this, void 0, void 0, function () {
            var type, side, DEFAULT_OPTIONS;
            return __generator(this, function (_a) {
                type = 'TAKE_PROFIT';
                side = 'SELL';
                DEFAULT_OPTIONS = { timeInForce: 'GTC', newOrderRespType: 'ACK' };
                return [2 /*return*/, this.rest.createOrder(__assign(__assign(__assign({}, DEFAULT_OPTIONS), options), { type: type, side: side, symbol: symbol, quantity: quantity, price: price, stopPrice: stopPrice }))];
            });
        });
    };
    /**
     * Send in a new limit buy order with a take-profit.
     * A take-profit is a price-target in the favourable direction of the current price, relative to your position.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
     */
    BinanceREST.prototype.createTakeProfitLimitBuyOrder = function (symbol, quantity, price, stopPrice, options) {
        return __awaiter(this, void 0, void 0, function () {
            var type, side, DEFAULT_OPTIONS;
            return __generator(this, function (_a) {
                type = 'TAKE_PROFIT_LIMIT';
                side = 'BUY';
                DEFAULT_OPTIONS = { timeInForce: 'GTC', newOrderRespType: 'ACK' };
                return [2 /*return*/, this.rest.createOrder(__assign(__assign(__assign({}, DEFAULT_OPTIONS), options), { type: type, side: side, symbol: symbol, quantity: quantity, price: price, stopPrice: stopPrice }))];
            });
        });
    };
    /**
     * Send in a new limit sell order with a take-profit.
     * A take-profit is a price-target in the favourable direction of the current price, relative to your position.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
     */
    BinanceREST.prototype.createTakeProfitLimitSellOrder = function (symbol, quantity, price, stopPrice, options) {
        return __awaiter(this, void 0, void 0, function () {
            var type, side, DEFAULT_OPTIONS;
            return __generator(this, function (_a) {
                type = 'TAKE_PROFIT_LIMIT';
                side = 'SELL';
                DEFAULT_OPTIONS = { timeInForce: 'GTC', newOrderRespType: 'ACK' };
                return [2 /*return*/, this.rest.createOrder(__assign(__assign(__assign({}, DEFAULT_OPTIONS), options), { type: type, side: side, symbol: symbol, quantity: quantity, price: price, stopPrice: stopPrice }))];
            });
        });
    };
    /**
     * Send in a new limit buy order that cancels if filled immediately as a taker.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
     */
    BinanceREST.prototype.createLimitMakerBuyOrder = function (symbol, quantity, price, options) {
        return __awaiter(this, void 0, void 0, function () {
            var type, side, DEFAULT_OPTIONS;
            return __generator(this, function (_a) {
                type = 'LIMIT_MAKER';
                side = 'BUY';
                DEFAULT_OPTIONS = { timeInForce: 'GTC', newOrderRespType: 'ACK' };
                return [2 /*return*/, this.rest.createOrder(__assign(__assign(__assign({}, DEFAULT_OPTIONS), options), { type: type, side: side, symbol: symbol, quantity: quantity, price: price }))];
            });
        });
    };
    /**
     * Send in a new limit sell order that cancels if filled immediately as a taker.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
     */
    BinanceREST.prototype.createLimitMakerSellOrder = function (symbol, quantity, price, options) {
        return __awaiter(this, void 0, void 0, function () {
            var type, side, DEFAULT_OPTIONS;
            return __generator(this, function (_a) {
                type = 'LIMIT_MAKER';
                side = 'SELL';
                DEFAULT_OPTIONS = { timeInForce: 'GTC', newOrderRespType: 'ACK' };
                return [2 /*return*/, this.rest.createOrder(__assign(__assign({}, options), { type: type, side: side, symbol: symbol, quantity: quantity, price: price }))];
            });
        });
    };
    /**
     * Check an order's status.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#query-order-user_data
     */
    BinanceREST.prototype.queryOrder = function (symbol, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.rest.queryOrder(__assign(__assign({}, options), { symbol: symbol }))];
            });
        });
    };
    /**
     * Cancel an active order.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#cancel-order-trade
     */
    BinanceREST.prototype.cancelOrder = function (symbol, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.rest.cancelOrder(__assign(__assign({}, options), { symbol: symbol }))];
            });
        });
    };
    /**
     * Cancels all active orders on a symbol. This includes OCO orders.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#cancel-all-open-orders-on-a-symbol-trade
     */
    BinanceREST.prototype.cancelOpenOrders = function (symbol, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.rest.cancelOpenOrders(__assign(__assign({}, options), { symbol: symbol }))];
            });
        });
    };
    /**
     * Get all open orders on a symbol. Careful when accessing this with no symbol.
     * Weight: 1 for a single symbol; 40 when the symbol parameter is omitted.
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#current-open-orders-user_data
     */
    BinanceREST.prototype.queryOpenOrders = function (symbol, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.rest.queryOpenOrders(__assign(__assign({ timestamp: this.timestamp }, options), { symbol: symbol }))];
            });
        });
    };
    /**
     * Get all account orders; active, canceled, or filled.
     * Weight: 5
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#all-orders-user_data
     */
    BinanceREST.prototype.queryAllOpenOrders = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.rest.queryOpenOrders(__assign({ timestamp: this.timestamp }, options))];
            });
        });
    };
    // /**
    //  * Get all account orders; active, canceled, or filled.  
    //  * Weight: 5
    //  * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#all-orders-user_data
    //  */
    // async queryAllOrders(symbol: string, options?: QueryAllOrdersOptions) {
    //     return this.rest.queryAllOrders({ timestamp: this.timestamp, ...options, symbol });
    // }
    // /**
    //  * Send in a new OCO.  
    //  * Weight: 1  
    //  * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#new-oco-trade
    //  */
    // async createOCOBuyOrder(symbol: string, quantity: string, price: string, stopPrice: string, options?: CreateOCOOrderOptions) {
    //     const side = 'BUY';
    //     return this.rest.createOCOOrder({ ...options, side, symbol, quantity, price, stopPrice });
    // }
    // /**
    //  * Send in a new OCO.  
    //  * Weight: 1  
    //  * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#new-oco-trade
    //  */
    //  async createOCOSellOrder(symbol: string, quantity: string, price: string, stopPrice: string, options?: CreateOCOOrderOptions) {
    //     const side = 'SELL';
    //     return this.rest.createOCOOrder({ ...options, side, symbol, quantity, price, stopPrice });
    // }
    // /**
    //  * Cancel an entire Order List.  
    //  * Weight: 1  
    //  * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#cancel-oco-trade
    //  */
    //  async cancelOCOOrder(symbol: string, options?: CancelOCOOrderOptions) {
    //     return this.rest.cancelOCOOrder({ ...options, symbol} as CancelOCOOrderParameters);
    // }
    // /**
    //  * Retrieves a specific OCO based on provided optional parameters.  
    //  * Weight: 1  
    //  * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#query-oco-user_data
    //  */
    //  async queryOCOOrder(options?: QueryOCOOrderOptions) {
    //     return this.rest.queryOCOOrder({timestamp: this.timestamp, ...options});
    // }
    /**
     * Retrieves all OCO based on provided optional parameters.
     * Weight: 10
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#query-all-oco-user_data
     */
    BinanceREST.prototype.queryAllOCOOrders = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.rest.queryAllOCOOrders(__assign({ timestamp: this.timestamp }, options))];
            });
        });
    };
    /**
     * Retrieves all open OCO based on provided optional parameters.
     * Weight: 2
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#query-open-oco-user_data
     */
    BinanceREST.prototype.queryOpenOCOOrders = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.rest.queryOpenOCOOrders(__assign({ timestamp: this.timestamp }, options))];
            });
        });
    };
    /**
     * Get current account information.
     * Weight: 5
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-information-user_data
     */
    BinanceREST.prototype.queryAccountInformation = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.rest.queryAccountInformation(__assign({ timestamp: this.timestamp }, options))];
            });
        });
    };
    /**
     * Get trades for a specific account and symbol.
     * Weight: 5
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-trade-list-user_data
     */
    BinanceREST.prototype.queryMyTrades = function (symbol, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.rest.queryMyTrades(__assign(__assign({ timestamp: this.timestamp }, options), { symbol: symbol }))];
            });
        });
    };
    return BinanceREST;
}());
exports.default = BinanceREST;
//# sourceMappingURL=binance-rest.js.map