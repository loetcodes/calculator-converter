// JS for the calculator.

import * as Utils from "./utils.js";

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


// Equals functionality.
const equalsCaller = document.getElementById("evaluate");
equalsCaller.addEventListener("click", () => {
  // Fetch the expression.
  let expr = document.getElementById("calc-current").innerHTML;
  console.log("Expression to be evaluated is: ", expr);
  // Evaluate the expression.
  let exprAnswer = evaluateExpression(expr);
  // Write result of calculation to display.
  let displayAnswer = document.getElementById("calc-current");
  displayAnswer.innerHTML = exprAnswer;
  // Write calculation expression to history window.
  let historyCalc = document.getElementById("calc-history");
  historyCalc.innerHTML += expr;
});


// PlusMinus functionality.


// Clear One character functionality.


// clear all characters functionality.


const evaluateExpression = (expr) => {
  // Evaluates the expression
  console.log("Evaluating the expression", expr);
  return "Evaluated!";
}