FROM node:14.14.0

ENV NODE_ENV=production

WORKDIR /app

COPY ["./app/package.json", "./app/package-lock.json*", "./"]

RUN npm install --production

COPY app .

CMD [ "node", "bot.js" ]