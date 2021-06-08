import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { accountCreate } from "../actions/actions.js";

import { useState, useEffect } from "react";
import { ACCOUNT_CREATE_RESET } from "../constants/constants.js";

const AccountCreate = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [acc, setAcc] = useState("");

  const account = useSelector((state) => state.account);
  const { loading, error, account_info } = account;
  // console.log(account.account_info)

  // console.log(loading)
  // setAccNumber(account.account_info.number)
  //  console.log(account_info.name)

  useEffect(() => {
    if (account_info) {
      console.log(account_info);
      setAcc(account_info);
    }
  }, [account_info]);

  console.log(acc.number);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Clicked");

    dispatch(accountCreate(name));

    // document.getElementById("accountNumber").innerHTML = "account.account_info.number" ;
    document.getElementById("copy").innerHTML = "Please copy the Account No.";
  };

  const reset =() => {
    dispatch({type : ACCOUNT_CREATE_RESET })
  }

  return (
    <Container>
      <Row>
        <Col sm={6}>
          <br />
          <h1>CREATE ACCOUNT </h1>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>
                <strong>Enter Full Name</strong>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <br />
            <h5 style={{ display: "inline" }}>Account No:</h5>{" "}
            <p
              style={{ display: "inline", fontSize: "30px" }}
              id="accountNumber"
            >
              {acc._id}
            </p>
            <p style={{ marginLeft: "100px", fontSize: "10px" }} id="copy"></p>
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

export default AccountCreate;
