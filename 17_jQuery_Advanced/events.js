var h1 = $("h1");
var buttons = $("button");
var input = $("input");

// click(): Bind an event handler to the “click” JavaScript event, or trigger that event on an element.

h1.click(function() {
  console.log("h1 Clicked");
});

buttons.click(function() {
  // this version in jQuery
  $(this).css("backgroundColor", "red");
});

// keypress(): Bind an event handler to the “keypress” JavaScript event, or trigger that event on an element.
input.keypress(function(event) {
  if (event.which === 13) {
    var text = input.val();
    console.log(text);
    input.val("");
  }
});

// on(): Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
// On adds listeners to elements on page and future elements
h1.on("click", function() {
  $(this).css("color", "orange");
});

buttons.on("mouseenter", function() {
  $(this).css("fontWeight","bold");
})

buttons.on("mouseleave", function() {
  $(this).css("fontWeight","normal");
})
