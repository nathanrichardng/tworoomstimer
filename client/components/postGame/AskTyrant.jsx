AskTyrant = React.createClass({
	propTypes: {
		sets: React.PropTypes.array,
		submitAnswer: React.PropTypes.func,
		buried: React.PropTypes.oneOfType([ React.PropTypes.string, React.PropTypes.bool ])
	},
	componentWillMount() {
		var hasNuclearTyrant = $.inArray("Nuclear Tyrant", this.props.sets) >= 0;
		var nuclearTyrantBuried = (this.props.buried === "Nuclear Tyrant");
		console.log("buried", this.props.buried);
		console.log("has nuclear tyrant", hasNuclearTyrant);
		if(!hasNuclearTyrant || nuclearTyrantBuried) {
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