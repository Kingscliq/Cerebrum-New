import React from "react";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { VscDeviceCamera } from "react-icons/vsc";
import { Input } from "../Input";
// import ImageUploader from "react-images-upload";

function AccountInformation(props) {
	const [file, setFile] = React.useState(null);

	const fileHandler = (e) => {
		setFile(e.target.files[0]);
		props.setUpdateProfile({ profilePhoto: setFile });

		console.log(props.updateProfile.profilePhoto);
	};

	return (
		<>
			<h1 className="h4"> Account Information </h1>
			<div className="my-5 mx-2">
				<div className="profile-upload-pic-div d-flex justify-content-center align-items-center position-relative">
					<img
						src={file ? URL.createObjectURL(file) : null}
						alt={file ? file.name : null}
						className="rounded-circle position-absolute"
						width="131px"
						height="131px"
					/>

					<input type="file" className="position-absolute" onChange={fileHandler} style={{ opacity: 0 }} />

					<VscDeviceCamera className="h2 mt-3 " value={{ color: "blue", size: "50px" }} />
				</div>

				<p className="profile-settings-label-text pt-2"> Edit profile picture </p>
			</div>

			<form className="profile-settings-opacity">
				<div>
					<span className="profile-settings-label-text"> First Name</span>
					<Input
						type="text"
						icon={<FaUser />}
						placeholder="Enter first name"
						name="firstName"
						onChange={props.handleChange}
						value={props.updateProfile.firstName || ""}
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
						value={props.updateProfile.lastName || ""}
					/>
				</div>
				<br />
				<div>
					<span className="profile-settings-label-text"> Email Address </span>
					<Input
						type="email"
						icon={<FaEnvelope />}
						placeholder="Enter email address"
						name="email"
						onChange={props.handleChange}
						value={props.updateProfile.email || ""}
					/>
				</div>

				<div className="my-5 d-flex justify-content-end">
					<div className="d-inline-block m-1">
						<button className="btn watchcourse-cancel-btn fw-bold">Edit</button>
					</div>

					<div className="d-inline-block m-1">
						<button className="btn watchcourse-send-btn fw-bold">Apply</button>
					</div>
				</div>
			</form>
		</>
	);
}

export { AccountInformation };
