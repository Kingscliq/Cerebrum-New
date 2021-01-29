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
export const signIn = (e, user, setUser, setLoadState) => {
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
      window.open("/tdashboard", "_self");
    })
    .catch((err) => {
      console.log(err.response.data.message);
      //   if (
      //     err.response.data.message ===
      //     "Email not verified, kindly check your email for verification link"
      //   ) {
      //     window.open(`/verifyemail?email=${data.email}`, "_self");
      //   }
    });
};
//Courses Api
export const getCourses = (courses, setCourses) => {
<<<<<<< HEAD
	const data = courses;
	const course_id = "6012ea1b057ae600157c2902";

	axios
		.get(`https://cerebrum-v1.herokuapp.com/api/course/view/${course_id}`, data)
		.then((res) => {
			courses = res.data.data;
			setCourses(res.data.data);
		})
		.catch((err) => {
			console.log("There is an error loading files", err.response);
		});
=======
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
>>>>>>> 4dd6ce1c2d8bd94e8b6be2e57a403d860ccdf7fa
};
