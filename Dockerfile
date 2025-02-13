FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

FROM damianboni/vite

WORKDIR /app

COPY package*.json ./

COPY . .


RUN npm install


COPY . .

RUN vite build

FROM nginx:1.21.0-alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=0 /app/dist /usr/share/nginx/html

EXPOSE 80


CMD ["nginx", "-g", "daemon off;"]
