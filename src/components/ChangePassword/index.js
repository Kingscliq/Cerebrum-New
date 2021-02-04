import React from "react";
import { Input } from "../Input";
import { FaLock } from "react-icons/fa";

function ChangePassword(props) {
	return (
		<>
			<h1 className="h4"> Password </h1> <br />
			<form className="profile-settings-opacity">
				<div>
					<span className="profile-settings-label-text"> Current Password </span>
					<Input
						type="text"
						icon={<FaLock />}
						placeholder="Enter current password"
						name="password"
						onChange={props.handleChange}
						value={props.updateProfile.password || ""}
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
						value={props.updateProfile.newPassword || ""}
					/>
				</div>
				<br />
				<div>
					<span className="profile-settings-label-text"> Confirm Password </span>
					<Input
						type="text"
						icon={<FaLock />}
						placeholder="Enter new password again"
						name="newPassword"
						onChange={props.handleChange}
						value={props.updateProfile.newPassword || ""}
					/>
				</div>
				<div className="my-5 d-flex justify-content-end">
					<div className="d-inline-block m-1">
						<button className="btn watchcourse-send-btn fw-bold"> Save </button>
					</div>
				</div>
			</form>
		</>
	);
}

export { ChangePassword };
