const stringLength = require('../src/string-length');

describe('stringLength', () => {
  it('returns a string character count', () => {
    //arrange
    const string = 'hello';
    const expected = 5;
    //act
    const charCount = stringLength(string);
    //assert
    expect(charCount).toEqual(expected);
  });
});
