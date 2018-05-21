const server = require('./app');

const init = async() => {
  await server.start();
  console.log(`Server running on port: ${server.info.uri} `)
};

if (!module.parent) {
  server.start(error => {
    process.exit(1);
  });
}

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

init();
