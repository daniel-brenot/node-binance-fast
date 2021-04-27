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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * API object for accessing Binance REST API
 *
 * Data is returned in ascending order. Oldest first, newest last.
 * All time and timestamp related fields are in milliseconds.
 * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md
 */
var RESTAPI = /** @class */ (function () {
    function RESTAPI(handler) {
        this.handler = handler;
    }
    /**
     * Test connectivity to the REST API.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#test-connectivity
     */
    RESTAPI.prototype.queryPing = function () {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'api/v3/ping';
                        weight = 1;
                        method = 'GET';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.handler.sendRequest({ path: path, method: method, weight: weight })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        throw err_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Test connectivity to the REST API and get the current server time.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#check-server-time
     */
    RESTAPI.prototype.queryTime = function () {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'api/v3/time';
                        weight = 1;
                        method = 'GET';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.handler.sendRequest({ path: path, weight: weight, method: method })];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        err_2 = _a.sent();
                        throw err_2;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Current exchange trading rules and symbol information.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#exchange-information
     */
    RESTAPI.prototype.queryExchangeInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'api/v3/exchangeInfo';
                        weight = 1;
                        method = 'GET';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.handler.sendRequest({ path: path, weight: weight, method: method })];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        err_3 = _a.sent();
                        throw err_3;
                    case 4: return [2 /*return*/];
                }
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
    RESTAPI.prototype.queryDepth = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'api/v3/depth';
                        weight = params.limit || 100 / 100;
                        method = 'POST';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.handler.sendRequest({ path: path, weight: weight, method: method, params: params })];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        err_4 = _a.sent();
                        throw err_4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get recent trades.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#recent-trades-list
     */
    RESTAPI.prototype.queryTrades = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'api/v3/trades';
                        weight = 1;
                        method = 'POST';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.handler.sendRequest({ path: path, weight: weight, method: method, params: params })];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        err_5 = _a.sent();
                        throw err_5;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get older trades.
     * Weight: 5
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#old-trade-lookup-market_data
     */
    RESTAPI.prototype.queryHistoricalTrades = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'api/v3/historicalTrades';
                        weight = 5;
                        method = 'POST';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.handler.sendRequest({ path: path, weight: weight, method: method, params: params })];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        err_6 = _a.sent();
                        throw err_6;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get compressed, aggregate trades.
     * Trades that fill at the time, from the same taker order, with the same price will have the quantity aggregated.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#compressedaggregate-trades-list
     */
    RESTAPI.prototype.queryAggTrades = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'api/v3/aggTrades';
                        weight = 1;
                        method = 'POST';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.handler.sendRequest({ path: path, weight: weight, method: method, params: params })];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        err_7 = _a.sent();
                        throw err_7;
                    case 4: return [2 /*return*/];
                }
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
    RESTAPI.prototype.queryKlines = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'api/v3/klines';
                        weight = 1;
                        method = 'GET';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.handler.sendRequest({ path: path, weight: weight, method: method, params: params })];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        err_8 = _a.sent();
                        throw err_8;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Current average price for a symbol.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#current-average-price
     */
    RESTAPI.prototype.queryAvgPrice = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'api/v3/avgPrice';
                        weight = 1;
                        method = 'GET';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.handler.sendRequest({ path: path, weight: weight, method: method, params: params })];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        err_9 = _a.sent();
                        throw err_9;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RESTAPI.prototype.queryTicker24hr = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'api/v3/ticker/24hr';
                        weight = params.symbol ? 1 : 40;
                        method = 'GET';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.handler.sendRequest({ path: path, weight: weight, method: method, params: params })];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        err_10 = _a.sent();
                        throw err_10;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RESTAPI.prototype.queryTickerPrice = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_11;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'api/v3/ticker/price';
                        weight = params.symbol ? 1 : 2;
                        method = 'GET';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.handler.sendRequest({ path: path, weight: weight, method: method, params: params })];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        err_11 = _a.sent();
                        throw err_11;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RESTAPI.prototype.queryBookTicker = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_12;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'api/v3/ticker/bookTicker';
                        weight = params.symbol ? 1 : 2;
                        method = 'GET';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.handler.sendRequest({ path: path, weight: weight, method: method, params: params })];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        err_12 = _a.sent();
                        throw err_12;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Send in a new order.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
     */
    RESTAPI.prototype.createOrder = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_13;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'api/v3/order';
                        weight = 1;
                        method = 'POST';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.handler.sendSignedRequest({ path: path, weight: weight, method: method, params: params })];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        err_13 = _a.sent();
                        throw err_13;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Test new order creation and signature/recvWindow long.
     * Creates and validates a new order but does not send it into the matching engine.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#test-new-order-trade
     */
    RESTAPI.prototype.testOrder = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_14;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'api/v3/order/test';
                        weight = 1;
                        method = 'POST';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.handler.sendSignedRequest({ path: path, weight: weight, method: method, params: params })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_14 = _a.sent();
                        throw err_14;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Check an order's status.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#query-order-user_data
     */
    RESTAPI.prototype.queryOrder = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_15;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'api/v3/order';
                        weight = 1;
                        method = 'GET';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.handler.sendSignedRequest({ path: path, weight: weight, method: method, params: params })];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        err_15 = _a.sent();
                        throw err_15;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Cancel an active order.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#cancel-order-trade
     */
    RESTAPI.prototype.cancelOrder = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_16;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'api/v3/order';
                        weight = 1;
                        method = 'DELETE';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.handler.sendSignedRequest({ path: path, weight: weight, method: method, params: params })];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        err_16 = _a.sent();
                        throw err_16;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Cancels all active orders on a symbol. This includes OCO orders.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#cancel-all-open-orders-on-a-symbol-trade
     */
    RESTAPI.prototype.cancelOpenOrders = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_17;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'api/v3/openOrders';
                        weight = 1;
                        method = 'DELETE';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.handler.sendSignedRequest({ path: path, weight: weight, method: method, params: params })];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        err_17 = _a.sent();
                        throw err_17;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RESTAPI.prototype.queryOpenOrders = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_18;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'api/v3/openOrders';
                        weight = params.symbol ? 1 : 40;
                        method = 'GET';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.handler.sendSignedRequest({ path: path, weight: weight, method: method, params: params })];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        err_18 = _a.sent();
                        throw err_18;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get all account orders; active, canceled, or filled.
     * Weight: 5
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#all-orders-user_data
     */
    RESTAPI.prototype.queryAllOrders = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_19;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'api/v3/allOrders';
                        weight = 5;
                        method = 'GET';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.handler.sendSignedRequest({ path: path, weight: weight, method: method, params: params })];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        err_19 = _a.sent();
                        throw err_19;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Send in a new OCO.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#new-oco-trade
     */
    RESTAPI.prototype.createOCOOrder = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_20;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'api/v3/order/oco';
                        weight = 1;
                        method = 'POST';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.handler.sendSignedRequest({ path: path, weight: weight, method: method, params: params })];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        err_20 = _a.sent();
                        throw err_20;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Cancel an entire Order List.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#cancel-oco-trade
     */
    RESTAPI.prototype.cancelOCOOrder = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_21;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'api/v3/orderList';
                        weight = 1;
                        method = 'DELETE';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.handler.sendSignedRequest({ path: path, weight: weight, method: method, params: params })];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        err_21 = _a.sent();
                        throw err_21;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Retrieves a specific OCO based on provided optional parameters.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#query-oco-user_data
     */
    RESTAPI.prototype.queryOCOOrder = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_22;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'api/v3/orderList';
                        weight = 1;
                        method = 'GET';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.handler.sendSignedRequest({ path: path, weight: weight, method: method, params: params })];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        err_22 = _a.sent();
                        throw err_22;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Retrieves all OCO based on provided optional parameters.
     * Weight: 10
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#query-all-oco-user_data
     */
    RESTAPI.prototype.queryAllOCOOrders = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_23;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'api/v3/allOrderList';
                        weight = 10;
                        method = 'GET';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.handler.sendSignedRequest({ path: path, weight: weight, method: method, params: params })];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        err_23 = _a.sent();
                        throw err_23;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Retrieves all open OCO based on provided optional parameters.
     * Weight: 2
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#query-open-oco-user_data
     */
    RESTAPI.prototype.queryOpenOCOOrders = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_24;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'api/v3/openOrderList';
                        weight = 2;
                        method = 'GET';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.handler.sendSignedRequest({ path: path, weight: weight, method: method, params: params })];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        err_24 = _a.sent();
                        throw err_24;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get current account information.
     * Weight: 5
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-information-user_data
     */
    RESTAPI.prototype.queryAccountInformation = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_25;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'api/v3/account';
                        weight = 5;
                        method = 'GET';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.handler.sendSignedRequest({ path: path, weight: weight, method: method, params: params })];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        err_25 = _a.sent();
                        throw err_25;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get trades for a specific account and symbol.
     * Weight: 5
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-trade-list-user_data
     */
    RESTAPI.prototype.queryMyTrades = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_26;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'api/v3/myTrades';
                        weight = 5;
                        method = 'GET';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.handler.sendSignedRequest({ path: path, weight: weight, method: method, params: params })];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        err_26 = _a.sent();
                        throw err_26;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return RESTAPI;
}());
exports.default = RESTAPI;
//# sourceMappingURL=rest-api.js.map