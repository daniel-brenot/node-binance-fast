// Endpoint Parameters

interface QueryDepthParameters {
    symbol: string;
    limit?: Limit;
}

interface QueryTradesParameters {
    symbol: string;
    limit?: Omit<Limit, 5000>;
}

interface QueryHistoricalTradesParameters {
    symbol: string;
    limit?: Omit<Limit, 5000>;
    fromId?: number;
}

interface QueryAggTradesParameters {
    symbol: string;
    fromId?: number;
    startTime?: number;
    endTime?: number;
    limit?: Omit<Limit, 5000>;
}

interface QueryKlinesParameters {
    symbol: string;
    interval: ChartInterval;
    startTime?: number;
    endTime?: number;
    limit?: Omit<Limit, 5000>;
}

interface QueryTicker24hrParameters {
    symbol: string
}

interface QueryTickerPriceParameters {
    symbol: string;
}

interface QueryBookTickerParameters {
    symbol: string;
}

interface BaseOrderParameters {
    symbol: string;
    side: OrderSide;
    type: OrderType;
    newOrderRespType: OrderResponseType;
    timestamp: number;
    recvWindow?: number;
}

interface LimitOrderParameters extends BaseOrderParameters {
    type: LIMIT_ORDER;
    quantity: string;
    price: string;
    timeInForce: TimeInForce;
}

type MarketOrderParameters = (BaseOrderParameters & {type: MARKET_ORDER}) &
({ quantity: string; } | { quoteOrderQty: string; })

interface StopLossOrderParameters extends BaseOrderParameters {
    type: STOP_LOSS_ORDER;
    quantity: string;
    stopPrice: string;
}

interface StopLossLimitOrderParameters extends BaseOrderParameters {
    type: STOP_LOSS_LIMIT_ORDER;
    timeInForce: TimeInForce;
    quantity: string;
    price: string;
    stopPrice: string;
    icebergQty?: number;
}

interface TakeProfitOrderParameters extends BaseOrderParameters {
    type: TAKE_PROFIT_ORDER;
    quantity: string;
    stopPrice: string;
}

interface TakeProfitLimitOrderParameters extends BaseOrderParameters {
    type: TAKE_PROFIT_LIMIT_ORDER;
    timeInForce: TimeInForce
    quantity: string;
    price: string;
    stopPrice: string;
    icebergQty?: number;
}

interface LimitMakerOrderParameters extends BaseOrderParameters {
    type: LIMIT_MAKER_ORDER;
    quantity: string;
    price: string;
    icebergQty?: number;
}

type CreateOrderParameters = LimitOrderParameters | MarketOrderParameters | StopLossOrderParameters | StopLossLimitOrderParameters | TakeProfitOrderParameters | TakeProfitLimitOrderParameters | LimitMakerOrderParameters;

type TestOrderParameters = CreateOrderParameters;

type QueryOrderParameters = ({
    symbol: string;
    recvWindow?: number;
    timestamp: number;
} & (
        {
            origClientOrderId: string;
            newClientOrderId?: string;
        } | {
            origClientOrderId?: string;
            newClientOrderId: string;
        }
    ));

type CancelOrderParameters = {
    symbol: string;
    orderId?: number;
    recvWindow?: number;
    timestamp: number;
} & (
        {
            origClientOrderId: string;
            newClientOrderId?: string;
        } | {
            origClientOrderId?: string;
            newClientOrderId: string;
        }
    );

type CancelOpenOrdersParameters = {
    symbol: string;
    recvWindow?: number;
    timestamp: number;
}

type QueryOpenOrdersParameters = {
    symbol: string;
    recvWindow?: number;
    timestamp: number;
}

type QueryAllOrdersParameters = {
    symbol: string;
    orderId: number;
    startTime: number;
    endTime: number;
    limit: Omit<Limit, 5000>;
    recvWindow: number;
    timestamp: number;
}

type CreateOCOOrderParameters = {
    symbol: string;
    listClientOrderId?: string;
    side: OrderSide;
    quantity: string;
    limitClientOrderId?: string;
    price: string;
    limitIcebergQty?: string;
    stopClientOrderId?: string;
    stopPrice: string;
    stopLimitPrice?: string;
    stopIcebergQty?: string;
    stopLimitTimeInForce?: TimeInForce;
    newOrderRespType?: OrderResponseType;
    recvWindow: number;
    timestamp: number;
}

