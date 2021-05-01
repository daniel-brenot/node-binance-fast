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
 * Interface for REST calls to the binance wallet API
 *
 * https://binance-docs.github.io/apidocs/spot/en/#wallet-endpoints
 */
var WalletAPI = /** @class */ (function () {
    function WalletAPI(handler) {
        this.handler = handler;
    }
    /**
     * Fetch system status.
     * https://binance-docs.github.io/apidocs/spot/en/#system-status-system
     */
    WalletAPI.prototype.getSystemStatus = function () {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'sapi/v1/system/status';
                        weight = 0;
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
     * Get information of coins (available for deposit and withdraw) for user.
     *
     * Weight: 1
     *
     * https://binance-docs.github.io/apidocs/spot/en/#all-coins-39-information-user_data
     */
    WalletAPI.prototype.getAllCoins = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'sapi/v1/capital/config/getall';
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
                        err_2 = _a.sent();
                        throw err_2;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     *
     * Weight: 1
     *
     * https://binance-docs.github.io/apidocs/spot/en/#daily-account-snapshot-user_data
     */
    WalletAPI.prototype.getDailyAccountSnapshot = function () {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'sapi/v1/accountSnapshot';
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
                        err_3 = _a.sent();
                        throw err_3;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * https://binance-docs.github.io/apidocs/spot/en/#disable-fast-withdraw-switch-user_data
     */
    WalletAPI.prototype.postDisableFastWithdrawSwitch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'sapi/v1/account/disableFastWithdrawSwitch';
                        weight = 0;
                        method = 'POST';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.handler.sendRequest({ path: path, method: method, weight: weight })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_4 = _a.sent();
                        throw err_4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * https://binance-docs.github.io/apidocs/spot/en/#enable-fast-withdraw-switch-user_data
     */
    WalletAPI.prototype.postEnableFastWithdrawSwitch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'sapi/v1/account/enableFastWithdrawSwitch';
                        weight = 0;
                        method = 'POST';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.handler.sendRequest({ path: path, method: method, weight: weight })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_5 = _a.sent();
                        throw err_5;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Submit a withdraw request.
     *
     * Weight: 1
     *
     * https://binance-docs.github.io/apidocs/spot/en/#withdraw-sapi
     */
    WalletAPI.prototype.postWithdraw = function () {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'sapi/v1/capital/withdraw/apply';
                        weight = 1;
                        method = 'POST';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.handler.sendRequest({ path: path, method: method, weight: weight })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_6 = _a.sent();
                        throw err_6;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Fetch deposit history.
     *
     * Weight: 1
     *
     * https://binance-docs.github.io/apidocs/spot/en/#deposit-history-supporting-network-user_data
     */
    WalletAPI.prototype.getDepositHistory = function () {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'sapi/v1/capital/deposit/hisrec';
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
                        err_7 = _a.sent();
                        throw err_7;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Fetch history.
     *
     * Weight: 1
     *
     * https://binance-docs.github.io/apidocs/spot/en/#withdraw-history-supporting-network-user_data
     */
    WalletAPI.prototype.getWithdrawHistory = function () {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'sapi/v1/capital/withdraw/history';
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
                        err_8 = _a.sent();
                        throw err_8;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Fetch deposit address with network.
     *
     * Weight: 1
     *
     * https://binance-docs.github.io/apidocs/spot/en/#deposit-address-supporting-network-user_data
     */
    WalletAPI.prototype.getDepositAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'sapi/v1/capital/deposit/address';
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
                        err_9 = _a.sent();
                        throw err_9;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Fetch account status detail.
     *
     * Weight: 1
     *
     * https://binance-docs.github.io/apidocs/spot/en/#account-status-sapi-user_data
     */
    WalletAPI.prototype.getAccountStatus = function () {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'sapi/v1/account/status';
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
                        err_10 = _a.sent();
                        throw err_10;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Fetch account api trading status detail.
     *
     * Weight: 1
     *
     * https://binance-docs.github.io/apidocs/spot/en/#account-api-trading-status-user_data
     */
    WalletAPI.prototype.getAccountAPITradingStatus = function () {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_11;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'sapi/v1/account/apiTradingStatus';
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
                        err_11 = _a.sent();
                        throw err_11;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Fetch small amounts of assets exchanged BNB records.
     *
     * Weight: 1
     *
     * https://binance-docs.github.io/apidocs/spot/en/#dustlog-user_data
     */
    WalletAPI.prototype.getDustLog = function () {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_12;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'sapi/v1/asset/dribblet';
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
                        err_12 = _a.sent();
                        throw err_12;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Convert dust assets to BNB.
     *
     * Weight: 1
     *
     * https://binance-docs.github.io/apidocs/spot/en/#dust-transfer-user_data
     */
    WalletAPI.prototype.postDustTransfer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_13;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'sapi/v1/asset/dust';
                        weight = 1;
                        method = 'POST';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.handler.sendRequest({ path: path, method: method, weight: weight })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_13 = _a.sent();
                        throw err_13;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Query asset dividend record.
     *
     * Weight: 1
     *
     * https://binance-docs.github.io/apidocs/spot/en/#asset-dividend-record-user_data
     */
    WalletAPI.prototype.getAssetDividendRecord = function () {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_14;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'sapi/v1/asset/assetDividend';
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
                        err_14 = _a.sent();
                        throw err_14;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Fetch details of assets supported on Binance.
     *
     * Weight: 1
     *
     * https://binance-docs.github.io/apidocs/spot/en/#asset-detail-user_data
     */
    WalletAPI.prototype.getAssetDetail = function () {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_15;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'sapi/v1/asset/assetDetail';
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
                        err_15 = _a.sent();
                        throw err_15;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Fetch trade fee, values in percentage.
     *
     * Weight: 1
     *
     * https://binance-docs.github.io/apidocs/spot/en/#trade-fee-user_data
     */
    WalletAPI.prototype.getTradeFee = function () {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_16;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'sapi/v1/asset/tradeFee';
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
                        err_16 = _a.sent();
                        throw err_16;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * You need to enable Permits Universal Transfer option for the api key which requests this endpoint.
     *
     * Weight: 1
     *
     * https://binance-docs.github.io/apidocs/spot/en/#user-universal-transfer
     */
    WalletAPI.prototype.postUserUniversalTransfer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_17;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'sapi/v1/asset/transfer';
                        weight = 1;
                        method = 'POST';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.handler.sendRequest({ path: path, method: method, weight: weight })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_17 = _a.sent();
                        throw err_17;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Weight: 1
     */
    WalletAPI.prototype.getUserUniversalTransfer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var path, weight, method, err_18;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'sapi/v1/asset/transfer';
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
                        err_18 = _a.sent();
                        throw err_18;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return WalletAPI;
}());
exports.default = WalletAPI;
//# sourceMappingURL=wallet-api.js.map