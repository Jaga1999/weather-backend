const express = require("express");
const weatherRoutes = require("./routes/weatherRoutes");
const dotenv = require("dotenv").config();
const rateLimit = require('express-rate-limit');

const app = express();
const port = process.env.PORT || 5001;
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // maximum number of requests allowed
  message: 'Too many requests from this IP, please try again later.',
});


// Routes
app.use("/weather", apiLimiter,weatherRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
