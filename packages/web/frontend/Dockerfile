FROM node:23.5.0-alpine

WORKDIR /app

RUN corepack enable

COPY . .

RUN yarn install
RUN yarn frontend:build