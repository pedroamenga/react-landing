import React from "react";
import propTypes from "prop-types";

const Cards = (props) => {
	return (
		<div classNameName="container">
			<div classNameName="row">
				<div className="col-md-3">
					<div className="card" style={{ width: "18rem" }}>
						<img
							src="https://picsum.photos/200"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
							</p>
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cards;
