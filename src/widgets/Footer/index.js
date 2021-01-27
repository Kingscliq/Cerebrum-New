import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { logo2 } from "../../assets/images";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-section py-3">
      <section className="d-flex container justify-content-between ">
        <div className="nav-logo">
          <img src={logo2} alt="logo2" />
        </div>
        <div>
          <ul className="footer-links d-flex">
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Support</Link>
            </li>
            <li>
              <Link>Courses</Link>
            </li>
            <li>
              <Link>FAQ</Link>
            </li>
          </ul>
        </div>
        <form className="d-flex align-items-center">
          <Input type="text" placeholder="Type email here" />
          <Button className="btn btn-primary py-2" text="Send" />
        </form>
      </section>
      <section className="footer-item2 d-flex container justify-content-between my-3">
        <p>Cerebrum &copy; 2020. All rights reserved.</p>
        <div className="footer-icons d-flex justify-content-around">
          <Link>
            <FaLinkedin />
          </Link>
          <Link>
            <FaTwitter />
          </Link>
          <Link>
            <FaFacebook />
          </Link>
        </div>
      </section>
    </footer>
  );
}

export { Footer };
