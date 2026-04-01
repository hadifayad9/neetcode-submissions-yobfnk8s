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
 * Last Stone Weight
Easy Topics Company Tags
Hints

You are given an array of integers stones where stones[i] represents the weight of the ith stone.

We want to run a simulation on the stones as follows:

    At each step we choose the two heaviest stones, with weight x and y and smash them togethers
    If x == y, both stones are destroyed
    If x < y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.

Continue the simulation until there is no more than one stone remaining.

Return the weight of the last remaining stone or return 0 if none remain.

Example 1:

Input: stones = [2,3,6,2,4]

Output: 1

Explanation:
We smash 6 and 4 and are left with a 2, so the array becomes [2,3,2,2].
We smash 3 and 2 and are left with a 1, so the array becomes [1,2,2].
We smash 2 and 2, so the array becomes [1].

Example 2:

Input: stones = [1,2]

Output: 1

Constraints:

    1 <= stones.length <= 20
    1 <= stones[i] <= 100

 */
class Solution {
  /**
   * @param {number[]} stones
   * @return {number}
   */
  lastStoneWeight(stones) {
    let maxHeap = new MaxHeap();
    stones.forEach((element) => {
      maxHeap.push(element);
    });
    while (maxHeap.size() > 1) {
      let x = maxHeap.pop();
      let y = maxHeap.pop();
      if (x - y !== 0) {
        maxHeap.push(x - y);
      }
    }
     return maxHeap.size() === 0 ? 0 : maxHeap.peek();
  }
}