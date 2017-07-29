FROM node:alpine

ENV HOME=/home/user

RUN adduser -D user

RUN npm install -g npm-check-updates

COPY package.json yarn.lock $HOME/app/
RUN chown -R user:user $HOME/*

USER user

WORKDIR $HOME/app/

RUN yarn install

COPY . $HOME/app/

USER user
