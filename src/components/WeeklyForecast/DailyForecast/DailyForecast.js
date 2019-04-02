import React from 'react';
import '../../../assets/weather-icons/css/weather-icons.min.css';
import classes from './DailyForecast.module.css';

const dailyForecast = (props) => {
	return (
		<div className={classes.DailyForecast}>
			<h2>{props.weekday}</h2>
			<div className={classes.WeatherIcon}>
				<i className={`wi wi-forecast-io-${props.weatherIcon}`} />
			</div>
			<div className={classes.Temps}>
				{props.maxTemp}°{'    '}
				{props.minTemp}°
			</div>
			<div className={classes.Raindrop}>
				<i className="wi wi-raindrop" />
				{`    ${props.precip * 100}%`}
			</div>
		</div>
	);
};

export default dailyForecast;
