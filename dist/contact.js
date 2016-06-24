import React, { Component } from 'react';
import ReactDom from 'react-dom';

class Contact extends Component {
	render() {
		return <div> Contact Us </div>
	}
}

ReactDom.render(<Contact />, document.querySelector('#react-container'));