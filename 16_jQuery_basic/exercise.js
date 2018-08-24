// Select all divs and give them a purple background
$("div").css("backgroundColor", "purple");

// Select all divs with "highlight" class and make them 200px width
$("div.highlight").css("width", "200px");

// Select the div with id "third" and give it an orange bg
$("#third").css("border", "1px solid orange");

// select the first div only and change text color to pink
// built-in jQuery (slower)
// $("div").first().css("color", "pink");
// css selector (faster)
$("div:first-of-type").first().css("color", "pink");
