class Deck {
    constructor(cardCount) {
        this.cardCount = cardCount || [];
    }

    addCard(card) {
        this.cardCount.push(card);
    }

    countCards() {
        return this.cardCount.length;
    }
};


module.exports = Deck;