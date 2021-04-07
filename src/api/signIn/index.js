import axios from "axios";

/// Login Api for Auth
const signIn = (e, user, setUser, setLoadState, setError, setSuccess, history) => {
	e.preventDefault();
	setLoadState(true);
	const data = {
		email: user.email,
		password: user.password,
	};

	axios
		.post("/auth/sign-in", data)
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
			if (err.response.data.message === "Email not verified, kindly check your email for verification link") {
				history.push(`/auth/verifyemail?email=${data.email}`);
			}

			setLoadState(false);
		});
};

export { signIn };
