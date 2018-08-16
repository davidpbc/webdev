var answer = prompt("Are we there Yet?");

while((answer.indexOf("yes") === -1) && (answer !== "yeah")) {
  var answer = prompt("Are we there yet?");
}

alert("YAY, We made it!");
