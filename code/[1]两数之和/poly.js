function poly(list) {
  function isSameArr(arr1, arr2) {
    return arr1.sort((a, b) => a - b).toString() === arr2.sort((a, b) => a - b).toString();
  }
  let res = {};
  for (const { s, c } of list) {
    for (const sId of s) {
      res[sId] = res[sId] ? [...res[sId], ...c] : c;
    }
  }
  res = Object.keys(res).reduce((prev, cur) => ({ [cur]: [...new Set(res[cur])], ...prev }), {});
  const result = {};
  const keys = Object.keys(res);
  for (let i = 0; i < keys.length - 1; i++) {
    const value = res[keys[i]];
    const resultKey = value.toString();
    result[resultKey] = result[resultKey] ? [...result[resultKey], ...keys[i]] : [keys[i]];
    for (let j = 1; j < keys.length; j++) {
      const nextValue = res[keys[j]];
      if (isSameArr(value, nextValue)) {
        resultKey[resultKey] = [keys[i], keys[j]];
      }
    }
  }
  return result;
}
const arr = [
  {
    s: ['A', 'D', 'B'],
    c: ['2', '1'],
  },
  {
    s: ['A', 'B'],
    c: ['3', '2'],
  },
  {
    s: ['C'],
    c: ['1', '2', '3'],
  },
  {
    s: ['E', 'F'],
    c: ['3', '5'],
  },
];
console.log(poly(arr));
