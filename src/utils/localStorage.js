const getDataFromLS = (key, options = { parseJSON: true }) => {
  const ls = window.localStorage;
  const savedItem = ls.getItem(key);
  return new Promise((resolve, reject) => {
    try {
      if (!savedItem) throw new Error('not found item!!!');
      if (!options.parseJSON) return resolve(savedItem);
      const item = JSON.parse(savedItem);
      return resolve(item);
    } catch (error) {
      reject(error);
    }
  });
};

export { getDataFromLS };
