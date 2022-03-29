const Calculator = require('../src/calculator');

describe('Calculator', () => {
  describe('.add', () => {
    it('returns the sum of numbers given as arguments', () => {
      const numbersToAdd = [1, 5, 7];
      const expectedSum = 13;
      const result = new Calculator().add(...numbersToAdd);
      expect(result).toEqual(expectedSum);
    });
    it('returns 0 if no arguments are passed', () => {
      const numbersToAdd = [];
      const expectedSum = 0;
      const result = new Calculator().add(...numbersToAdd);
      expect(result).toEqual(expectedSum);
    });
    it('throws an error if any argument is not a number', () => {
      const numbersToAdd = [1, 3, 4, '4'];
      expect(() => {
        new Calculator().add(...numbersToAdd);
      }).toThrow(/must be numbers/);
    });
  });
  describe('.subtract', () => {
    it('returns the sum of numbers given as arguments', () => {
      const number = 8;
      const numbersToSubtract = [3, 1];
      const expectedResult = 4;
      const result = new Calculator().subtract(number, ...numbersToSubtract);
      expect(result).toEqual(expectedResult);
    });
    it('throws an error if any argument is not a number', () => {
      const number = 8;
      const numbersToSubtract = [1, 3, 4, undefined];
      expect(() => {
        new Calculator().subtract(number, ...numbersToSubtract);
      }).toThrow(/must be numbers/);
    });
    it('returns a negative number if subtraction results negative', () => {
      const number = 8;
      const numbersToSubtract = [10];
      const expected = -2;
      const result = new Calculator().subtract(number, ...numbersToSubtract);
      expect(result).toBe(expected);
    });
    it('subtracts decimal numbers', () => {
      const number = 1.1;
      const numbersToSubtract = [0.2, 0.3];
      const expected = 0.6;
      const result = new Calculator().subtract(number, ...numbersToSubtract);
      expect(result).toBeCloseTo(expected);
    });
  });
  describe('.multiply', () => {
    describe('it returns the result of multiplying the arguments', () => {
      const numbersToMultiply = [];
    });
  });
});
