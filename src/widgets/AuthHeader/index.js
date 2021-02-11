import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets/images";
import "./AuthHeader.css";

function AuthHeader() {
  return (
    <header className="container-fluid auth-header-section py-4">
      <nav className="container text-center text-lg-start">
        <div className="auth-header-img-con">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export { AuthHeader };
