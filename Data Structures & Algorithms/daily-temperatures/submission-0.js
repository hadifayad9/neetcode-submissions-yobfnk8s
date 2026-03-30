class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
    let monotonicDecreasingStack = [];
    let results = new Array(temperatures.length).fill(0);
    for (let i = 0; i < temperatures.length; i++) {
      while (
        monotonicDecreasingStack.length > 0 &&
        temperatures[i] >
          temperatures[
            monotonicDecreasingStack[monotonicDecreasingStack.length - 1]
          ]
      ) {
        const prevIndex = monotonicDecreasingStack.pop();
        results[prevIndex] = i - prevIndex;
      }
      monotonicDecreasingStack.push(i);
    }
    return results;
  }
}
