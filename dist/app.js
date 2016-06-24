import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
	render() {
		return (
			<div>
				<h1>My Webpack App :)</h1>
				<p>An app build with React, Webpack and your mom.</p>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#react-container'));