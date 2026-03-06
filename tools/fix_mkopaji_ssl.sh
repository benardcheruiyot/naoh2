#!/bin/bash
# Automated SSL fix for mkopaji.mkopaji.com (Nginx)
# This script will:
# 1. Install Certbot if not present
# 2. Obtain a new certificate for mkopaji.mkopaji.com
# 3. Update Nginx config
# 4. Reload Nginx

DOMAIN="mkopaji.mkopaji.com"
EMAIL="your-email@example.com" # Change to your email

# Install Certbot if not installed
if ! command -v certbot >/dev/null; then
    echo "Installing Certbot..."
    sudo apt-get update
    sudo apt-get install -y certbot python3-certbot-nginx
fi

# Obtain certificate
sudo certbot --nginx -d "$DOMAIN" --email "$EMAIL" --agree-tos --non-interactive --redirect

# Reload Nginx
sudo systemctl reload nginx

echo "SSL certificate for $DOMAIN updated and nginx reloaded."
