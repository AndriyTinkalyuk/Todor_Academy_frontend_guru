import React, { useState, useEffect } from "react";

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);

  useEffect(() => {
    setFahrenheit((celsius * 1.8) + 32);
  }, [celsius]);

  const handleFahrenheitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = Number(e.target.value);
    setFahrenheit(f);
    setCelsius((f - 32) / 1.8);
  };

  return (
    <div>
      <label htmlFor="celsius">{celsius.toFixed(2)} градусів за Цельсієм</label>
      <input
        value={celsius}
        onChange={(e) => setCelsius(Number(e.target.value))}
        type="number"
        id="celsius"
      />

      <label htmlFor="fahrenheit">{fahrenheit.toFixed(2)} градусів за Фаренгейтом</label>
      <input
        value={fahrenheit}
        onChange={handleFahrenheitChange}
        type="number"
        id="fahrenheit"
      />
    </div>
  );
};

export default TemperatureConverter;
