FROM node:14-alpine

WORKDIR /usr/app

COPY package*.json /usr/app

RUN npm install

# RUN npm install -g nodemon

COPY . /usr/app

EXPOSE 3000

CMD [ "npm", "start" ]