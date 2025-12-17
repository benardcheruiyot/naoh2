const PaymentService = require('./services/payment-service');

class MockMkopaji4000Service {
    constructor() {
        console.log('[Mock mkopaji-4000 Service] Initialized for testing');
    }

    async initiateSTKPush(phoneNumber, amount, accountReference, transactionDesc) {
        console.log('[Mock mkopaji-4000 Service] Simulating STK Push...');
        console.log('Phone:', phoneNumber, 'Amount:', amount);
        
        // Simulate a successful response
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network delay
        
        return {
            success: true,
            CheckoutRequestID: 'ws_CO_mock_' + Date.now(),
            MerchantRequestID: 'mock_merchant_' + Date.now(),
            ResponseDescription: 'Mock STK Push successful - Testing Mode',
            provider: 'mkopaji-4000'
        };
    }

    async checkTransactionStatus(checkoutRequestId) {
        console.log('[Mock mkopaji-4000 Service] Checking status for:', checkoutRequestId);
        
        return {
            success: true,
            data: {
                ResponseCode: '0',
                ResponseDescription: 'Mock transaction successful',
                ResultCode: '0',
                ResultDesc: 'The service request is processed successfully.'
            },
            provider: 'mkopaji-4000'
        };
    }

    isConfigured() {
        return true;
    }
}

module.exports = new MockMkopaji4000Service();