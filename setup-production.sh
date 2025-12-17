# Test Production Configuration
# This demonstrates how to configure production M-Pesa

# Copy your current .env to .env.sandbox for safekeeping
cp .env .env.sandbox

# Example production configuration
cat > .env.production << 'EOF'
# M-Pesa PRODUCTION Configuration
# Replace with your ACTUAL production credentials

# PRODUCTION Credentials (Get from Safaricom Daraja Portal)
MPESA_CONSUMER_KEY=your_production_consumer_key_here
MPESA_CONSUMER_SECRET=your_production_consumer_secret_here

# PRODUCTION Business Details
MPESA_BUSINESS_SHORTCODE=your_till_number_here
MPESA_PASSKEY=your_production_passkey_here

# PRODUCTION Callback URLs (Must be HTTPS)
MPESA_CALLBACK_URL=https://mkopaji.mkopaji.com/api/mpesa-callback
MPESA_TIMEOUT_URL=https://mkopaji.mkopaji.com/api/mpesa-timeout
MPESA_RESULT_URL=https://mkopaji.mkopaji.com/api/mpesa-result

# Environment
MPESA_ENVIRONMENT=production

# Server
PORT=4000
EOF

echo "✅ Created .env.production template"
echo ""
echo "🔧 TO SWITCH TO PRODUCTION:"
echo "1. Update .env.production with your real credentials"
echo "2. Run: cp .env.production .env"
echo "3. Start server: node backend/server.js"
echo ""
echo "🔧 TO SWITCH BACK TO SANDBOX:"
echo "1. Run: cp .env.sandbox .env"
echo "2. Start server: node backend/server.js"