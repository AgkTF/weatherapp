import React from 'react';
import Controls from '../../components/Controls/Controls';
import { Header } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import classes from './Landing.module.css';

const landing = (props) => {
	// console.log(props);

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

export default withRouter(landing);
