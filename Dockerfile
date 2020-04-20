FROM node:8

# Create app directory
WORKDIR /usr/src/app

RUN npm install -g pm2
COPY package*.json ./

RUN npm install



# Bundle app source 
COPY . .

#RUN mv ./Dockersupport/worker.js ./node_modules/next/dist/export/worker.js

#RUN npm install mkdirp-then

RUN npm run build

#RUN pm2 start npm -- start

EXPOSE 3000
CMD npm start
#RUN pm2 serve ./out 8000

