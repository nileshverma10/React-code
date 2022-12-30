import axios from "axios";
import React, { useState, useEffect } from "react";

import "./Index.css";

const Index = () => {
  const [todos, setTodos] = useState("");
  const [data, setData] = useState([]);
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleAdd = (event) => {
    const newData = { todos };
    setData((prevData) => [...prevData, newData]);

    setTodos("");
    event.preventDefault();
  };

  const handleDelete = () => {
    setData(data.slice(0, -1));
  };

  const getData = () => {
    setLoading(false);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        // console.log("res", res.data);
        setInterval(() => {
          setApiData(res.data);
          setLoading(true);
        }, 3000);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("apiData", apiData);

  return (
    <>
      <div>
        <input
          type="text"
          value={todos}
          onChange={(e) => {
            setTodos(e.target.value);
          }}
        />
        <button onClick={handleAdd}>+</button>
        <button onClick={handleDelete}>x</button>

        {data &&
          data.map((e) => {
            return <h3>{e.todos}</h3>;
          })}
      </div>
      <div className="row">
        {loading ? (
          apiData.map((e, i) => {
            return (
              <div key={i} className="col-md-4">
                <h2>{e.body}</h2>
                <p>{e.title}</p>
              </div>
            );
          })
        ) : (
          <h1>Loader</h1>
        )}
      </div>
    </>
  );
};

export default Index;
