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
    for (let i = 0; i < position.length; i++) {
      cars.push([position[i], speed[i]]);
    }
    cars.sort((a, b) => b[0] - a[0]);
    for (let i = 0; i < cars.length; i++) {
      let carPosition = cars[i][0];
      let carSpeed = cars[i][1];
      let arrivalMoves = (target - carPosition) / carSpeed;
      if (
        carFleet.length === 0 ||
        arrivalMoves > carFleet[carFleet.length - 1]
      ) {
        carFleet.push(arrivalMoves);
      }
    }
    return carFleet.length;
  }
}
