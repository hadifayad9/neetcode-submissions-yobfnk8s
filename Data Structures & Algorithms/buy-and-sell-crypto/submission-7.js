class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
  maxProfit(prices) {
    let left = 0;
    let right = 1;
    let total = 0;
    while (right < prices.length) {
      if (prices[left] < prices[right]) {
        total = Math.max(total, prices[right] - prices[left]);
      } else {
        left = right;
      }
      right++;
    }
    return total;
  }
}
