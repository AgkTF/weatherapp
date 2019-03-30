import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import MapboxAutocomplete from 'react-mapbox-autocomplete';
import classes from './Controls.module.css';

const controls = (props) => {
	return (
		<div className={classes.Controls}>
			<div>
				<Button icon onClick={props.clicked} loading={props.locating}>
					<Icon name={props.btnIcon} />
				</Button>
			</div>
			<div style={{ width: '45%' }}>
				<MapboxAutocomplete
					publicKey={process.env.REACT_APP_MAPBOX_PUBLIC_KEY}
					onSuggestionSelect={props.selected}
					placeholder="Search Cities..."
				/>
			</div>
		</div>
	);
};

export default controls;

// This component is turned into a stateful component
// just to use componentdidupdate life cycle hook
// this make a perfect use case for react Hooks
// not now though.
