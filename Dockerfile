FROM node:17-alpine3.14

WORKDIR /app

RUN npm i -g npm@8.11.0
COPY package*.json ./
COPY weather.js ./

RUN npm install

CMD [ "node", "weather.js" ]