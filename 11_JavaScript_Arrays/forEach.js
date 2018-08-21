function myForEach(arr, func) {
  for (var i = 0; i < arr.length; i++) {
    func(arr[i], i, arr);
  }
}

function printArray(element, index) {
  console.log(index + ": " + element);
}


colors = ["red", "yellow", "orange", "blue"];

myForEach(colors, printArray);


// Extending Array.prototype object
Array.prototype.myForEach = function(func) {
  for (var i = 0; i < this.length; i++) {
    func(this[i], i, this);
  }
}
