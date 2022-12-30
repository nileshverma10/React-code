import axios from "axios";
import React from "react";
import { useState } from "react";

const Weather = () => {
  const [data, setData] = useState("");
  const [apiData, setApiData] = useState({});

  const handleClick = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=38081323c5081e13ab9787ab61ae3007`
      )
      .then((res) => {
        console.log(res);
        setApiData(res.data);
      })
      .catch((error) => {
        console.log(error);
        // setApiData(error);
      });
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter thr city"
          value={data}
          onChange={(e) => {
            setData(e.target.value);
          }}
        />
        <button onClick={handleClick}>Click</button>
        {
          <>
            <h1> Temp:{apiData?.main?.temp}</h1>
            <h1>Wind Speed:{apiData?.wind?.speed}</h1>
          </>
        }
      </div>
    </>
  );
};

export default Weather;
