import React, { Component } from 'react';
import '../../assets/weather-icons/css/weather-icons.min.css';
import DateTime from '../../components/DateTime/DateTime';
// import axios from 'axios';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './MainWeatherInfo.module.css';

class MainWeatherInfo extends Component {
	render() {
		let mainWeather = this.props.loading ? (
			<Spinner />
		) : (
			<>
				<div className={classes.Header}>
					<i
						className={`wi wi-forecast-io-${
							this.props.weatherIcon
						}`}
					/>
					{'  '}
					{this.props.temp}°<span>C</span>
				</div>
				<div className={classes.LocationSubheader}>
					{this.props.where.city}
				</div>

				<div className={classes.Subheader1}>
					{this.props.weatherSummary}
				</div>
				<div className={classes.Subheader2}>
					<DateTime />
					{/* TODO:
						Add local time (at the location searched) */}
				</div>
			</>
		);
		return <div className={classes.Container}>{mainWeather} </div>;
	}
}

export default MainWeatherInfo;
