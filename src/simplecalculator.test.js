const calculator = require('./simplecalculator')

const operation1 = new calculator(70 , 30)
const operation2 = new calculator( 60, 40)

describe ('calculator', () => {
    test ('', () => {
        expect(operation1.add()).toBe(100)
        expect(operation2.add()).toBe(100);
    })

    test ('', () => {
      expect(operation1.sub()).toBe(40);
      expect(operation2.sub()).toBe(20);
    })

    test("", () => {
      expect(operation1.multiply()).toBe(2100);
      expect(operation2.multiply()).toBe(2400);
    });

    test("", () => {
      expect(operation1.divide()).toBe(2.3333333333333335);
      expect(operation2.divide()).toBe(1.5);
    });

})