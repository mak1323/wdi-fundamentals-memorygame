//var cardOne = "queen";
//var cardTwo = "queen";
//var cardThree = "king";
//var cardFour = "king";

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne = cards[0];

var cardTwo = cards[2]

cardsInPlay.push(cardOne)

cardsInPlay.push(cardTwo)


console.log("User flipped " + cardOne)

console.log("User flipped " + cardTwo)

if (2 === cardsInPlay.length) {
	if (cardOne === cardTwo) {
		alert("Your found a match!")
	} else if (cardOne !== cardTwo) {
		alert("Try again.")
	}
}