console.log("hello start.js");


// let getLocation = document.getElementById("btn-getLocation");
// getLocation.addEventListener("click", function(){
// 	console.log("Hey Darth, we are located at: ", resistanceLocation);
// });


let objButton = document.getElementById("btn-checkObject");
objButton.addEventListener("click", introduceStarwars);

function introduceStarwars(event){
	console.log("Star Wars IIFE", Starwars);
}

let locbtn = document.getElementById("btn-getRLocation");
locbtn.addEventListener("click", function(){
	Starwars.getLocation(locbtn.getAttribute("whoIsIt"));
});

let locbtn2 = document.getElementById("btn-getRLocation2");
locbtn2.addEventListener("click", function(){
	Starwars.getLocation(locbtn2.getAttribute("whoIsIt"));
});


let addPlayer = document.getElementById("btn-signup");
addPlayer.addEventListener("click", function(){
	let newPlayerName = document.getElementById("newperson").value;
	//which side
	var whichselected;
	var radios = document.getElementsByName('whichside');
	for (var i = 0; i < radios.length; i++){
		// 1 = good, 2 = evil, 0 = jedi
		if (radios[i].checked){
			whichselected = radios[i].value;
			break;
		}
	}
	console.log("whichselected", whichselected);
	//watch out for strict data matching
	if (whichselected == 0){
		Starwars.addJedi(newPlayerName);
	}else if(whichselected == 1){
		Starwars.setPlayer(newPlayerName);
	}else if(whichselected == 2){
		Starwars.setEvil(newPlayerName);
	}
});

let removeJedi = document.getElementById("btn-removeanakin");
removeJedi.addEventListener("click", function(){
	Starwars.removeJedi("Anakin Skywalker", "Darth Vader");
});

let removeJedi2 = document.getElementById("btn-removeobiwan");
removeJedi2.addEventListener("click", function(){
	Starwars.removeJedi("Obi-Wan Kenobi");
});
