cd /var/www/html/kopa-mkopaji

# Ensure PM2 is installed
if ! command -v pm2 &> /dev/null; then
  npm install -g pm2
fi

echo "🚀 Starting deployment..."

# Install dependencies
npm ci --only=production

# Create logs directory
mkdir -p logs

# Copy production environment file to .env
if [ -f .env.production ]; then
  cp .env.production .env
  echo "✅ Copied .env.production to .env"
else
  echo "❌ .env.production file not found!"
  exit 1
fi

# Stop existing PM2 process (force)
pm2 delete kopa-mkopaji || true

# Start application with PM2 (force reload)
pm2 start ecosystem.config.js --env production --name kopa-mkopaji --update-env

# Save PM2 configuration
pm2 save

# Show PM2 status
pm2 status

# Health check
sleep 5
if curl -f http://localhost:4000/api/health > /dev/null 2>&1; then
  echo "✅ Health check passed"
else
  echo "⚠️  Health check failed - checking logs..."
  pm2 logs kopa-mkopaji --lines 20
fi
