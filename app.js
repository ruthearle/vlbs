'use strict';

const Hapi = require('hapi');
const olClient = require('./src/olClient');
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
    //return res.response('Success');
    return olClient.get().then((data) => {
      return res.response(mapper(data))
    });
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
