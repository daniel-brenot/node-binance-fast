[types/filters](../modules/Module:-types/filters).MAX_POSITION

The MAX_POSITION filter defines the allowed maximum position an account can have on the base asset of a symbol. An account's position defined as the sum of the account's:
free balance of the base asset
locked balance of the base asset
sum of the qty of all open BUY orders
BUY orders will be rejected if the account's position is greater than the maximum position allowed.

## Table of contents

### Properties

- [filterType](./Interface:-MAX_POSITION#filtertype)
- [maxPosition](./Interface:-MAX_POSITION#maxposition)

## Properties

### filterType

• **filterType**: ``"MAX_POSITION"``

Defined in: types/filters.ts:90

___

### maxPosition

• **maxPosition**: *string*

Defined in: types/filters.ts:91
