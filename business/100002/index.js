/*
一个小镇上，有多所学校，每所学校有多个年级，每个年级有多个班级，每个班级有多个学生...

类似上面的场景，可以用这样的一个数组来表示：

```js
// 注意：此处举例的数组长度都是1.
// 实际情况中，每个数组的长度都是不确定的
const town = [
  {
    name: '梦想小镇',
    schools: [
      {
        grade: [
          {
            gradeNo: 1,
            class: [
              {
                name: '一年一班',
                students: [
                  {
                    name: '小明',
                    age: 10,
                  },
                ],
              },
            ],
          },
        ],
        schoolName: '梦想一中',
        schoolAge: 50,
      },
    ],
    townAge: 100,
  },
];
```

实际情况中，一个镇可能有多所学校，一个学校也有多个年级...

现在需要在将这些数据展示在表格中，像下图这样：

![image](https://sitecdn.zcycdn.com/f2e-assets/adc9a66e-d07f-4aad-aad8-f3e58ce03982.jpg)

可以看到，【小镇】合并了自己的【学校】，学校合并了自己的【年级】...

请你实现一个算法，处理原始数组，能够在 AntD Table 上展示上图的效果。

注意：上述例子，不一定是到 `学生` 为止不合并哦，有可能是到 `班级` 就不合并，也有可能是到 `学生` 的 `学科成绩` 为止，例如这样：

```js
{
  name: '小明',
  age: 10,
  scores: [
    {
      name: 'mathematics',
      score: 90,
    },
  ],
}
```
-----------------------------------------------------------------------------------------------
*/

// code start
const town = [
  {
    name: '梦想小镇',
    schools: [
      {
        grade: [
          {
            gradeNo: 1,
            class: [
              {
                name: '一年一班',
                students: [
                  {
                    name: '小明',
                    age: 10,
                  },
                  {
                    name: '小红',
                    age: 20,
                  },
                  {
                    name: '小张',
                    age: 30,
                  }
                ],
              },
              {
                name: '三年二班',
                students: []
              },
              {
                name: '三年三班',
                students: [
                  {
                    name: '小刘',
                    age: 10,
                  },
                ]
              },
            ],
          },
        ],
        schoolName: '梦想一中',
        schoolAge: 50,
      },
      {
        schoolName: '梦想二中',
        schoolAge: 40,
      },
    ],
    townAge: 100,
  },
];

function fn (inputArr, levelKeys = []) {
  const result = []
  function setSpanToLeaf(root, nextKey, lastObj = {}) {
    if (!root || !root.length) return;
    root.forEach((item) => {
      if (!item[nextKey] || !item[nextKey].length) {
        result.push({...lastObj, ...item, span: 1})
        item.span = 1;
        return;
      }
      const currIdx = levelKeys.findIndex(k => k === nextKey)
      setSpanToLeaf(
        item[nextKey],
        levelKeys[currIdx + 1],
        { ...lastObj, ...item }
      )
    })
  }
  setSpanToLeaf(inputArr, levelKeys[0]);
  console.log(inputArr);
  console.log('result:', result)
  // function loop(root = [], nextKey) {
  //   const cache = [];
  //   return root.map()
  // }

  // function loop(cacheObj, item, currLevelKey, cacheRowSpan) {
  //   if (currLevelKey === levelKeys[levelKeys.length - 1] || !item[currLevelKey] || item[currLevelKey].length) {
  //     result.push({...cacheObj, rowSpan: cacheRowSpan + 1 });
  //     return;
  //   }
  //   for (let i = 0; i < item.length; i++) {
  //     const zxc = item[i];
  //   }
  // }
}
fn(town, ['schools', 'grade', 'class', 'students']);
