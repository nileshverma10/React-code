import React from "react";
import { useState } from "react";
import "./Calc.css";
const Calc = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.value));
  };

  const clearData = () => {
    setResult("");
  };

  const backSpace = () => {
    setResult(result.slice(0, -1));
  };

  const total = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };
  return (
    <>
      <h1 className="h1">CALCULATOR</h1>
      <div className="container">
        <input className="input" type="text" value={result} />
        <br />
        <div className="btn">
          <button value="+" onClick={handleClick}>
            +
          </button>
          <button value="-" onClick={handleClick}>
            -
          </button>
          <button value="/" onClick={handleClick}>
            /
          </button>
          <button value="*" onClick={handleClick}>
            *
          </button>
          <button value="%" onClick={handleClick}>
            %
          </button>
          <button value="1" onClick={handleClick}>
            1
          </button>
          <button value="2" onClick={handleClick}>
            2
          </button>
          <button value="3" onClick={handleClick}>
            3
          </button>
          <button value="4" onClick={handleClick}>
            4
          </button>
          <button value="5" onClick={handleClick}>
            5
          </button>
          <button value="6" onClick={handleClick}>
            6
          </button>
          <button value="7" onClick={handleClick}>
            7
          </button>
          <button value="8" onClick={handleClick}>
            8
          </button>
          <button value="9" onClick={handleClick}>
            9
          </button>
          <button value="0" onClick={handleClick}>
            0
          </button>
          <button onClick={total}>=</button>
          <button value="X" onClick={backSpace}>
            X
          </button>
          <button onClick={clearData}>C</button>
          <button value="00" onClick={handleClick}>
            00
          </button>
          <button onClick={clearData}>clear</button>
        </div>
      </div>
    </>
  );
};

export default Calc;
