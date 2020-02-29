// Calculator and Currency Converter.
const currencies = "../currency.json";
const exchangeApi = "https://api.exchangerate-api.com/v4/latest/";

const convertCurrency = (currFrom, currTo) => {
  // Returns the conversion ratio for a currFrom to a currTo
  let inputCurr = currFrom;
  let outputCurr = currTo;
  let currencyRate;
  // If exchange rate date is current, use current json.

  // Fetch the exchange rate if exchange rate is old
  fetch(exchangeApi + currFrom)
    .then(result => result.json())
    .then(result => {
      currencyRate = result.rates[currTo];
      console.log('Currency rate is', currencyRate);
    })

}