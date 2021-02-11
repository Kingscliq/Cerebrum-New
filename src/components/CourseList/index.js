/** @format */

import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./CourseList.css";
const CourseList = ({ courseName, courseImg, courseDesc }) => {
	return (
		<div>
			<section className="courselist m-2">
				<article className="card course-list-mapped">
					<div className="container">
						{/* <div className='d-flex align-item-start justify-content-between'> */}
						<div className="row">
							<div className="col-md-10">
								<div className="row">
									<div className="col-2">
										<img src={courseImg} style={{ borderRadius: "5px" }} alt="" height="60px" width="60px" />
									</div>
									<div className="col-1">&nbsp;</div>
									<div className="col-8">
										<h6 className="p-0 m-0 font-bold">{courseName}</h6>
										{courseDesc}
										{/* <p>30 courses+</p> */}
									</div>
								</div>
							</div>

							<div className="text-primary col-2 d-flex justify-content-end align-items-center">
								<BsThreeDotsVertical />
							</div>
						</div>
					</div>
				</article>
			</section>
		</div>
	);
};

export { CourseList };
