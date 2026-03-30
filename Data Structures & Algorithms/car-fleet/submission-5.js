class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
  carFleet(target, position, speed) {
    let cars = [];
    let carFleet = [];
    for (let i = 0; i < speed.length; i++) {
      cars.push([position[i], speed[i]]);
    }
    cars.sort((a, b) => b[0] - a[0]);
    for (let i = 0; i < cars.length; i++) {
      let position = cars[i][0];
      let speed = cars[i][1];
      let arrivalTime = (target - position) / speed;
      if (
        carFleet.length === 0 ||
        arrivalTime > carFleet[carFleet.length - 1]
      ) {
        carFleet.push(arrivalTime);
      }
    }
    return carFleet.length;
  }
}
