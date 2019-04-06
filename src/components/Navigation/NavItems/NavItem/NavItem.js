import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavItem.module.css';

const navItem = (props) => {
	return (
		<div className={classes.NavItem}>
			<NavLink to={props.link} activeClassName={classes.active} exact>
				{props.children}
			</NavLink>
		</div>
	);
};

export default navItem;
