const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Game = require('../src/Game');

describe ('Game', function() {
    it.only('should be a function', function() {
        const game = new Game();
        expect(Game).to.be.a('function');
    });

    it.only('should be an instance of game', function() {
        const game = new Game();
        expect(game).to.be.an.instanceof(Game);
    })

    it.only('should have the all of the playing cards available when the game starts', function() {
        const game = new Game();
        game.start();
        expect(game.playingCards.length).to.equal(30);
    })

    it.only('should create a new instance of round when the game starts', function() {
        const game = new Game();
        game.start();
        expect(game.currentRound).to.be.an.instanceof(Round);
    })

    it.skip('should display how many cards are in the deck when the game starts', function() {
        const game = new Game();
        expect(game.start()).to.equal(`Welcome to FlashCards! You are playing with 30 cards.
        -----------------------------------------------------------------------`)
    })
})