/** @format */

import React from "react";
import { FaSearch, FaRegBell } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
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
        <div className='dash-nav-items d-flex align-items-center'>
          <h5>Courses</h5>
          <Input className='mb-5' placeholder='Search' icon={<FaSearch />} />
          <span id='dash-bell'>
            <FaRegBell />
          </span>
          <div className='dash-user-icon d-flex'>
            <img src={dashAvater} alt='dash-avatar' />
            <span id='dash-toggle'>
              <RiArrowDownSLine />
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export { DashboardHeader };
