import"./Form.css"

import { Container,Row,Col } from "react-bootstrap";

export const Form= () =>{
    return(
            <>
              <Container>
            <Row>
                <Col lg={6}>
                    <div className="box1">
                        <label className="label" htmlFor="name">Name - </label>
                        <input className="nilesh" type="text" placeholder="Enter Your Name" />
                        <br/>
                        <label className="label" htmlFor="phone">Number -</label>
                        <input className="nilesh" type="text" placeholder="Enter Your Number" />
                        <br/>
                        <label className="label" htmlFor="email">Email - </label>
                        <input className="nilesh" type="email" placeholder="Enter Your Email" />
                        <br/>
                        <label className="label" htmlFor="Add1">Add1 - </label>
                        <input className="nilesh" type="address" placeholder="Enter Your Local Address" />
                        <br/>
                        <label className="label" htmlFor="Add2">Add2 - </label>
                        <input className="nilesh" type="address" placeholder="Enter Your Local Address" />
                        <br/>
                        <label className="label" htmlFor="pincode">Pincode - </label>
                        <input className="nilesh" type="pincode" placeholder="Enter Your Pincode" /> 
                        <br/>
                        <label className="comment" htmlFor="comment">Comment - </label>
                        <textarea className="text" >Message</textarea>
                        {/* ====================================================================== */}
                        
                    </div>
                </Col>
            </Row>
        </Container>
            </>
    );
      
      
};
