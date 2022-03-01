import React, { useEffect, useState } from "react";
import "./app.css";

export default function App() {
  const [zipCode, setZipCode] = useState(90210);
  const [weatherData, setWeatherData] = useState({});

  function getWeather() {
    console.log("getting weather");

    fetch("/api/getZipcode", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ test: zipCode }),
    })
      .then((res) => res.json())
      .then((result) => setWeatherData(result))
      .catch((err) => console.log("error"));
  }

  return (
    <div>
      <form>input zip</form>
      <button onClick={getWeather}>Get Weather!</button>
      {JSON.stringify(weatherData)}
    </div>
  );
}
