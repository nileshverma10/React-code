import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./Api.css";

const Api = () => {
  const [apiData, setApiData] = useState([]);
  const [loader, setLoader] = useState(false);

  const getData = () => {
    setLoader(false);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setInterval(() => {
          setApiData(res.data);
          setLoader(true);
        }, 3000);
      })
      .catch((error) => {
        setApiData(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Container>
        <Row lg={2}>
          <Col lg={3}>
            <button onClick={getData}> Please Click On it</button>
          </Col>
        </Row>
      </Container>
      {loader ? (
        apiData.map((e, i) => {
          return (
            <div key={i} className="row">
              {
                <div className="col-lg- 4  box">
                  <Card style={{ width: "25rem" }}>
                    <Card.Img variant="top" src="./image/shadow.jpg" />
                    <Card.Body>
                      <Card.Title>{e.title}</Card.Title>
                      <Card.Text>{e.body}</Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </div>
              }
            </div>
          );
        })
      ) : (
        <>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </>
      )}
    </>
  );
};

export default Api;
export { Spinner, Card };
