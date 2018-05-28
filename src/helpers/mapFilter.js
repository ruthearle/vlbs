const _ = require('lodash');

function mapFilter(data, field = {}) {
   const mapped =  Object.keys(data).reduce((memo, id) => {

    memo.push({
      id: id.substring(5, 20),
      title: data[id].title,
      author: data[id].authors ? data[id].authors[0].name : data[id].by_statement,
      imageUrl: data[id].cover.medium,
    });

    return memo
  }, []);

  return _.filter(mapped, field);
}

module.exports = mapFilter;
