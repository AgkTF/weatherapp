import React, { Component } from 'react';
import './App.css';

import Toggle from './components/UI/Buttons/Toggle/Toggle';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faMapMarkerAlt);

class App extends Component {
	render() {
		return (
			<div className="App">
				<Toggle />
			</div>
		);
	}
}

export default App;
