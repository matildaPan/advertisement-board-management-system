FROM node:8.12.0

RUN rm /home/app -rf
RUN mkdir -p /home/app/
WORKDIR /home/app

ADD ./package.json /home/app/package.json

RUN npm set registry https://registry.npmjs.org/
RUN npm install

RUN npm install -g forever@0.14.2

ADD . /home/app

CMD ["npm","start"]