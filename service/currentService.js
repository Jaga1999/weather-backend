const axios = require("axios");
const conversionUtils = require("../utils/conversionUtils");

// Function to retrieve current weather for a location
async function getCurrentWeather(location, unit) {
  const apiKey = process.env.OPENWEATHERMAP_API_KEY;
  let option = "";
  if (unit.toLowerCase() === "celcius") {
    option = "metric";
  } else if (unit.toLowerCase() === "fahrenheit") {
    option = "imperial";
  } else {
    res.status(403).json({ error: "Enter a valid Location" });
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=${option}`;

  try {
    const response = await axios.get(url);
    const currentWeatherData = response.data;

    // Extract relevant information from currentWeatherData
    const currentWeather = {
      temperature: currentWeatherData.main.temp,
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
