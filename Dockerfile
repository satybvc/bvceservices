# Stage 1: Build the Vite app
FROM node:18-alpine as builder
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Vite project (output goes to /app/dist)
RUN npm run build

# Debugging: List the contents of /app/dist
RUN ls -la /app/dist

# Stage 2: Serve with Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 for web access
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
