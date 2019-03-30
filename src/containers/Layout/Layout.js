import React, { Component } from 'react';
import NavMenu from '../../components/Navigation/NavMenu';
import Controls from '../../components/Controls/Controls';
import MainWeatherInfo from '../../components/MainWeatherInfo/MainWeatherInfo';
import WeeklyForecast from '../../components/WeeklyForecast/WeeklyForecast';

class Layout extends Component {
	state = {
		location: { city: 'Cairo, Egypt', lat: 30.06263, lng: 31.24967 },
		units: 'metric'
	};

	_suggestionSelect = (result, lat, lng, text) => {
		console.log(result, lat, lng, text);

		// update the location object immutably
		const updatedLocation = { ...this.state.location };
		updatedLocation.city = result;
		updatedLocation.lat = lat;
		updatedLocation.lng = lng;

		this.setState({
			location: updatedLocation
		});
	};

	fetchCurrentLocationHandler = () => {
		const success = (position) => {
			const latitude = position.coords.latitude;
			const longitude = position.coords.longitude;
			console.log(`Latitude: ${latitude}\nLongitude: ${longitude}`);
		};

		const error = () => {
			console.log('Unable to retrieve your location');
			this.setState({ btnIcon: 'exclamation' });
		};

		if (!navigator.geolocation) {
			console.log('Geolocation is not supported by your browser');
			this.setState({ btnIcon: 'exclamation triangle' });
		} else {
			console.log('locating...');
			navigator.geolocation.getCurrentPosition(success, error);
		}
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
						clicked={this.fetchCurrentLocationHandler}
						locating={this.state.locating}
						btnIcon={this.state.btnIcon}
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
