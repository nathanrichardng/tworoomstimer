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
		this.setState({ round: nextRound, roundOver: false });
		console.log(this.state.roundOver);
	},

	render() {
		if(this.state.round > 3) {
			return (
				<PostGame />
			)
		}
		else {
			return(
				<Round 
					round={this.state.round} 
					players={this.state.players} 
					onRoundOver={this.onRoundOver}
					nextRound={this.nextRound} />
			)
		}
	}
});