import React, { Component } from 'react';
import NavBar from './NavBar';
import Logo from './Logo';
import './Header.css';

export class Header extends Component {
	render() {
		return (
			<div className="Header">
				<Logo />
				<div className="buy-sell-trade">
					<a href="#" className="active">
						Buy/Sell
					</a>
				</div>
				<div>
					<a href="#">Trade</a>
				</div>

				<NavBar />
			</div>
		);
	}
}

export default Header;
