import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="box1">
        <ul className="ul">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/Blog">
            <li>Blog</li>
          </Link>
          <Link to="/About">
            <li>About</li>
          </Link>
          <Link to="/Contact">
            <li>Contact</li>
          </Link>
          <Link to="/Service">
            <li>Service</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Home;
