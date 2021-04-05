/** @format */

import axios from "axios";

const signUpReg = (e, state, setLoadState, setError, setSuccess) => {
  e.preventDefault();

  setLoadState(true);
  let currentState = state;
  console.log(currentState);

  axios
    .post(`https://cerebrum-v1.herokuapp.com/api/auth/sign-up`, currentState)
    .then((res) => {
      console.log(res.data);

      setLoadState(false);
      window.open(
        `verifyemail?email=${currentState.email}&name=${currentState.firstName}`,
        "_self"
      );
    })
    .catch((e) => {
      console.log(e.response);
      setLoadState(false);
      setError(e.response.data.message);
      setSuccess(null);
    });
};



export {signUpReg}