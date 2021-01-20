import React from "react";
import { loginImage } from "../../../assets/images";
import { Input } from "../../../components/Input";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import "./SignUp.css";
import { Button } from "../../../components/Button";

function SignUp() {
  return (
    <main className="vh-100">
      <section className="row h-100">
        <div className="col-6 d-flex justify-content-center align-items-center">
          <div className="card shadow w-c">
            <form>
              <h2 className="fs-5">Create Account</h2>
              <hr className="mt-n5" />
              <Input type="text" icon={<FaUser />} placeholder="Full Name" />
              <Input type="text" icon={<FaUser />} placeholder="Last Name" />
              <Input type="email" icon={<FaEnvelope />} placeholder="Email" />
              <Input type="password" icon={<FaLock />} placeholder="Password" />
              <p className="signup-p">
                Use 8 or more characters with a mix of letters, number & symbols
              </p>
              <Button className="btn btn-primary w-100" text="Sign Up" />
              <p className="signup-p pt-2">
                By signing up, you agree to our Terms of Use & Privacy Policy.
              </p>
              <hr />
              <p className="signup-p">Already have an account? Log In</p>
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
