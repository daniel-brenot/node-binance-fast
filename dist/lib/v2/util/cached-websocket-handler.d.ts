import JSONWebSocket from "../../base/util/json-websocket";
import UserDataWebSocket from "../../base/util/user-data-websocket";
import WebSocketHandler from "../../base/util/websocket-handler";
/**
 * Caches the created websockets
 */
export default class CachedWebsocketHander extends WebSocketHandler {
    private webSocketCache;
    private combinedWebSocketCache;
    private userDataWebSocketCache;
    constructor(baseURL: string, combinedBaseUrl: string);
    createWebSocket<T>(path: string): JSONWebSocket<T>;
    createCombinedWebSocket<T>(path: string): JSONWebSocket<T>;
    createUserDataWebSocket(path: string): UserDataWebSocket;
}
//# sourceMappingURL=cached-websocket-handler.d.ts.map