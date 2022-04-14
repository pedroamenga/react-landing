import React from "react";
import propTypes from "prop-types";
import Cards from "./cards.jsx";

const CardsComponent = (props) => {
	return (
		<div classNameName="container">
			<div className="row">
				<div className="col-sm">
					<Cards />
					<Cards />
					<Cards />
					<Cards />
				</div>
			</div>
		</div>
	);
};

export default CardsComponent;
