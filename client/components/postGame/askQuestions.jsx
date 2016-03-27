AskQuestions = React.createClass({
	propTypes: {
		sets: React.PropTypes.array,
		buried: React.PropTypes.string,
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
	componentWillMount() {
		//calculate winners if there are no sets left
		if(this.state.sets.length < 1) {
			//go to next stage if there are no questions to ask;
			this.props.calculateWinnersByAnswers(this.state.winners, this.state.losers);
			return;
		}
		//otherwise check if the next card is buried and skip it
		var nextSet = this.state.sets[this.state.currentIndex];
		console.log("next set", nextSet);
		if(nextSet.name === this.props.buried) { //skip set if buried
			var nextIndex = this.state.currentIndex + 1; 
			if (nextIndex >= this.state.sets.length) {
				console.log("should calculate winners here");
				this.props.calculateWinnersByAnswers(this.state.winners, this.state.losers);
			}
			else {
				this.setState({ currentIndex: nextIndex }); 
			}
		}
	},
	componentWillUpdate(nextProps, nextState) {
		//calculate winners if we are at end of set
		if(nextState.currentIndex >= nextState.sets.length) { 
			this.props.calculateWinnersByAnswers(this.state.winners, this.state.losers);
			return;
		}
		//otherwise check if the next card is buried and skip it
		var nextSet = nextState.sets[nextState.currentIndex];
		console.log("next set", nextSet);
		console.log("buried", nextProps.buried);
		if(nextSet.name === this.props.buried) {
			var nextIndex = nextState.currentIndex + 1;
			if (nextIndex >= this.state.sets.length) {
				console.log("should calculate winners here");
				this.props.calculateWinnersByAnswers(nextState.winners, nextState.losers);
			}
			else {
				this.setState({ currentIndex: nextIndex }); 
			} 
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