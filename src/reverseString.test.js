const reverseString = require("./reverseString");

test("reverseString", () => {
  expect( reverseString("test")).toBe("tset");
});

test("reverseString", () => {
  expect( reverseString("sami")).toBe("imas");
});
