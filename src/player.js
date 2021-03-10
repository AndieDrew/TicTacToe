class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = this.retrieveWinsFromStorage() || 0;
  }
  saveWinsToStorage(score) {
    localStorage.setItem(`${this.id}`, JSON.stringify(score));
  }

  retrieveWinsFromStorage() {
    var savedWins = JSON.parse(localStorage.getItem(this.id));
    return savedWins;
  }
}
