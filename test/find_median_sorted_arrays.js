/**
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
 * 请找出这两个有序数组的中位数。
 * 要求算法的时间复杂度为 O(log(m+n))。 
 * @param {number[]} nums1 
 * @param {number[]} nums2 
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let m = nums1.length
    let n = nums2.length
    let k1 = Math.floor((m + n + 1) / 2)
    let k2 = Math.floor((m + n + 2) / 2)

    return (findMedianSortedArraysCore(nums1, 0, nums2, 0, k1) + findMedianSortedArraysCore(nums1, 0, nums2, 0, k2)) / 2
};

/**
 * 
 * @param {number[]} nums1 
 * @param {number[]} nums2 
 * @param {number} i 
 * @param {number} j 
 * @param {number} k 
 * @return {number}
 */
const findMedianSortedArraysCore = (nums1, i, nums2, j, k) => {
    // 如果数组起始位置已经大于数组长度-1
    // 说明已经是个空数组
    // 直接从另外一个数组里取第k个数即可
    if (i > nums1.length - 1) {
        return nums2[j + k - 1]
    }
    if (j > nums2.length - 1) {
        return nums1[i + k - 1]
    }
    // 如果k为1
    // 就是取两个数组的起始值里的最小值
    if (k === 1) {
        return Math.min(nums1[i], nums2[j])
    }
    // 取k2为(k/2)或者数组1的长度或者数组2的长度的最小值
    // 这一步可以避免k2大于某个数组的长度（长度为从起始坐标到结尾）
    let k2 = Math.floor(k / 2)
    let length1 = nums1.length - i
    let length2 = nums2.length - j
    k2 = Math.min(k2, length1, length2)

    let value1 = nums1[i + k2 - 1]
    let value2 = nums2[j + k2 - 1]

    // 比较两个数组的起始坐标的值
    // 如果value1小于value2
    // 就舍弃nums1前i + k2部分
    // 否则舍弃nums2前j + k2部分
    if (value1 < value2) {
        return findMedianSortedArraysCore(nums1, i + k2, nums2, j, k - k2)
    } else {
        return findMedianSortedArraysCore(nums1, i, nums2, j + k2, k - k2)
    }
}