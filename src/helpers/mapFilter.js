function mapFilter(data, filter) {
  return Object.keys(data).reduce((memo, id) => {

    memo.push({
      id: id.substring(5, 20),
      title: data[id].title,
      authors: data[id].authors ? data[id].authors[0].name : data[id].by_statement,
      image: data[id].cover.medium,
    });

    return memo
  }, []);
}

module.exports = mapFilter;
