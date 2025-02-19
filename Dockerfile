# Stage 1: Build the Vite app
FROM node:18-alpine as builder
WORKDIR /app

# Copy package.json and package-lock.json first (for caching)
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire application
COPY . .

# Build the Vite project (Vite outputs to /app/dist)
RUN npm run build

# Debugging: List the contents of /app/dist
RUN ls -la /app/dist

# Stage 2: Serve with Nginx
FROM nginx:alpine
COPY --FROM=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
