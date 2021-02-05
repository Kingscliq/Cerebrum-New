import React, { useState } from "react";
import { AccountInformation } from "../../../components/AccountInformation";
import { ChangePassword } from "../../../components/ChangePassword";
import { Paymentinformation } from "../../../components/PaymentInformation";
import { DashboardHeader } from "../../../widgets/DashboardHeader";
import { Footer } from "../../../widgets/Footer";

import "./TutorProfileSettings.css";

function TutorProfileSettings() {
	const [updateProfile, setUpdateProfile] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		newPassword: "",
		cardNumber: "",
		CVC: "",
		cardExpiration: "",
		profilePhoto: "",
	});

	//profile picture upload
	// const [file, setFile] = useState([]);

	//select option
	const [toggle, setToggle] = useState({ clicked: false });

	const handleChange = (e) => {
		const value = e.target.value;
		setUpdateProfile({ ...updateProfile, [e.target.name]: value });
	};

	const [targetOption, setTargetOption] = useState("");

	const handleClick = (e) => {
		e.preventDefault();
		setTargetOption(e.target.id);
		display();

		setToggle({ clicked: !toggle.clicked });
	};

	const display = () => {
		switch (targetOption) {
			case "one":
				return <AccountInformation updateProfile={updateProfile} handleChange={handleChange} setUpdateProfile={setUpdateProfile} />;

			case "two":
				return <ChangePassword updateProfile={updateProfile} handleChange={handleChange} />;

			case "three":
				return <Paymentinformation updateProfile={updateProfile} handleChange={handleChange} />;

			default:
		}
	};

	return (
		<>
			<DashboardHeader />
			<main className="container shadow my-3 profile-settings-border-top">
				<section className="bg-white">
					<h1 className="py-4 px-5 h4 fw-bold"> Settings </h1>
				</section>
				<section className="d-flex">
					<ul className="col-3 list-unstyled mt-4">
						<li id="one" className={`p-4 profile-settings-hover ${targetOption === "one" ? "profile-settings-clicked" : ""}`} onClick={handleClick}>
							Account Information
						</li>
						<li id="two" className={`p-4 profile-settings-hover ${targetOption === "two" ? "profile-settings-clicked" : ""}`} onClick={handleClick}>
							Password
						</li>
						<li
							id="three"
							className={`p-4 profile-settings-hover ${targetOption === "three" ? "profile-settings-clicked" : ""}`}
							onClick={handleClick}>
							Payment
						</li>
						<li className={`p-4 profile-settings-hover`} onClick={handleClick}>
							Logout
						</li>
					</ul>
					<section className="col-9 bg-white">
						<div className="p-5 m-5">{display(targetOption)}</div>
					</section>
				</section>
			</main>
			<Footer />
		</>
	);
}

export { TutorProfileSettings };
