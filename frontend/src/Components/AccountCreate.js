import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const AccountCreate = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Clicked");
    document.getElementById("accountNumber").innerHTML = "1000";
    document.getElementById("copy").innerHTML = "Please copy the Account No.";
  };

  return (
    <Container>
      <Row>
        <Col sm={6}>
          <br />
          <h1>CREATE ACCOUNT  </h1>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>
                <strong>Enter Full Name</strong>
              </Form.Label>
              <Form.Control type="text" placeholder="Enter Full Name" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <br />
            <h5 style={{ display: "inline" }}>Account No:</h5>{" "}
            <p style={{ display: "inline", fontSize:"30px" }} id="accountNumber"></p>
            <p style={{  marginLeft: "100px" ,fontSize:"10px" }} id="copy"></p>
          </Form>
          <br />
      <Link to={"/"}>
        <Button> BACK</Button>
      </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default AccountCreate;
