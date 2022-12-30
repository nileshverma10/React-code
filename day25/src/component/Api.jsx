import axios from "axios";
import React from "react";
import { useState } from "react";

// const api = {
//   key: "38081323c5081e13ab9787ab61ae3007",
//   base: "https://api.openweathermap.org/data/2.5/",
// };

const Api = () => {
  const [apiData, setApiData] = useState([]);

  const handleClick = () => {
    axios
      //   .get(`${api.base}weather?q=${apiData}&units=metric&APPID=${api.key}`)
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=38081323c5081e13ab9787ab61ae3007"
      )
      .then((res) => {
        console.log(res);
        setApiData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {/* <button onClick={handleClick}>Click</button> */}
      <input
        onClick={handleClick}
        type="text"
        value={apiData}
        onChange={(e) => {
          setApiData(e.target.value);
        }}
      />
      {apiData &&
        apiData.map((e) => {
          return (
            <>
              <p>{e.base}</p>;
            </>
          );
        })}
    </div>
  );
};

export default Api;
