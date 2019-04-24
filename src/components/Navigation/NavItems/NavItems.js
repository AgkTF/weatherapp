import React from 'react';
import NavItem from './NavItem/NavItem';
import Controls from '../../Controls/Controls';
import { Dropdown, Menu } from 'semantic-ui-react';
import classes from './NavItems.module.css';

const navItems = (props) => {
	const units = [
		{ key: 'C', text: 'C, m/s', value: 'si' },
		{ key: 'F', text: 'F, mph', value: 'us' }
	];

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
			<Menu compact>
				<Dropdown
					placeholder="Select units"
					selection
					compact
					options={units}
					onChange={props.changed}
				/>
			</Menu>
		</div>
	);
};

export default navItems;
