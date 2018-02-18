FROM nginx:alpine

WORKDIR /usr/src/app

RUN apk add --update nodejs

# Install dependencies
COPY package.json .
ADD package.json /usr/src/app/package.json
RUN npm install

# Build bundle
COPY . .
RUN npm run build
RUN rm -rf ./node_modules
RUN rm -rf ./app

RUN cp index.html /usr/share/nginx/html
RUN cp -r ./dist /usr/share/nginx/html
