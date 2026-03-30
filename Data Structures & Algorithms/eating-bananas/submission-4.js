class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
  minEatingSpeed(piles, h) {
    let left = 1;
    let right = Math.max(...piles);

    while (left < right) {
      let middle = Math.floor((left + right) / 2);
      let total = 0;
      let isOverLimit = false;
      for (let i = 0; i < piles.length; i++) {
        total += Math.ceil(piles[i] / middle);
        if (total > h) {
          isOverLimit = true;
          break;
        }
      }
      if (isOverLimit) {
        left = middle + 1;
      } else {
        right = middle;
      }
    }
    return right;
  }
}
