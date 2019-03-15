import React, { Component } from 'react';
import classes from './TempToggle.module.css';

class TempToggle extends Component {
	state = {
		btnSwitched: false
	};

	switchBtnHandler = () => {
		this.setState((prevState) => {
			return { btnSwitched: !prevState.btnSwitched };
		});
	};

	render() {
		let toggleBtnClasses = [classes.Toggle, classes.Switch];
		if (this.state.btnSwitched) {
			toggleBtnClasses = [
				classes.Toggle,
				classes.Switch,
				classes.ToggleOn
			];
		}
		return (
			<div
				className={toggleBtnClasses.join(' ')}
				onClick={this.switchBtnHandler}
			>
				<div className={classes.ToggleTextOff}>OFF</div>
				<div className={classes.GlowComp} />
				<div className={classes.ToggleButton} />
				<div className={classes.ToggleTextOn}>ON</div>
			</div>
		);
	}
}

export default TempToggle;
