import { isPalindrome } from './index';

test('121 true', () => {
    expect(isPalindrome(121)).toBeTruthy()
})


test('-121 false', () => {
    expect(isPalindrome(-121)).toBeFalsy()
})

test('10 false', () => {
    expect(isPalindrome(10)).toBeFalsy()
})

