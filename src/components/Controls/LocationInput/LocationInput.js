import React from 'react';
import { Input } from 'semantic-ui-react';
import classes from './LocationInput.module.css';

const locationInput = () => (
	<Input
		className={classes.LocationInput}
		icon={{ name: 'search', circular: true, link: true }}
		placeholder="Search Cities..."
	/>
);

export default locationInput;
