/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";

function Paymentinformation() {
	const [paymentStatus, setPaymentStatus] = useState("");
	const [msg, setMsg] = useState("");
	const [paymentInfo, setPaymentInfo] = useState([]);

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("userDetails"));
		const userId = user.data.uid;
		axios
			.get(`https://cerebrum-v1.herokuapp.com/api/payment/${userId}`)
			.then((res) => {
				console.log(res.data);
				setPaymentStatus(true);
				setPaymentInfo(res.data.data);
			})
			.catch((err) => {
				console.log(err.response.data.message);
				setMsg(err.response.data.message);
				setPaymentStatus(false);
			});
	}, []);

	return (
		<>
			{!paymentStatus ? (
				<div>{msg}</div>
			) : (
				<>
					<h1 className="h4"> Payment </h1> <br />
					<table class="table table-striped">
						<thead>
							<tr className="light-grey-color">
								<th scope="col" className="fs-12">
									COURSE NAME
								</th>
								<th scope="col" className="fs-12">
									AMOUNT
								</th>
								<th scope="col" className="fs-12">
									DATE PAID
								</th>
								<th scope="col" className="fs-12">
									EXPIRES
								</th>
								<th scope="col" className="fs-12">
									STATUS
								</th>
							</tr>
						</thead>
						{paymentInfo.map((detail) => {
							return (
								<tbody key={detail._id}>
									<tr>
										<td className="signup-p payment-info">{detail.course_id.name}</td>
										<td className="signup-p payment-info"> {detail.amount} </td>
										<td className="signup-p payment-info">{detail.sub_date}</td>
										<td className="signup-p payment-info">{detail.exp_date}</td>

										{detail.status ? <td className="signup-p payment-active">Active</td> : <td className="signup-p payment-expired">Expired</td>}
									</tr>
								</tbody>
							);
						})}
					</table>
				</>
			)}
		</>
	);
}

export { Paymentinformation };
