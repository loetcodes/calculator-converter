// JS for the converter.

import * as Utils from "./utils.js";

// Displays the converter
const displayConverter = document.getElementById("converter-btn");
displayConverter.addEventListener("click", () => {
  let element = document.getElementById("feature-content");
  Utils.removeClass(element, "slide-right");
});


// Toggles the currency list visible or invisible.
const showCurrencies = document.getElementById("currency-list-btn");
showCurrencies.addEventListener("click", function () {
  if (this.classList.contains("opened")) {
    Utils.removeClass(this, "opened");
    Utils.changeContent(this, "Add Currency");
  } else {
    Utils.addClass(this, "opened");
    Utils.changeContent(this, "Done");
  }
});













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