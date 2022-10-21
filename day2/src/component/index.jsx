import { useState } from "react";

export function Counter() {
  const [Counter, setCounter] = useState(0);
  const [color, setColor] = useState();

  const handleChange = (value) => {
    setCounter(Counter + value);
    if (Counter % 2 !== 0) {
      console.log(value, "red");
      setColor(true);
    } else {
      console.log(value, "green");
      setColor(false);
    }
  };
  return (
    <div>
      <h3
        style={{
          color: color ? "green" : "red"
        }}
      >
        Counter:{Counter}
      </h3>
      <button
        onClick={() => {
          handleChange(1);
        }}
      >
        Add1
      </button>
      <button
        onClick={() => {
          handleChange(-1);
        }}
      >
        Sub1
      </button>
      <button
        onClick={() => {
          setCounter(Counter * 2);
        }}
      >
        double
      </button>
    </div>
  );
}
