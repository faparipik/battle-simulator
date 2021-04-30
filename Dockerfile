FROM node:14
WORKDIR /usr/app
COPY package*.json /usr/app/
RUN npm install
COPY . /usr/app/
EXPOSE 3000
CMD ["npm", "run", "start:dev"]