import React, { Component } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import MainArea from '../../components/MainArea/MainArea';
import FullWeekWeather from '../../components/FullWeekWeather/FullWeekWeather';

class Layout extends Component {
	render() {
		return (
			<div>
				<Toolbar />
				<MainArea />
				<FullWeekWeather />
				{/* SideDrawer */}
			</div>
		);
	}
}

export default Layout;
