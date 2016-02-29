SniperGuess = React.createClass({
	propTypes: {
		sets: React.PropTypes.array,
		enterGuess: React.PropTypes.func
	},
	componentWillMount() {
		var hasSniper = $.inArray("Sniper, Target, and Decoy", this.props.sets) >= 0;
		console.log("has sniper", hasSniper);
		if(!hasSniper) {
			this.props.enterGuess(false);
		}
	},
	render() {
		var sniper = CardSets.GetSetFromName("Sniper, Target, and Decoy");
		return(
			<Choice
				prompt={sniper.prompt}
				sets={this.props.sets}
				submitAnswer={this.props.enterGuess} />
		)
	}
});