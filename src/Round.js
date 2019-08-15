const Turn = require('../src/Turn');

class Round {
    constructor(deck) {
       this.deck = deck;
       this.turnCount = 0;
       this.incorrectGuesses = [];
    }

    returnCurrentCard() {
        return this.deck.cards[this.turnCount];
    }

    takeTurn(guess) {
        let currentCard = this.returnCurrentCard();
        const turn = new Turn(guess, currentCard)
        this.turnCount++
        if (turn.evaluateGuess() === false) {
            this.incorrectGuesses.push(currentCard.id)
        } return turn.giveFeedback();    
       
    }
    calculatePercentCorrect() {
        const numIncorrect = this.incorrectGuesses.length;
        const fraction = (this.turnCount - numIncorrect)/this.turnCount;
        const percentage = fraction * 100
        const returnValue = Math.floor(percentage);
        return returnValue;
    }   

    endRound() {
        console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
        return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    }
}


    module.exports = Round;
