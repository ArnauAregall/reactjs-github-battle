var React = require('react'),
	ReactDOM = require('react-dom'),
	md5 = require('md5');

var HelloWorld = React.createClass({
	render: () => {
		return (
			<div>
				<h1>Hello World ReactJS!</h1>
			</div>
		)
	}
});

// Pure functions example
var ProfilePic = (props) => {
	return <img className="thumbnail" src={'http://www.gravatar.com/avatar/' + md5(props.email)} />
}

var ProfileLink = (props) => {
	return (
		<a href={'http://www.gravatar.com/' + md5(props.email)}>
			{props.email}
		</a>
	)
}

var Avatar = (props) => {
	return (
		<div className="well">
			<HelloWorld />
			<ProfilePic email={props.email} />
			<ProfileLink email={props.email} />
		</div>
	)
}

ReactDOM.render(<Avatar email="arnau@ar3soft.com" />, document.getElementById('app'));
