const demo = [
  {
    name: '梦想小镇',
    schools: [
      {
        name: '梦想一中',
        grades: [
          {
            name: '一年级',
            classes: [
              {
                name: '一班',
                students: [{ name: '小明' }, { name: '小红' }],
              },
              { name: '二班' },
            ],
          },
        ],
      },
      { name: '梦想二中' },
    ],
  },
];
const demo1 = [
  {
    name: '梦想小镇',
    id: 1,
    schools: [
      { schoolName: '一中', schoolId: 3, grades: [{ gName: '一年级' }, { gName: '二年级' }] },
      { schoolName: '二中', schoolId: 4, grades: [{ gName: '三年级' }] },
    ],
  },
  {
    name: '梦想小镇2',
    id: 2,
    schools: [
      { schoolName: '一中', schoolId: 5, grades: [{ gName: '一年级' }, { gName: '二年级' }] },
      { schoolName: '二中', schoolId: 6, grades: [{ gName: '三年级' }] },
    ],
  },
];

const solutation = list => {
  const res = [];
  list.forEach(item => {
    let townRowSpan = 0;
    item.schools.forEach(sItems => {
      let schoolRowSpan = 0;
      townRowSpan += sItems.grades.length;
      schoolRowSpan += sItems.grades.length;
      sItems.grades.forEach((gItem, idx) => {
        const temp = {
          ...item,
          ...sItems,
          ...gItem,
        };
        delete temp.schools;
        delete temp.grades;
        res.push(temp);
      });
      const cur1 = res.filter(i => i.schoolId === sItems.schoolId);
      cur1.forEach(e => (e.schoolRowSpan = 0));
      cur1[0].schoolRowSpan = schoolRowSpan;
    });
    const cur2 = res.filter(i => i.id === item.id);
    cur2.forEach(e => (e.townRowSpan = 0));
    cur2[0].townRowSpan = townRowSpan;
  });
  console.table(res);
};
solutation(demo1);

const loop = (list, keys) => {
  if (!list) return;
  const key = keys.shift();
  list.forEach(item => {
    console.log('item', item);
    loop(item[key], keys);
  });
};
loop(demo1, ['schools', 'grades']);
