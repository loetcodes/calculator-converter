// Main JS for Currency Converter and Calculator.

// Displays the calculator
const displayCalculator = document.getElementById("calculator-btn");
displayCalculator.addEventListener("click", () => {
  addClass("feature-content", "slide-right");
});

// Displays the converter
const displayConverter = document.getElementById("converter-btn");
displayConverter.addEventListener("click", () => {
  removeClass("feature-content", "slide-right");
});

const addClass = (elementId, classItem) => {
  // Adds a given class to an element.
  let element = document.getElementById(elementId);
  if (!element.classList.contains(classItem)) {
    element.classList.add(classItem);
  }
}

const removeClass = (elementId, classItem) => {
  // Removes a given class from an element.
  let element = document.getElementById(elementId);
  if (element.classList.contains(classItem)) {
    element.classList.remove(classItem);
  }
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