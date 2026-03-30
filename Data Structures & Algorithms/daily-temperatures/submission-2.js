class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
  dailyTemperatures(temperatures) {
    let stack = [];
    let result = new Array(temperatures.length).fill(0);
    for (let i = 0; i < temperatures.length; i++) {
      while (
        stack.length > 0 &&
        temperatures[i] > temperatures[stack[stack.length - 1]]
      ) {
        let temperatureIndex = stack.pop();
        result[temperatureIndex] = i - temperatureIndex;
      }
      stack.push(i);
    }
    return result;
  }
}
