//MAKING TOPNAV RESPONSIVE 
// function myFunction() {
//   var x = document.getElementById("hamburgerIcon");
//   if (x.className === "topNav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topNav";
//   }
// }


// function myFunction() {
//   var x = document.getElementById("hamburgerIcon");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topNav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topNav";
//   }
// }

// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

function showNav(){
    var menu = document.getElementById("topNav");
    if(menu.style.display === "block"){
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}


