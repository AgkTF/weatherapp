import React from 'react';
import classes from './MainArea.module.css';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Location from '../Location/Location';
import TempToggle from '../UI/Buttons/TempToggle/TempToggle';

const mainArea = (props) => {
	return (
		<div className={classes.MainArea}>
			<WeatherSummary />
			<Location />
			{/* <TempToggle /> */}
		</div>
	);
};

export default mainArea;
