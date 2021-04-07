import axios from "axios";

//All Course Categories Api
const getAllCategories = async () => {
	try {
		let runRequest = await axios.get(`/category/`);

		let returnedData = await runRequest.data.data;

		return returnedData;
	} catch (e) {
		console.log("There is an error loading categories", e.response);
	}
};

export { getAllCategories };
