FROM node:latest

COPY . .

RUN npm install

ENTRYPOINT [ "/entrypoint.sh" ]