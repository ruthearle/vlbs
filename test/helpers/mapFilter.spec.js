const { expect } = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const mapFilter = require('../../src/helpers/mapFilter');

const data = {
  'OLID:OL6732939M': {
    publishers: [
      {
        name: 'Scribner'
      }
    ],
    pagination: '355 p. ;',
    title: 'A farewell to arms',
    url: 'https://openlibrary.org/books/OL6732939M/A_farewell_to_arms',
    number_of_pages: 355,
    cover: {
      small: 'https://covers.openlibrary.org/b/id/7144309-S.jpg',
      large: 'https://covers.openlibrary.org/b/id/7144309-L.jpg',
      medium: 'https://covers.openlibrary.org/b/id/7144309-M.jpg'
    },
    publish_date: '1929',
    by_statement: 'Ernest Hemingway.'
  }
};

lab.experiment('remapping data', () => {
  lab.test('returns the correct values', () => {
    expect(mapFilter(data)).to.equal([{
      id: 'OL6732939M',
      title: 'A farewell to arms',
      authors: 'Ernest Hemingway.',
      image: 'https://covers.openlibrary.org/b/id/7144309-M.jpg'
    }]);
  });

  lab.test('maps authors if value available', () => {
    const newData = {
      'OLID:OL6732939M': {
        publishers: [
          {
            name: 'Scribner'
          }
        ],
        pagination: '355 p. ;',
        title: 'A farewell to arms',
        url: 'https://openlibrary.org/books/OL6732939M/A_farewell_to_arms',
        number_of_pages: 355,
        authors: [{
          name: 'Ernie'
        }],
        cover: {
          small: 'https://covers.openlibrary.org/b/id/7144309-S.jpg',
          large: 'https://covers.openlibrary.org/b/id/7144309-L.jpg',
          medium: 'https://covers.openlibrary.org/b/id/7144309-M.jpg'
        },
        publish_date: '1929',
        by_statement: 'Ernest Hemingway.'
      }
    };

    expect(mapFilter(newData)).to.equal([{
      id: 'OL6732939M',
      title: 'A farewell to arms',
      authors: 'Ernie',
      image: 'https://covers.openlibrary.org/b/id/7144309-M.jpg'
    }]);
  });
});

lab.experiment('filtering data', () => {
  const data = {
    'OLID:OL6732939M': {
      title: 'A farewell to arms',
      cover: {
        small: 'https://covers.openlibrary.org/b/id/7144309-S.jpg',
        large: 'https://covers.openlibrary.org/b/id/7144309-L.jpg',
        medium: 'https://covers.openlibrary.org/b/id/7144309-M.jpg'
      },
      by_statement: 'Ernest Hemingway.'
    },
    'OLID:OL1234567M': {
      title: 'Darmapada',
      cover: {
        small: 'https://covers.openlibrary.org/b/id/7144309-S.jpg',
        large: 'https://covers.openlibrary.org/b/id/7144309-L.jpg',
        medium: 'https://covers.openlibrary.org/b/id/7144309-M.jpg'
      },
      by_statement: 'Buddha'
    }
  };

  const filter = { id: 'OL1234567M' };

  lab.test('returned correct values (RENAME THIS TEST)', () => {
    expect(mapFilter(data, filter)).to.equal([{
      id: 'OL1234567M',
      title: 'Darmapada',
      authors: 'Buddha',
      image: 'https://covers.openlibrary.org/b/id/7144309-M.jpg'
    }]);
  });
});
