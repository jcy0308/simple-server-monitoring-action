FROM node:18-alpine

COPY src /src
COPY entrypoint.sh /entrypoint.sh
COPY index.js /index.js
COPY package.json /package.json
COPY package-lock.json /package-lock.json

RUN npm install

ENTRYPOINT [ "/entrypoint.sh" ]