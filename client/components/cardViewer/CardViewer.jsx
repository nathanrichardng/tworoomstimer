CardViewer = React.createClass({
	getInitialState() {
		return {
			selectedCard: false,
			showSelect: true
		}
	},
	handleSelection(selection) {
		var card = Cards.GetCardByName(selection);
		console.log("card", card);
		this.setState({ selectedCard: card, showSelect: false });
		console.log("selected", selection);
	},
	showSelect(e) {
		e.preventDefault();
		this.setState({ showSelect: true });
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
	backStyle() {
		var style ={
			color: "#fff",
			cursor: "pointer",
			padding: "10px",
		}
		return style;
	},
	render: function() {
		if (this.state.showSelect || !this.state.selectedCard) {
			if(this.state.selectedCard) {
				return (
					<div>
						<ListSelect options={Cards.GetCards()} onSelect={this.handleSelection} selected={this.state.selectedCard.name}/>
					</div>
				)
			}
			else {
				return (
					<div>
						<ListSelect options={Cards.GetCards()} onSelect={this.handleSelection} />
					</div>
				)
			}
		}
		else if(this.state.selectedCard) {
			var card = this.state.selectedCard;
			console.log("selected card", card);
			return (
				<div>
					<div className="card-holder" style={this.cardHolderStyle()}>
						<div style={this.backStyle()} onClick={this.showSelect}>
							<div className="glyphicon glyphicon-chevron-left"></div>
							 Back
						</div>
						<CardView name={card.name} description={card.description} color={card.color} />
					</div>
				</div>
			)
		}
	}
});