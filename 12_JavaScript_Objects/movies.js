movies = [
  {
    title: "Mad Max Fury Road",
    rating: 5,
    hasWatched: true,
  },
  {
    title: "A Quiet Place",
    rating: 5,
    hasWatched: true,
  },
  {
    title: "Black Panther",
    rating: 1.5,
    hasWatched: true,
  },
  {
    title: "Mission Impossible Fallout",
    rating: 4,
    hasWatched: false,
  },
]

movies.forEach(function (movie){
  console.log(buildString(movie));
})

function buildString(movie) {
  var result = "You have ";
  if (movie.hasWatched) {
    result += "watched ";
  } else {
    result += "not seen ";
  }
  result += "\"" + movie.title + "\" - ";
  result += movie.rating + " stars";
  return result;
}

var square = {
  side: 5,
};
var triangle = {
  base: 5,
  height: 4,
};

square.area = function () {
  return this.side * this.side;
}

triangle.area = function () {
  return (this.base * this.height) / 2;
}
