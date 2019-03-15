import React from 'react';
import WeekdayWeather from './WeekdayWeather/WeekdayWeather';
import classes from './FullWeekWeather.module.css';

const fullWeekWeather = (props) => {
	return (
		<div className={classes.FullWeekWeather}>
			<WeekdayWeather />
			<WeekdayWeather />
			<WeekdayWeather />
			<WeekdayWeather />
			<WeekdayWeather />
			<WeekdayWeather />
			<WeekdayWeather />
		</div>
	);
};

export default fullWeekWeather;
