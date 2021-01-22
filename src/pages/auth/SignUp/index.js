import React, { useState } from "react";
import { loginImage } from "../../../assets/images";
import { Input } from "../../../components/Input";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import "./SignUp.css";
import { Button } from "../../../components/Button";
import { signUpReg } from "../../../api";

function SignUp() {
  const [signUpData, setSignUpData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [numToogle, setNumToogle] = useState(1);

  const handleClick = (e) => {
    let targetText = e.target.innerText;
    targetText == "Tutor" ? setNumToogle(0) : setNumToogle(1);
    console.log(targetText);
  };

  const handleSubmit = (e) => {
    signUpReg(e, signUpData, setSignUpData);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSignUpData({ ...signUpData, [e.target.name]: value });
  };

  return (
    <main className="container-fluid vh-100 signup-section">
      <section className="row h-100">
        <div className="col-6 d-flex justify-content-center align-items-center">
          <div className="card shadow w-c">
            <form onSubmit={handleSubmit}>
              <h2 className="fs-5">Create Account</h2>
              <hr className="mt-n5" />
              <div className="btn-container">
                <Button
                  className={`btn btn-primary ${
                    numToogle == 0 ? "active" : ""
                  } w-50`}
                  text="Learner"
                  handleClick={handleClick}
                />
                <Button
                  className={`btn btn-primary ${
                    numToogle == 1 ? "active" : ""
                  } w-50`}
                  text="Tutor"
                  handleClick={handleClick}
                />
              </div>
              <Input
                type="text"
                icon={<FaUser />}
                placeholder="First Name"
                name="firstname"
                onChange={handleChange}
                value={signUpData.firstname || ""}
              />
              <Input
                type="text"
                icon={<FaUser />}
                placeholder="Last Name"
                name="lastname"
                onChange={handleChange}
                value={signUpData.lastname || ""}
              />
              <Input
                type="email"
                icon={<FaEnvelope />}
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={signUpData.email || ""}
              />
              <Input
                type="password"
                icon={<FaLock />}
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={signUpData.password || ""}
              />
              <p className="signup-p">
                Use 8 or more characters with a mix of letters, number & symbols
              </p>
              <Button className="btn btn-primary w-100" text="Sign Up" />
              <p className="signup-p pt-2">
                By signing up, you agree to our <span>Terms of Use</span> &
                <span>Privacy Policy.</span>
              </p>
              <hr />
              <p className="signup-p">
                Already have an account? <span>Log In</span>
              </p>
            </form>
          </div>
        </div>
        <div
          className="col-6 bg-danger h-100 signup-image"
          style={{ background: `url(${loginImage})` }}
        ></div>
      </section>
    </main>
  );
}

export { SignUp };
