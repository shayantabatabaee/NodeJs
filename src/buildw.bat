@echo off 
title Building Process

echo Fetching development dependencies

set NODE_ENV=development
npm install & npx gulp --releaseVersion %2

echo Building successfully finished.
