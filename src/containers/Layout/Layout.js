import React, { Component } from 'react';
import MainWeatherInfo from '../../components/MainWeatherInfo/MainWeatherInfo';
import DetailedForecast from '../../components/DetailedForecast/DetailedForecast';
import Landing from '../../components/Landing/Landing';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/UI/Footer/Footer';
import axios from 'axios';
import { Route, Switch, withRouter } from 'react-router-dom';
import ErrorBoundary from '../../HOC/ErrorBoundary/ErrorBoundary';
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler';
import classes from './Layout.module.css';

class Layout extends Component {
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
						btnIcon: 'check',
						selectedUnit: 'si'
					});

					const url = `/${this.state.location.lat},${
						this.state.location.lng
					}?units=${
						this.state.selectedUnit
					}&exclude=minutely,alerts,flags`;

					this.fetchWeatherData(url);
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

	_suggestionSelect = (result, lat, lng, text) => {
		// console.log(result, lat, lng, text);

		// update the location object immutably
		const updatedLocation = { ...this.state.location };
		updatedLocation.city = result;
		updatedLocation.lat = lat;
		updatedLocation.lng = lng;

		this.setState({ location: updatedLocation });
	};

	fetchWeatherData = (url) => {
		axios
			.get(url)
			.then((response) => {
				console.log('[from fetchWeatherData]', response);
				const updatedWeatherData = response.data;

				this.setState({
					weatherData: updatedWeatherData
				});
				this.props.history.push(
					`/forecast/${this.state.location.city}`
				);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	onOptionChangeHandler = (event, data) => {
		this.setState({ selectedUnit: data.value });
		console.log(data.value);
	};

	componentDidMount() {
		console.log('FROM componentDidMount');
	}

	componentDidUpdate(prevProps, prevState) {
		if (
			(prevState.location.lat !== this.state.location.lat &&
				prevState.location.lng !== this.state.location.lng &&
				prevState.location.city !== this.state.location.city) ||
			prevState.selectedUnit !== this.state.selectedUnit
		) {
			const url = `/${this.state.location.lat},${
				this.state.location.lng
			}?units=${this.state.selectedUnit}&exclude=minutely,alerts,flags`;

			this.fetchWeatherData(url);
		} else {
			console.log('STOP THERE');
		}
	}

	state = {
		location: {},
		weatherData: {},
		selectedUnit: 'si',
		btnIcon: 'location arrow'
	};

	render() {
		console.log('[this.state]', this.state);

		return (
			<>
				<Toolbar
					clicked={this.fetchCurrentLocationHandler}
					selected={this._suggestionSelect}
					btnIcon={this.state.btnIcon}
					changed={this.onOptionChangeHandler}
					value={this.state.selectedUnit}
				/>
				<ErrorBoundary {...this.props}>
					<main className={classes.MainArea}>
						<Switch>
							<Route
								path="/forecast/:city"
								render={(props) => (
									<>
										<MainWeatherInfo
											where={this.state.location}
											weatherIcon={
												this.state.weatherData.currently
													.icon
											}
											weatherSummary={
												this.state.weatherData.currently
													.summary
											}
											temp={
												this.state.weatherData.currently
													.temperature
											}
											time={
												this.state.weatherData.currently
													.time
											}
											timeZone={
												this.state.weatherData.timezone
											}
											selectedUnit={
												this.state.selectedUnit
											}
										/>
										<DetailedForecast
											location={this.state.location}
											weatherData={this.state.weatherData}
											timeZone={
												this.state.weatherData.timezone
											}
											selectedUnit={
												this.state.selectedUnit
											}
										/>
									</>
								)}
							/>
							<Route path="/" component={Landing} />
						</Switch>
					</main>
				</ErrorBoundary>
				<footer>
					<Footer />
				</footer>
			</>
		);
	}
}

export default withErrorHandler(withRouter(Layout), axios);
