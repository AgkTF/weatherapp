import React, { Component } from 'react';
import moment from 'moment-timezone';
import Moment from 'react-moment';
import '../../assets/weather-icons/css/weather-icons.min.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './MainWeatherInfo.module.css';

class MainWeatherInfo extends Component {
	render() {
		const timeToFormat = moment
			.tz(this.props.time * 1000, this.props.timeZone)
			.format();

		console.log(this.props.time, this.props.timeZone, timeToFormat);

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
					{`${Math.floor(this.props.temp)}`}°<span>C</span>
				</div>
				<div className={classes.LocationSubheader}>
					{this.props.where.city}
				</div>

				<div className={classes.Subheader1}>
					{this.props.weatherSummary}
				</div>
				<div className={classes.Subheader2}>
					<Moment unix tz={this.props.timeZone} format="LLLL">
						{this.props.time}
					</Moment>
				</div>
			</>
		);
		return <div className={classes.Container}>{mainWeather} </div>;
	}
}

export default MainWeatherInfo;
