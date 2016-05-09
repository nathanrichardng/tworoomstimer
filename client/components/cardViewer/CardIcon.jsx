//refactor so this displays the cardViewer component instead of redirecting.
//that way it can be used in game.
CardIcon = React.createClass({
	propTypes: {
		style: React.PropTypes.object,
		hide: React.PropTypes.bool
	},
	bookStyle: {
		position: "absolute",
		left: "75px",
		bottom: "20px",
		fontSize: "34px",
		color: "#fff"
	},
	render() {
		if(this.props.hide) { return false; }
		return(
			<a href="/cards" style={this.props.style || this.bookStyle}><i className="fa fa-book"></i></a>
		)
	}
});