FROM node:22-alpine

WORKDIR /app

# Copy root and workspace package files
COPY package*.json ./
COPY matrix-holding-1/package*.json ./matrix-holding-1/
COPY matrix-holding-2/package*.json ./matrix-holding-2/
COPY matrix-holding-3/package*.json ./matrix-holding-3/

# Install dependencies for all apps
RUN npm install
RUN npm run install:all

# Copy all source files
COPY . .

# Build all 3 apps
RUN npm run build:v1
RUN npm run build:v2
RUN npm run build:v3

ENV PORT=8080
ENV NODE_ENV=production

EXPOSE 8080

CMD ["node", "server.js"]
