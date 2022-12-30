import "./Index.css"
import { Container,Row,Col } from "react-bootstrap";
import  Input  from "./Input"
import Gender from "./Gender";
// import Form from './Form'
export const Index = () =>{
    return(
        <Container>
            <Row>
                <Col lg={6}>
                 <div className="box1">
                    {/* <img className="shadow" src="./image/shadow.jpg " alt="shadow wallpaper" /> */}
                    {/* <Form/> */}
                    <Input/>
                    <Gender/>
                 </div>
                </Col>
            </Row>
        </Container>
    );
};