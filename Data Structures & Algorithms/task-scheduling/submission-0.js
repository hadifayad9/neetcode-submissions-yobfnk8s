class MaxHeap {
  constructor() {
    this.data = [];
  }

  size() {
    return this.data.length;
  }

  peek() {
    return this.data.length ? this.data[0] : undefined;
  }

  push(val) {
    this.data.push(val);
    let i = this.data.length - 1;
    while (i > 0) {
      let parent = this.getParentIndex(i);
      if (this.data[i] > this.data[parent]) {
        this.swap(i, parent);
        i = parent;
      } else {
        break;
      }
    }
  }
  pop() {
    if (this.data.length === 0) return undefined;
    if (this.data.length === 1) return this.data.pop();

    this.swap(0, this.data.length - 1);
    const removed = this.data.pop();

    let i = 0;
    while (true) {
      const left = this.getLeftChildIndex(i);
      const right = this.getRightChildIndex(i);
      let largest = i;

      if (left < this.data.length && this.data[left] > this.data[largest]) {
        largest = left;
      }

      if (right < this.data.length && this.data[right] > this.data[largest]) {
        largest = right;
      }
      if (largest === i) break;
      this.swap(i, largest);
      i = largest;
    }
    return removed;
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChildIndex(i) {
    return 2 * i + 1;
  }

  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  swap(i, j) {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }
}
/**
Task Scheduler
Medium Topics Company Tags
Hints

You are given an array of CPU tasks tasks, where tasks[i] is an uppercase english character from A to Z. You are also given an integer n.

Each CPU cycle allows the completion of a single task, and tasks may be completed in any order.

The only constraint is that identical tasks must be separated by at least n CPU cycles, to cooldown the CPU.

Return the minimum number of CPU cycles required to complete all tasks.

Example 1:

Input: tasks = ["X","X","Y","Y"], n = 2

Output: 5

Explanation: A possible sequence is: X -> Y -> idle -> X -> Y.

Example 2:

Input: tasks = ["A","A","A","B","C"], n = 3

Output: 9

Explanation: A possible sequence is: A -> B -> C -> Idle -> A -> Idle -> Idle -> Idle -> A.

Constraints:

    1 <= tasks.length <= 1000
    0 <= n <= 100

 */
class Solution {
  /**
   * @param {number[]} stones
   * @return {number}
   */
  leastInterval(tasks, n) {
    let maxFrequency = {};
    let heap = new MaxHeap();
    for (let i = 0; i < tasks.length; i++) {
      maxFrequency[tasks[i]] = (maxFrequency[tasks[i]] || 0) + 1;
    }
    for (const key in maxFrequency) {
      const element = maxFrequency[key];
      heap.push(element);
    }
    let time = 0;
    let queue = [];

    while (heap.size() || queue.length !== 0) {
      time += 1;
      if (heap.size()) {
        let count = heap.pop();
        count--;
        if (count) {
          queue.push([count, time + n]);
        }
      }
      if (queue.length !== 0 && queue[0][1] === time) {
        const [readyCount] = queue.shift();
        heap.push(readyCount);
      }
    }
    return time;
  }
}