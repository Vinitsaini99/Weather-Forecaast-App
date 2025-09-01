import React, { useState } from "react";
import MainScreen from "./pages/MainScreen.jsx";
import SearchScreen from "./pages/SearchScreen.jsx";

export default function App() {
  const [screen, setScreen] = useState("main");

  return (
    <div className="flex flex-col min-h-screen transition-all duration-700">
     
      <header className="flex justify-between items-center p-4 bg-blue-600 text-white shadow-md">
        <h1 className="text-2xl font-bold">🌤 Weather App</h1>
        <nav className="flex gap-3">
          <button
            onClick={() => setScreen("main")}
            className={`px-4 py-2 rounded ${
              screen === "main"
                ? "bg-white text-blue-600"
                : "hover:bg-blue-500 text-white"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setScreen("search")}
            className={`px-4 py-2 rounded ${
              screen === "search"
                ? "bg-white text-blue-600"
                : "hover:bg-blue-500 text-white"
            }`}
          >
            Search
          </button>
        </nav>
      </header>

     
      <main className="flex-grow">
        {screen === "main" ? <MainScreen /> : <SearchScreen />}
      </main>

    
      <footer className=" p-5 bg-blue-600 text-white  text-center text-xl shadow-inner">
        © 2025 Weather App | Made by Vinit.
      </footer>
    </div>
  );
}
