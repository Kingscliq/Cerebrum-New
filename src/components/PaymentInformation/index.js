import React from "react";

function Paymentinformation() {
	const active = "";

	return (
		<>
			<h1 className="h4"> Payment </h1> <br />
			<table className="table table-striped">
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
				<tbody>
					<tr>
						<td className="signup-p payment-info"> Learn Programming 101 </td>
						<td className="signup-p payment-info"> N6000 </td>
						<td className="signup-p payment-info"> 02/01/2021 </td>
						<td className="signup-p payment-info"> 02/01/2021 </td>
						<td className={`signup-p ${active.innerText !== "Active" ? "payment-active" : "payment-expired"}`}> Active </td>
					</tr>
					<tr>
						<td className="signup-p payment-info"> Learn Programming 101 </td>
						<td className="signup-p payment-info"> N6000 </td>
						<td className="signup-p payment-info"> 02/01/2021 </td>
						<td className="signup-p payment-info"> 02/01/2021 </td>
						<td className={`signup-p ${active.innerText === "Expired" ? "payment-active" : "payment-expired"}`}> Expired </td>
					</tr>
				</tbody>
			</table>
		</>
	);
}

export { Paymentinformation };
