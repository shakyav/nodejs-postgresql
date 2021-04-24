#  Dockerfile for Node Express Backend

FROM node:latest

# Create App Directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install Dependencies
COPY package.json /usr/src/app

RUN npm install -g

# Copy app source code
COPY . /usr/src/app

# Exports
EXPOSE 8080

CMD ["npm","start"]