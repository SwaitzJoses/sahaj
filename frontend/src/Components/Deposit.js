import React from 'react'
import { Form, Button, Container , Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { depositAmount } from "../actions/actions.js";

import { useState, useEffect } from "react";
import { DEPOSIT_RESET } from '../constants/constants.js';


const Deposit = () => {
  const dispatch = useDispatch();

  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState("");

  const deposit = useSelector((state) => state.deposit);
  const { loading, error, deposit_info } = deposit;

  useEffect(() => {
    if (deposit_info) {
      console.log(deposit_info);
      setBalance(deposit_info);
    }
  }, [deposit_info]);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Clicked")
        dispatch(depositAmount(number, amount))
        // if(amount<250 || amount > 50000){
        //   document.getElementById("error").innerHTML = "Minimum Rs.500 - Maximum Rs.50,000"
        // }
        
      }; 

      const reset =() => {
        dispatch({type : DEPOSIT_RESET })
      }
    
    return (
        <Container>

        <Row>
        <Col sm={6}>
        
    
        <br />
        <h1>DEPOSIT</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group>
          <Form.Label><strong>Enter Account No.</strong></Form.Label>
            <Form.Control type="text" placeholder="Enter Account No."
            value={number}
                onChange={(e) => setNumber(e.target.value)} />
                
            <Form.Label><strong>Enter Amount</strong></Form.Label>
            <Form.Control type="text" placeholder="Minimum ₹500 - Maximum ₹50,000" 
            value={amount}
                onChange={(e) => setAmount(e.target.value)}/>

                {amount<250 || amount > 50000 ?   <h3>Minimum ₹500 - Maximum ₹50,000</h3> : " "

                }
          
          <Form.Text className="text-muted">
          Only 3 transactions per day.
        </Form.Text>
        <Form.Text className="text-muted">
        Account balance cannot exceed ₹1,00,000
        </Form.Text>
        <h5 style={{display: "inline"}}> </h5>  <p style={{ display: "inline", fontSize:"30px" }} id="error"></p>
    </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <br />
         <h5 style={{display: "inline"}}>Balance: </h5>  <p style={{ display: "inline", fontSize:"30px" }} id="deposit">
         {balance.amount }
         <br />
         {error && (
          <h6 style={{ backgroundColor: "red", display: "inline" }}>{error}</h6>
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
    )
}

export default Deposit
