import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SecondsCounter from "./SecondCounter";
import "../../styles/index.css";

//create your first component
const Home = () => {
	return (
		<SecondsCounter />
	);
};

export default Home;
