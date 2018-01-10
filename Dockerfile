FROM node:9-slim
RUN apt-get update -y && apt-get install -y --no-install-recommends git build-essential python && rm -rf /var/cache/apk/*

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install -g node-gyp

# Install app dependencies
COPY out/* /usr/src/app/

RUN npm install

COPY out/src /usr/src/app/src

COPY out/test /usr/src/app/test
COPY out/package.json /usr/src/app/package.json

RUN find .

RUN ./node_modules/mocha/bin/mocha --recursive

CMD [ "npm", "test" ]
