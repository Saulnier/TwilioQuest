function calculatePower(arr) {
  //adjust values by * 2
  //add all the numbers together .reduce()
  //return result
  let totalPower = arr.reduce((sum, current) => sum + current, 0);
  let totalPowerMultiply = totalPower * 2;

  return totalPowerMultiply;
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.

const laserPower = calculatePower([1, 3, 8]);
console.log("Required laser power is " + laserPower);
// should be 24
