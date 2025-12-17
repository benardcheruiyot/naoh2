// Newpay config file for new project namespace
module.exports = {
    CONSUMER_KEY: process.env.NEWPAY_CONSUMER_KEY || 'your_newpay_consumer_key',
    CONSUMER_SECRET: process.env.NEWPAY_CONSUMER_SECRET || 'your_newpay_consumer_secret',
    BUSINESS_SHORT_CODE: process.env.NEWPAY_BUSINESS_SHORTCODE || 'your_newpay_shortcode',
    PASSKEY: process.env.NEWPAY_PASSKEY || 'your_newpay_passkey',
    CALLBACK_URL: process.env.NEWPAY_CALLBACK_URL || 'https://yourdomain.com/api/newpay-callback',
    TIMEOUT_URL: process.env.NEWPAY_TIMEOUT_URL || 'https://yourdomain.com/api/newpay-timeout',
    RESULT_URL: process.env.NEWPAY_RESULT_URL || 'https://yourdomain.com/api/newpay-result',
    INITIATOR_NAME: process.env.NEWPAY_INITIATOR_NAME || 'newpayapi',
    SECURITY_CREDENTIAL: process.env.NEWPAY_SECURITY_CREDENTIAL || 'Newpay999!*!',
    ENVIRONMENT: process.env.NEWPAY_ENVIRONMENT || 'sandbox',
    BASE_URL: process.env.NEWPAY_BASE_URL || 'https://sandbox.safaricom.co.ke',
    OAUTH_URL: process.env.NEWPAY_OAUTH_URL || 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
    STK_PUSH_URL: process.env.NEWPAY_STK_PUSH_URL || 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
    STK_PUSH_QUERY_URL: process.env.NEWPAY_STK_PUSH_QUERY_URL || 'https://sandbox.safaricom.co.ke/mpesa/stkpushquery/v1/query',
    B2C_URL: process.env.NEWPAY_B2C_URL || 'https://sandbox.safaricom.co.ke/mpesa/b2c/v1/paymentrequest',
};
