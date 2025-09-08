#!/bin/bash

# Get port from first arg, deafult to 3043
PORT=${1:-3043}

echo "Starting tenzies site on port $PORT..."
echo "Building and running with Docker..."

export PORT=$PORT
docker-compose up --build

echo "Visit http://localhost:$PORT"
