const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');

class Game {
  constructor() {
      this.playingCards = [];
      this.currentRound = null;
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
      this.playingCards = prototypeQuestions.map(card => {
        return new Card(card);
      })
      const deck = new Deck(this.playingCards);
      this.currentRound = new Round(deck)
      this.printMessage(deck, this.currentRound);
      this.printQuestion(this.currentRound);
  }
     
}

module.exports = Game;