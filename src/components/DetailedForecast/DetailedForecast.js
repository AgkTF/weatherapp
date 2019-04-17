import React from 'react';
import SingleForecast from '../SingleForecast/SingleForecast';
import Moment from 'react-moment';
import Spinner from '../UI/Spinner/Spinner';
import ExtraDetail from '../ExtraDetail/ExtraDetail';
import classes from './DetailedForecast.module.css';

const detailedForecast = (props) => {
	let hourDetails = null;
	let dayDetails = null;
	let extraDetails = null;

	if (!props.weatherData) {
		hourDetails = <Spinner />;
		dayDetails = <Spinner />;
		extraDetails = <Spinner />;
	} else {
		const copiedWeatherDataProp = { ...props.weatherData };
		console.log(copiedWeatherDataProp);

		const hourlyWeatherData = copiedWeatherDataProp.hourly.data.filter(
			(hourlySummary, i) => i % 3 === 0 && i <= 24 && i > 0
		);
		hourDetails = (
			<>
				{hourlyWeatherData.map((hourDetails) => (
					<SingleForecast
						time={
							<Moment unix tz={props.timeZone} format="h a">
								{hourDetails.time}
							</Moment>
						}
						weatherIcon={hourDetails.icon}
						maxTemp={`${Math.floor(
							hourDetails.apparentTemperature
						)}°`}
						precip={hourDetails.precipProbability.toFixed(0)}
						key={hourDetails.time}
					/>
				))}
			</>
		);

		dayDetails = (
			<>
				{props.weatherData.daily.data.map((dayDetails) => (
					<SingleForecast
						time={
							<Moment unix tz={props.timeZone} format="dddd">
								{dayDetails.time}
							</Moment>
						}
						weatherIcon={dayDetails.icon}
						maxTemp={`${Math.floor(
							dayDetails.apparentTemperatureMax
						)}°`}
						minTemp={`${Math.floor(
							dayDetails.apparentTemperatureMin
						)}°`}
						precip={dayDetails.precipProbability.toFixed(0)}
						key={dayDetails.time}
					/>
				))}
			</>
		);

		const EXTRA_DETAILS = [
			{
				iconClass: 'wi wi-sunrise',
				item: 'Sunrise',
				value: props.weatherData.daily.data[0].sunriseTime
			},
			{
				iconClass: 'wi wi-sunset',
				item: 'Sunset',
				value: props.weatherData.daily.data[0].sunsetTime
			},
			{
				iconClass: 'wi wi-humidity',
				item: 'Humidity',
				value: props.weatherData.daily.data[0].humidity
			},
			{
				iconClass: 'wi wi-windy',
				item: 'Wind Speed',
				value: props.weatherData.daily.data[0].windSpeed
			}
		];

		extraDetails = (
			<>
				{EXTRA_DETAILS.map((singleDetail) => (
					<ExtraDetail
						iconClass={singleDetail.iconClass}
						item={singleDetail.item}
						value={singleDetail.value}
						key={singleDetail.item}
						timeZone={props.timeZone}
					/>
				))}
			</>
		);
	}

	return (
		<div className={classes.Container}>
			<div className={classes.Title}>
				Hourly Summary: {props.weatherData.hourly.summary}
			</div>
			<div className={classes.DetailedForecast}>{hourDetails}</div>

			<div className={classes.Title}>
				Daily Summary: {props.weatherData.daily.summary}
			</div>
			<div className={classes.DetailedForecast}>{dayDetails}</div>

			<div className={classes.Title}>Details</div>
			<div className={classes.ExtraDetails}>{extraDetails}</div>
		</div>
	);
};

export default detailedForecast;
