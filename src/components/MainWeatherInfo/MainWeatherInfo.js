import React, { Component } from 'react';
import '../../assets/weather-icons/css/weather-icons.min.css';
import Moment from 'react-moment';
import classes from './MainWeatherInfo.module.css';

class MainWeatherInfo extends Component {
	state = {
		date: new Date(),
		weatherIcon: 'night-sleet-storm',
		weatherSummary: 'Breezy starting this evening',
		temp: 33
	};

	tick = () => {
		this.setState({ date: new Date() });
	};

	componentDidMount() {
		this.timerId = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	render() {
		const date = this.state.date;
		const hrs = date.getHours();
		const mins = date.getMinutes();
		const secs = date.getSeconds();

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
					<Moment format="dddd, MMMM Do">{this.state.date}</Moment> |{' '}
					{hrs}:{mins}:{secs <= 9 ? `0${secs}` : secs}
				</div>
			</div>
		);
	}
}

export default MainWeatherInfo;
