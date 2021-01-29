import React from "react";
import { Link, NavLink } from "react-router-dom";
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
            <li>
              <NavLink to="/">About</NavLink>
            </li>
            <li>
              <NavLink to="/">Courses</NavLink>
            </li>
            <li>
              <NavLink to="/">FAQ</NavLink>
            </li>
          </ul>
          <Button
            className="btn btn-outline-primary border-2"
            text={<Link to="/login">Login</Link>}
          />
          <Button
            className="btn btn-primary border-2"
            text={<Link to="/signup">Sign Up</Link>}
          />
        </div>
      </nav>
    </header>
  );
}

export { Header };
