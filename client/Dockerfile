FROM node:alpine AS build

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

# Build the React application
RUN npm run build

# Use the official Nginx image to serve the static files
FROM nginx:alpine

# Copy the build output to the Nginx html directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port Nginx will run on
EXPOSE 8080

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]