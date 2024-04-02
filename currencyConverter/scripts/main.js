const currencies = [
  { code: "USD", name: "United States Dollar" },
  { code: "EUR", name: "Euro" },
  { code: "JPY", name: "Japanese Yen" },
  { code: "GBP", name: "British Pound Sterling" },
  { code: "AUD", name: "Australian Dollar" },
  { code: "CAD", name: "Canadian Dollar" },
  { code: "CHF", name: "Swiss Franc" },
  { code: "CNY", name: "Chinese Yuan" },
  { code: "SEK", name: "Swedish Krona" },
  { code: "NZD", name: "New Zealand Dollar" },
  { code: "MXN", name: "Mexican Peso" },
  { code: "SGD", name: "Singapore Dollar" },
  { code: "HKD", name: "Hong Kong Dollar" },
  { code: "NOK", name: "Norwegian Krone" },
  { code: "KRW", name: "South Korean Won" },
  { code: "TRY", name: "Turkish Lira" },
  { code: "RUB", name: "Russian Ruble" },
  { code: "INR", name: "Indian Rupee" },
  { code: "BRL", name: "Brazilian Real" },
  { code: "ZAR", name: "South African Rand" }
];

let currenciesFrom = document.querySelector("#currenciesfrom");
let currenciesTo = document.querySelector("#currenciesTo");
let inputConvert = document.querySelector("#convert");
let currencySymbol = document.querySelector(".currencySymbol");
let convertedAmount = document.querySelector("#convertedAmount");
let valueElement = document.querySelector("#value");



currencies.forEach(currency => {
  const optionFrom = document.createElement('option');
  optionFrom.value = currency.code;
  optionFrom.textContent = currency.name;
  currenciesFrom.appendChild(optionFrom);

  const optionTo = document.createElement('option');
  optionTo.value = currency.code;
  optionTo.textContent = currency.name;
  currenciesTo.appendChild(optionTo);

});

const getCurrencySymbol = (currencyCode) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: currencyCode })
    .formatToParts(0)
    .find(part => part.type === 'currency')
    .value;
}

let conversionRate = null;

const convertCurrency = () => {
  const amount = inputConvert.value;
  if (amount > 0 && conversionRate !== null) {
      const convertedValue = amount * conversionRate;
        convertedAmount.innerText = convertedValue.toFixed(2);
      currencySymbol.innerText = getCurrencySymbol(currenciesTo.value);
  }
};

const getExchangeRate = async () => {

  const fromCurrency = currenciesFrom.value;
  const toCurrency = currenciesTo.value;

  if (fromCurrency && toCurrency) 
  {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/00e67f8d9c8740e3bf34ae47/pair/${fromCurrency}/${toCurrency}`);
    if (response.ok) 
    {
      const conversionResult = await response.json();
      if (conversionResult.result == "success") 
      {
        conversionRate = Number(conversionResult.conversion_rate);

        if (inputConvert.value > 0)
        {
          convertCurrency();
        }
      }
    }
  }
  else 
  {
    conversionRate = null;
    currencySymbol.innerText = "";
    convertedAmount.innerText = "VALUE";
  }
}

currenciesFrom.addEventListener('change', getExchangeRate);
currenciesTo.addEventListener('change', getExchangeRate);
inputConvert.addEventListener('input', convertCurrency);
