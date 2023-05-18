const axios = require("axios");

// Function to retrieve current weather for a location
async function getCurrentWeather(location, unit) {
  const apiKey = process.env.OPENWEATHERMAP_API_KEY;
  let option = "";
  if (unit.toLowerCase() === "celcius") {
    option = "metric";
  } else if (unit.toLowerCase() === "fahrenheit") {
    option = "imperial";
  } else {
    throw { cod: '400', message: 'Enter a valid temperature unit' };
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
  } catch (err) {
    throw err.response.data;
  }
}


module.exports = {
  getCurrentWeather,
};
