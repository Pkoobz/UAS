import React, { useState, useEffect } from "react";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Manado&appid=ff31b0e9a4f9cb4b962e6e85b6441c47&units=metric`
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.log("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { main, weather } = weatherData;

  return (
    <div>
      <p>
        <img
          src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`}
          alt={weather[0].description}
        />
        {main.temp}°C
      </p>
    </div>
  );
};

export default Weather;
