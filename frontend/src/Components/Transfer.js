import React from 'react'
import { Form, Button, Container , Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { transferAmount } from "../actions/actions.js";

import { useState, useEffect } from "react";
import { TRANSFER_RESET } from '../constants/constants.js';


const Transfer = () => {
  const dispatch = useDispatch();

  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState("");

  const transfer = useSelector((state) => state.transfer);
  const { loading, error, transfer_info } = transfer;

  useEffect(() => {
    if (transfer_info) {
      // console.log(transfer_info);
      setBalance(transfer_info);
    }
  }, [transfer_info]);

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log("Clicked")
        dispatch(transferAmount(sender, receiver, amount))
      }; 

      const reset =() => {
        dispatch({type : TRANSFER_RESET })
        
      }

    
    return (
        <Container>

        <Row>
        <Col sm={6}>
        
    
        <br />
        <h1>TRANSFER</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label><strong>Sender Account No.</strong></Form.Label>
            <Form.Control type="text" placeholder="Sender Account No." 
            value={sender}
                onChange={(e) => setSender(e.target.value)}/>
            <br />

            <Form.Label><strong>Receiver Account No.</strong></Form.Label>
            <Form.Control type="text" placeholder="Receiver Account No." 
            value={receiver}
                onChange={(e) => setReceiver(e.target.value)}/>
            <br />

            <Form.Label><strong>Enter Amount</strong></Form.Label>
            <Form.Control type="text" placeholder="Minimum Rs.1000 - Maximum Rs.25,000"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}/>
          
                {amount<1000 || amount > 25000 ?   <h3>Minimum ₹1000 - Maximum ₹25,000</h3> : " "
          }

          <Form.Text className="text-muted">
          Only 3 transactions per day.
        </Form.Text>
        
    </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <br />
         <h5 style={{display: "inline"}}>Transfer: </h5>  <p style={{ display: "inline", fontSize:"30px" }} id="transfer">
        {(balance.sender && balance.receiver ? <h3>Successful</h3> : "")}
         <br />
         {error && (
          <h6 style={{ backgroundColor: "red", display: "inline" }}>{error}</h6>
        )}</p>
        </Form>
        <br />
        <Link to={"/"}>
        <Button onClick={reset} > BACK</Button>
      </Link>
        </Col>
        </Row>
        </Container>
    )
}
     
export default Transfer
