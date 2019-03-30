import React, { Component } from 'react';
import NavMenu from '../../components/Navigation/NavMenu';
import Controls from '../../components/Controls/Controls';
import MainWeatherInfo from '../../components/MainWeatherInfo/MainWeatherInfo';
import WeeklyForecast from '../../components/WeeklyForecast/WeeklyForecast';

class Layout extends Component {
	state = {
		location: { city: 'Cairo', lat: 30.06263, lng: 31.24967 },
		units: 'metric'
	};

	_suggestionSelect = (result, lat, lng, text) => {
		console.log(result, lat, lng, text);
		this.setState({
			location: {
				city: result,
				lat: parseFloat(lat),
				lng: parseFloat(lng)
			}
		});
	};

	render() {
		console.log(this.state);

		return (
			<>
				<nav>
					<NavMenu />
				</nav>
				<header>
					<Controls
						location={this.state.location}
						selected={this._suggestionSelect}
					/>
				</header>
				<main>
					<MainWeatherInfo
						location={this.state.location}
						units={this.state.units}
					/>
					<WeeklyForecast />
				</main>
			</>
		);
	}
}

export default Layout;
