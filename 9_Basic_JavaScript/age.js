var age = Number(prompt("How old are you?"));
if (age < 0) {
  alert("Error! You can't be negative years old.");
}

else if (age === 21) {
  alert("Happy 21st birthday!!");
}

else if (Math.sqrt(age) % 1 === 0) {
  alert("Perfect Square!");
}

else if (age % 2 !== 0) {
  alert("Your age is odd!");
}
