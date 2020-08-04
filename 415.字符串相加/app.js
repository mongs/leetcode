/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
export const addStrings = function(num1, num2) {
  // 模拟数学竖式加法运算
  let i = num1.length - 1;
  let j = num2.length - 1;
  let add = 0;
  let arr = [];
  while(i >= 0 || j >= 0 || add !== 0) {
    i = +num1[i] >= 0 ? +num1[i] : 0;
    j = +num2[j] >= 0 ? +num2[i] : 0;
    let result = (i + j) % 10;
    add = Math.floor((i + j) / 10);
    arr.push(result);
    i--;
    j--;
  }
  return arr.reverse().join('');
};
