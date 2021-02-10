/** @format */

import axios from "axios";

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
        `auth/verifyemail?email=${currentState.email}&name=${currentState.firstName}`,
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

/// Login Api
export const signIn = (
  e,
  user,
  setUser,
  setLoadState,
  setError,
  setSuccess
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

      const userDetails = JSON.stringify(res.data);
      localStorage.setItem("userDetails", userDetails);
      setLoadState(false);

      if (localStorage.getItem("current") === null) {
        window.open("/dashboard", "_self");
      } else {
        window.open(localStorage.getItem("current"), "_self");
      }
    })
    .catch((err) => {
      console.log("err", err.response);
      if (err.response.status === 400) {
        setError(err.response.data.message);
        console.log(err.response.data.message);
        setSuccess(null);
      }
      if (err.response === undefined) {
        window.open("/auth/login", "_self");
        setError("Opps! there is a problem with our server");
        setSuccess(null);
      }
      if (
        err.response.data.message ===
        "Email not verified, kindly check your email for verification link"
      ) {
        window.open(`/auth/verifyemail?email=${data.email}`, "_self");
      }
      // console.log(err.response.message);
      // console.log(err.response.data.message);

      setLoadState(false);
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
