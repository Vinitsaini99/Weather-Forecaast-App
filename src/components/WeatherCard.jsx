import React from "react";
import { Cloud, Wind, Droplets } from "lucide-react"; 

export default function WeatherCard({ weather }) {
  if (!weather) return null;

  return (
    <div className="w-full max-w-sm mx-auto mt-6 
      bg-gradient-to-br from-blue-400/30 via-blue-500/20 to-indigo-600/20 
      backdrop-blur-xl shadow-lg rounded-2xl p-6 text-center 
      border border-blue-300/30">
      
      
      <h2 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-md">
        {weather.name}
      </h2>

      
      <div className="flex flex-col items-center justify-center mt-4">
        <Cloud className="w-12 h-12 text-blue-400 mb-2" />
        <p className="text-4xl sm:text-5xl font-extrabold text-white">
          {Math.round(weather.main.temp)}°C
        </p>
        <p className="capitalize text-lg text-blue-500 mt-1">
          {weather.weather[0].description}
        </p>
      </div>

      
      <div className="flex justify-around items-center mt-6 text-blue-600/90 text-sm sm:text-base">
        <div className="flex flex-col items-center">
          <Droplets className="w-5 h-5 mb-1 text-blue-600" />
          <p>{weather.main.humidity}%</p>
          <span className="text-xs">Humidity</span>
        </div>
        <div className="flex flex-col items-center">
          <Wind className="w-5 h-5 mb-1 text-gray-600" />
          <p>{weather.wind.speed} m/s</p>
          <span className="text-xs">Wind</span>
        </div>
      </div>
    </div>
  );
}
