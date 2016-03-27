AskQuestions = React.createClass({
	propTypes: {
		sets: React.PropTypes.array,
		buried: React.PropTypes.oneOfType([ React.PropTypes.string, React.PropTypes.bool ]),
		calculateWinnersByAnswers: React.PropTypes.func
	},
	getInitialState() {
		var sets = [];
		var hasDr = false;
		var hasEngineer = false;
		for(var i=0; i<this.props.sets.length; i++) {
			var setName = this.props.sets[i];
			var set = CardSets.GetSetFromName(setName);
			var isBuried = (set.name === this.props.buried);
			var isNurseOrTinkerer = (set.name === "Nurse" || set.name === "Tinkerer");
			//exclude the buried. exclude nurse if doctor is present. exclude tinkerer if engineer is present.
			if (set.winCon === "passFail" && !isBuried) {
				if(!isNurseOrTinkerer) {
					if(set.name === "Doctor") { hasDr = true; }
					if(set.name === "Engineer") { hasEngineer = true; }
					sets.push(set);
				}
			}
		}
		if(!hasDr) { sets.push(CardSets.GetSetFromName("Nurse")); }
		if(!hasEngineer) { sets.push(CardSets.GetSetFromName("Tinkerer")); }
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
	},
	componentWillUpdate(nextProps, nextState) {
		//calculate winners if we are at end of set
		if(nextState.currentIndex >= nextState.sets.length) { 
			this.props.calculateWinnersByAnswers(this.state.winners, this.state.losers);
			return;
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