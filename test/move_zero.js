// 第 82 题：算法题「移动零」，给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
/**
 * 示例:

    输入: [0,1,0,3,12]
    输出: [1,3,12,0,0]
 */

function moveZero(nums) {
    let index = 0
    let length = nums.length
    while (length) {
        if(nums[index] === 0){
            nums.splice(index, 1)
            nums.push(0)
        } else {
            index++
        }
        length --
    }
    return nums
}

console.log(moveZero([2, 0, 1, 4, 0, 0, 0, 5, 7, 8]))