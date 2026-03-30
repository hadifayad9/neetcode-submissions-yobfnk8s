class TimeMap {
  constructor() {
    this.keyStore = new Map();
  }

  /**
   * @param {string} key
   * @param {string} value
   * @param {number} timestamp
   * @return {void}
   */
  set(key, value, timestamp) {
    if (!this.keyStore.has(key)) {
      this.keyStore.set(key, []);
    }
    this.keyStore.get(key).push([value, timestamp]);
  }

  /**
   * @param {string} key
   * @param {number} timestamp
   * @return {string}
   */
  get(key, timestamp) {
    if (!this.keyStore.has(key)) {
      return "";
    }
    let left = 0;
    let right = this.keyStore.get(key).length - 1;
    let bestIndex = -1;
    while (left <= right) {
      let middle = Math.floor((left + right) / 2);
      if (this.keyStore.get(key)[middle][1] <= timestamp) {
        left = middle + 1;
        bestIndex = middle;
      } else {
        right = middle - 1;
      }
    }
    if (bestIndex === -1) {
      return "";
    }
    return this.keyStore.get(key)[bestIndex][0];
  }
}