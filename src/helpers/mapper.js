function mapper(data) {
  return Object.keys(data).reduce((memo, id) => {

    memo.push({
      id,
      title: data[id].title,
      authors: data[id].by_statement,
      image: data[id].cover.medium,
    });

    return memo
  }, []);
}

module.exports = mapper;
