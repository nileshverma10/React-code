import React from "react";
import axios from "axios";
import "./Page.css";
import DataTable from "./DataTable";
import { useState } from "react";
import { useEffect } from "react";
// import { useEffect } from "react";

const Page = () => {
  const [apiData, setApiData] = useState([]);
  const [show, setShow] = useState(false);

  const handleChange = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setApiData(res.data);
        setShow(true);
        // console.log(res.data);
      })
      .catch((error) => {
        setApiData(error);
      });
  };
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setApiData("");
  //     }, 10000);
  //   });
  return (
    <>
      <div>
        <button onClick={handleChange} className="btn">
          Click
        </button>

        {/* {apiData &&
          apiData.map((e) => {
            return (
              <>
                {e.id} {e.name}
              </>
            );
          })} */}
      </div>
      <DataTable apiData={apiData} />
    </>
  );
};

export default Page;
