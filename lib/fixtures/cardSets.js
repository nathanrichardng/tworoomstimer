CardSets = {
	GetSets: getSets,
	GetSetFromName: getSetFromName
}

function getSets() {
	sets = [
		"Moby and Ahab",
		"Wife and Mistress"
	]
	return sets;
}

function getSetFromName(name) {
	switch(name){
		case "Core Set":
			return new core();
		case "Moby and Ahab":
			return new mobyAndAhab();
		case "Wife and Mistress":
			return new wifeAndMistress();
	}
}

function core() {
	var set = {
		name: "Core Set",
		calculateWinners: function(roomArray) {
			var hasBomber = $.inArray("Bomber", roomArray);
			var hasPresident = $.inArray("President", roomArray);
			if( (hasBomber && hasPresident) || (!hasBomber && !hasPresident) ) {
				return "The Red Team Wins!"
			}
			else {
				return "The Blue Team Wins!"
			}
		}
	}
	return set;
}

function mobyAndAhab() {
	var set = {
		name: "Moby and Ahab",
		calculateWinners: function(roomArray) {
			var hasMoby = $.inArray("Moby", roomArray);
			var hasAhab = $.inArray("Ahab", roomArray);
			var hasBomber = $.inArray("Bomber", roomArray);
			if( (hasBomber && hasAhab) && !hasMoby ) {
				return "Moby Wins!";
			}
			else if( (hasBomber && hasMoby) && !hasAhab ) {
				return "Ahab Wins!";
			}
			else {
				return "Moby and Ahab both lose.";
			}
		}
	}
	return set;
}

function wifeAndMistress() {
	var set ={
		name: "Wife and Mistress",
		calculateWinners: function(roomArray) {
			var hasWife = $.inArray("Wife", roomArray);
			var hasMistress = $.inArray("Mistress", roomArray);
			var hasPresident = $.inArray("President", roomArray);
			if( (hasWife && hasPresident) && !hasMistress ) {
				return "The Wife Wins!";
			}
			else if( (hasMistress && hasPresident) && !hasWife ) {
				return "The Mistress Wins!";
			}
			else {
				return "The Wife and Mistress both lose.";
			}
		}
	}
	return set;
}

