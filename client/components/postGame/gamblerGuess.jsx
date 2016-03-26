GamblerGuess = React.createClass({
	propTypes: {
		sets: React.PropTypes.array,
		enterGuess: React.PropTypes.func
	},
	componentWillMount() {
		var hasGambler = $.inArray("Gambler", this.props.sets) >= 0;
		if(!hasGambler) {
			this.props.enterGuess(false);
		}
	},
	render() {
		var gambler = CardSets.GetSetFromName("Gambler");
		return(
			<Question
				prompt={gambler.prompt}
				options={gambler.options}
				submitAnswer={this.props.enterGuess} />
		)
	}
});