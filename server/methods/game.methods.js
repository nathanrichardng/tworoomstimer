Meteor.methods({
    'saveGame': function(doc){
    	if(!doc.accessCode) { doc.accessCode = generateAccessCode(); }
      	var game = Collections.Games.upsert({ _id: doc._id }, doc);
   		console.log(game);
   		return game.insertedId || doc._id;


   		function generateAccessCode() {
   			var code = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

            for(var i=0; i < 6; i++){
              code += possible.charAt(Math.floor(Math.random() * possible.length));
            }

            return code;
   		}
    }
});