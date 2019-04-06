import React from 'react';
import NavItem from './NavItem/NavItem';
import Controls from '../../Controls/Controls';
import classes from './NavItems.module.css';

const navItems = (props) => {
	return (
		<div className={classes.NavItems}>
			<div className={classes.Title}>WeatherApp</div>
			<div className={classes.Controls}>
				<Controls
					clicked={props.clicked}
					selected={props.selected}
					btnIcon={props.btnIcon}
				/>
			</div>
			<NavItem>Signin</NavItem>
			<NavItem>Signup</NavItem>
		</div>
	);
};

export default navItems;
