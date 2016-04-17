CardViewer = React.createClass({
	getInitialState() {
		return {
			selectedCard: false
		}
	},
	handleSelection(selection) {
		var card = Cards.GetCardByName(selection);
		console.log("card", card);
		this.setState({ selectedCard: card });
		console.log("selected", selection);
	},
	clearSelected(e) {
		e.preventDefault();
		this.setState({ selectedCard: false });
	},
	cardHolderStyle() {
		//move this piece to CardViewer so we can put the card select component in it.
		var style = {
			width: "100vw",
			height: "100vh",
			backgroundColor: "#333",
			position: "relative"
		}
		return style;
	},
	render: function() {
		if (this.state.selectedCard) {
			var card = this.state.selectedCard;
			console.log("selected card", card);
			return (
				<div>
					<div className="card-holder" style={this.cardHolderStyle()}>
						<div className="pull-left glyphicon glyphicon-remove red" onClick={this.clearSelected}></div>
						<CardView name={card.name} description={card.description} color={card.color} />
					</div>
				</div>
			)
		}
		else {
			return (
				<div>
					<ListSelect options={Cards.GetCards()} onSelect={this.handleSelection}/>
				</div>

			)
		}
	}
});