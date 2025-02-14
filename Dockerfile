# Maksad - Custom Docker Image bnana hai todo ui ki
FROM node:16.20.2 AS tondumal
WORKDIR /dhondhu
COPY . .
RUN npm install  
RUN npm run build

FROM nginx:alpine
COPY --from=tondumal /dhondhu/build/ /usr/share/nginx/html/

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD curl -f http://http://20.199.81.100/health || exit 1