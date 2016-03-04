var React = require('react'),
	ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
	render: () => {
		return (
			<div>Hello World ReactJS!</div>
		)
	}
});

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
