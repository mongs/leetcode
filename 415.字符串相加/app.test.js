import { addStrings } from './app';

test('num1="123" + num2="12" = "135"', () => {
  expect(addStrings("123", '12')).toBe('135')
})

test('num1="129" + num2="12" = "141"', () => {
  expect(addStrings("129", '12')).toBe('141')
})
