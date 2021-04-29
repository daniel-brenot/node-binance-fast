import JSONWebSocket from "./json-websocket";
import UserDataWebSocket from "./user-data-websocket";

/**
 * Helper class for managing websocket creation and
 * other features.
 */
export default class WebSocketHandler {

    constructor(private baseUrl: string, private combinedBaseUrl: string) {}

    /**
     * Creates a new websocket at the provided path.
     * @param path
     */
    createWebSocket<T>(path: string) {
        return new JSONWebSocket<T>(`${this.baseUrl}${path}`);
    }

    /**
     * Creates a new websocket at the provided combined stream path.
     * @param path 
     */
     createCombinedWebSocket<T>(path: string) {
        return new JSONWebSocket<T>(`${this.combinedBaseUrl}${path}`);
    }
    
    /**
     * Creates a user data stream websocket at the provided path
     * @path
     */
    createUserDataWebSocket(path: string) {
        return new UserDataWebSocket(`${this.baseUrl}${path}`);
    }

}