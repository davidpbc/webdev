function isEven(x) {
  return x % 2 === 0;
}

function factorial(x) {
  var f = 1 // if you don't declare the variable inside the function, the variable is global
  for (var i = x; i > 1; i--) {
    f *= i;
  }
  return f;
}

function kebabToSnake(str) {
  var newStr = str.replace(/-/g, "_");
  return newStr;
}

// Testing the Functions
console.log("Even Numbers");
console.log("4 is even: " + isEven(4));
console.log("21 is even: " + isEven(21));
console.log("68 is even: " + isEven(68));
console.log("333 is even: " + isEven(333));

console.log("Factorials")
console.log("5! =  " + factorial(5));
console.log("3! =  " + factorial(3));
console.log("10! =  " + factorial(10));
console.log("0! =  " + factorial(0));

console.log("Kebab To Snake");
console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("dogs-are-awesome"));
console.log(kebabToSnake("blah!"));
