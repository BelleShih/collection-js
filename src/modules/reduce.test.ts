import { test, expect } from 'vitest';
import { reduce } from './index';

test('reduce should work', () => {
  const actual = reduce([1, 2, 3, 4, 5], (v: number, q: number) => v + q, 0);
  const expected = 15;
  expect(actual).toStrictEqual(expected);
});

test('reduce should work 2', () => {
  const actual = reduce([1, 2, 3, 4, 5, 6, 7], (v: number, q: number) => v + q, 5);
  const expected = 33;
  expect(actual).toStrictEqual(expected);
});

test('reduce should work 3', () => {
  const actual = reduce([1, 2, 3, 4, 5, 6], (v: number, q: number) => v + q);
  const expected = 21;
  expect(actual).toStrictEqual(expected);
});

test('reduce should work 4', () => {
  const actual = reduce([], (v: number, q: number) => v + q, 3);
  const expected = 3;
  expect(actual).toStrictEqual(expected);
});

test('reduce should work 5', () => {
  const actual = reduce([], (v: number, q: number) => v + q);
  const expected = undefined;
  expect(actual).toStrictEqual(expected);
});

