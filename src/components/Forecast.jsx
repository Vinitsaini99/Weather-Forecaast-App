import React from "react";

export default function Forecast({ forecast }) {
  if (!forecast) return null;

  const dailyForecast = forecast.list.filter(item =>
    item.dt_txt.includes("12:00:00")
  );

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-5 max-w-5xl mx-auto max-w-md mx-auto mt-6">
      {dailyForecast.map((day, index) => (
        <div key={index} className="bg-black/20 backdrop-blur-md rounded-xl shadow-lg p-1 text-center">
          <p className="font-semibold text-gray-800">
            {new Date(day.dt * 1000).toLocaleDateString("en-US", { weekday: "short", day: "numeric" })}
          </p>
          <p className="text-xl font-bold text-blue-600">{Math.round(day.main.temp)}°C</p>
          <p className="capitalize text-gray-700">{day.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
}
