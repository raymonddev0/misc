FROM node:9.4.0-alpine
COPY server.js .
COPY package.json .
RUN npm install &&\
    apk update &&\
    apk upgrade
EXPOSE  8080
CMD node server.js