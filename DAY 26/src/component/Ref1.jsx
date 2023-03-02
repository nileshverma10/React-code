import React from "react";
import { useState, useEffect, useRef } from "react";

const Ref1 = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    ref.current = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
  }, []);

  return (
    <>
      <h1>Counter:{counter}</h1>
      <button
        onClick={() => {
          clearInterval(ref.current);
        }}
      >
        stop
      </button>
    </>
  );
};

export default Ref1;
