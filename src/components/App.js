import React from "react";
import { Switch, Route } from "react-router-dom";
import { ForgotPassWord } from "../pages/auth/ForgotPassword";
import { Login } from "../pages/auth/Login";
import { SignUp } from "../pages/auth/SignUp";
import { VerifyEmail } from "../pages/auth/VerifyEmail";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/forgotpassword" component={ForgotPassWord} />
        <Route path="/verifyemail" component={VerifyEmail} />
        <Route path="/" exact component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
