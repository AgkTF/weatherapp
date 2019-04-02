import React, { Component } from 'react';
import NavMenu from '../../components/Navigation/NavMenu';
import Controls from '../../components/Controls/Controls';
import MainWeatherInfo from '../../components/MainWeatherInfo/MainWeatherInfo';
import WeeklyForecast from '../../components/WeeklyForecast/WeeklyForecast';
import axios from 'axios';

class Layout extends Component {
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
		const reverseGeocoding = (lng, lat) => {
			const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${
				process.env.REACT_APP_MAPBOX_PUBLIC_KEY
			}`;
			const currentLocation = {};

			axios
				.get(url)
				.then((response) => {
					console.log(response.data.features[0].place_name);
					currentLocation.city = response.data.features[0].place_name;
					currentLocation.lat = lat;
					currentLocation.lng = lng;
					this.setState({
						location: currentLocation,
						btnIcon: 'check'
					});
				})
				.catch((error) => console.log(error));
		};

		const success = (position) => {
			const latitude = position.coords.latitude;
			const longitude = position.coords.longitude;
			console.log(`Latitude: ${latitude}\nLongitude: ${longitude}`);
			reverseGeocoding(longitude, latitude);
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

	state = {
		location: { city: 'Cairo, Egypt', lat: 30.06263, lng: 31.24967 },
		units: 'metric',
		btnIcon: 'location arrow',
		fetchCurrentLocationHandler: this.fetchCurrentLocationHandler,
		_suggestionSelect: this._suggestionSelect
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
						clicked={this.fetchCurrentLocationHandler}
						selected={this._suggestionSelect}
						btnIcon={this.state.btnIcon}
					/>
				</header>
				<main>
					<MainWeatherInfo
						location={this.state.location}
						units={this.state.units}
					/>
					<WeeklyForecast location={this.state.location} />
				</main>
			</>
		);
	}
}

export default Layout;
