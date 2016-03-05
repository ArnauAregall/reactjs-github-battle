var React = require('react'),
	ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
	render: () => {
		return (
			<div>
				<h1>Hello World ReactJS!</h1>
			</div>
		)
	}
});

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
