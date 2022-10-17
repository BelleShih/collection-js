import {
  map,
  every,
  filter,
  some,
  find,
  reject,
  forEach,
  reduce,
} from './modules';

class Collection {
  private items;

  constructor(items: Array<any> = []) {
    this.items = items;
  }

  map(callable: Function) {
    this.items = map(this.items, callable);
    return this;
  }

  toArray() {
    return this.items;
  }

  every(callable: Function) {
    return every(this.items, callable);
  }

  filter(callable: Function) {
    this.items = filter(this.items, callable);
    return this;
  }

  some(callable: Function) {
    return some(this.items, callable);
  }

  find(callable: Function) {
    return find(this.items, callable);
  }

  reject(callable: Function) {
    this.items = reject(this.items, callable);
    return this;
  }

  forEach(callable: Function) {
    forEach(this.items, callable);
    return this;
  }

  reduce(callable: Function, initialValue: any = undefined) {
    return reduce(this.items, callable, initialValue);
  }

  size() {
    return this.items.length;
  }

  nth(index: number) {
    return this.items[index];
  }

  includes(callable: Function) {
    return this.some(callable);
  }
}

// helper function
const collect = (items: Array<any>) => new Collection(items);

export {
  collect,
};