## Table of contents

### Interfaces

- [BaseOrderParameters](../../interfaces/Interface:-BaseOrderParameters)
- [CancelOpenOrdersParameters](../../interfaces/Interface:-CancelOpenOrdersParameters)
- [LimitMakerOrderParameters](../../interfaces/Interface:-LimitMakerOrderParameters)
- [LimitOrderParameters](../../interfaces/Interface:-LimitOrderParameters)
- [QueryAggTradesParameters](../../interfaces/Interface:-QueryAggTradesParameters)
- [QueryBookTickerParameters](../../interfaces/Interface:-QueryBookTickerParameters)
- [QueryDepthParameters](../../interfaces/Interface:-QueryDepthParameters)
- [QueryHistoricalTradesParameters](../../interfaces/Interface:-QueryHistoricalTradesParameters)
- [QueryKlinesParameters](../../interfaces/Interface:-QueryKlinesParameters)
- [QueryOpenOrdersParameters](../../interfaces/Interface:-QueryOpenOrdersParameters)
- [QueryTicker24HrParameters](../../interfaces/Interface:-QueryTicker24HrParameters)
- [QueryTickerPriceParameters](../../interfaces/Interface:-QueryTickerPriceParameters)
- [QueryTradesParameters](../../interfaces/Interface:-QueryTradesParameters)
- [StopLossLimitOrderParameters](../../interfaces/Interface:-StopLossLimitOrderParameters)
- [StopLossOrderParameters](../../interfaces/Interface:-StopLossOrderParameters)
- [TakeProfitLimitOrderParameters](../../interfaces/Interface:-TakeProfitLimitOrderParameters)
- [TakeProfitOrderParameters](../../interfaces/Interface:-TakeProfitOrderParameters)

### Type aliases

