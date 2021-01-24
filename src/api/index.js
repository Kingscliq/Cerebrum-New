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
    })
    .catch(() => {
      console.log("Error Occured");
      setLoadState(false);
    });
};
