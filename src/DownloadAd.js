import React, { Component } from 'react';
import './DownloadAd.css';

export class DownloadAd extends Component {
	render() {
		return (
			<div className="DownloadAd dashboard-cards">
				<h5>
					Mobile <br />application
				</h5>
				<div className="app-stores-wrapper">
					<div className="apple-store-wrapper">
						<i className="fab fa-apple ios" />
					</div>
					<div className="google-play-wrapper">
						<i className="fab fa-android play" />
					</div>
				</div>
				<div className="dot-nav-btns">
					<i className="fas fa-circle selected" />
					<i className="fas fa-circle" />
					<i className="fas fa-circle" />
				</div>
			</div>
		);
	}
}

export default DownloadAd;
