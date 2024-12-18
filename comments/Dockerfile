FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

EXPOSE 4001

ENTRYPOINT ["npm", "run", "start"]
