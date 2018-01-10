FROM node:9-slim

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install

CMD ["npm", "test"]
