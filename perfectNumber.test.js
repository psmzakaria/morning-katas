const {isPerfect, isAbundant, isDeficient} = require("./perfectNumber");

test("should return true if the number is a perfect number", () => {
  expect(isPerfect(6)).toBeTruthy();
  expect(isPerfect(28)).toBeTruthy();
  expect(isPerfect(496)).toBeTruthy();
  expect(isPerfect(8128)).toBeTruthy();
});

test("should return false if the number is not a perfect number", () => {
  expect(isPerfect(10)).toBeFalsy();
  expect(isPerfect(2344)).toBeFalsy();
});

test('should return true if the sum of all factors is greater than the number itself', () => {
    expect(isAbundant(12)).toBeTruthy()
    expect(isAbundant(120)).toBeTruthy()
});

test('should return false if the sum of all factors is not greater than the number itself', () => {
    expect(isAbundant(10)).toBeFalsy()
    expect(isAbundant(6)).toBeFalsy()
});

test('should return true if the sum of all factors is lesser than the number itself', () => {
    expect(isDeficient(10)).toBeTruthy()
    expect(isDeficient(3)).toBeTruthy()
});

test('should return false if the sum of all factors is not lesser than the number itself', () => {
    expect(isDeficient(12)).toBeFalsy()
    expect(isDeficient(6)).toBeFalsy()
});