# Set your base image here
FROM node:16-alpine

# Define your work directory here
WORKDIR /app

# Copy your source code to the docker container
COPY . .

# Install dependancies
RUN npm install

# Expose the container port to outside
EXPOSE 3000

# Start your application
CMD [ "npm", "start" ]

