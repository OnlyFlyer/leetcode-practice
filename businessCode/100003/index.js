// 场景描述：
// 假设有如下的一个需求，需要以树形结构展示所有评审项的打分结果，如下图所示。
// 在这颗树里，除了叶子节点之外，所有的父节点都无法录入分值，它的分值来自于自己的所有叶子节点之和。

// 假设你有如下所示的树形结构,

// ------ 输入-------
// [
//   {
//     id: 2,
//     no: '1',
//     pId: null,
//     score: 0,
//     children: [
//       { id: 3, no: '1.1', pId: 2, score: 0 },
//       { id: 4, no: '1.2', pId: 2, score: 0 },
//     ],
//   },
//   {
//     id: 5,
//     no: '2',
//     pId: null,
//     score: 0,
//     children: [
//       { id: 6, no: '2.1', pId: 5, score: 0 },
//       { id: 7, no: '2.2', pId: 5, score: 0 },
//     ],
//   },
// ];

// 现在当用户编辑输入框的分数时，需要实时显示该节点以及它的所有父节点的分值，请实现hanleInputChange函数，
// 该函数会得到最终会返回一个新的树形结构。
// type Node {
//   id:Number,
//   no:String,
//   pId:Number,
//   score:Number
// }


// /**
//  *
//  * @param {*} value 当前叶子节点的输入框值
//  * @param {*} currentNode 当前叶子节点对象 Node
//  * @param {*} tree  当前的整个树 Array<Node>
//  */
// const handleInputChange = (value, currentNode, tree) => {

// };


// ----输出-----

// 示例一
// [
//   {
//     id: 2,
//     no: '1',
//     pId: null,
//     score: 5,
//     children: [
//       { id: 3, no: '1.1', pId: 2, score: 5 },
//       { id: 4, no: '1.2', pId: 2, score: 0 },
//     ],
//   },
//   {
//     id: 5,
//     no: '2',
//     pId: null,
//     score: 0,
//     children: [
//       { id: 6, no: '2.1', pId: 5, score: 0 },
//       { id: 7, no: '2.2', pId: 5, score: 0 },
//     ],
//   },
// ];

// 示例二
// [
//   {
//     id: 2,
//     no: '1',
//     pId: null,
//     score: 0,
//     children: [
//       { id: 3, no: '1.1', pId: 2, score: 0 },
//       { id: 4, no: '1.2', pId: 2, score: 0 },
//     ],
//   },
//   {
//     id: 5,
//     no: '2',
//     pId: null,
//     score: 20,
//     children: [
//       { id: 6, no: '2.1', pId: 5, score: 0 },
//       { id: 7, no: '2.2', pId: 5, score: 20 },
//     ],
//   },
// ];

