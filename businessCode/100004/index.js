/*
  场景描述：假设超市需要进行一次用户调研，让用户完成对超市满意度的意见填写，意见可包含方方面面。例如用户对超市商品满意度调查包括商品价格、品类丰富度，超市服务态度等等。
  要求对用户输入的意见进行分类展示。示例如下 “榨汁机” 父级分类为 “电器” 再往上 祖级分类为 “日用品”，继续向上还可以查找到其父级分类为 “商品”。其中 desc 字段为用户意见，pId 为父级分类id
  id 为当前分类id， 要求输入为用户意见数组，输出结构为各意见按父级维度聚合而成的树。
*/
// const input = [
//   { desc: 'a', pId: null, id: 1, category: '服务' },
//   { desc: 'b', pId: null, id: 5, category: '商品' },
//   { desc: 'c', pId: null, id: 9, category: '福利' },
//   { desc: 'aa', pId: 5, id: 21, category: '日用品' },
//   { desc: 'bb', pId: 5, id: 22, category: '生鲜' },
//   { desc: 'cc', pId: 5, id: 23, category: '体育用品' },
//   { desc: 'aaa', pId: 21, id: 31, category: '电器' },
//   { desc: 'bbb', pId: 21, id: 32, category: '厨具' },
//   { desc: 'ccc', pId: 21, id: 33, category: '清洁用具' },
//   { desc: 'aaa', pId: 31, id: 41, category: '榨汁机' },
//   { desc: 'aaa', pId: 32, id: 46, category: '锅' },
// ]


// const output = [
//   {
//     desc: 'a',
//     pId: null,
//     id: 1
//   },
//   {
//     desc: 'b',
//     pId: null,
//     id: 5,
//     children: [
//       {
//         desc: 'aa',
//         pId: 5,
//         id: 21,
//         childern: [
//           {
//             desc: 'aaa',
//             pId: 21,
//             id: 31,
//             childern: [{ desc: 'aaa', pId: 31, id: 41 }]
//           },
//           {
//             desc: 'bbb',
//             pId: 21,
//             id: 32,
//             childern: [{ desc: 'aaa', pId: 32, id: 46 }]
//           },
//           { desc: 'ccc', pId: 21, id: 33 }
//         ]
//       },
//       { desc: 'bb', pId: 5, id: 22 },
//       { desc: 'cc', pId: 5, id: 23 }
//     ]
//   },
//   { desc: 'c', pId: null, id: 9 }
// ]
