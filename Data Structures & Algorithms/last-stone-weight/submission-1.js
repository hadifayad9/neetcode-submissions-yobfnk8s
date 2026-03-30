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


class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
  lastStoneWeight(stones) {
    let heap = new MaxHeap();
    stones.forEach((element) => {
      heap.push(element);
    });
    while (heap.size() > 1) {
      const x = heap.pop();
      const y = heap.pop();
      if (x - y !== 0) {
        heap.push(x - y);
      }
    }
    return heap.size() ? heap.peek() : 0;
  }
}
