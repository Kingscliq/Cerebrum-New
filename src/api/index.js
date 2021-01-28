/** @format */

import axios from "axios";
import { useHistory } from "react-router-dom";

export const signUpReg = (e, state, setLoadState) => {
  e.preventDefault();

  setLoadState(true);
  let currentState = state;
  console.log(currentState);

  axios
    .post(`https://cerebrum-v1.herokuapp.com/api/auth/sign-up`, currentState)
    .then((res) => {
      console.log(res.data);
      setLoadState(false);

      const url = `/verifyemail?email=${currentState.email}&name=${currentState.firstName}`;

      window.location.assign(url);
    })
    .catch(() => {
      console.log("Error Occured");
      setLoadState(false);
    });
};

/// Login Api
export const signIn = (e, user, setUser, setLoadState, msg, setMsg) => {
  e.preventDefault();
  setLoadState(true);
  const data = {
    email: user.email,
    password: user.password,
  };

  axios
    .post("https://cerebrum-v1.herokuapp.com/api/auth/sign-in", data)
    .then((res) => {
      console.log(res.data);

      const userDetails = JSON.stringify(res.data);
      localStorage.setItem("userDetails", userDetails);
      setLoadState(false);

      console.log(userDetails);
      window.open("/", "_self");
    })
    .catch((err) => {
      console.log(err.response.data);
      if (
        err.response.data.message ===
        "Email not verified, kindly check your email for verification link"
      ) {
        window.open(`/verifyemail?email=${data.email}`, "_self");
      }
    });
};

//email verification
export const emailVerification = (e, email, setEmail) => {
  e.preventDefault();
  const data = {
    email: email,
  };

  axios
    .post(
      `https://cerebrum-v1.herokuapp.com/api/auth/request-email-verification?email=${data.email}`,
      data
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log("there is an error sending verification email", err);
    });
};
