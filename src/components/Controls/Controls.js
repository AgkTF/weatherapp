import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import MapboxAutocomplete from 'react-mapbox-autocomplete';
import MainContext from '../../context/main-context';
import classes from './Controls.module.css';

class Controls extends Component {
	render() {
		return (
			<MainContext.Consumer>
				{(context) => (
					<div className={classes.Controls}>
						<div>
							<Button
								icon
								onClick={context.fetchCurrentLocationHandler}
							>
								<Icon name={context.btnIcon} />
							</Button>
						</div>
						<div style={{ width: '45%' }}>
							<MapboxAutocomplete
								publicKey={
									process.env.REACT_APP_MAPBOX_PUBLIC_KEY
								}
								onSuggestionSelect={context._suggestionSelect}
								placeholder="Search Cities..."
							/>
						</div>
					</div>
				)}
			</MainContext.Consumer>
		);
	}
}

export default Controls;

// This component is turned into a stateful component
// just to use componentdidupdate life cycle hook
// this make a perfect use case for react Hooks
// not now though.
