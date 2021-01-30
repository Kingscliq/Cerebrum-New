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
export const getCourses = (courses, setCourses, course_id) => {
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
export const getAllCourses = (allCourses, setAllCourses) => {
	const data = allCourses;

	axios
		.get(`https://cerebrum-v1.herokuapp.com/api/course/`, data)
		.then((res) => {
			allCourses = res.data.data;
			setAllCourses(res.data.data);
			// console.log(allCourses);
		})
		.catch((err) => {
			console.log("There is an error loading files", err.response);
		});
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
