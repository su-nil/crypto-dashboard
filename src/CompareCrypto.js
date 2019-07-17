import React, { Component } from 'react';
import './CompareCrypto.css';

export class CompareCrypto extends Component {
	render() {
		let colorOne, colorTwo;
		if (this.props.cryptoOne === 'bitcoin') colorOne = 'orange';
		else if (this.props.cryptoOne === 'ethereum') colorOne = 'black';
		else colorOne = 'dodgerblue';
		if (this.props.cryptoTwo === 'bitcoin') colorTwo = 'orange';
		else if (this.props.cryptoTwo === 'ethereum') colorTwo = 'black';
		else colorTwo = 'dodgerblue';
		return (
			<div>
				<span className="compare-crypto-wrapper">
					<i
						className={`fab fa-${this.props.cryptoOne}`}
						style={{
							color: `${colorOne}`,
							width: '20px',
							marginRight: '10px',
							fontSize: '20px'
							// backgroundColor: `${colorOne}`
						}}
					/>
					<i
						className={`fab fa-${this.props.cryptoTwo}`}
						style={{
							color: `${colorTwo}`,
							width: '20px',
							marginRight: '10px',
							fontSize: '20px'
							// backgroundColor: `${colorTwo}`
						}}
					/>
					<span style={{ marginRight: 'auto' }}>
						<p style={{ margin: '0px' }}>Bid</p>
						<p style={{ color: 'black', marginTop: '3px' }}>BTC / ETH</p>
					</span>
					<p>
						Average {' '}
						<span style={{ color: 'black', borderBottom: '2px dotted #CCC' }}> {'  '} 500 ETH</span>
					</p>
					<i className="fas fa-angle-down" />
				</span>
			</div>
		);
	}
}

export default CompareCrypto;
