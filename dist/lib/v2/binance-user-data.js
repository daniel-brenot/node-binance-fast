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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = require("../base");
var util_1 = require("../base/util");
var cached_websocket_handler_1 = __importDefault(require("./util/cached-websocket-handler"));
var DEFAULT_BASE_URL = 'https://api.binance.com/';
var DEFAULT_WS_BASE_URL = 'wss://stream.binance.com:9443';
var DEFAULT_WS_COMBINED_BASE_URL = 'wss://stream.binance.com:9443/stream?streams=';
/**
 *
 */
var BinanceUserData = /** @class */ (function () {
    function BinanceUserData(options) {
        this.drift = 0;
        var DEFAULT_OPTIONS = {
            baseURL: DEFAULT_BASE_URL,
            combinedBaseURL: DEFAULT_WS_COMBINED_BASE_URL,
            timeout: 15000,
            recvWindow: 10000,
            handleDrift: false,
            cacheConnections: true
        };
        this.options = __assign(__assign({}, DEFAULT_OPTIONS), options);
        // if (options.handleDrift) {
        //     //this.handler = new DriftRequestHandler(options.apiKey, options.apiSecret, this.options.baseURL, this.fixDrift.bind(this));
        // } else {
        this.handler = new util_1.RequestHandler(options.apiKey, options.apiSecret, this.options.baseURL);
        // }
        if (options.cacheConnections) {
            this.websocketHandler = new cached_websocket_handler_1.default(this.options.baseURL, this.options.combinedBaseURL);
        }
        else {
            this.websocketHandler = new util_1.WebSocketHandler(this.options.baseURL, this.options.combinedBaseURL);
        }
        this.userData = new base_1.UserDataStreamAPI(this.handler, this.websocketHandler);
    }
    return BinanceUserData;
}());
exports.default = BinanceUserData;
//# sourceMappingURL=binance-user-data.js.map