import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Index.css";
import TTable from "./TTable";

export const Index = () => {
  const [fullname, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState();
  const [password, setPassword] = useState();
  const [university, setUniversity] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();

  const [data, setData] = useState([]);

  const handleSubmit = () => {
    const newData = {
      fullname,
      gender,
      age,
      password,
      university,
      department,
      email,
      phone,
    };
    setData((prevData) => [...prevData, newData]);
    // e.preventDefault();
  };
  // if (fullname <= 5) {
  //   alert("Enter a Valid Name");
  // }
  return (
    <>
      <div className="bg-info box1">
        <Container>
          {/* <img src="./image/shadow.jpg" alt="shadow" /> */}
          <Row>
            <Col lg={6} md={6} sm={6}>
              STUDENT DETAILS
              <br />
              <label className="name1" htmlFor="name">
                Full Name -
              </label>
              <input
                className="name2"
                type="text"
                placeholder="Name"
                onChange={(e) => setFullName(e.target.value)}
              />
              <br />
              <label className="gender" htmlFor="gender">
                Gender -
              </label>
              <input
                className="circle"
                type="radio"
                name="gender"
                value="Male"
                id=""
                onChange={(e) => setGender(e.target.value)}
              />
              <label className="gender2" htmlFor="Male">
                Male
              </label>
              <input
                className="circle"
                type="radio"
                name="gender"
                value="Female"
                id=""
                onChange={(e) => setGender(e.target.value)}
              />
              <label className="gender2" htmlFor="Male">
                Female
              </label>
              <input
                className="circle"
                type="radio"
                name="gender"
                value="Other"
                onChange={(e) => setGender(e.target.value)}
              />
              <label className="gender2" htmlFor="other">
                Other
              </label>
              <br />
              <label className="age1" htmlFor="age">
                Age -
              </label>
              <input
                className="age2"
                type="number"
                placeholder="Age"
                onChange={(e) => setAge(e.target.value)}
              />
              <br />
              <label className="pass1" htmlFor="age">
                Password -
              </label>
              <input
                className="pass2"
                type="text"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <h4 className="uni">University Detalis :-</h4>
              <br />
              <label className="uni2" htmlFor="">
                University
              </label>
              <br />
              <select
                className="select1"
                name=""
                id=""
                onChange={(e) => setUniversity(e.target.value)}
              >
                <option value="">Select University</option>
                <option value="DAVV">Davv</option>
                <option value="Medicaps">Medicaps</option>
                <option value="CDIPS">CDIPS</option>
                <option value="Arbindo">Arbindo</option>
              </select>
              <br />
              <label className="uni2" htmlFor="">
                Department
              </label>
              <br />
              <select
                className="select1"
                name=""
                id=""
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value="">Select Department</option>
                <option value="B.sc">B.sc</option>
                <option value="M.sc">M.sc</option>
                <option value="BCA">BCA</option>
                <option value="MCA">MCA</option>
              </select>
              <h4 className="uni">Contact Information</h4>
              <br />
              <label className="email1" htmlFor="email">
                Email -
              </label>
              <input
                className="email2"
                type="Email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <label className="phone1" htmlFor="email">
                Phone -
              </label>
              <input
                className="phone2"
                type="text"
                placeholder="Number"
                onChange={(e) => setPhone(e.target.value)}
              />
              <br />
              <input className="check" type="checkbox" name="" id="" />
              <h5 className="agree">I Agree yo the terms & Conditions</h5>
              <br />
              <input className="submit" type="submit" onClick={handleSubmit} />
            </Col>
            <Col lg={6} md={6} sm={6}>
              TABLE
              <br />
              <TTable data={data} />
            </Col>
          </Row>
        </Container>
      </div>
      {/* {data &&
        data.map((e) => {
          return (
            <h5>
              {e.fullname} {e.gender}
              {e.password} {e.university}{e.department}{e.email}{e.phone}
              {e.age}
            </h5>
          );
        })} */}
    </>
  );
};
