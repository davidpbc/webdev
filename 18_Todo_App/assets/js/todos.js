// Check off specific Todos By Clicking
// Using on() method to affect future elements
// can only be applied to existing elements so we select the parent element (ul) and pass the desired element as an attribute (li) inside the on() method
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

// Click on X To delete Todo
// on() methods applies to many layers of sons of selected element( ul>li>span)
$("ul").on("click", ".trash", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  // Prevents events bubbling up through parent events
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  if (event.which === 13) {
    // graving new todo text from input
    var todoText =$(this).val();
    $(this).val("");
    // create new li and add to ul
    $("ul").append("<li><span class='trash'><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }
})

$("#plus").click(function(){
  $("input[type='text']").fadeToggle();
});
