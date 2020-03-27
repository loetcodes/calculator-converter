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
    let resultsDisplay = document.getElementById("current-calc");
    resultsDisplay.innerHTML += btn.innerHTML;
  })
});









