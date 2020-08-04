/*
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
示例:

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/**
 * 暴力双循环
 export const twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};
 */

// HashMap解

export const twoSum = function (nums, target) {
    const map = {};
    let diff;
    let i = 0;
    while(i < nums.length) {
        diff = target - nums[i];
        if (map[diff] !== undefined && map[diff] !== i) {
            return [map[diff], i]
        }
        // 如果说数值已经存在 且加起来不是target 就跳过
        if (map[nums[i]] !== undefined && nums[i] !== diff) {
            continue
        }
        map[nums[i]] = i;
        i++
    }
}

// export const twoSum = function (nums, target) {
//     const map = {};
//     let diff;
//     for (let i = 0; i < nums.length; i++) {
//         diff = target - nums[i]; // 余数
//         if (map[diff] !== undefined && map[diff] !== i) {
//             return [map[diff], i]
//         }
//         // 如果说数值已经存在 且加起来不是target 就跳过
//         if (map[nums[i]] !== undefined && nums[i] !== diff) {
//             continue
//         }
//         map[nums[i]] = i;
//     }
// }