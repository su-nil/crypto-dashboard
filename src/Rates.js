import React, { Component } from 'react';
import CryptoCurrencySearch from './CryptoCurrencySearch';
import CurrencyList from './CurrencyList';
import RateCard from './RateCard';
import './Rates.css';

export class Rates extends Component {
	render() {
		return (
			<div className="Rates dashboard-cards">
				<div className="rates-header-wrapper">
					<div className="title-plus-search">
						<h5>Rates</h5>
						<CryptoCurrencySearch />
					</div>

					<CurrencyList />
				</div>
				<ul style={{ listStyleType: 'none', padding: '0px' }}>
					<li>
						<RateCard cryptoCurrency="bitcoin" />
					</li>
					<li>
						<RateCard cryptoCurrency="ethereum" />
					</li>
					<li>
						<RateCard cryptoCurrency="monero" />
					</li>
					<li>
						<RateCard cryptoCurrency="bitcoin" />
					</li>
				</ul>
			</div>
		);
	}
}

export default Rates;
