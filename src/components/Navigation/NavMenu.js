import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

export default class NavMenu extends Component {
	state = { activeItem: 'home' };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;

		return (
			<Menu inverted>
				<Menu.Item header>WeatherApp</Menu.Item>
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
