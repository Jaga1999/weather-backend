const axios = require("axios");
const conversionUtils = require("../utils/conversionUtils");

// Function to retrieve weather forecast for a location
async function getWeatherForecast(location, unit) {
  const apiKey = process.env.OPENWEATHERMAP_API_KEY;
  let option = "";
  if (unit.toLowerCase() === "celcius") {
    option = "metric";
  } else if (unit.toLowerCase() === "fahrenheit") {
    option = "imperial";
  } else {
    res.status(403).json({ error: "Enter a valid Location" });
  }

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=${option}`;

  try {
    const response = await axios.get(url);
    const forecastData = response.data;

    // Extract relevant information from forecastData
    const forecast = forecastData.list.map((item) => ({
      dateTime: item.dt_txt,
      temperature: item.main.temp,
      humidity: item.main.humidity,
      windSpeed: item.wind.speed,
      weatherConditions: item.weather[0].description,
    }));

    return forecast;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch weather forecast data");
  }
}

module.exports = {
  getWeatherForecast,
};
