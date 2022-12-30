import React from "react";
import { useState } from "react";
import axios from "axios";

const api = {
  key: "38081323c5081e13ab9787ab61ae3007",
  base: "https://api.openweathermap.org/data/2.5/",
};

const FetchData = () => {
  //   const [text, setText] = useState("")
  const [weather, setWeather] = useState({});
  const [search, setSearch] = useState("");

  const handleChange = () => {
    axios
      .get(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => {
        console.log(res);
        setWeather(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    const newData = { search };
    setWeather((PrevData) => [...PrevData, newData]);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      <p>{weather.name}</p>
      <button onClick={handleChange}>Add</button>
      {/* {weather &&
        weather.map((e) => {
          return <p>{weather.name}</p>;
        })} */}
    </div>
  );
};

export default FetchData;
