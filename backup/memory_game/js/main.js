var cards = ['queen', 'queen', 'king', 'king'];
//declaring array containing 4 items [2 king && 2 queen]

var cardsInPlay = [];
//Container for active cards

var cardOne = cards[0];
//Storing value of first card in cards array as cardOne

var cardTwo = cards[2];
//Storing value of third card in cards array as cardTwo

cardsInPlay.push(cardOne)
//Utillizing the .push() method, the value stored in cardOne is being added as the last value on the array of cards in play.

//console.log('User flipped the queen');


cardsInPlay.push(cardTwo)
//Utillizing the .push() method, the value stored in cardTwo is being added as the last value on the array of cards in play.

//console.log('User flipped the king');

if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
} else {
    alert("Sorry, try again");
}
}
