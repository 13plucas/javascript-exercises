const convertToCelsius = function(tempInFahrenheit) {
  let celcius = (tempInFahrenheit - 32) * (5 / 9);
  let rounded = Math.round(celcius * 10) / 10;
  console.log(rounded);
};

const convertToFahrenheit = function(tempInCelcius) {
  let fahrenheit = (tempInCelcius * 9/5 + 32);
  let rounded = Math.round(fahrenheit * 10) / 10;
  console.log(rounded);
};

convertToCelsius(32);
convertToCelsius(100);
convertToCelsius(-100);

convertToFahrenheit(0);
convertToFahrenheit(73.2);
convertToFahrenheit(-10);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
