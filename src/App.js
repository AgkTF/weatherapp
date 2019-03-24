import React, { Component } from 'react';
import classes from './App.module.css';
import NavMenu from './components/Navigation/NavMenu';
import Controls from './components/Controls/Controls';
import MainWeatherInfo from './components/MainWeatherInfo/MainWeatherInfo';
import DailyForecast from './components/DailyForecast/DailyForecast';

class App extends Component {
	render() {
		return (
			<>
				<nav>
					<NavMenu />
				</nav>
				<header>
					<Controls />
				</header>
				<main className={classes.MainContent}>
					<MainWeatherInfo />
					<DailyForecast />
				</main>
			</>
		);
	}
}

export default App;
