const { fizzBuzz } = require('./fuzzfizz');

test('returns an array of length 100', () => {
    const result = fizzBuzz();
    expect(result.length).toBe(100);
});

test('returns correct values for the first 15 elements', () => {
    const result = fizzBuzz();
    const expected = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz'];
    expect(result.slice(0, 15)).toEqual(expected);
});

