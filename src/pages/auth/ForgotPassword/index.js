/** @format */

import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { forgotPasswordImg } from "../../../assets/images";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { AuthHeader } from "../../../widgets/AuthHeader";
import "./ForgotPassword.css";
function ForgotPassWord() {
  const [error, setError] = useState(false);

  return (
    <>
      <AuthHeader />
      <main className="container-fluid vh-100 fpassword-section">
        <section className="row h-100">
          <div className="col-7 d-flex justify-content-center align-items-center">
            <div className="card shadow w-c">
              <form>
                <h2 className="fs-5">Find Your Account</h2>
                <hr className="mt-n5" />
                {error && (
                  <div className="fpassword-error px-3 py-1 mb-3 rounded">
                    <p>
                      We couldn’t find your account with that information.
                      Please try inputting your correct email
                    </p>
                  </div>
                )}

                <Input type="text" icon={<FaEnvelope />} placeholder="Email" />
                <Button className="btn btn-primary w-100" text={"Search"} />
              </form>
            </div>
          </div>
          <div
            className="col-5 h-100 signup-image"
            style={{
              background: `url(${forgotPasswordImg})`,
              backgroundRepeat: `no-repeat`,
              backgroundSize: `cover`,
            }}
          ></div>
        </section>
      </main>
    </>
  );
}

export { ForgotPassWord };
