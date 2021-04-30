type SymbolStatus = 'PRE_TRADING' | 'TRADING' | 'POST_TRADING' | 'END_OF_DAY' | 'HALT' | 'AUCTION_MATCH' | 'BREAK';

type SymbolType = 'SPOT';

type OrderStatus = 'NEW' | 'PARTIALLY_FILLED' | 'FILLED' | 'FILLED' | 'CANCELLED' | 'PENDING_CANCEL' | 'REJECTED' | 'EXPIRED';

type OCOStatus = 'RESPONSE' | 'EXEC_STARTED' | 'ALL_DONE';

type OCOOrderStatus = 'EXECUTING' | 'ALL_DONE' | 'REJECT';

type ContingencyType = 'OCO';

type LIMIT_ORDER = 'LIMIT';

type MARKET_ORDER = 'MARKET';

type STOP_LOSS_ORDER = 'STOP_LOSS';

type STOP_LOSS_LIMIT_ORDER = 'STOP_LOSS_LIMIT';

type TAKE_PROFIT_ORDER = 'TAKE_PROFIT';

type TAKE_PROFIT_LIMIT_ORDER = 'TAKE_PROFIT_LIMIT';

type LIMIT_MAKER_ORDER = 'LIMIT_MAKER';

type OrderType = LIMIT_ORDER | MARKET_ORDER | STOP_LOSS_ORDER | STOP_LOSS_LIMIT_ORDER | TAKE_PROFIT_ORDER | TAKE_PROFIT_LIMIT_ORDER | LIMIT_MAKER_ORDER;

type OrderResponseType = 'ACK' | 'RESULT' | 'FULL';

type OrderSide = 'BUY' | 'SELL';

type PermissionType = 'SPOT' | 'MARGIN';

/**
 * This sets how long an order will be active before expiration.
 * 
 * Good Til Canceled:
 * An order will be on the book unless the order is canceled.
 * 
 * Immediate Or Cancel:
 * An order will try to fill the order as much as it can before the order expires.
 * 
 * Fill or Kill:
 * An order will expire if the full order cannot be filled upon execution.
 */
type TimeInForce = 'GTC' | 'IOC' | 'FOK';

type Limit = 5 | 10 | 20 | 50 | 100 | 500 | 1000 | 5000;

/** m -> minutes; h -> hours; d -> days; w -> weeks; M -> months */
type ChartInterval = '1m' | '3m' | '5m' | '15m' | '30m' | '1h' | '2h' | '4h' | '6h' | '8h' | '12h' | '1d' | '3d' | '1w' | '1M';

type REQUEST_WEIGHT = {
    rateLimitType: 'REQUEST_WEIGHT';
    interval: 'MINUTE';
    intervalNum: 1;
    limit: 1200;
};

type ORDERS = {
    rateLimitType: 'ORDERS';
    interval: 'SECOND';
    intervalNum: 1;
    limit: 10;
};

type RAW_REQUESTS = {
    rateLimitType: 'RAW_REQUESTS';
    interval: 'MINUTE';
    intervalNum: 5;
    limit: 500;
};

type RateLimitType = REQUEST_WEIGHT | ORDERS | RAW_REQUESTS;