/// <reference path="types/binance-ws.ts" />

import { WebSocketStreamAPI } from "../base";
import WebSocketHandler from '../base/util/websocket-handler';
import CachedWebsocketHander from "./util/cached-websocket-handler";

const DEFAULT_BASE_URL = 'wss://stream.binance.com:9443/ws/';
const DEFAULT_COMBINED_BASE_URL = 'wss://stream.binance.com:9443/stream?streams=';

type BinanceWSOptions = {
    baseUrl?: string;
    combinedBaseUrl?: string;
    cacheConnections?: boolean;
};

/**
 * API for all calls to websocket data.
 */
export default class BinanceWS extends WebSocketStreamAPI {

    constructor({
        baseUrl = DEFAULT_BASE_URL,
        combinedBaseUrl = DEFAULT_COMBINED_BASE_URL,
        cacheConnections = true
    }: BinanceWSOptions) {
        const handler = cacheConnections ? new CachedWebsocketHander(baseUrl, combinedBaseUrl) : new WebSocketHandler(baseUrl, combinedBaseUrl);
        super(handler);
    }
}