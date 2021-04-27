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
var events_1 = __importDefault(require("events"));
var ws_1 = __importDefault(require("ws"));
/**
 * Wrapper for websocket with logic for disconnecting and reconnecting.
 * Emits events for useful information.
 * Events:
 * connect: The websocket wrapper connected
 * disconnect: The websocket wrapper explicitely disconnected
 * reconnect: The websocket lost connection and will reconnect
 * error: The server returned an error or a JSON parse error ocurred
 * data: JSON data in the webstream.
 */
var JSONWebSocket = /** @class */ (function (_super) {
    __extends(JSONWebSocket, _super);
    function JSONWebSocket(url) {
        var _this = _super.call(this) || this;
        _this.url = url;
        _this.connected = false;
        return _this;
    }
    JSONWebSocket.prototype.onMessage = function (message) {
        try {
            this.emit('data', JSON.parse(message.toString()));
        }
        catch (err) {
            this.emit('error', err);
        }
    };
    JSONWebSocket.prototype.onError = function (err) {
        this.emit('error', err);
    };
    JSONWebSocket.prototype.onPing = function () {
        var _a;
        (_a = this.ws) === null || _a === void 0 ? void 0 : _a.pong();
    };
    JSONWebSocket.prototype.onClose = function () {
        this.connect();
    };
    JSONWebSocket.prototype.removeListener = function (event, listener) {
        _super.prototype.removeListener.call(this, event, listener);
        if (this.isEmpty)
            this.disconnect();
        return this;
    };
    JSONWebSocket.prototype.removeAllListeners = function (event) {
        _super.prototype.removeAllListeners.call(this, event);
        if (this.isEmpty)
            this.disconnect();
        return this;
    };
    JSONWebSocket.prototype.addListener = function (event, listener) {
        _super.prototype.addListener.call(this, event, listener);
        this.connect();
        return this;
    };
    JSONWebSocket.prototype.on = function (event, listener) {
        this.connect();
        return _super.prototype.on.call(this, event, listener);
    };
    JSONWebSocket.prototype.prependListener = function (event, listener) {
        console.log('add listener');
        _super.prototype.prependListener.call(this, event, listener);
        this.connect();
        return this;
    };
    Object.defineProperty(JSONWebSocket.prototype, "isEmpty", {
        /** Checks if the event emitter has any listeners */
        get: function () {
            var _this = this;
            return !this.eventNames().some(function (event) { return _this.listenerCount(event) !== 0; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JSONWebSocket.prototype, "isConnected", {
        get: function () { return this.connected; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JSONWebSocket.prototype, "websocket", {
        get: function () { return this.ws; },
        enumerable: false,
        configurable: true
    });
    /**
     * Connects the websocket and registers various handlers for events
     * and reconnection.
     */
    JSONWebSocket.prototype.connect = function () {
        var _this = this;
        var _a;
        if (this.connected)
            return;
        (_a = this.ws) === null || _a === void 0 ? void 0 : _a.close();
        this.ws = new ws_1.default(this.url);
        this.ws.on('message', function (v) { return _this.onMessage(v); });
        this.ws.on('error', function (v) { return _this.onError(v); });
        this.ws.on('ping', function () { return _this.onPing(); });
        this.ws.on('close', function () { return _this.onClose(); });
        this.connected = true;
        this.emit('connect');
    };
    /**
     * Disables reconnection and keepalive behaviour,
     * as well as closing the socket.
     */
    JSONWebSocket.prototype.disconnect = function () {
        var _a, _b;
        if (!this.connected)
            return;
        (_a = this.ws) === null || _a === void 0 ? void 0 : _a.removeAllListeners();
        (_b = this.ws) === null || _b === void 0 ? void 0 : _b.close();
        this.connected = false;
        this.emit('disconnect');
    };
    return JSONWebSocket;
}(events_1.default));
exports.default = JSONWebSocket;
//# sourceMappingURL=json-websocket.js.map