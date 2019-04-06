import React from 'react';
import classes from './Spinner.module.css';

const spinner = () => {
	return (
		<div className={classes.fingerprintSpinner}>
			<div className={classes.spinnerRing} />
			<div className={classes.spinnerRing} />
			<div className={classes.spinnerRing} />
			<div className={classes.spinnerRing} />
			<div className={classes.spinnerRing} />
			<div className={classes.spinnerRing} />
			<div className={classes.spinnerRing} />
			<div className={classes.spinnerRing} />
			<div className={classes.spinnerRing} />
		</div>
	);
};

export default spinner;
