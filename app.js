'use strict';

const Hapi = require('hapi');

const server = Hapi.server({
  port: 3000,
  host: 'localhost'
});

server.route({
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return 'Hello, Ruth!';
  }
});

if (!module.parent) {
  server.start(error => {
    process.exit(1);
  });
}

const init = async() => {
  await server.start();
  console.log(`Server running on port: ${server.info.uri} `)
};

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

init();

module.exports = server;
