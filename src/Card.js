import React, { Component } from 'react';
import cardSvg from './master-card.svg';
import './Card.css';

export class Card extends Component {
	render() {
		return (
			<div className="Card">
				<img src={cardSvg} alt="debit card" id="debit-card-svg" />
				<p>Debit card</p>
			</div>
		);
	}
}

export default Card;
