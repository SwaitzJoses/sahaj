import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { balanceAmount } from "../actions/actions.js";

import { useState, useEffect } from "react";
import { BALANCE_RESET } from "../constants/constants.js";

const Balance = () => {
  const dispatch = useDispatch();

  const [number, setNumber] = useState("");

  const [bal, setBal] = useState("");

  const balance = useSelector((state) => state.balance);
  const { loading, error, balance_info } = balance;

  useEffect(() => {
    if (balance_info) {
      // console.log(deposit_info);
      setBal(balance_info);
    }
  }, [balance_info]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(number)
    dispatch(balanceAmount(number));
  };

  const reset = () => {
    dispatch({ type: BALANCE_RESET }); 
  };

  return (
    <Container>
      <Row>
        <Col sm={6}>
          <br />
          <h1>BALANCE</h1>
          <Form >
            <Form.Group>
              <Form.Label>
                <strong>Enter Account No.</strong>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Account No."
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </Form.Group>
            <Button onClick={submitHandler} variant="primary" type="submit">
              Submit
            </Button>
            <br />
            <h5 style={{ display: "inline" }}>Balance: </h5>{" "}
            <p style={{ display: "inline", fontSize: "30px" }} id="balance">
              {bal.amount}
              <br />
              {error && (
                <h6 style={{ backgroundColor: "red", display: "inline" }}>
                  {error}
                </h6>
              )}
            </p>
          </Form>
          <br />
          <Link to={"/"}>
            <Button onClick={reset}> BACK</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Balance;
