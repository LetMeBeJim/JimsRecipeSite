FROM node:alpine
WORKDIR /usr/app/src
COPY package*.json ./
RUN npm install --production
CMD ["node", "server.js"]