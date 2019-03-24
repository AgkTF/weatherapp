import React from 'react';
import classes from './Controls.module.css';
import LocationBtn from './LocationBtn/LocationBtn';
import LocationInput from './LocationInput/LocationInput';

const controls = (props) => {
	return (
		<div className={classes.Controls}>
			<LocationBtn />
			<LocationInput />
		</div>
	);
};

export default controls;
