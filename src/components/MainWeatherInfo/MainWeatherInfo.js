import React from 'react';
import '../../assets/weather-icons/css/weather-icons.min.css';
import classes from './MainWeatherInfo.module.css';

const mainWeatherInfo = () => (
	<div className={classes.Container}>
		<div className={classes.Header}>
			<i className="wi wi-night-sleet-storm" />
			33°<span>C</span>
		</div>
		<div className={classes.Subheader1}>Breezy starting this evening</div>
		<div className={classes.Subheader2}>Aug. 7th | 11:13PM</div>
	</div>
);

export default mainWeatherInfo;
