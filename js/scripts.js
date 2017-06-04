var photo6 = document.getElementsByClassName("photo6")[0];
var photo7 = document.getElementsByClassName("photo7")[0];
var photo8 = document.getElementsByClassName("photo8")[0];
var photo9 = document.getElementsByClassName("photo9")[0];

var hiddenPhotosArray = [];

hiddenPhotosArray.push(photo6, photo7, photo8, photo9);

document.addEventListener("keydown", function(event) {
    if (event.keyCode === 39) {
        movePhotosLeft();
    } else if (event.keyCode === 37) {
        movePhotosRight();
    }
    console.log(hiddenPhotosArray);
});

function movePhotosLeft() {
    //define photos on deck with position variables
    var farLeft = document.getElementsByClassName("farLeft")[0];
    var left = document.getElementsByClassName("left")[0];
    var center = document.getElementsByClassName("center")[0];
    var right = document.getElementsByClassName("right")[0];
    var farRight = document.getElementsByClassName("farRight")[0];
    //remove classes indicating position
    farLeft.classList.remove("farLeft", "skinny");
    left.classList.remove("left");
    center.classList.remove("center");
    right.classList.remove("right");
    farRight.classList.remove("farRight", "skinny");
    //add new position classes
    farRight.classList.add("right");
    right.classList.add("center");
    center.classList.add("left");
    left.classList.add("farLeft", "skinny");
    //hide one photo in prep for removal then remove
    farLeft.classList.add("hidden");
    hiddenPhotosArray.push(farLeft);
    //bring new photo into the mix
    var newPhoto = hiddenPhotosArray.splice(0, 1)[0];
    newPhoto.classList.remove("hidden");
    newPhoto.classList.add("farRight", "skinny");
}

function movePhotosRight() {
    //define photos on deck with position variables
    var left = document.getElementsByClassName("left")[0];
    var farLeft = document.getElementsByClassName("farLeft")[0];
    var center = document.getElementsByClassName("center")[0];
    var right = document.getElementsByClassName("right")[0];
    var farRight = document.getElementsByClassName("farRight")[0];
    //remove classes indicating position
    center.classList.remove("center");
    left.classList.remove("left");
    right.classList.remove("right");
    farRight.classList.remove("farRight", "skinny");
    farLeft.classList.remove("farLeft", "skinny");
    //add new position classes
    farLeft.classList.add("left");
    center.classList.add("right");
    left.classList.add("center");
    right.classList.add("farRight", "skinny");
    //hide one photo in prep for removal then remove
    farRight.classList.add("hidden");
    hiddenPhotosArray.splice(0, 0, farRight);
    //bring new photo into the mix
    var newPhoto = hiddenPhotosArray.splice(hiddenPhotosArray.length - 1, 1)[0];
    newPhoto.classList.remove("hidden");
    newPhoto.classList.add("farLeft", "skinny");
}
