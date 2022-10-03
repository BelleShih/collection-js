import { test, expect } from 'vitest';
import { some } from './index';

test('find should work', () => {
  const actual = some([1, 2, 3, 4, 5], (v: number) => v < 2);
  const expected = true;
  expect(actual).toStrictEqual(expected);
});

test('find should work', () => {
  const actual = some([1, 2, 3, 4, 5], (v: number) => v > 5);
  const expected = false;
  expect(actual).toStrictEqual(expected);
});