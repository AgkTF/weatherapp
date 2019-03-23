import React from 'react';
import classes from './WeekdayWeather.module.css';
// import sunny from '../../../assests/icons/sunny.png';
import partlyCloudy from '../../../assets/icons-2/partly_cloudy_day.png';

const weekdayWeather = (props) => {
	return (
		<div className={classes.WeekdayWeather}>
			<h3 style={{ marginBottom: 0 }}>Mon</h3>
			<div>
				<img
					className={classes.WeatherIcon}
					src={partlyCloudy}
					alt="partlyCloudy"
				/>
			</div>
			<p className={classes.Temp}>13°</p>
		</div>
	);
};

export default weekdayWeather;
