// Helper function to convert temperature from Celsius to Fahrenheit
function convertToFahrenheit(celsius) {
  return ((celsius * 9) / 5 + 32).toFixed(2);
}

module.exports = {
  convertToFahrenheit,
};
