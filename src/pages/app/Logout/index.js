/** @format */

import React, { useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";

const Logout = () => {
  const history = useHistory();
  // useEffect(() => {
  //   localStorage.clear();
  // }, []);

  const clear = () => {
    localStorage.clear();
  };

  // localStorage.clear();
  // history.push("/auth/login");
  return clear && <Redirect to='/auth/login' />;
};

export { Logout };
