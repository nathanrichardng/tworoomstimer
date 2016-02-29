EnterBuried = React.createClass({
	propTypes: {
		sets: React.PropTypes.array,
		enterBuried: React.PropTypes.func
	},
	componentWillMount() {
		var hasPrivateEye = $.inArray("Private Eye", this.props.sets) >= 0;
		console.log("has private eye", hasPrivateEye);
		if(!hasPrivateEye) {
			this.props.enterBuried(false);
		}
	},
	render() {
		var privateEye = CardSets.GetSetFromName("Private Eye");
		return(
			<Choice
				prompt="Who's actually buried?"
				sets={this.props.sets}
				submitAnswer={this.props.enterBuried} />
		)
	}
});