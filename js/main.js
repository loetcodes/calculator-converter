// Main JS for Currency Converter and Calculator.

// Displays the calculator
const displayCalculator = document.getElementById("calculator-btn");
displayCalculator.addEventListener("click", () => {
  let element = document.getElementById("feature-content");
  addClass(element, "slide-right");
});

// Displays the converter
const displayConverter = document.getElementById("converter-btn");
displayConverter.addEventListener("click", () => {
  let element = document.getElementById("feature-content");
  removeClass(element, "slide-right");
});

// Toggles the currency list visible or invisible.
const showCurrencies = document.getElementById("currency-list-btn");
showCurrencies.addEventListener("click", function () {
  if (this.classList.contains("opened")) {
    removeClass(this, "opened");
    changeContent(this, "Add Currency");
  } else {
    addClass(this, "opened");
    changeContent(this, "Done");
  }
});

// Add functionality to the buttons.
const calculatorButtons = document.querySelectorAll('.btn');
calculatorButtons.forEach((btn) => {
  // let element = btn;
  btn.addEventListener("click", function () {
    let resultsDisplay = document.getElementById("current-calc");
    resultsDisplay.innerHTML += btn.innerHTML;
  })
});

const addClass = (element, classItem) => {
  // Adds a given class to an element.
  if (!element.classList.contains(classItem)) {
    element.classList.add(classItem);
  }
}

const removeClass = (element, classItem) => {
  // Removes a given class from an element.
  if (element.classList.contains(classItem)) {
    element.classList.remove(classItem);
  }
}

const changeContent = (element, newText) => {
  // Changes the inner content of an element.
  element.innerHTML = newText;
}



















// const currencies = "../currency.json";
// const exchangeApi = "https://api.exchangerate-api.com/v4/latest/";

// const convertCurrency = (currFrom, currTo) => {
//   // Returns the conversion ratio for a currFrom to a currTo
//   let inputCurr = currFrom;
//   let outputCurr = currTo;
//   let currencyRate;
//   // If exchange rate date is current, use current json.

//   // Fetch the exchange rate if exchange rate is old
//   fetch(exchangeApi + currFrom)
//     .then(result => result.json())
//     .then(result => {
//       currencyRate = result.rates[currTo];
//       console.log('Currency rate is', currencyRate);
//     })

// }