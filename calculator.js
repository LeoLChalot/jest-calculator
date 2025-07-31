export default class Calculator {
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    if (a == 0 || b == 0){
      throw new Error('Division par zéro impossible')
    }
    return a / b;
  }
}

