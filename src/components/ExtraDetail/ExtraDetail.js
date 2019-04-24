import React from 'react';
import Moment from 'react-moment';
import classes from './ExtraDetail.module.css';

const extraDetails = (props) => {
	let valueProp = null;
	let item = props.item;
	switch (item) {
		case 'Humidity':
			valueProp = `${(props.value * 100).toFixed(0)}%`;
			break;
		case 'Wind Speed':
			valueProp = `${props.value} ${
				props.selectedUnit === 'si' ? 'm/s' : 'mph'
			}`;
			break;
		default:
			valueProp = (
				<Moment unix tz={props.timeZone} format="HH:mm">
					{props.value}
				</Moment>
			);
	}
	return (
		<div className={classes.ExtraDetails}>
			<div>
				<i className={`${props.iconClass} ${classes.Icon}`} />
				<span className={classes.Item}> {props.item}</span>
			</div>
			<span style={{ fontSize: '1.2rem' }}>{valueProp}</span>
		</div>
	);
};

export default extraDetails;
