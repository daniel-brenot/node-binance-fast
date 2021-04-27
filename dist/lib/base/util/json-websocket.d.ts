/// <reference types="node" />
import EventEmitter from 'events';
import WebSocket from 'ws';
declare interface JSONWebSocket<T> {
    on(event: 'connect' | 'disconnect' | 'reconnect', listener: () => void): this;
    on(event: 'error', listener: (err: Error) => void): this;
    on(event: 'data', listener: (value: T) => void): this;
    on(event: 'connect' | 'disconnect' | 'reconnect' | 'error' | 'data', listener: (...args: any[]) => void): this;
}
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
declare class JSONWebSocket<T> extends EventEmitter {
    private url;
    protected ws?: WebSocket;
    protected connected: boolean;
    constructor(url: string);
    protected onMessage(message: WebSocket.Data): void;
    protected onError(err: Error): void;
    protected onPing(): void;
    protected onClose(): void;
    removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
    removeAllListeners(event?: string | symbol | undefined): this;
    addListener(event: string | symbol, listener: (...args: any[]) => void): this;
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
    /** Checks if the event emitter has any listeners */
    get isEmpty(): boolean;
    get isConnected(): boolean;
    get websocket(): WebSocket | undefined;
    /**
     * Connects the websocket and registers various handlers for events
     * and reconnection.
     */
    protected connect(): void;
    /**
     * Disables reconnection and keepalive behaviour,
     * as well as closing the socket.
     */
    protected disconnect(): void;
}
export default JSONWebSocket;
//# sourceMappingURL=json-websocket.d.ts.map