import React from "react";
import { loginImg } from "../../../assets/images";
import { Input } from "../../../components/Input";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Button } from "../../../components/Button";
import { useState } from "react";
import axios from "axios";
import {Loader} from "../../../components/Loader";
import { signIn } from "../../../api";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  // Function to Handle Login Submit
  const handleSubmit = (e) => {
    // Call Api Function

    signIn(e, user, setUser, setLoading);
  };

  return (
    <main className="vh-100 container-fluid login-section">
      <section className="row h-100">
        <div className="col-6 d-flex justify-content-center align-items-center">
          <div className="card shadow w-c">
            <form onSubmit={handleSubmit}>
              <h2 className="font-weight-bold text-center">Login</h2>
              <hr className="mt-n5" />
              <Input
                type="email"
                icon={<FaEnvelope />}
                placeholder="Enter Email"
                onChange={handleChange}
                value={user.email}
                name="email"
              />
              <Input
                type="password"
                icon={<FaLock />}
                placeholder="Enter Password"
                onChange={handleChange}
                value={user.password}
                name="password"
              />
              <p className="signup-p">
                <a href="#" style={{ textDecoration: "none" }}>
                  Forgot Password
                </a>
              </p>
              <Button
                className="btn btn-primary w-100"
                text="Login"
                loadingIcon={loading && <Loader />}
              />

              <hr />
              <p className="signup-p">
                New Member?{" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  Sign Up
                </a>
              </p>
            </form>
          </div>
        </div>
        <div
          className="col-6 bg-danger h-100 signup-image"
          style={{ background: `url(${loginImg})` }}
        ></div>
      </section>
    </main>
  );
};
export { Login };
