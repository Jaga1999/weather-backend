// Helper function to convert temperature from Kelvin to Celsius
function convertToCelsius(temperature) {
  return (temperature - 273.15).toFixed(2);
}

// Helper function to convert temperature from Celsius to Fahrenheit
function convertToFahrenheit(celsius) {
  return ((celsius * 9) / 5 + 32).toFixed(2);
}

module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
