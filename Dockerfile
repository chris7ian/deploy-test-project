# Stage 1: build the React app
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# Public build-time values, injected by Render as build args
ARG VITE_APP_NAME
ARG VITE_API_BASE_URL
RUN npm run build

# Stage 2: serve the compiled files with nginx
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
