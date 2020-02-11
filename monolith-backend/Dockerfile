FROM node:alpine

WORKDIR /usr/app/

RUN apk --no-cache add --virtual builds-deps build-base python

COPY . /usr/app/

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

RUN yarn &&\
  yarn global add nodemon &&\
  yarn cache clean

CMD /wait && nodemon -V --watch 'src/**/*.ts' --exec 'ts-node' src/index.ts