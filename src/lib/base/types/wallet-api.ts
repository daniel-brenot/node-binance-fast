// Parameters

type GetAllCoinsParams = {
    recvWindow?: number;
    timestamp: number;
}

type GetSystemStatusResponse = {
    status: 0 | 1;
    msg: 'normal' | 'system maintenance';
};

type GetAllCoinsResponse = {
    coin: string;
    depositAllEnable: boolean;
    free: string;
    freeze: string;
    ipoable: string;
    ipoing: string;
    isLegalMoney: boolean;
    locked: string;
    name: string;
    networkList: {
        addressRegex: string;
        coin: string;
        depositDesc: string;
        depositEnable: boolean;
        isDefault: boolean;    
        memoRegex: string;
        minConfirm: number;
        name: string;
        network: string;
        resetAddressStatus: boolean;
        specialTips: string;
        unLockConfirm: number;
        withdrawDesc: string;
        withdrawEnable: boolean;
        withdrawFee: string;
        withdrawMin: string;
    }[];
    storage: string;
    trading: boolean;
    withdrawAllEnabled: boolean;
    withdrawing: string;
};

type GetDailyAccountSnapshotResponse = {

};