const { getWeatherForecast } = require("../service/ForecastService");
const { getCurrentWeather } = require("../service/currentService");

// Controller function to handle the current weather endpoint
async function CurrentWeather(req, res) {
  const { location, unit } = req.query;
  if (!req.query.location || !req.query.unit) {
    return res.status(400).json({ error: "Enter a valid Input" });
  }
  
  try {
    const currentWeather = await getCurrentWeather(location, unit);
    res.status(200).json(currentWeather);
  } catch (error) {
    const statusCode = parseInt(error.cod) || 500; 
    const errorMessage = error.message || "Sorry! Could not Fetch Current Weather Data";
    return res.status(statusCode).json({ error: errorMessage });
  }
}

// Route handler for getting weather forecast
async function WeatherForecast(req, res) {
  const { location, unit } = req.query;
  if (!req.query.location || !req.query.unit) {
    return res.status(400).json({ error: "Enter a valid Input" });
  }

  try {
    const weatherForecast = await getWeatherForecast(location, unit);
    res.status(200).json(weatherForecast);
  } catch (error) {
    const statusCode = parseInt(error.cod) || 500; 
    const errorMessage = error.message || "Sorry! Could not Fetch Current Weather Data";
    return res.status(statusCode).json({ error: errorMessage });
  }
}

module.exports = {
  CurrentWeather,
  WeatherForecast,
};
