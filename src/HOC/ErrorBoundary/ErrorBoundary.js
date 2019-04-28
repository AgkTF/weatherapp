import React, { Component } from 'react';
import Error from '../../components/Error/Error';

class ErrorBoundary extends Component {
	state = { hasError: false };

	componentDidCatch(error, info) {
		this.setState({ hasError: true });
	}

	resetErrorHandler = () => {
		this.setState({ hasError: false });
	};

	render() {
		if (this.state.hasError) {
			return (
				<Error
					hasError={this.state.hasError}
					resetError={this.resetErrorHandler}
				/>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
