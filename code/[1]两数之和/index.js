
/**
 * @param {object[]} s
 * @return {object[]}
 */
 var twoSum = function(nums, target) {
  for(let i=0; i<nums.length-1; i++) {
    for (let j=i+1; j<nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

var twoSumHigh = function (nums, target) {
  const cacheMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    if (cacheMap.has(target - curr)) {
      return [cacheMap.get(target - curr), i]
    }
    cacheMap.set(curr, i)
  }
}
