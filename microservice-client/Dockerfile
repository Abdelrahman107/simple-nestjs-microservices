FROM node:13
WORKDIR /client/src/app

COPY package*.json  tsconfig*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000
CMD [ "node", "dist/main.js" ]
