/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const m = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (m.has(target - num)) {
      return [m.get(target - num), i];
    } else {
      m.set(num, i);
    }
  }
  return [];
};
console.log(twoSum([1, 3, 5], 6));
