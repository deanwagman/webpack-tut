import React, { Component } from 'react';
import ReactDom from 'react-dom';

class About extends Component {
	render() {
		return <div> About Us </div>
	}
}

ReactDom.render(<About />, document.querySelector('#react-container'));