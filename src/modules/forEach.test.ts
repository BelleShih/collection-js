import { test, expect } from 'vitest';
import { forEach } from './index';

test('forEach should work', () => {
  let actual = 0;
  forEach([1, 2, 3, 4, 5], (v: number) => { 
    actual += v;
  });
  const expected = 15;

  expect(actual).toStrictEqual(expected);
});

test('forEach should work 2', () => {
  let actual = '';
  forEach(['t', 'e', 's', 't'], (v: number) => { 
    actual += v;
  });
  const expected = 'test';

  expect(actual).toStrictEqual(expected);
});