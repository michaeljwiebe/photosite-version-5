var carousel = document.getElementsByClassName("carousel")[0];
var photo1 = document.getElementsByClassName("photo1")[0];
var photo2 = document.getElementsByClassName("photo2")[0];
var photo3 = document.getElementsByClassName("photo3")[0];
var photo4 = document.getElementsByClassName("photo4")[0];
var photo5 = document.getElementsByClassName("photo5")[0];
var photos = document.getElementsByClassName("photo");
var thumbnails = document.getElementsByClassName("thumbnails");

document.addEventListener("keydown", function(event){
	var left = document.getElementsByClassName("left")[0];
	var farLeft = document.getElementsByClassName("farLeft")[0];
	var centerPhoto = document.getElementsByClassName("center")[0];
	var right = document.getElementsByClassName("right")[0];
	var farRight = document.getElementsByClassName("farRight")[0];
	if(event.keyCode === rightArrow){
		centerPhoto.classList.remove("center");
		left.classList.remove("left");
		farRight.classList.remove("farRight", "skinny");
		farLeft.classList.remove("farLeft", "skinny");
		centerPhoto.classList.add("left");
		right.classList.add("focus");
		left.classList.add("farLeft");



	} else if (event.keyCode === leftArrow){

	}
})

photos.addEventListener("click", function(){

})

