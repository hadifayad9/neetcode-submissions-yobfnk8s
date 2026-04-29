class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
  carFleet(target, position, speed) {
    let carFleet = [];
    let cars = [];
    for (let i = 0; i < position.length; i++) {
      cars.push([position[i], speed[i]]);
    }
    cars.sort((a, b) => b[0] - a[0]);
    for (let i = 0; i < cars.length; i++) {
      let position = cars[i][0];
      let speed = cars[i][1];
      let distance = (target - position) / speed;
      if (carFleet.length === 0 || distance > carFleet[carFleet.length - 1]) {
        carFleet.push(distance);
      }
    }
    return carFleet.length;
  }
}
