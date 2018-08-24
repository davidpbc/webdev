// jQuery selectors work as querySelectorAll()
// Returns an array of the matching elements
var h1 = $("h1");

// css method works without the need of loop through
h1.css("color","yellow")
console.log(h1[0]);

// passing multiple styles to css method
var styles = {
  backgroundColor : "steelblue",
  fontWeight : "bold",
  color : "white",
  width : "50%",
  border : "1px solid #131313",
  fontSize : "1.2em",
};
var lis = $("li");
lis.css(styles);
for (var i = 0; i < lis.length; i++) {
  console.log(lis[i]);
}

var links = $("a");
for (var i = 0; i < links.length; i++) {
  console.log(links[i]);
}

var hbLink = $("li a");
console.log(hbLink[0]);


var pineMarten = $("#marten");
pineMarten.css(styles);
console.log(pineMarten[0]);
