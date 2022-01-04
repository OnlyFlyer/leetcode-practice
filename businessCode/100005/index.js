/*
  场景描述：假设有如下需求，给定一颗树以及某一个节点id，如果这个节点在这颗树上，则返回从根节点到该节点路径上的所有节点id的数组，如果没有则返回null
*/

// ------ 输入-------
// const tree = [
//   {
//     id: '1',
//     pId: null,
//     children: [
//       { 
//          id: '1-1', 
//          pId: '1', 
//          children: [
//            {
//             id: '1-1-1', 
//             pId: '1-1', 
//             children: []
//            }
//          ]
//       },
//       { 
//         id: '1-2', 
//         pId: '1',
//         children: [
//           {
//            id: '1-2-1', 
//            pId: '1-2', 
//            children: [
//              {
//               id: '1-2-1-1', 
//               pId: '1-2-1', 
//               children:[],
//              }
//            ],
//           }
//         ]
//       },
//     ],
//   },
//   {
//     id: '2',
//     pId: null,
//     children: [
//       { id: '2-1', pId: '2', },
//       { id: '2-2', pId: '2', },
//     ],
//   },
// ];

// const targetNodeId = '1-2-1-1'


// ----输出-----

// const output = ['1', '1-2', '1-2-1', '1-2-1-1']

const findPath = (tree, targetNodeId) => {

  let finalRes = []

  const deepFindFunc = (arr, pathList, targetId) => {
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i]
      if (item.id === targetId) {
        const tempPath = JSON.parse(JSON.stringify(pathList))
        tempPath.push(item.id)
        finalRes = tempPath
        return
      } else if (item.children) {
        const tempPath = JSON.parse(JSON.stringify(pathList))
        tempPath.push(item.id)
        deepFindFunc(item.children, tempPath, targetId)
      }
    }
  }


  deepFindFunc(tree, [], targetNodeId)

  return finalRes
  
};

const test1 = () => {
  const tree = [
    {
      id: '1',
      pId: null,
      children: [
        { 
          id: '1-1', 
          pId: '1', 
          children: [
            {
              id: '1-1-1', 
              pId: '1-1', 
              children: []
            }
          ]
        },
        { 
          id: '1-2', 
          pId: '1',
          children: [
            {
            id: '1-2-1', 
            pId: '1-2', 
            children: [
              {
                id: '1-2-1-1', 
                pId: '1-2-1', 
                children:[],
              }
            ],
            }
          ]
        },
      ],
    },
    {
      id: '2',
      pId: null,
      children: [
        { id: '2-1', pId: '2', },
        { id: '2-2', pId: '2', },
      ],
    },
  ];

  const targetNodeId = '1-2-1-1'

  const result = findPath(tree, targetNodeId)
  console.log('result>>>>', result)
}

const main = () => {
  test1()
}

main()

