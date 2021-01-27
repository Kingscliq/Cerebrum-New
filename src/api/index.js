/** @format */

import axios from "axios";

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
export const signIn = (e, user, setUser, setLoadState, msg) => {
  e.preventDefault();
  setLoadState(true);
  const data = {
    email: user.email,
    password: user.password,
  };

  axios
    .post("https://new-cerebrum.herokuapp.com/api/auth/sign-in", data)
    .then((res) => {
      console.log(res.data);
      const token = res.data.token;
      localStorage.setItem("token", token);
      setLoadState(false);
    })
    .catch((err) => {
      if (err.response.status === 400) {
        msg.error === "Invalid username or Password";
      } else {
        msg.success = "Login Successful";

        history.push("/dashboard");
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
      `https://new-cerebrum.herokuapp.com/api/auth/request-email-verification?email=${data.email}`,
      data
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log("there is an error sending verification email", err);
    });
};
