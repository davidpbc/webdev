// Create Secret Number
var secretNumber = 4;

// Ask User for a Number
var guess = Number(prompt("Guess a Number"));

// Check if guess is correct
if (guess === secretNumber) {
  alert("YOU GOT IT RIGHT!");
}

else if (guess > secretNumber) {
  alert("Too high, try again!");
}

else {
  alert("Too low, try again!");
}
