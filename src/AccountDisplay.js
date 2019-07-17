import React, { Component } from 'react';
import './AccountDisplay.css';
import CryptoBalance from './CryptoBalance';
export class AccountDisplay extends Component {
	render() {
		return (
			<div className="AccountDisplay">
				<span className="account-disp-title-wrapper">
					<span style={{ marginRight: 'auto', display: 'flex', alignItems: 'center' }}>
						<h5 style={{ marginRight: '10px' }}>Accounts</h5>
						<i style={{ color: '#ccc' }} className="fas fa-angle-right" />
					</span>

					<h6 style={{ marginRight: '25px', color: ' rgb(226, 112, 62)' }}>Add funds</h6>
				</span>
				<ul style={{ listStyleType: 'none', padding: '0px', margin: '10px 0px 0px 0px' }}>
					<li>
						<CryptoBalance cryptoCurrency="bitcoin" />
					</li>
					<li>
						<CryptoBalance cryptoCurrency="ethereum" />
					</li>
					<li>
						<CryptoBalance cryptoCurrency="monero" />
					</li>
					<li>
						<CryptoBalance cryptoCurrency="bitcoin" />
					</li>
				</ul>
			</div>
		);
	}
}

export default AccountDisplay;
