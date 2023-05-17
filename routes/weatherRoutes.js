const express = require("express");
const {
  WeatherForecast,
  CurrentWeather,
} = require("../controller/weatherController");
const router = express.Router();

// Weather Forecast Endpoint
router.get("/forecast", WeatherForecast);

// Current Weather Endpoint
router.get("/current", CurrentWeather);

module.exports = router;
