/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  // 空间换时间
  // 遍历过的，用一个 map 存起来
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
      // 现在还差多少？
      const need = target - nums[i];
      // 之前存的数据里，有没有我正好需要的差值？
      // 注意，这里使用 has() 方法，而不能用 get() 方法。如果存的值是0呢，这里就会判断错误。
      if (map.has(need)) {
          return [map.get(need), i]
      }
      // 存当前值
      map.set(nums[i], i);
  }
  return [];
};