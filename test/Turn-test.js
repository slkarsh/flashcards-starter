const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe ('Turn', function() {
    it.skip ('should be a function', function() {
        const turn = new Turn();
        expect(Turn).to.be.a('function');
    });

    it.skip('should be an instance of Turn', function() {
        const turn = new Turn();
        expect(turn).to.be.an.instanceof(Turn);
    });

    it.skip('should store a guess', function() {
        const turn = new Turn('moo');
        expect(turn.guess).to.equal('moo');
    });

    it.skip('should correspond to a playing card', function() {
        const card = new Card({id: 1, question: 'What sound does a dog make?', answers: ['meow', 'oink', 'woof'], correctAnswer: 'woof'})
        const turn = new Turn('woof', card)

        expect(turn.card).to.equal(card);
    });

    it.skip('should return the player\'s answer', function() {
        const card = new Card({id: 1, question: 'What sound does a dog make?', answers: ['meow', 'oink', 'woof'], correctAnswer: 'woof'})
        const turn = new Turn('woof', card)

        expect(turn.returnGuess()).to.equal('woof');

     });

     it.skip('should return the current card in play for this turn', function() {
         const card = new Card({id: 2, question: 'What color is the sky?', answers: ['turquoise', 'azure', 'blue'], correctAnswer: 'blue'});
         const turn = new Turn('blue', card);

         expect(turn.returnCard()).to.equal(card)
     });

     it.skip('should be able to evaluate if the player\'s answer is correct', function() {
         const card = new Card({id: 1, question: 'What sound does a dog make?', answers: ['meow', 'oink', 'woof'], correctAnswer: 'woof'});
         const turn = new Turn('meow', card);

         expect(turn.evaluateGuess()).to.equal(false);

         const turn2 = new Turn('woof', card)
         expect(turn2.evaluateGuess()).to.equal(true);
     });

     it.skip('should be able to tell the player if their guess was correct', function() {
        const card = new Card({id: 1, question: 'What sound does a dog make?', answers: ['meow', 'oink', 'woof'], correctAnswer: 'woof'});
        const turn = new Turn('meow', card);
        
        expect(turn.giveFeedback()).to.equal('incorrect!');
     })
})