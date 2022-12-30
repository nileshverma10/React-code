import { useState } from "react"

export const Counter =() => {
    const [Counter , setCounter] = useState(0);
       const handleChange = (value) =>{
        setCounter(Counter+value)
       }
    return(
        <>
        <h1>Counter:{Counter}</h1>  
       <button onClick={() =>{
         handleChange (1) 
       }}>+</button>
            <button onClick={() =>{
                handleChange (-1) 
            }}>-</button>
        </>
    );
};