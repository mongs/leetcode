/**
 * @param {Number} numCourses 课程数量
 * @param {Array} prerequisites 二维数组 记录课程依赖关系 [[课程, 前置依赖课程]]
 */
export const canFinish = function(numCourses, prerequisites) {
  const inDegree = new Array(numCourses).fill(0); // 入度数组
  const map = {}; // 邻接表
  // 遍历prerequisites, 将课程的入度数记录到ineDegree里
  // ineDegree的索引就是对应的课程(序号)
  prerequisites.forEach(item => {
    inDegree[item[0]] += 1;
  });
  // map { 0: [1,2] } 代表依赖0的课程有1,2
  prerequisites.forEach(item=> {
    // map里有
    if (map[item[1]]) {
      map[item[1]].push(item[0]);
    } else {
      // map里没有
      map[item[1]] = [item[0]];
    }
  });
  const queue = []; // 记录可以上的课程 入度为0的课程

  inDegree.forEach((item, index) => {
    if (item === 0) {
      queue.push(index); // 入度为0 就添加到queue队列里
    }
  });

  let count = 0;

  while(queue.length) {
    const course = queue.shift(); // 入度为0课程出列
    count += 1;
    if (!map[course] || !map[course].length) continue;
    // 依赖course的课程 入度值-1
    map[course].forEach(item => {
      inDegree[item] -= 1;

      // 入度值-1的基础上 如果入度值==0了 说明可以上课了 添加到队列里
      if (inDegree[item] === 0) {
        queue.push(item);
      }
    })
  }

  return count === numCourses;
};
