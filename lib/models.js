Models = {
	Game: game
}

function game(doc) {
	var game = {
		playerIds: doc.playerIds || [],
		stage: doc.stage || "Lobby",
		createdDate: doc.createdDate || new Date(),
		playSetIds: doc.playSetIds || [],
		timerLength: doc.timerLength || 3,
		timerEndTime: doc.timerEndTime || null,
		timerPausedTime: doc.timerPausedTime || false,
		accessCode: doc.accessCode || null,
		save: function() {
			var validation = this.validation();
			if(validation.passes) {
				Meteor.call('saveGame', this, function(error, result) {
					this._id = result;
					console.log(Collections.Games.findOne(this._id));
				})
			}
			else {
				console.log(validation.error);
			}
			return validation;
		},
		validation: function() {
			//add more to this later.
			var validator = new Validator();
				validator.checkDate(this.createdDate, "Invalid date provided");
			return validator.status;
		}
	}
}