import React from 'react';
import '../../assets/weather-icons/css/weather-icons.min.css';
import classes from './MainWeatherInfo.module.css';

const mainWeatherInfo = () => (
	<div className={classes.Container}>
		<div className={classes.Header}>
			<i className="wi wi-night-sleet-storm" />
			{'     '}33° C
		</div>
		<div className={classes.Subheader}>Breezy starting this evening</div>
		<div className={classes.Subheader}>Aug. 7th | 11:13PM</div>
	</div>
);

export default mainWeatherInfo;
