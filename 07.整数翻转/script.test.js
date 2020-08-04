import { reverse } from './script';

test('输入321 输出123', () => {
  expect(reverse(321)).toBe(123)
})

test('输入-123 输出-321', () => {
  expect(reverse(-123)).toBe(-321)
})

test('输入120 输出21', () => {
  expect(reverse(120)).toBe(21)
})
