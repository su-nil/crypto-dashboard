import React, { Component } from 'react';
import './CryptoBalance.css';

export class CryptoBalance extends Component {
	render() {
		let color;
		if (this.props.cryptoCurrency === 'bitcoin') color = 'orange';
		else if (this.props.cryptoCurrency === 'ethereum') color = 'black';
		else color = 'dodgerblue';
		return (
			<div className="CryptoBalance">
				<span className="crypto-balance-wrapper">
					<span style={{ marginRight: '10px', display: 'flex', alignItems: 'center' }}>
						<i
							className={`fab fa-${this.props.cryptoCurrency}`}
							style={{ color: `${color}`, width: '20px', marginRight: '10px', fontSize: '20px' }}
						/>
					</span>
					<div
						style={{
							marginRight: 'auto'
						}}
					>
						<p style={{ margin: '0px', color: 'black' }}>
							{this.props.cryptoCurrency.charAt(0).toUpperCase()} 0.00
						</p>
						<p style={{ marginTop: '3px' }}>$0.00</p>
					</div>
					<i style={{ fontSize: '10px', color: '#ccc', marginRight: '25px' }} className="fas fa-plus" />
				</span>
			</div>
		);
	}
}

export default CryptoBalance;
