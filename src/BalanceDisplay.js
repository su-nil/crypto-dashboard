import React, { Component } from 'react';

export class BalanceDisplay extends Component {
	render() {
		return (
			<div className="BalanceDisplay" style={{ margin: '25px' }}>
				<span style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
					<h1 style={{ margin: '0px 10px 0px 0px' }}>$ 3,458</h1>
					<i className="fas fa-angle-down" />
				</span>
				<span style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
					<p style={{ margin: '0px 15px 0px 0px' }}>$300</p>
					<p style={{ borderBottom: '2px dotted #CCC' }}>2 transactions in progress</p>
				</span>
			</div>
		);
	}
}

export default BalanceDisplay;
