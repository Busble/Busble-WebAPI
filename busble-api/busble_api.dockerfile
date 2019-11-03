FROM node:12.13-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . ./

ENV NODE_ENV development

ENV PORT 4000

EXPOSE 4000

CMD [ "npm", "start" ]