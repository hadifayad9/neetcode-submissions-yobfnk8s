class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
   minEatingSpeed(piles, h) {
    let low = 1;
    let high = Math.max(...piles);
    while (low < high) {
      let middleSpeed = Math.floor((low + high) / 2);
      let total = 0;
      let isValidSpeed = true;
      for (let i = 0; i < piles.length; i++) {
        total += Math.ceil(piles[i] / middleSpeed);
        if (total > h) {
          isValidSpeed = false;
          break;
        }
      }
      if (isValidSpeed) {
        high = middleSpeed;
      } else {
        low = middleSpeed + 1;
      }
    }
    return high;
  }
}
