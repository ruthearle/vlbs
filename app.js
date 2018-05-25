'use strict';

const Hapi = require('hapi');

const olClient = require('./src/service/olClient');
const mapFilter = require('./src/helpers/mapFilter');

const server = Hapi.server({
  port: 3000,
  host: 'localhost'
});

server.route({
  method: 'GET',
  options: {
    cors: true,
  },
  path: '/api/books',
  handler: (request, res) => {
    const filter = request.query
    return olClient.get().then((data) => {
      return res.response(mapFilter(data, filter))
    });
  }
});

server.route({
  method: 'POST',
  path: '/filter',
  handler: (request, res) => {
    const key = Object.keys(request.payload)[0];
    const qs = `?${key}=${request.payload[key]}`;

    return res.redirect(`/${qs}`)
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
