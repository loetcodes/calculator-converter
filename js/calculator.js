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
  let exprDiv = document.getElementById("calc-current");
  let expr = exprDiv.innerHTML;
  // Evaluate the expression.
  let exprAnswer = evaluateExpression(expr);
  // Write result of calculation.
  let historyCalc = document.getElementById("calc-history");
  let calcItem = calcHistoryDiv(expr, exprAnswer);
  historyCalc.appendChild(calcItem);
  // Set expression to empty.
  Utils.changeContent(exprDiv, " ");
});


// PlusMinus functionality.


// Clear One character functionality.


// clear all characters functionality.


const evaluateExpression = (expr) => {
  // Evaluates the expression
  console.log("Evaluating the expression", expr);
  return "Evaluated!";
}

const calcHistoryDiv = (expr, answer) => {
  // Creates a div element with the expression and answer
  let calcExpression = document.createElement("DIV");
  calcExpression.innerHTML = expr;
  let calcAnswer = document.createElement("DIV");
  calcAnswer.innerHTML = answer;
  let outerDiv = document.createElement("DIV");
  outerDiv.classList.add("calc-answer");
  outerDiv.appendChild(calcExpression);
  outerDiv.appendChild(calcAnswer);
  return outerDiv;
}