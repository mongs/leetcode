import { canFinish } from './app';

test('2, [[1,0]] is true', () => {
  expect(canFinish(2, [[1,0]])).toBeTruthy();
})

test('6, [[3, 0], [3, 1], [4, 1], [4, 2], [5, 3], [5, 4]] is true', () => {
  expect(canFinish(6, [[3, 0], [3, 1], [4, 1], [4, 2], [5, 3], [5, 4]])).toBeTruthy();
})
