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
		Feedback.profiles = {
		  "somethingHappened": {
		    sound: "/sounds/truck.ogg",
		    vibrate: [500,50,500,50,100] 
		  }
		}
		Feedback.provide("somethingHappened");
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
		var style = {
			color: "#fff",
			cursor: "pointer",
			padding: "10px",
		}
		return style;
	},
	headerStyle(){
		var style = {
			color: "#fff"
		}
		return style;
	},
	render: function() {
		//change this to always just be a list with links to the individual cards.
		//that way the back button works between the cards and the list.
		if (this.state.showSelect || !this.state.selectedCard) {
			if(this.state.selectedCard) {
				return (
					<div>
						<h3 style={this.headerStyle()}>Card Details</h3>
						<ListSelect options={Cards.GetCards()} onSelect={this.handleSelection} selected={this.state.selectedCard.name}/>
					</div>
				)
			}
			else {
				return (
					<div>
						<h3 style={this.headerStyle()}>Card Details</h3>
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