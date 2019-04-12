import React from 'react';
import { Icon } from 'semantic-ui-react';
import classes from './Footer.module.css';

const footer = () => {
	return (
		<div className={classes.Footer}>
			<p>
				Created with{' '}
				<span role="img" aria-label="heart">
					❤️
				</span>{' '}
				by <span className={classes.Name}>AgkTF</span>
			</p>
			<span>
				<a href="https://github.com/AgkTF">
					<Icon name="github square" size="big" />
				</a>
			</span>
			<span>
				<a href="https://twitter.com/agkTF">
					<Icon name="twitter square" size="big" />
				</a>
			</span>
		</div>
	);
};

export default footer;
