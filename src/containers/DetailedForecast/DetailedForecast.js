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
		let daySummary = null;
		let hourSummary = null;
		if (this.state.dailyWeatherData.length === 0) {
			hourSummary = <Spinner />;
			daySummary = <Spinner />;
		} else {
			hourSummary = (
				<>
					{this.state.hourlyWeatherData.map((hourSummary) => (
						<SingleForecast
							time={
								<Moment unix format="h a">
									{hourSummary.time}
								</Moment>
							}
							weatherIcon={hourSummary.icon}
							maxTemp={`${Math.floor(
								hourSummary.apparentTemperature
							)}°`}
							precip={hourSummary.precipProbability.toFixed(0)}
							key={hourSummary.time}
						/>
					))}
				</>
			);

			daySummary = (
				<>
					{this.state.dailyWeatherData.map((daySummary) => (
						<SingleForecast
							time={
								<Moment unix format="dddd">
									{daySummary.time}
								</Moment>
							}
							weatherIcon={daySummary.icon}
							maxTemp={`${Math.floor(
								daySummary.apparentTemperatureMax
							)}°`}
							minTemp={`${Math.floor(
								daySummary.apparentTemperatureMin
							)}°`}
							precip={daySummary.precipProbability.toFixed(0)}
							key={daySummary.time}
						/>
					))}
				</>
			);
		}
		return (
			<div className={classes.Container}>
				<div className={classes.Title}>Hourly</div>
				<div className={classes.DetailedForecast}>{hourSummary}</div>

				<div className={classes.Title}>Daily</div>
				<div className={classes.DetailedForecast}>{daySummary}</div>
			</div>
		);
	}
}

export default DetailedForecast;
