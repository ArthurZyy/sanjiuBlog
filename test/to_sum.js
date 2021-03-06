/**
 * 第 86 题：（京东、快手）周一算法题之「两数之和」
给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。
你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。
示例：
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
 */


// 可以考虑直接求出符合条件的另一个值
function toSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let num = target - nums[i]
        if(num === nums[i]) continue;
        let index = nums.indexOf(num)
        if(index > -1){
            return [nums[i], num]
        }
    }
    return false
}

let nums = [2, 7, 11, 15], target = 9
console.log(toSum(nums, target))