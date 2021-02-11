import React, { useState } from "react";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { VscDeviceCamera } from "react-icons/vsc";
import { Input } from "../Input";
import axios from "axios";
import { Button } from "../Button";
import { Loader } from "../Loader";

function AccountInformation(props) {
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		let userInfo = new FormData();
		userInfo.append("firstName", props.accountInfo.firstName);
		userInfo.append("lastName", props.accountInfo.lastName);
		userInfo.append("image", props.accountInfo.image);
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
			.patch(`https://cerebrum-v1.herokuapp.com/api/auth/update-profile/${userID}`, userInfo, config)
			.then((res) => {
				console.log(userInfo);
				props.setAccountInfo({ ...props.accountInfo, firstName: res.data.data.firstName });
				setLoading(false);
				console.log(props.accountInfo);
				setSuccess("Your profile has been updated");
			})
			.catch((err) => {
				console.log(err.response);
				console.log(props.accountInfo);
				console.log(token);
			});
	};

	return (
		<>
			<h1 className="h4"> Account Information </h1>
			<form className="profile-settings-opacity" onSubmit={handleSubmit} encType="multipart/form-data">
				{success && <div className="alert alert-success">{success}</div>}
				<div className="my-5 mx-2">
					<div className="profile-upload-pic-div d-flex justify-content-center align-items-center position-relative">
						<img
							src={props.accountInfo.image ? URL.createObjectURL(props.accountInfo.image) : null}
							alt={props.accountInfo.image ? props.accountInfo.image.name : null}
							className="rounded-circle position-absolute"
							width="131px"
							height="131px"
						/>

						<input
							type="file"
							name="image"
							accept="image/*"
							className="position-absolute"
							onChange={props.handleChange}
							style={{ opacity: 0 }}
							disabled={loading}
						/>

						<VscDeviceCamera className="h2 mt-3 " value={{ color: "blue", size: "50px" }} />
					</div>

					<p className="profile-settings-label-text pt-2"> Edit profile picture </p>
				</div>

				<div>
					<span className="profile-settings-label-text"> First Name</span>
					<Input
						type="text"
						icon={<FaUser />}
						placeholder="Enter first name"
						name="firstName"
						onChange={props.handleChange}
						value={props.accountInfo.firstName || ""}
						disabled={loading}
					/>
				</div>
				<br />
				<div>
					<span className="profile-settings-label-text"> Last Name </span>
					<Input
						type="text"
						icon={<FaUser />}
						placeholder="Enter last name"
						name="lastName"
						onChange={props.handleChange}
						value={props.accountInfo.lastName || ""}
						disabled={loading}
					/>
				</div>
				<br />
				{/* <div>
					<span className="profile-settings-label-text"> Email Address </span>
					<Input
						type="email"
						icon={<FaEnvelope />}
						placeholder="Enter email address"
						name="email"
						onChange={props.handleChange}
						value={props.accountInfo.email || ""}
						disabled={true}
					/>
				</div> */}

				<div className="my-5 d-flex justify-content-end">
					<div className="d-inline-block m-1">
						<Button className="btn profile-settings-white-btn fw-bold" text="Edit" />
					</div>

					<div className="d-inline-block m-1">
						<Button className="btn profile-settings-blue-btn fw-bold" text="Apply Changes" loadingIcon={loading && <Loader />} />
					</div>
				</div>
			</form>
		</>
	);
}

export { AccountInformation };
