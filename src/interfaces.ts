
export type AccountBalanceType = "FUNDING_WALLET" | "SPOT_WALLET"

export type BizScene = "DIRECT_TRANSFER" | "CRYPTO_REWARDS" | "SETTLEMENT" | "REIMBURSEMENT" | "MERCHANT_PAYMENT" | "OTHERS"

export type ReceiveType = "PAY_ID" | "BINANCE_ID" | "EMAIL"

export type SupportPayCurrency = "CAKE" | "APE" | "LOKA" | "WOO" | "XNO" | "TRIBE" | "T" | "USDT" | "SHIB" | "GALA" | "BTTC" | "BEL" | "ARPA" | "LAZIO" | "MBOX" | "TRB" | "ZEN" | "STORJ" | "CTK" | "SKL" | "ENJ" | "YFI" | "YFII" | "SRM" | "CRV" | "BAT" | "BAL" | "KSM" | "AAVE" | "THETA" | "WAVES" | "OCEAN" | "KAVA" | "AXS" | "ICX" | "LRC" | "REN" | "TOMO" | "MKR" | "ONT" | "BLZ" | "SNX" | "RLC" | "FLM" | "KNC" | "CVC" | "IOTA" | "RSR" | "BAND" | "OMG" | "ZRX" | "RUNE" | "COMP" | "NEAR" | "HNT" | "RUB" | "NGN" | "UAH" | "IOST" | "AVAX" | "SUSHI" | "ALGO" | "SOL" | "FIRO" | "IDRT" | "AMP" | "PLA" | "JASMY" | "GRT" | "ALPHA" | "XEC" | "ACM" | "REQ" | "ADX" | "RIF" | "ROSE" | "RVN" | "AERGO" | "SAND" | "AGIX" | "SC" | "AGLD" | "SCRT" | "AION" | "SFP" | "AKRO" | "ALICE" | "ALPACA" | "AMB" | "ANKR" | "ANT" | "SNM" | "SNT" | "AR" | "ARDR" | "ARK" | "SSV" | "STEEM" | "ASR" | "STMX" | "AST" | "ATA" | "STPT" | "STX" | "ATM" | "SUN" | "AUCTION" | "AUDIO" | "AUTO" | "SYS" | "BADGER" | "BAKE" | "TCT" | "BAR" | "TFUEL" | "TLM" | "TORN" | "BEAM" | "TROY" | "BETA" | "TRU" | "TVK" | "BIFI" | "TWT" | "UFT" | "UMA" | "BNT" | "UNFI" | "BNX" | "UTK" | "BOND" | "VGX" | "VIB" | "BRD" | "VIDT" | "BTCST" | "VITE" | "BTG" | "BTS" | "VTHO" | "BURGER" | "WABI" | "WAN" | "C98" | "WAXP" | "WBTC" | "WIN" | "CELO" | "WING" | "CELR" | "WNXM" | "CFX" | "CHESS" | "WTC" | "CITY" | "CKB" | "CLV" | "XEM" | "COCOS" | "COS" | "COTI" | "YGG" | "CREAM" | "CTXC" | "CVP" | "DAR" | "DATA" | "DCR" | "DEGO" | "DENT" | "DEXE" | "DF" | "DGB" | "DIA" | "DNT" | "DOCK" | "DODO" | "DREP" | "DUSK" | "DYDX" | "ELF" | "ENS" | "EPS" | "ERN" | "EZ" | "FARM" | "FET" | "FIDA" | "FIO" | "FIS" | "FLOW" | "FOR" | "FORTH" | "FTT" | "FUN" | "FXS" | "GAS" | "GHST" | "GLM" | "GNO" | "GO" | "GTC" | "GTO" | "GXS" | "HARD" | "HIVE" | "HOT" | "ICP" | "IDEX" | "ILV" | "INJ" | "IQ" | "IRIS" | "JST" | "JUV" | "KEY" | "KLAY" | "KMD" | "KP3R" | "LINA" | "LIT" | "LOOM" | "LPT" | "LSK" | "LTO" | "LUNA" | "MASK" | "MBL" | "MDA" | "MDT" | "MDX" | "MFT" | "MINA" | "MIR" | "MITH" | "MLN" | "MOVR" | "MTL" | "NAS" | "NAV" | "NBS" | "NEBL" | "NKN" | "NMR" | "NULS" | "NXS" | "OAX" | "OG" | "OGN" | "ONG" | "ORN" | "OXT" | "PAXG" | "PERL" | "PERP" | "PHA" | "PHB" | "PIVX" | "PNT" | "POLS" | "POLY" | "POND" | "PORTO" | "POWR" | "PROM" | "PSG" | "PUNDIX" | "QI" | "QKC" | "QLC" | "QNT" | "QSP" | "QUICK" | "RAD" | "RAMP" | "RARE" | "RAY" | "REEF" | "REP" | "BIDR" | "DAI" | "CHR" | "SUPER" | "CHZ" | "SLP" | "TKO" | "XVG" | "MATIC" | "IOTX" | "FRONT" | "XVS" | "BCH" | "DOT" | "1INCH" | "BTC" | "FTM" | "ONE" | "ATOM" | "MANA" | "ETC" | "BNB" | "ETH" | "ZEC" | "NEO" | "ADA" | "VET" | "DOGE" | "SXP" | "HBAR" | "DASH" | "XRP" | "CTSI" | "TRX" | "AVA" | "STRAX" | "LTC" | "EGLD" | "GRS" | "UNI" | "XLM" | "LINK" | "WRX" | "QTUM" | "OM" | "XTZ" | "EOS" | "FIL" | "BUSD" | "XMR" | "ZIL" | "VAI"

