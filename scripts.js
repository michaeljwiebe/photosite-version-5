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

document.addEventListener("click", function(event){
	console.log("clicks")
	var left = document.getElementsByClassName("left")[0];
	var farLeft = document.getElementsByClassName("farLeft")[0];
	var center = document.getElementsByClassName("center")[0];
	var right = document.getElementsByClassName("right")[0];
	var farRight = document.getElementsByClassName("farRight")[0];
	var hidden1 = document.getElementsByClassName("hidden1")[0];
	var hidden2 = document.getElementsByClassName("hidden2")[0];
	var hidden3 = document.getElementsByClassName("hidden3")[0];
	var hidden4 = document.getElementsByClassName("hidden4")[0];
	center.classList.remove("center");
	left.classList.remove("left");
	right.classList.remove("right");
	farRight.classList.remove("farRight", "skinny");
	farLeft.classList.remove("farLeft", "skinny");
	hidden1.classList.remove("hidden", "hidden1");
	hidden2.classList.remove("hidden2");
	hidden3.classList.remove("hidden3");
	hidden4.classList.remove("hidden4");
	farRight.classList.add("right");
	center.classList.add("left");
	right.classList.add("center");
	left.classList.add("farLeft", "skinny");
	hidden1.classList.add("farRight", "skinny");
	farLeft.classList.add("hidden", "hidden4");
	hidden2.classList.add("hidden1");
	hidden3.classList.add("hidden2");
	hidden4.classList.add("hidden3");

});
// photos.addEventListener("click", function(){});

