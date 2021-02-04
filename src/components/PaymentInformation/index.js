import React from "react";
import { Input } from "../Input";
import { ImCreditCard } from "react-icons/im";
import { BsCreditCard } from "react-icons/bs";

function Paymentinformation(props) {
	return (
		<>
			<h1 className="h4"> Payment </h1> <br />
			<form className="profile-settings-opacity">
				<div className="row">
					<div className="col-9">
						<p className="profile-settings-label-text"> Card Number </p>

						<Input
							type="text"
							icon={<BsCreditCard />}
							placeholder="Enter card number"
							name="cardNumber"
							onChange={props.handleChange}
							value={props.updateProfile.cardNumber || ""}
						/>
					</div>
					<div className="col-3">
						<p className="profile-settings-label-text"> CVC Code </p>

						<Input
							type="text"
							icon={<ImCreditCard />}
							placeholder="3 digit code"
							name="CVC"
							onChange={props.handleChange}
							value={props.updateProfile.CVC || ""}
						/>
					</div>
				</div>
				<br />
				<div>
					<p className="profile-settings-label-text"> Expiration </p>

					<Input
						type="text"
						icon={<ImCreditCard />}
						placeholder="Enter card expiration date"
						name="cardExpiration"
						onChange={props.handleChange}
						value={props.updateProfile.cardExpiration || ""}
					/>
				</div>
				<div className="my-5 d-flex justify-content-end">
					<div className="d-inline-block m-1">
						<button className="btn watchcourse-cancel-btn fw-bold"> Edit </button>
					</div>

					<div className="d-inline-block m-1">
						<button className="btn watchcourse-send-btn fw-bold"> Save </button>
					</div>
				</div>
			</form>
		</>
	);
}

export { Paymentinformation };
