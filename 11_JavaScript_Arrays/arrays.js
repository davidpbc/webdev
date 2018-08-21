colors = ["red", "black", "orange", "blue"];
printReverse(colors);
console.log(isUniform(colors));
console.log(isUniform([1,1,1,1,1]));
console.log(sumArray([1,1,1,1,1]));
console.log(max([1,3,4,78,32]));

function printReverse(x) {
  for (var i = x.length - 1; i >= 0; i--) {
    console.log(x[i]);
  }
}

function isUniform(x) {
  var first = x[0];
  for (var i = 1; i < x.length; i++) {
    if (x[i] !== first) {
      return false;
    }
  }
  return true;
}

//This Function is unviable because the first return ocurrs inside a second layer function
// function isUniform(x) {
//   first = x[0];
//   x.forEach(function (num) {
//     if (num !== first) {
//       // this return takes us to the main function
//       return false
//     }
//   });
//   // this return is always executed
//   return true;
// }

function sumArray(x) {
  var sum = 0;
  x.forEach(function(num) {
    sum += num;
  })
  return sum;
}

function max(x) {
  var max = x[0];
  for (var i = 1; i < x.length; i++) {
    if (x[i] > max) {
      max = x[i];
    }
  }
  return max;
}
