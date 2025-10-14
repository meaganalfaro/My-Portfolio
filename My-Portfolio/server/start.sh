#!/bin/bash

# Server Start Script
# This script should be run on your production server

echo "🚀 Starting Portfolio API Server..."

# Check if .env exists
if [ ! -f .env ]; then
    echo "❌ Error: .env file not found!"
    echo "Create a .env file with:"
    echo "  RESEND_API_KEY=your_key"
    echo "  RESEND_FROM=contact@malfaro.com"
    echo "  CONTACT_TO=your_email@example.com"
    exit 1
fi

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install --production
fi

# Start with PM2
echo "▶️  Starting server with PM2..."
pm2 start server.mjs --name "portfolio-api"
pm2 save

echo "✅ Server started successfully!"
echo ""
echo "Useful commands:"
echo "  pm2 status              - Check server status"
echo "  pm2 logs portfolio-api  - View logs"
echo "  pm2 restart portfolio-api - Restart server"
echo "  pm2 stop portfolio-api  - Stop server"


