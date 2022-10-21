import { useState } from "react";
export const Index=()=>{
    const [count,setCount]=useState(0);
return (
  <div className="App" onMouseMove={(e)=>{
    console.log(e)
    setCount(`${e.clientX}, ${e.clientY}`)
  }}>
   <input type="text"/>
   <h2>{count}</h2>
  </div>
);
};

