// Filters

// Symbol Filters

/** The PRICE_FILTER defines the price rules for a symbol. */
interface PRICE_FILTER {
    filterType: 'PRICE_FILTER';
    /** defines the minimum price/stopPrice allowed; disabled on minPrice == 0. */
    minPrice: string;
    /** defines the maximum price/stopPrice allowed; disabled on maxPrice == 0. */
    maxPrice: string;
    /** tickSize defines the intervals that a price/stopPrice can be increased/decreased by; disabled on tickSize == 0. */
    tickPrice: string;
}

/** The PERCENT_PRICE filter defines valid range for a price based on the average of the previous trades. avgPriceMins is the number of minutes the average price is calculated over. 0 means the last price is used. */
interface PERCENT_PRICE {
    filterType: 'PERCENT_PRICE';
    multiplierUp: string;
    multiplierDown: string;
    avgPriceMins: number;
}

/** The LOT_SIZE filter defines the quantity (aka "lots" in auction terms) rules for a symbol. */
interface LOT_SIZE {
    filterType: 'LOT_SIZE';
    /** defines the minimum quantity/icebergQty allowed. */
    minQty: string;
    /** defines the maximum quantity/icebergQty allowed. */
    maxQty: string;
    /** defines the intervals that a quantity/icebergQty can be increased/decreased by. */
    stepSize: string;
}

/**
 * The MIN_NOTIONAL filter defines the minimum notional value allowed for an order on a symbol. An order's notional value is the price * quantity. applyToMarket determines whether or not the MIN_NOTIONAL filter will also be applied to MARKET orders. Since MARKET orders have no price, the average price is used over the last avgPriceMins minutes. avgPriceMins is the number of minutes the average price is calculated over. 0 means the last price is used.
 */
interface MIN_NOTIONAL {
    filterType: 'MIN_NOTIONAL';
    minNotional: string;
    applyToMarket: boolean;
    avgPriceMins: number;
}

/**
 * The ICEBERG_PARTS filter defines the maximum parts an iceberg order can have. The number of ICEBERG_PARTS is defined as CEIL(qty / icebergQty).
 */
interface ICEBERG_PARTS {
    filterType: 'ICEBERG_PARTS';
    limit: number;
}

/** The MARKET_LOT_SIZE filter defines the quantity (aka "lots" in auction terms) rules for MARKET orders on a symbol. */
interface MARKET_LOT_SIZE {
    filterType: 'MARKET_LOT_SIZE';
    /** defines the minimum quantity allowed. */
    minQty: string;
    /** defines the maximum quantity allowed. */
    maxQty: string;
    /** defines the intervals that a quantity can be increased/decreased by. */
    stepSize: string;
}

/** The MAX_NUM_ORDERS filter defines the maximum number of orders an account is allowed to have open on a symbol. Note that both "algo" orders and normal orders are counted for this filter. */
interface MAX_NUM_ORDERS {
    filterType: 'MAX_NUM_ORDERS';
    maxNumOrders: number;
}

/** The MAX_NUM_ALGO_ORDERS filter defines the maximum number of "algo" orders an account is allowed to have open on a symbol. "Algo" orders are STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders. */
interface MAX_NUM_ALGO_ORDERS {
    filterType: 'MAX_NUM_ALGO_ORDERS';
    maxNumAlgoOrders: number;
}

/** The MAX_NUM_ICEBERG_ORDERS filter defines the maximum number of ICEBERG orders an account is allowed to have open on a symbol. An ICEBERG order is any order where the icebergQty is > 0. */
interface MAX_NUM_ICEBERG_ORDERS {
    filterType: 'MAX_NUM_ICEBERG_ORDERS';
    maxNumIcebergOrders: number;
}

/** 
 * The MAX_POSITION filter defines the allowed maximum position an account can have on the base asset of a symbol. An account's position defined as the sum of the account's:
 * free balance of the base asset
 * locked balance of the base asset
 * sum of the qty of all open BUY orders
 * BUY orders will be rejected if the account's position is greater than the maximum position allowed.
*/
interface MAX_POSITION {
    filterType: 'MAX_POSITION';
    maxPosition: string;
}

type SymbolFilter = PRICE_FILTER | PERCENT_PRICE | LOT_SIZE | MIN_NOTIONAL | ICEBERG_PARTS | MARKET_LOT_SIZE | MAX_NUM_ORDERS | MAX_NUM_ALGO_ORDERS | MAX_NUM_ICEBERG_ORDERS | MAX_POSITION;

//Exchange Filters

/** The MAX_NUM_ORDERS filter defines the maximum number of orders an account is allowed to have open on the exchange. Note that both "algo" orders and normal orders are counted for this filter. */
interface EXCHANGE_MAX_NUM_ORDERS {
    filterType: 'EXCHANGE_MAX_NUM_ORDERS';
    maxNumOrders: number;
}

/** The MAX_ALGO_ORDERS filter defines the maximum number of "algo" orders an account is allowed to have open on the exchange. "Algo" orders are STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders. */
interface EXCHANGE_MAX_NUM_ALGO_ORDERS {
    filterType: 'EXCHANGE_MAX_NUM_ALGO_ORDERS';
    maxNumAlgoOrders: number;
}

type ExchangeFilter = EXCHANGE_MAX_NUM_ORDERS | EXCHANGE_MAX_NUM_ALGO_ORDERS;

type Filter = SymbolFilter | ExchangeFilter;