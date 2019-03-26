import React, { Component } from 'react';
import Moment from 'react-moment';

class DateTime extends Component {
	state = { date: new Date() };

	tick = () => {
		this.setState({ date: new Date() });
	};

	componentDidMount() {
		this.timerId = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	render() {
		const date = this.state.date;
		const hrs = date.getHours();
		const mins = date.getMinutes();
		const secs = date.getSeconds();

		return (
			<>
				<Moment format="dddd, MMMM Do">{date}</Moment> | {hrs}:{' '}
				{mins <= 9 ? `0${mins}` : mins}: {secs <= 9 ? `0${secs}` : secs}{' '}
			</>
		);
	}
}

export default DateTime;
