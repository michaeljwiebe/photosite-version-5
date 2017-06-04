var photo6 = document.getElementsByClassName("photo6")[0];
var photo7 = document.getElementsByClassName("photo7")[0];
var photo8 = document.getElementsByClassName("photo8")[0];
var photo9 = document.getElementsByClassName("photo9")[0];
var photo10 = document.getElementsByClassName("photo10")[0];
var photo11 = document.getElementsByClassName("photo11")[0];
var photo12 = document.getElementsByClassName("photo12")[0];
var photo13 = document.getElementsByClassName("photo13")[0];
var photo14 = document.getElementsByClassName("photo14")[0];
var photo15 = document.getElementsByClassName("photo15")[0];
var photo16 = document.getElementsByClassName("photo16")[0];
var photo17 = document.getElementsByClassName("photo17")[0];
var photo18 = document.getElementsByClassName("photo18")[0];

var hiddenPhotosArray = [];

hiddenPhotosArray.push(
    photo6,
    photo7,
    photo8,
    photo9,
    photo10,
    photo11,
    photo12,
    photo13,
    photo14,
    photo15,
    photo16,
    photo17,
    photo18
);

document.addEventListener("keydown", function(event) {
    if (event.keyCode === 39) {
        movePhotosLeft();
    } else if (event.keyCode === 37) {
        movePhotosRight();
    }
});

document.addEventListener("click", function() {
    if (event.clientX >= window.innerWidth / 2) {
        movePhotosLeft();
    } else {
        movePhotosRight();
    }
});

function movePhotosLeft() {
    //define photos on deck with position variables
    var farLeft = document.getElementsByClassName("farLeft")[0];
    var left = document.getElementsByClassName("left")[0];
    var center = document.getElementsByClassName("center")[0];
    var right = document.getElementsByClassName("right")[0];
    var farRight = document.getElementsByClassName("farRight")[0];
    //remove classes indicating position
    farLeft.classList.remove("farLeft");
    left.classList.remove("left");
    center.classList.remove("center");
    right.classList.remove("right");
    farRight.classList.remove("farRight");
    //add new position classes
    farRight.classList.add("right");
    right.classList.add("center");
    center.classList.add("left");
    left.classList.add("farLeft");
    //hide one photo in prep for removal then remove
    farLeft.classList.add("hidden");
    hiddenPhotosArray.push(farLeft);
    //bring new photo into the mix
    var newPhoto = hiddenPhotosArray.splice(0, 1)[0];
    newPhoto.classList.remove("hidden");
    newPhoto.classList.add("farRight");
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
    farRight.classList.remove("farRight");
    farLeft.classList.remove("farLeft");
    //add new position classes
    farLeft.classList.add("left");
    center.classList.add("right");
    left.classList.add("center");
    right.classList.add("farRight");
    //hide one photo in prep for removal then remove
    farRight.classList.add("hidden");
    hiddenPhotosArray.splice(0, 0, farRight);
    //bring new photo into the mix
    var newPhoto = hiddenPhotosArray.splice(hiddenPhotosArray.length - 1, 1)[0];
    newPhoto.classList.remove("hidden");
    newPhoto.classList.add("farLeft");
}
