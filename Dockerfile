FROM node:carbon-alpine

RUN mkdir -p /app

RUN npm i npm@latest -g

WORKDIR /
COPY package.json package-lock.json* /
RUN npm install --silent
ENV PATH /node_modules/.bin:$PATH

WORKDIR /app
COPY . /app

CMD [ "node", "server/app.ts" ]
