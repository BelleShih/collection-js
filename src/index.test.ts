import { test, expect } from 'vitest';
import { collect } from './';

test('map should work', () => {
  const collection = collect([1, 2, 3, 4, 5]);
  const actual = collection
    .map((x: number) => x * 2)
    .toArray();
  const expected = [2, 4, 6, 8, 10];

  expect(actual).toStrictEqual(expected);
});

test('every should work', () => {
  const collection = collect([1, 2, 3, 4, 5]);
  const actual = collection
    .every((x: number) => x > 6);
  const expected = false;

  expect(actual).toStrictEqual(expected);
});

test('filter should work', () => {
  const collection = collect([1, 2, 3, 4, 5]);
  const actual = collection
    .filter((x: number) => x > 3)
    .toArray();
  const expected = [4, 5];

  expect(actual).toStrictEqual(expected);
});

test('some should work', () => {
  const collection = collect([1, 2, 3, 4, 5]);
  const actual = collection
    .some((x: number) => x > 3);
  const expected = true;

  expect(actual).toStrictEqual(expected);
});

test('find should work', () => {
  const collection = collect([1, 2, 3, 4, 5]);
  const actual = collection
    .find((x: number) => x > 2);
  const expected = 3;

  expect(actual).toStrictEqual(expected);
});

test('reject should work', () => {
  const collection = collect([1, 2, 3, 4, 5]);
  const actual = collection
    .reject((x: number) => x > 3)
    .toArray();
  const expected = [1, 2, 3];

  expect(actual).toStrictEqual(expected);
});

test('forEach should work', () => {
  const actual:Object = {};
  const arr = [1, 2, 3, 4, 5];
  collect(arr)
    .forEach((v: any) => actual[v as keyof Object] = v);
  const expected = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
  };

  expect(actual).toStrictEqual(expected);
});

test('reduce without initialValue', () => {
  const actual = collect([1, 2, 3, 4, 5])
    .reduce((acc: any, v: number) => acc += v);
  const expected = 15;

  expect(actual).toStrictEqual(expected);
});

test('size should work', () => {
  const collection = collect([1, 2, 3, 4, 5]);
  const actual = collection
    .size();
  const expected = 5;

  expect(actual).toStrictEqual(expected);
});

test('nth should work', () => {
  const collection = collect([1, 2, 3, 4, 5]);
  const actual = collection
    .nth(2);
  const expected = 3;

  expect(actual).toStrictEqual(expected);
});

test('include should work', () => {
  const collection = collect([1, 2, 3, 4, 5]);
  const actual = collection
    .includes((x: number) => x > 3);
  const expected = true;

  expect(actual).toStrictEqual(expected);
});