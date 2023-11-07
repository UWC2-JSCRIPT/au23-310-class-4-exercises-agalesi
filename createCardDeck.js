/**
 * Returns an array of 52 Cards
 * @returns {Array} deck - a deck of cards
 */
const getDeck = () => {
  const cards = [];
   
  const suits = ['clubs', 'hearts', 'diamonds', 'spades'];

  for (let i = 0; i < suits.length; i++) {
    // create an array of 13 objects
    for (let j = 0; j <= 10; j++) {

      cards.push({ val:j, displayVal: j.toString(), suit: suits[i]});

      const tenCards = ['Jack', 'King', 'Queen'];
      for (let k = 0; k < tenCards.length; k++) {
        cards.push({val: 10, displayVal: tenCards[k], suit: suits[i]});
      }

      cards.push({val: 11, displayVal: 'Ace', suit: suits[i]});

    }

    return cards;
    
    
}}

// CHECKS


const deck = getDeck()


console.log(`Deck length equals 52? ${deck.length === 52}`)

const randomCard = deck[Math.floor(Math.random() * 52)]

const cardHasVal =
  randomCard && randomCard.val && typeof randomCard.val === 'number' 
console.log(`Random card has val? ${cardHasVal}`)

const cardHasSuit =
  randomCard && randomCard.suit && typeof randomCard.suit === 'string'
console.log(`Random card has suit? ${cardHasSuit}`)

const cardHasDisplayVal =
  randomCard &&
  randomCard.displayVal && typeof randomCard.displayVal === 'string'
console.log(`Random card has display value? ${cardHasDisplayVal}`)

