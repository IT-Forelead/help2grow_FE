# stage as builder
FROM node:lts-slim as builder

WORKDIR /help2growfe

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

FROM nginx as production-build
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /help2growfe/dist /usr/share/nginx/html

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]