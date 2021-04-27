"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var json_websocket_1 = __importDefault(require("./json-websocket"));
var user_data_websocket_1 = __importDefault(require("./user-data-websocket"));
/**
 * Helper class for managing websocket creation and
 * other features.
 */
var WebSocketHandler = /** @class */ (function () {
    function WebSocketHandler(baseUrl, combinedBaseUrl) {
        this.baseUrl = baseUrl;
        this.combinedBaseUrl = combinedBaseUrl;
    }
    /**
     * Creates a new websocket at the provided path.
     * @param path
     */
    WebSocketHandler.prototype.createWebSocket = function (path) {
        return new json_websocket_1.default("" + this.baseUrl + path);
    };
    /**
     * Creates a new websocket at the provided combined stream path.
     * @param path
     */
    WebSocketHandler.prototype.createCombinedWebSocket = function (path) {
        return new json_websocket_1.default("" + this.combinedBaseUrl + path);
    };
    /**
     * Creates a user data stream websocket at the provided path
     * @path
     */
    WebSocketHandler.prototype.createUserDataWebSocket = function (path) {
        return new user_data_websocket_1.default("" + this.baseUrl + path);
    };
    return WebSocketHandler;
}());
exports.default = WebSocketHandler;
//# sourceMappingURL=websocket-handler.js.map