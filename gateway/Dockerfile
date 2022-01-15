FROM node:16-alpine

# Create app directory
WORKDIR /usr/app

COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

RUN npm run build
COPY .env ./dist/
WORKDIR ./dist

EXPOSE 4000
CMD node gateway.js
