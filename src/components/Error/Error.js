import React from 'react';
import { ReactComponent as Sun } from '../../assets/svgs/day.svg';
import { Modal, Header, Button } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import classes from './Error.module.css';

const error = (props) => {
	return (
		<Modal
			basic
			size="small"
			open={props.hasError}
			onClose={props.resetError}
			closeOnDimmerClick={false}
			dimmer="blurring"
		>
			<Header icon="warning sign" content="Something went wrong" />
			<Modal.Content className={classes.Error}>
				<Sun className={classes.Sun} />
				<h2>It's still shining. Fret Not!</h2>
			</Modal.Content>
			<Modal.Actions>
				<Button
					inverted
					color="green"
					size="large"
					onClick={props.resetError}
				>
					<Link to={props.match.path}>Just click here</Link>
				</Button>
			</Modal.Actions>
		</Modal>
	);
};

export default withRouter(error);
