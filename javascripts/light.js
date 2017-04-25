console.log("lightside.js");

var Starwars = (function(originalStarwars){ //use same var name when loading any order
// var Lightside = (function(originalStarwars){ 

	var location = "D'Qar";
	var keyplayers =["Princess Leia", "Han Solo", "Chewbacca", "Admiral Ackbar", "Jar Jar Binks"];
	var jedi = ["Luke Skywalker", "Yoda", "Obi-Wan Kenobi", "Anakin Skywalker", "Mace Windu"];

	originalStarwars.getLocation = function(whoAsks){
		console.log("whoAsks", whoAsks);
		let tell = true;
		let evilPlayers = Starwars.getEvil();
		evilPlayers.forEach(function(item){
			if (item === whoAsks){
				tell = false;
			}
		});

		if (tell){
			console.log(whoAsks, "is on the good side. Location:", location);
		}else {
			console.log("You are evil, cannot tell you.");
		}
	};

	originalStarwars.addJedi = function(who){
		jedi.push(who);
		console.log("jedi list:", jedi);
	};

	originalStarwars.setPlayer = function(who){
		keyplayers.push(who);
		console.log("players list", keyplayers);
	};



	originalStarwars.removeJedi = function(who, name){

		let whichIndex;
		jedi.forEach(function(item, index){
			if (item === who){
				whichIndex = index;
				jedi.splice(whichIndex, 1);
				console.log("jedi after death", jedi);

				if(name){
					Starwars.setEvil(name);
				}
			}
		});
	};




	return originalStarwars;


})(Starwars);