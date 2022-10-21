
import { useState } from 'react';
import './App.css';
import { Stopwatch } from './component/Stopwatch';

function App() {
  const[show, setShow] = useState(true)
  return (
    <div className="App">
     {show ?<Stopwch/> : ""}
     <button onClick={() =>{
      setShow(show ? false : true)
     }}
     >
     {show?"Hide Timer" : "Show Timer"};
     </button>
    </div>
  );
}

export default App;
