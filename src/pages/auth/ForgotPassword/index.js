/** @format */

import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { forgotPasswordImg } from "../../../assets/images";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import "./ForgotPassword.css";
import axios from "axios";

function ForgotPassWord() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(e.target.value);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://cerebrum-v1.herokuapp.com/api/auth/request-password-reset?email=${email}`
      )
      .then((res) => {
        console.log(res);
        setSuccess(res.data.message);
        setError(null);
      })
      .catch((err) => {
        console.log("error", err.response.data.message);
        setError(err.response.data.message);
        setSuccess(null);
      });
  };
  return (
    <main className='container-fluid vh-100 fpassword-section'>
      <section className='row h-100'>
        <div className='col-7 d-flex justify-content-center align-items-center'>
          <div className='card shadow w-c'>
            <form onSubmit={handleForgotPassword}>
              <h2 className='fs-5'>Find Your Account</h2>
              <hr className='mt-n5' />
              {error && (
                <div className='alert alert-danger'>
                  <p>
                    {/* We couldn’t find your account with that information. Please
                    try inputting your correct email */}
                    {error}
                  </p>
                </div>
              )}
              {success && (
                <div className='alert alert-success'>
                  {/* We couldn’t find your account with that information. Please
                  try inputting your correct email */}
                  {success}
                </div>
              )}

              <Input
                type='text'
                icon={<FaEnvelope />}
                placeholder='Email'
                value={email}
                onChange={handleChange}
              />
              <Button
                className='btn btn-primary w-100'
                text={"Search"}
                onClick={handleForgotPassword}
              />
            </form>
          </div>
        </div>
        <div
          className='col-5 h-100 signup-image'
          style={{
            background: `url(${forgotPasswordImg})`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
          }}
        ></div>
      </section>
    </main>
  );
}
export { ForgotPassWord };
