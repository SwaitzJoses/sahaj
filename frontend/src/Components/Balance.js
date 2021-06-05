import React from 'react'
import { Form, Button, Container , Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";


const Balance = () => {
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Clicked")
        document.getElementById("balance").innerHTML = "1000";
      }; 
    
    return (
        <Container>

        <Row>
        <Col sm={6}>
        
    
        <br />
        <h1>BALANCE</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label><strong>Enter Account No.</strong></Form.Label>
            <Form.Control type="text" placeholder="Enter Account No." />
          
          
    </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <br />
         <h5 style={{display: "inline"}}>Balance: </h5>  <p style={{ display: "inline", fontSize:"30px" }} id="balance"></p>
        </Form>
        <br />
        <Link to={"/"}>
        <Button> BACK</Button>
      </Link>
        </Col>
        </Row>
        </Container>
    )
}

export default Balance
