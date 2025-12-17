// mkopaji-4000 config file for new project namespace
module.exports = {
    CONSUMER_KEY: process.env.MKOPAJI4000_CONSUMER_KEY || 'your_mkopaji4000_consumer_key',
    CONSUMER_SECRET: process.env.MKOPAJI4000_CONSUMER_SECRET || 'your_mkopaji4000_consumer_secret',
    BUSINESS_SHORT_CODE: process.env.MKOPAJI4000_BUSINESS_SHORTCODE || 'your_mkopaji4000_shortcode',
    PASSKEY: process.env.MKOPAJI4000_PASSKEY || 'your_mkopaji4000_passkey',
    CALLBACK_URL: process.env.MKOPAJI4000_CALLBACK_URL || 'https://yourdomain.com/api/mkopaji-4000-callback',
    TIMEOUT_URL: process.env.MKOPAJI4000_TIMEOUT_URL || 'https://yourdomain.com/api/mkopaji-4000-timeout',
    RESULT_URL: process.env.MKOPAJI4000_RESULT_URL || 'https://yourdomain.com/api/mkopaji-4000-result',
    INITIATOR_NAME: process.env.MKOPAJI4000_INITIATOR_NAME || 'mkopaji4000api',
    SECURITY_CREDENTIAL: process.env.MKOPAJI4000_SECURITY_CREDENTIAL || 'Mkopaji4000!*!',
    ENVIRONMENT: process.env.MKOPAJI4000_ENVIRONMENT || 'sandbox',
    BASE_URL: process.env.MKOPAJI4000_BASE_URL || 'https://sandbox.safaricom.co.ke',
    OAUTH_URL: process.env.MKOPAJI4000_OAUTH_URL || 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
    STK_PUSH_URL: process.env.MKOPAJI4000_STK_PUSH_URL || 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
    STK_PUSH_QUERY_URL: process.env.MKOPAJI4000_STK_PUSH_QUERY_URL || 'https://sandbox.safaricom.co.ke/mpesa/stkpushquery/v1/query',
    B2C_URL: process.env.MKOPAJI4000_B2C_URL || 'https://sandbox.safaricom.co.ke/mpesa/b2c/v1/paymentrequest',
};
