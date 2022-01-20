const cardArray = [
  {
    name: 'fries',
    img: 'images/fries.png'
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png'
  },
  {
    name: 'fries',
    img: 'images/fries.png'
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png'
  }
]

const grid = document.querySelector('.grid');
let resultDisplay = document.querySelector("#result");
resultDisplay.style.color = "blue";
resultDisplay.textContent = "0"
let cardsWon =  [];
let cardChosen = []; 
let cardChosenIds = [];
//Create your board
function createdBoard(){
  cardArray.sort(() => 0.5 - Math.random());
  const cards = cardArray.map((item, index) => {
    let card = document.createElement('img');
    card.setAttribute('src', 'images/blank.png');
    card.setAttribute('data-id', index);
    card.style.border = "1px solid black";
    card.addEventListener('click', flipCard)
    return card;
  });
  grid.append(...cards)
} 
function checkForMatch(){
  const cards = cardChosenIds.map( id => {
    return document.querySelector(`img[data-id='${id}']`)
  })
  const isMatching = cards
    .reduce((card1, card2) => {
      return card1.getAttribute("src") === card2.getAttribute("src")
    })
    if(isMatching){
      alert('You found a match')
      cards.forEach((card) => { card.src = "images/white.png"})
      cardsWon.push(cardChosenIds)

    }else {
      alert("Sorry, keep trying")
      cards.forEach((card) => { card.src = "images/blank.png"})
    }
    cardChosen = []
    cardChosenIds = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "DONE!!";
      alert("Congratulation!!")
      grid.innerHTML = "";
      resultDisplay.textContent = "0"
      createdBoard()
    }
}
function flipCard(){
  const cardId = this.getAttribute("data-id");
  cardChosen.push(cardArray[cardId].name);
  cardChosenIds.push(cardId);
  this.setAttribute("src", cardArray[cardId].img)
  if(cardChosenIds.length === 2) {
    setTimeout(checkForMatch, 500)
  }
}
createdBoard();