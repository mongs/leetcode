import { twoSum } from './app';

test('nums = [2, 7, 11, 15], target = 9, 结果应该是[0, 1]', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
})

test('nums = [-1, 5, 11, 15], target = 10, 结果应该是[0, 2]', () => {
    expect(twoSum([-1, 5, 11, 15], 10)).toEqual([0, 2])
})

test('nums = [1, 3, 9, 1, 3, 4], target = 5, 结果应该是[0, 5]', () => {
    expect(twoSum([1,3,9,1,3,4], 5)).toEqual([0, 5])
})