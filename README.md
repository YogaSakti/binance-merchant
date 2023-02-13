# Binance Merchant API
## What is the Binance Pay
Binance Pay is a contactless, borderless and secure cryptocurrency payment technology designed by Binance. Binance Pay allows Binance customer to pay and get paid in crypto from your friends and family worldwide.

## Merchant Acquiring (C2B) - Payment by QR code Scenarios
In this scenario, users are able to make payments by scanning QR Codes provided by Binance and shown by merchants.

1. Merchants cooperate with Binance to get different QR Codes for different products. Merchants display QR Codes for users to scan.
2. Users open Binance APP and scan QR Codes.
3. Users confirm payments by entering passcode or by clicking “confirm” button
4. Binance notify Merchants and users the status of payments.

<img alt="C2B Scenarios" src="https://developers.binance.com/docs/assets/images/BinancePay-Pay-QRCodeV2-c36f5c72e5745d2754be772ee7390aec.png" />

## Binance Pay API: Authentication
The Binance Pay API uses API keys to authenticate requests. You can view and manage your API keys in the [Binance Merchant Admin Portal](https://merchant.binance.com/en).

Your API keys carry many privileges, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth.

All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests without authentication will also fail.

Apply API identity key and API secret key#
Register Merchant Account at Binance
Login merchant account and create new API identity key/API secret key [Binance Merchant Admin Portal](https://merchant.binance.com/en).