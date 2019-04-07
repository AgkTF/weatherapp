import React from 'react';
import classes from './LocationCard.module.css';

const locationCard = () => {
	return (
		<>
			<div className={classes.LocationCard1}>
				<p>Cairo, Egypt</p>
			</div>
			<div className={classes.LocationCard2}>
				<p>Jerusalem, Palastine</p>
			</div>
			<div className={classes.LocationCard3}>
				<p>Washington, DC, USA</p>
			</div>
		</>
	);
};

export default locationCard;
