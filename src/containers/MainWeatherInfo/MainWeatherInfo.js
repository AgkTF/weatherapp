import React, { Component } from 'react';
import '../../assets/weather-icons/css/weather-icons.min.css';
import DateTime from '../../components/DateTime/DateTime';
import axios from 'axios';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './MainWeatherInfo.module.css';

class MainWeatherInfo extends Component {
	state = {
		weatherIcon: 'wi wi-owm-night-321',
		weatherSummary: 'Breezy starting this evening',
		temp: 33,
		loading: true
	};

	componentDidUpdate(prevProps) {
		console.log(this.props, 'from [componentDidUpdate]');

		if (
			prevProps.location.lat === this.props.location.lat &&
			prevProps.location.lng === this.props.location.lng &&
			prevProps.location.city === this.props.location.city
		) {
			console.log('WILL NOT UPDATE');
		} else {
			axios
				.get(
					`https://api.openweathermap.org/data/2.5/weather?lat=${
						this.props.location.lat
					}&lon=${this.props.location.lng}&units=${
						this.props.units
					}&appid=${process.env.REACT_APP_APPID}`
				)
				.then((response) => {
					console.log(response);

					const date = new Date();
					const sunrise = new Date(response.data.sys.sunrise * 1000); //Convert a Unix timestamp to time
					const sunset = new Date(response.data.sys.sunset * 1000);
					let weatherIconId = '';

					if (
						date.getHours() >= sunrise.getHours() &&
						date.getHours() < sunset.getHours()
					) {
						weatherIconId = `wi wi-owm-day-${
							response.data.weather[0].id
						}`;
					} else if (
						date.getHours() >= sunset.getHours() ||
						(date.getHours() >= 0 &&
							date.getHours() < sunrise.getHours())
					) {
						weatherIconId = `wi wi-owm-night-${
							response.data.weather[0].id
						}`;
					}

					this.setState({
						weatherIcon: weatherIconId,
						weatherSummary: response.data.weather[0].description,
						temp: Math.floor(response.data.main.temp),
						loading: false
					});
				})

				.catch((error) => console.log(error));
		}
	}

	componentDidMount() {
		console.log('from [componentDidMount]');
	}

	render() {
		let mainWeather = this.state.loading ? (
			<Spinner />
		) : (
			<div className={classes.Container}>
				<div className={classes.Header}>
					<i className={`${this.state.weatherIcon}`} />
					{'  '}
					{this.state.temp}°<span>C</span>
				</div>
				<div className={classes.LocationSubheader}>
					{this.props.location.city}
				</div>

				<div className={classes.Subheader1}>
					{this.state.weatherSummary}
				</div>
				<div className={classes.Subheader2}>
					<DateTime />
				</div>
			</div>
		);
		return mainWeather;
	}
}

export default MainWeatherInfo;
