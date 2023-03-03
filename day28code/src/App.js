import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const ref=useRef(null);

  // useEffect(() => {
  //   setInterval(() => {
  //     setCounter((p) => p + 1);
  //   }, 1000);
  // }, []);

  useEffect(() => {
  ref.current=  setInterval(() => {
      setCounter((p) => p + 1);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <h1>Counter:{counter}</h1>
      <button
        onClick={() => {
          clearInterval( ref.current);
        }}
      >
        Stop
      </button>
    </div>
  );
}

export default App;
