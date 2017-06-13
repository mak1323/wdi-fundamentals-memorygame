

let cards = [
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

let cardsInPlay = [];
let wrongGuess = false


let checkForMatch = function() {
	let cardsInPlayReset = []
	if (2 === cardsInPlay.length) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		cardsInPlay = cardsInPlayReset
		alert("Your found a match!");
	} else {
		alert("Try again.");
		cardsInPlay = cardsInPlayReset
	}
	}
}

let flipcard = function() {
	cardId = this.getAttribute('data-id');
	console.log("User flipped a " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage )
	checkForMatch();
}

let createGameBoard = function() {
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipcard);
		document.getElementById('gameboard').appendChild(cardElement);
	}
}

createGameBoard()
