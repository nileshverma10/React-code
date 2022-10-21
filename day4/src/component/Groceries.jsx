import { useEffect, useState } from "react";
import axios from "axios";

export const Groceries = () => {
  const [text, setText] = useState("");
  const[groceries, setGroceries]= useState([]);
   

  useEffect(() =>{
    axios.get("http//localhost:3001/groceries").then((res)=>{
        setGroceries(res.data);
    })
  },[]);
  
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick ={()=>{
        fetch("http//localhost:3001/groceries",{
            method:"POST",
            body: JSON.stringify({title:text, purchase: false}),
            headers:{
                "content-type":"application/json",
            },
        });
      }}
      >
      Add Item</button>
    </div>
  );
};
