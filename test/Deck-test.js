const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card')

describe ('Deck', function() {
    it.skip('should be a function', function() {
        const deck = new Deck();
        expect(Deck).to.be.a('function');
    });

    it.skip('should be an instance of Deck', function() {
        const deck = new Deck();
        expect(deck).to.be.an.instanceof(Deck);
    });

    it.skip('should start with no cards', function() {
        const deck = new Deck();
        expect(deck.cardCount).to.deep.equal([]);
    });

    it.skip('should add to its card count with each instantiation of a new card', function() {
        const deck = new Deck();
        expect(deck.cardCount).to.deep.equal([]);

        const card1 = new Card({id:1, question: 'What is Sara\'s favorite animal?', answers:['trout', 'pig', 'elephant'], correctAnswer: 'elephant'});
        deck.addCard(card1);
        expect(deck.cardCount).to.deep.equal([card1]);
    });

    it.skip('should know how many cards are in the deck', function() {
        const deck = new Deck();
        const card1 = ({id:1, question: 'What is Sara\'s favorite animal?', answers:['trout', 'pig', 'elephant'], correctAnswer: 'elephant'});
        const card2 = ({id: 2, question: 'What is Sara\'s favorite color?', answers: ['green', 'red', 'black'], correctAnswer: 'green'});
        deck.addCard(card1);
        deck.addCard(card2);
    
        expect(deck.countCards()).to.equal(2);
    })
})