import React from 'react';
import classes from './WeekdayWeather.module.css';
import sunny from '../../../assests/icons/sunny.png';
import rainyThunders from '../../../assests/icons/rainyThunders.png';

const weekdayWeather = (props) => {
	return (
		<div className={classes.WeekdayWeather}>
			<h3 style={{ marginBottom: 0 }}>Mon</h3>
			<div>
				<img
					className={classes.WeatherIcon}
					src={rainyThunders}
					alt="sunny"
				/>
			</div>
			<p className={classes.Temp}>13°</p>
		</div>
	);
};

export default weekdayWeather;
