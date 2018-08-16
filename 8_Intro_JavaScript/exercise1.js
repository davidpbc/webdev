var firstName = prompt("What's your first name?");
var lastName = prompt("What's your last name?");
var age = prompt("How old are you?");
console.log("Your full name is " + firstName + " " + lastName + "!");
console.log("You are " + age + " years old!");
var days = (age * 365.25) - ((age * 365.25) % 1);
console.log("You have been alive for " + days + " days!");
