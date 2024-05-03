FROM node:21-alpine3.18


ADD . /app
WORKDIR /app
RUN yarn install
RUN yarn add vite
CMD ["yarn", "dev", "--host"]