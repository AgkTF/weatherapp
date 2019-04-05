import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import Logo from '../UI/Logo/Logo';
import classes from './NavMenu.module.css';

export default class NavMenu extends Component {
	state = { activeItem: 'home' };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;

		return (
			<Menu borderless size={this.props.size} className={classes.NavMenu}>
				<Menu.Item>
					<Logo />
				</Menu.Item>
				<Menu.Item className={classes.Logo}>WeatherApp</Menu.Item>
				<Menu.Item
					name="home"
					active={activeItem === 'home'}
					onClick={this.handleItemClick}
				/>
				<Menu.Menu position="right">
					<Menu.Item
						name="Signin"
						active={activeItem === 'logout'}
						onClick={this.handleItemClick}
					/>
					<Menu.Item
						name="Signup"
						active={activeItem === 'logout'}
						onClick={this.handleItemClick}
					/>
				</Menu.Menu>
			</Menu>
		);
	}
}
