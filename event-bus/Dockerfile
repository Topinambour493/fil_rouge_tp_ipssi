FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

EXPOSE 4005

ENTRYPOINT ["npm", "run", "start"]
