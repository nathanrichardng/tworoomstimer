NextRoundButton = React.createClass({
	propTypes: {
		roundOver: React.PropTypes.bool,
		nextRound: React.PropTypes.func
	},
	render() {
		if(this.props.roundOver) {
			return(
				<button className="next-round-button btn" onClick={this.props.nextRound}>
					Next Round <span className="glyphicon glyphicon-menu-right"></span>
				</button>
			)
		}
		else {
			return(
				<div></div>
			)
		}
	}
});