/** @format */

import axios from "axios";
import { Link, Redirect, useHistory } from "react-router-dom";

import { signIn } from "./signIn";
import { signUpReg } from "./signUpReg";
import { getAllCourses } from "./getAllCourses";
import { getAllCategories } from "./getAllCategories";
import { getLessons } from "./getLessons";

export { signIn, signUpReg, getAllCourses, getAllCategories, getLessons };

export const getCategories = (stateFunction) => {
	axios(`https://cerebrum-v1.herokuapp.com/api/category`).then((res) => {
		stateFunction(res.data.data);
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

// Add Comment API
export const addComment = (comment, setComment, course_id, setLoading, loading) => {
	const data = {
		courseId: course_id,
		comment,
	};
	setLoading(true);
	axios
		.post(`https://cerebrum-v1.herokuapp.com/api/${data.courseId}/${data.comment}`)
		.then((res) => {
			console.log(res.data);
			setLoading(false);
		})
		.catch((err) => {
			console.log(err);
			setLoading(false);
		});
};
