var number = -10;

console.log("Numbers between -10 and 19");
while (number < 20) {
  console.log(number);
  number++;
}

number = 10;

console.log("Even numbers between 10 and 40");
while (number <= 40) {
  if (number % 2 === 0) {
    console.log(number);
  }
  number++;
}

number = 300;

console.log("Odd numbers between 300 and 333");
while (number <= 333) {
  if (number % 2 !== 0) {
    console.log(number);
  }
  number++;
}

number = 5;

console.log("Numbers divisible by 3 and 5 between 5 and 50");
while (number <= 50) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log(number);
  }
  number++;
}
