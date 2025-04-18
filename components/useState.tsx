import React, { useState } from "react";

/** useState Page */
export const UseState = () => {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });

  const updateColor = () => {
    setCar((prevCar) => ({ ...prevCar, color: "blue" }));
  };

  return (
    <div>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button type="button" onClick={updateColor}>
        Blue
      </button>
    </div>
  );
};
