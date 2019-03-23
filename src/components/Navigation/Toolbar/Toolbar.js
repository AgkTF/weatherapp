import React from 'react';
import classes from './Toolbar.module.css';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => {
	return (
		<header className={classes.Toolbar}>
			<DrawerToggle />
			<p>Wedensday, January 21st</p>
		</header>
	);
};

export default toolbar;
