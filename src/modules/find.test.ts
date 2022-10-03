import { test, expect } from 'vitest';
import { find } from './index';

test('find should work', () => {
  const actual = find([1, 2, 3, 4, 5], (v: number) => v < 2);
  const expected = 1;
  expect(actual).toStrictEqual(expected);
});

test('find should work 2', () => {
  const actual = find([1, 2, 3, 4, 5], (v: number) => v > 5);
  const expected = undefined;
  expect(actual).toStrictEqual(expected);
});