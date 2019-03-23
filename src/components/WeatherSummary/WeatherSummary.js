import React from 'react';
import classes from './WeatherSummary.module.css';
// import sunny from '../../assests/icons/sunny.png';
import partlyCloudy from '../../assets/icons-2/partly_cloudy_day.png';

const weatherSummary = (props) => {
	return (
		<div className={classes.WeatherSummary}>
			<div className={classes.FirstRow}>
				<p className={classes.Temp}>13°</p>
				<div className={classes.WeatherIcon}>
					<img src={partlyCloudy} alt="partlyCloudy" />
				</div>
			</div>
			<p className={classes.SecondRow}>Sunny / 15 mph</p>
		</div>
	);
};

export default weatherSummary;
