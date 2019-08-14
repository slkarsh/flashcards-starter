const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');


describe('Round', function() {
    it.skip('should be a function', function() {
        const round = new Round();
        expect(Round).to.be.a('function');
    });

    it.skip('should have the current card in play be the first card in the deck', function() {
        const card1 = new Card({id: 1, question: 'What is Sara\'s favorite ice cream?', answers: ['vanilla', 'chocolate', 'rocky road'], correctAnswer: 'vanilla'});
        const card2 = new Card({id: 2, question: 'What car does Sara drive?', answers: ['Mazda3', 'Jeep Rangler', 'Subaru Legacy'], correctAnswer:'Mazda3'});
        const card3 = new Card({id: 3, question: 'What state did Sara go to college in?', answers: ['California', 'New York', 'Arizona'], correctAnswer: 'New York' });
        const deck = new Deck();
        deck.addCard(card1);
        deck.addCard(card2);
        deck.addCard(card3);
        const round = new Round(deck);
        expect(round.currentCard).to.equal(card1);
    });

    it.only('should create a new instance of Turn', function() {
        
    })
})