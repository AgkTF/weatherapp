import React, { Component } from 'react';
import './App.css';

import Layout from './containers/Layout/Layout';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faMapMarkerAlt);

class App extends Component {
	render() {
		return (
			<div className="App">
				<Layout />
			</div>
		);
	}
}

export default App;
