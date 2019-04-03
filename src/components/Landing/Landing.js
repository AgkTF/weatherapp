import React from 'react';
import Controls from '../../components/Controls/Controls';
import { Header } from 'semantic-ui-react';
import classes from './Landing.module.css';

const landing = (props) => {
	return (
		<div className={classes.Landing}>
			<h1>WeatherApp</h1>
			<Header.Subheader className={classes.Subheader}>
				Find accurate weather forecasts in your favorite places on earth
				🌍
			</Header.Subheader>
		</div>
	);
};

export default landing;
