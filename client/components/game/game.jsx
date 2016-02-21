Game = React.createClass({

	getInitialState() {
		return {
			round: -1,
			players: 6,
			setOptions: CardSets.GetSets(),
			selected: []
		}
	},

	updatePlayers(players) {
		var that = this;
		that.setState({ players: players });
	},

	selectSets(selected) {
		this.setState({ selected: selected, round: 0 });
	},

	startGame() {
		this.setState({ round: 1 });
	},

	nextRound() {
		var nextRound = this.state.round + 1;
		this.setState({ round: nextRound });
		console.log(this.state);
	},

	render() {
		if(this.state.round < 0) {
			return (
				<SelectSets
					setOptions={this.state.setOptions}
					selectSets={this.selectSets} />
			)
		}
		else if(this.state.round === 0) {
			return (
				<SelectPlayers
					players={this.state.players}
					updatePlayers={this.updatePlayers}
					startGame={this.startGame} />
			)
		}
		else if(this.state.round > 3) {
			return (
				<PostGame
					selected={this.state.selected} />
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