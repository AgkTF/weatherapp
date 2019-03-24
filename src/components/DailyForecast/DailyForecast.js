import React from 'react';
import '../../assets/weather-icons/css/weather-icons.min.css';
import classes from './DailyForecast.module.css';

const dailyForecast = () => {
	return (
		<div className={classes.DailyForecast}>
			<h2>Today</h2>
			<div className={classes.WeatherIcon}>
				<i class="wi wi-night-sleet" />
			</div>
			<div className={classes.Temps}>45° 38°</div>
			<div className={classes.Raindrop}>
				<i class="wi wi-raindrop" />
				{'  '}10%
			</div>
		</div>
	);
};

export default dailyForecast;
