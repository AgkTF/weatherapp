import React, { Component } from 'react';
import SingleForecast from '../../components/SingleForecast/SingleForecast';
import Moment from 'react-moment';
import axios from 'axios';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './DetailedForecast.module.css';

class DetailedForecast extends Component {
	state = {
		dailyWeatherData: [],
		hourlyWeatherData: []
	};

	fetchWeatherData = (url) => {
		axios
			.get(url)
			.then((response) => {
				console.log(response);
				// const updatedWeatherData = response.data.daily.data;
				const dailyWeatherData = response.data.daily.data;

				const hourlyWeatherData = response.data.hourly.data.filter(
					(hourlySummary, i) => i % 3 === 0 && i <= 24 && i > 0
				);

				this.setState({
					dailyWeatherData: dailyWeatherData,
					hourlyWeatherData: hourlyWeatherData
				});
			})
			.catch((error) => console.log(error));
	};

	componentDidUpdate(prevProps, prevState) {
		if (
			prevState.dailyWeatherData.length === 0 ||
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
		let dayDetails = null;
		let hourDetails = null;
		if (this.state.dailyWeatherData.length === 0) {
			hourDetails = <Spinner />;
			dayDetails = <Spinner />;
		} else {
			hourDetails = (
				<>
					{this.state.hourlyWeatherData.map((hourDetails) => (
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
					{this.state.dailyWeatherData.map((dayDetails) => (
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
		}
		return (
			<div className={classes.Container}>
				<div className={classes.Title}>Hourly Summary:</div>
				<div className={classes.DetailedForecast}>{hourDetails}</div>

				<div className={classes.Title}>Daily Summary: </div>
				<div className={classes.DetailedForecast}>{dayDetails}</div>
			</div>
		);
	}
}

export default DetailedForecast;
