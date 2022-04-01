import React from 'react';
import './header.css';
const Header = () => {
	return (
		<div className="ui fixed menu">
			<div className="ui container center">
				<ul className="navbar">
					<li> Ecommerce Shop </li>
					<li> Home </li>
					<li> Contact us</li>
					<li> Gallery </li>
				</ul>
			</div>
		</div>
	);
};
export default Header;
