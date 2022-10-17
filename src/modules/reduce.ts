const reduce = (items: Array<any>, callable: Function, initialValue?: any) => {
  let accumulator = initialValue !== undefined ? initialValue : items[0];
  const firstIndex = initialValue !== undefined ? 0 : 1;
  for (let i = firstIndex; i < items.length; i++) {
    accumulator = callable(accumulator, items[i]);
  }
  return accumulator;
};

export default reduce;