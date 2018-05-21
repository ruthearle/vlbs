const { expect } = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const server = require('./../app');

const requestDefaults = {
  method: 'GET',
  url: '/',
  payload: {}
}

lab.test('is wired correctly', async() => {
  const request = Object.assign({}, requestDefaults)

  const result = await server.inject(request)
  expect(result.statusCode).to.equal(200);
});
