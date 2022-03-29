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
});
