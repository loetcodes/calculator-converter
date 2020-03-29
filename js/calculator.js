// JS for the calculator.

import * as Utils from "./utils.js";


// Calculator object
// const calculatorObj = {
//   displayValue : '0',
//   firstValue : null,
//   waitState : false,
//   operator : null
// };

// Calculator operations.
class Operations {
  add = (a, b) => {
    return a + b;
  }
  
}


// Displays the calculator
const displayCalculator = document.getElementById("calculator-btn");
displayCalculator.addEventListener("click", () => {
  let element = document.getElementById("feature-content");
  Utils.addClass(element, "slide-right");
});


// Add functionality to the calculator buttons.
const calculatorButtons = document.querySelectorAll('.calc-btn');
calculatorButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    let resultsDisplay = document.getElementById("calc-current");
    resultsDisplay.innerHTML += btn.innerHTML;
  })
});

// Declare a new calculator class
var operations = new Operations();









































// Equals functionality.
// const equalsCaller = document.getElementById("evaluate");
// equalsCaller.addEventListener("click", () => {
//   // Fetch the expression.
//   let exprDiv = document.getElementById("calc-current");
//   let expr = exprDiv.innerHTML;
//   // Evaluate the expression.
//   let exprAnswer = evaluateExpression(expr);
//   // Write result of calculation.
//   let historyCalc = document.getElementById("calc-history");
//   let calcItem = calcHistoryDiv(expr, exprAnswer);
//   historyCalc.appendChild(calcItem);
//   // Set expression to empty.
//   Utils.changeContent(exprDiv, " ");
// });


// // Clear All characters functionality.
// const clearExpression = document.getElementById("AC");
// clearExpression.addEventListener("click", () => {
//   // Empty the content of current window and the history.
//   let resultsDisplay = document.getElementById("calc-current");
//   Utils.changeContent(resultsDisplay, " ");
// });


// // Clear One character functionality.
// const clearCharacter = document.getElementById("C");
// clearCharacter.addEventListener("click", () => {
//   // Delete the last character of current expression.
//   let resultsDisplay = document.getElementById("calc-current");
//   let exprText = resultsDisplay.innerHTML;
//   let newContent = exprText.substring(0, exprText.length - 1);
//   Utils.changeContent(resultsDisplay, newContent);
// });


// PlusMinus functionality.













// Evaluate the expression.
// const evaluateExpression = (expr) => {
//   // Evaluates the expression
//   console.log("Evaluating the expression", expr);
//   return expr;
// }

// const calcHistoryDiv = (expr, answer) => {
//   // Creates a div element with the expression and answer
//   let calcExpression = document.createElement("DIV");
//   calcExpression.innerHTML = expr;
//   let calcAnswer = document.createElement("DIV");
//   calcAnswer.innerHTML = answer;
//   let outerDiv = document.createElement("DIV");
//   outerDiv.classList.add("calc-answer");
//   outerDiv.appendChild(calcExpression);
//   outerDiv.appendChild(calcAnswer);
//   return outerDiv;
// }