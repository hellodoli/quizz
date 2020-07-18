const getDataFromLS = (key, options = { parseJSON: true }) => {
  const ls = window.localStorage;
  const savedItem = ls.getItem(key);
  let isError = false;
  let data = null;
  try {
    if (!savedItem) throw new Error('not found item!!!');
    data = !options.parseJSON ? savedItem : JSON.parse(savedItem);
    return { isError, data, error: null };
  } catch (error) {
    isError = true;
    return { isError, data, error };
  }
};

const setDataFromLS = (key, value, options = { parseJSON: true }) => {
  const ls = window.localStorage;
  const val = !options.parseJSON ? value : JSON.stringify(value);
  ls.setItem(key, val);
};

export { getDataFromLS, setDataFromLS };
