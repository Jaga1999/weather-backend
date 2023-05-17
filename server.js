const express = require("express");
const weatherRoutes = require("./routes/weatherRoutes");
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT || 5001;

// Routes
app.use("/weather", weatherRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
