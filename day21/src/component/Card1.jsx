import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Card1(props) {
  return (
    <>
      {props.apiData.map((e) => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="./image/shadow.jpg" />
            <Card.Body>
              <Card.Title>{e.id}</Card.Title>
              <Card.Text>{e.title}</Card.Text>
              <Button variant="warning">
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://rapidapi.com/blog/axios-react-api-tutorial/ "
                >
                  Go somewhere
                </a>
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}

export default Card1;
