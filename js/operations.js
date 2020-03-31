// Arithmetic Operations

export class Operations {
  add = (a, b) => {
    // Adds two numbers.
    let inputValidity = (typeof(a) !== 'number' || typeof(b) !== 'number');
    return inputValidity ? false : a + b;
  }

  subtract = (a, b) => {
    // Subtracts two numbers.
    let inputValidity = (typeof(a) !== 'number' || typeof(b) !== 'number');
    return inputValidity ? false : a - b;
  }

  multiply = (a, b) => {
    // Multiplies two numbers.
    let inputValidity = (typeof(a) !== 'number' || typeof(b) !== 'number');
    return inputValidity ? false : a * b;
  }

  divide = (a, b) => {
    // Divides two numbers.
    let inputValidity = (typeof(a) !== 'number' || typeof(b) !== 'number');
    return inputValidity || (b === 0 || b === 0.0) ? false : a / b;
  }

  modulus = (a, b) => {
    // Modulus of two numbers.
    let inputValidity = (typeof(a) !== 'number' || typeof(b) !== 'number');
    return inputValidity || (b === 0 || b === 0.0) ? false : a % b;
  }

  plusMinus = (a) => {
    // Negates a value.
    return typeof(a) !== 'number' ? false : -1 * a;
  }
}

