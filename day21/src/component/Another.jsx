import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Card1 from "./Card1";

import Spinner1 from "./Spinner1";

const Another = () => {
  const [apiData, setApiData] = useState([]);
  const [nilesh, setNilesh] = useState(false);
  //   const [hawkeye, setHawkeye]= useState(false);

  const handleChange = () => {
    setNilesh(false);
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((res) => {
        setInterval(() => {
          setApiData(res.data);
          setNilesh(true);
        }, 3000);
      })
      .catch((error) => {
        setApiData(error);
      });
  };

  useEffect(() => {
    handleChange();
  }, []);

  return (
    <div>
      <button onClick={handleChange}>Click</button>
      {nilesh ? <Card1 apiData={apiData} /> : <Spinner1  />}

      {/* {apiData &&
        apiData.map((e) => {
          return (
            <>
              <Card1 apiData={apiData} />
            </>
          );
        })} */}
    </div>
  );
};

export default Another;
