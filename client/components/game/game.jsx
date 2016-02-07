Game = React.createClass({
	propTypes() {
		players: React.PropTypes.number
	},

	getInitialState() {
		return {
			round: 1,
			roundOver: false,
			players: this.props.players
		}
	},

	onRoundOver() {
		console.log("called game round over");
		this.setState({ roundOver: true });
	},

	nextRound() {
		var nextRound = this.state.round + 1;
		this.setState({ round: nextRound, roundOver: false });
		console.log(this.state.roundOver);
	},

	renderNextRoundButton() {
		if(this.state.roundOver) {
			return(
				<button onClick={this.nextRound}>Next Round</button>
			)
		}
		else {
			return (
				<div></div>
			)
		}
	},

	render() {
		return(
			<div>
				<Round 
					round={this.state.round} 
					players={this.state.players} 
					onRoundOver={this.onRoundOver}/>
				{this.renderNextRoundButton()}
			</div>
		)
	}
});