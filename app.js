'use strict';

const Hapi = require('hapi');
const olClient = require('./src/service/olClient');
const mapper = require('./src/helpers/mapper');

const server = Hapi.server({
  port: 3000,
  host: 'localhost'
});

server.route({
  method: 'GET',
  options: {
    cors: true,
  },
  path: '/',
  handler: (request, res) => {
    return olClient.get().then((data) => {
      return res.response(mapper(data))
    });
  }
});

server.route({
  method: 'POST',
  path: '/filter',
  handler: (request, res) => {
    return res.redirect(`/?id=${request.payload.olid}`)
  }
});

const init = async() => {
  console.log(`Server running on port: ${server.info.uri} `)
  await server.start();
};

if (!module.parent) {
  init();
}

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

module.exports = server;
