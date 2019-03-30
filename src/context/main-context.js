import React from 'react';

const mainContext = React.createContext({
	location: { city: 'Cairo, Egypt', lat: 30.06263, lng: 31.24967 },
	units: 'metric',
	btnIcon: 'location arrow',
	fetchCurrentLocationHandler: () => {},
	_suggestionSelect: () => {}
});

export default mainContext;
