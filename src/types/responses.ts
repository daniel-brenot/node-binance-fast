interface QueryTimeResponse {
    serverTime: number;
}

interface QueryExchangeInfoResponse {
    timezone: string;
    serverTime: number;
    rateLimits: RateLimitType[];
    exchangeFilters: ExchangeFilter[];
    symbols: SymbolFilter[];
}

interface QueryDepthResponse {
    lastUpdateId: number;
    bids: [string, string][];
    asks: [string, string][];
}

type QueryTradesResponse = {
    id: number;
    price: string;
    qty: string;
    quoteQty: string;
    time: number;
    isBuyerMaker: boolean;
    isBestMatch: boolean;
}[];

type QueryHistoricalTradesResponse = QueryTradesResponse[];

type QueryAggTradesResponse = {
    /** Aggregate tradeId */
    a: number;
    /** Price */
    p: string;
    /** Quantity */
    q: string;
    /** First tradeId */
    f: number;
    /** Last tradeId */
    l: number;
    /** Timestamp */
    T: number;
    /** Was the buyer the maker? */
    m: boolean;
    /** Was the trade the best price match? */
    M: boolean;
}[];

type QueryKlinesResponse = [number, string, string, string, string, string, number, string, number, string, string, string][];

interface AveragePriceResponse {
    mins: number;
    price: string;
}

interface QueryTicker24HrResponse {
    symbol: string;
    priceChange: string;
    weightedAvgPrice: string;
    prevClosePrice: string;
    lastPrice: string;
    lastQty: string;
    bidPrice: string;
    askPrice: string;
    openPrice: string;
    highPrice: string;
    lowPrice: string;
    volume: string;
    quoteVolume: string;
    openTime: number;
    closeTime: number;
    firstId: number;
    lastId: number;
    count: number;
}

interface QueryTickerPriceResponse {
    symbol: string;
    price: string;
}

interface QueryBookTickerResponse {
    symbol: string;
    bidPrice: string;
    bidQty: string;
    askPrice: string;
    askQty: string;
}

interface OrderACKResponse {
    symbol: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    transactTime: number;
}

interface OrderRESULTResponse {
    symbol: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    transactTime: number;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoreQty: string;
    status: OrderStatus;
    timeInForce: TimeInForce;
    type: OrderType;
    side: OrderSide;
}

interface OrderFULLResponse {
    symbol: string;
    orderId: number;
    orderListId: number;
    clientOderId: string;
    transactTime: number;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoteQty: string;
    status: OrderStatus;
    timeInForce: TimeInForce;
    type: OrderType;
    side: OrderSide;
    fills: {
        price: string;
        qty: string;
        commission: string;
        commissionAsset: string;
    }[];
}

type OrderResponse = OrderACKResponse | OrderRESULTResponse | OrderFULLResponse;

interface QueryOrderResponse {
    symbol: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQty: string;
    status: OrderStatus;
    timeInForce: TimeInForce;
    type: OrderType;
    side: OrderSide;
    stopPrice: string;
    icebergQty: string;
    time: number;
    updateTime: string;
    isWorking: boolean;
    origQuoteOrderQty: string;

}

interface CancelOrderResponse {
    symbol: string;
    origClientOrderId?: string;
    newClientOrderId?: string;
    recvWindow?: number;
    timestamp: number;
}

type CancelOpenOrdersResponse = {
    symbol: string;
    orderId: number;
    origClientOrderId: string;
    orderListId: number;
    clientOrderId: string;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoteQty: string;
    status: OrderStatus;
    timeInForce: TimeInForce;
    type: OrderType;
    side: OrderSide;
    orders: {
        symbol: string;
        orderId: number;
        clientOrderId: string;
    }[];
    orderReports: {
        symbol: string;
        origClientOrderId: string;
        orderId: number;
        orderListId: string;
        clientOrderId: string;
        price: string;
        origQty: string;
        executedQty: string;
        cummulativeQuoteQty: string;
        status: OrderStatus;
        timeInForce: TimeInForce;
        type: OrderType;
        side: OrderSide;
        stopPrice: string;
        icebergQty: string;
    }[];
}[];

type QueryOpenOrdersResponse = {
    symbol: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoteQty: string;
    status: OrderStatus;
    timeInForce: TimeInForce;
    type: OrderType;
    side: OrderSide;
    stopPrice: string;
    icebergQty: string;
    time: number;
    updateTime: string;
    isWorking: boolean;
    origQuoteOrderQty: string;
}[];

type QueryAllOrdersResponse = {
    symbol: string;
    orderId: number;
    orderListId: number;
    clientOrderId: number;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoteQty: string;
    status: OrderStatus;
    timeInForce: TimeInForce;
    type: OrderType;
    side: OrderSide;
    stopPrice: string;
    icebergQty: string;
    time: number;
    updateTime: number;
    isWorking: boolean;
    origQuoteOrderQty: string;
};

type QueryOCOOrderResponse = {
    recvWindow?: number;
    timestamp: number;
} & (
    {
        orderListId: number;
        origClientOrderId?: string;
    } |
    {
        orderListId?: number;
        origClientOrderId: string;
    }
)

type CreateOCOOrderResponse = {
    
}

type CancelOCOOrderResponse = {
    
}

type QueryAllOCOOrdersResponse = {

}

type QueryOpenOCOOrdersResponse = {

}

type QueryAccountInformationResponse = {

}

type QueryMyTradesResponse = {

}

type CreateUserDataStreamResponse = {
    
}