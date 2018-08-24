// text() = textContent
// get text of elements
var lisText = $("li").text();
console.log(lisText);

// update text of elements
$("h1").text("Mandy, Dave's dog is adorable!");

// html() = innerHtml
// get html of elemnts
var ulHtml = $("ul").html();
console.log(ulHtml);

// update html of elements
$("li").html("Go to <a href='https://www.google.com'>Google</a>");

// attr(): Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element.

// get attribute
console.log($("input").attr("type"));

// add an attribute
$("img:first-of-type").attr("src", "https://www.nature.scot/sites/default/files/styles/teaser_feature_image_large/public/2017-07/TWH_250710_0012.JPG?itok=PZZw4noP")
$("img").last().attr("src", "https://www.earthrangers.com/public/content/wildwire/pine_marten_cute_credit_mark_bradley.jpg")
$("img").css("width", "200px");

// val(): Get the current value of the first element in the set of matched elements or set the value of every matched element.

// set value
$("input").val("Dave");
$("select").val("3");
// get value
console.log($("input").val());


// addClass(): Adds the specified class(es) to each element in the set of matched elements.
$("h1").addClass("correct");
$("li").addClass("wrong");

// removeClass(): Remove a single class, multiple classes, or all classes from each element in the set of matched elements.
$("h1").removeClass("correct");

// toggleClass(): Add or remove one or more classes from each element in the set of matched elements, depending on either the class’s presence or the value of the state argument.
$("li").first().toggleClass("done");
