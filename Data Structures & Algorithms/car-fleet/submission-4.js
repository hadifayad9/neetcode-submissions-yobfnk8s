class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
  carFleet(target, position, speed) {
    let carFleet = [];
    let stackFleet = [];
    for (let i = 0; i < position.length; i++) {
      carFleet.push([position[i], speed[i]]);
    }
    carFleet.sort((a, b) => b[0] - a[0]);
    for (let i = 0; i < carFleet.length; i++) {
      let position = carFleet[i][0];
      let speed = carFleet[i][1];
      let arrivalTime = (target - position) / speed;
      if (stackFleet.length > 0) {
        if (arrivalTime > stackFleet[stackFleet.length - 1]) {
          stackFleet.push(arrivalTime);
        }
      } else {
        stackFleet.push(arrivalTime);
      }
    }
    return stackFleet.length;
  }
}
