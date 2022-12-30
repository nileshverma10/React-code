import React from "react";
import axios from "axios";
import { useState } from "react";
// import { useEffect } from "react";

const Nilesh = () => {
  const [apiData, setApiData] = useState([]);

  const handleClick = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        setApiData(res.data);
      })
      .catch((error) => {
        setApiData(error);
      });
  };
  //   useEffect(() => {
  //     handleClick();
  //   }, []);

  return (
    <div>
      <button onClick={handleClick}>Click On</button>

      {apiData &&
        apiData.map((e) => {
          return (
            <>
              <div className="col-md-3">
                <ol>
                  <li>{e.name}</li>
                  <li>{e.body}</li>
                </ol>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default Nilesh;
