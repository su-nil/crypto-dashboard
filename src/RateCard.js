import React, { Component } from 'react';
import { Sparklines } from 'react-sparklines';
import { SparklinesLine } from 'react-sparklines';
import './RateCard.css';

export class RateCard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const data = new Array(100).fill(0).map((el) => Math.round(Math.random() * 100));
		let color;
		if (this.props.cryptoCurrency === 'bitcoin') color = 'orange';
		else if (this.props.cryptoCurrency === 'ethereum') color = 'black';
		else color = 'dodgerblue';
		return (
			<div className="RateCard">
				<span className="rate-card-wrapper">
					<span style={{ marginRight: 'auto', display: 'flex', alignItems: 'center' }}>
						<i
							className={`fab fa-${this.props.cryptoCurrency}`}
							style={{ color: `${color}`, width: '20px', marginRight: '10px', fontSize: '20px' }}
						/>
						<p style={{ textTransform: 'capitalize', display: 'inline-block', textAlign: 'left' }}>
							1 {this.props.cryptoCurrency} =
							<span style={{ color: 'black', borderBottom: '2px dotted #CCC' }}> {'  '}$ 10,000.00</span>
						</p>
					</span>

					<span style={{ width: '100px', height: 'auto', display: 'inline-block' }}>
						<Sparklines data={data} limit={20} width={100} height={30} margin={5}>
							<SparklinesLine color={color} style={{ strokeWidth: 0.5, stroke: `${color}` }} />
						</Sparklines>
					</span>
					<p style={{ color: `${Math.random() < 0.5 ? 'red' : 'green'}` }}>
						{`${Math.random() < 0.5 ? '+' : '-'}`} {(Math.random() * 50).toFixed(2)}%
					</p>
					<i className="fas fa-angle-down" />
				</span>
			</div>
		);
	}
}

export default RateCard;
