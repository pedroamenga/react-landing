import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Cards from "./cards.jsx";

const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<Cards />
		</div>
	);
};

export default Home;
