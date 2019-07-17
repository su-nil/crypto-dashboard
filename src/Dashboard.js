import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Rates from './Rates';
import Header from './Header';
import CurrentTrends from './CurrentTrends';
import Portfolio from './Portfolio';
import SecondNav from './SecondNav';
import DownloadAd from './DownloadAd';
import './Dashboard.css';

export class Dashboard extends Component {
	render() {
		return (
			<div className="Dashboard">
				<Header />
				<SecondNav />
				<DownloadAd />
				<Portfolio />
				<Rates />
				<CurrentTrends />
				<Sidebar />
			</div>
		);
	}
}

export default Dashboard;
