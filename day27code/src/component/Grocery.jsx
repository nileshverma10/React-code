import React from "react";
import { useState } from "react";

const Grocery = () => {
  const [data, setData] = useState("");
  return (
    <>
      <input type="text" onChange={(e) => setData(e.target.value)} />
      <button
        onClick={() => {
          fetch(" http://localhost:4000/profile", {
            method: "POST",
            body: JSON.stringify({ title: data, purchage: false }),
            header: {
              "content-type": "application/json",
            },
          });
        }}
      >
        Click
      </button>
    </>
  );
};

export default Grocery;
