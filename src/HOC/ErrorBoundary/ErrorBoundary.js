import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Error from '../../components/Error/Error';

class ErrorBoundary extends Component {
	state = { hasError: false };

	componentDidCatch(error, info) {
		this.setState({ hasError: true });
	}

	componentDidMount() {
		console.log(this.props);
	}

	resetErrorHandler = () => {
		this.setState({ hasError: false });
	};

	render() {
		if (this.state.hasError) {
			return (
				<>
					<Error />
					<h3 style={{ textAlign: 'center' }}>
						Just click
						<button onClick={this.resetErrorHandler}>
							<Link to={this.props.match.path}> here</Link>
						</button>
					</h3>
				</>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
