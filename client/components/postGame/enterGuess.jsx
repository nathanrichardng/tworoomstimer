EnterGuess = React.createClass({
	propTypes: {
		sets: React.PropTypes.array,
		enterGuess: React.PropTypes.func
	},
	componentWillMount() {
		var hasBomber = $.inArray("The Gambler", this.props.sets) >= 0;
		if(!hasBomber) {
			this.props.enterGuess(false);
		}
	},
	render() {
		var gambler = CardSets.GetSetFromName("The Gambler");
		return(
			<Question
				prompt={gambler.prompt}
				options={gambler.options}
				submitAnswer={this.props.enterGuess} />
		)
	}
});