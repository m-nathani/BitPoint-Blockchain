FROM node:10.12.0-alpine

WORKDIR /src

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "start"]
