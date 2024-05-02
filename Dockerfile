# Dockerfile

# Use the official Node.js image as the base for our image.
FROM node:18-alpine

# Create a working directory for our application.
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files into the image.
COPY package.json package-lock.json ./

# Install the application's dependencies.
RUN npm install

# Copy the rest of the application's files into the image.
COPY . .

# Start the application.
CMD ["npm", "start"]

EXPOSE 3000