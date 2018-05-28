'use strict';

const Hapi = require('hapi');
const Inert = require('inert');
const WebpackPlugin = require('hapi-webpack-plugin');

const olClient = require('./src/service/olClient');
const mapFilter = require('./src/helpers/mapFilter');

const server = Hapi.server({
  port: 3000,
  host: 'localhost'
});

const start = async() => {
  await server.register([
    {
      plugin: WebpackPlugin,
      options: './webpack.config.js'
    },
    {
      plugin: Inert
    },
  ]);

  server.route({
    method: 'GET',
    path: '/{param?}',
    handler: {
      directory: {
        path: ['static'],
        listing: false,
        index: ['index.html']
      }
    }
  });

  server.route({
    method: 'GET',
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

      return res.redirect(`/api/books${qs}`)
    }
  });

  console.log(`Server running on port: ${server.info.uri} `)
  await server.start();
};

if (!module.parent) {
  start();
}

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

module.exports = server;
