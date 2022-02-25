/**
 * 日常工作中，我们临时定会议室的时候总是很麻烦，想订的会议室总是冲突，请你实现一个会议室 Room 类，要求：

1. class Room(roomObj: RoomProp)，rootmObj 为初始化会议室情况，例如：

export interface RoomProp {
[key: string]: any[]
}

const exampleRoom: RoomProp = {
A: [[0, 1.5], [2, 3], [5, 7], [8, 9]],
B: [[1, 5], [8, 10], [11, 19]],
C: [],
}

指的是，目前有A、B、C 三个会议室，A 会议室被预定了 0 - 1.5、 2 - 3、 5 - 7、8 - 9 时间
段的会议，B 会议室被预定了 1 - 5、 8 - 10、 11 - 19 时间段的会议，C 会议室暂时没有被预定

2. 能够实时获取当前会议室预订情况的方法 getCurrInfo()，例如：

const exampleRoom: RoomProp = {
A: [],
B: [],
C: [],
D: [[1,3], [2, 4]]
}


3. 根据预定的时间长度返回可预定的会议室的方法 getRoomsByDuration ，例如：

getRoomsByDuration(2.5)

当前的会议室预订情况为：

const exampleRoom: RoomProp = {
A: [[0, 24]],
B: [[0,8], [8, 23.5]],
C: [[0, 5], [7, 19]],
D: [[1,3], [2, 4]]
}

则，返回 ['C', 'D'], 可预定 C、D 两个会议室，A、B 会议室不可预定，因为 A 会议室已经被预定
了一整体，不再接受预定，B 会议室累计被预定到了 23.5 不满足 2.5 小时的预定时长

4. 预定会议室 bookRoom(roomName: String, timeRange: Number[]) 方法，roomName 为预定
会议室名称，timeRange 为预定的时间段，若预定成功则返回当前会议室预订情况，预定失败返回 false，例如：

当前的会议室预订情况：
const exampleRoom: RoomProp = {
A: [[0, 24]],
B: [[0,8], [8, 23.5]],
C: [[0, 5], [7, 19]],
D: [[1,3], [2, 4]]
}

执行： bookRoom('D', [8, 9])

返回：

{
    A: [[0, 24]],
    B: [[0,8], [8, 23.5]],
    C: [[0, 5], [7, 19]],
    D: [[1,3], [4, 5], [15, 19], [20, 23],[8, 9]]
}

继续执行：bookRoom('A', [1,2])

返回： false

因为 A 一整天已经被预定完，不再接受预定。

---

class Room {
    constructor(roomObj: RoomProp) {
    }
    getCurrInfo: RoomProp = () => {}
    getRoomsByDuration: String[] = (duration: number) => {}
    bookRoom: RoomProp | false = (roomName: String, timeRange: Number[]) => {}
}


提示：

预定时间段：0 - 24，一刻钟计作0.25，半小时计作0.5
 */

class Room {
  constructor(roomInfo = {}) {
    this.MIN = 0;
    this.MAX = 24;
    // 预定会议室情况
    this.roomInfo = roomInfo;
    // 目前能够预定会议室情况
    this.canBookRoomInfo = {}
    this.initCanBookRoomInfo();
  }
  // 初始化能够预定的会议室和对应的时间段
  initCanBookRoomInfo = () => {
    const { roomInfo, MIN, MAX } = this;
    const cacheRoomInfo = {}
    const cacheCanBookRoomInfo = {}
    Object.keys(roomInfo).forEach((roomName) => {
      const list = (roomInfo[roomName] || []).sort((a = [], b = []) => a[0] - b[0]);
      cacheRoomInfo[roomName] = list;
      const stack = [];
      const allList = list.reduce((prev = [], curr = []) => [...prev, curr[0], curr[1]], [])
      const len = allList.length;
      if (allList[0] !== MIN) {
        stack.push([0, allList[0]]);
      }
      let pointer = 1;
      while (pointer <= len - 2) {
        stack.push([allList[pointer], allList[pointer+1]])
        if (allList[len-1] < MAX) {
          stack.push([allList[len-1], MAX]);
        }
        pointer = pointer + 2;
      }
      cacheCanBookRoomInfo[roomName] = stack.filter((item) => item[0] < item[1]);
    });
    this.canBookRoomInfo = cacheCanBookRoomInfo;
    console.log('this:', this);
  }
  // 获取当前预定会议室情况
  getCurrInfo = () => {
    return this.roomInfo;
  }
  // 根据预定时长获取可预定的会议室信息
  getRoomsByDuration = (duration) => {
    const { canBookRoomInfo } = this;
    const canBookRoomList = [];
    Object.keys(canBookRoomInfo).forEach(roomName => {
      const list = canBookRoomInfo[roomName] || [];
      if (list.some((item) => item[1] - item[0] >= duration)) {
        canBookRoomList.push(roomName);
      }
    })
    return canBookRoomList;
  }
  // 根据预定会议室和时间段预定会议室
  bookRoom = (roomName, timeRange) => {
    const { MIN, MAX, canBookRoomInfo = {}, roomInfo } = this;
    if (timeRange.some(t => t > MAX || t < MIN) || timeRange[0] >= timeRange[1]) {
      return '不允许预定';
    }
    const idx = (canBookRoomInfo[roomName] || []).findIndex((item) => {
      return item[0] <= timeRange[0] && item[1] >= timeRange[1];
    });
    if (idx > -1) {
      this.roomInfo = {
        ...roomInfo,
        [roomName]: (roomInfo[roomName] || []).concat(timeRange),
      }
      this.initCanBookRoomInfo();
    } else {
      return false;
    }
  }
}
