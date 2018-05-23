const Wreck = require('wreck');

async function get() {
  const uri = 'https://openlibrary.org/api/books?bibkeys=OLID:OL22895148M,OLID:OL6990157M,OLID:OL7101974M,OLID:OL6732939M,OLID:OL7193048M,OLID:OL24347578M,OLID:OL24364628M,OLID:OL24180216M,OLID:OL24948637M,OLID:OL1631378M,OLID:OL979600M,OLID:OL33674M,OLID:OL7950349M,OLID:OL349749M,OLID:OL30460M,OLID:OL24347578M&jscmd=data&format=json'

  const getData = Wreck.request('GET', uri);

  try {
    const res = await getData;
    const body = await Wreck.read(res, {json: true});
    return body;
  } catch (err) {
    return err;
  }
}


module.exports = {
  get,
};
