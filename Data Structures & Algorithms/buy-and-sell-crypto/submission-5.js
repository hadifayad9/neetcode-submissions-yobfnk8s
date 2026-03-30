class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
  maxProfit(prices) {
    let left = 0;
    let right = 1;
    let maxProfits = 0;
    while (right < prices.length) {
      if (prices[left] < prices[right]) {
        maxProfits = Math.max(maxProfits, prices[right] - prices[left]);
      } else {
        left = right;
      }
      right++;
    }
    return maxProfits;
  }
}
