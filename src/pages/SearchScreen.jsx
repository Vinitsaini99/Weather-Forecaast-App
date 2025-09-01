import React, { useState } from "react";
import axios from "axios";
import WeatherCard from "../components/WeatherCard.jsx";
import Forecast from "../components/Forecast.jsx";

const API_KEY = "6ffc1f624cabd77845fbfa7dc8f8c934"; 

export default function SearchScreen() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      setError("");
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(res.data);

      const forecastRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      setForecast(forecastRes.data);
    } catch {
      setError("City not found. Please try again.");
    }
  };

  return (
    <div className="flex flex-col min-h-full items-center justify-start px-4 py-6 sm:px-6">
      
      <div className="w-full max-w-sm sm:max-w-md mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            className="border rounded-lg p-2 flex-1 text-sm sm:text-base"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-600 text-sm sm:text-base"
          >
            Search
          </button>
        </div>
        {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
      </div>

      
      <div className="w-full max-w-sm sm:max-w-md space-y-6">
        <WeatherCard weather={weather} />
        <Forecast forecast={forecast} />
      </div>
    </div>
  );
}
