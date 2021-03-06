/* 
1. 给定一个对象数组，对象内包含 s、c 两个属性，s 代表 供应商数组，c 代表供应商提交的文字，s、c 是对应的值数组是一一对应的，现需要以 c 维度去聚合 s，相同的文字需要合并，并返回新的对象数组


> 示例1

```js
// 输入

[
  {
    s: ['A'],
    c: ['1'],
  },
  {
    s: ['A', 'B'],
    c: ['2'],
  },
  {
    s: ['B', 'C'],
    c: ['2', '3']
  },
  {
    s: ['D'],
    c: ['4'],
  },
]

// 输出

[
  {
    c: ['1', '2'],
    s: ['A']
  },
  {
    c: ['2', '3'],
    s: ['B', 'C']
  },
  {
    c: ['4'],
    s: ['D'],
  }
]

// 解释

因为遍历输入的每一项就能够得到
 
{
  A: ['1', '2'],
  B: ['2', '3'],
  C: ['2', '3']
  D: ['4']
}
 
再聚合就可得到结果
 
需要注意的是：数组顺序 ['3'、'2'] 、['2'、'3'] 算相同的

```

> 示例2

```js

// 输入:

[
  {
    s: ['A', 'D', 'B'],
    c: ['2', '1'],
  },
  {
    s: ['A', 'B'],
    c: ['3', '2']
  },
  {
    s: ['C'],
    c: ['1', '2', '3'],
  },
  {
    s: ['E', 'F'],
    c: ['3', '5']
  }
]

// 输出

[
  {
    c: ['1', '2', '3'],
    s: ['A', 'B', 'C']
  },
  {
    c: ['1', '2'],
    s: ['D']
  },
  {
    c: ['3', '5'],
    s: ['E', 'F']
  }
]

// 解释

因为遍历输入的每一项就能够得到
 
{
  A: ['2', '3', '1'],
  B: ['1', '3', '2'],
  C: ['1', '2', '3'],
  D: ['1', '2'],
  E: ['3', '5'],
  F: ['3', '5'],
}
 
再聚合就可得到结果
 
需要注意的是：数组顺序 ['1'、'3'、'2'] 、['2'、'3'、'1'] 和 ['1', '2', '3'] 算相同的

---------------------------------------------------------------------------------
*/

// code start

// 为什么不用 join() 和 split()?
// 因为 ['a,b,c', 'b,c'] 这种字符串本身带逗号（默认是逗号，其他分隔符同理）的，会有问题

const splitAndMerge = (arr) => {
  const result = [];
  const supplierMapToContent = new Map();
  const contentMapToSuppliers = new Map();
  arr.forEach((item) => {
      item.s.forEach((s) => {
          if (supplierMapToContent.has(s)) {
              supplierMapToContent.set(s, [...new Set([...supplierMapToContent.get(s), ...item.c])].sort());
          } else {
              supplierMapToContent.set(s, item.c.sort());
          }
      });
  });
  supplierMapToContent.forEach((c, s) => {
      if (contentMapToSuppliers.has(JSON.stringify(c))) {
          contentMapToSuppliers.set(JSON.stringify(c), [...contentMapToSuppliers.get(JSON.stringify(c)), s]);
      } else {
          contentMapToSuppliers.set(JSON.stringify(c), s);
      }
  })
  contentMapToSuppliers.forEach((s, c) => {
      result.push({
          c: JSON.parse(c),
          s: s,
      });
  });
  return result;
}