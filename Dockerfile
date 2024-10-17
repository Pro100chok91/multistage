#Stage1: Build
FROM node:14-alpine AS build

LABEL maintainer="KirFad@mail.com"

RUN mkdir -p /home/app

WORKDIR /home/app

COPY package*.json ./

RUN npm install

COPY . .

#Stage2:runtime
FROM node:14-alpine AS runtime

RUN mkdir -p /home/app

WORKDIR /home/app

COPY --from=build /home/app . 

EXPOSE 3000

CMD ["node", "app.js"]
