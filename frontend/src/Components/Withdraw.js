import React from 'react'
import { Form, Button, Container , Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { withdrawAmount } from "../actions/actions.js";

import { useState, useEffect } from "react";
import { WITHDRAW_RESET } from '../constants/constants.js';


const Withdraw = () => {
  const dispatch = useDispatch();

  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState("");

  const withdraw = useSelector((state) => state.withdraw);
  const { loading, error, withdraw_info } = withdraw;

  useEffect(() => {
        if (withdraw_info) { 
          // console.log(deposit_info);
          setBalance(withdraw_info);
        }
      }, [withdraw_info]);

    const submitHandler = (e) => {
    
        e.preventDefault();
        console.log("Clicked")
        dispatch(withdrawAmount(number, amount))
      }; 
    
      const reset =() => {
        dispatch({type : WITHDRAW_RESET })
        
      }

    return (
        <Container>

        <Row>
        <Col sm={6}>
        
    
        <br />
        <h1>WITHDRAWAL</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group>
          <Form.Label><strong>Enter Account No.</strong></Form.Label>
            <Form.Control type="text" 
            placeholder="Enter Account No." 
            value={number}
                onChange={(e) => setNumber(e.target.value)}/>

            <Form.Label><strong>Enter Amount</strong></Form.Label>
            <Form.Control type="text" placeholder="Minimum Rs.1000 - Maximum Rs.25,000"
            value={amount}
            onChange={(e) => setAmount(e.target.value)} />
          
            {amount<1000 || amount > 25000 ?   <h3>Minimum ₹1000 - Maximum ₹25,000</h3> : " "
          }

          <Form.Text className="text-muted">
          Only 3 transactions per day.
        </Form.Text>
        <Form.Text className="text-muted">
        Account balance cannot be less than ₹0
        </Form.Text>
        <h5 style={{display: "inline"}}> </h5>  <p style={{ display: "inline", fontSize:"30px" }} id="error"></p>
    </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <br />
         <h5 style={{display: "inline"}}>Balance: </h5>  <p style={{ display: "inline", fontSize:"30px" }} id="withdraw">
         {balance.amount }
         <br />
         {error && (
          <h6 style={{ backgroundColor: "red", display: "inline" }}>{error}</h6>
        )}</p>
        </Form>
        <br />
        <Link to={"/"}>
        <Button onClick={reset}> BACK</Button>
      </Link>
        </Col>
        </Row>
        </Container>
    )
    
}

export default Withdraw
