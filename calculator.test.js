import Calculator from "./calculator.js";

describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test("should add two numbers correctly", () => {
    const result = calculator.add(2, 3);
    expect(result).toBe(5);
  });

  test('should subtract two numbers correctly', () => {
    const result = calculator.subtract(5, 3);
    expect(result).toBe(2);
  });

  test('should handle negative results', () => {
    const result = calculator.subtract(3, 5);
    expect(result).toBe(-2);
  });

  test('should multiply two numbers correctly', () => {
    const result = calculator.multiply(2, 5);
    expect(result).toBe(10);
  });

  test('should handle negative results', () => {
    const result = calculator.multiply(-2, 5);
    expect(result).toBe(-10);
  });

  test('should divide two positive numbers correctly', () => {
    const result = calculator.divide(10, 2);
    expect(result).toBe(5);
  });

  test('should divide two negative numbers correctly', () => {
    const result = calculator.divide(-10, -2);
    expect(result).toBe(5);
  });

  test('should divide mixed sign correctly', () => {
    const result_1 = calculator.divide(-10, 2);
    const result_2 = calculator.divide(10, -2);

    expect(result_1).toBe(-5);
    expect(result_2).toBe(-5);

  })

  test('shoulde handle division by 0', () => {
    expect(() => {calculator.divide(10, 0)}).toThrow('Division par zéro impossible');
    expect(() => { calculator.divide(0, 10); }).toThrow('Division par zéro impossible');
  });
});

