const elemCardsContainer = document.querySelector(".cards_container");
const dogsArray = [
  "imgs/afghan-hound.jpg",
  "imgs/akita-inu.jpg",
  "imgs/alaskan-malamute.jpg",
  "imgs/bernese-mountain.jpg",
  "imgs/german-shepherd.jpg",
  "imgs/great-pyrenees.jpg",
  "imgs/samoyed.jpg",
  "imgs/tibetan-mastiff.jpg",
];
let elemGuess = document.querySelector(".guess");

let cardsArray = [...dogsArray, ...dogsArray]; //double the dogs array
const cardsCount = cardsArray.length;
console.log(cardsArray);
let guess = 0;
let revealedCount = 0;
let activeCard = null;
let endOfTurn = false;

function buildCard(dog) {
  const elemDog = document.createElement("div"); // create a div
  elemDog.classList.add("card"); // add the class to the div element
  elemDog.setAttribute("data-image", dog);
  elemDog.setAttribute("data-revealed", "false");
  elemDog.addEventListener("click", () => {
    const isRevealed = elemDog.getAttribute("data-revealed");

    if (endOfTurn || isRevealed == "true" || elemDog == activeCard) {
      return;
    }

    elemDog.innerHTML = `<img src= ${dog}>`;
    if (!activeCard) {
      activeCard = elemDog;
      console.log(activeCard);
      return;
    }
    const imgToMatch = activeCard.getAttribute("data-image");
    if (imgToMatch === dog) {
      elemDog.setAttribute("data-revealed", "true");
      activeCard.setAttribute("data-revealed", "true");
      endOfTurn = false;
      activeCard = null;
      revealedCount += 2;
      if( revealedCount == 16){
       ``
        elemCardsContainer.innerHTML = `congratulations, you won!`;
      }
      guess++;
      elemGuess.innerHTML = `Guess: ${guess}`;
      return;
    }
    endOfTurn = true;
    guess++;
    elemGuess.innerHTML = `Guess: ${guess}`;

    setTimeout(() => {
      elemDog.innerHTML = null;
      activeCard.innerHTML = null;
      endOfTurn = false;
      activeCard = null;
    }, 1000);
  });

  return elemDog;
}

function createBoard() {
  for (let i = 0; i < cardsCount; i++) {
    const randomIndex = Math.floor(Math.random() * cardsArray.length);
    const dog = cardsArray[randomIndex];
    const card = buildCard(dog);
    cardsArray.splice(randomIndex, 1);
    elemCardsContainer.appendChild(card); // appaend the cards into the container div
  }
}
createBoard();

function newGame() {
  elemCardsContainer.innerHTML = null;
  guess = 0;
  revealedCount = 0;
  elemGuess.innerHTML = `Guess:`;
  cardsArray = [...dogsArray, ...dogsArray];
  createBoard();
}
