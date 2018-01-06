FROM node:6-slim
RUN apt-get update -y && apt-get install -y --no-install-recommends git build-essential python && rm -rf /var/cache/apk/*

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# RUN npm install utf-8-validate@1.1.0
# RUN npm install bufferutil@1.1.0
RUN npm install -g node-gyp

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

CMD [ "npm", "test" ]
