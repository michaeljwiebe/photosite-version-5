// var carousel = document.getElementsByClassName("carousel")[0];
// var photo1 = document.getElementsByClassName("photo1")[0];
// var photo2 = document.getElementsByClassName("photo2")[0];
// var photo3 = document.getElementsByClassName("photo3")[0];
// var photo4 = document.getElementsByClassName("photo4")[0];
// var photo5 = document.getElementsByClassName("photo5")[0];
var photo6 = document.getElementsByClassName("photo6")[0];
var photo7 = document.getElementsByClassName("photo7")[0];
var photo8 = document.getElementsByClassName("photo8")[0];
var photo9 = document.getElementsByClassName("photo9")[0];
// var photos = document.getElementsByClassName("photo");
// var thumbnails = document.getElementsByClassName("thumbnails");

var hiddenPhotosArray = [];

hiddenPhotosArray.push(photo6, photo7, photo8, photo9);

document.addEventListener("keydown", function(event) {
    //Add function here?
    if (event.keyCode === 39 || event.keyCode === 37) {
        var left = document.getElementsByClassName("left")[0];
        var farLeft = document.getElementsByClassName("farLeft")[0];
        var center = document.getElementsByClassName("center")[0];
        var right = document.getElementsByClassName("right")[0];
        var farRight = document.getElementsByClassName("farRight")[0];
        center.classList.remove("center");
        left.classList.remove("left");
        right.classList.remove("right");
        farRight.classList.remove("farRight", "skinny");
        farLeft.classList.remove("farLeft", "skinny");
    }

    if (event.keyCode === 39) {
        farRight.classList.add("right");
        center.classList.add("left");
        right.classList.add("center");
        left.classList.add("farLeft", "skinny");
        farLeft.classList.add("hidden");
        hiddenPhotosArray.push(farLeft);
        var newPhoto = hiddenPhotosArray.splice(0, 1)[0];
        newPhoto.classList.remove("hidden");
        newPhoto.classList.add("farRight", "skinny");
    } else if (event.keyCode === 37) {
        farLeft.classList.add("left");
        center.classList.add("right");
        left.classList.add("center");
        right.classList.add("farRight", "skinny");
        farRight.classList.add("hidden");
        hiddenPhotosArray.splice(0, 0, farRight);
        var newPhoto = hiddenPhotosArray.splice(
            hiddenPhotosArray.length - 1,
            1
        )[0];
        newPhoto.classList.remove("hidden");
        newPhoto.classList.add("farLeft", "skinny");
    }
});
