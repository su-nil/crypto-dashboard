import React, { Component } from 'react';
import './SidebarNav.css';

export class SidebarNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: 'balance'
		};
	}
	render() {
		return (
			<div className="SidebarNav">
				<span className="sidebar-nav-title-wrapper">
					<h5 className={this.state.active === 'balance' ? 'active' : 'inactive'}>Balance</h5>
					<span className="notif-title-wrapper">
						<h5 className={this.state.active === 'notif' ? 'active' : 'inactive'}>Notifications</h5>
						<h5 className="notif-box">43</h5>
					</span>
				</span>
			</div>
		);
	}
}

export default SidebarNav;
