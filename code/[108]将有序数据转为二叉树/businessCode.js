const input = [
  { desc: 'a', pId: null, id: 1, category: '服务' },
  { desc: 'b', pId: null, id: 5, category: '商品' },
  { desc: 'c', pId: null, id: 9, category: '福利' },
  { desc: 'aa', pId: 5, id: 21, category: '日用品' },
  { desc: 'bb', pId: 5, id: 22, category: '生鲜' },
  { desc: 'cc', pId: 5, id: 23, category: '体育用品' },
  { desc: 'aaa', pId: 21, id: 31, category: '电器' },
  { desc: 'bbb', pId: 21, id: 32, category: '厨具' },
  { desc: 'ccc', pId: 21, id: 33, category: '清洁用具' },
  { desc: 'aaa', pId: 31, id: 41, category: '榨汁机' },
  { desc: 'aaa', pId: 32, id: 46, category: '锅' },
];

// const list2Tree = items => {
//   const ans = [];
//   const map = {};
//   for (const item of items) {
//     map[item.id] = item;
//     if (item.pId === null) {
//       ans.push(item);
//     } else if (map[item.pId]) {
//       // 如果我的父节点在map里
//       if (!map[item.pId].children) {
//         map[item.pId].children = [];
//       }
//       map[item.pId].children.push(item); // 我的父节点的children数组把我push进去
//     }
//   }
//   return ans; // 此时的ans数组对item存在引用关系
// };
const list2Tree = items => {
  const ans = [...items];
  const helper = (tree, pId) => {
    const children = [];
    for (const item of tree) {
      if (item.pId === pId) {
        item.children = helper(tree, item.id);
        children.push(item);
      }
    }
    return children;
  };
  const result = helper(ans, null);
  return result;
};
// console.log(list2Tree(input));
