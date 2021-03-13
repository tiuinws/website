FROM alpine:latest 

MAINTAINER Abdur Rofi <@mrofisr>

RUN apk add yarn 

RUN mkdir -p /app 

ADD . /app

WORKDIR /app

RUN yarn install

EXPOSE 3000

CMD [ "yarn", "start" ]
