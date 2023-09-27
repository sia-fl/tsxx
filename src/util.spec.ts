import { test, expect } from 'vitest';
// @ts-ignore
import { getSpawnArgs, Debounce, getLoaderArgs } from './util.js';

test('get new spawn args', () => {
  const loaderArgs = getLoaderArgs();
  const newArgs = getSpawnArgs(['---', 'xxx', '--loader', 'someJsFile.js']);
  expect(newArgs).toEqual([...loaderArgs, '---', 'xxx', '--loader', 'someJsFile.js']);
});

test('debounce', () => {
  const num = {
    count: 1
  };
  const call = new Debounce(() => {
    num.count++;
  }, 100);
  call.call();
  call.call();
  call.call();
  expect(num.count).toBe(1);
});
