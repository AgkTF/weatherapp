import React from 'react';
import moment from 'moment-timezone';
import Moment from 'react-moment';
import Spinner from '../UI/Spinner/Spinner';
import classes from './MainWeatherInfo.module.css';

const mainWeatherInfo = (props) => {
	let mainWeather = props.loading ? (
		<Spinner />
	) : (
		<>
			<div className={classes.Header}>
				<i className={`wi wi-forecast-io-${props.weatherIcon}`} />
				{'  '}
				{`${Math.floor(props.temp)}`}°
				<span>{props.selectedUnit === 'si' ? 'C' : 'F'}</span>
			</div>
			<div className={classes.LocationSubheader}>{props.where.city}</div>

			<div className={classes.Subheader1}>{props.weatherSummary}</div>
			<div className={classes.Subheader2}>
				<Moment unix tz={props.timeZone} format="LLLL">
					{props.time}
				</Moment>
			</div>
		</>
	);
	return <div className={classes.Container}>{mainWeather} </div>;
};

export default mainWeatherInfo;
