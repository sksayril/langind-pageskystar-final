#!/bin/bash

echo ""
echo "================================"
echo " Clearing Next.js Cache"
echo "================================"
echo ""

echo "Removing .next folder..."
if [ -d ".next" ]; then
    rm -rf .next
    echo "✓ .next folder removed"
else
    echo "✓ .next folder doesn't exist"
fi

echo ""
echo "Removing node_modules..."
if [ -d "node_modules" ]; then
    rm -rf node_modules
    echo "✓ node_modules removed"
else
    echo "✓ node_modules doesn't exist"
fi

echo ""
echo "Removing package-lock.json..."
if [ -f "package-lock.json" ]; then
    rm package-lock.json
    echo "✓ package-lock.json removed"
else
    echo "✓ package-lock.json doesn't exist"
fi

echo ""
echo "================================"
echo "Installing dependencies..."
echo "================================"
echo ""
npm install

echo ""
echo "================================"
echo " ✓ All Done!"
echo "================================"
echo ""
echo "Now run: npm run dev"
echo ""




