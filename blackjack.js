 const blackjackDeck = getDeck();

 const cards = [
  { val: 2, displayVal: '2', suit: 'hearts' },
  { val: 3, displayVal: '3', suit: 'hearts' },
  { val: 4, displayVal: '4', suit: 'hearts' },
  { val: 5, displayVal: '5', suit: 'hearts' },
  { val: 6, displayVal: '6', suit: 'hearts' },
  { val: 7, displayVal: '7', suit: 'hearts' },
  { val: 8, displayVal: '8', suit: 'hearts' },
  { val: 9, displayVal: '9', suit: 'hearts' },
  { val: 10, displayVal: '10', suit: 'hearts' },
  { val: 10, displayVal: 'Jack', suit: 'hearts' },
  { val: 10, displayVal: 'Queen', suit: 'hearts' },
  { val: 10, displayVal: 'King', suit: 'hearts' },
  { val: 11, displayVal: 'Ace', suit: 'hearts' },
  { val: 2, displayVal: '2', suit: 'diamonds' },
  { val: 3, displayVal: '3', suit: 'diamonds' },
  { val: 4, displayVal: '4', suit: 'diamonds' },
  { val: 5, displayVal: '5', suit: 'diamonds' },
  { val: 6, displayVal: '6', suit: 'diamonds' },
  { val: 7, displayVal: '7', suit: 'diamonds' },
  { val: 8, displayVal: '8', suit: 'diamonds' },
  { val: 9, displayVal: '9', suit: 'diamonds' },
  { val: 10, displayVal: '10', suit: 'diamonds' },
  { val: 10, displayVal: 'Jack', suit: 'diamonds' },
  { val: 10, displayVal: 'Queen', suit: 'diamonds' },
  { val: 10, displayVal: 'King', suit: 'diamonds' },
  { val: 11, displayVal: 'Ace', suit: 'diamonds' },
  { val: 2, displayVal: '2', suit: 'clubs' },
  { val: 3, displayVal: '3', suit: 'clubs' },
  { val: 4, displayVal: '4', suit: 'clubs' },
  { val: 5, displayVal: '5', suit: 'clubs' },
  { val: 6, displayVal: '6', suit: 'clubs' },
  { val: 7, displayVal: '7', suit: 'clubs' },
  { val: 8, displayVal: '8', suit: 'clubs' },
  { val: 9, displayVal: '9', suit: 'clubs' },
  { val: 10, displayVal: '10', suit: 'clubs' },
  { val: 10, displayVal: 'Jack', suit: 'clubs' },
  { val: 10, displayVal: 'Queen', suit: 'clubs' },
  { val: 10, displayVal: 'King', suit: 'clubs' },
  { val: 11, displayVal: 'Ace', suit: 'clubs' },
  { val: 2, displayVal: '2', suit: 'spades' },
  { val: 3, displayVal: '3', suit: 'spades' },
  { val: 4, displayVal: '4', suit: 'spades' },
  { val: 5, displayVal: '5', suit: 'spades' },
  { val: 6, displayVal: '6', suit: 'spades' },
  { val: 7, displayVal: '7', suit: 'spades' },
  { val: 8, displayVal: '8', suit: 'spades' },
  { val: 9, displayVal: '9', suit: 'spades' },
  { val: 10, displayVal: '10', suit: 'spades' },
  { val: 10, displayVal: 'Jack', suit: 'spades' },
  { val: 10, displayVal: 'Queen', suit: 'spades' },
  { val: 10, displayVal: 'King', suit: 'spades' },
  { val: 11, displayVal: 'Ace', suit: 'spades' }
];

 /**
  * Represents a card player (including dealer).
  * @constructor
  * @param {string} name - The name of the player
  */
 class CardPlayer {
  constructor (name) {this.name = name;}

  hand = [];

  drawCard() { let drawn = cards.splice(Math.floor(Math.random()*cards.length),1); 
    this.hand.push(...drawn);}
    


}; //TODO

