Game = React.createClass({
	propTypes() {
		players: React.PropTypes.number
	},

	getInitialState() {
		return {
			round: 1,
			players: this.props.players
		}
	},

	nextRound() {
		var nextRound = this.state.round + 1;
		this.setState({ round: nextRound });
	},

	render() {
		return(
			<div>
				<Round 
					round={this.state.round} 
					players={this.state.players} />
				<button onClick={this.nextRound}>Next Round</button>
			</div>
		)
	}
});