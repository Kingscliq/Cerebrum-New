/** @format */

import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { loginImg } from "../../../assets/images";
import { Input } from "../../../components/Input";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Button } from "../../../components/Button";
import { useState } from "react";
import { Loader } from "../../../components/Loader";
import { signIn } from "../../../api";
import "./Login.css";

const Login = () => {
  // console.log("propoooooooops", props);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [statusAlert, setStatusAlert] = useState(null);

  let url_string = window.location.href;
  let url = new URL(url_string);
  let verify_msg = url.searchParams.get("msg");

  let statusAlert;
  if (verify_msg === "success") {
    setAlert("Your Email has been Successfully Verified");
  } else if (verify_msg === "verify") {
    setAlert(
      "Email has already been verified, You can login to your Dashboard"
    );
  }

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  // Function to Handle Login Submit
  const handleSubmit = (e) => {
    // Call Api Function

    signIn(e, user, setUser, setLoading, setError, error);
  };

  return (
    <main className='vh-100 container-fluid login-section'>
      <section className='row h-100'>
        <div className='col-md-7 d-flex justify-content-center align-items-center col-sm-12'>
          <div className='card shadow w-c'>
            {error === "invalid username or password" ? (
              <div className='alert alert-danger'>{error}</div>
            ) : null}
            {statusAlert ? (
              <div className={`alert alert-success`}>{statusAlert}</div>
            ) : null}
            <form onSubmit={handleSubmit}>
              <h2 className='text-left'>Log In</h2>
              <hr className='mt-n5' />
              <Input
                type='email'
                icon={<FaEnvelope />}
                placeholder='Enter Email'
                onChange={handleChange}
                value={user.email}
                name='email'
              />
              <Input
                type='password'
                icon={<FaLock />}
                placeholder='Enter Password'
                onChange={handleChange}
                value={user.password}
                name='password'
              />
              <p className='signup-p'>
                <span>
                  <Link to='/forgotpassword'>Forgot Password</Link>
                </span>
              </p>
              <Button
                className='btn btn-primary w-100'
                text='Login'
                loadingIcon={loading && <Loader />}
              />

              <hr />
              <p className='signup-p'>
                New Member?{" "}
                <span>
                  <Link to='/signup'>Sign Up</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
        <div
          className='col-5 h-100 signup-image d-none d-md-block'
          style={{
            background: `url(${loginImg})`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
          }}
        ></div>
      </section>
    </main>
  );
};
export { Login };
