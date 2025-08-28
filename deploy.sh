#!/bin/bash

echo "🚀 Starting deployment to Netlify..."

# Build the project
echo "📦 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Check if netlify CLI is installed
    if command -v netlify &> /dev/null; then
        echo "🌐 Deploying to Netlify..."
        netlify deploy --prod --dir=dist
    else
        echo "⚠️  Netlify CLI not found. Please install it with: npm install -g netlify-cli"
        echo "📋 Manual deployment steps:"
        echo "1. Go to https://app.netlify.com"
        echo "2. Drag and drop the 'dist' folder"
        echo "3. Wait for deployment to complete"
        echo "4. Go to Site Settings > Domain management"
        echo "5. Enable 'Force HTTPS' in the HTTPS section"
    fi
else
    echo "❌ Build failed!"
    exit 1
fi 