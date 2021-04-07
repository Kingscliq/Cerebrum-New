import axios from "axios";

//All Courses Api
const getAllCourses = async () => {
	try {
		let runRequest = await axios.get(`/course/`);

		let returnedData = await runRequest.data.data;

		return returnedData;
	} catch (e) {
		console.log("Error:", e.response);
	}
};

export { getAllCourses };
