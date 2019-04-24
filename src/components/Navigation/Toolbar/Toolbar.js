import React from 'react';
import NavItems from '../NavItems/NavItems';
import classes from './Toolbar.module.css';

const toolbar = (props) => {
	return (
		<header className={classes.Toolbar}>
			<nav>
				<NavItems
					className={classes.NavItems}
					clicked={props.clicked}
					selected={props.selected}
					btnIcon={props.btnIcon}
					value={props.value}
					changed={props.changed}
				/>
			</nav>
		</header>
	);
};

export default toolbar;
