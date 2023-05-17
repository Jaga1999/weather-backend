const axios = require("axios");
const conversionUtils = require("../utils/conversionUtils");

// Function to retrieve current weather for a location
async function getCurrentWeather(location) {
  const apiKey = process.env.OPENWEATHERMAP_API_KEY;
  const unit = "metric";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=${unit}`;

  try {
    const response = await axios.get(url);
    const currentWeatherData = response.data;

    // Extract relevant information from currentWeatherData
    const currentWeather = {
      temperature: {
        celsius: currentWeatherData.main.temp,
        fahrenheit: conversionUtils.convertToFahrenheit(
          currentWeatherData.main.temp
        ),
      },
      humidity: currentWeatherData.main.humidity,
      windSpeed: currentWeatherData.wind.speed,
      weatherConditions: currentWeatherData.weather[0].description,
      sunrise: currentWeatherData.sys.sunrise,
      sunset: currentWeatherData.sys.sunset,
    };

    return currentWeather;
  } catch (error) {
    console.error(error);
    res.status(404);
    throw new Error("Failed to fetch current weather data");
  }
}

module.exports = {
  getCurrentWeather,
};
