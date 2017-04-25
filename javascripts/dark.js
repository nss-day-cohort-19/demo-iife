console.log("darkside loaded");

var Starwars = (function(){
	var location = "The Unknown Regions";
	var keyplayers = ["Count Dooku", "Darth Maul", "General Grievous", "Greedo", "Jango Fett", "Darth Sidious"];

	return {
		getEvil: function(){
			console.log("Evil list of players", keyplayers);
			return keyplayers;
		},

		setEvil: function(who){
			keyplayers.push(who);
			console.log("evil players", keyplayers);
		}
	}

})();