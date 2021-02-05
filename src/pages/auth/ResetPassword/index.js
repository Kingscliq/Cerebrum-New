/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { loginImg } from "../../../assets/images";
import { Input } from "../../../components/Input";
import { FaLock } from "react-icons/fa";
import { Button } from "../../../components/Button";

import { Loader } from "../../../components/Loader";
import axios from "axios";
// import { signIn } from "../../../api";
// import "./rese";
const ResetPassword = () => {
  //   const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    password: "",
    cpassword: "",
  });
  const [token, setToken] = useState();
  const [uid, setUid] = useState();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    let url_string = window.location.href;
    let url = new URL(url_string);
    setUid(url.searchParams.get("uid"));
    setToken(url.searchParams.get("resetToken"));
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  // Function to Handle Login Submit
  const handleSubmit = (e) => {
    // Call Api Function
    e.preventDefault();
    if (user.password === user.cpassword) {
      const data = {
        password: user.password,
        userId: uid,
        resetToken: token,
      };
      axios
        .post(`https://cerebrum-v1.herokuapp.com/api/auth/reset-password`, data)
        .then((res) => {
          console.log(res.data);
          setSuccess(res.data.message);
          setError(null);
        })
        .catch((err) => {
          console.log(err.response);
          setError(err.response.data.message);
          setSuccess(null);
        });
    } else {
      console.log("");
      setError("password does not match");
      setSuccess(null);
    }
  };

  return (
    <main className='vh-100 container-fluid login-section'>
      <section className='row h-100'>
        <div className='col-md-7 d-flex justify-content-center align-items-center col-sm-12'>
          <div className='card shadow w-c'>
            <form onSubmit={handleSubmit}>
              {error && <div className='alert alert-danger'>{error}</div>}
              {success && <div className='alert alert-success'>{success}</div>}
              <h3 className='text-left'>Create New Password</h3>
              <hr className='mt-n5' />
              <Input
                type='password'
                icon={<FaLock />}
                placeholder='Enter Password'
                onChange={handleChange}
                value={user.password}
                name='password'
              />
              <Input
                type='password'
                icon={<FaLock />}
                placeholder='Confirm New Password'
                onChange={handleChange}
                value={user.cpassword}
                name='cpassword'
              />

              <Button
                className='btn btn-primary w-100'
                text='Reset'
                loadingIcon={loading && <Loader />}
              />

              <hr />
              <p className='signup-p'>
                <span>
                  Having issues?
                  <Link to='/forgotpassword'>&nbsp;Try again</Link>{" "}
                </span>{" "}
                or &nbsp;{" "}
                <span>
                  <Link to='/Login'>Login</Link> Instead
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

export { ResetPassword };
