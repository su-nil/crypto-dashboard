import React, { Component } from 'react';
import './BuySell.css';

export class BuySell extends Component {
	render() {
		return (
			<div className="BuySell">
				<input id="input-one" />
				<input id="input-two" />
				<button className="buy btn">Buy</button>
				<button className="sell btn">Sell</button>
			</div>
		);
	}
}

export default BuySell;
