//var cardOne = "queen";
//var cardTwo = "queen";
//var cardThree = "king";
//var cardFour = "king";

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
]

var cardsInPlay = [];

var cardsInPlayReset = []

var checkForMatch = function() {
	if (2 === cardsInPlay.length) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("Your found a match!");
		cardsInPlay = cardsInPlayReset;
	} else {
		console.log("Try again.");
		cardsInPlay = cardsInPlayReset;
	}
	}
}

var flipcard = function(cardId) {
	console.log("User flipped a " + cards[cardId].rank);
	console.log(cards[cardId].cardImage)
	console.log(cards[cardId].suit)
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
}
