import React, { Component } from 'react';
import './CurrencyList.css';

export class CurrencyList extends Component {
	render() {
		return (
			<div className="CurrencyList">
				<label htmlFor="currency-select">
					<p
						style={{
							display: 'inline',
							marginRight: '5px'
						}}
					>
						Price
					</p>
				</label>
				<select id="currency-select">
					<option value="USD">US Dollar</option>
					<option value="INR">Indian Rupee</option>
					<option value="EUR">Euro</option>
					<option value="YEN">Japanese Yen</option>
				</select>
			</div>
		);
	}
}

export default CurrencyList;
