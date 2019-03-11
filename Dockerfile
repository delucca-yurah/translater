FROM node:10-alpine as build

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

COPY src /usr/src/app/src
CMD ["npm", "start"]
