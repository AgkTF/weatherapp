import React from 'react';
import LocationCard from '../../components/Landing/LocationCard/LocationCard';
import Footer from '../Landing/Footer/Footer';
import { Header } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import classes from './Landing.module.css';

const landing = (props) => {
	return (
		<div className={classes.Landing}>
			<h1>WeatherApp</h1>
			<Header.Subheader className={classes.Subheader}>
				Find accurate weather forecasts in your favorite places on earth
				🌍
			</Header.Subheader>
			<div className={classes.LocationCards}>
				<LocationCard />
			</div>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default withRouter(landing);
