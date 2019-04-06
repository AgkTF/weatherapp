import React, { Component } from 'react';
import DailyForecast from '../../components/DailyForecast/DailyForecast';
import Moment from 'react-moment';
import axios from 'axios';
import classes from './WeeklyForecast.module.css';

class WeeklyForecast extends Component {
	state = {
		weatherData: []
	};

	componentDidUpdate(prevProps, prevState) {
		if (
			prevState.weatherData.length === 0 ||
			(prevProps.location.lat !== this.props.location.lat &&
				prevProps.location.lng !== this.props.location.lng &&
				prevProps.location.city !== this.props.location.city)
		) {
			const url = `/${this.props.location.lat},${
				this.props.location.lng
			}?units=auto&exclude=minutely,alerts,flags`;

			axios
				.get(url)
				.then((response) => {
					console.log(response);
					const updatedWeatherData = response.data.daily.data;
					this.setState({ weatherData: updatedWeatherData });
				})
				.catch((error) => console.log(error));
		} else {
			console.log('STOP THERE');
		}
	}

	render() {
		let daySummary = null;
		if (this.state.weatherData.length === 0) {
			daySummary = <h3>Please enter a location</h3>;
		} else {
			daySummary = (
				<>
					{this.state.weatherData.map((daySummary) => (
						<DailyForecast
							weekday={
								<Moment unix format="dddd">
									{daySummary.time}
								</Moment>
							}
							weatherIcon={daySummary.icon}
							maxTemp={Math.floor(
								daySummary.apparentTemperatureMax
							)}
							minTemp={Math.floor(
								daySummary.apparentTemperatureMin
							)}
							precip={daySummary.precipProbability.toFixed(0)}
							key={daySummary.time}
						/>
					))}
				</>
			);
		}
		return <div className={classes.WeeklyForecast}>{daySummary} </div>;
	}
}

export default WeeklyForecast;
