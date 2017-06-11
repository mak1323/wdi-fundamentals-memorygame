//var cardOne = "queen";
//var cardTwo = "queen";
//var cardThree = "king";
//var cardFour = "king";

var cards = ["queen", "queen", "king", "king"];

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

var flipcard = function (cardId) {
	console.log("User flipped a " + cards[cardId] + ".");
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
}



