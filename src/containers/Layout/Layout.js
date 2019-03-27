import React, { Component } from 'react';
import NavMenu from '../../components/Navigation/NavMenu';
import Controls from '../../components/Controls/Controls';
import MainWeatherInfo from '../../components/MainWeatherInfo/MainWeatherInfo';
import WeeklyForecast from '../../components/WeeklyForecast/WeeklyForecast';

class Layout extends Component {
	state = { location: 'Cairo', units: 'metric' };

	onInputChangeHandler = (event) => {
		this.setState({ location: event.target.value });
	};

	render() {
		return (
			<>
				<nav>
					<NavMenu />
				</nav>
				<header>
					<Controls
						location={this.state.location}
						changed={this.onInputChangeHandler}
					/>
				</header>
				<main>
					<MainWeatherInfo
						location={this.state.location}
						unit={this.state.units}
					/>
					<WeeklyForecast />
				</main>
			</>
		);
	}
}

export default Layout;
