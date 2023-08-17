FROM node:latest

COPY src /src
COPY entrypoint.sh /entrypoint.sh
COPY index.js /index.js
COPY package.json /package.json

RUN npm install

ENTRYPOINT [ "/entrypoint.sh" ]