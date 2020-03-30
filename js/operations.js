// Basic Calculator Operations

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

// Operator levels BODMAS/PEMDAS
// export class OperatorItems {
//   constructor(Operations) {
//     this.add = {
//       level: 1,
//       operation: Operations.add
//     }
//     this.subtract = {
//       level: 1,
//       operation: Operations.subtract
//     }
//     this.multiply = {
//       level: 2,
//       operation: Operations.multiply
//     }
//     this.divide = {
//       level: 2,
//       operation: Operations.divide
//     }
//     this.modulus = {
//       level: 2,
//       operation: Operations.modulus
//     }
//   }
// }