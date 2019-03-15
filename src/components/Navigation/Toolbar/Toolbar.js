import React from 'react';
import classes from './Toolbar.module.css';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => {
	return (
		<header className={classes.Toolbar}>
			<DrawerToggle />
			<h4>Wedensday, January 21st</h4>
		</header>
	);
};

export default toolbar;
