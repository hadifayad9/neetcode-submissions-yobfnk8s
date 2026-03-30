class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
  carFleet(target, position, speed) {
    let carFleet = [];
    for (let i = 0; i < position.length; i++) {
      carFleet.push([position[i], speed[i]]);
    }
    carFleet.sort((a, b) => b[0] - a[0]);
    let stack = [];
    for (let i = 0; i < carFleet.length; i++) {
      let carPosition = carFleet[i][0];
      let carSpeed = carFleet[i][1];
      let arrivalTime = (target - carPosition) / carSpeed;
      if (stack.length === 0 || arrivalTime > stack[stack.length - 1]) {
        stack.push(arrivalTime);
      }
    }
    return stack.length;
  }
}
