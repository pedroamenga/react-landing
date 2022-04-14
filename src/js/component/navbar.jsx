import React from "react";

const Navbar = () => {
	return (
		<div>
			<nav className="navbar justify-content-end navbar-dark bg-dark pb-8">
				<a className="navbar-brand" href="#">
					Navbar
				</a>
				<ul className="nav">
					<li className="nav-item text-white">
						<a
							className="nav-link active"
							aria-current="page"
							href="#">
							Home
						</a>
					</li>
					<li className="nav-item text-white">
						<a className="nav-link" href="#">
							About
						</a>
					</li>
					<li className="nav-item text-white">
						<a className="nav-link" href="#">
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
