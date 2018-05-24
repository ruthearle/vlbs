const { expect } = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const server = require('./../app');

lab.test('is wired correctly', async() => {
  const result = await server.inject('/')
  expect(result.statusCode).to.equal(200);
});

const requestDefaults = {
  method: 'POST',
  url: '/filter',
  payload: {
    olid: 'OL0987654'
  }
}

lab.experiment('POST /filter', () => {
  lab.experiment('redirects to /', () => {
    lab.test('with id query string', async() => {
      const result = await server.inject(requestDefaults);

      console.log(result.request.query);
      expect(result.statusCode).to.equal(302);
      expect(result.headers.location).to.equal('/?id=OL0987654');
    });
  });
});
