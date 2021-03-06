EnterLocations = React.createClass({
	propTypes: {
		sets: React.PropTypes.array,
		buried: React.PropTypes.oneOfType([ React.PropTypes.string, React.PropTypes.bool ]),
		calculateWinnersByLocation: React.PropTypes.func
	},
	getCards() {
		var sets = this.props.sets;
		console.log(sets);
		var cards = [];
		for(var i=0; i<sets.length; i++) {
			var set = CardSets.GetSetFromName(sets[i]);
			var buried = (set.name === this.props.buried);
			if(set.winCon === "location" && !buried) {
				for(var j=0; j<set.cards.length; j++) {
					var card = set.cards[j]
					var isCore = (card === "Blue Team" || card === "Red Team");
					if(!isCore) { cards.push(card); }	
				}
			}
		}
		return cards;
	},
	calculateWinners(e) {
		e.preventDefault;
		var roomArray = this.refs.locations.getSelected();
		this.props.calculateWinnersByLocation(roomArray);
	},
	render() {
		return(
			<div className="container">
				<div className="jumbotron">
					<h3>Pick a room, and tell me who's in it.</h3>
				</div>
				<SelectMultiple
					ref="locations"
					options={this.getCards().sort()}
					className="col-xs-12 set-select" />
				<button className="btn btn-info col-xs-12 start-button" onClick={this.calculateWinners}>Next</button>
			</div>
		)
	}
});