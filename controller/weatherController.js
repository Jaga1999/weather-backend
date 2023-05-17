const { getWeatherForecast } = require("../service/ForecastService");
const { getCurrentWeather } = require("../service/currentService");

// Controller function to handle the current weather endpoint
async function CurrentWeather(req, res) {
  const { location, unit } = req.query;
  if (!location || !unit) {
    res.status(403).json({ error: "Enter a valid Input" });
  }
  try {
    const currentWeather = await getCurrentWeather(location, unit);
    res.status(200).json(currentWeather);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Sorry! Could not Fetch Current Weather Data" });
  }
}

// Route handler for getting weather forecast
async function WeatherForecast(req, res) {
  const { location, unit } = req.query;
  if (!location || !unit) {
    res.status(403).json({ error: "Enter a valid Location" });
  }

  try {
    const weatherForecast = await getWeatherForecast(location, unit);
    res.status(200).json(weatherForecast);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Sorry! Could not fetch Weather Forecast Data" });
  }
}

module.exports = {
  CurrentWeather,
  WeatherForecast,
};
