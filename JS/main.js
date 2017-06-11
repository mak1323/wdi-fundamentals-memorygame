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
	if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
		alert("Your found a match!");
		cardsInPlay = cardsInPlayReset;
	} else {
		alert("Try again.");
		cardsInPlay = cardsInPlayReset;
	}
	}
}

var flipcard = function() {
	cardId = this.getAttribute('data-id');
	console.log("User flipped a " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage )
	checkForMatch();
}

var createGameBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipcard);
		document.getElementById('gameboard').appendChild(cardElement);
	}
}

createGameBoard()