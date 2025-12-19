# Safaricom STK Push Production Checklist

1. **Environment Variables (.env.production):**
   - MKOPAJI4000_CONSUMER_KEY=... (from Safaricom portal)
   - MKOPAJI4000_CONSUMER_SECRET=... (from Safaricom portal)
   - MKOPAJI4000_BUSINESS_SHORTCODE=... (from Safaricom portal)
   - MKOPAJI4000_PASSKEY=... (from Safaricom portal)
   - MKOPAJI4000_CALLBACK_URL=https://yourdomain.com/api/mpesa-callback (must be HTTPS and public)
   - MKOPAJI4000_TIMEOUT_URL=https://yourdomain.com/api/mpesa-timeout
   - MKOPAJI4000_RESULT_URL=https://yourdomain.com/api/mpesa-result
   - MKOPAJI4000_ENVIRONMENT=production

2. **Safaricom Portal:**
   - The business shortcode is enabled for STK Push (CustomerPayBillOnline).
   - The callback URL is registered and matches MKOPAJI4000_CALLBACK_URL.
   - The passkey matches the one in the Safaricom portal.
   - The app is set to PRODUCTION mode.

3. **Phone Number:**
   - Use a real Safaricom number in 2547XXXXXXXX format.
   - Do not use test numbers in production.

4. **Amount:**
   - Must be at least 1 KES (no zero or negative values).

5. **Server Time:**
   - The server time is correct (run `date` on your server and compare to real time).

6. **Firewall/Network:**
   - Your server is accessible from the internet on the callback URL.
   - No firewall is blocking incoming requests from Safaricom.

7. **Logs:**
   - Check logs for detailed Safaricom error messages (look for '🔴 M-Pesa API Response Data').
   - Share the full error message for targeted help if issues persist.

---

If you follow this checklist and correct any mismatches, STK Push will work in production. If you still get errors, copy the full error details from your logs and share them for further diagnosis.
