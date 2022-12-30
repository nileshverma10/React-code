import { useState } from "react";
import "./Index.css";

export const Index = () => {
  const [fname, setFname] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [add1, setAdd1] = useState("");
  const [add2, setAdd2] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = () => {
    const newData = { fname, number, email, add1, add2 };
    setData((prevData) => [...prevData, newData]);
  };
  return (
    <>
      <div className="box1">
        {/* <img className="shadow" src="./image/shadow.jpg" alt="" /> */}
        <label className="label" htmlFor="name">
          Name -
        </label>
        <input
          className="nilesh"
          type="text"
          placeholder="Enter Your Name"
          onChange={(e) => setFname(e.target.value)}
        />
        <br />
        <label className="label" htmlFor="phone">
          Number -
        </label>
        <input
          className="nilesh"
          type="text"
          placeholder="Enter Your Number"
          onChange={(e) => setNumber(e.target.value)}
        />
        <br />
        <label className="label" htmlFor="email">
          Email -
        </label>
        <input
          className="nilesh"
          type="email"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label className="label" htmlFor="Add1">
          Add1 -
        </label>
        <input
          className="nilesh"
          type="address"
          placeholder="Enter Your Local Address"
          onChange={(e) => setAdd1(e.target.value)}
        />
        <br />
        <label className="label" htmlFor="Add2">
          Add2 -
        </label>
        <input
          className="nilesh"
          type="address"
          placeholder="Enter Your Local Address"
          onChange={(e) => setAdd2(e.target.value)}
        />
        <br />
        <label className="label" htmlFor="pincode">
          Pincode -
        </label>
        <input
          className="nilesh"
          type="pincode"
          placeholder="Enter Your Pincode"
        />
        <br />
        <label className="comment" htmlFor="comment">
          Comment -
        </label>
        <textarea className="text" placeholder="Message"></textarea>
        <input type="submit" onClick={handleSubmit} />
      </div>
      {data &&
        data.map((e) => {
          return (
            <h2>
              {e.fname}
              {e.number}
              {e.email}
              {e.add1}
              {e.add2}
            </h2>
          );
        })}
    </>
  );
};
