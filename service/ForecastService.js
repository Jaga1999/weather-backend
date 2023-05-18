const axios = require("axios");

// Function to retrieve weather forecast for a location
async function getWeatherForecast(location, unit) {
  const apiKey = process.env.OPENWEATHERMAP_API_KEY;
  let option = "";
  if (unit.toLowerCase() === "celcius") {
    option = "metric";
  } else if (unit.toLowerCase() === "fahrenheit") {
    option = "imperial";
  } else {
    throw { cod: '400', message: 'Enter a valid temperature unit' };
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
  } catch (err) {
    throw err.response.data;
  }
}

module.exports = {
  getWeatherForecast,
};
