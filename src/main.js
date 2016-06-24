import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

class Message extends Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<p>{this.props.message}</p>
			</div>		
		);
	}
}

ReactDOM.render(<Message title="Your mom" message="Can you email her?" />, document.querySelector('#react-container'));
