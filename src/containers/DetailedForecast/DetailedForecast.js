import React, { Component } from 'react';
import SingleForecast from '../../components/SingleForecast/SingleForecast';
import Moment from 'react-moment';
import axios from 'axios';
import Spinner from '../../components/UI/Spinner/Spinner';
import ExtraDetail from '../../components/ExtraDetail/ExtraDetail';
import classes from './DetailedForecast.module.css';

class DetailedForecast extends Component {
	state = {
		weatherData: null
	};

	fetchWeatherData = (url) => {
		axios
			.get(url)
			.then((response) => {
				console.log(response);
				const updatedWeatherData = response.data;

				this.setState({
					weatherData: updatedWeatherData
				});
			})
			.catch((error) => console.log(error));
	};

	componentDidUpdate(prevProps, prevState) {
		if (
			!prevState.weatherData ||
			(prevProps.location.lat !== this.props.location.lat &&
				prevProps.location.lng !== this.props.location.lng &&
				prevProps.location.city !== this.props.location.city)
		) {
			const url = `/${this.props.location.lat},${
				this.props.location.lng
			}?units=auto&exclude=minutely,alerts,flags`;

			this.fetchWeatherData(url);
		} else {
			console.log('STOP THERE');
		}
	}

	componentDidMount() {
		console.log('from [COMPONENTDIDMOUNT]');
		const url = `/${this.props.location.lat},${
			this.props.location.lng
		}?units=auto&exclude=minutely,alerts,flags`;

		this.fetchWeatherData(url);
	}

	render() {
		let hourDetails = null;
		let dayDetails = null;
		let extraDetails = null;

		if (!this.state.weatherData) {
			hourDetails = <Spinner />;
			dayDetails = <Spinner />;
			extraDetails = <Spinner />;
		} else {
			const copiedState = { ...this.state.weatherData };
			console.log(copiedState);

			const hourlyWeatherData = copiedState.hourly.data.filter(
				(hourlySummary, i) => i % 3 === 0 && i <= 24 && i > 0
			);
			hourDetails = (
				<>
					{hourlyWeatherData.map((hourDetails) => (
						<SingleForecast
							time={
								<Moment unix format="h a">
									{hourDetails.time}
								</Moment>
							}
							weatherIcon={hourDetails.icon}
							maxTemp={`${Math.floor(
								hourDetails.apparentTemperature
							)}°`}
							precip={hourDetails.precipProbability.toFixed(0)}
							key={hourDetails.time}
						/>
					))}
				</>
			);

			dayDetails = (
				<>
					{this.state.weatherData.daily.data.map((dayDetails) => (
						<SingleForecast
							time={
								<Moment unix format="dddd">
									{dayDetails.time}
								</Moment>
							}
							weatherIcon={dayDetails.icon}
							maxTemp={`${Math.floor(
								dayDetails.apparentTemperatureMax
							)}°`}
							minTemp={`${Math.floor(
								dayDetails.apparentTemperatureMin
							)}°`}
							precip={dayDetails.precipProbability.toFixed(0)}
							key={dayDetails.time}
						/>
					))}
				</>
			);

			const EXTRA_DETAILS = [
				{
					iconClass: 'wi wi-sunrise',
					item: 'Sunrise',
					value: this.state.weatherData.daily.data[0].sunriseTime
				},
				{
					iconClass: 'wi wi-sunset',
					item: 'Sunset',
					value: this.state.weatherData.daily.data[0].sunsetTime
				},
				{
					iconClass: 'wi wi-humidity',
					item: 'Humidity',
					value: this.state.weatherData.daily.data[0].humidity	
				},
				{
					iconClass: 'wi wi-windy',
					item: 'Wind Speed',
					value: this.state.weatherData.daily.data[0].windSpeed
				}
			];

			extraDetails = (
				<>
					{EXTRA_DETAILS.map((singleDetail) => (
						<ExtraDetail
							iconClass={singleDetail.iconClass}
							item={singleDetail.item}
							value={singleDetail.value}
							key={singleDetail.item}
						/>
					))}
				</>
			);
		}

		return (
			<div className={classes.Container}>
				<div className={classes.Title}>Hourly</div>
				<div className={classes.DetailedForecast}>{hourDetails}</div>

				<div className={classes.Title}>Daily</div>
				<div className={classes.DetailedForecast}>{dayDetails}</div>

				<div className={classes.Title}>Details</div>
				<div className={classes.ExtraDetails}>{extraDetails}</div>
			</div>
		);
	}
}

export default DetailedForecast;
