import React from 'react'
import { Form, Button, Container , Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";


const Deposit = () => {

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Clicked")
        document.getElementById("deposit").innerHTML = "1000";
      }; 
    
    return (
        <Container>

        <Row>
        <Col sm={6}>
        
    
        <br />
        <h1>DEPOSIT</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group>
          <Form.Label><strong>Enter Account No.</strong></Form.Label>
            <Form.Control type="text" placeholder="Enter Account No." />
            <Form.Label><strong>Enter Amount</strong></Form.Label>
            <Form.Control type="text" placeholder="Minimum Rs.500 - Maximum Rs.50,000" />
          
          <Form.Text className="text-muted">
          Only 3 transactions per day.
        </Form.Text>
        <Form.Text className="text-muted">
        Account balance cannot exceed ₹1,00,000
        </Form.Text>
    </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <br />
         <h5 style={{display: "inline"}}>Balance: </h5>  <p style={{ display: "inline", fontSize:"30px" }} id="deposit"></p>
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

export default Deposit
