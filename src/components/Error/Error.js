import React from 'react';
import { ReactComponent as Sun } from '../../assets/svgs/day.svg';
import classes from './Error.module.css';

const error = (props) => {
	return (
		<div className={classes.Error}>
			<Sun className={classes.Sun} />
			<h3>It's still shining. Fret Not!</h3>
		</div>
	);
};

export default error;
