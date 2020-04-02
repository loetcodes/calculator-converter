// Arithmetic Operations

export class Operations {
  add = (a, b) => {
    // Adds two numbers.
    let inputValidity = (Number.isNaN(a) || Number.isNaN(b));
    return inputValidity ? false : a + b;
  }

  subtract = (a, b) => {
    // Subtracts two numbers.
    let inputValidity = (Number.isNaN(a) || Number.isNaN(b));
    return inputValidity ? false : a - b;
  }

  multiply = (a, b) => {
    // Multiplies two numbers.
    let inputValidity = (Number.isNaN(a) || Number.isNaN(b));
    return inputValidity ? false : a * b;
  }

  divide = (a, b) => {
    // Divides two numbers.
    let inputValidity = (Number.isNaN(a) || Number.isNaN(b));
    return inputValidity || (b === 0 || b === 0.0) ? false : a / b;
  }

  modulus = (a, b) => {
    // Modulus of two numbers.
    let inputValidity = (Number.isNaN(a) || Number.isNaN(b));
    return inputValidity || (b === 0 || b === 0.0) ? false : a % b;
  }

  plusMinus = (a) => {
    // Negates a value.
    return Number.isNaN(a) ? false : -1 * a;
  }
}

