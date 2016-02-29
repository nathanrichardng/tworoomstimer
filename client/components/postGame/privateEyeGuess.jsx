PrivateEyeGuess = React.createClass({
	propTypes: {
		sets: React.PropTypes.array,
		enterGuess: React.PropTypes.func
	},
	componentWillMount() {
		var hasPrivateEye = $.inArray("Private Eye", this.props.sets) >= 0;
		console.log("has private eye", hasPrivateEye);
		if(!hasPrivateEye) {
			this.props.enterGuess(false);
		}
	},
	render() {
		var privateEye = CardSets.GetSetFromName("Private Eye");
		return(
			<Choice
				prompt={privateEye.prompt}
				sets={this.props.sets}
				submitAnswer={this.props.enterGuess} />
		)
	}
});