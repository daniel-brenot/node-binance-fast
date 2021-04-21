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

interface QueryTicker24HrParameters {
    symbol: string
}

interface QueryTickerPriceParameters {
    symbol?: string;
}

interface QueryBookTickerParameters {
    symbol: string;
}

interface BaseOrderParameters {
    symbol: string;
    side: OrderSide;
    type: OrderType;
    timestamp: number;
    newOrderRespType: OrderResponseType;
    recvWindow?: number;
}

interface LimitOrderParameters extends BaseOrderParameters {
    type: LIMIT_ORDER;
    timeInForce: TimeInForce;
    quantity: string;
    price: string;
}

type MarketOrderParameters = ({
    type: MARKET_ORDER;
    quantity: string;
} & BaseOrderParameters)| ({
    type: MARKET_ORDER;
    quoteOrderQty: string;
} & BaseOrderParameters);

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

interface LimitMakerOrderParameters extends BaseOrderParameters{
    type: LIMIT_MAKER_ORDER;
    quantity: string;
    price: string;
    icebergQty?: number;
}

type CreateOrderParameters = LimitOrderParameters | MarketOrderParameters | StopLossOrderParameters | StopLossLimitOrderParameters | TakeProfitOrderParameters | TakeProfitLimitOrderParameters | LimitMakerOrderParameters;

type TestOrderParameters = CreateOrderParameters;

type QueryOrderParameters = {
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
);

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

interface CancelOpenOrdersParameters {
    symbol: string;
    recvWindow?: number;
    timestamp: number;
}

interface QueryOpenOrdersParameters {
    symbol: string;
    recvWindow?: number;
    timestamp: number;
}

type QueryAllOrdersParameters = {
    symbol?: string;
    orderId: number;
    startTime: number;
    endTime: number;
    limit: number;
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
    recvWindow: number;
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
    
}

type KeepAliveUserDataStreamParameters = {

}

type CancelUserDataStreamParameters = {
    
}
