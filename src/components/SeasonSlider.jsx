import React, { useState, useEffect } from "react";
import { Sun, CloudRain, Snowflake } from "lucide-react";

const seasons = [
  {
    title: "Summer",
    description:
      "Sunny days, warm breezes, and the perfect time for beaches and adventures.",
    gradient: "from-yellow-400 via-orange-500 to-red-500",
    icon: <Sun className="w-16 h-16 text-yellow-500 animate-spin-slow" />,
  },
  {
    title: "Monsoon",
    description:
      "Refreshing rains, cool winds, and nature at its most vibrant and alive.",
    gradient: "from-blue-400 via-blue-600 to-indigo-700",
    icon: <CloudRain className="w-16 h-16 text-blue-500 animate-bounce" />,
  },
  {
    title: "Winter",
    description:
      "Chilly winds, cozy nights, and a calm white touch of seasonal magic.",
    gradient: "from-cyan-400 via-blue-500 to-purple-600",
    icon: <Snowflake className="w-16 h-16 text-cyan-500 animate-pulse" />,
  },
];

export default function SeasonSlider({ setBgGradient }) {
  const [index, setIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % seasons.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  
  useEffect(() => {
    setBgGradient(seasons[index].gradient);
  }, [index, setBgGradient]);

  const season = seasons[index];

  return (
    <div className="transition-all duration-700 ease-in-out text-gray-800">
      <div className="flex flex-col items-center gap-4">
        {season.icon}
        <h2 className="text-3xl font-bold">{season.title}</h2>
        <p className="text-lg max-w-lg">{season.description}</p>
      </div>
    </div>
  );
}
