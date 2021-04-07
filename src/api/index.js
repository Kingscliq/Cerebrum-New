/** @format */

import axios from "axios";
import { Link, Redirect, useHistory } from "react-router-dom";

export const signUpReg = (e, state, setLoadState, setError, setSuccess) => {
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

export const getCategories = (stateFunction) => {
  axios(`https://cerebrum-v1.herokuapp.com/api/category`).then((res) => {
    stateFunction(res.data.data);
  });
};

/// Login Api for Auth
export const signIn = (
  e,
  user,
  setUser,
  setLoadState,
  setError,
  setSuccess,
  history
) => {
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
      const role = res.data.data.role;

      const userDetails = JSON.stringify(res.data);
      localStorage.setItem("userDetails", userDetails);
      console.log(userDetails);
      localStorage.setItem("TOKEN", res.data.data.token);
      setLoadState(false);

      if (!localStorage.getItem("current")) {
        if (role === "tutor") {
          history.push("/tutor/dashboard");
        } else {
          history.push("/student/dashboard");
        }
      } else {
        window.location.assign(localStorage.getItem("current"));
      }
    })
    .catch((err) => {
      console.log("err", err.response);
      if (!err.response) {
        setError(err.response.data.message);
        console.log(err.response.data.message);
        setSuccess(null);
      }
      if (err.response === undefined) {
        history.push("/auth/login");
        setError("Opps! there is a problem with our server");
        setSuccess(null);
      }
      if (
        err.response.data.message ===
        "Email not verified, kindly check your email for verification link"
      ) {
        history.push(`/auth/verifyemail?email=${data.email}`);
      }

      setLoadState(false);
    });
};

// Authorise User
export const authenticate = (user, setUser, role, setRole, history) => {
  const data = localStorage.getItem("userDetails");
  if (!data) {
    history.push("/auth/login");
  }
  const userData = JSON.parse(data);
  const token = userData.data.token;
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  const userId = userData.data.uid;
  axios
    .get(`https://cerebrum-v1.herokuapp.com/api/user/${userId}`, config)
    .then((res) => {
      console.log("res value", res.data);
      setUser(res.data.data);
      setRole(res.data.data.role);
    })
    .catch((err) => {
      history.push("/auth/login");
    });
};
//Watch Course Api
export const getLessons = (courses, setCourses, course_id) => {
  const data = courses;

  axios
    .get(`https://cerebrum-v1.herokuapp.com/api/course/view/${course_id}`, data)
    .then((res) => {
      courses = res.data.data;
      setCourses(res.data.data);
    })
    .catch((err) => {
      console.log("There is an error loading files", err.response);
    });
};

//All Courses Api
export const getAllCourses = async () => {
  try {
    let runRequest = await axios.get(
      `https://cerebrum-v1.herokuapp.com/api/course/`
    );

    let returnedData = await runRequest.data.data;

    return returnedData;
  } catch (e) {
    console.log("Error:", e.response);
  }
};

//All Course Categories Api
export const getAllCategories = (allCategories, setAllCategories) => {
  const data = allCategories;

  axios
    .get(`https://cerebrum-v1.herokuapp.com/api/category/`, data)
    .then((res) => {
      allCategories = res.data.data;
      setAllCategories(res.data.data);
      // console.log(allCategories);
    })
    .catch((err) => {
      console.log("There is an error loading categories", err.response);
    });
};
