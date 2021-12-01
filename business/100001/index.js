/**
 * @param {object[]} s
 * @return {object[]}
 */
function fn(arr = []) {
  // 判断两个数组是否相等【前提：两数组不能有重复的元素】
  function hasSameArr(arr1 = [], arr2 = []) {
    if (arr1.length !== arr2.length) return false;
    // 可优化成  arr1.sort().toString() === arr2.sort().toString()
    return arr1.every((c) => arr2.includes(c));
  }
  let sMap = {}
  // 两层遍历，转换成 以 s 为 Key，c 为 Value 的 Map 结构
  arr.forEach(({ s = [], c = [] } = {}) => {
    s.forEach(sKey => {
      const prevC = sMap[sKey] || [];
      sMap[sKey] = prevC.filter(d => !c.includes(d)).concat(c);
    })
  });
  // 空数组累计，当数组为空时，此时肯定不会有重复的，直接加入第一项
  // 到第二项开始时，先判断当前的c数组是否 与已存储的数组中有 重复的 项，如果有该项的 s + curr，且 return 出去
  // 如果没有重复的，继续 push 即可
  return Object.keys(sMap).reduce((prev = [], curr) => {
    if (!prev.length) {
      return [{ s: [curr], c: sMap[curr] }];
    }
    const findIndex = prev.findIndex(({ c = [] } = {}) => hasSameArr(c, sMap[curr]));
    if (findIndex > -1) {
      prev[findIndex].s = [...prev[findIndex].s, curr]
      return prev;
    }
    return prev.concat({s: [curr], c: sMap[curr]});
  }, []);
}
