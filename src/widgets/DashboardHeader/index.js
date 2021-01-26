/** @format */

import React from "react";
import { FaSearch, FaRegBell } from "react-icons/fa";
import { dashAvater, logo } from "../../assets/images";
import { Input } from "../../components/Input";
import "./DashboardHeader.css";

function DashboardHeader() {
  return (
    <header className='py-4'>
      <nav className='dash-nav-container container d-flex justify-content-between'>
        <div className='dash-nav-logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='dash-nav-items d-flex'>
          <h5>Courses</h5>
          <Input placeholder='Search' icon={<FaSearch />} />
          <span>
            <FaRegBell />
          </span>
          <div className='dash-user-icon'>
            <img src={dashAvater} alt='dash-avatar' />
          </div>
        </div>
      </nav>
    </header>
  );
}

export { DashboardHeader };
