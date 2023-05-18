const { getWeatherForecast } = require("../service/ForecastService");
const { getCurrentWeather } = require("../service/currentService");
const { query, validationResult } = require('express-validator');

// Controller function to handle the current weather endpoint
async function CurrentWeather(req, res) {
  const { location, unit } = req.query;
  // Validation using express-validator
  await query('location').notEmpty().withMessage('Location is required').run(req);
  await query('unit').notEmpty().withMessage('Unit is required').run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => ({
      field: error.path,
      message: error.msg,
    }));
    return res.status(400).json({ error: errorMessages });
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
  // Validation using express-validator
  await query('location').notEmpty().withMessage('Location is required').run(req);
  await query('unit').notEmpty().withMessage('Unit is required').run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => ({
      field: error.path,
      message: error.msg,
    }));
    return res.status(400).json({ error: errorMessages });
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
