import React, { Component } from 'react';
import menuSvg from './menu.svg';
import './Menu.css';

export class Menu extends Component {
	render() {
		return (
			<div className="Menu">
				<i className="icon ion-md-apps" />
			</div>
		);
	}
}

export default Menu;
