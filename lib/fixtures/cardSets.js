CardSets = {
	GetSets: getSets,
	GetSetFromName: getSetFromName
}

function getSets() {
	sets = [
		"Sniper, Target, and Decoy",
		"Gambler",
		"Private Eye",
		"Agoraphobe",
		"Anarchist",
		"MI6",
		"Moby and Ahab",
		"Wife and Mistress",
		"Bomb-Bot",
		"Queen",
		"Butler and Maid",
		"Intern",
		"Victim",
		"Romeo and Juliet",
		"Rival",
		"Survivor"
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
		case "Agoraphobe":
			return new agoraphobe();
		case "Anarchist":
			return new anarchist();
		case "MI6":
			return new miSix();
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
		case "Intern":
			return new intern();
		case "Victim":
			return new victim();
		case "Romeo and Juliet":
			return new romeoAndJuliet();
		case "Rival":
			return new rival();
		case "Survivor":
			return new survivor();
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

function agoraphobe() {
	var set = {
		name: "Agoraphobe",
		cards: ["Agoraphobe"],
		winCon: "passFail",
		prompt: "Hey Agoraphobe, did you ever change rooms?",
		options: ["Yes", "No"],
		calculateWinners: function(answer, winnersArray, losersArray) {
			if(answer === "No") {
				winnersArray.push("Agoraphobe");
			}
			else {
				losersArray.push("Agoraphobe");
			}
		}
	}
	return set;
}

function anarchist() {
	var set = {
		name: "Anarchist",
		cards: ["Anarchist"],
		winCon: "passFail",
		prompt: "Hey Anarchist, were you part of a userping a majority of the rounds?",
		options: ["Yes", "No"],
		calculateWinners: function(answer, winnersArray, losersArray) {
			if(answer === "Yes") {
				winnersArray.push("Anarchist");
			}
			else {
				losersArray.push("Anarchist");
			}
		}
	}
	return set;
}

function miSix() {
	var set = {
		name: "MI6",
		cards: ["MI6"],
		winCon: "passFail",
		prompt: "Hey MI6, did you cardshare with both the Bomber and the President?",
		options: ["Yes", "No"],
		calculateWinners: function(answer, winnersArray, losersArray) {
			if(answer === "Yes") {
				winnersArray.push("MI6");
			}
			else {
				losersArray.push("MI6");
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

function intern() {
	var set = {
		name: "Intern",
		cards: ["Intern"],
		winCon: "location",
		calculateWinners: function(roomArray, winnersArray, losersArray) {
			var hasIntern = $.inArray("Intern", roomArray) >= 0;
			var hasPresident = $.inArray("President", roomArray) >= 0;
			var internWins = (hasIntern && hasPresident) || (!hasIntern && !hasPresident);
			if(internWins) {
				winnersArray.push("Intern");
				return "Intern Wins!";
			}
			else {
				losersArray.push("Intern");
				return "Intern Loses.";
			}
		}
	}
	return set;
}

function victim() {
	var set = {
		name: "Victim",
		cards: ["Victim"],
		winCon: "location",
		calculateWinners: function(roomArray, winnersArray, losersArray) {
			var hasVictim = $.inArray("Victim", roomArray) >= 0;
			var hasBomber = $.inArray("Bomber", roomArray) >= 0;
			var victimWins = (hasVictim && hasBomber) || (!hasVictim && !hasBomber);
			if(victimWins) {
				winnersArray.push("Victim");
				return "Victim Wins!";
			}
			else {
				losersArray.push("Victim");
				return "Victim Loses.";
			}
		}
	}
	return set;
}

function romeoAndJuliet() {
	var set = {
		name: "Romeo and Juliet",
		cards: ["Romeo", "Juliet"],
		winCon: "location",
		calculateWinners: function(roomArray, winnersArray, losersArray) {
			var hasRomeo = $.inArray("Romeo", roomArray) >= 0;
			var hasJuliet = $.inArray("Juliet", roomArray) >= 0;
			var romeoAndJulietWin = (hasRomeo && hasJuliet) || (!hasRomeo && !hasJuliet);
			if(romeoAndJulietWin) {
				winnersArray.push("Romeo");
				winnersArray.push("Juliet");
				return "Romeo and Juliet Win!";
			}
			else {
				losersArray.push("Romeo");
				losersArray.push("Juliet");
				return "Romeo and Juliet lose.";
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

function rival() {
	var set = {
		name: "Rival",
		cards: ["Rival"],
		winCon: "location",
		calculateWinners: function(roomArray, winnersArray, losersArray) {
			var hasRival = $.inArray("Rival", roomArray) >= 0;
			var hasPresident = $.inArray("President", roomArray) >= 0;
			var rivalWins = (hasRival && !hasPresident) || (!hasRival && hasPresident);
			if(rivalWins) {
				winnersArray.push("Rival");
				return "Rival Wins!";
			}
			else {
				losersArray.push("Rival");
				return "Rival Loses.";
			}
		}
	}
	return set;
}

function survivor() {
	var set = {
		name: "Survivor",
		cards: ["Survivor"],
		winCon: "location",
		calculateWinners: function(roomArray, winnersArray, losersArray) {
			var hasSurvivor = $.inArray("Survivor", roomArray) >= 0;
			var hasBomber = $.inArray("Bomber", roomArray) >= 0;
			var survivorWins = (hasSurvivor && !hasBomber) || (!hasSurvivor && hasBomber);
			if(survivorWins) {
				winnersArray.push("Survivor");
				return "Survivor Wins!";
			}
			else {
				losersArray.push("Survivor");
				return "Survivor Loses.";
			}
		}
	}
	return set;
}

