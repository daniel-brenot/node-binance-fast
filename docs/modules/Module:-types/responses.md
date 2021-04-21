## Table of contents

### Interfaces

- [AveragePriceResponse](../../interfaces/Interface:-AveragePriceResponse)
- [CancelOrderResponse](../../interfaces/Interface:-CancelOrderResponse)
- [OrderACKResponse](../../interfaces/Interface:-OrderACKResponse)
- [OrderFULLResponse](../../interfaces/Interface:-OrderFULLResponse)
- [OrderRESULTResponse](../../interfaces/Interface:-OrderRESULTResponse)
- [QueryBookTickerResponse](../../interfaces/Interface:-QueryBookTickerResponse)
- [QueryDepthResponse](../../interfaces/Interface:-QueryDepthResponse)
- [QueryExchangeInfoResponse](../../interfaces/Interface:-QueryExchangeInfoResponse)
- [QueryOrderResponse](../../interfaces/Interface:-QueryOrderResponse)
- [QueryTicker24HrResponse](../../interfaces/Interface:-QueryTicker24HrResponse)
- [QueryTickerPriceResponse](../../interfaces/Interface:-QueryTickerPriceResponse)
- [QueryTimeResponse](../../interfaces/Interface:-QueryTimeResponse)

### Type aliases

