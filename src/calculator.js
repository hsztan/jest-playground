class Calculator {
  result = 0;

  add(...nums) {
    if (nums.length) {
      if (!nums.every((num) => typeof num === 'number')) {
        throw new Error('All arguments must be numbers');
      }
      this.result = nums.reduce((acc, curr) => {
        acc += curr;
        return acc;
      }, 0);
    }
    return this.result;
  }

  subtract(mainNum, ...nums) {
    if (nums.length) {
      if (!nums.every((num) => typeof num === 'number')) {
        throw new Error('All arguments must be numbers');
      }
      this.result = nums.reduce((acc, curr) => {
        acc -= curr;
        return acc;
      }, mainNum);
    }
    return this.result;
  }
}

module.exports = Calculator;
