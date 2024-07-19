import axios from "axios";

export const fetchWeatherForecast = async (params) => {
  try {
    const response = await axios.get("api/v1/weather/forecast", {
      params: {
        cityName: params.cityName,
        days: params.days,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching weather forecast:", error);
    throw error;
  }
};

export const fetchLocations = async (params) => {
  try {
    const response = await axios.get("api/v1/weather/locations", {
      params: {
        cityName: params.cityName,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching locations:", error);
    throw error;
  }
};
