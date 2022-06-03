# Specify a base image
FROM node:10

#Install some dependencies

WORKDIR /.

COPY . .

RUN npm install

# Set up a default command
CMD ["node","weather.js"]