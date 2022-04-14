import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import CardsComponent from "./cardsComponent.jsx";

const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<CardsComponent />
		</div>
	);
};

export default Home;