- [CancelOCOOrderParameters](./parameters#cancelocoorderparameters)
- [CancelOrderParameters](./parameters#cancelorderparameters)
- [CancelUserDataStreamParameters](./parameters#canceluserdatastreamparameters)
- [CreateOCOOrderParameters](./parameters#createocoorderparameters)
- [CreateOrderParameters](./parameters#createorderparameters)
- [KeepAliveUserDataStreamParameters](./parameters#keepaliveuserdatastreamparameters)
- [MarketOrderParameters](./parameters#marketorderparameters)
- [QueryAccountInformationParameters](./parameters#queryaccountinformationparameters)
- [QueryAllOCOOrdersParameters](./parameters#queryallocoordersparameters)
- [QueryAllOrdersParameters](./parameters#queryallordersparameters)
- [QueryMyTradesParameters](./parameters#querymytradesparameters)
- [QueryOCOOrderParameters](./parameters#queryocoorderparameters)
- [QueryOpenOCOOrdersParameters](./parameters#queryopenocoordersparameters)
- [QueryOrderParameters](./parameters#queryorderparameters)
- [TestOrderParameters](./parameters#testorderparameters)

## Type aliases

### CancelOCOOrderParameters

Ƭ **CancelOCOOrderParameters**: { `newClientOrderId?`: *string* ; `recvWindow?`: *number* ; `symbol`: *string* ; `timestamp`: *number*  } & { `listClientOrderId`: *string* ; `orderListId?`: *number*  } \| { `listClientOrderId?`: *string* ; `orderListId`: *number*  }

Defined in: types/parameters.ts:179

___

### CancelOrderParameters

Ƭ **CancelOrderParameters**: { `orderId?`: *number* ; `recvWindow?`: *number* ; `symbol`: *string* ; `timestamp`: *number*  } & { `newClientOrderId?`: *string* ; `origClientOrderId`: *string*  } \| { `newClientOrderId`: *string* ; `origClientOrderId?`: *string*  }

Defined in: types/parameters.ts:124

___

### CancelUserDataStreamParameters

Ƭ **CancelUserDataStreamParameters**: *object*

#### Type declaration:

Defined in: types/parameters.ts:230

___

### CreateOCOOrderParameters

Ƭ **CreateOCOOrderParameters**: *object*

#### Type declaration:

| Name | Type |
| :------ | :------ |
| `limitClientOrderId?` | *string* |
| `limitIcebergQty?` | *string* |
| `listClientOrderId?` | *string* |
| `newOrderRespType?` | [*OrderResponseType*](./enums#orderresponsetype) |
| `price` | *string* |
| `quantity` | *string* |
| `recvWindow` | *number* |
| `side` | [*OrderSide*](./enums#orderside) |
| `stopClientOrderId?` | *string* |
| `stopIcebergQty?` | *string* |
| `stopLimitPrice?` | *string* |
| `stopLimitTimeInForce?` | [*TimeInForce*](./enums#timeinforce) |
| `stopPrice` | *string* |
| `symbol` | *string* |
| `timestamp` | *number* |

Defined in: types/parameters.ts:161

___

### CreateOrderParameters

Ƭ **CreateOrderParameters**: [*LimitOrderParameters*](../../interfaces/Interface:-LimitOrderParameters) \| [*MarketOrderParameters*](./parameters#marketorderparameters) \| [*StopLossOrderParameters*](../../interfaces/Interface:-StopLossOrderParameters) \| [*StopLossLimitOrderParameters*](../../interfaces/Interface:-StopLossLimitOrderParameters) \| [*TakeProfitOrderParameters*](../../interfaces/Interface:-TakeProfitOrderParameters) \| [*TakeProfitLimitOrderParameters*](../../interfaces/Interface:-TakeProfitLimitOrderParameters) \| [*LimitMakerOrderParameters*](../../interfaces/Interface:-LimitMakerOrderParameters)

Defined in: types/parameters.ts:106

___

### KeepAliveUserDataStreamParameters

Ƭ **KeepAliveUserDataStreamParameters**: *object*

#### Type declaration:

Defined in: types/parameters.ts:226

___

### MarketOrderParameters

Ƭ **MarketOrderParameters**: { `quantity`: *string* ; `type`: [*MARKET\_ORDER*](./enums#market_order)  } & [*BaseOrderParameters*](../../interfaces/Interface:-BaseOrderParameters) \| { `quoteOrderQty`: *string* ; `type`: [*MARKET\_ORDER*](./enums#market_order)  } & [*BaseOrderParameters*](../../interfaces/Interface:-BaseOrderParameters)

Defined in: types/parameters.ts:61

___

### QueryAccountInformationParameters

Ƭ **QueryAccountInformationParameters**: *object*

#### Type declaration:

| Name | Type |
| :------ | :------ |
| `recvWindow?` | *number* |
| `timestamp` | *number* |

Defined in: types/parameters.ts:217

___

### QueryAllOCOOrdersParameters

Ƭ **QueryAllOCOOrdersParameters**: *object*

#### Type declaration:

| Name | Type |
| :------ | :------ |
| `endTime?` | *number* |
| `fromId?` | *number* |
| `limit?` | *Omit*<[*Limit*](./enums#limit), ``5000``\> |
| `recvWindow?` | *number* |
| `startTime?` | *number* |
| `timestamp` | *number* |

Defined in: types/parameters.ts:203

___

### QueryAllOrdersParameters

Ƭ **QueryAllOrdersParameters**: *object*

#### Type declaration:

| Name | Type |
| :------ | :------ |
| `endTime` | *number* |
| `limit` | *number* |
| `orderId` | *number* |
| `recvWindow` | *number* |
| `startTime` | *number* |
| `symbol?` | *string* |
| `timestamp` | *number* |

Defined in: types/parameters.ts:151

___

### QueryMyTradesParameters

Ƭ **QueryMyTradesParameters**: *object*

#### Type declaration:

Defined in: types/parameters.ts:222

___

### QueryOCOOrderParameters

Ƭ **QueryOCOOrderParameters**: { `recvWindow`: *number* ; `timestamp`: *number*  } & { `orderListId`: *number* ; `origClientOrderId?`: *string*  } \| { `orderListId?`: *number* ; `origClientOrderId`: *string*  }

Defined in: types/parameters.ts:192

___

### QueryOpenOCOOrdersParameters

Ƭ **QueryOpenOCOOrdersParameters**: *object*

#### Type declaration:

| Name | Type |
| :------ | :------ |
| `recvWindow?` | *number* |
| `timestamp` | *number* |

Defined in: types/parameters.ts:212

___

### QueryOrderParameters

Ƭ **QueryOrderParameters**: { `recvWindow?`: *number* ; `symbol`: *string* ; `timestamp`: *number*  } & { `newClientOrderId?`: *string* ; `origClientOrderId`: *string*  } \| { `newClientOrderId`: *string* ; `origClientOrderId?`: *string*  }

Defined in: types/parameters.ts:110

___

### TestOrderParameters

Ƭ **TestOrderParameters**: [*CreateOrderParameters*](./parameters#createorderparameters)

Defined in: types/parameters.ts:108
