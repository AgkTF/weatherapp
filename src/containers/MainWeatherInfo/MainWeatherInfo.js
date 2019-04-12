import React, { Component } from 'react';
import '../../assets/weather-icons/css/weather-icons.min.css';
import DateTime from '../../components/DateTime/DateTime';
import axios from 'axios';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './MainWeatherInfo.module.css';

class MainWeatherInfo extends Component {
	state = {
		weatherIcon: null,
		weatherSummary: null,
		temp: null,
		loading: true
	};

	fetchWeatherData = () => {
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?lat=${
					this.props.where.lat
				}&lon=${this.props.where.lng}&units=${this.props.units}&appid=${
					process.env.REACT_APP_APPID
				}`
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
	};

	componentDidUpdate(prevProps) {
		console.log(this.props, 'from [componentDidUpdate]');

		if (
			prevProps.where.lat === this.props.where.lat &&
			prevProps.where.lng === this.props.where.lng &&
			prevProps.where.city === this.props.where.city
		) {
			console.log('WILL NOT UPDATE');
		} else {
			this.fetchWeatherData();
		}
	}

	componentDidMount() {
		console.log('from [componentDidMount]');
		this.fetchWeatherData();
	}

	render() {
		let mainWeather = this.state.loading ? (
			<Spinner />
		) : (
			<>
				<div className={classes.Header}>
					<i className={`${this.state.weatherIcon}`} />
					{'  '}
					{this.state.temp}°<span>C</span>
				</div>
				<div className={classes.LocationSubheader}>
					{this.props.where.city}
				</div>

				<div className={classes.Subheader1}>
					{this.state.weatherSummary}
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
