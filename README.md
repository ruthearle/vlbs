# Querying the Open Library API

A simple app that queries the Open Library API and can filter search results by title and id.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

```
Node v8.10 or higher
NPM v6.1.0
```

### Installing

```bash
git clone git@github.com:ruthearle/vlbs.git

cd vlbs

npm install

npm run build

npm start
```

In your browser, navigate to:
```bash
http://localhost:3000
```

## Running the tests

After you have done `npm install` run the unit test with:
```bash
npm run test
```

I have only put tests in for the mapping of data, as there was some logic needed to ensure the right data was being returned. 

This project does not have e2e tests.

## Limitations/TODO
- Filter will only match the exact casing of the title or id - make filter case-insensative
- Increase test coverage with unit and integration tests
- Styling

## Built With

* [HapiJS](https://hapijs.com/) - Web framework
* [Vue](https://vuejs.org/) - User interface framework
* [Webpack](https://webpack.js.org/) - Module bundler
* [Lab](https://github.com/hapijs/lab) - Test framework

## License

This project is licensed under the ICS License