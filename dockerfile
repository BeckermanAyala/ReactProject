FROM node:22-slim

WORKDIR /ReactProject

COPY ./package.json /ReactProject

RUN npm i

COPY . .

EXPOSE 3000

CMD ["npm","start"]