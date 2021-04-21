import EventEmitter from 'events';
import WebSocket from 'ws';


declare interface JSONWebSocket<T> {
    on(event: 'connect' | 'disconnect' | 'reconnect', listener: () => void): this;
    on(event: 'error', listener: (err: Error) => void): this;
    on(event: 'data', listener: (value: T) => void): this;
    on(event: 'connect' | 'disconnect' | 'reconnect' | 'error' | 'data', listener: Function): this;
}

class JSONWebSocket<T> extends EventEmitter {

    private ws?: WebSocket;
    private connected: boolean;

    constructor(private url: string) {
        super();
        this.connected = false;
        this.connect();
    }

    private onMessage(message: WebSocket.Data) {
        //console.log(message);
        try {this.emit('data', JSON.parse(message.toString())); }
        catch (err) { this.emit('error', err); }
    }

    private onError(err: Error) {
        this.emit('error', err);
    }

    private onPing() {
        this.ws?.pong();
    }

    private onClose() {
        this.connect();
    }

    removeListener(event: string | symbol, listener: (...args: any[]) => void): this{
        super.removeListener(event, listener);
        if(this.isEmpty) this.disconnect();
        return this;
    }

    removeAllListeners(event?: string | symbol | undefined): this{
        super.removeAllListeners(event);
        if(this.isEmpty) this.disconnect();
        return this;
    }

    addListener(event: string | symbol, listener: (...args: any[]) => void): this{
        console.log('add listener')
        super.addListener(event, listener);
        this.connect();
        return this;
    }

    prependListener(event: string | symbol, listener: (...args: any[]) => void): this {
        console.log('add listener')
        super.prependListener(event, listener);
        this.connect();
        return this;
    }
    

 

    /** Checks if the event emitter has any listeners */
    get isEmpty(){
        return !this.eventNames().some(event=>this.listenerCount(event) !== 0);
    }

    get isConnected() { return this.connected; }

    get websocket() { return this.ws; }

    /**
     * Connects the websocket and registers various handlers for events
     * and reconnection.
     */
    connect() {
        if (this.connected) return;
        console.log(`Connecting to ${this.url}`)
        this.ws = new WebSocket(this.url);
        this.ws.on('message', (v)=>this.onMessage(v));
        this.ws.on('error', (v)=>this.onError(v));
        this.ws.on('ping', ()=>this.onPing());
        this.ws.on('close', ()=>this.onClose());
        this.connected = true;
        this.emit('connect');
    }

    /**
     * Disables reconnection and keepalive behaviour,
     * as well as closing the socket.
     */
    disconnect() {
        if (!this.connected) return;
        console.log('disconnecting');
        this.ws?.removeAllListeners();
        this.ws?.close();
        this.connected = false;
        this.emit('disconnect');
    }



}

export default JSONWebSocket;