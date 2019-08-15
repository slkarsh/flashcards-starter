const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');


describe('Round', function() {
    it('should be a function', function() {
        const round = new Round();
        expect(Round).to.be.a('function');
    });

    it('should be an instance of Round', function() {
        const round = new Round();
        expect(round).to.be.an.instanceof(Round);
    });

    it('should have a deck with the available cards to play', function() {
        const card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
        const card2 = new Card({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
        const card3 = new Card({id: 12, question: 'What is Travis\'s favorite stress reliever?', answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'], correctAnswer: 'playing with bubble wrap'});

        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        expect(round.deck).to.equal(deck);
    
    })

   it.skip('should return the current card being played', function() {
    const card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
    const card2 = new Card({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
    const card3 = new Card({id: 12, question: 'What is Travis\'s favorite stress reliever?', answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'], correctAnswer: 'playing with bubble wrap'});

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.currentCard();
    expect(round.currentCard()).to.deep.equal(card1);
   });

   it.skip('should increase the turn count by 1 with each guess', function() {
    const card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
    const card2 = new Card({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
    const card3 = new Card({id: 12, question: 'What is Travis\'s favorite stress reliever?', answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'], correctAnswer: 'playing with bubble wrap'});

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn('platypus');
    expect(round.turnCount).to.equal(1);
    round.takeTurn('blue');
    expect(round.turnCount).to.equal(2); 
   });

   it.skip('should return feedback regarding whether or not the guess is correct', function() {
    const card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
    const card2 = new Card({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
    const card3 = new Card({id: 12, question: 'What is Travis\'s favorite stress reliever?', answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'], correctAnswer: 'playing with bubble wrap'});

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn('platypus');

   })

 
   it.skip('should update the current card being played after each guess', function() {
    const card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
    const card2 = new Card({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
    const card3 = new Card({id: 12, question: 'What is Travis\'s favorite stress reliever?', answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'], correctAnswer: 'playing with bubble wrap'});

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn('pug');
    expect(round.turnCount).to.equal(1);
    round.currentCard();
    expect(round.currentCard()).to.deep.equal(card2);
   });

   it.skip('should collect the id of each card for which an incorrect guess was provided', function() {
    const card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
    const card2 = new Card({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
    const card3 = new Card({id: 12, question: 'What is Travis\'s favorite stress reliever?', answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'], correctAnswer: 'playing with bubble wrap'});

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn('pug');
    expect(round.incorrectGuesses).to.deep.equal([1]);
   });

   it.skip('should give feedback based on the user guess', function() {
    const card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
    const card2 = new Card({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
    const card3 = new Card({id: 12, question: 'What is Travis\'s favorite stress reliever?', answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'], correctAnswer: 'playing with bubble wrap'});

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.takeTurn('sea otter')).to.equal('Correct!');
   });

   it.skip('should be able to tell the user the number of correct guesses', function() {
    const card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
    const card2 = new Card({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
    const card3 = new Card({id: 12, question: 'What is Travis\'s favorite stress reliever?', answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'], correctAnswer: 'playing with bubble wrap'});

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn('sea otter');
    expect(round.calculatePercentCorrect()).to.equal(100);
    round.takeTurn('spleen');
    expect(round.calculatePercentCorrect()).to.equal(50);
   });

   it.skip('should tell the user how many correct answers they had when the round ends', function() {
    const card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
    const card2 = new Card({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
    const card3 = new Card({id: 12, question: 'What is Travis\'s favorite stress reliever?', answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'], correctAnswer: 'playing with bubble wrap'});

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    round.takeTurn('playing with bubble wrap');
    expect(round.endRound()).to.equal(`** Round over! ** You answered 66% of the questions correctly!`)
   })


})