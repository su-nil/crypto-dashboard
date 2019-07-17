import React, { Component } from 'react';
import BuySell from './BuySell';
import CompareCrypto from './CompareCrypto';
import './CurrentTrends.css';

export class CurrentTrends extends Component {
	render() {
		return (
			<div className="CurrentTrends dashboard-cards">
				<h5>Current trends</h5>
				<ul style={{ listStyleType: 'none', padding: '0px' }}>
					<li>
						<CompareCrypto cryptoOne="bitcoin" cryptoTwo="ethereum" />
					</li>
					<li>
						<CompareCrypto cryptoOne="ethereum" cryptoTwo="monero" />
					</li>
				</ul>

				<BuySell />
			</div>
		);
	}
}

export default CurrentTrends;
