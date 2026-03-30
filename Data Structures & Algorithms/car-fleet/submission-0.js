class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
  carFleet(target, position, speed) {
    let cars = [];
    let carsFleet = [];
    for (let i = 0; i < position.length; i++) {
      cars.push([position[i], speed[i]]);
    }
    cars.sort((a, b) => b[0] - a[0]);
    let time = 0;
    for (let index = 0; index < cars.length; index++) {
      time = (target - cars[index][0]) / cars[index][1];
      if (carsFleet.length === 0) {
        carsFleet.push([time]);
      } else {
        if (time <= carsFleet[carsFleet.length - 1][0]) {
          carsFleet[carsFleet.length - 1].push(time);
        } else {
          carsFleet.push([time]);
        }
      }
    }
    return carsFleet.length;
  }
}
