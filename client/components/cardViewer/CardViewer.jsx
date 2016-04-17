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
	render: function() {
		if (this.state.selectedCard) {
			var card = this.state.selectedCard;
			console.log("selected card", card);
			return (
				<div>
					<Select options={Cards.GetCards()} onChange={this.handleSelection} />
					<CardView name={card.name} description={card.description} color={card.color} />
				</div>
			)
		}
		else {
			return (
				<div>
					Please select a card
					<Select options={Cards.GetCards()} onChange={this.handleSelection} />
				</div>

			)
		}
	}
});