import React from 'react';
import classes from './Location.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const location = (props) => {
	return (
		<div className={classes.Location}>
			<FontAwesomeIcon icon="map-marker-alt" /> <span>New York</span>
		</div>
	);
};

export default location;
