var newGame = new Game();

var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var four = document.querySelector("#four");
var five = document.querySelector("#five");
var six = document.querySelector("#six");
var seven = document.querySelector("#seven");
var eight = document.querySelector("#eight");
var nine = document.querySelector("#nine");
var pTurn = document.querySelector("#turn");
var p1Wins = document.querySelector("#p1Wins");
var p2Wins = document.querySelector("#p2Wins");
var boxes = document.querySelectorAll(".box");
var grid = document.querySelector(".game");


grid.addEventListener("click", clickHandler);
window.addEventListener("load", checkStorage);

function checkStorage() {
  var p1StoredWins = newGame.player1.retrieveWinsFromStorage();
  var p2StoredWins = newGame.player2.retrieveWinsFromStorage();
  var storedWins = [p1StoredWins, p2StoredWins]
  updateScore(storedWins);
  return storedWins;
}

function clickHandler(event) {
  var box = event.target.dataset.box;
  if (event.target.classList.contains("box") && !event.target.classList.contains("used")) {
    printToken(box);
    newGame.checkIfDone()
  }
  if (newGame.active === false) {
    displayWin();
    checkStorage();
    setTimeout(resetBoard, 1500);
    newGame.activate();
    disableClicks();
  }
  if (newGame.draw === true) {
    pTurn.innerText = `🚫 DRAW! 🚫`;
    setTimeout(resetBoard, 1500);
    disableClicks();
  }
}

function disableClicks() {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].classList.add("disabled")
  }
}

function printToken(box) {
  newGame.assignToken(box, newGame.turn);
  var target = event.target;
  target.innerHTML += `<p>${newGame.turn}</p>`;
  switchToken(target);
}

function switchToken(target) {
  newGame.toggleTurn();
  pTurn.innerText = `It's ${newGame.turn}'s turn!`;
  target.classList.add("used");
}

function updateScore(results) {
  if (!results[0]) {
    p1Wins.innerText = `Wins: 0`;
  } else {
    p1Wins.innerText = `Wins: ${results[0]}`
  }
  if (!results[1]) {
    p2Wins.innerText = `Wins: 0`
  } else {
    p2Wins.innerText = `Wins: ${results[1]}`
  }
  return results;
}

function displayWin() {
  if (newGame.turn === "⭕") {
    pTurn.innerText = "❌ Wins!";
  } else {
    pTurn.innerText = "⭕ Wins!";
  }
}

function resetBoard() {
  newGame.resetDraw();
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = "";
    boxes[i].classList.remove("used");
    boxes[i].classList.remove("disabled");
    pTurn.innerText = `It's ${newGame.turn}'s turn!`;
  }
}
