export const isPalindrome = x => {
    if (x < 0) return false;
    const _x = x.toString();
    return _x === _x.split('').reverse().join('');
}