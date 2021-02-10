import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";

function Paymentinformation(props) {
	return (
		<>
			<h1 className="h4"> Payment </h1> <br />
			<table class="table table-striped">
				<thead>
					<tr className="light-grey-color">
						<th scope="col" className="fs-12">
							CARD TYPE
						</th>
						<th scope="col" className="fs-12">
							NUMBER
						</th>
						<th scope="col" className="fs-12">
							CARD HOLDER
						</th>
						<th scope="col" className="fs-12">
							EXPIRES
						</th>
						<th scope="col" className="fs-12">
							STATUS
						</th>
						<th scope="col" className="fs-12"></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row" className="signup-p">
							1
						</th>
						<td className="signup-p"> ****1243 </td>
						<td className="signup-p"> Kenechukwu Ohiaeri </td>
						<td className="signup-p"> 03/21 </td>
						<td className="signup-p"> Active </td>
						<td>
							<RiDeleteBinLine />
						</td>
					</tr>
					<tr>
						<th scope="row" className="signup-p">
							1
						</th>
						<td className="signup-p"> ****1243 </td>
						<td className="signup-p"> Kenechukwu Ohiaeri </td>
						<td className="signup-p"> 03/21 </td>
						<td className="signup-p"> Active </td>
						<td>
							<RiDeleteBinLine />
						</td>
					</tr>
					<tr>
						<th scope="row" className="signup-p">
							1
						</th>
						<td className="signup-p"> ****1243 </td>
						<td className="signup-p"> Kenechukwu Ohiaeri </td>
						<td className="signup-p"> 03/21 </td>
						<td className="signup-p"> Active </td>
						<td>
							<RiDeleteBinLine />
						</td>
					</tr>
					<tr>
						<th scope="row" className="signup-p">
							1
						</th>
						<td className="signup-p"> ****1243 </td>
						<td className="signup-p"> Kenechukwu Ohiaeri </td>
						<td className="signup-p"> 03/21 </td>
						<td className="signup-p"> Active </td>
						<td>
							<RiDeleteBinLine />
						</td>
					</tr>
				</tbody>
			</table>
		</>
	);
}

export { Paymentinformation };
