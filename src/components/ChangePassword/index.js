import React, { useState } from "react";
import { Input } from "../Input";
import { FaLock } from "react-icons/fa";
import { Button } from "../Button";
import { Loader } from "../Loader";
import axios from "axios";

function ChangePassword(props) {
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (props.password.newPassword === props.password.confirmPassword) {
			setLoading(true);
			let userInfo = new FormData();
			userInfo.append("newPassword", props.password.newPassword);
			console.log(userInfo);

			const data = localStorage.getItem("userDetails");
			const user = JSON.parse(data);
			const token = user.data.token;
			const userID = user.data.uid;
			const config = {
				headers: {
					"Content-Type": "multipart/form-data",
					Authorization: `Bearer ${token}`,
				},
			};
			axios
				.post(`https://cerebrum-v1.herokuapp.com/api/auth/profile-reset-password/${userID}`, userInfo, config)
				.then((res) => {
					setSuccess("Your password has been updated");
					console.log(userInfo);
					props.setPassword({ ...props.password, newPassword: res.data.data.password });
					setLoading(false);
					console.log(props.password);
				})
				.catch((err) => {
					console.log(props.password);
					console.log(token);
				});
		} else {
			console.log("");
			setError("password does not match");
			setLoading(false);
		}
	};
	return (
		<>
			<h1 className="h4"> Password </h1> <br />
			<form className="profile-settings-opacity" onSubmit={handleSubmit} encType="multipart/form-data">
				{error && <div className="alert alert-danger">{error}</div>}
				{success && <div className="alert alert-success">{success}</div>}

				<div>
					<span className="profile-settings-label-text"> New Password </span>
					<Input
						type="password"
						icon={<FaLock />}
						placeholder="Enter new password"
						name="newPassword"
						onChange={props.handleChange}
						value={props.password.newPassword || ""}
					/>
				</div>
				<br />
				<div>
					<span className="profile-settings-label-text"> Confirm Password </span>
					<Input
						type="password"
						icon={<FaLock />}
						placeholder="Enter new password again"
						name="confirmPassword"
						onChange={props.handleChange}
						value={props.password.confirmPassword || ""}
					/>
				</div>
				<div className="my-5 d-flex justify-content-end">
					<div className="d-inline-block m-1">
						<Button
							className="btn profile-settings-blue-btn fw-bold"
							text="Save"
							loadingIcon={loading && <Loader />}
							onClick={(e) => {
								e.preventDefault();
								const userId = localStorage.getItem("userDetails").data.uid;
								console.log(userId);
							}}
						/>
					</div>
				</div>
			</form>
		</>
	);
}

export { ChangePassword };
