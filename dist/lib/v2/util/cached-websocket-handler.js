"use strict";
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
var websocket_handler_1 = __importDefault(require("../../base/util/websocket-handler"));
/**
 * Caches the created websockets
 */
var CachedWebsocketHander = /** @class */ (function (_super) {
    __extends(CachedWebsocketHander, _super);
    function CachedWebsocketHander(baseURL, combinedBaseUrl) {
        var _this = _super.call(this, baseURL, combinedBaseUrl) || this;
        _this.webSocketCache = {};
        _this.combinedWebSocketCache = {};
        _this.userDataWebSocketCache = {};
        return _this;
    }
    CachedWebsocketHander.prototype.createWebSocket = function (path) {
        var cached = this.webSocketCache[path];
        if (cached) {
            return cached;
        }
        return this.webSocketCache[path] = _super.prototype.createWebSocket.call(this, path);
    };
    CachedWebsocketHander.prototype.createCombinedWebSocket = function (path) {
        var cached = this.combinedWebSocketCache[path];
        if (cached) {
            return cached;
        }
        return this.combinedWebSocketCache[path] = _super.prototype.createCombinedWebSocket.call(this, path);
    };
    CachedWebsocketHander.prototype.createUserDataWebSocket = function (path) {
        var cached = this.userDataWebSocketCache[path];
        if (cached) {
            return cached;
        }
        return this.userDataWebSocketCache[path] = _super.prototype.createUserDataWebSocket.call(this, path);
    };
    return CachedWebsocketHander;
}(websocket_handler_1.default));
exports.default = CachedWebsocketHander;
//# sourceMappingURL=cached-websocket-handler.js.map