import React from "react";
import { logo } from "../../assets/images";
import { Button } from "../../components/Button";
import "./Header.css";

function Header() {
  return (
    <header className="home-header-section py-4">
      <nav className="container d-flex justify-content-between">
        <div className="header-img-con">
          <img src={logo} alt="logo" />
        </div>
        <div className="header-items-con d-flex align-items-center">
          <ul className="d-flex">
            <li>About</li>
            <li>Courses</li>
            <li>FAQ</li>
          </ul>
          <Button className="btn btn-outline-primary border-3" text="Log In" />
          <Button className="btn btn-primary border-3 " text="Sign Up" />
        </div>
      </nav>
    </header>
  );
}

export { Header };
