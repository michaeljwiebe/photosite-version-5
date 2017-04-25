var carousel = document.getElementsByClassName("carousel")[0];
var photo1 = document.getElementsByClassName("photo1")[0];
var photo2 = document.getElementsByClassName("photo2")[0];
var photo3 = document.getElementsByClassName("photo3")[0];
var photo4 = document.getElementsByClassName("photo4")[0];
var photo5 = document.getElementsByClassName("photo5")[0];
var photos = document.getElementsByClassName("photo");
var thumbnails = document.getElementsByClassName("thumbnails");

	// var left = document.getElementsByClassName("left")[0];
	// var farLeft = document.getElementsByClassName("farLeft")[0];
	// var centerPhoto = document.getElementsByClassName("center")[0];
	// var right = document.getElementsByClassName("right")[0];
	// var farRight = document.getElementsByClassName("farRight")[0];
	
// function slidePhotos(event){
// 	console.log("slidePhotos")
// 	var left = document.getElementsByClassName("left")[0];
// 	var farLeft = document.getElementsByClassName("farLeft")[0];
// 	var centerPhoto = document.getElementsByClassName("center")[0];
// 	var right = document.getElementsByClassName("right")[0];
// 	var farRight = document.getElementsByClassName("farRight")[0];
// 	if(event.keyCode === 39){
// 		centerPhoto.classList.remove("center");
// 		left.classList.remove("left");
// 		farRight.classList.remove("farRight", "skinny");
// 		farLeft.classList.remove("farLeft", "skinny");
// 		centerPhoto.classList.add("left");
// 		right.classList.add("focus");
// 		left.classList.add("farLeft", "skinny");
// 		farLeft.classList.add("farRight", "skinny");
// 	} else if (event.keyCode === 37){}
// }

// THIS FUNCTION DOESN'T RUN INSIDE THE EVENTLISTENER OR IF ITS WRITTEN OUTSIDE IT AND CALLED BY THE LISTENER. BUT ON A CLICK LISTENER THE SAME CODE FIRES
// document.addEventListener("keypress", function(event){
// 		console.log("slidePhotos")
// 	var left = document.getElementsByClassName("left")[0];
// 	var farLeft = document.getElementsByClassName("farLeft")[0];
// 	var centerPhoto = document.getElementsByClassName("center")[0];
// 	var right = document.getElementsByClassName("right")[0];
// 	var farRight = document.getElementsByClassName("farRight")[0];
// 	if(event.keyCode === 39){
// 		centerPhoto.classList.remove("center");
// 		left.classList.remove("left");
// 		farRight.classList.remove("farRight", "skinny");
// 		farLeft.classList.remove("farLeft", "skinny");
// 		centerPhoto.classList.add("left");
// 		right.classList.add("focus");
// 		left.classList.add("farLeft", "skinny");
// 		farLeft.classList.add("farRight", "skinny");
// 	} else if (event.keyCode === 37){}
// });

document.addEventListener("keydown", function(event){
	var left = document.getElementsByClassName("left")[0];
	var farLeft = document.getElementsByClassName("farLeft")[0];
	var center = document.getElementsByClassName("center")[0];
	var right = document.getElementsByClassName("right")[0];
	var farRight = document.getElementsByClassName("farRight")[0];
	var hiddenR1 = document.getElementsByClassName("hiddenR1")[0];
	var hiddenR2 = document.getElementsByClassName("hiddenR2")[0];
	var hiddenL1 = document.getElementsByClassName("hiddenL1")[0];
	var hiddenL2 = document.getElementsByClassName("hiddenL2")[0];
	center.classList.remove("center");
	left.classList.remove("left");
	right.classList.remove("right");
	farRight.classList.remove("farRight", "skinny");
	farLeft.classList.remove("farLeft", "skinny");
	hiddenR1.classList.remove("hidden", "hiddenR1");
	hiddenR2.classList.remove("hiddenR2");
	hiddenL2.classList.remove("hiddenL2");
	hiddenL1.classList.remove("hiddenL1");
	
	if(event.keyCode === 39){
		farRight.classList.add("right");
		center.classList.add("left");
		right.classList.add("center");
		left.classList.add("farLeft", "skinny");
		hiddenR1.classList.add("farRight", "skinny");
		farLeft.classList.add("hidden", "hiddenL1");
		hiddenR2.classList.add("hiddenR1");
		hiddenL2.classList.add("hiddenR2");
		hiddenL1.classList.add("hiddenL2");
	} else if (event.keyCode === 37){
		farRight.classList.add("hiddenL1");
		center.classList.add("right");
		right.classList.add("farRight", "skinny");
		left.classList.add("center");
		hiddenR1.classList.add("hiddenR2");
		farLeft.classList.add("left");
		hiddenR2.classList.add("hiddenL2");
		hiddenL2.classList.add("hiddenL1");
		hiddenL1.classList.add("farRight", "skinny");
	}

});
// photos.addEventListener("click", function(){});

