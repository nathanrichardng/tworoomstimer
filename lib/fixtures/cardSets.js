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
		calculateWinners: function(roomArray, winnersArray, losersArray) {
			var hasBomber = $.inArray("Bomber", roomArray);
			var hasPresident = $.inArray("President", roomArray);
			if( (hasBomber && hasPresident) || (!hasBomber && !hasPresident) ) {
				winnersArray.push("The Red Team");
				losersArray.push("The Blue Team");
				return "The Red Team Wins!"
			}
			else {
				winnersArray.push("The Blue Team");
				losersArray.push("The Red Team");
				return "The Blue Team Wins!"
			}
		}
	}
	return set;
}

function mobyAndAhab() {
	var set = {
		name: "Moby and Ahab",
		calculateWinners: function(roomArray, winnersArray, losersArray) {
			var hasMoby = $.inArray("Moby", roomArray);
			var hasAhab = $.inArray("Ahab", roomArray);
			var hasBomber = $.inArray("Bomber", roomArray);
			if( (hasBomber && hasAhab) && !hasMoby ) {
				winnersArray.push("Moby");
				losersArray.push("Ahab");
				return "Moby Wins!";
			}
			else if( (hasBomber && hasMoby) && !hasAhab ) {
				winnersArray.push("Ahab");
				losersArray.push("Moby");
				return "Ahab Wins!";
			}
			else {
				losersArray.push("Moby");
				losersArray.push("Ahab");
				return "Moby and Ahab both lose.";
			}
		}
	}
	return set;
}

function wifeAndMistress() {
	var set ={
		name: "Wife and Mistress",
		calculateWinners: function(roomArray, winnersArray, losersArray) {
			var hasWife = $.inArray("Wife", roomArray);
			var hasMistress = $.inArray("Mistress", roomArray);
			var hasPresident = $.inArray("President", roomArray);
			if( (hasWife && hasPresident) && !hasMistress ) {
				winnersArray.push("The Wife");
				losersArray.push("The Mistress");
				return "The Wife Wins!";
			}
			else if( (hasMistress && hasPresident) && !hasWife ) {
				winnersArray.push("The Mistress");
				losersArray.push("The Wife");
				return "The Mistress Wins!";
			}
			else {
				losersArray.push("The Wife");
				losersArray.push("The Mistress");
				return "The Wife and Mistress both lose.";
			}
		}
	}
	return set;
}

