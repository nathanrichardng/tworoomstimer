Cards = {
	GetCards: getCards,
	GetCardByName: getCardByName
}

var cards = {
	President: {
		name: "President",
		description: "I'm the President brah.",
		color: "steelblue"
	},
	Bomber: {
		name: "Bomber",
		description: "I'm the Bomber brah.",
		color: "red"
	}
};

function getCards() {
	var cardList = [];
	for(var key in cards) {
	    if(cards.hasOwnProperty(key)) {
	        cardList.push(key);
	    }
	}
	return cardList;
}

function getCardByName(name) {
	var card = cards[name];
	return card;
}