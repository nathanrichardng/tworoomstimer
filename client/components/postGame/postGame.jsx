PostGame = React.createClass({
	propTypes: {
		selected: React.PropTypes.array
	},
	getInitialState(){
		var selectedWithCore = this.props.selected;
			selectedWithCore.push("Core Set");
		return {
			winners:[],
			losers: [],
			selected: selectedWithCore,
			stage: "SniperGuesses",
			sniperChose: false,
			gamblerChose: false,
			privateEyeChose: false
		}
	},
	sniperGuesses(guess) {
		this.setState({ sniperChose: guess, stage: "GamblerGuesses" });
	},
	gamblerGuesses(guess) {
		this.setState({ gamblerChose: guess, stage: "EnterLocations" });
	},
	calculateWinnersByLocation(roomArray) {
		var winners = this.state.winners;
		var losers = this.state.losers;
		var sets = this.props.selected;
		//Calculate winners in each set
		for(var i=0; i<sets.length; i++) {
			var set = CardSets.GetSetFromName(sets[i]);
			if(set.winCon === "location") {
				set.calculateWinners(roomArray, winners, losers);
			}
		}
		//caclulate if sniper won
		if(this.state.sniperChose) {
			var sniper = CardSets.GetSetFromName("Sniper, Target, and Decoy");
				sniper.calculateWinners(this.state.sniperChose, winners, losers);
		}
		//calculate if gambler won
		if(this.state.gamblerChose) {
			var gambler = CardSets.GetSetFromName("The Gambler");
				gambler.calculateWinners(this.state.gamblerChose, winners, losers);
		}
		//Update state
		this.setState({ winners: winners, losers:losers, stage: "DisplayWinners" });
		console.log("winners", winners);
		console.log("losers", losers);
	},
	renderStage() {
		if(this.state.stage === "SniperGuesses") {
			return (
				<SniperGuess
					sets={this.state.selected}
					enterGuess={this.sniperGuesses} />

			)
		}
		else if(this.state.stage === "GamblerGuesses") {
			return (
				<GamblerGuess
					sets={this.state.selected}
					enterGuess={this.gamblerGuesses} />

			)
		}
		else if(this.state.stage === "EnterLocations") {
			return (
				<EnterLocations
					sets={this.state.selected}
					calculateWinnersByLocation={this.calculateWinnersByLocation} />
			)
		}
		else if(this.state.stage === "DisplayWinners") {
			return(
				//refactor this to be its own component that displays winner and loser array
				<div>
					<WinnersList winners={this.state.winners} />
					<LosersList losers={this.state.losers} />
				</div>
			)
		}
	},
	render() {
		console.log(this.state.selected);
		return(
			<div className="container">
				<div className="row">
			      <nav className='navbar navbar-default'>
			        <div className='container-fluid'>
			          <div className='navbar-header'>
			            <a className="navbar-brand" href="/"><i className="fa fa-bomb"></i> 2R1B</a>
			          </div>
			        </div>
			      </nav>
			    </div>
				{this.renderStage()}
			</div>
		)
	}
});