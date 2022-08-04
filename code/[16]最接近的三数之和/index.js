/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
  let sum = Infinity;
  nums.sort((a, b) => a - b).forEach((num, index) => {
    const l = nums.slice(index + 1);
    let left = 0;
    let right = l.length - 1;
    while (left < right) {
      const cacheSum = l[left] + l[right] + num;
      if (Math.abs(cacheSum - target) < Math.abs(sum - target)) {
        sum = cacheSum;
      }
      if (cacheSum === target) {
        return cacheSum;
      }
      if (cacheSum < target) {
        left++
      } else {
        right--;
      }
    }
  })
  return sum;
};
// @lc code=end

