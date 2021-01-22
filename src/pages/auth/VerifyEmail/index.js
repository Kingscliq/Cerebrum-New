import React from "react";
import { useState, useEffect } from "react";
import { verifyImage } from "../../../assets/images";
import { Button } from "../../../components/Button";
import "./VerifyEmail.css";

function VerifyEmail() {
	// Prepend `0` for one digit numbers. For that the number has to be
	// converted to string, as numbers don't have length method
	const padTime = (time) => {
		return String(time).length === 1 ? `0${time}` : `${time}`;
	};

	const format = (time) => {
		// Convert seconds into minutes and take the whole part
		const minutes = Math.floor(time / 60);

		// Get the seconds left after converting minutes
		const seconds = time % 60;

		//Return combined values as string in format mm:ss
		return `${minutes}:${padTime(seconds)}`;
	};

	const [counter, setCounter] = useState(30);
	useEffect(() => {
		let timer;
		if (counter > 0) {
			timer = setTimeout(() => setCounter((c) => c - 1), 1000);
		}

		return () => {
			if (timer) {
				clearTimeout(timer);
			}
		};
	}, [counter]);

	return (
		<main className="container-fluid vh-100 verifymail-section">
			<section className="row h-100">
				<div className="col-6 d-flex justify-content-center align-items-center">
					<div className="card shadow w-c">
						<form>
							<h2> Hi Ikeme </h2>

							<p className="mt-4 mb-3 signup-p">
								To complete your sign up, please verify your email. <span className="text-muted">Haven't seen the mail? Click to resend</span>
							</p>
							<Button className="btn btn-primary w-100 mb-5" text="Resend Verification Mail" disabled={counter === 0 ? false : true} />
							<p className="mt-1 signup-p text-center">
								Time left <span className="pl-1 pr-1"> : </span>
								{counter === 0 ? "Time out" : <span className="verification-timeout">{format(counter)}</span>}
							</p>
						</form>
					</div>
				</div>
				<div className="col-6 bg-danger h-100" style={{ background: `url(${verifyImage})`, backgroundRepeat: `no-repeat` }}></div>
			</section>
		</main>
	);
}

export default VerifyEmail;
