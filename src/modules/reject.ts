const reject = (items: Array<any>, callable: Function) => {
  const res = [];
  for (let i = 0; i < items.length; i++) {
    if (!callable(items[i])) {
      res.push(items[i]);
    }
  }
  return res;
};

export default reject;