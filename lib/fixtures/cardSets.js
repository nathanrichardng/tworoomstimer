CardSets = {
	GetSets: getSets,
	GetSetFromName: getSetFromName
}

function getSets() {
	sets = [
		"Sniper, Target, and Decoy",
		"Gambler",
		"Private Eye",
		"Moby and Ahab",
		"Wife and Mistress",
		"Bomb-Bot",
		"Queen",
		"Butler and Maid"
	]
	return sets;
}

function getSetFromName(name) {
	switch(name){
		case "Core Set":
			return new core();
		case "Sniper, Target, and Decoy":
			return new sniperTargetAndDecoy();
		case "Gambler":
			return new gambler();
		case "Private Eye":
			return new privateEye();
		case "Moby and Ahab":
			return new mobyAndAhab();
		case "Wife and Mistress":
			return new wifeAndMistress();
		case "Bomb-Bot":
			return new bombBot();
		case "Queen":
			return new queen();
		case "Butler and Maid":
			return new butlerAndMaid();
	}
}

function core() {
	var set = {
		name: "Core Set",
		cards: ["President", "Bomber"],
		winCon: "location",
		calculateWinners: function(roomArray, winnersArray, losersArray) {
			var hasBomber = $.inArray("Bomber", roomArray) >= 0;
			var hasPresident = $.inArray("President", roomArray) >= 0;
			var redTeamWins = (hasBomber && hasPresident) || (!hasBomber && !hasPresident);
			if(redTeamWins) {
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

function sniperTargetAndDecoy() {
	var set = {
		name: "Sniper, Target, and Decoy",
		cards: ["Sniper", "Target", "Decoy"],
		winCon: "guess",
		prompt: "Hey Sniper, who did you shoot?",
		calculateWinners: function(guess, winnersArray, losersArray) {
			var guessedCorrectly = (guess === "Target");
			var shotDecoy = (guess === "Decoy");
			if(guessedCorrectly) {
				winnersArray.push("Sniper");
				winnersArray.push("Target");
				losersArray.push("Decoy");
			}
			else if(shotDecoy) {
				losersArray.push("Sniper");
				losersArray.push("Target");
				winnersArray.push("Decoy");
			}
			else {
				losersArray.push("Sniper");
				losersArray.push("Target");
				losersArray.push("Decoy");
			}
		}
	}
	return set;
}

function gambler() {
	var set = {
		name: "Gambler",
		cards: ["Gambler"],
		winCon: "guess",
		prompt: "Hey Gambler, which team won?",
		options: ["The Red Team", "The Blue Team"],
		calculateWinners: function(guess, winnersArray, losersArray) {
			var guessedCorrectly = $.inArray(guess, winnersArray) >= 0;
			if(guessedCorrectly) {
				winnersArray.push("Gambler");
			}
			else {
				losersArray.push("Gambler");
			}
		}
	}
	return set;
}

function privateEye() {
	var set = {
		name: "Private Eye",
		cards: ["Private Eye"],
		winCon: "guess",
		prompt: "Hey Private Eye, who's buried?",
		calculateWinners: function(guess, buried, winnersArray, losersArray) {
			var guessedCorrectly = (guess === buried);
			if(guessedCorrectly) {
				winnersArray.push("Private Eye");
			}
			else {
				losersArray.push("Private Eye");
			}
		}
	}
	return set;
}

function mobyAndAhab() {
	var set = {
		name: "Moby and Ahab",
		cards: ["Moby", "Ahab"],
		winCon: "location",
		calculateWinners: function(roomArray, winnersArray, losersArray) {
			var hasMoby = $.inArray("Moby", roomArray) >= 0;
			var hasAhab = $.inArray("Ahab", roomArray) >= 0;
			var hasBomber = $.inArray("Bomber", roomArray) >= 0;
			var mobyWins = ((hasBomber && hasAhab) && !hasMoby) || ((!hasBomber && !hasAhab) && hasMoby);
			var ahabWins = ((hasBomber && hasMoby) && !hasAhab) || ((!hasBomber && !hasMoby) && hasAhab);
			if(mobyWins) {
				winnersArray.push("Moby");
				losersArray.push("Ahab");
				return "Moby Wins!";
			}
			else if(ahabWins) {
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

function bombBot() {
	var set = {
		name: "Bomb-Bot",
		cards: ["Bomb-Bot"],
		winCon: "location",
		calculateWinners: function(roomArray, winnersArray, losersArray) {
			var hasBombBot = $.inArray("Bomb-Bot", roomArray) >= 0;
			var hasPresident = $.inArray("President", roomArray) >= 0;
			var hasBomber = $.inArray("Bomber", roomArray) >= 0;
			var bombBotWins = ((hasBomber && hasBombBot) && !hasPresident) || ((!hasBomber && !hasBombBot) && hasPresident);
			if(bombBotWins) {
				winnersArray.push("Bomb-Bot");
				return "Bomb-Bot Wins!";
			}
			else {
				losersArray.push("Bomb-Bot");
				return "Bomb-Bot loses.";
			}
		}
	}
	return set;
}

function queen() {
	var set = {
		name: "Queen",
		cards: ["Queen"],
		winCon: "location",
		calculateWinners: function(roomArray, winnersArray, losersArray) {
			var hasQueen = $.inArray("Queen", roomArray) >= 0;
			var hasPresident = $.inArray("President", roomArray) >= 0;
			var hasBomber = $.inArray("Bomber", roomArray) >= 0;
			var queenWins = ((hasPresident && hasBomber) && !hasQueen) || ((!hasPresident && !hasBomber) && hasQueen);
			if(queenWins) {
				winnersArray.push("Queen");
				return "Queen Wins!";
			}
			else {
				losersArray.push("Queen");
				return "Queen loses.";
			}
		}
	}
	return set;
}

function butlerAndMaid() {
	var set = {
		name: "Butler and Maid",
		cards: ["Butler", "Maid"],
		winCon: "location",
		calculateWinners: function(roomArray, winnersArray, losersArray) {
			var hasButler = $.inArray("Butler", roomArray) >= 0;
			var hasMaid = $.inArray("Maid", roomArray) >= 0;
			var hasPresident = $.inArray("President", roomArray) >= 0;
			var butlerAndMaidWin = ((hasButler && hasMaid) && hasPresident) || ((!hasButler && !hasMaid) && !hasPresident);
			if(butlerAndMaidWin) {
				winnersArray.push("Butler");
				winnersArray.push("Maid");
				return "Butler and Maid Win!";
			}
			else {
				losersArray.push("Butler");
				losersArray.push("Maid");
				return "Butler and Maid lose.";
			}
		}
	}
	return set;
}

function wifeAndMistress() {
	var set ={
		name: "Wife and Mistress",
		cards: ["Wife", "Mistress"],
		winCon: "location",
		calculateWinners: function(roomArray, winnersArray, losersArray) {
			var hasWife = $.inArray("Wife", roomArray) >= 0;
			var hasMistress = $.inArray("Mistress", roomArray) >= 0;
			var hasPresident = $.inArray("President", roomArray) >= 0;
			var wifeWins = ((hasWife && hasPresident) && !hasMistress) || ((!hasWife && !hasPresident) && hasMistress)
			var mistressWins = ((hasMistress && hasPresident) && !hasWife) || ((!hasMistress && !hasPresident) && hasWife)
			if(wifeWins) {
				winnersArray.push("The Wife");
				losersArray.push("The Mistress");
				return "The Wife Wins!";
			}
			else if(mistressWins) {
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

