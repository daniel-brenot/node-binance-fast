import JSONWebSocket from "../../base/util/json-websocket";
import UserDataWebSocket from "../../base/util/user-data-websocket";
import WebSocketHandler from "../../base/util/websocket-handler";

/**
 * Caches the created websockets
 */
export default class CachedWebsocketHander extends WebSocketHandler {

    private webSocketCache: Record<string, JSONWebSocket<{}>>
    private combinedWebSocketCache: Record<string, JSONWebSocket<{}>>
    private userDataWebSocketCache: Record<string, JSONWebSocket<{}>>


    constructor(baseURL: string, combinedBaseUrl: string){
        super(baseURL, combinedBaseUrl);
        this.webSocketCache = {};
        this.combinedWebSocketCache = {};
        this.userDataWebSocketCache = {};
    }

    createWebSocket<T>(path: string) {
        const cached = this.webSocketCache[path];
        if(cached) { return cached as JSONWebSocket<T>; }
        return this.webSocketCache[path] = super.createWebSocket<T>(path);
    }

    createCombinedWebSocket<T>(path: string) {
        const cached = this.combinedWebSocketCache[path];
        if(cached) { return cached as JSONWebSocket<T>; }
        return this.combinedWebSocketCache[path] = super.createCombinedWebSocket<T>(path);
    }

    createUserDataWebSocket(path: string) {
        const cached = this.userDataWebSocketCache[path];
        if(cached) { return cached as UserDataWebSocket; }
        return this.userDataWebSocketCache[path] = super.createUserDataWebSocket(path);
    }
}