// // CREATE TWO NEW CardPlayers
// const dealer; // TODO
// const player; // TODO
const player = new CardPlayer('Alex');
const dealer = new CardPlayer('John');



 /**
  * Calculates the score of a Blackjack hand
  * @param {Array} hand - Array of card objects with val, displayVal, suit properties
  * @returns {Object} blackJackScore
  * @returns {number} blackJackScore.total
  * @returns {boolean} blackJackScore.isSoft
  */

const calcPoints = (hand) => {
   // CREATE FUNCTION HERE
         
    let total = 0;
    let isSoft = false;

       
    for (let i = 0; i < hand.length; i++) {

      if(hand[i].displayVal !== 'Ace') {
       
        total += hand[i].val; 
        isSoft = false;
        
      }//add regular values

      else if (hand[i].displayVal === 'Ace' && total <= 10) //can reach no higher than 21
        {
            total+= 11;
            isSoft = true;
            
        }
        else if (hand[i].displayVal === 'Ace' && total > 10) //count Ace as 1
        {
          total += 1
          isSoft = false;
          
        }
        
    }
    return blackJackScore = {total:total, isSoft:isSoft};
    
} 
 

/**
  * Determines whether the dealer should draw another card.
  * 
  * @param {Array} dealerHand Array of card objects with val, displayVal, suit properties
  * @returns {boolean} whether dealer should draw another card
  */
 const dealerShouldDraw = (dealerHand) => {
  // CREATE FUNCTION HERE

  const drawAnotherCard = false;

  if (drawAnotherCard === true) {drawCard()}
  

   if(dealerHand <= 16) { drawAnotherCard = true;}
   else if(dealerHand === 17 && dealerHand.displayVal === 'Ace' && dealerHand.val === 11) {drawAnotherCard = true;}
   else if(dealerHand >= 17){drawAnotherCard = false;}
   
 }

 /**
  * Determines the winner if both player and dealer stand
  * @param {number} playerScore 
  * @param {number} dealerScore 
  * @returns {string} Shows the player's score, the dealer's score, and who wins
  */
 const determineWinner = (playerScore, dealerScore) => {
  // CREATE FUNCTION HERE
   if(playerScore < dealerScore) {return 'Dealer wins!';}
   else if (playerScore > dealerScore) {return 'Player wins!';}
   else if (playerScore === dealerScore) {return 'There is a tie!';}

   return `Player has ${playerScore} points and Dealer has ${dealerScore} points!`
 }

 /**
 * Creates user prompt to ask if they'd like to draw a card
  * @param {number} count 
  * @param {string} dealerCard 
  */
 const getMessage = (count, dealerCard) => {
  return `Dealer showing ${dealerCard.displayVal}, your count is ${count}.  Draw card?`
 }

 /**
  * Logs the player's hand to the console
  * @param {CardPlayer} player 
  */
 const showHand = (player) => {
   const displayHand = player.hand.map((card) => card.displayVal);
   console.log(`${player.name}'s hand is ${displayHand.join(', ')} (${calcPoints(player.hand).total})`);
 }

 /**
  * Runs Blackjack Game
  */
 const startGame = function() {
   player.drawCard();
   dealer.drawCard();
   player.drawCard();
   dealer.drawCard();

   let playerScore = calcPoints(player.hand).total;
   showHand(player);
   while (playerScore < 21 && confirm(getMessage(playerScore, dealer.hand[0]))) {
     player.drawCard();
     playerScore = calcPoints(player.hand).total;
     showHand(player);
   }
   if (playerScore > 21) {
     return 'You went over 21 - you lose!';
   }
   console.log(`Player stands at ${playerScore}`);

   let dealerScore = calcPoints(dealer.hand).total;
   while (dealerScore < 21 && dealerShouldDraw(dealer.hand)) {
     dealer.drawCard();
     dealerScore = calcPoints(dealer.hand).total;
     showHand(dealer);
   }
   if (dealerScore > 21) {
     return 'Dealer went over 21 - you win!';
   }
   console.log(`Dealer stands at ${dealerScore}`);

   return determineWinner(playerScore, dealerScore);
 }
  console.log(startGame());