type CancelOCOOrderParameters = {
    symbol: string;
    newClientOrderId?: string;
    recvWindow?: number;
    timestamp: number;
} & ({
    listClientOrderId: string;
    orderListId?: number;
} | {
    listClientOrderId?: string;
    orderListId: number;
});

type QueryOCOOrderParameters = {
    recvWindow?: number;
    timestamp: number;
} & ({
    orderListId: number;
    origClientOrderId?: string;
} | {
    orderListId?: number;
    origClientOrderId: string;
});

type QueryAllOCOOrdersParameters = {
    fromId?: number;
    startTime?: number;
    endTime?: number;
    limit?: Omit<Limit, 5000>;
    recvWindow?: number;
    timestamp: number;
}

type QueryOpenOCOOrdersParameters = {
    recvWindow?: number;
    timestamp: number;
}

type QueryAccountInformationParameters = {
    recvWindow?: number;
    timestamp: number;
}

type QueryMyTradesParameters = {
    symbol: string;
    startTime?: number;
    endTime?: number;
    fromId?: number;
    limit?: Omit<Limit, 5000>;
    recvWindow?: number;
    timestamp: number;
}









// Endpoint Responses

interface QueryTimeResponse {
    serverTime: number;
}

interface QueryExchangeInfoResponse {
    timezone: string;
    serverTime: number;
    rateLimits: RateLimitType[];
    exchangeFilters: ExchangeFilter[];
    symbols: {
        symbol: string;
        status: string;
        baseAsset: string;
        baseAssetPrecision: number;
        quoteAsset: string;
        quoteAssetPrecision: number;
        orderTypes: OrderType[];
        icebergAllowed: boolean;
        ocoAllowed: boolean;
        filters: SymbolFilter[];
        permissions: PermissionType[]
    };
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

type QueryTicker24HrResponse = {
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

interface OrderRESULTResponse extends OrderACKResponse{
    price?: string;
    origQty?: string;
    executedQty?: string;
    cummulativeQuoteQty?: string;
    status?: OrderStatus;
    timeInForce?: TimeInForce;
    type?: OrderType;
    side?: OrderSide;
}

interface OrderFULLResponse extends OrderRESULTResponse{
    fills?: {
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
    orderListId: number;
    contingencyType: OrderType;
    listStatusType: string;
    listOrderStatus: string;
    listClientOrderId: string;
    transactionTime: string;
    symbol: string;
    orders: {
        symbol: string;
        orderId: number;
        clientOrderId: string;
    }[];
    orderReports: OrderResponse[]
}

type CancelOCOOrderResponse = {
    orderListId: number;
    contingencyType: string;
    listStatusType: string;
    listOrderStatus: string;
    listClientOrderId: string;
    transactionTime: number;
    symbol: string;
    orders: {
        symbol: string;
        orderId: number;
        clientOrderId: string;
    }[];
    orderReports:
    {
        symbol: string;
        origClientOrderId: string;
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
    }[];
};

type QueryAllOCOOrdersResponse = {
    orderListId: number;
    contingencyType: string;
    listStatusType: string;
    listOrderStatus: string;
    listClientOrderId: string;
    transactionTime: number;
    symbol: string;
    orders: {
        symbol: string;
        orderId: number;
        clientOrderId: string;
    }[];
}[];

type QueryOpenOCOOrdersResponse = {
    orderListId: number;
    contingencyType: string;
    listStatusType: string;
    listOrderStatus: string;
    listClientOrderId: string;
    transactionTime: number;
    symbol: string;
    orders: {
        symbol: string;
        orderId: number;
        clientOrderId: string;
    }[];
}[];

type QueryAccountInformationResponse = {
    makerCommission: number;
    takerCommission: number;
    buyerCommission: number;
    sellerCommission: number;
    canTrade: boolean;
    canWithdraw: boolean;
    canDeposit: boolean;
    updateTime: number;
    accountType: string;
    balances: {
        asset: string;
        free: string;
        locked: string;
    }[];
    permissions: string[];
};

type QueryMyTradesResponse = {
    symbol: string;
    id: number;
    orderId: number;
    orderListId: number;
    price: string;
    qty: string;
    quoteQty: string;
    commission: string;
    commissionAsset: string;
    time: number;
    isBuyer: boolean;
    isMaker: boolean;
    isBestMatch: boolean;
}[];

