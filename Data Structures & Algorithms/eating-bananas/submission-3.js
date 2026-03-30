class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
  minEatingSpeed(piles, h) {
    let low = 0;
    let high = Math.max(...piles);
    while (low < high) {
      let middle = Math.floor((low + high) / 2);
      let total = 0;
      let isValidSpeed = true;
      for (let i = 0; i < piles.length; i++) {
        total += Math.ceil(piles[i] / middle);
        if (total > h) {
          isValidSpeed = false;
          break;
        }
      }
      if (isValidSpeed) {
        high = middle;
      } else {
        low = middle + 1;
      }
    }
    return high;
  }
}
