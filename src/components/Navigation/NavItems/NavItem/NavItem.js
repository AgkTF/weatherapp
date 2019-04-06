import React from 'react';
import classes from './NavItem.module.css';

const navItem = (props) => {
	return (
		<div className={classes.NavItem}>
			<a href="/">{props.children}</a>
		</div>
	);
};

export default navItem;
