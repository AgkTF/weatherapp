import React from 'react';
import { Icon } from 'semantic-ui-react';
import classes from './Footer.module.css';

const footer = () => {
	return (
		<div className={classes.Footer}>
			<div className={classes.Item}>
				<p>WeatherApp &copy; 2019</p>
			</div>
			<div className={classes.Item}>
				<p>
					Created with{' '}
					<span role="img" aria-label="heart">
						❤️
					</span>{' '}
					by <span className={classes.Name}>AgkTF</span>
				</p>

				<span>
					<a href="https://github.com/AgkTF">
						<Icon
							name="github square"
							size="big"
							className={classes.Icon}
						/>
					</a>
				</span>
				<span>
					<a href="https://twitter.com/agkTF">
						<Icon
							name="twitter square"
							size="big"
							className={classes.Icon}
						/>
					</a>
				</span>
			</div>
			<div className={classes.Item}>
				<p>
					Powered by{' '}
					<a href="https://darksky.net/dev">Dark Sky API</a>
				</p>
			</div>
		</div>
	);
};

export default footer;
