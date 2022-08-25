const stringLength = require("./stringLength");

test("stringLength", () => {
  expect(stringLength("Test")).toBe(4);
});

test("check if it greater than 1 and less or equals 10", () => {
  expect(stringLength('Test')).toBeGreaterThan(1);
  expect(stringLength('Test')).toBeLessThan(10);
});
