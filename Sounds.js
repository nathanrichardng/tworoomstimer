Sounds = {
	PlaySound: playSound,
	QueueSound: queueSound
}


function playSound(path) {
	if(Meteor.isCordova) {
		var sound = new Media('/android_asset/www/application/app/sounds/'+path, handleSuccess, handleFail);
			sound.play();

		function handleSuccess() {
			console.log("added sound from " + path);
		}

		function handleFail(err) {
			console.log("error adding sound from path " + path, err);
		}
	}
}

function queueSound(path) {
	if(Meteor.isCordova) {
		var sound = new Media('/android_asset/www/application/app/sounds/'+path, handleSuccess, handleFail);
			return sound;

		function handleSuccess() {
			console.log("added sound from " + path);
		}

		function handleFail(err) {
			console.log("error adding sound from path " + path, err);
		}
	}
	else {
		return { play: function() { console.log("Not cordova"); } }
	}
}