export interface IKeys {
    apiKey: string
    secretKey: string
}

export interface CreateOrderParams {
    merchant?: {
        subMerchantId?: string;
    }
    env: {
        terminalType: "WAP" | "MINI_PROGRAM" | "OTHERS";
        osType?: "IOS" | "ANDROID";
        orderClientIp?: string;
        cookieId?: string;
    }
    merchantTradeNo: string;
    orderAmount: number;
    currency: "BUSD" | "USDT" | "MBOX";
    goods: {
        goodsType: "01" | "02",
        goodsCategory: "0000" | "1000" | "2000" | "3000" | "4000" | "5000" | "6000" | "7000" | "8000" | "9000" | "A000" | "B000" | "C000" | "D000" | "E000" | "F000" | "Z000"
        referenceGoodsId: string;
        goodsName: string;
        goodsDetail: string;
        goodsUnitAmount?: {
            currency: "BUSD" | "USDT" | "MBOX";
            amount: number;
        };
        goodsQuantity: string;
    }
    shipping?: {
        shippingName?: {
            firstName: string;
            middleName?: string;
            lastName: string;
        }
        shippingAddress?: {
            region: string;
            state?: string;
            city?: string;
            address?: string;
            zipCode?: string;
            shippingAddressType?: "01" | "02" | "03" | "04";
        }
        shippingPhoneNo?: string;
    }
    buyer?: {
        referenceBuyerId?: string;
        buyerName?: {
            firstName: string;
            middleName?: string;
            lastName: string;
        }
        buyerPhoneCountryCode?: string;
        buyerPhoneNo?: string;
        buyerEmail?: string;
        buyerRegistrationTime?: bigint;
        buyerBrowserLanguage?: string;
    }
    returnUrl?: string;
    cancelUrl?: string;
    orderExpireTime?: bigint;
    supportPayCurrency?: string;
    appId?: string;
    universalUrlAttach?: string;
    passThroughInfo?: string;
    webhookUrl?: string;
    directDebitContract?: {
        merchantContractCode: string;
        serviceName: string;
        scenarioCode: string;
        singleUpperLimit: number;
        periodic: boolean;
        cycleDebitFixed?: boolean;
        cycleType?: string;
        cycleValue?: number;
        firstDeductTime?: bigint;
        merchantAccountNo?: string;
        contractEndTime?: bigint;
    }
}

export interface QueryOrderParams {
    prepayId?: string;
    merchantTradeNo?: string;
}

export interface CloseOrderParams {
    merchantTradeNo?: string;
    prepayId?: string;
}

export interface RefundOrderParams {
    refundRequestId: string;
    prepayId: string;
    refundAmount: number;
    refundReason?: string;
    webhookUrl?: string;
}

export interface QueryRefundOrderParams {
    refundRequestId: string;
}

export interface TransferFundsParams {
    requestId: string;
    currency: SupportPayCurrency;
    amount: string;
    transferType: "TO_MAIN" | "TO_PAY"
}

export interface QueryTransferFundsParams {
    tranId: string;
}

export interface WalletBalanceParams {
    wallet: AccountBalanceType;
    currency?: SupportPayCurrency;
}

export interface WalletBalanceV2Params {
    wallet: AccountBalanceType;
    currency: SupportPayCurrency;
}

export interface BatchPayoutParams {
}

export interface QueryBatchPayoutParams {
}


// This API is only available for whitelisted merchants. If you need any help, you can contact to: merchant@binance.com

export interface SendQuoteParams {
    wallet: AccountBalanceType;
    fromAsset: SupportPayCurrency;
    toAsset: SupportPayCurrency;
    fromAmount: string;
    toAmount: string;
}

export interface ExecuteQuoteParams {
    quoteId: string;
}