# API Documentation
Introduction
Welcome to the Weather API documentation. This API provides real-time and forecast weather data for a given location.

## Base URL

```
https://localhost:5000/
```
## Authentication
No authentication is required to access the Weather API.

## Endpoints
### Get Current Weather
Returns the current weather data for a specific location.

### Endpoint: /weather/current
### HTTP Method: GET
#### Parameters
- `location` (required): The name of the location for which you want to retrieve weather data.

- `unit` (required): The unit of temperature to be used in the response. Acceptable values are celsius and fahrenheit. If not provided, the error message will be send as response.

#### Example Request
```
GET /weather/current?location=London&unit=celsius
```
Example Response
```
{
  "location": "London",
  "temperature": 20,
  "unit": "Celsius",
  "description": "Partly cloudy"
}
```
#### Error Responses
- `400 Bad Request`: If any of the required parameters are missing or if the unit is not valid.
```
{
  "error": "Enter a valid input"
}
```
- `404 Not Found`: If the specified location is not found.
```
{
  "error": "City not found"
}
```
## Get Weather Forecast
Returns the weather forecast data for a specific location.

### Endpoint: /weather/forecast
### HTTP Method: GET
### Parameters
- `location` (required): The name of the location for which you want to retrieve weather forecast data.
- `unit` (required): The unit of temperature to be used in the response. Acceptable values are celsius and fahrenheit. If not provided, the error message will be send as response.
### Example Request
```
GET /weather/forecast?location=London&unit=fahrenheit
```
### Example Response
```
[
    {
        "dateTime": "2023-05-19 00:00:00",
        "temperature": 22.81,
        "humidity": 65,
        "windSpeed": 2.93,
        "weatherConditions": "broken clouds"
    },
    {
        "dateTime": "2023-05-19 03:00:00",
        "temperature": 27.2,
        "humidity": 55,
        "windSpeed": 5.06,
        "weatherConditions": "few clouds"
    },
]
```
### Error Responses
- `400 Bad Request`: If any of the required parameters are missing or if the unit is not valid.
```
{
  "error": "Enter a valid input"
}
```
- `404 Not Found`: If the specified location is not found.
```
{
  "error": "City not found"
}
```
### Rate Limiting
The Weather API has a rate limit of 100 requests per 15 minutes. If the rate limit is exceeded, you will receive a `Too Many Requests` response. 

Please ensure that your application stays within the specified rate limits to avoid disruptions in service.

### Support and Contact
If you have any questions or need assistance, please contact me jagasiva1999@gmail.com .

### Versioning
This documentation is based on API version 1.0.

### Changelog
1.0 (2023-05-18): Initial release of the Weather API documentation.
This is just a sample structure, and you can customize it further based on your specific needs. Remember to replace the base URL with the actual URL of your API.