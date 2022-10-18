const includes = (items: Array<any>, element: any) => {
  for (let i = 0; i < items.length; i++) {
    if (items[i] === element) return true;
  }
  return false;
};

export default includes;