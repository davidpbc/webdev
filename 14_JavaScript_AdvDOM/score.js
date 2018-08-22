var p1Button = document.getElementById("p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.getElementById("reset");
var numInput = document.querySelector("#setGames");
var p1Score = 0;
var p2Score = 0;
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var gameOver = false;
var winningScore = 5;
var games = document.querySelector("p span");

p1Button.addEventListener("click", function(){
  if(!gameOver){
    p1Score ++;
    if (p1Score === winningScore) {
      player1.classList.add("winner");
      gameOver = true;
    }
    player1.textContent = p1Score;
  }
})

p2Button.addEventListener("click", function(){
  if (!gameOver) {
    p2Score ++;
    if (p2Score === winningScore) {
      player2.classList.add("winner");
      gameOver = true;
    }
    player2.textContent = p2Score;
  }

})

resetButton.addEventListener("click", function(){
  reset();
})

numInput.addEventListener("change", function(){
  winningScore = Number(this.value);
  games.textContent = winningScore;
  reset();
})

function reset() {
  gameOver = false;
  p1Score = 0;
  p2Score = 0;
  player1.textContent = 0;
  player2.textContent = 0;
  player1.classList.remove("winner");
  player2.classList.remove("winner");
}
