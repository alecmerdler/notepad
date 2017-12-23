FROM mhart/alpine-node:latest

RUN apk update && apk add python2

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN npm install
RUN npm run build

RUN rm -rf node_modules

EXPOSE 3000

CMD ["python2", "-m", "SimpleHTTPServer", "3000"]
