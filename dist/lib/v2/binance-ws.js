"use strict";
/// <reference path="types/binance-ws.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = require("../base");
var websocket_handler_1 = __importDefault(require("../base/util/websocket-handler"));
var cached_websocket_handler_1 = __importDefault(require("./util/cached-websocket-handler"));
var DEFAULT_BASE_URL = 'wss://stream.binance.com:9443/ws/';
var DEFAULT_COMBINED_BASE_URL = 'wss://stream.binance.com:9443/stream?streams=';
/**
 * API for all calls to websocket data.
 */
var BinanceWS = /** @class */ (function (_super) {
    __extends(BinanceWS, _super);
    function BinanceWS(_a) {
        var _b = _a.baseURL, baseURL = _b === void 0 ? DEFAULT_BASE_URL : _b, _c = _a.combinedBaseURL, combinedBaseURL = _c === void 0 ? DEFAULT_COMBINED_BASE_URL : _c, _d = _a.cacheConnections, cacheConnections = _d === void 0 ? true : _d;
        var _this = this;
        var handler = cacheConnections ? new cached_websocket_handler_1.default(baseURL, combinedBaseURL) : new websocket_handler_1.default(baseURL, combinedBaseURL);
        _this = _super.call(this, handler) || this;
        return _this;
    }
    return BinanceWS;
}(base_1.WebSocketStreamAPI));
exports.default = BinanceWS;
//# sourceMappingURL=binance-ws.js.map