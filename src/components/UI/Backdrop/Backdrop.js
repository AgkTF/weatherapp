import React from 'react';
import classes from './Backdrop.module.css';

const backdrop = (props) => {
	return (
		<div>
			{props.visible ? (
				<div className={classes.Backdrop} onClick={props.clicked} />
			) : null}
		</div>
	);
};

export default backdrop;
