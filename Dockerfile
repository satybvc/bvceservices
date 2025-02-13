FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install


COPY . .

RUN vite build

FROM nginx:1.21.0-alpine

COPY --from=0 /app/build /usr/share/nginx/html

EXPOSE 80


CMD ["nginx", "-g", "daemon off;"]
