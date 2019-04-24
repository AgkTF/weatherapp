import React from 'react';
import NavItem from './NavItem/NavItem';
import Controls from '../../Controls/Controls';
import classes from './NavItems.module.css';

const navItems = (props) => {
	const units = [
		{ key: 'select', text: 'Select units', value: 'Select units' },
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
			<select value={props.value} onChange={props.changed}>
				{units.map((unit) => (
					<option key={unit.key} value={unit.value}>
						{unit.text}
					</option>
				))}
			</select>
		</div>
	);
};

export default navItems;
