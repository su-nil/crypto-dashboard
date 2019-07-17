import React, { Component } from 'react';
import Card from './Card';
import Menu from './Menu';
import './SecondNav.css';

export class SecondNav extends Component {
	render() {
		return (
			<div className="SecondNav">
				<div className="card-wrapper">
					<Card />
				</div>
				<div className="menu-wrapper">
					<Menu />
				</div>
			</div>
		);
	}
}

export default SecondNav;
