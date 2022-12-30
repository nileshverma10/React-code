import { Container, Row ,Col} from "react-bootstrap";
import { Cardc } from "./Cardc";
import'./CardCollection.css'
export const CardCollection = () =>{
    return(
        <>
       <Container>
        <Row>
            <Col lg={4}>
            <Cardc
         wall="./image/02_img-1.png"
         text2="2211 Summer Ridge Dr" />
            </Col>

        <Col lg={4} >
        <Cardc
         wall = "./image/03_img-2.png"
         text2="6571 Mill Creek Cir"/>
        </Col>

         <Col lg={4}>
         <Cardc 
         wall="./image/04_img-3.png"
         text2="1141 14Th Street South"/>
         </Col>
    
         <Col lg={4}>
         <Cardc
          wall="./image/05_img-4.png"
          text2="2627 Garry St"
            />
         </Col>
        
         <Col lg={4}>
         <Cardc
          wall="./image/06_img-5.png"
          text2="2222 N 2Nd Ave Unit: 311"
         />
         </Col>
         
        <Col  lg={4}>
        <Cardc
         wall="./image/07_img-6.png"
         text2="1436 18Th Street South"
         />
        </Col>
        </Row>
       </Container>
        </>  
    );
};
