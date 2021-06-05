// import "bootswatch/dist/cosmo/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header.js";
import AccountCreate from "./Components/AccountCreate.js";

import Deposit from "./Components/Deposit.js";

import Withdraw from "./Components/Withdraw.js";

import Transfer from "./Components/Transfer.js";

import Balance from "./Components/Balance.js";

import Homescreen from "./Screens/Homescreen.js";

function App() {
  return (
    
    <Router>
    <Container>
      <Header />

      <Route path="/" component={Homescreen} exact/>

      <Route path="/accountCreate" component={AccountCreate}/>

      <Route path="/deposit" component={Deposit} />

      <Route path="/withdraw" component={Withdraw} />

      <Route path="/transfer" component={Transfer} />

      <Route path="/balance" component={Balance} />

    </Container>
    </Router>
  );
}

export default App;