- [CancelOCOOrderResponse](./responses#cancelocoorderresponse)
- [CancelOpenOrdersResponse](./responses#cancelopenordersresponse)
- [CreateOCOOrderResponse](./responses#createocoorderresponse)
- [CreateUserDataStreamResponse](./responses#createuserdatastreamresponse)
- [OrderResponse](./responses#orderresponse)
- [QueryAccountInformationResponse](./responses#queryaccountinformationresponse)
- [QueryAggTradesResponse](./responses#queryaggtradesresponse)
- [QueryAllOCOOrdersResponse](./responses#queryallocoordersresponse)
- [QueryAllOrdersResponse](./responses#queryallordersresponse)
- [QueryHistoricalTradesResponse](./responses#queryhistoricaltradesresponse)
- [QueryKlinesResponse](./responses#queryklinesresponse)
- [QueryMyTradesResponse](./responses#querymytradesresponse)
- [QueryOCOOrderResponse](./responses#queryocoorderresponse)
- [QueryOpenOCOOrdersResponse](./responses#queryopenocoordersresponse)
- [QueryOpenOrdersResponse](./responses#queryopenordersresponse)
- [QueryTradesResponse](./responses#querytradesresponse)

## Type aliases

### CancelOCOOrderResponse

Ƭ **CancelOCOOrderResponse**: *object*

#### Type declaration:

Defined in: types/responses.ts:267

___

### CancelOpenOrdersResponse

Ƭ **CancelOpenOrdersResponse**: { `clientOrderId`: *string* ; `cummulativeQuoteQty`: *string* ; `executedQty`: *string* ; `orderId`: *number* ; `orderListId`: *number* ; `orderReports`: { `clientOrderId`: *string* ; `cummulativeQuoteQty`: *string* ; `executedQty`: *string* ; `icebergQty`: *string* ; `orderId`: *number* ; `orderListId`: *string* ; `origClientOrderId`: *string* ; `origQty`: *string* ; `price`: *string* ; `side`: [*OrderSide*](./enums#orderside) ; `status`: [*OrderStatus*](./enums#orderstatus) ; `stopPrice`: *string* ; `symbol`: *string* ; `timeInForce`: [*TimeInForce*](./enums#timeinforce) ; `type`: [*OrderType*](./enums#ordertype)  }[] ; `orders`: { `clientOrderId`: *string* ; `orderId`: *number* ; `symbol`: *string*  }[] ; `origClientOrderId`: *string* ; `origQty`: *string* ; `price`: *string* ; `side`: [*OrderSide*](./enums#orderside) ; `status`: [*OrderStatus*](./enums#orderstatus) ; `symbol`: *string* ; `timeInForce`: [*TimeInForce*](./enums#timeinforce) ; `type`: [*OrderType*](./enums#ordertype)  }[]

Defined in: types/responses.ts:169

___

### CreateOCOOrderResponse

Ƭ **CreateOCOOrderResponse**: *object*

#### Type declaration:

Defined in: types/responses.ts:263

___

### CreateUserDataStreamResponse

Ƭ **CreateUserDataStreamResponse**: *object*

#### Type declaration:

Defined in: types/responses.ts:287

___

### OrderResponse

Ƭ **OrderResponse**: [*OrderACKResponse*](../../interfaces/Interface:-OrderACKResponse) \| [*OrderRESULTResponse*](../../interfaces/Interface:-OrderRESULTResponse) \| [*OrderFULLResponse*](../../interfaces/Interface:-OrderFULLResponse)

Defined in: types/responses.ts:137

___

### QueryAccountInformationResponse

Ƭ **QueryAccountInformationResponse**: *object*

#### Type declaration:

Defined in: types/responses.ts:279

___

### QueryAggTradesResponse

Ƭ **QueryAggTradesResponse**: { `M`: *boolean* ; `T`: *number* ; `a`: *number* ; `f`: *number* ; `l`: *number* ; `m`: *boolean* ; `p`: *string* ; `q`: *string*  }[]

Defined in: types/responses.ts:31

___

### QueryAllOCOOrdersResponse

Ƭ **QueryAllOCOOrdersResponse**: *object*

#### Type declaration:

Defined in: types/responses.ts:271

___

### QueryAllOrdersResponse

Ƭ **QueryAllOrdersResponse**: *object*

#### Type declaration:

| Name | Type |
| :------ | :------ |
| `clientOrderId` | *number* |
| `cummulativeQuoteQty` | *string* |
| `executedQty` | *string* |
| `icebergQty` | *string* |
| `isWorking` | *boolean* |
| `orderId` | *number* |
| `orderListId` | *number* |
| `origQty` | *string* |
| `origQuoteOrderQty` | *string* |
| `price` | *string* |
| `side` | [*OrderSide*](./enums#orderside) |
| `status` | [*OrderStatus*](./enums#orderstatus) |
| `stopPrice` | *string* |
| `symbol` | *string* |
| `time` | *number* |
| `timeInForce` | [*TimeInForce*](./enums#timeinforce) |
| `type` | [*OrderType*](./enums#ordertype) |
| `updateTime` | *number* |

Defined in: types/responses.ts:228

___

### QueryHistoricalTradesResponse

Ƭ **QueryHistoricalTradesResponse**: [*QueryTradesResponse*](./responses#querytradesresponse)[]

Defined in: types/responses.ts:29

___

### QueryKlinesResponse

Ƭ **QueryKlinesResponse**: [*number*, *string*, *string*, *string*, *string*, *string*, *number*, *string*, *number*, *string*, *string*, *string*][]

Defined in: types/responses.ts:50

___

### QueryMyTradesResponse

Ƭ **QueryMyTradesResponse**: *object*

#### Type declaration:

Defined in: types/responses.ts:283

___

### QueryOCOOrderResponse

Ƭ **QueryOCOOrderResponse**: { `recvWindow?`: *number* ; `timestamp`: *number*  } & { `orderListId`: *number* ; `origClientOrderId?`: *string*  } \| { `orderListId?`: *number* ; `origClientOrderId`: *string*  }

Defined in: types/responses.ts:249

___

### QueryOpenOCOOrdersResponse

Ƭ **QueryOpenOCOOrdersResponse**: *object*

#### Type declaration:

Defined in: types/responses.ts:275

___

### QueryOpenOrdersResponse

Ƭ **QueryOpenOrdersResponse**: { `clientOrderId`: *string* ; `cummulativeQuoteQty`: *string* ; `executedQty`: *string* ; `icebergQty`: *string* ; `isWorking`: *boolean* ; `orderId`: *number* ; `orderListId`: *number* ; `origQty`: *string* ; `origQuoteOrderQty`: *string* ; `price`: *string* ; `side`: [*OrderSide*](./enums#orderside) ; `status`: [*OrderStatus*](./enums#orderstatus) ; `stopPrice`: *string* ; `symbol`: *string* ; `time`: *number* ; `timeInForce`: [*TimeInForce*](./enums#timeinforce) ; `type`: [*OrderType*](./enums#ordertype) ; `updateTime`: *string*  }[]

Defined in: types/responses.ts:207

___

### QueryTradesResponse

Ƭ **QueryTradesResponse**: { `id`: *number* ; `isBestMatch`: *boolean* ; `isBuyerMaker`: *boolean* ; `price`: *string* ; `qty`: *string* ; `quoteQty`: *string* ; `time`: *number*  }[]

Defined in: types/responses.ts:19
