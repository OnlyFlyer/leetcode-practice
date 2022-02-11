/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
  // return nums.sort((a, b) => b - a)[k-1]
  const cpNums = nums.concat();
  for (let i = 0; i < cpNums.length; i++) {
    for (let j = 0; j < cpNums.length; j++) {
      if (cpNums[i] > cpNums[j]) {
        const cacheNum = cpNums[i];
        cpNums[i] = cpNums[j];
        cpNums[j] = cacheNum;
      }
    }
  }
  return cpNums[k-1];
};
