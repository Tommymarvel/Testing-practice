const capitalize = require('./capitalize')

test ("capitalize", () => {
  expect(capitalize("marvellous")).toBe("Marvellous");
});