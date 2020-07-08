import React from "react";
import ReactDOM from "react-dom";
import SignInSide from "./SignInSide";
import SignUpSide from "./SignUpSide";
import IdentityVerification from "./IdentityVerification";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={SignUpSide} />
        <Route exact path="/signin" component={SignInSide} />
        <Route exact path="/identity" component={IdentityVerification} />
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
