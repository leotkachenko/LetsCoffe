FROM node:latest

RUN mkdir -p /usr/src
WORKDIR  /usr/src

COPY package.json ./
RUN yarn install

COPY . /usr/src

CMD ["node", "./src/index.js"]
