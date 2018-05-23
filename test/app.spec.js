const { expect } = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const server = require('./../app');

lab.test('is wired correctly', async() => {
  const result = await server.inject('/')
  expect(result.statusCode).to.equal(200);
});
