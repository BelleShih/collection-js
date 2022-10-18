import { test, expect } from 'vitest';
import { includes } from './index';

test('includes true', () => {
  const actual = includes([1, 2, 3, 4, 5], 3);
  const expected = true;

  expect(actual).toStrictEqual(expected);
});

test('includes false', () => {
  const actual = includes([1, 2, 3, 4, 5], 6);
  const expected = false;

  expect(actual).toStrictEqual(expected);
});