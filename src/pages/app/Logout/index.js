/** @format */

import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

const Logout = () => {
  useEffect(() => {
    localStorage.clear();
  });
  return <Redirect to='/auth/login' />;
};

export { Logout };
