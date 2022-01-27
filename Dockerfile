FROM node:alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . ./
RUN npm run build

FROM node:alpine
RUN npm i -g serve
WORKDIR /app
COPY --from=build /app/build .
CMD ["serve", "-p", "3000", "-s", "."]