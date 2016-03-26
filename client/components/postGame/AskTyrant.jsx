AskTyrant = React.createClass({
	propTypes: {
		sets: React.PropTypes.array,
		submitAnswer: React.PropTypes.func
	},
	componentWillMount() {
		var hasNuclearTyrant = $.inArray("Nuclear Tyrant", this.props.sets) >= 0;
		console.log("has nuclear tyrant", hasNuclearTyrant);
		if(!hasNuclearTyrant) {
			this.props.submitAnswer(false);
		}
	},
	render() {
		var nuclearTyrant = CardSets.GetSetFromName("Nuclear Tyrant");
		return(
			<Question
				prompt={nuclearTyrant.prompt}
				options={nuclearTyrant.options}
				submitAnswer={this.props.submitAnswer} />
		)
	}
});