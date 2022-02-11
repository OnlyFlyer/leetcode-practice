/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
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
