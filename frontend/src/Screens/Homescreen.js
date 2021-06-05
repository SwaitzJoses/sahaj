import React from "react";
import { Button, Container} from "react-bootstrap";
import { Link } from "react-router-dom";

const Homescreen = () => {
  return (
    <Container>
      <br />
      <Link to={"/accountCreate"} >
        <Button> CREATE ACCOUNT</Button>
      </Link>
      <br />
      <br />
      <Link to={"/deposit"} >
        <Button> DEPOSIT</Button>
      </Link>
      <br />
      <br />
      <Link to={"/withdraw"} >
        <Button> WITHDRAW</Button>
      </Link>
      <br />
      <br />
      <Link to={"/balance"} >
        <Button> BALANCE</Button>
      </Link>
      <br />
      <br />
      <Link to={"/transfer"} >
        <Button> TRANSFER AMOUNT</Button>
      </Link>
    </Container>
  );
};

export default Homescreen;
