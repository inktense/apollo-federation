FROM node:16-alpine

# Create app directory
WORKDIR /usr/app

COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

RUN npm run build
COPY schema.graphql ./dist/
WORKDIR ./dist/src

# EXPOSE 4002
CMD node server.js
