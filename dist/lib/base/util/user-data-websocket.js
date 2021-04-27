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
var json_websocket_1 = __importDefault(require("./json-websocket"));
var UserDataWebSocket = /** @class */ (function (_super) {
    __extends(UserDataWebSocket, _super);
    function UserDataWebSocket() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserDataWebSocket.prototype.onMessage = function (message) {
        try {
            var data = JSON.parse(message.toString());
            this.emit('data', data);
            this.emit(data.e, data);
        }
        catch (err) {
            this.emit('error', err);
        }
    };
    return UserDataWebSocket;
}(json_websocket_1.default));
exports.default = UserDataWebSocket;
//# sourceMappingURL=user-data-websocket.js.map