import React from 'react'
import { Form, Button, Container , Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";


const Transfer = () => {
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Clicked")
        document.getElementById("transfer").innerHTML = "1000";
      }; 
    
    return (
        <Container>

        <Row>
        <Col sm={6}>
        
    
        <br />
        <h1>TRANSFER</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label><strong>Sender Account No.</strong></Form.Label>
            <Form.Control type="text" placeholder="Sender Account No." />
            <br />

            <Form.Label><strong>Receiver Account No.</strong></Form.Label>
            <Form.Control type="text" placeholder="Receiver Account No." />
            <br />

            <Form.Label><strong>Enter Amount</strong></Form.Label>
            <Form.Control type="text" placeholder="Minimum Rs.1000 - Maximum Rs.25,000" />
          
          <Form.Text className="text-muted">
          Only 3 transactions per day.
        </Form.Text>
        
    </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <br />
         <h5 style={{display: "inline"}}>Balance: </h5>  <p style={{ display: "inline", fontSize:"30px" }} id="transfer"></p>
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

export default Transfer
