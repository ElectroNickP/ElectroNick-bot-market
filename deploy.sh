#!/bin/bash

echo "🚀 ElectroNick Bot Market - Deployment Script"
echo "=============================================="

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Not in a git repository. Please initialize git first."
    exit 1
fi

# Function to deploy to Vercel
deploy_vercel() {
    echo "📦 Deploying to Vercel..."
    if command -v vercel &> /dev/null; then
        vercel --prod
    else
        echo "⚠️  Vercel CLI not found. Installing..."
        npm install -g vercel
        vercel --prod
    fi
}

# Function to deploy to Netlify
deploy_netlify() {
    echo "📦 Building for Netlify..."
    npm run build:netlify
    echo "✅ Build completed. Upload the 'out' folder to Netlify."
}

# Function to deploy with Docker
deploy_docker() {
    echo "🐳 Building Docker image..."
    docker build -t electro-nick-bot-market .
    echo "🚀 Starting container..."
    docker run -d -p 3000:3000 --name bot-market electro-nick-bot-market
    echo "✅ Application is running at http://localhost:3000"
}

# Function to deploy to GitHub Pages
deploy_github_pages() {
    echo "📦 Building for GitHub Pages..."
    npm run build:netlify
    echo "✅ Build completed. Push to GitHub to trigger deployment."
}

# Main menu
echo ""
echo "Choose deployment option:"
echo "1) Vercel (Recommended)"
echo "2) Netlify"
echo "3) Docker"
echo "4) GitHub Pages"
echo "5) Exit"
echo ""

read -p "Enter your choice (1-5): " choice

case $choice in
    1)
        deploy_vercel
        ;;
    2)
        deploy_netlify
        ;;
    3)
        deploy_docker
        ;;
    4)
        deploy_github_pages
        ;;
    5)
        echo "👋 Goodbye!"
        exit 0
        ;;
    *)
        echo "❌ Invalid choice. Please run the script again."
        exit 1
        ;;
esac

echo ""
echo "🎉 Deployment completed!"
echo "Check the output above for your application URL."
