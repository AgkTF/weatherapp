import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import MapboxAutocomplete from 'react-mapbox-autocomplete';
import classes from './Controls.module.css';

class Controls extends Component {
	// componentDidUpdate(prevProps) {
	// 	if(prevProps.loading === this.props.loading) {
	// 		console.log('will not update');
	// 	} else {

	// 	}
	// }

	render() {
		return (
			<div className={classes.Controls}>
				<div>
					<Button
						icon
						onClick={this.props.clicked}
						loading={this.props.locating}
					>
						<Icon name={this.props.btnIcon} />
					</Button>
				</div>
				<div style={{ width: '45%' }}>
					<MapboxAutocomplete
						publicKey={process.env.REACT_APP_MAPBOX_PUBLIC_KEY}
						onSuggestionSelect={this.props.selected}
						placeholder="Search Cities..."
					/>
				</div>
			</div>
		);
	}
}

export default Controls;

// This component is turned into a stateful component
// just to use componentdidupdate life cycle hook
// this make a perfect use case for react Hooks
// not now though.
