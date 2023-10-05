import React, { useState } from "react";
import "./Config.css";

function NumberIncrementer({ label }) {
  const [value, setValue] = useState(0);
  const increment = () => setValue(value + 1);
  const decrement = () => setValue(value - 1);

  return (
    <div className="incrementer">
      <p>{label}</p>
      <div className="butt">
        <button onClick={decrement}>&lt;</button>
        <input type="number" value={value} readOnly />
        <button onClick={increment}>&gt;</button>
      </div>
    </div>
  );
}

export default function Config() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="ConfigForm">
      <h1>Setup Config Form</h1>
      <hr />
      <NumberIncrementer label="Choose how much time to wait before showing the survey" />
      <NumberIncrementer label="Choose how much time to wait before showing the survey" />
      <div>
        <p>Display Frequency - every</p>
        <select value={selectedOption} onChange={handleChange}>
          <option value="5">5 min</option>
          <option value="10">10 min</option>
          <option value="30">30 min</option>
        </select>
      </div>
      <hr />
      <br />
      <br />
      <button>Save</button>
    </div>
  );
}
