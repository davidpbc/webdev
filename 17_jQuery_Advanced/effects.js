var divsFadeOut = $(".out");
var divsFadeIn = $(".in");
var divsToggle = $(".toggle");

$("#fade").on("click", function(){
  divsFadeOut.fadeOut(1000, function(){
    // This code runs after the fadeOut finishes
    console.log("Fade Completed");
    $(this).remove();
  });
  divsFadeIn.fadeIn(1000);
  divsToggle.fadeToggle(1000);
  // This code runs inmediatly after the fadeOut starts
  console.log("Fade Started");
});

$("#slide").on("click", function(){
  divsFadeOut.slideUp(1000, function(){
    // This code runs after the fadeOut finishes
    $(this).remove();
    console.log("Slide Completed")
  });
  divsFadeIn.slideDown(1000);
  divsToggle.slideToggle(1000);
  // This code runs inmediatly after the fadeOut starts
  console.log("Slide Started");
});
