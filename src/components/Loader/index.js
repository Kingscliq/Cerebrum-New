import React from "react";
import { loaderImage } from "../../assets/images";
import "./Loader.css";

function Loader() {
	return <img src={loaderImage} className="loader-img" alt="loader" />;
}

export { Loader };
