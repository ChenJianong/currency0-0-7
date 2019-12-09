//  Food Central General Search
/*const url_fd = "https://api.nal.usda.gov/fdc/v1/search?api_key=4WdIvUD0RkjuanyS2VKjuIIqGOR6RkIPS4GuhyeF";
let fetchData = { 
    method: 'POST', 
    body: '{"generalSearchInput":"raw +broccoli"}', 
    headers: {
      'Content-Type': 'application/json'
    }
}
fetch(url_fd, fetchData)
.then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
     document.getElementById("content").innerHTML += "<h1>FoodData Central General Search</h1>" + JSON.stringify(data, undefined, 2) + "<br><br>";
    })  
   .catch(function(error) {
     document.getElementById("content").innerHTML += "Error with Food Central API: " + error;
  });  

//  Food Central Specific Item
const url_fd2 = "http://data.fixer.io/api/latest?access_key=a5dae196d138037a959833c36649fee8&format=1";
fetch(url_fd2)
.then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
     document.getElementById("content").innerHTML += "<h1>FoodData Central Specific Item</h1>" + JSON.stringify(data, undefined, 2) + "<br><br>";
    })  
   .catch(function(error) {
     document.getElementById("content").innerHTML += "Error with Food Central API: " + error;
  }); 

// fun translations morse code example
const BASE_URL = "https://api.funtranslations.com/translate/morse.json"; 
const url_ft = BASE_URL + "?text=Morse%20code%20is%20a%20dit%20and%20dah";

//const url = "https://randomuser.me/api/?results=10";

// fetch 
// more info here: https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
 fetch(url_ft)
  .then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
     document.getElementById("content").innerHTML += "<h1>Fun Translations Morse Code</h1>" + JSON.stringify(data, undefined, 2) + "<br><br>";
    })  
   .catch(function(error) {
     document.getElementById("content").innerHTML += "Error with Fun Translations API";
  });   
*/
// fun translations yoda example
let rate = 0; //global
let rate1 = 0;

var countries = [
  "CAD",
  "HKD",
  "ISK",
  "PHP",
  "DKK",
  "HUF",
  "CZK",
  "GBP",
  "RON",
  "SEK",
  "IDR",
  "INR",
  "BRL",
  "RUB",
  "USD",
  "EUR",
  "CNY",
  "JPY",
  "KRW",
  "THB",
  "CHF",
  "MYR",
  "BGN",
  "TRY",
  "NOK",
  "NZD",
  "ZAR",
  "MXN",
  "SGD",
  "AUD",
  "ILS",
  "HRK",
  "PLN"
];
const BASE_URL2 = "https://api.exchangeratesapi.io/latest?base=CAD";
//const url_ft2 = BASE_URL2 + "?access_key=a5dae196d138037a959833c36649fee8&format=2";
var i = 0;
const BASE_URL3 = "https://api.exchangeratesapi.io/latest?base=CAD";
function updateData(n, c) {
  fetch(BASE_URL3)
    .then(resp => resp.json()) // Transform the data into json
    .then(function(data) {
      document.getElementById("Exchangerate").innerHTML = "";

      document.getElementById("Exchangerate").innerHTML +=
        countries[n] + ": " + data.rates[countries[n]] + "<br>";
      rate = parseFloat(data.rates[countries[n]]);
      console.log(data.rates[countries[n]]);
    })
    .catch(function(error) {
      document.getElementById("content").innerHTML += error;
    });
}
function changeCurrency() {
  const select = document.getElementById("selectCurrency");
  const selected = select.options[select.selectedIndex];
  const geo = selected.value;

  updateData(geo);
}

document
  .getElementById("butDialogAdd")
  .addEventListener("click", changeCurrency());

//USD Exchange

var countries = [
  "CAD",
  "HKD",
  "ISK",
  "PHP",
  "DKK",
  "HUF",
  "CZK",
  "GBP",
  "RON",
  "SEK",
  "IDR",
  "INR",
  "BRL",
  "RUB",
  "CAD",
  "EUR",
  "CNY",
  "JPY",
  "KRW",
  "THB",
  "CHF",
  "MYR",
  "BGN",
  "TRY",
  "NOK",
  "NZD",
  "ZAR",
  "MXN",
  "SGD",
  "AUD",
  "ILS",
  "HRK",
  "PLN"
];
const BASE_URL4 = "https://api.exchangeratesapi.io/latest?base=USD";
//const url_ft2 = BASE_URL2 + "?access_key=a5dae196d138037a959833c36649fee8&format=2";
var i = 0;
const BASE_URL5 = "https://api.exchangeratesapi.io/latest?base=USD";
function updateData1(n, c) {
  fetch(BASE_URL4)
    .then(resp => resp.json()) // Transform the data into json
    .then(function(data) {
      document.getElementById("Exchangerate1").innerHTML = "";

      document.getElementById("Exchangerate1").innerHTML +=
        countries[n] + ": " + data.rates[countries[n]] + "<br>";
      rate1 = parseFloat(data.rates[countries[n]]);
      console.log(data.rates[countries[n]]);
    })
    .catch(function(error) {
      document.getElementById("content").innerHTML += error;
    });
}
function changeCurrency1() {
  const select = document.getElementById("selectCurrency1");
  const selected = select.options[select.selectedIndex];
  const geo = selected.value;

  updateData1(geo);
}

document
  .getElementById("butDialogAdd1")
  .addEventListener("click", changeCurrency1());

function calcAmount() {
  let convert = parseFloat(document.getElementById("input").value);
  console.log(convert);
  console.log(rate);
  let newValue = convert * rate;
  console.log(newValue);
  document.getElementById("output").innerHTML =
    Math.round(newValue * 100) / 100;
}

function calcAmount1() {
  let convert1 = parseFloat(document.getElementById("input1").value);
  console.log(convert1);
  console.log(rate1);
  let newValue = convert1 * rate1;
  console.log(newValue);
  document.getElementById("output1").innerHTML =
     Math.round(newValue * 100) / 100;
}
