/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { loginImg } from "../../../assets/images";
import { Input } from "../../../components/Input";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Button } from "../../../components/Button";
import { useState } from "react";
import { Loader } from "../../../components/Loader";
import { signIn } from "../../../api";
import "./Login.css";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [msg, setmsg] = useState({ sucess: "", msg: "" });
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  // Function to Handle Login Submit
  const handleSubmit = (e) => {
    // Call Api Function

    signIn(e, user, setUser, setLoading, msg);
  };

  return (
    <main className='vh-100 container-fluid login-section'>
      <section className='row h-100'>
        <div className='col-7 d-flex justify-content-center align-items-center'>
          <div className='card shadow w-c'>
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
                  <Link to='/'>Sign Up</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
        <div
          className='col-5 h-100 signup-image'
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
