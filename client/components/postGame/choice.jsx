Choice = React.createClass({
	propTypes: {
		prompt: React.PropTypes.string,
		sets: React.PropTypes.array,
		submitAnswer: React.PropTypes.func
	},
	submitAnswer() {
		var choice = this.refs.choice.getSelected();
		if(!choice) { return false; }
		console.log("choice picked", choice);
		this.props.submitAnswer(choice);
	},
	getCards() {
		var sets = this.props.sets;
		console.log(sets);
		var cards = [];
		for(var i=0; i<sets.length; i++) {
			var set = CardSets.GetSetFromName(sets[i]);
			for(var j=0; j<set.cards.length; j++) {
				var card = set.cards[j]
				cards.push(card);
			}
		}
		return cards;
	},
	render() {
		return(
			<div className="container">
				<div className="jumbotron">
					<h3>{this.props.prompt}</h3>
				</div>
				<Select
					ref="choice"
					options={this.getCards()}
					className="col-xs-12 set-select" />
				<button className="btn btn-info col-xs-12 start-button" onClick={this.submitAnswer}>Next</button>
			</div>
		)
	}
});