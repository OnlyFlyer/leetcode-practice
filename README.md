# 数据结构与算法学习

## 本周题目

> 不要轻易放弃，把题解看懂消化，再表达出来也是可以的

### LeetCode

🤔 [#1 组合总和](https://leetcode-cn.com/problems/combination-sum/) - [code](./code/[39]组合总和)

### 业务场景算法

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

