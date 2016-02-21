PostGame = React.createClass({
	propTypes: {
		selected: React.PropTypes.array
	},
	getInitialState(){
		return {
			winners:[],
			losers: [],
			stage: "EnterLocations"
		}
	},
	selectedWithCore() {
		var selectedWithCore = this.props.selected;
			selectedWithCore.push("Core Set");
		return selectedWithCore;
	},
	calculateWinnersByLocation(roomArray) {
		var winners = this.state.winners;
		var losers = this.state.losers;
		var sets = this.props.selected;
		//Calculate winners in each set
		for(var i=0; i<sets.length; i++) {
			var set = CardSets.GetSetFromName(sets[i]);
				set.calculateWinners(roomArray, winners, losers);
		}
		//Update state
		this.setState({ winners: winners, losers:losers, stage: "DisplayWinners" });
		console.log("winners", winners);
		console.log("losers", losers);
	},
	renderStage() {
		if(this.state.stage === "EnterLocations") {
			return (
				<EnterLocations
					sets={this.selectedWithCore()}
					calculateWinnersByLocation={this.calculateWinnersByLocation} />
			)
		}
		else if(this.state.stage === "DisplayWinners") {
			return(
				<div>Winners to be displayed here</div>
			)
		}
	},
	render() {
		console.log(this.props.selected);
		return(
			<div className="row">
				{this.renderStage()}
			</div>
		)
	}
});