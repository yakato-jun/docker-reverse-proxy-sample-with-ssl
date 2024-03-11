FROM node:21.6.1-bookworm-slim

WORKDIR /usr/src/app
RUN chown -R node:node /usr/src/app

RUN apt-get update && \
    apt-get install -y curl sudo && \
    rm -rf /var/lib/apt/lists/*

RUN echo "node ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers
USER node

COPY --chown=node:node ./node-app/package*.json ./

RUN npm install

COPY --chown=node:node ./node-app .

EXPOSE 3000

CMD [ "npm", "start" ]