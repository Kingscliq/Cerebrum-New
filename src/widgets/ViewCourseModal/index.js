import React from "react";
// import { GrClose } from "react-icons/gr";
// import { dummyVideoImage } from "../../assets/images";
// import { Button } from "../../components/Button";
import "./ViewCourseModal.css";

function ViewCourseModal() {
	return (
		<>
			<main>
				{/* <section className="mt-5 col-5 mx-auto d-flex flex-column">
					<GrClose className="align-self-end my-3" />
					<article className="d-flex justify-content-between">
						<img src={dummyVideoImage} className="col-5" alt="" />
						<div className="col-6">
							<h1 className="h5"> The Story of Art </h1>
                            <span> by Lil Kim </span>
							<sp className="signup-p">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis malesuada aenean tortor ultrices. Lobortis nisl sed ornare sed
								nibh. Sit suscipit id tristique nisi, viverra sed amet est. Netus tristique sed lobortis.
							</sp>
						</div>
					</article>
					<Button className="btn align-self-end mt-5 course-modal-btn" text={"View Course"} />
				</section> */}

				<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
					Launch demo modal
				</button>

				<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel">
									Modal title
								</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">...</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" data-dismiss="modal">
									Close
								</button>
								<button type="button" className="btn btn-primary">
									Save changes
								</button>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

export { ViewCourseModal };
