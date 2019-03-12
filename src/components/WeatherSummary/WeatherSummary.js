import React from 'react';
import classes from './WeatherSummary.module.css';
import sunny from '../../assests/icons/sunny.png';

const weatherSummary = (props) => {
	return (
		<div className={classes.WeatherSummary}>
			<div className={classes.FirstRow}>
				<p className={classes.Temp}>13°</p>
				<img className={classes.WeatherIcon} src={sunny} alt="sunny" />
			</div>
            <p className={classes.SecondRow}>Sunny / 15 mph</p>
		</div>
	);
};

export default weatherSummary;
