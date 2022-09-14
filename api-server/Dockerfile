FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# TypeScript 컴파일
RUN npm install typescript -g
RUN tsc

EXPOSE 8080
CMD [ "npm", "run", "start" ]