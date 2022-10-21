
import './App.css';
import { useState } from 'react';

function App() {
  const[theme, setTheme]=useState("ligth");
  return (
    <div className="App">
    <button onClick={() => {
      theme={theme}
      console.log("one");
    }}>sub1 </button>
     <button onClick={() => {
      theme={theme}
      console.log("two");
    }}>Add1 </button>
    <button onClick={()=>{
      setTheme(theme==="light"? "dark":"light")
    }}> change theme</button>
    </div>
  );
}

export default App;
