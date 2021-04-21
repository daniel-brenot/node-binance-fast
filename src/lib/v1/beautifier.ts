const DEFAULT_BEAUTIFICATIONS = {
    aggTrades: {
        a: 'aggTradeId',
        p: 'price',
        q: 'quantity',
        f: 'firstTradeId',
        l: 'lastTradeId',
        T: 'timestamp',
        m: 'maker',
        M: 'bestPriceMatch'
    },
    klines: {
        0: 'openTime',
        1: 'open',
        2: 'high',
        3: 'low',
        4: 'close',
        5: 'volume',
        6: 'closeTime',
        7: 'quoteAssetVolume',
        8: 'trades',
        9: 'takerBaseAssetVolume',
        10: 'takerQuoteAssetVolume',
        11: 'ignored'
    },
    bids: [
        {
            0: 'price',
            1: 'quantity',
            2: 'ignored'
        }
    ],
    asks: [
        {
            0: 'price',
            1: 'quantity',
            2: 'ignored'
        }
    ],
    depthUpdateEvent: {
        e: 'eventType',
        E: 'eventTime',
        s: 'symbol',
        U: 'firstUpdateId',
        u: 'lastUpdateId',
        b: 'bidDepthDelta',
        a: 'askDepthDelta'
    },
    bidDepthDelta: [
        {
            0: 'price',
            1: 'quantity',
            2: 'ignored'
        }
    ],
    askDepthDelta: [
        {
            0: 'price',
            1: 'quantity',
            2: 'ignored'
        }
    ],
    klineEvent: {
        e: 'eventType',
        E: 'eventTime',
        s: 'symbol',
        k: 'kline'
    },
    kline: {
        t: 'startTime',
        T: 'endTime',
        s: 'symbol',
        i: 'interval',
        f: 'firstTradeId',
        L: 'lastTradeId',
        o: 'open',
        c: 'close',
        h: 'high',
        l: 'low',
        v: 'volume',
        n: 'trades',
        x: 'final',
        q: 'quoteVolume',
        V: 'volumeActive',
        Q: 'quoteVolumeActive',
        B: 'ignored'
    },
    aggTradeEvent: {
        e: 'eventType',
        E: 'eventTime',
        s: 'symbol',
        a: 'tradeId',
        p: 'price',
        q: 'quantity',
        f: 'firstTradeId',
        l: 'lastTradeId',
        T: 'time',
        m: 'maker',
        M: 'ignored'
    },
    outboundAccountInfoEvent: {
        e: 'eventType',
        E: 'eventTime',
        m: 'makerCommission',
        t: 'takerCommission',
        b: 'buyerCommission',
        s: 'sellerCommission',
        T: 'canTrade',
        W: 'canWithdraw',
        D: 'canDeposit',
        B: 'balances',
        u: 'lastUpdateTime'
    },
    outboundAccountPositionEvent: {
        e: 'eventType',
        E: 'eventTime',
        u: 'lastUpdateTime',
        B: 'balances'
    },
    balances: [
        {
            a: 'asset',
            f: 'availableBalance',
            l: 'onOrderBalance'
        }
    ],
    executionReportEvent: {
        e: 'eventType',
        E: 'eventTime',
        s: 'symbol',
        c: 'newClientOrderId',
        S: 'side',
        o: 'orderType',
        f: 'cancelType', // GTC 'Good till Cancel', IOC: 'Immediate or Cancel'
        q: 'quantity',
        p: 'price',
        P: 'stopPrice',
        F: 'icebergQuantity',
        C: 'originalClientOrderId',
        x: 'executionType',
        X: 'orderStatus',
        r: 'rejectReason',
        i: 'orderId',
        l: 'lastTradeQuantity',
        z: 'accumulatedQuantity',
        L: 'lastTradePrice',
        n: 'commission',
        N: 'commissionAsset',
        m: 'maker',
        T: 'tradeTime',
        t: 'tradeId'
    },
    tradeEvent: {
        e: 'eventType',
        E: 'eventTime',
        s: 'symbol',
        t: 'tradeId',
        p: 'price',
        q: 'quantity',
        b: 'buyerOrderId',
        a: 'sellerOrderId',
        T: 'time',
        m: 'maker',
        M: 'ignored'
    },
    '24hrTickerEvent': {
        e: 'eventType',
        E: 'eventTime',
        s: 'symbol',
        p: 'priceChange',
        P: 'priceChangePercent',
        w: 'weightedAveragePrice',
        x: 'previousClose',
        c: 'currentClose',
        Q: 'closeQuantity',
        b: 'bestBid',
        B: 'bestBidQuantity',
        a: 'bestAskPrice',
        A: 'bestAskQuantity',
        o: 'open',
        h: 'high',
        l: 'low',
        v: 'baseAssetVolume',
        q: 'quoteAssetVolume',
        O: 'openTime',
        C: 'closeTime',
        F: 'firstTradeId',
        L: 'lastTradeId',
        n: 'trades'
    }
};

/**
 * Restructures the values returned by the API by changing values and
 * renaming them to more descript names
 */
export default class Beautifier {

    beautifications: {};

    constructor() {
        this.beautifications = DEFAULT_BEAUTIFICATIONS;
    }

    // beautify(object: {}, type) {
    //     const beautifications = typeof type === 'object' ? type : this.beautifications[type];
    //     if (!beautifications) { return object; }
    //     let newItem = {};
    //     for(let [key, value] of Object.entries(object)) {
    //         const newKey = beautifications[key] || key;
    //         if (Array.isArray(value)) {
    //             const newArray = [];
    //             if (Array.isArray(this.beautifications[beautifications[key]])) {
    //                 for(let arrayValue of value) {
    //                     newArray.push(
    //                         this.beautify(
    //                             arrayValue,
    //                             this.beautifications[beautifications[key]][0]
    //                         )
    //                     );
    //                 }
    //             } else {
    //                 for(let [arrayKey, arrayValue] of Object.entries(value)) {
    //                     newArray.push(
    //                         this.beautify(value, beautifications[arrayKey])
    //                     );
    //                 }
    //             }
    //             newItem[newKey] = newArray;
    //         } else if (typeof value === 'object') {
    //             newItem[newKey] = this.beautify(value, beautifications[key]);
    //         } else {
    //             newItem[newKey] = value;
    //         }
    //     }
    //     return newItem;
    // }
}