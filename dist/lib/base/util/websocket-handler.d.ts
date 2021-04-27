import JSONWebSocket from "./json-websocket";
import UserDataWebSocket from "./user-data-websocket";
/**
 * Helper class for managing websocket creation and
 * other features.
 */
export default class WebSocketHandler {
    private baseUrl;
    private combinedBaseUrl;
    constructor(baseUrl: string, combinedBaseUrl: string);
    /**
     * Creates a new websocket at the provided path.
     * @param path
     */
    createWebSocket<T>(path: string): JSONWebSocket<T>;
    /**
     * Creates a new websocket at the provided combined stream path.
     * @param path
     */
    createCombinedWebSocket<T>(path: string): JSONWebSocket<T>;
    /**
     * Creates a user data stream websocket at the provided path
     * @path
     */
    createUserDataWebSocket(path: string): UserDataWebSocket;
}
//# sourceMappingURL=websocket-handler.d.ts.map