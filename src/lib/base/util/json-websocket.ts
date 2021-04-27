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
class JSONWebSocket<T> extends EventEmitter {

    protected ws?: WebSocket;
    protected connected: boolean;

    constructor(private url: string) {
        super();
        this.connected = false;
    }

    protected onMessage(message: WebSocket.Data) {
        try { this.emit('data', JSON.parse(message.toString())); }
        catch (err) { this.emit('error', err); }
    }

    protected onError(err: Error) {
        this.emit('error', err);
    }

    protected onPing() {
        this.ws?.pong();
    }

    protected onClose() {
        this.connect();
    }

    removeListener(event: string | symbol, listener: (...args: any[]) => void): this {
        super.removeListener(event, listener);
        if (this.isEmpty) this.disconnect();
        return this;
    }

    removeAllListeners(event?: string | symbol | undefined): this {
        super.removeAllListeners(event);
        if (this.isEmpty) this.disconnect();
        return this;
    }

    addListener(event: string | symbol, listener: (...args: any[]) => void): this {
        super.addListener(event, listener);
        this.connect();
        return this;
    }

    on(event: string, listener: (...args: any[]) => void) {
        this.connect();
        return super.on(event, listener);
    }

    prependListener(event: string | symbol, listener: (...args: any[]) => void): this {
        console.log('add listener')
        super.prependListener(event, listener);
        this.connect();
        return this;
    }

    /** Checks if the event emitter has any listeners */
    get isEmpty() {
        return !this.eventNames().some(event => this.listenerCount(event) !== 0);
    }

    get isConnected() { return this.connected; }

    get websocket() { return this.ws; }

    /**
     * Connects the websocket and registers various handlers for events
     * and reconnection.
     */
    protected connect() {
        if (this.connected) return;
        this.ws?.close();
        this.ws = new WebSocket(this.url);
        this.ws.on('message', (v) => this.onMessage(v));
        this.ws.on('error', (v) => this.onError(v));
        this.ws.on('ping', () => this.onPing());
        this.ws.on('close', () => this.onClose());
        this.connected = true;
        this.emit('connect');
    }

    /**
     * Disables reconnection and keepalive behaviour,
     * as well as closing the socket.
     */
    protected disconnect() {
        if (!this.connected) return;
        this.ws?.removeAllListeners();
        this.ws?.close();
        this.connected = false;
        this.emit('disconnect');
    }

}

export default JSONWebSocket;