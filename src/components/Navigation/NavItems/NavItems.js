import React from 'react';
import NavItem from './NavItem/NavItem';
import Controls from '../../Controls/Controls';
import classes from './NavItems.module.css';

const navItems = (props) => {
	return (
		<div className={classes.NavItems}>
			<div className={classes.Title}>
				<NavItem link="/">WeatherApp</NavItem>
			</div>
			<Controls
				clicked={props.clicked}
				selected={props.selected}
				btnIcon={props.btnIcon}
				className={classes.Controls}
			/>
		</div>
	);
};

export default navItems;
