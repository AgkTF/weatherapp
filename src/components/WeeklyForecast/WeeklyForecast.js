import React from 'react';
import DailyForecast from './DailyForecast/DailyForecast';
import classes from './WeeklyForecast.module.css';

const weeklyForecast = (props) => {
	return (
		<div className={classes.WeeklyForecast}>
			<DailyForecast weekday="Today" weatherIcon="day-thunderstorm" />
			<DailyForecast weekday="Sunday" weatherIcon="day-fog" />
			<DailyForecast weekday="Monday" weatherIcon="day-haze" />
		</div>
	);
};

export default weeklyForecast;
