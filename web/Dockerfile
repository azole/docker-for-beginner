FROM node:16.14-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .
COPY .env.docker .env

EXPOSE 3000

CMD ["node", "server.js"]
