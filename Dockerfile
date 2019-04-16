FROM node:8

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install -g pm2

# Bundle app source 
COPY . .

#RUN mv ./Dockersupport/worker.js ./node_modules/next/dist/export/worker.js

#RUN npm install mkdirp-then

RUN npm run build

#RUN pm2 start npm -- start

EXPOSE 3000
CMD pm2 --no-daemon start npm -- start
#RUN pm2 serve ./out 8000

