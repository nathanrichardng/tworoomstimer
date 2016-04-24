Cards = {
	GetCards: getCards,
	GetCardByName: getCardByName
}

var blue = "#6DA9E8";
var red = "#BA3D3D";
var gray = "#e1e1e1";

var cards = {
	"President": {
		name: "President",
		description: "I'm the President brah.",
		color: blue
	},
	"Bomber": {
		name: "Bomber",
		description: "I'm the Bomber brah.",
		color: red
	},
	"Private Eye": {
		name: "Private Eye",
		description: "I'm the private eye.",
		color: gray
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