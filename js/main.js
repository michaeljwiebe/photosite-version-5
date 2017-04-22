
//makes blog and contact links appear under hamburger
document.getElementById("hamburger").addEventListener("click", function(){
  document.querySelector(".nav").classList.toggle("responsive");
});

document.getElementById("events").addEventListener("click", function() {
  document.getElementById("eventsPreview").classList.toggle("fade-out");
  document.getElementById("eventsPreview").classList.toggle("fade-in");
});
document.getElementById("family").addEventListener("click", function() {
  document.getElementById("familyPreview").classList.toggle("fade-out");
  document.getElementById("familyPreview").classList.toggle("fade-in");
});
document.getElementById("city").addEventListener("click", function() {
  document.getElementById("cityPreview").classList.toggle("fade-out");
  document.getElementById("cityPreview").classList.toggle("fade-in");
});


//if statements below both individually work to add responsive class but don't remove it on next click
  // if (document.getElementById("nav-hamburger").className = "responsive") {
  // //   this.className -= " responsive";
  // // } else {
  // //   this.className += " responsive";
  // // }
  //   this.classList.remove(" responsive");
  // } else {
  //   this.classList.add(" responsive");
  // }
// });


// $("#events").hover(
//   function(){
//     $("#eventsPreview").addClass("visible");},
//   function(){
//     $("#eventsPreview").removeClass("visible");}
//   );
// $("#family").hover(
//   function(){
//     $("#familyPreview").addClass("visible");},
//   function(){
//     $("#familyPreview").removeClass("visible");}
//   );
// $("#nature").hover(
//   function(){
//     $("#naturePreview").addClass("visible");},
//   function(){
//     $("#naturePreview").removeClass("visible");}
//   );
// $("#city").hover(
//   function(){
//     $("#cityPreview").addClass("visible");},
//   function(){
//     $("#cityPreview").removeClass("visible");}
//   )
  //reload only a section of page
  //$("#btnNextPage").click(function() {
  //$( ".row" ).load( "photopanes/test.html .row" );
  //});
