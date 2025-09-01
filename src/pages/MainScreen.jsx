import React, { useState } from "react";
import SeasonSlider from "../components/SeasonSlider.jsx";

export default function MainScreen() {
  const [bgGradient, setBgGradient] = useState("from-yellow-400 via-orange-500 to-red-500");

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-[90vh] transition-all duration-700 bg-gradient-to-r ${bgGradient}`}
    >
      <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-2xl w-full text-center space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">🌤 Seasonal Weather Showcase</h2>
        <SeasonSlider setBgGradient={setBgGradient} />
      </div>
    </div>
  );
}
