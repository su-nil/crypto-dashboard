import React, { Component } from 'react';
import SidebarNav from './SidebarNav';
import AccountDisplay from './AccountDisplay';
import BalanceDisplay from './BalanceDisplay';
import './Sidebar.css';

export class Sidebar extends Component {
	render() {
		return (
			<div className="Sidebar">
				<SidebarNav />
				<BalanceDisplay />
				<div style={{ margin: '0px 0px 0px 25px' }}>
					<button className="btn add-portfolio">Add a portfolio</button>
				</div>

				<AccountDisplay />
			</div>
		);
	}
}

export default Sidebar;
