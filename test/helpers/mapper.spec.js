const { expect } = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const mapper = require('../../src/helpers/mapper');

    const data = {
      'OLID:OL6732939M': {
        publishers: [
          {
            name: "Scribner"
          }
        ],
        pagination: "355 p. ;",
        title: "A farewell to arms",
        url: "https://openlibrary.org/books/OL6732939M/A_farewell_to_arms",
        number_of_pages: 355,
        cover: {
          small: "https://covers.openlibrary.org/b/id/7144309-S.jpg",
          large: "https://covers.openlibrary.org/b/id/7144309-L.jpg",
          medium: "https://covers.openlibrary.org/b/id/7144309-M.jpg"
        },
        subject_places: [
          {
            url: "https://openlibrary.org/subjects/place:italy",
            name: "Italy"
          },
          {
            url: "https://openlibrary.org/subjects/place:the_battle_of_caporetto",
            name: "The Battle of Caporetto"
          }
        ],
        subjects: [
          {
            url: "https://openlibrary.org/subjects/cuentos_de_guerra",
            name: "Cuentos de guerra"
          },
        ],
        subject_people: [
          {
            url: "https://openlibrary.org/subjects/person:john_c._schweitzer",
            name: "John C. Schweitzer"
          }
        ],
        key: "/books/[L6732939M",
        publish_date: "1929",
        by_statement: "Ernest Hemingway.",
        publish_places: [
          {
            name: "New York"
          }
        ],
        subject_times: [
          {
            url: "https://openlibrary.org/subjects/time:20th_century",
            name: "20th century"
          }
        ]
      }
    };

    const response = [{
      id:  'OLID:OL6732939M',
      title: "A farewell to arms",
      authors: "Ernest Hemingway.",
      image: "https://covers.openlibrary.org/b/id/7144309-M.jpg",
    }];

lab.experiment('remapping data', () => {
  lab.test('returns the correct values', () => {
    expect(mapper(data)).to.equal(response);
  });
});
