/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 * @description 给定一个无重复元素的正整数数组 candidates 和一个正整数 target ，找出 candidates 中所有可以使数字和为目标数 target 的唯一组合。
 * candidates 中的数字可以无限制重复被选取。如果至少一个所选数字数量不同，则两种组合是唯一的。 
 * 对于给定的输入，保证和为 target 的唯一组合数少于 150 个。
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
  const nums = candidates.filter((num) => num <= target).sort();
  const res = [];
  function loop (cacheTotal, cacheArr, canUseArr) {
    if (cacheTotal > target) return;
    if (cacheTotal === target) {
      res.push(cacheArr);
      return;
    }
    for (let i = 0; i < canUseArr.length; i++) {
      const ele = canUseArr[i];
      loop(cacheTotal + ele, [...cacheArr, ele], canUseArr.slice(i))
    }
  }
  loop(0, [], nums)
  return res;
};
// @lc code=end

