AskQuestions = React.createClass({
	propTypes: {
		sets: React.PropTypes.array,
		calculateWinnersByAnswers: React.PropTypes.func
	},
	getInitialState() {
		var sets = [];
		for(var i=0; i<this.props.sets.length; i++) {
			var setName = this.props.sets[i];
			var set = CardSets.GetSetFromName(setName);
			if (set.winCon === "passFail") {
				sets.push(set);
			}
		}
		return {
			currentIndex: 0,
			sets: sets,
			winners: [],
			losers: []
		}
	},
	componentWillUpdate(nextProps, nextState) {
		if(nextState.currentIndex >= nextState.sets.length) { 
			this.props.calculateWinnersByAnswers(this.state.winners, this.state.losers);
		}
	},
	getCurrentSet() {
		var set = this.state.sets[this.state.currentIndex];
		return set;
	},
	submitAnswer(answer) {
		var winners = this.state.winners;
		var losers = this.state.losers;
		var nextIndex = this.state.currentIndex + 1;
		var set = this.getCurrentSet();
			set.calculateWinners(answer, winners, losers);
			console.log("winners", winners);
			console.log("losers", losers);
		this.setState({ winners: winners, losers: losers, currentIndex: nextIndex });
	},
	render() {
		var currentSet = this.getCurrentSet();
		if (!currentSet) {
			return <div></div>
		}
		return(
			<Question
				prompt={currentSet.prompt}
				options={currentSet.options}
				submitAnswer={this.submitAnswer} />
		)
	}
});