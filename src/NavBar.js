import React, { Component } from 'react';
import './NavBar.css';
export class NavBar extends Component {
	render() {
		return (
			<div className="NavBar">
				<a href="#" id="accounts">
					Accounts
				</a>
				<a href="#" id="portfolio">
					Portfolio
				</a>
				<a href="#" id="cards">
					Cards
				</a>
				<a href="#" id="user">
					<i className="far fa-user" />
				</a>
			</div>
		);
	}
}

export default NavBar;
