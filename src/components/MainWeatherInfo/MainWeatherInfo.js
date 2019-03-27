import React, { Component } from 'react';
import '../../assets/weather-icons/css/weather-icons.min.css';
import DateTime from '../DateTime/DateTime';
import axios from '../../axios-weather';
import classes from './MainWeatherInfo.module.css';

class MainWeatherInfo extends Component {
	state = {
		weatherIcon: 'wi wi-owm-night-321',
		weatherSummary: 'Breezy starting this evening',
		temp: 33
	};

	createClass = (code) => {};

	// componentDidMount() {
	// 	axios
	// 		.get(
	// 			`?q=${this.props.location}&units=${this.props.units}&appid=${
	// 				process.env.REACT_APP_APPID
	// 			}`
	// 		)
	// 		.then((response) => {
	// 			const date = new Date();
	// 			const sunrise = new Date(response.data.sys.sunrise * 1000); //Convert a Unix timestamp to time
	// 			const sunset = new Date(response.data.sys.sunset * 1000);
	// 			let weatherIconId = '';

	// 			if (
	// 				date.getHours() >= sunrise.getHours() &&
	// 				date.getHours() < sunset.getHours()
	// 			) {
	// 				weatherIconId = `wi wi-owm-day-${
	// 					response.data.weather[0].id
	// 				}`;
	// 			} else if (date.getHours() >= sunset.getHours()) {
	// 				weatherIconId = `wi wi-owm-night-${
	// 					response.data.weather[0].id
	// 				}`;
	// 			}

	// 			this.setState({
	// 				weatherIcon: weatherIconId,
	// 				weatherSummary: response.data.weather[0].description,
	// 				temp: Math.floor(response.data.main.temp)
	// 			});
	// 		})

	// 		.catch((error) => console.log(error));
	// }

	render() {
		// console.log(this.state);

		return (
			<div className={classes.Container}>
				<div className={classes.Header}>
					<i className={`${this.state.weatherIcon}`} />
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
