import React, { useState } from "react";
import { Input } from "../Input";
import { FaLock } from "react-icons/fa";
import { Button } from "../Button";
import { Loader } from "../Loader";
import axios from "axios";

function ChangePassword(props) {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (props.password.newPassword === props.password.confirmPassword) {
			setLoading(true);
			let formData = new FormData();
			formData.append("password", props.password.password);

			formData.append("newPassword", props.password.newPassword);
			formData.append("confirmPassword", props.password.confirmPassword);
			console.log(formData);
			axios
				.patch("https://cerebrum-v1.herokuapp.com/api/auth/update-profile", formData, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
				})
				.then((res) => {
					console.log(res.data.data);
					// setProfileImage(res.data.data.image_url);
					// setForm2({
					// 	...form2,
					// 	course_id: res.data.data._id,
					// });
					setLoading(false);
					setError(null);
				})
				.catch((err) => {
					console.log(props.password);
					// setError(err.res.formData.message);
					setLoading(false);
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
				<div>
					<span className="profile-settings-label-text"> Current Password </span>
					<Input
						type="text"
						icon={<FaLock />}
						placeholder="Enter current password"
						name="password"
						onChange={props.handleChange}
						value={props.password.password || ""}
					/>
				</div>
				<br />
				<div>
					<span className="profile-settings-label-text"> New Password </span>
					<Input
						type="text"
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
						type="text"
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
