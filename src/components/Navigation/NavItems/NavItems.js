import React from 'react';
import NavItem from './NavItem/NavItem';
import Controls from '../../Controls/Controls';
import classes from './NavItems.module.css';

const navItems = (props) => {
	return (
		<div className={classes.NavItems}>
			<div className={classes.ContainerLeft}>
				<div className={classes.Title}>WeatherApp</div>
				<NavItem link="/">Home</NavItem>
			</div>
			<div className={classes.Controls}>
				<Controls
					clicked={props.clicked}
					selected={props.selected}
					btnIcon={props.btnIcon}
				/>
			</div>
			<div className={classes.ContainerRight}>
				<NavItem link="/forecast">Forecast</NavItem>
				<NavItem link="/signup">Signup</NavItem>
			</div>
		</div>
	);
};

export default navItems;
