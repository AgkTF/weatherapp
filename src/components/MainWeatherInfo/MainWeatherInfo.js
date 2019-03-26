import React, { Component } from 'react';
import '../../assets/weather-icons/css/weather-icons.min.css';
import DateTime from '../DateTime/DateTime';
import classes from './MainWeatherInfo.module.css';

class MainWeatherInfo extends Component {
	state = {
		weatherIcon: 'night-sleet-storm',
		weatherSummary: 'Breezy starting this evening',
		temp: 33
	};

	render() {
		return (
			<div className={classes.Container}>
				<div className={classes.Header}>
					<i className={`wi wi-${this.state.weatherIcon}`} />
					{this.state.temp}°<span>C</span>
				</div>
				<div className={classes.Subheader1}>
					{this.state.weatherSummary}
				</div>
				<div className={classes.Subheader2}>
					<DateTime />
				</div>
			</div>
		);
	}
}

export default MainWeatherInfo;
