import {
  sum,
  capitalize,
  reverseString,
  calculator,
  ceaserCipher,
  analyzeArray,
} from "./sum.js";

test("sum", () => {
  expect(sum(1, 2)).toBe(3);
});

test("Capitalises first letter", () => {
  expect(capitalize("odin")).toBe("Odin");
});

test("Reverses String", () => {
  expect(reverseString("malayalam")).toBe("malayalam");
});

test("Calculator", () => {
  expect(calculator.sum(1, 2)).toBe(3);
  expect(calculator.mul(2, 2)).toBe(4);
  expect(calculator.sub(4, 2)).toBe(2);
  expect(calculator.div(4, 2)).toBe(2);
});

test("Ceaser Cipher", () => {
  expect(ceaserCipher("xyz", 3)).toBe("abc");
});

test("Analyze Array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length()).toBe(6);
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average()).toBe(4);
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min()).toBe(1);
  // expect(analyzeArray([1, 8, 3, 4, 2, 6]).max()).toBe(8);
});
