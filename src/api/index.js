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

/// Login Api
export const signIn = (e, user, setUser, setLoadState) => {
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
			console.log("there is an error logging in", err);
			setLoadState(false);
		});
};

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
