import React, { Component } from 'react';
import { Modal, Header, Icon, Button } from 'semantic-ui-react';

const withErrorHandler = (WrappedComponent, axios) => {
	return class extends Component {
		state = { error: null };

		componentWillMount() {
			this.reqInterceptor = axios.interceptors.request.use((req) => {
				this.setState({ error: null });
				return req;
			});
			this.resInterceptor = axios.interceptors.response.use(
				(res) => res,
				(error) => this.setState({ error: error })
			);
		}

		errorConfirmHandler = () => {
			this.setState({ error: null });
		};

		componentWillUnmount() {
			axios.interceptors.request.eject(this.reqInterceptor);
			axios.interceptors.response.eject(this.resInterceptor);
		}

		render() {
			return (
				<>
					<Modal
						basic
						size="small"
						open={Boolean(this.state.error)}
						onClose={this.errorConfirmHandler}
					>
						<Header
							icon="warning sign"
							content="Something wrong happened"
						/>
						<Modal.Content>
							<h4>
								{this.state.error
									? this.state.error.message ===
									  'Request failed with status code 400'
										? 'Please make sure to select a location first'
										: 'Please check your internet connection and reload the page.'
									: null}
							</h4>
						</Modal.Content>
						<Modal.Actions>
							<Button
								color="green"
								onClick={this.errorConfirmHandler}
								inverted
							>
								<Icon name="checkmark" /> Got it
							</Button>
						</Modal.Actions>
					</Modal>
					<WrappedComponent {...this.props} />
				</>
			);
		}
	};
};

export default withErrorHandler;
