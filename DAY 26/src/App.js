import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setCounter((p) => p + 1);
    }, 1000);
  }, []);
  return (
    <div className="App">
      <h2>Counter:{counter}</h2>
      <button
        onClick={() => {
          clearInterval();
        }}
      >
        Stop
      </button>
    </div>
  );
}
export default App;
