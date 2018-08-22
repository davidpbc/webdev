var btn = document.getElementById("toggler");

btn.addEventListener("click", function() {
  document.body.classList.toggle("purple");
})

// var isPurple = false
// btn.addEventListener("click", function() {
//   if(isPurple){
//     document.body.style.background = "white";
//   } else {
//     document.body.style.background = "purple";
//   }
//   isPurple = !isPurple;
// })
