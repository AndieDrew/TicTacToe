class Game {
  constructor() {
    this.player1 = new Player("player1", "⭕");
    this.player2 = new Player("player2", "❌");
    this.turn = this.player1.token;
    this.board = ["", "", "", "", "", "", "", "", ""];
    this.p1Score = this.player1.wins;
    this.p2Score = this.player2.wins;
    this.active = true;
    this.draw = false;
    this.winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  }

  assignToken(index, gameTurn) {
    this.board[index] = gameTurn;
  }

  toggleTurn() {
    if (this.turn === this.player1.token) {
      this.turn = this.player2.token;
    } else {
      this.turn = this.player1.token;
    }
  }

  resetGame() {
    this.board = ["", "", "", "", "", "", "", "", ""];
  }

  activate() {
    this.active = true;
  }

  resetDraw() {
    this.draw = false;
  }

  checkIfDone() {
    var checking = this.checkWinConditions();
    if (!newGame.board.includes("")) {
      this.draw = true;
      this.resetGame();
    } return checking;
  }
  
  checkWinConditions() {
    return  this.winningConditions.forEach((condition) => {
      if (this.board[condition[0]] && this.board[condition[0]] === this.board[condition[1]] && this.board[condition[1]] === this.board[condition[2]]) {
        this.active = false;
        this.resetGame();
        this.declareWinner();
      }
    })
  }

  declareWinner() {
    if (this.turn === "⭕") {
      this.p2Score += 1;
      this.player2.saveWinsToStorage(this.p2Score);
    } else {
      this.p1Score += 1;
      this.player1.saveWinsToStorage(this.p1Score);
    }
  }
}
