import React from 'react';
import classes from './SingleForecast.module.css';

const singleForecast = (props) => {
	return (
		<div className={classes.SingleForecast}>
			<h3>{props.time}</h3>
			<div className={classes.WeatherIcon}>
				<i className={`wi wi-forecast-io-${props.weatherIcon}`} />
			</div>
			<div className={classes.Temps}>
				{props.maxTemp}
				{'    '}
				{props.minTemp}
			</div>
			<div className={classes.Raindrop}>
				<i className="wi wi-raindrop" />
				{`    ${props.precip * 100}%`}
			</div>
		</div>
	);
};

export default singleForecast;
