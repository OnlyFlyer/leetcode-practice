/**
 *
 * 请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
 * 实现 LRUCache 类：
 * LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
 * int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
 * void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
 * 函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。
 */

//  输入
//  ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
//  [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
//  输出
//  [null, null, null, 1, null, -1, null, -1, 3, 4]

//  解释
//  LRUCache lRUCache = new LRUCache(2);
//  lRUCache.put(1, 1); // 缓存是 {1=1}
//  lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
//  lRUCache.get(1);    // 返回 1
//  lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
//  lRUCache.get(2);    // 返回 -1 (未找到)
//  lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
//  lRUCache.get(1);    // 返回 -1 (未找到)
//  lRUCache.get(3);    // 返回 3
//  lRUCache.get(4);    // 返回 4

export class LRUCache {
  constructor (len) {
    // 容量
    this.len = len;
    // 用于记录当前长度
    this.currLen = 1;
    // 用于取值
    this.keyMap = new Map();
    // 用于存储排列，方便根据时间戳取 key;
    this.timestampMap = new Map();
    this.timestampNum = [];
    this.setByQuery({ key: len, val: len })
  }
  getData = () => {
    // console.log('this:', this);
    console.log('缓存的值:', this.timestampNum.map(t => {
      const k = this.timestampMap.get(t) || {};
      const { val: v } = this.keyMap.get(k) || {}
      return [k, v]
    }));
  }
  clearByKey = (key) => {
    const { timestamp } = this.keyMap.get(key);
    this.timestampNum = this.timestampNum.filter((t) => t !== timestamp);
    this.timestampMap.delete(key);
    this.keyMap.delete(key);
    // this.timestampMap.clear(key);
    // this.keyMap.clear(key);
  }
  setByQuery = ({ key, val } = {}) => {
    const timestamp = Date.now();
    this.timestampNum.push(timestamp);
    this.timestampMap.set(timestamp, key);
    this.keyMap.set(key, { val, timestamp });
  }
  get = (key) => {
    const { keyMap } = this;
    if (keyMap.has(key)) {
      const { val } = keyMap.get(key) || {};
      this.clearByKey(key);
      this.setByQuery({ key, val })
      this.getData()
      return val
    } else {
      this.getData()
      // 缓存中没找到
      return -1;
    }
  }
  put = (key, val) => {
    const { len, currLen, keyMap, timestampNum, timestampMap } = this;
    // 未超出容量
    if (currLen < len) {
      if (keyMap.has(key)) {
        this.clearByKey(key);
      } else {
        this.currLen = currLen + 1;
      }
      this.setByQuery({ key, val });
      console.log(this.getData());
    } else {
      // 超出容量
      const t = timestampNum[0]
      const k = timestampMap.get(t);
      this.clearByKey(k);
      this.setByQuery({ key, val });
      this.getData()
    }
  }
}
