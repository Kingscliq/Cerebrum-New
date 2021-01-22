import React from "react";
import axios from "axios";

export const signUpReg = (e, state, stateHandler) => {
  e.preventDefault();

  let currentState = state;
  console.log(currentState);
  stateHandler({});

  axios
    .post(`https://cerebrum-v1.herokuapp.com/api/auth/sign-up`, currentState)
    .then((res) => {
      console.log(res.data);
    });
};
