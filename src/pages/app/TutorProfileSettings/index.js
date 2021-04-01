/** @format */

import React, { useState } from "react";
import { AccountInformation } from "../../../components/AccountInformation";
import { ChangePassword } from "../../../components/ChangePassword";
import { Paymentinformation } from "../../../components/PaymentInformation";
import { DashboardHeader } from "../../../widgets/DashboardHeader";
import { Footer } from "../../../widgets/Footer";
import { useHistory } from "react-router-dom";
import "./TutorProfileSettings.css";

function TutorProfileSettings() {
	const history = useHistory();
	const [accountInfo, setAccountInfo] = useState({
		firstName: "",
		lastName: "",
		image: "",
	});

	const [password, setPassword] = useState({
		newPassword: "",
		confirmPassword: "",
	});

	//select option
	const [toggle, setToggle] = useState({ clicked: false });
	const [onLoad, setOnLoad] = useState(false);

	const handleChange = (event) => {
		if (event.target.files) {
			let currentImg = event.target.name;
			setAccountInfo({ ...accountInfo, [currentImg]: event.target.files[0] });
			console.log(accountInfo);
		} else {
			let currentInput = event.target.name;
			setAccountInfo({ ...accountInfo, [currentInput]: event.target.value });
			setPassword({ ...password, [currentInput]: event.target.value });
			console.log(accountInfo);
		}
	};

	const [targetOption, setTargetOption] = useState("");

	const handleClick = (e) => {
		e.preventDefault();
		setTargetOption(e.target.id);
		display();

		setToggle({ clicked: !toggle.clicked });
		setOnLoad(true);
	};

	// Handle Logout
	const handleLogout = () => {
		history.push("/logout");
	};

	const display = () => {
		switch (targetOption) {
			case "one":
				return <AccountInformation accountInfo={accountInfo} handleChange={handleChange} setAccountInfo={setAccountInfo} />;

			case "two":
				return <ChangePassword password={password} setPassword={setPassword} handleChange={handleChange} />;

			case "three":
				return <Paymentinformation handleChange={handleChange} />;

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
						<li className={`p-4 profile-settings-hover`} onClick={handleLogout}>
							Logout
						</li>
					</ul>
					<section className="col-9 bg-white">
						<div className="p-2 m-5">
							{!onLoad ? (
								<AccountInformation accountInfo={accountInfo} handleChange={handleChange} setAccountInfo={setAccountInfo} />
							) : (
								display(targetOption)
							)}
						</div>
					</section>
				</section>
			</main>
			<Footer />
		</>
	);
}

export { TutorProfileSettings };
