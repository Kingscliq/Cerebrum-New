/** @format */

import axios from "axios";
import { withRouter } from "react-router-dom";

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
      window.open(
        `verifyemail?email=${currentState.email}&name=${currentState.firstName}`,
        "_self"
      );
    })
    .catch(() => {
      console.log("Error Occured");
      setLoadState(false);
    });
};

export const getCategories = (stateFunction) => {
  axios(`https://cerebrum-v1.herokuapp.com/api/category`).then((res) => {
    stateFunction(res.data.data);
  });
};

/// Login Api
export const signIn = (e, user, setUser, setLoadState, setError, error) => {
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
      // console.log("proppps", props);
      // props.history.push("/tdashboard");
      window.open("/tdashboard", "_self");
    })
    .catch((err) => {
      console.log("err", err);
      if (err.response === undefined) {
        window.open("/login", "_self");
        setError("Opps! there is a problem with our server");
      }
      // console.log(err.response.message);
      // console.log(err.response.data.message);

      setLoadState(false);
    });
};
// console.log(withRouter)
// withRouter(signIn);

//Courses Api
export const getCourses = (courses, setCourses) => {
  // e.preventDefault();
  // setLoadState(true);
  const data = [courses];
  // const courseId = 12345;

  axios
    .get(`https://new-cerebrum.herokuapp.com/api/course/12345`, data)
    .then((res) => {
      console.log(res.data);
      setCourses(data);

      // setLoadState(false);
    })
    .catch((err) => {
      console.log("There is an error loading files", err.response.data);
      // setLoadState(false);
    });
};
