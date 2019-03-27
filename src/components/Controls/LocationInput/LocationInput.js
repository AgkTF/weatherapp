import React from 'react';
import { Input, Icon } from 'semantic-ui-react';
import classes from './LocationInput.module.css';

const locationInput = (props) => (
	<Input
		className={classes.LocationInput}
		icon={<Icon name="search" inverted circular link />}
		placeholder="Search Cities..."
		onChange={props.changed}
	/>
);

export default locationInput;
