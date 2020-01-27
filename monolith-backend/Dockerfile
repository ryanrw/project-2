FROM node:alpine

ENV HOSTNAME 0.0.0.0
ENV PORT 4000

WORKDIR /usr/app/

RUN apk --no-cache add --virtual builds-deps build-base python

COPY . /usr/app/

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

RUN yarn &&\
  yarn global add nodemon &&\
  yarn cache clean

EXPOSE 4000

CMD /wait && yarn start