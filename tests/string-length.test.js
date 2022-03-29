const stringLength = require('../src/string-length');

describe('stringLength', () => {
  it('returns a string character count', () => {
    const string = 'hello';
    const expected = 5;
    const charCount = stringLength(string);
    expect(charCount).toEqual(expected);
  });
  test('throw and error if string < 1 char', () => {
    const string = '';
    expect(() => {
      stringLength(string);
    }).toThrow(/less than 1/);
  });
  test('throw and error if string > 10 chars', () => {
    const string = 'My name is John Smith';
    expect(() => {
      stringLength(string);
    }).toThrow(/has more than 10/);
  });
});
